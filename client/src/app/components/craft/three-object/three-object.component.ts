import { Component, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { ThreeObjectService } from '../../../services/component/three-object.service';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SelectedItemService } from '../../../services/page/craft/selected-item.service';

@Component({
  selector: 'app-three-object',
  standalone: true,
  imports: [],
  templateUrl: './three-object.component.html',
  styleUrls: ['./three-object.component.css']
})
export class ThreeObjectComponent implements AfterViewInit, OnInit {
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private selectedObject: THREE.Object3D | null = null;
  // Dragging events
  isDragging = false;
  initialX = 0;
  initialY = 0;

  constructor(private cdr: ChangeDetectorRef, private selectedItemService: SelectedItemService) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  rayCaster(camera: THREE.PerspectiveCamera, scene: THREE.Scene) {
    this.raycaster.setFromCamera(this.mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object as THREE.Mesh; // Cast to Mesh
      // Highlight the selected object
      this.highlightSelectedObject(clickedObject);
      // console.log('Structure: ', clickedObject.name)
      this.selectedItemService.changeSelectedItem(
        {
          name: clickedObject.name,
          pos: `${clickedObject.position.x},${clickedObject.position.y},${clickedObject.position.z}`
        })
    } else {
      this.highlightSelectedObject(null);
      // this.selectedItemService.changeSelectedItem(null)
    }
  }

  highlightSelectedObject(object: THREE.Object3D | null) {
    // Remove highlight from previously selected object
    if (this.selectedObject && this.selectedObject instanceof THREE.Mesh) {
      this.removeEmissive(this.selectedObject);
    }

    // Update selected object
    this.selectedObject = object as THREE.Mesh | null;

    // Apply highlight to the selected object
    if (this.selectedObject && this.selectedObject instanceof THREE.Mesh) {
      this.applyEmissive(this.selectedObject);
    }
  }

