"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Particle = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
};

const POINT_COLOR = 0xfaffe7;
const LINE_COLOR = 0xdefe66;
const CONNECTION_DISTANCE = 165;
const MIN_CONNECTIONS = 2;
const MAX_CONNECTIONS = 6;
const POINTER_RADIUS = 240;
const POINTER_PULL_DISTANCE = 14;
const POINTER_MAX_CONNECTIONS = 10;

const ParticleNetwork = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    const pointGeometry = new THREE.BufferGeometry();
    const lineGeometry = new THREE.BufferGeometry();
    const pointMaterial = new THREE.PointsMaterial({
      color: POINT_COLOR,
      size: 2.6,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: false,
      depthWrite: false,
    });
    const lineMaterial = new THREE.LineBasicMaterial({
      color: LINE_COLOR,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let pointPositions = new Float32Array();
    let linePositions = new Float32Array();
    let animationFrame = 0;
    let isVisible = true;
    let width = 1;
    let height = 1;
    let pointerX = 0;
    let pointerY = 0;
    let pointerActive = false;

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    scene.add(lines, points);

    const updateConnections = () => {
      let lineIndex = 0;
      const connectedPairs = new Set<string>();

      for (let i = 0; i < particles.length; i += 1) {
        let connections = 0;
        const currentX = pointPositions[i * 3];
        const currentY = pointPositions[i * 3 + 1];
        const candidates = Array.from(
          { length: particles.length - 1 },
          (_, candidateIndex) => {
            const index =
              candidateIndex >= i ? candidateIndex + 1 : candidateIndex;
            const deltaX = currentX - pointPositions[index * 3];
            const deltaY = currentY - pointPositions[index * 3 + 1];

            return {
              index,
              distanceSquared: deltaX * deltaX + deltaY * deltaY,
            };
          },
        );

        candidates.sort(
          (first, second) => first.distanceSquared - second.distanceSquared,
        );

        for (const candidate of candidates) {
          if (connections >= MAX_CONNECTIONS) break;

          const j = candidate.index;
          const targetX = pointPositions[j * 3];
          const targetY = pointPositions[j * 3 + 1];

          if (
            candidate.distanceSquared >
              CONNECTION_DISTANCE * CONNECTION_DISTANCE &&
            connections >= MIN_CONNECTIONS
          ) {
            break;
          }

          const connectionKey = i < j ? `${i}-${j}` : `${j}-${i}`;

          if (connectedPairs.has(connectionKey)) {
            connections += 1;
            continue;
          }

          connectedPairs.add(connectionKey);

          linePositions[lineIndex] = currentX;
          linePositions[lineIndex + 1] = currentY;
          linePositions[lineIndex + 2] = 0;
          linePositions[lineIndex + 3] = targetX;
          linePositions[lineIndex + 4] = targetY;
          linePositions[lineIndex + 5] = 0;
          lineIndex += 6;
          connections += 1;
        }
      }

      if (pointerActive) {
        let pointerConnections = 0;

        for (let i = 0; i < particles.length; i += 1) {
          if (pointerConnections >= POINTER_MAX_CONNECTIONS) break;

          const particleX = pointPositions[i * 3];
          const particleY = pointPositions[i * 3 + 1];
          const deltaX = pointerX - particleX;
          const deltaY = pointerY - particleY;

          if (deltaX * deltaX + deltaY * deltaY > POINTER_RADIUS ** 2) {
            continue;
          }

          linePositions[lineIndex] = pointerX;
          linePositions[lineIndex + 1] = pointerY;
          linePositions[lineIndex + 2] = 0;
          linePositions[lineIndex + 3] = particleX;
          linePositions[lineIndex + 4] = particleY;
          linePositions[lineIndex + 5] = 0;
          lineIndex += 6;
          pointerConnections += 1;
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
    };

    const renderFrame = () => {
      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;
        }

        let displayX = particle.x;
        let displayY = particle.y;

        if (pointerActive) {
          const deltaX = pointerX - particle.x;
          const deltaY = pointerY - particle.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance > 0 && distance < POINTER_RADIUS) {
            const pull =
              (1 - distance / POINTER_RADIUS) * POINTER_PULL_DISTANCE;
            displayX += (deltaX / distance) * pull;
            displayY += (deltaY / distance) * pull;
          }
        }

        pointPositions[index * 3] = displayX;
        pointPositions[index * 3 + 1] = displayY;
      });

      pointGeometry.attributes.position.needsUpdate = true;
      updateConnections();
      renderer.render(scene, camera);

      if (isVisible && !reducedMotion) {
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const resize = () => {
      width = Math.max(container.clientWidth, 1);
      height = Math.max(container.clientHeight, 1);
      const particleCount = Math.max(
        42,
        Math.min(118, Math.round((width * height) / 14000)),
      );
      const leftParticleCount = Math.floor(particleCount * 0.38);
      const rightParticleCount = Math.floor(particleCount * 0.38);
      const bottomParticleCount = Math.floor(particleCount * 0.18);
      const leftClusterWidth = Math.min(width * 0.38, 560);
      const rightClusterWidth = Math.min(width * 0.38, 560);

      camera.left = 0;
      camera.right = width;
      camera.top = 0;
      camera.bottom = height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);

      particles = Array.from({ length: particleCount }, (_, index) => {
        let x: number;
        let y: number;

        if (index < leftParticleCount) {
          x = Math.pow(Math.random(), 1.45) * leftClusterWidth;
          y = Math.pow(Math.random(), 1.35) * height * 0.52;
        } else if (index < leftParticleCount + rightParticleCount) {
          x = width - Math.pow(Math.random(), 1.45) * rightClusterWidth;
          y = height - Math.pow(Math.random(), 1.25) * height * 0.62;
        } else if (
          index <
          leftParticleCount + rightParticleCount + bottomParticleCount
        ) {
          x = width * 0.18 + Math.random() * width * 0.82;
          y = height - Math.pow(Math.random(), 1.55) * height * 0.16;
        } else {
          x = Math.random() * width;
          y = Math.random() * height;
        }

        return {
          x,
          y,
          velocityX: (Math.random() - 0.5) * 0.18,
          velocityY: (Math.random() - 0.5) * 0.18,
        };
      });
      pointPositions = new Float32Array(particleCount * 3);
      linePositions = new Float32Array(
        (particleCount * MAX_CONNECTIONS + POINTER_MAX_CONNECTIONS) * 6,
      );
      pointGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(pointPositions, 3),
      );
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions, 3),
      );
      window.cancelAnimationFrame(animationFrame);
      renderFrame();
    };

    const resizeObserver = new ResizeObserver(resize);
    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerActive =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (pointerActive) {
        pointerX = event.clientX - rect.left;
        pointerY = event.clientY - rect.top;
      }
    };
    const handlePointerLeave = () => {
      pointerActive = false;
    };
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      window.cancelAnimationFrame(animationFrame);

      if (isVisible) renderFrame();
    });

    resizeObserver.observe(container);
    intersectionObserver.observe(container);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", handlePointerLeave);
    resize();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      pointGeometry.dispose();
      lineGeometry.dispose();
      pointMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={
        className ??
        "pointer-events-none absolute top-0 bottom-[-80px] md:bottom-[-120px] left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      }
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
