import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dossier_rap_menu_expanded');
      if (saved !== null) return saved === 'true';
      return window.innerWidth >= 1280; // Expand by default on desktop for optimal visibility
    }
    return false;
  });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpanded = () => {
    setIsExpanded((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('dossier_rap_menu_expanded', String(next));
      }
      return next;
    });
  };

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Inicio / Manifiesto',
      shortLabel: 'Inicio',
      tagline: 'Bóveda General & Métricas',
      logo: './logos/rap-r-logo.png',
      accentColor: 'text-crt-amber',
      glowColor: 'shadow-amber-500/30',
      borderColor: 'border-crt-amber',
      badge: 'Bóveda',
      badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    },
    {
      id: 'rap-beauchef',
      label: 'Rap Beauchef',
      shortLabel: 'Beauchef',
      tagline: 'El Presencial · Las Escritas · Rap Libre',
      logo: './logos/rap-beauchef.png',
      accentColor: 'text-crt-cyan',
      glowColor: 'shadow-cyan-500/40',
      borderColor: 'border-cyan-500',
      badge: '3 Versiones',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
    {
      id: 'duenas-de-la-voz',
      label: 'Dueñas de la Voz',
      shortLabel: 'Dueñas',
      tagline: 'Soberanía Femenina & QUEENA',
      logo: './logos/duenas-de-la-voz.jpg',
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
      logo: './logos/cuarentena-rap.png',
      accentColor: 'text-crt-amber',
      glowColor: 'shadow-amber-500/50',
      borderColor: 'border-amber-400',
      badge: 'Oficial QRTN',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
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
          onClick={toggleExpanded}
          title={isExpanded ? 'Colapsar menú lateral' : 'Expandir menú lateral'}
          className="bg-neutral-900/98 hover:bg-neutral-850 text-neutral-200 hover:text-white border-y-2 border-l-2 border-crt-amber/50 hover:border-crt-amber px-3 py-6 rounded-l-2xl shadow-2xl backdrop-blur-md transition-all flex flex-col items-center justify-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-crt-amber"
        >
          {isExpanded ? (
            <ChevronRight className="w-6 h-6 text-crt-amber transition-transform group-hover:scale-125" />
          ) : (
            <ChevronLeft className="w-6 h-6 text-crt-amber transition-transform group-hover:scale-125 animate-pulse" />
          )}
          <span className="[writing-mode:vertical-rl] rotate-180 font-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-200 group-hover:text-crt-amber font-extrabold py-2 transition-colors">
            {isExpanded ? 'Cerrar Menú' : 'Expedientes'}
          </span>
          <span className="w-2 h-2 rounded-full bg-crt-amber animate-ping" />
        </button>

        {/* Main Hanging Body */}
        <nav
          className={`bg-neutral-950/98 border-y-2 border-l-2 border-surface-border backdrop-blur-2xl shadow-2xl transition-all duration-300 rounded-l-2xl py-4 px-3 ${
            isExpanded ? 'w-[360px] sm:w-[440px] lg:w-[480px]' : 'w-24 sm:w-28'
          }`}
        >
          {/* Header on expanded */}
          {isExpanded && (
            <div className="px-3 pb-3.5 mb-3 border-b border-surface-border/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="./logos/rap-r-logo.png"
                  alt="Dossier Rap"
                  className="w-8 h-8 rounded-lg border border-crt-amber/60 shadow-glow-amber bg-black flex-shrink-0 object-cover overflow-hidden"
                />
                <div>
                  <span className="font-mono text-[10px] text-crt-amber uppercase tracking-wider block font-bold">
                    Dossier Cultural Rap
                  </span>
                  <span className="font-mono text-sm text-white font-bold">
                    Expedientes & Archivo
                  </span>
                </div>
              </div>
              <span className="font-mono text-xs bg-neutral-900 text-crt-amber px-2.5 py-1 rounded-md border border-neutral-800 font-bold">
                5 Expedientes
              </span>
            </div>
          )}


          {/* List of sections */}
          <div className="space-y-3">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              const isHovered = hoveredId === item.id;

              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => onSelectTab(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`w-full flex items-center gap-4 p-2.5 rounded-2xl transition-all text-left group cursor-pointer ${
                      isActive
                        ? `bg-neutral-900 border-2 ${item.borderColor} ${item.glowColor} shadow-xl ring-2 ring-white/10`
                        : 'hover:bg-neutral-900/90 border-2 border-transparent hover:border-neutral-800'
                    }`}
                  >
                    {/* Logo Emblem Thumbnail (Enlarged & Clean - Sin Iconos Superpuestos) */}
                    <div
                      className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden flex-shrink-0 border-2 bg-neutral-900 flex items-center justify-center transition-all ${
                        isActive
                          ? `${item.borderColor} ring-2 ring-white/30 scale-105 shadow-lg`
                          : 'border-neutral-800 group-hover:border-neutral-600'
                      }`}
                    >
                      {item.id === 'dashboard' ? (
                        /* Isotipo Oficial 'R' de la Web (Bold Calligraphy Rap - Gemini Imagen) */
                        <div className="w-full h-full flex items-center justify-center bg-black select-none rounded-xl overflow-hidden">
                          <img
                            src="./logos/rap-r-logo.png"
                            alt="Dossier Rap Isotipo"
                            className="w-full h-full object-cover filter drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] group-hover:scale-110 transition-transform"
                          />
                        </div>
                      ) : item.id === 'rap-beauchef' ? (
                        /* Logo Oficial Rap Beauchef: Zoom +33% para llenar la cápsula sticker sin exceso de fondo */
                        <div className="w-full h-full p-0.5 flex items-center justify-center bg-white rounded-xl select-none group-hover:scale-105 transition-transform overflow-hidden">
                          <img
                            src="./logos/rap-beauchef.png"
                            alt="Rap Beauchef"
                            className="w-full h-full object-contain filter drop-shadow-sm scale-[1.33] group-hover:scale-[1.4] transition-transform"
                          />
                        </div>
                      ) : item.id === 'duenas-de-la-voz' ? (
                        /* Logo Dueñas de la Voz: Zoom +33% para encuadre ajustado sin exceso de fondo */
                        <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black select-none">
                          <img
                            src="./logos/duenas-de-la-voz.jpg"
                            alt="Dueñas de la Voz"
                            className="w-full h-full object-cover scale-[1.33] group-hover:scale-[1.4] transition-transform"
                          />
                        </div>
                      ) : (
                        /* Imagen de logo original limpia, sin dibujos superpuestos */
                        <img
                          src={item.logo}
                          alt={item.shortLabel}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      )}
                      
                      {/* Active indicator dot */}
                      {isActive && (
                        <span className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-crt-amber shadow-glow-amber animate-pulse" />
                      )}
                    </div>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-mono text-sm sm:text-base font-bold truncate transition-colors ${
                              isActive ? item.accentColor : 'text-neutral-100 group-hover:text-white'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-xs font-mono px-2.5 py-0.5 rounded-md border uppercase tracking-wider font-semibold flex-shrink-0 ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-0.5 line-clamp-1">
                          {item.tagline}
                        </p>
                      </div>
                    )}
                  </button>

                  {/* Compact Hover Tooltip (when collapsed) */}
                  {!isExpanded && isHovered && (
                    <div className="absolute right-28 sm:right-32 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
                      <div className="bg-neutral-950/98 border border-neutral-700 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-xl whitespace-nowrap min-w-64">
                        <div className="flex items-center justify-between gap-4">
                          <span className={`font-mono font-bold text-base ${item.accentColor}`}>
                            {item.label}
                          </span>
                          {item.badge && (
                            <span className={`text-xs font-mono px-2 py-0.5 rounded border uppercase font-semibold ${item.badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-300 font-sans mt-1">
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
            <div className="mt-4 pt-3 border-t border-surface-border/80 text-center font-mono text-xs text-crt-amber font-bold tracking-wider">
              CLIC PARA ABRIR EXPEDIENTE
            </div>
          )}

        </nav>

      </div>
    </aside>
  );
};
