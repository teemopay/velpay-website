"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";

const locations = [
  {
    name: "Mexico",
    lng: -99.1332,
    lat: 19.4326,
    flag: "/images/country/mx-icon.png",
  },
  {
    name: "Peru",
    lng: -77.0428,
    lat: -12.0464,
    flag: "/images/country/pe-icon.png",
  },
  {
    name: "Colombia",
    lng: -74.0721,
    lat: 4.711,
    flag: "/images/country/co-icon.png",
  },

  {
    name: "Argentina",
    lng: -58.3816,
    lat: -34.6037,
    flag: "/images/country/ar-icon.png",
  },
  {
    name: "Chile",
    lng: -70.6693,
    lat: -33.4489,
    flag: "/images/country/ch-icon.png",
  },
  {
    name: "Brazil",
    lng: -47.882778,
    lat: -15.793889,
    flag: "/images/country/brl-icon.png",
  },

  {
    name: "Pakistan",
    lng: 73.0479,
    lat: 33.6844,
    flag: "/images/country/pk-icon.png",
  },
  {
    name: "Indonesia",
    lng: 106.8456,
    lat: -6.2088,
    flag: "/images/country/ind-icon.png",
  },
  {
    name: "Korea",
    lng: 127.7669,
    lat: 35.9078,
    flag: "/images/country/ko-icon.png",
  },
  {
    name: "India",
    lng: 78.9629,
    lat: 20.5937,
    flag: "/images/country/in-icon.png",
  },
  {
    name: "Japan",
    lng: 138.2529,
    lat: 36.2048,
    flag: "/images/country/ja-icon.png",
  },
  {
    name: "Ecuador",
    lng: -78.183406,
    lat: -1.831239,
    flag: "/images/country/ec-icon.png",
  },
  {
    name: "Cambodia",
    lng: 104.990963,
    lat: 12.565679,
    flag: "/images/country/kh-icon.png",
  },
  {
    name: "Vietnam",
    lng: 108.277199,
    lat: 14.058324,
    flag: "/images/country/vn-icon.png",
  },
];

const Globe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRendererRef = useRef<CSS2DRenderer | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.5,
      1000,
    );
    camera.position.set(10, 0, 0);

    const latinAmerica = latLongToVector3(-47.8667, -15.7833, 5.5 + 5);
    camera.position.copy(latinAmerica);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.left = "0px";
    labelRenderer.domElement.style.zIndex = "9";
    container.appendChild(labelRenderer.domElement);
    labelRendererRef.current = labelRenderer;

    const controls = new OrbitControls(camera, labelRenderer.domElement);
    controls.target.set(0, 0.5, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.enableZoom = false;

    const loader = new THREE.TextureLoader();
    let sphere: THREE.Mesh;
    const tagsList: CSS2DObject[] = [];

    const SPHERE_RADIUS = 5.5;

    loader.load(
      "/images/20250509-143153.png",
      (texture) => {
        // texture.encoding = THREE.sRGBEncoding;
        texture.colorSpace = THREE.SRGBColorSpace;

        const material = new THREE.MeshBasicMaterial({
          map: texture,
          color: 0xffffff,
        });
        const geometry = new THREE.SphereGeometry(SPHERE_RADIUS, 64, 64);
        sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        locations.forEach(({ name, lng, lat, flag }) => {
          const label = document.createElement("div");
          label.className = "global_position-box";
          label.innerHTML = `<div class='cont label-box'>
            <div class='label-title'>${name}</div>
            <img src='${flag}' width='30' height='30'/>
          </div>`;
          const tag = new CSS2DObject(label);
          const pos = latLongToVector3(lng, lat, SPHERE_RADIUS + 0.05);
          tag.position.copy(pos);
          sphere.add(tag);
          tagsList.push(tag);
        });
      },
      undefined,
      (err) => console.error("纹理加载失败:", err),
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (sphere) sphere.rotation.y += 0.002;
      controls.update();
      updateLabelOpacity(tagsList, camera);
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      labelRenderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      container.removeChild(labelRenderer.domElement);
    };
  }, []);

  return (
    <div
      className="relative  w-[320px] h-[320px] md:w-[360px] md:h-[360px] mx-auto lg:w-[480px] lg:h-[480px] 2xl:w-[700px] 2xl:h-[700px]"
      ref={containerRef}
    />
  );
};

const latLongToVector3 = (
  longitude: number,
  latitude: number,
  radius: number,
) => {
  const phi = (90 - latitude) * (Math.PI / 180);
  const theta = (longitude + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
};

const updateLabelOpacity = (tags: CSS2DObject[], camera: THREE.Camera) => {
  const ANG1 = 80;
  const ANG2 = 85;
  const origin = new THREE.Vector3(0, 0, 0);

  tags.forEach((tag) => {
    const worldPos = new THREE.Vector3();
    tag.getWorldPosition(worldPos);
    const angle = calc3DAngle(camera.position, origin, worldPos);
    const opacity = scale(clamp(angle, ANG1, ANG2), ANG1, ANG2, 1, 0);
    tag.element.style.opacity = opacity.toString();
  });
};

const calc3DAngle = (A: THREE.Vector3, B: THREE.Vector3, C: THREE.Vector3) => {
  const AB = A.clone().sub(B).normalize();
  const BC = C.clone().sub(B).normalize();
  return Math.acos(AB.dot(BC)) * (180 / Math.PI);
};

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const scale = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

export default Globe;
