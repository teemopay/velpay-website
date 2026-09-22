"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
const WaveThree = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let SEPARATION = 40,
      AMOUNTX = 130,
      AMOUNTY = 35;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let count = 0;

    let frameId: number;

    const container = containerRef.current!;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    camera = new THREE.PerspectiveCamera(120, width / height, 1, 10000);
    camera.position.y = 150;
    camera.position.z = 300;
    camera.rotation.x = 0.35;

    scene = new THREE.Scene();

    const numParticles = AMOUNTX * AMOUNTY;
    const positions = new Float32Array(numParticles * 3);

    let i = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        positions[i + 1] = 0;
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const sprite = new THREE.TextureLoader().load("/images/disc.png");

    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 3,
      map: sprite,
      transparent: true,
      alphaTest: 0.5,
      depthWrite: false,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const onWindowResize = () => {
      const newWidth = container.offsetWidth;
      const newHeight = container.offsetHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onWindowResize);

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const positions = (particles.geometry as THREE.BufferGeometry).attributes
        .position.array as Float32Array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 20 +
            Math.sin((iy + count) * 0.5) * 20;
          i += 3;
        }
      }

      (
        particles.geometry as THREE.BufferGeometry
      ).attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      count += 0.04;
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="wave-container"
      ref={containerRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    />
  );
};

export default WaveThree;
