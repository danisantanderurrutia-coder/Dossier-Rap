import React from 'react';

interface BoneArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  label?: string;
  sublabel?: string;
}

export const BoneArrowButton: React.FC<BoneArrowButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  label,
  sublabel,
}) => {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative flex items-center gap-2 md:gap-2 px-3 md:px-2.5 py-2 md:py-1.5 rounded-xl border transition-all duration-300 backdrop-blur-md ${
        disabled
          ? 'opacity-25 pointer-events-none border-neutral-800 bg-black/40 text-neutral-600'
          : 'border-amber-500/40 bg-neutral-950/80 hover:bg-neutral-900/90 hover:border-amber-400 shadow-lg hover:shadow-glow-amber text-neutral-200 hover:text-white'
      }`}
      title={label || (isLeft ? 'Umbral Previo' : 'Siguiente Umbral')}
    >
      {/* SKELETAL BONE ARROW SVG (LEFT) */}
      {isLeft && (
        <div className="relative w-7 h-7 md:w-5 md:h-5 flex items-center justify-center flex-shrink-0 group-hover:-translate-x-1 transition-transform">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none">
            {/* Bone Shaft */}
            <path
              d="M32 18 C30 16, 26 17, 20 18 L16 18 L16 22 L20 22 C26 23, 30 24, 32 22 C34 20, 34 20, 32 18 Z"
              fill="#e2d9c8"
              stroke="#8c7a65"
              strokeWidth="1.2"
            />
            {/* Bone Knobs on Tail (Right end) */}
            <circle cx="33" cy="16" r="3" fill="#f0ebd9" stroke="#8c7a65" strokeWidth="1" />
            <circle cx="33" cy="24" r="3" fill="#f0ebd9" stroke="#8c7a65" strokeWidth="1" />
            {/* Arrowhead made of sharpened bone splinter */}
            <path
              d="M16 12 L6 20 L16 28 L14 20 Z"
              fill="#f5f0e3"
              stroke="#8c7a65"
              strokeWidth="1.2"
              className="drop-shadow-[0_0_8px_rgba(255,183,3,0.5)]"
            />
            {/* Bone Marrow Glow */}
            <circle cx="16" cy="20" r="1.5" fill="#ffb703" className="animate-ping" />
          </svg>
        </div>
      )}

      {/* TEXT LABELS */}
      <div className={`flex flex-col ${isLeft ? 'text-left' : 'text-right'}`}>
        <span className="font-mono text-xs md:text-[10px] font-black tracking-wider uppercase text-crt-amber group-hover:text-amber-300">
          {label || (isLeft ? 'Regresar Umbral' : 'Ascender Umbral')}
        </span>
        {sublabel && (
          <span className="font-mono text-[10px] md:text-[8px] text-neutral-400 group-hover:text-neutral-200 truncate max-w-[120px] md:max-w-[95px]">
            {sublabel}
          </span>
        )}
      </div>

      {/* SKELETAL BONE ARROW SVG (RIGHT) */}
      {!isLeft && (
        <div className="relative w-7 h-7 md:w-5 md:h-5 flex items-center justify-center flex-shrink-0 group-hover:translate-x-1 transition-transform">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none">
            {/* Bone Shaft */}
            <path
              d="M8 18 C10 16, 14 17, 20 18 L24 18 L24 22 L20 22 C14 23, 10 24, 8 22 C6 20, 6 20, 8 18 Z"
              fill="#e2d9c8"
              stroke="#8c7a65"
              strokeWidth="1.2"
            />
            {/* Bone Knobs on Tail (Left end) */}
            <circle cx="7" cy="16" r="3" fill="#f0ebd9" stroke="#8c7a65" strokeWidth="1" />
            <circle cx="7" cy="24" r="3" fill="#f0ebd9" stroke="#8c7a65" strokeWidth="1" />
            {/* Arrowhead made of sharpened bone splinter */}
            <path
              d="M24 12 L34 20 L24 28 L26 20 Z"
              fill="#f5f0e3"
              stroke="#8c7a65"
              strokeWidth="1.2"
              className="drop-shadow-[0_0_8px_rgba(255,183,3,0.5)]"
            />
            {/* Bone Marrow Glow */}
            <circle cx="24" cy="20" r="1.5" fill="#ffb703" className="animate-ping" />
          </svg>
        </div>
      )}
    </button>
  );
};
