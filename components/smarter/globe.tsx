'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// const deg = (d: number) => THREE.MathUtils.degToRad(d);

export default function EarthCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0b1221');

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const dir = new THREE.DirectionalLight(0xffffff, 1.0);
    // dir.position.set(5, 2, 5);
    scene.add(dir);
    scene.add(new THREE.AmbientLight(0x404040, 0.6));

    // Earth
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const loader = new THREE.TextureLoader();

    const earthDay = loader.load('/61772.jpg');
    const normalMap = loader.load('/61772.jpg');
    const specMap = loader.load('/61772.jpg');

    const material = new THREE.MeshPhongMaterial({
      map: earthDay,
      normalMap,
      specularMap: specMap,
      specular: new THREE.Color(0x222222),
      shininess: 15,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Controls with ±30° azimuth clamp, no zoom
    const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.enableZoom = false;
    // controls.enablePan = false;
    // controls.minPolarAngle = deg(60);   // keep above south pole a bit
    // controls.maxPolarAngle = deg(120);  // keep below north pole a bit
    // controls.minAzimuthAngle = deg(-30);
    // controls.maxAzimuthAngle = deg(30);
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.4;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    // remove or comment out the azimuth clamps
    // controls.minAzimuthAngle = deg(-30);
    // controls.maxAzimuthAngle = deg(30);
    controls.minPolarAngle = 0;          // allow pole to pole
    controls.maxPolarAngle = Math.PI;    // = 180°
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;

    // Handle resize
    const onResize = () => {
      const W = container.clientWidth;
      const H = container.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    // Animate
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      frameRef.current = renderer.setAnimationLoop(animate) as unknown as number;
    };
    animate();

    return () => {
      renderer.setAnimationLoop(null);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="w-full  flex items-center justify-center">
      <div ref={ containerRef } className="w-full h-full" />
    </div>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three-stdlib";

// export default function DottedEarth() {
//   const mountRef = useRef<HTMLDivElement | null>(null);
//   const FRAME_ID = useRef<number | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     // Scene, Camera, Renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 4);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setSize(width, height);
//     // renderer.outputEncoding = THREE.sRGBEncoding; // Removed: not available in type definitions
//     mountRef.current.appendChild(renderer.domElement);

//     // Lights
//     const ambient = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambient);

//     const dir = new THREE.DirectionalLight(0xffffff, 0.8);
//     dir.position.set(5, 3, 5);
//     scene.add(dir);

//     // Earth sphere with texture (optional)
//     const radius = 1.4;
//     const sphereGeo = new THREE.SphereGeometry(radius, 64, 64);
//     const textureLoader = new THREE.TextureLoader();
//     let earthMaterial: THREE.MeshStandardMaterial;

//     // try loading /earth.jpg -- fallback to colored material if missing
//     const earthTextureURL = "/earth.jpg";
//     earthMaterial = new THREE.MeshStandardMaterial({
//       color: 0x223344,
//       roughness: 1,
//       metalness: 0,
//     });

//     textureLoader.load(
//       earthTextureURL,
//       (tex) => {
//         // (tex as THREE.Texture).encoding = THREE.sRGBEncoding; // Removed: not available in type definitions
//         earthMaterial.map = tex;
//         earthMaterial.needsUpdate = true;
//       },
//       undefined,
//       () => {
//         // fail quietly; keep fallback color material
//       }
//     );

//     const earthMesh = new THREE.Mesh(sphereGeo, earthMaterial);
//     scene.add(earthMesh);

//     // Dotted overlay (phyllotaxis for even distribution)
//     const dotCount = 350000;
//     const positions: number[] = [];
//     const sizes: number[] = [];
//     const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // phyllotaxis constant

//     for (let i = 0; i < dotCount; i++) {
//       // distribute by phyllotaxis on sphere surface
//       const t = i / dotCount;
//       const inclination = Math.acos(1 - 2 * t); // 0..pi
//       const azimuth = (i * goldenAngle) % (Math.PI * 2);

//       // spherical -> cartesian
//       const x = radius * Math.sin(inclination) * Math.cos(azimuth);
//       const y = radius * Math.sin(inclination) * Math.sin(azimuth);
//       const z = radius * Math.cos(inclination);
//       positions.push(x, y, z);

//       // vary size slightly
//       sizes.push(1 + Math.random() * 1.2);
//     }

//     const dotsGeometry = new THREE.BufferGeometry();
//     dotsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
//     // dotsGeometry.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));

//     const dotsMaterial = new THREE.PointsMaterial({
//       color: 0x00d1ff,
//       size: 0.012,
//       sizeAttenuation: true,
//       depthTest: true,
//       transparent: true,
//       opacity: 0.95,
//     });

//     const dots = new THREE.Points(dotsGeometry, dotsMaterial);
//     scene.add(dots);

//     // Controls - allow full yaw rotation, but limit tilt ±30°
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.08;
//     controls.enablePan = false;
//     controls.minDistance = 2.2;
//     controls.maxDistance = 6;
//     controls.autoRotate = false; // keep manual control + auto-rotate in animation
//     controls.enableZoom = true;

//     // Constrain polar angle to ±30° from equator.
//     // Polar angle is measured from +Y (top=0) down to bottom=PI.
//     const tiltDeg = 30;
//     const tiltRad = THREE.MathUtils.degToRad(tiltDeg);
//     // equator polar = PI/2; allow from (pi/2 - tilt) .. (pi/2 + tilt)
//     controls.minPolarAngle = Math.PI / 2 - tiltRad;
//     controls.maxPolarAngle = Math.PI / 2 + tiltRad;

//     // Optionally set min/max azimuth for limited yaw — user wanted full 360° so leave unrestricted
//     // controls.minAzimuthAngle = -Infinity;
//     // controls.maxAzimuthAngle = Infinity;

//     // Auto rotation parameters
//     // const autoRotateSpeed = 0.25; // Removed: variable was never used

//     // Animation loop
//     const animate = () => {
//       // rotate globe slowly (world-space)
//       earthMesh.rotation.y += 0.0015; // automatic spin
//       dots.rotation.y += 0.0015;

//       // small wobble when user isn't interacting (optional)
//       controls.update();
//       renderer.render(scene, camera);
//       FRAME_ID.current = requestAnimationFrame(animate);
//     };
//     animate();

//     // Resize handling
//     const handleResize = () => {
//       if (!mountRef.current) return;
//       const w = mountRef.current.clientWidth;
//       const h = mountRef.current.clientHeight;
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//       renderer.setSize(w, h);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       if (FRAME_ID.current) cancelAnimationFrame(FRAME_ID.current);
//       window.removeEventListener("resize", handleResize);
//       controls.dispose();
//       renderer.dispose();
//       dotsGeometry.dispose();
//       sphereGeo.dispose();
//       // remove canvas
//       if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen bg-black flex items-center justify-center">
//       <div
//         ref={ mountRef }
//         className="w-full h-full"
//         style={ { touchAction: "none" } } // helps mobile touch handling
//       />
//     </div>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three-stdlib";

// export default function HalftoneEarth() {
//   const mountRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     // Scene + Camera
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
//     camera.position.set(0, 0, 3);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(width, height);
//     mountRef.current.appendChild(renderer.domElement);

//     // Light
//     scene.add(new THREE.AmbientLight(0xffffff, 1));

//     // Load B/W map
//     const img = new Image();
//     img.src = "/earth-bw.jpg"; // put in public folder
//     img.crossOrigin = "anonymous";

//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d")!;
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);

//       const imageData = ctx.getImageData(0, 0, img.width, img.height);
//       const positions: number[] = [];

//       const radius = 1.2;
//       const step = 4; // sampling step (higher = fewer dots)

//       for (let y = 0; y < img.height; y += step) {
//         for (let x = 0; x < img.width; x += step) {
//           const i = (y * img.width + x) * 4;
//           const r = imageData.data[i];
//           const g = imageData.data[i + 1];
//           const b = imageData.data[i + 2];

//           // black pixel -> draw dot
//           if (r < 128 && g < 128 && b < 128) {
//             const lon = (x / img.width) * 2 * Math.PI - Math.PI; // -180..180
//             const lat = (y / img.height) * Math.PI - Math.PI / 2; // -90..90

//             const px = radius * Math.cos(lat) * Math.cos(lon);
//             const py = radius * Math.sin(lat);
//             const pz = radius * Math.cos(lat) * Math.sin(lon);

//             positions.push(px, py, pz);
//           }
//         }
//       }

//       const geometry = new THREE.BufferGeometry();
//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3)
//       );

//       const material = new THREE.PointsMaterial({
//         color: 0x111111,
//         size: 0.015,
//         sizeAttenuation: true,
//       });

//       const points = new THREE.Points(geometry, material);
//       scene.add(points);
//     };

//     // Controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.enablePan = false;
//     controls.minDistance = 2;
//     controls.maxDistance = 5;
//     controls.minPolarAngle = Math.PI / 2 - THREE.MathUtils.degToRad(30);
//     controls.maxPolarAngle = Math.PI / 2 + THREE.MathUtils.degToRad(30);

//     // Animate
//     const animate = () => {
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     // Resize
//     const handleResize = () => {
//       const w = mountRef.current!.clientWidth;
//       const h = mountRef.current!.clientHeight;
//       camera.aspect = w / h;
//       camera.updateProjectionMatrix();
//       renderer.setSize(w, h);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div className="w-full h-screen bg-white flex items-center justify-center">
//       <div ref={mountRef} className="w-full h-full" />
//     </div>
//   );
// }
