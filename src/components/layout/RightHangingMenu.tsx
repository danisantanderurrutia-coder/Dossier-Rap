import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  Mic2, 
  Trophy, 
  Server, 
  Skull, 
  Megaphone, 
  PenTool
} from 'lucide-react';

export type SectionTab = 
  | 'dashboard' 
  | 'rap-beauchef' 
  | 'duenas-de-la-voz' 
  | 'discord-rap-beauchef' 
  | 'cuarentena-rap' 
  | 'rap-libre' 
  | 'las-escritas';

interface RightHangingMenuProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
}

interface MenuItem {
  id: SectionTab;
  label: string;
  shortLabel: string;
  tagline: string;
  logo: string;
  fallbackIcon: React.ElementType;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  badge?: string;
  badgeColor?: string;
}

export const RightHangingMenu: React.FC<RightHangingMenuProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Inicio / Manifiesto',
      shortLabel: 'Inicio',
      tagline: 'Bóveda General & Métricas',
      logo: './logos/dashboard.jpg',
      fallbackIcon: LayoutGrid,
      accentColor: 'text-neutral-300',
      glowColor: 'shadow-neutral-500/30',
      borderColor: 'border-neutral-500',
      badge: 'Bóveda',
      badgeColor: 'bg-neutral-800 text-neutral-300 border-neutral-700',
    },
    {
      id: 'rap-beauchef',
      label: 'Rap Beauchef (Presencial)',
      shortLabel: 'Beauchef',
      tagline: 'Anfiteatro FCFM & Fotos en Vivo',
      logo: './logos/rap-beauchef.jpg',
      fallbackIcon: Mic2,
      accentColor: 'text-crt-cyan',
      glowColor: 'shadow-cyan-500/40',
      borderColor: 'border-cyan-500',
      badge: 'Presencial',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
    {
      id: 'duenas-de-la-voz',
      label: 'Dueñas de la Voz',
      shortLabel: 'Dueñas',
      tagline: 'Soberanía Femenina & QUEENA',
      logo: './logos/duenas-de-la-voz.jpg',
      fallbackIcon: Trophy,
      accentColor: 'text-fuchsia-400',
      glowColor: 'shadow-fuchsia-500/40',
      borderColor: 'border-fuchsia-500',
      badge: 'Hito',
      badgeColor: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30',
    },
    {
      id: 'discord-rap-beauchef',
      label: 'Discord Rap Beauchef',
      shortLabel: 'Discord',
      tagline: '+12k Miembros & Baja Latencia',
      logo: './logos/discord-rap-beauchef.jpg',
      fallbackIcon: Server,
      accentColor: 'text-emerald-400',
      glowColor: 'shadow-emerald-500/40',
      borderColor: 'border-emerald-500',
      badge: '+12k',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    },
    {
      id: 'cuarentena-rap',
      label: 'Cuarentena Rap',
      shortLabel: 'Cuarentena',
      tagline: 'Muerte Simbólica & 4 Fases',
      logo: './logos/cuarentena-rap.jpg',
      fallbackIcon: Skull,
      accentColor: 'text-crt-amber',
      glowColor: 'shadow-amber-500/40',
      borderColor: 'border-amber-500',
      badge: 'Cinemática',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
    {
      id: 'rap-libre',
      label: 'Rap Libre',
      shortLabel: 'Rap Libre',
      tagline: 'Plazas Públicas & Resistencia',
      logo: './logos/rap-libre.jpg',
      fallbackIcon: Megaphone,
      accentColor: 'text-rose-400',
      glowColor: 'shadow-rose-500/40',
      borderColor: 'border-rose-500',
      badge: 'Solidaria',
      badgeColor: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    },
    {
      id: 'las-escritas',
      label: 'Las Escritas',
      shortLabel: 'Escritas',
      tagline: 'Duelos Poéticos & Rúbricas',
      logo: './logos/las-escritas.jpg',
      fallbackIcon: PenTool,
      accentColor: 'text-amber-300',
      glowColor: 'shadow-amber-500/40',
      borderColor: 'border-amber-400',
      badge: 'En Consulta',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
  ];

  return (
    <aside
      aria-label="Menú Lateral Colgante de Secciones"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 select-none"
    >
      <div className="flex items-center">
        
        {/* Toggle Expansion Tab */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Colapsar menú lateral' : 'Expandir menú lateral'}
          className="bg-neutral-900/95 hover:bg-neutral-800 text-neutral-300 hover:text-white border-y border-l border-surface-border hover:border-neutral-500 p-2 rounded-l-xl shadow-2xl backdrop-blur-md transition-all flex flex-col items-center justify-center gap-1.5 focus:outline-none"
        >
          {isExpanded ? (
            <ChevronRight className="w-4 h-4 text-crt-amber animate-pulse" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-crt-amber animate-pulse" />
          )}
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold py-1">
            {isExpanded ? 'Cerrar' : 'Expedientes'}
          </span>
        </button>

        {/* Main Hanging Body */}
        <nav
          className={`bg-neutral-950/95 border-y border-l border-surface-border/80 backdrop-blur-xl shadow-2xl transition-all duration-300 rounded-l-2xl py-3 px-2 ${
            isExpanded ? 'w-72 sm:w-80' : 'w-16'
          }`}
        >
          {/* Header on expanded */}
          {isExpanded && (
            <div className="px-3 pb-3 mb-2 border-b border-surface-border/60 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-crt-amber uppercase tracking-wider block font-bold">
                  Navegación de Archivo
                </span>
                <span className="font-mono text-xs text-white font-bold">
                  Secciones & Expedientes
                </span>
              </div>
              <span className="font-mono text-[10px] bg-neutral-900 text-neutral-400 px-2 py-0.5 rounded border border-neutral-800">
                7 Módulos
              </span>
            </div>
          )}

          {/* List of sections */}
          <div className="space-y-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              const isHovered = hoveredId === item.id;
              const Icon = item.fallbackIcon;

              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => onSelectTab(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`w-full flex items-center gap-3 p-1.5 rounded-xl transition-all text-left group ${
                      isActive
                        ? `bg-neutral-900 border ${item.borderColor} ${item.glowColor} shadow-lg`
                        : 'hover:bg-neutral-900/60 border border-transparent hover:border-neutral-800'
                    }`}
                  >
                    {/* Logo Emblem Thumbnail */}
                    <div
                      className={`relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border bg-neutral-900 flex items-center justify-center transition-all ${
                        isActive
                          ? `${item.borderColor} ring-2 ring-white/10 scale-105`
                          : 'border-neutral-800 group-hover:border-neutral-600'
                      }`}
                    >
                      <img
                        src={item.logo}
                        alt={item.shortLabel}
                        onError={(e) => {
                          // Fallback to Icon if image is missing
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <Icon className={`w-5 h-5 absolute pointer-events-none opacity-20 ${item.accentColor}`} />
                      
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-crt-amber shadow-glow-amber animate-pulse" />
                      )}
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`font-mono text-xs font-bold truncate transition-colors ${
                              isActive ? item.accentColor : 'text-neutral-200 group-hover:text-white'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase tracking-wider flex-shrink-0 ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-neutral-400 truncate font-sans">
                          {item.tagline}
                        </p>
                      </div>
                    )}
                  </button>

                  {/* Compact Hover Tooltip (when collapsed) */}
                  {!isExpanded && isHovered && (
                    <div className="absolute right-16 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
                      <div className="bg-neutral-950/95 border border-surface-border text-white text-xs px-3 py-2 rounded-xl shadow-2xl backdrop-blur-md whitespace-nowrap min-w-44">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-mono font-bold text-xs ${item.accentColor}`}>
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-[8px] font-mono px-1 py-0.5 rounded border uppercase ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-neutral-400 font-sans mt-0.5">
                          {item.tagline}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* Bottom quick indicator */}
          {isExpanded && (
            <div className="mt-3 pt-2.5 border-t border-surface-border/60 text-center font-mono text-[9px] text-neutral-500">
              CLIC PARA ABRIR EXPEDIENTE
            </div>
          )}

        </nav>

      </div>
    </aside>
  );
};
