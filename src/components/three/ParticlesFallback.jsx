import { useMemo } from 'react';

export default function ParticlesFallback() {
  const dots = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        size: 4 + Math.random() * 6,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="relative h-full w-full overflow-hidden">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-indigo/40 animate-float"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: `${dot.top}%`,
            left: `${dot.left}%`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}
    </div>
  );
}