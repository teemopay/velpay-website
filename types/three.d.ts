declare module 'three/addons/controls/OrbitControls.js' {
  import { Camera, Object3D } from 'three';
  export class OrbitControls {
    constructor(camera: Camera, domElement?: HTMLElement);
    target: Object3D;
    update(): void;
    enablePan: boolean;
    enableDamping: boolean;
  }
}

declare module 'three/addons/renderers/CSS2DRenderer.js' {
  import { Scene, Camera } from 'three';
  export class CSS2DRenderer {
    constructor();
    domElement: HTMLElement;
    setSize(width: number, height: number): void;
    render(scene: Scene, camera: Camera): void;
  }

  export class CSS2DObject {
    constructor(element: HTMLElement);
    element: HTMLElement;
    position: any;
    getWorldPosition(target: any): void;
  }
} 