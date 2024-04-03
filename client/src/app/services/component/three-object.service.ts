// three-object.service.ts
import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeObjectService {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  constructor() { }

  init(container: HTMLDivElement): void {
    console.log('Initializing Three.js scene...');
    console.log('Container dimensions:', container.clientWidth, container.clientHeight);

    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    const aspect = container.clientWidth / container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    this.camera.position.z = 5;

    // Create renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Add a cube to the scene for demonstration
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    // Render the scene
    this.render();
  }

  private render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
