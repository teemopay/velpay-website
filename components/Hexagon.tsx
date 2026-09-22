"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 场景
    const scene = new THREE.Scene();

    // 相机
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 40;

    // 渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.localClippingEnabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // 六边形组
    const group = new THREE.Group();
    scene.add(group);

    const hexList: {
      mesh: THREE.Mesh;
      speed: number;
      floatPhase: number;
    }[] = [];

    // 创建六边形
    const hexGeometry = new THREE.CircleGeometry(2, 6);

    for (let i = 0; i < 15; i++) {
      const side = Math.random() < 0.5 ? -1 : 1; // 左右边
      const x = side * (18 + Math.random() * 24); // -42~-18 或 18~42
      const y = (Math.random() - 0.5) * 30; // 上下分布
      const z = (Math.random() - 0.5) * 6; // 前后分布

      const material = new THREE.MeshBasicMaterial({
        color: "#1c1c1c",
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(hexGeometry, material);
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(0.5 + Math.random() * 2);
      mesh.rotation.z = Math.random() * Math.PI;

      group.add(mesh);

      hexList.push({
        mesh,
        speed: 0.005 + Math.random() * 0.01,
        floatPhase: Math.random() * Math.PI * 2,
      });
    }

    // 动画
    const animate = () => {
      requestAnimationFrame(animate);

      const t = Date.now() * 0.001;
      hexList.forEach(({ mesh, speed, floatPhase }) => {
        mesh.rotation.z += speed;
        mesh.position.y += Math.sin(t + floatPhase) * 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // 自适应窗口
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-screen h-screen bg-black" />;
}
