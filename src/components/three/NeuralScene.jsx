import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Icosahedron, Line } from '@react-three/drei';
import * as THREE from 'three';

function dist(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function NeuralOrb({ reduceMotion }) {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [reduceMotion]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * (reduceMotion ? 0.05 : 0.15);
    if (!reduceMotion) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.25,
        0.04
      );
    }
  });

  const nodes = useMemo(() => {
    return Array.from({ length: 16 }, () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.6;
      return [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ];
    });
  }, []);

  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (dist(nodes[i], nodes[j]) < 1.3) arr.push([nodes[i], nodes[j]]);
      }
    }
    return arr;
  }, [nodes]);

  return (
    <group ref={groupRef}>
      <Icosahedron args={[1.6, 1]}>
        <meshBasicMaterial color="#6366F1" wireframe transparent opacity={0.25} />
      </Icosahedron>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#A5B4FC" />
        </mesh>
      ))}
      {lines.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color="#4338CA" transparent opacity={0.35} lineWidth={0.6} />
      ))}
      <Sparkles count={50} scale={4} size={2} speed={reduceMotion ? 0 : 0.3} color="#C7D2FE" />
    </group>
  );
}

export default function NeuralScene() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <NeuralOrb reduceMotion={reduceMotion} />
      </Suspense>
    </Canvas>
  );
}