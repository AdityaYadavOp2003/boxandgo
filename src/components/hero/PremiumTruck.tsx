import { memo } from 'react';

function PremiumTruck() {
  return (
    <div className="relative w-[min(320px,90%)] max-w-[360px]" aria-hidden>
      <svg
        viewBox="0 0 420 200"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="truckBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3D6098" />
            <stop offset="100%" stopColor="#2D4A82" />
          </linearGradient>
          <linearGradient id="truckCab" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B2B4B" />
            <stop offset="100%" stopColor="#0F1F3A" />
          </linearGradient>
        </defs>
        <rect x="120" y="55" width="240" height="95" rx="8" fill="url(#truckBody)" />
        <rect x="130" y="65" width="220" height="55" rx="4" fill="rgba(255,255,255,0.12)" />
        <text
          x="240"
          y="100"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          BOX &amp; GO
        </text>
        <path
          d="M40 150 H380"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <rect x="30" y="70" width="85" height="80" rx="10" fill="url(#truckCab)" />
        <rect x="42" y="82" width="55" height="40" rx="4" fill="rgba(255,255,255,0.15)" />
        <circle cx="95" cy="150" r="22" fill="#1B2B4B" stroke="#3D6098" strokeWidth="3" />
        <circle cx="95" cy="150" r="10" fill="#0A1628" />
        <circle cx="310" cy="150" r="22" fill="#1B2B4B" stroke="#3D6098" strokeWidth="3" />
        <circle cx="310" cy="150" r="10" fill="#0A1628" />
        <circle cx="240" cy="150" r="18" fill="#1B2B4B" stroke="#5A7FB5" strokeWidth="2" />
        <circle cx="240" cy="150" r="8" fill="#0A1628" />
      </svg>
    </div>
  );
}

export default memo(PremiumTruck);
