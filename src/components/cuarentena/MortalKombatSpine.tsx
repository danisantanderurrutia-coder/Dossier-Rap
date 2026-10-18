import React from 'react';
import {
  Skull,
  Compass,
  Scroll,
  Footprints,
  Eye,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CuarentenaPortal, TotemType } from '../../types/cuarentena';

interface MortalKombatSpineProps {
  portals: CuarentenaPortal[];
  activePortalIndex: number;
  onSelectPortal: (index: number) => void;
}

const getPortalImage = (id: string) => {
  const map: Record<string, string> = {
    'portal-0-genesis': './backgrounds/cuarentena/portal-0.jpg',
    'portal-1-ronda-cero': './backgrounds/cuarentena/portal-1.jpg',
    'portal-2-cementerio': './backgrounds/cuarentena/portal-2.jpg',
    'portal-3-karmas': './backgrounds/cuarentena/portal-3.jpg',
    'portal-break': './backgrounds/cuarentena/portal-break.jpg',
    'portal-4-cuartos': './backgrounds/cuarentena/portal-4.jpg',
    'portal-5-semifinales': './backgrounds/cuarentena/portal-5.jpg',
    'portal-6-final': './backgrounds/cuarentena/portal-6.jpg',
  };
  return map[id] || './backgrounds/cuarentena/portal-0.jpg';
};

