import { lazy, Suspense, useEffect, useState } from 'react';
import ParticlesFallback from './ParticlesFallback';

const NeuralScene = lazy(() => import('./NeuralScene'));

function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function Hero3D() {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported) return <ParticlesFallback />;

  return (
    <Suspense fallback={<ParticlesFallback />}>
      <NeuralScene />
    </Suspense>
  );
}