  removeEmissive(mesh: THREE.Mesh) {
    if (mesh.material) {
      const material = mesh.material as THREE.Material | THREE.Material[];
      if (Array.isArray(material)) {
        material.forEach(mat => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.emissive.setHex(0x000000);
            mat.wireframe = false
          }
        });
      } else {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.emissive.setHex(0x000000);
          material.wireframe = false
        }
      }
    }
  }

  applyEmissive(mesh: THREE.Mesh) {
    if (mesh.material) {
      const material = mesh.material as THREE.Material | THREE.Material[];
      if (Array.isArray(material)) {
        material.forEach(mat => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.emissive.setHex(0xff0000);
            mat.wireframe = true
          }
        });
      } else {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.emissive.setHex(0xff0000);
          material.wireframe = true
        }
      }
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // 3D CONFIGURATION
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 80000);

    // SCENE: BACKGROUND COLOR
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    if (renderer) {
      renderer.setPixelRatio(window.devicePixelRatio);
      // SCENE: SIZE
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      // SCENE: INJECT INTO HTML
      let canvas: HTMLElement | null = document.getElementById("three-canvas");
      if (canvas !== null && renderer.domElement) {
        canvas.appendChild(renderer.domElement);
      } else {
        console.error("Canvas element with id 'three-canvas' not found or renderer not initialized.");
      }
    }

    // LIGHT: TOP
    var directionalLight = new THREE.HemisphereLight(0xffffff, 6);
    directionalLight.position.set(1, 3, 3); // Adjust the position as needed
    scene.add(directionalLight);
    // LIGHT: BOTTOM
    var hemisphereLight = new THREE.HemisphereLight(0x090909, 0x000000, 1);
    hemisphereLight.position.set(-1, -3, -3); // Adjust the position as needed
    scene.add(hemisphereLight);

    // HELPERS
    const gridHelper = new THREE.GridHelper(400, 40, 0xffc800, 0x808080);
    // gridHelper.position.y = 0;
    // gridHelper.position.x = 0;
    const gridGroup = new THREE.Group();
    gridGroup.add(gridHelper);
    gridHelper.position.set(0, 0, 0);
    gridGroup.userData = { clickable: false };
    gridHelper.raycast = () => [];
    scene.add(gridGroup);

    //GLTF MODEL
    const gltfLoader = new GLTFLoader();
    const modelPath = '../../../../assets/3d_objects/board/long/oldschool_skateboard.glb';
    // GLTF MODEL: TEXTURE & COLOR
    gltfLoader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        // GLTF FILE STYLE: GRIPTAPE OBJECT
        if (child.name === 'gripTape') {
          // Check if the object has a material
          if (child instanceof THREE.Mesh && child.material) {
            var material = child.material;
            // Check if the material is a MeshBasicMaterial (for color)
            if (material instanceof THREE.MeshBasicMaterial) {
              material.color.setHex(0xff0000);
            }
            // Check if the material is a MeshPhongMaterial or MeshStandardMaterial (for texture)
            else if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial) {
              var textureLoader = new THREE.TextureLoader();
              // Load texture
              textureLoader.load('../../../../assets/3d_objects/board/long/textures/black.png', function (texture) {
                material.map = texture;
                material.needsUpdate = true;
              });
            }
          }
        }
        // GLTF FILE STYLE: BOARD OBJECT
        else if (child.name === 'board') {
          if (child instanceof THREE.Mesh && child.material) {
            var material = child.material;
            if (material instanceof THREE.MeshBasicMaterial) {
              material.color.setHex(0xff0000);
            }
            else if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial) {
              var textureLoader = new THREE.TextureLoader();
              textureLoader.load('../../../../assets/3d_objects/board/long/textures/skin1.jpeg', function (texture) {
                material.map = texture;
                material.needsUpdate = true;
              });
            }
          }
        }
        // GLTF FILE STYLE: WHEELS OBJECT
        else if (child.name === 'wheels') {
          if (child instanceof THREE.Mesh && child.material) {
            var material = child.material;
            if (material instanceof THREE.MeshBasicMaterial) {
              material.color.setColorName('red');
            }
            else if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial) {
              var textureLoader = new THREE.TextureLoader();
              textureLoader.load('../../../../assets/3d_objects/board/long/textures/red.png', function (texture) {
                material.map = texture;
                material.needsUpdate = true;
              });
            }
          }
        }
        // GLTF FILE STYLE: TRUCK OBJECT
        else if (child.name === 'trucks' || child.name === 'truck' || child.name === 'truck_1') {
          if (child instanceof THREE.Mesh && child.material) {
            var material = child.material;
            if (material instanceof THREE.MeshBasicMaterial) {
              material.color.setHex(0xff0000);
            }
            else if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshStandardMaterial) {
              var textureLoader = new THREE.TextureLoader();
              textureLoader.load('../../../../assets/3d_objects/board/long/textures/darkgray.png', function (texture) {
                material.map = texture;
                material.needsUpdate = true;
              });
            }
          }
        }
      });

      // SCALE
      model.scale.set(1, 1, 1);
      scene.add(model);

      console.log(model)
    });

    // CAMERA
    camera.position.set(150, 50, 150);
    // camera.lookAt(0, 0, 0);
    // CAMERA: OrbitControls ()
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI;
    controls.enableZoom = true;  // Enable or disable zooming
    controls.enablePan = true;   // Enable or disable panning
    controls.enableRotate = true; // Enable or disable rotation

    // EVENT LISTENERS
    window.addEventListener('click', (event) => {
      // Calculate mouse position in normalized device coordinates
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      // Raycasting from camera to scene objects
      this.rayCaster(camera, scene);
    }, false);

    // ANIMATE
    const animate = (): void => {
      requestAnimationFrame(animate);
      this.rayCaster(camera, scene)
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      renderer.render(scene, camera);
      this.cdr.detectChanges();
    };
    animate();
    this.render(renderer, camera, scene)
  }

  render(rendererr: any, cam: any, scn: any) {
    if (rendererr && scn && cam) {
      requestAnimationFrame(() => this.render(rendererr, cam, scn));
      this.rayCaster(cam, scn);
      rendererr.render(scn, cam);
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 1) { // Right mouse button clicked
      this.isDragging = true;
      document.body.style.cursor = 'grabbing'; // Change cursor to indicate dragging
      this.initialX = event.clientX;
      this.initialY = event.clientY;
      // Apply grabbing cursor directly to the draggable element
      const draggableElement = document.getElementById('draggable');
      if (draggableElement) {
        alert('being dragged')
        draggableElement.style.cursor = 'grabbing';
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const dx = event.clientX - this.initialX;
      const dy = event.clientY - this.initialY;
      // Implement your dragging logic here, e.g., updating position
      // Example: this.updatePosition(dx, dy);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.isDragging) {
      this.isDragging = false;
      document.body.style.cursor = 'auto'; // Restore default cursor when dragging ends
      // Apply default cursor directly to the draggable element
      const draggableElement = document.getElementById('draggable');
      if (draggableElement) {
        draggableElement.style.cursor = 'pointer';
      }
    }
  }

}
