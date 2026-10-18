import React from 'react';
import { CuarentenaPortal } from '../../types/cuarentena';

interface HorizontalSpineTimelineProps {
  portals: CuarentenaPortal[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

export const HorizontalSpineTimeline: React.FC<HorizontalSpineTimelineProps> = ({
  portals,
  activeIndex,
  onSelectIndex,
}) => {
  return (
    <div className="relative w-full overflow-x-auto py-2 md:py-1 px-2 no-scrollbar">
      <div className="min-w-[800px] max-w-5xl mx-auto flex items-center relative py-1.5 md:py-1">
        
        {/* SKULL AT THE ORIGIN (LEFT END OF THE TIMELINE) */}
        <div className="relative flex-shrink-0 z-20 mr-2 flex flex-col items-center group cursor-pointer" onClick={() => onSelectIndex(0)}>
          <div className="relative w-12 h-12 md:w-9 md:h-9 flex items-center justify-center p-1 rounded-xl md:rounded-lg bg-neutral-950 border border-amber-500/50 shadow-glow-amber group-hover:scale-110 transition-transform">
            {/* Sculpted Anatomical Skull SVG */}
            <svg viewBox="0 0 64 64" className="w-full h-full fill-none drop-shadow-md">
              {/* Cranium dome */}
              <path
                d="M16 32 C14 20, 20 10, 32 10 C44 10, 50 20, 48 32 C48 38, 45 42, 42 44 L42 48 L22 48 L22 44 C19 42, 16 38, 16 32 Z"
                fill="#f0ebe1"
                stroke="#85735f"
                strokeWidth="2"
              />
              {/* Eye sockets */}
              <ellipse cx="25" cy="30" rx="4.5" ry="5.5" fill="#171411" stroke="#4a3f33" strokeWidth="1" />
              <ellipse cx="39" cy="30" rx="4.5" ry="5.5" fill="#171411" stroke="#4a3f33" strokeWidth="1" />
              {/* Eye socket glow */}
              <circle cx="25" cy="30" r="2" fill="#ffb703" className="animate-pulse" />
              <circle cx="39" cy="30" r="2" fill="#ffb703" className="animate-pulse" />
              {/* Nasal cavity */}
              <path d="M32 35 L30 40 L34 40 Z" fill="#241f1a" />
              {/* Teeth / Maxilla */}
              <path d="M25 44 L25 48 M29 44 L29 48 M32 44 L32 48 M35 44 L35 48 M39 44 L39 48" stroke="#85735f" strokeWidth="1.5" />
              {/* Temple suture lines */}
              <path d="M22 18 Q32 16 42 18" stroke="#cfc2ad" strokeWidth="1" strokeDasharray="1 1" />
            </svg>
          </div>
          <span className="font-mono text-[8px] md:text-[7px] text-crt-amber font-black tracking-widest mt-0.5 uppercase">
            ORIGEN
          </span>
        </div>

        {/* CONTINUOUS HORIZONTAL SPINAL CORD TUBE (BEHIND VERTEBRAE) */}
        <div className="absolute left-12 right-6 top-[30px] md:top-[22px] -translate-y-1/2 h-2 md:h-1 bg-gradient-to-r from-neutral-800 via-amber-900/60 to-amber-500/40 rounded-full border border-neutral-700/60 z-0">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-purple-500 to-amber-400 rounded-full transition-all duration-700 shadow-glow-amber"
            style={{ width: `${((activeIndex + 1) / portals.length) * 100}%` }}
          />
        </div>

        {/* HORIZONTAL VERTEBRAE TIMELINE NODES */}
        <div className="flex items-center justify-between flex-1 relative z-10 gap-2">
          {portals.map((portal, index) => {
            const isActive = index === activeIndex;
            const isPassed = index < activeIndex;

            return (
              <div key={portal.id} className="flex-1 flex flex-col items-center">
                <button
                  onClick={() => onSelectIndex(index)}
                  className={`group relative flex flex-col items-center transition-all duration-300 ${
                    isActive ? 'scale-110 -translate-y-1' : 'hover:scale-105 hover:-translate-y-0.5'
                  }`}
                  title={`${portal.spineCode}: ${portal.title}`}
                >
                  {/* ANATOMICAL VERTEBRA BONE SVG */}
                  <div
                    className={`relative w-11 h-11 md:w-8 md:h-8 rounded-xl md:rounded-lg flex items-center justify-center border transition-all duration-300 backdrop-blur-md ${
                      isActive
                        ? 'bg-neutral-900 border-amber-400 shadow-glow-amber'
                        : isPassed
                        ? 'bg-neutral-950/90 border-neutral-700 hover:border-amber-500/60 text-neutral-300'
                        : 'bg-black/80 border-neutral-800/80 hover:border-neutral-700 text-neutral-500'
                    }`}
                  >
                    {/* Vertebra Lateral Wings / Transverse Process SVG */}
                    <svg viewBox="0 0 50 50" className="absolute inset-0 w-full h-full fill-none pointer-events-none">
                      {/* Left and Right Vertebral Transverse Processes */}
                      <path
                        d="M8 25 C12 20, 16 22, 20 25 C16 28, 12 30, 8 25 Z M42 25 C38 20, 34 22, 30 25 C34 28, 38 30, 42 25 Z"
                        fill={isActive ? '#fdf8ee' : isPassed ? '#d8cebe' : '#3d372f'}
                        stroke={isActive ? '#ffb703' : '#6b5e4d'}
                        strokeWidth="1"
                      />
                      {/* Spinous process (central body) */}
                      <circle
                        cx="25"
                        cy="25"
                        r="8"
                        fill={isActive ? '#fff' : isPassed ? '#ede4d3' : '#26221c'}
                        stroke={isActive ? '#ffb703' : '#7a6a57'}
                        strokeWidth="1.5"
                      />
                      {/* Vertebral foramen canal (neural hole) */}
                      <circle
                        cx="25"
                        cy="25"
                        r="3.5"
                        fill={isActive ? '#ffb703' : isPassed ? '#00ff66' : '#12100d'}
                        className={isActive ? 'animate-ping' : ''}
                      />
                    </svg>

                    {/* Totem Glyph Symbol Overlay */}
                    <span className="relative z-10 text-xs md:text-[10px] select-none">
                      {portal.totem === 'horse' && '🐎'}
                      {portal.totem === 'scroll' && '📜'}
                      {portal.totem === 'tomb' && '⚰️'}
                      {portal.totem === 'crow' && '🦅'}
                      {portal.totem === 'break' && '⚡'}
                      {portal.totem === 'graffiti' && '🎨'}
                      {portal.totem === 'ideology' && '👁️'}
                      {portal.totem === 'wolf' && '🐺'}
                    </span>
                  </div>

                  {/* Level Code Tag Under Vertebra */}
                  <div className="mt-1 md:mt-0.5 text-center">
                    <span
                      className={`font-mono text-[7.5px] md:text-[6.5px] font-black uppercase tracking-wider block px-1 py-0.2 rounded ${
                        isActive
                          ? 'bg-crt-amber text-neutral-950 shadow-glow-amber'
                          : isPassed
                          ? 'text-crt-green bg-neutral-900 border border-neutral-800'
                          : 'text-neutral-500 bg-neutral-950'
                      }`}
                    >
                      {portal.macroPhase.toUpperCase()}
                    </span>
                    <span
                      className={`font-mono text-[9px] md:text-[7.5px] block mt-0.5 truncate max-w-[80px] md:max-w-[70px] ${
                        isActive ? 'text-white font-bold' : 'text-neutral-400'
                      }`}
                    >
                      {portal.title.split(':')[1]?.trim() || portal.title.split('//')[0]?.trim()}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
