"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three"

export function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 10;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    container.appendChild(renderer.domElement);

    // ESTRELAS
    const starsGeometry = new THREE.BufferGeometry();

    const starsCount = 300;

    const positions = new Float32Array(
      starsCount * 3
    );

    for (let i = 0; i < starsCount * 3; i += 3) {
      // X
      positions[i] =
        (Math.random() - 0.5) * 30;

      // Y
      positions[i + 1] =
        (Math.random() - 0.5) * 20;

      // Z -> profundidade
      positions[i + 2] =
        (Math.random() - 0.5) * 20;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.05,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(
      starsGeometry,
      starsMaterial
    );

    scene.add(stars);

    // MOUSE
    const mouse = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouse.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouse.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    // RESPONSIVIDADE
    const handleResize = () => {
      camera.aspect =
        window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // ANIMAÇÃO
    const animate = () => {
      requestAnimationFrame(animate);

      // Movimento suave da câmera
      camera.position.x +=
        (mouse.x * 2 - camera.position.x) * 0.03;

      camera.position.y +=
        (mouse.y * 2 - camera.position.y) * 0.03;

      // Pequeno movimento das estrelas
      stars.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // LIMPEZA
    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      starsGeometry.dispose();
      starsMaterial.dispose();

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
}