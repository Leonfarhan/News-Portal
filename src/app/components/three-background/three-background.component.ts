import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-background',
  standalone: true,
  template: `
    <canvas #canvas class="fixed top-0 left-0 w-full h-full -z-10"></canvas>
  `
})
export class ThreeBackgroundComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;

  ngOnInit() {
    this.initThree();
    this.animate();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x1a73e8
    });

    this.particles = new THREE.Points(particlesGeometry, material);
    this.scene.add(this.particles);
    this.camera.position.z = 2;
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.particles.rotation.x += 0.001;
    this.particles.rotation.y += 0.001;
    this.renderer.render(this.scene, this.camera);
  }
}