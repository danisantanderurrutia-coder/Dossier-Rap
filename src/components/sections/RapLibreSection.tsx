import React from 'react';
import { Megaphone, HeartHandshake, Flame, Users, ArrowLeft } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { archiveData } from '../../data/archive-data';

interface RapLibreSectionProps {
  onViewGalleryForLibre?: () => void;
  onBackToDashboard?: () => void;
}

export const RapLibreSection: React.FC<RapLibreSectionProps> = ({
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'rap-libre')!;

  return (
    <section id="rap-libre" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#180d0d] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-rose-400 transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-rose-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Dashboard General</span>
            </button>
            <div className="font-mono text-[10px] text-crt-red uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crt-red animate-ping" />
              EXPEDIENTE // 03: RAP LIBRE
            </div>
          </div>
        )}

        {/* Section Header with Glitch on Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="red">Hito 03 // 2019–2020</Badge>
              <span className="font-mono text-xs text-neutral-400">Plazas Urbanas & Solidaridad Popular</span>
            </div>
            <h2
              data-text="RAP LIBRE"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <Megaphone className="w-9 h-9 text-crt-red inline" />
              RAP LIBRE
            </h2>
            <p className="crt-subtext text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data.subtitle}
            </p>
          </div>

          <div className="bg-surface border border-rose-500/30 rounded-xl p-5 max-w-md shadow-glow-red">
            <span className="font-mono text-[10px] text-crt-red uppercase tracking-wider block mb-1">
              Territorio y Espacio Público
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-mono">
              {data.venue}
            </p>
          </div>
        </div>

        {/* The Two Social Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Social Purpose / Acopio */}
          <div className="bg-gradient-to-br from-surface to-rose-950/30 border border-rose-500/40 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-rose-500/70 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-crt-red">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
              Acopio Solidario: Megaincendios & Emergencia Social
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
              {data.production?.social_purpose}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-300">
              <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-rose-300">
                Alimentos no perecibles & agua
              </span>
              <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-rose-300">
                Frazadas & ropa de abrigo
              </span>
              <span className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-rose-300">
                Insumos de primeros auxilios
              </span>
            </div>
          </div>

          {/* Protest Context / Estallido */}
          <div className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4 hover:border-neutral-500 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-crt-amber">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
              Articulación Cultural en el Estallido Social (2019)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {data.production?.protest_context}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <Users className="w-3.5 h-3.5 text-crt-amber" />
              <span>Conexión directa con asambleas territoriales, cabildos abiertos y plazas populares</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
