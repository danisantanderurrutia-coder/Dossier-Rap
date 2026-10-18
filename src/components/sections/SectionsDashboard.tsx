import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTab } from '../layout/RightHangingMenu';

interface SectionsDashboardProps {
  onSelectTab: (tab: SectionTab) => void;
}

interface SectionCardItem {
  id: SectionTab;
  title: string;
  period: string;
  type: string;
  description: string;
  logo: string;
  accentColor: string;
  borderColor: string;
  hoverBorder: string;
  glowColor: string;
  badgeBg: string;
  badgeText: string;
  highlights: string[];
}

export const SectionsDashboard: React.FC<SectionsDashboardProps> = ({ onSelectTab }) => {
  const sections: SectionCardItem[] = [
    {
      id: 'rap-beauchef',
      title: 'Rap Beauchef (Matriz Fundacional)',
      period: '2019–2021',
      type: 'Presencial / Anfiteatro FCFM',
      description: 'Liga matriz universitaria nacida en el anfiteatro de la FCFM (U. de Chile). Círculo fundacional del que emergen las versiones territoriales (Rap Libre) y literarias (Las Escritas).',
      logo: './logos/rap-beauchef.png',
      accentColor: 'text-crt-cyan',
      borderColor: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30',
      badgeText: 'text-cyan-300',
      highlights: ['Anfiteatro FCFM', 'Liga Matriz', 'Cultura Hip-Hop'],
    },
    {
      id: 'duenas-de-la-voz',
      title: 'Dueñas de la Voz',
      period: '2019–2020',
      type: 'Soberanía Lírica Femenina',
      description: 'Primer encuentro y certamen feminista universitario con conversatorios temáticos, sororidad lírica y cyphers en vivo.',
      logo: './logos/duenas-de-la-voz.jpg',
      accentColor: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
      hoverBorder: 'hover:border-fuchsia-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]',
      badgeBg: 'bg-fuchsia-500/10 border-fuchsia-500/30',
      badgeText: 'text-fuchsia-300',
      highlights: ['Conversatorios', 'Hito Universitario', 'Lírica Libre'],
    },
    {
      id: 'discord-rap-beauchef',
      title: 'Discord Rap Beauchef',
      period: '2020–2021',
      type: 'Infraestructura Digital',
      description: 'Comunidad masiva con salas de audio optimizadas para baja latencia, moderación automatizada y circuito 24/7.',
      logo: './logos/discord-rap-beauchef.jpg',
      accentColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
      badgeText: 'text-emerald-300',
      highlights: ['+12,000 Miembros', 'Baja Latencia', 'Bots de Batalla'],
    },
    {
      id: 'cuarentena-rap',
      title: 'Cuarentena Rap',
      period: '2020–2021',
      type: 'Ritual Pandémico (4 Fases)',
      description: 'La liga del confinamiento estructurada como un rito: de la muerte simbólica (Fase de Tumbas) a la liberación lírica.',
      logo: './logos/cuarentena-rap.png',
      accentColor: 'text-crt-amber',
      borderColor: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
      badgeBg: 'bg-amber-500/10 border-amber-500/30',
      badgeText: 'text-amber-300',
      highlights: ['4 Fases Rituales', 'Breaking en Casa', '5 Países'],
    },
    {
      id: 'rap-libre',
      title: 'Rap Libre',
      period: '2019–2020',
      type: 'Versión Plaza (Rap Beauchef)',
      description: 'Extensión barrial y callejera de Rap Beauchef: reapropiación de plazas públicas urbanas, autogestión territorial y acopio directo de víveres durante crisis social.',
      logo: './logos/rap-libre.jpg',
      accentColor: 'text-rose-400',
      borderColor: 'border-rose-500/30',
      hoverBorder: 'hover:border-rose-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
      badgeBg: 'bg-rose-500/10 border-rose-500/30',
      badgeText: 'text-rose-300',
      highlights: ['Versión Rap Beauchef', 'Plazas Urbanas', 'Acopio de Víveres'],
    },
    {
      id: 'las-escritas',
      title: 'Las Escritas',
      period: '2019–2021',
      type: 'Versión Escrita (Rap Beauchef)',
      description: 'Modalidad de rimas preconcebidas de Rap Beauchef nacida en el anfiteatro: duelos líricos a capella sin improvisación, evaluados bajo rúbrica métrica y poética.',
      logo: './logos/las-escritas.jpg',
      accentColor: 'text-amber-300',
      borderColor: 'border-amber-400/30',
      hoverBorder: 'hover:border-amber-300',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(252,211,77,0.15)]',
      badgeBg: 'bg-amber-400/10 border-amber-400/30',
      badgeText: 'text-amber-300',
      highlights: ['Versión Rap Beauchef', 'A Capella', 'Rúbricas Técnicas'],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Dashboard Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-surface-border pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-crt-amber font-bold block mb-1">
            Dashboard de Expedientes
          </span>
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            LOS 6 DISPOSITIVOS CULTURALES
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400">
          Haz clic en cualquier expediente para abrir su archivo monográfico
        </p>
      </div>

      {/* Grid of 6 Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {sections.map((section) => {
          return (
            <div
              key={section.id}
              onClick={() => onSelectTab(section.id)}
              className={`group relative bg-surface/90 hover:bg-[#111622] border ${section.borderColor} ${section.hoverBorder} ${section.glowColor} rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg hover:-translate-y-1`}
            >
              <div>
                {/* Top Row: Logo + Badge + Year */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                    {section.id === 'rap-libre' ? (
                      /* Logo tipográfico exclusivo: Versión Plaza (Rap Beauchef) */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2b080f] via-neutral-950 to-black p-1 text-center select-none">
                        <span className="font-mono text-[6.5px] tracking-[0.2em] text-rose-400 uppercase font-bold leading-none">
                          BEAUCHEF
                        </span>
                        <span className="font-mono text-[12px] font-black tracking-tight text-white uppercase leading-none drop-shadow-[0_2px_8px_rgba(244,63,94,0.7)] group-hover:scale-105 transition-transform my-0.5">
                          RAP LIBRE
                        </span>
                        <span className="font-mono text-[6px] tracking-widest text-rose-300/80 uppercase font-semibold leading-none">
                          VERSIÓN PLAZA
                        </span>
                      </div>
                    ) : section.id === 'las-escritas' ? (
                      /* Logo tipográfico exclusivo: Versión Escrita (Rap Beauchef) */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#271404] via-neutral-950 to-black p-1 text-center select-none">
                        <span className="font-mono text-[6.5px] tracking-[0.2em] text-amber-400 uppercase font-bold leading-none">
                          BEAUCHEF
                        </span>
                        <span className="font-serif italic font-black text-[10.5px] tracking-wide text-amber-200 uppercase leading-none drop-shadow-[0_2px_8px_rgba(251,191,36,0.6)] group-hover:scale-105 transition-transform my-0.5">
                          LAS ESCRITAS
                        </span>
                        <span className="font-mono text-[6px] tracking-widest text-neutral-400 uppercase font-semibold leading-none">
                          DUELO POÉTICO
                        </span>
                      </div>
                    ) : section.id === 'rap-beauchef' ? (
                      /* Logo Oficial Rap Beauchef: Tag negro original sobre cápsula blanca sticker */
                      <div className="w-full h-full p-1.5 flex items-center justify-center bg-white rounded-xl select-none group-hover:scale-105 transition-transform shadow-sm">
                        <img
                          src="./logos/rap-beauchef.png"
                          alt="Rap Beauchef"
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>
                    ) : (
                      /* Imagen de logo original limpia, sin dibujos superpuestos */
                      <img
                        src={section.logo}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-neutral-400">
                      {section.period}
                    </span>
                    <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-md border uppercase tracking-wider ${section.badgeBg} ${section.badgeText}`}>
                      {section.type}
                    </span>
                  </div>
                </div>

                {/* Section Title */}
                <h3 className={`font-mono text-lg sm:text-xl font-bold text-white group-hover:${section.accentColor} transition-colors mb-2`}>
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
                  {section.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {section.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="font-mono text-[10px] bg-neutral-900/80 text-neutral-400 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 border-t border-surface-border/60 flex items-center justify-between font-mono text-xs">
                <span className={`font-bold ${section.accentColor} flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                  Abrir Expediente
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-neutral-500 text-[11px]">Archivo Completo</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