export const MortalKombatSpine: React.FC<MortalKombatSpineProps> = ({
  portals,
  activePortalIndex,
  onSelectPortal,
}) => {
  const activePortal = portals[activePortalIndex];

  // Render Totem Icon based on type
  const renderTotemIcon = (totem: TotemType, isActive: boolean) => {
    const sizeClass = isActive ? 'w-5 h-5 text-crt-amber' : 'w-4 h-4 text-neutral-400';
    switch (totem) {
      case 'horse':
        return <span className={isActive ? 'text-lg animate-bounce' : 'text-sm opacity-70'}>🐎</span>;
      case 'scroll':
        return <Scroll className={sizeClass} />;
      case 'tomb':
        return <Skull className={isActive ? 'w-5 h-5 text-purple-400 animate-pulse' : 'w-4 h-4 text-purple-300/70'} />;
      case 'crow':
        return <span className={isActive ? 'text-lg' : 'text-sm opacity-70'}>🦅</span>;
      case 'break':
        return <Footprints className={isActive ? 'w-5 h-5 text-cyan-400' : 'w-4 h-4 text-cyan-500/70'} />;
      case 'graffiti':
        return <span className={isActive ? 'text-lg' : 'text-sm opacity-70'}>🎨</span>;
      case 'ideology':
        return <Eye className={isActive ? 'w-5 h-5 text-sky-400' : 'w-4 h-4 text-sky-500/70'} />;
      case 'wolf':
        return <span className={isActive ? 'text-lg animate-pulse' : 'text-sm opacity-70'}>🐺</span>;
      default:
        return <Compass className={sizeClass} />;
    }
  };

  const handlePrev = () => {
    if (activePortalIndex > 0) {
      onSelectPortal(activePortalIndex - 1);
    }
  };

  const handleNext = () => {
    if (activePortalIndex < portals.length - 1) {
      onSelectPortal(activePortalIndex + 1);
    }
  };

  return (
    <div className="bg-surface/90 border border-surface-border rounded-2xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Background Spinal Cord Line Graphic */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

      {/* Header of the Spine */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border/60 gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-amber-500/40 flex items-center justify-center text-crt-amber shadow-glow-amber">
            <Skull className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-crt-amber font-bold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-crt-amber animate-ping" />
                TORRE DE LA RESURRECCIÓN // ESPINA DE MUERTO
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 border border-neutral-700 text-neutral-300">
                8 NIVELES DIMENSIONALES
              </span>
            </div>
            <h3 className="font-mono text-base sm:text-lg font-black text-white tracking-wide">
              Cronología Ascendente de Portales (Estilo Mortal Kombat)
            </h3>
          </div>
        </div>

        {/* Quick Stepper Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={handlePrev}
            disabled={activePortalIndex === 0}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all border border-surface-border bg-neutral-900 text-neutral-300 hover:text-white hover:border-amber-500/50 disabled:opacity-30 disabled:pointer-events-none"
            title="Portal anterior"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden md:inline">Umbral Previo</span>
          </button>

          <div className="font-mono text-xs px-2.5 py-1 rounded bg-black/60 border border-amber-500/30 text-crt-amber font-bold">
            0{activePortalIndex + 1} / 0{portals.length}
          </div>

          <button
            onClick={handleNext}
            disabled={activePortalIndex === portals.length - 1}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all border border-amber-500/50 bg-amber-500/10 text-crt-amber hover:bg-amber-500/20 disabled:opacity-30 disabled:pointer-events-none"
            title="Portal siguiente"
          >
            <span className="hidden md:inline">Trascender</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* THE SPINAL LADDER / INTERACTIVE VERTEBRAE BAR */}
      <div className="mt-5 relative">
        {/* Glowing Neural Chord running horizontally across vertebrae */}
        <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gradient-to-r from-amber-600 via-purple-600 to-amber-400 opacity-30 rounded-full z-0 hidden lg:block" />

        {/* Vertebrae Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10">
          {portals.map((p, idx) => {
            const isActive = idx === activePortalIndex;
            const isCompleted = idx < activePortalIndex;

            return (
              <button
                key={p.id}
                onClick={() => onSelectPortal(idx)}
                className={`group relative text-left p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                  isActive
                    ? 'bg-neutral-900/95 border-amber-400 shadow-glow-amber scale-[1.03] z-20'
                    : isCompleted
                    ? 'bg-neutral-950/70 border-surface-border/80 hover:border-amber-500/40 hover:bg-surface'
                    : 'bg-neutral-950/50 border-surface-border/40 hover:border-neutral-700'
                }`}
              >
                {/* Active Rune Glow & Particle */}
                {isActive && (
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-crt-amber rounded-full animate-ping" />
                )}

                {/* Top vertebra badge & totem */}
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`font-mono text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-amber-400 text-neutral-950 font-extrabold'
                        : isCompleted
                        ? 'bg-neutral-800 text-crt-amber'
                        : 'bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    {idx === 4 ? 'BREAK' : `P-0${idx > 4 ? idx - 1 : idx}`}
                  </span>
                  <div className="p-1 rounded-md bg-neutral-900 border border-neutral-800">
                    {renderTotemIcon(p.totem, isActive)}
                  </div>
                </div>

                {/* Vertebra Title */}
                <div className="my-1">
                  <h4
                    className={`font-mono text-xs font-bold leading-tight line-clamp-2 transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-300 group-hover:text-amber-200'
                    }`}
                  >
                    {p.title.split(':')[0]}
                  </h4>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5 truncate">
                    {p.totemLabel.split(' ')[0]} {p.totemLabel.split(' ')[1] || ''}
                  </span>
                </div>

                {/* Bottom status */}
                <div className="mt-1 pt-1.5 border-t border-surface-border/40 flex items-center justify-between text-[9px] font-mono">
                  <span
                    className={
                      isActive
                        ? 'text-crt-amber font-bold'
                        : isCompleted
                        ? 'text-crt-green'
                        : 'text-neutral-400'
                    }
                  >
                    {isActive ? 'PORTAL ABIERTO' : isCompleted ? 'CRUZADO' : 'CERRADO'}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive
                        ? 'bg-crt-amber animate-ping'
                        : isCompleted
                        ? 'bg-crt-green'
                        : 'bg-neutral-700'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Portal Summary Strip with Environment Thumbnail */}
      <div className="mt-4 pt-4 border-t border-surface-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-neutral-950/80 p-3 rounded-xl border border-surface-border/60 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-9 rounded-lg overflow-hidden border border-amber-500/40 flex-shrink-0 shadow-md">
            <img
              src={getPortalImage(activePortal.id)}
              alt={activePortal.title}
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-crt-amber font-bold tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-crt-amber animate-ping" />
                {activePortal.spineCode}
              </span>
              <span className="text-xs text-neutral-200 font-mono font-bold">
                {activePortal.title.split(':')[0]}
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 font-mono block">
              Tótem: <strong className="text-white">{activePortal.totemLabel}</strong> · {activePortal.dimensionName}
            </span>
          </div>
        </div>

        <div className="font-mono text-[11px] text-crt-green flex items-center gap-2 self-end md:self-center bg-black/50 px-2.5 py-1 rounded border border-neutral-800">
          <span className="w-1.5 h-1.5 rounded-full bg-crt-green" />
          <span>Sintonizado con Entorno Visual</span>
        </div>
      </div>
    </div>
  );
};
