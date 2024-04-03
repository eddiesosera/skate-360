import { Component, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ThreeObjectService } from '../../../services/component/three-object.service';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three-object',
  standalone: true,
  imports: [],
  templateUrl: './three-object.component.html',
  styleUrls: ['./three-object.component.css']
})
export class ThreeObjectComponent implements AfterViewInit {
  private material!: THREE.MeshStandardMaterial;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  constructor(private cdr: ChangeDetectorRef) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
  }

  rayCaster(camera: THREE.PerspectiveCamera, scene: THREE.Scene) {
    this.raycaster.setFromCamera(this.mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      console.log('Clicked Object:', clickedObject.name);
    }
    console.log('Structure: ', intersects)
  }

  ngAfterViewInit(): void {
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 1000;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // Set the background color with alpha (the last parameter is the alpha value)
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const loader = new THREE.TextureLoader();
    // const texture = loader.load('../../../assets/logos/404_logo.png');

    this.material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      // map: texture 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    let canvas: HTMLElement | null = document.getElementById("three-canvas");

    if (canvas !== null) {
      canvas.appendChild(renderer.domElement);
    } else {
      console.error("Canvas element with id 'three-canvas' not found.");
    }

    const light = new THREE.DirectionalLight(0xFFFFFF, 3);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // Load the GLTF model
    const gltfLoader = new GLTFLoader();
    const modelPath = '../../../assets/3d_objects/board/oldschool_skateboard.glb';

    gltfLoader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = this.material;
        }
      });

      // Set the scale of the loaded model
      model.scale.set(1, 1, 1); // Adjust these values as needed

      scene.add(model);
    });

    // Set initial camera position
    camera.position.set(0, 5, 20);
    camera.lookAt(0, 0, 0);

    // Add OrbitControls to enable zooming
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableZoom = true;  // Enable or disable zooming
    controls.enablePan = true;   // Enable or disable panning
    controls.enableRotate = true; // Enable or disable rotation

    const animate = (): void => {
      requestAnimationFrame(animate);

      this.rayCaster(camera, scene)

      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

      renderer.render(scene, camera);

      this.cdr.detectChanges();
    };

    animate();
  }
}
