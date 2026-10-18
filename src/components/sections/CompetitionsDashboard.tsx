import React from 'react';
import { Skull, Mic2, Megaphone, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface CompetitionsDashboardProps {
  onSelectCompetition: (id: 'cuarentena-rap' | 'rap-beauchef' | 'rap-libre') => void;
}

export const CompetitionsDashboard: React.FC<CompetitionsDashboardProps> = ({
  onSelectCompetition,
}) => {
  return (
    <section className="py-16 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading with Glitch on Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="amber" size="sm">Tríptico de Producciones</Badge>
              <span className="font-mono text-xs text-neutral-400">Expedientes Históricos</span>
            </div>
            <h2
              data-text="EXPEDIENTES CULTURALES & PRODUCCIÓN"
              className="glitch-text font-mono text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight"
            >
              EXPEDIENTES CULTURALES & PRODUCCIÓN
            </h2>
            <p className="crt-subtext text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              Selecciona una competencia para abrir su archivo monográfico e inmersivo dedicado.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-500">
            3 EXPEDIENTES DISPONIBLES // 2019–2021
          </div>
        </div>

        {/* 3 Overview Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Cuarentena Rap */}
          <div className="group relative bg-surface border border-surface-border rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/60 hover:shadow-glow-amber transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="amber">2020–2021</Badge>
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-crt-amber">
                  <Skull className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3
                  data-text="CUARENTENA RAP"
                  className="font-mono text-2xl font-bold text-white group-hover:text-crt-amber transition-colors"
                >
                  CUARENTENA RAP
                </h3>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  Liga Multiplataforma en Confinamiento
                </p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-surface-border">
                <img
                  src="./covers/youtube/B2XrNxHxwrA.jpg"
                  alt="Cuarentena Rap Manifiesto"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded border border-amber-500/40 text-crt-amber">
                    Concepto: La Muerte Simbólica
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                Certamen poético ritual de 4 fases (Tumbas &rarr; Karmas &rarr; Liberación), integrando los 4 elementos del hip-hop y federando plazas de 5 países de Latinoamérica.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['4 Fases Rituales', 'Breaking HD', 'Beatmaking', '5 Países'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-surface-border">
              <button
                onClick={() => onSelectCompetition('cuarentena-rap')}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-crt-amber font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-crt-amber group-hover:text-neutral-950 transition-all"
              >
                <span>Ingresar al Expediente</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Rap Beauchef */}
          <div className="group relative bg-surface border border-surface-border rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/60 hover:shadow-glow-cyan transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="cyan">2019–2021</Badge>
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-crt-cyan">
                  <Mic2 className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3
                  data-text="RAP BEAUCHEF"
                  className="font-mono text-2xl font-bold text-white group-hover:text-crt-cyan transition-colors"
                >
                  RAP BEAUCHEF
                </h3>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  Anfiteatro FCFM & Discord +12k
                </p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-surface-border">
                <img
                  src="./covers/youtube/NcDejj3NKXo.jpg"
                  alt="Dueñas de la Voz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded border border-fuchsia-500/40 text-fuchsia-400">
                    Hito: Dueñas de la Voz (QUEENA)
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                Montaje acústico autogestionado en el anfiteatro de la Universidad de Chile, creación del torneo pionero de visibilización lírica femenina y servidor Discord de +12.000 miembros.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Anfiteatro en Vivo', 'Dueñas de la Voz', 'Discord +12k', 'Baja Latencia'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-surface-border">
              <button
                onClick={() => onSelectCompetition('rap-beauchef')}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-crt-cyan font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-crt-cyan group-hover:text-neutral-950 transition-all"
              >
                <span>Ingresar al Expediente</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Rap Libre */}
          <div className="group relative bg-surface border border-surface-border rounded-2xl p-6 flex flex-col justify-between hover:border-rose-500/60 hover:shadow-glow-red transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="red">2019–2020</Badge>
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-crt-red">
                  <Megaphone className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3
                  data-text="RAP LIBRE"
                  className="font-mono text-2xl font-bold text-white group-hover:text-crt-red transition-colors"
                >
                  RAP LIBRE
                </h3>
                <p className="font-mono text-xs text-neutral-400 mt-1">
                  Plazas Públicas & Ayuda Comunitaria
                </p>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-surface-border">
                <img
                  src="./covers/instagram/B3SOa_YgJ5j.jpg"
                  alt="Rap Libre Plazas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider bg-black/80 px-2.5 py-1 rounded border border-rose-500/40 text-rose-400">
                    Solidaridad & Estallido Social
                  </span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                Conquista del espacio público en parques urbanos de Santiago, transformando la batalla callejera en una central de acopio directo para damnificados por incendios y resistencia social.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Parques de Santiago', 'Acopio de Víveres', 'Resistencia 2019', 'Sin Corporaciones'].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-surface-border">
              <button
                onClick={() => onSelectCompetition('rap-libre')}
                className="w-full py-2.5 px-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-rose-500 group-hover:text-neutral-950 transition-all"
              >
                <span>Ingresar al Expediente</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
