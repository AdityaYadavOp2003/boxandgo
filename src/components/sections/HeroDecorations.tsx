import { memo } from 'react';

/**
 * Minimal hero atmosphere — no floating icons or truck (truck lives in content column).
 */
function HeroDecorations() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none contain-paint"
      aria-hidden
    >
      <div className="absolute inset-0 hero-mesh-static" />
      <div className="absolute inset-0 hero-grid-layer opacity-[0.025]" />
      <div className="hero-glow-orb hero-glow-orb--blue opacity-25" />
    </div>
  );
}

export default memo(HeroDecorations);
