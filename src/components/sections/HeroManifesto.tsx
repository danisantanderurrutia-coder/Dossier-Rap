import React from 'react';
import { Users, Disc3, Globe2, HeartHandshake, BookOpen, ArrowRight, GraduationCap } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

interface HeroManifestoProps {
  onExploreClick?: () => void;
  onExecutiveClick?: () => void;
  onNavigateToMarcoTeorico?: () => void;
}

export const HeroManifesto: React.FC<HeroManifestoProps> = ({ onNavigateToMarcoTeorico }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-surface-border">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crt-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-crt-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Emblem & Title */}
        <div className="max-w-4xl mb-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-crt-amber/70 bg-black shadow-[0_0_25px_rgba(251,191,36,0.25)] flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
              <img
                src="./logos/rap-r-logo.png"
                alt="Dossier Rap R Isotipo"
                className="w-full h-full object-cover filter drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
              />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-crt-amber font-extrabold block">
                Dossier Cultural · Archivo Hip-Hop
              </span>
              <span className="font-mono text-xs text-neutral-400">
                2019–2021 · Competencias de Rap, Cyphers & Resistencia
              </span>
            </div>
          </div>

          <h1
            data-text="HIP-HOP COMO RESISTENCIA & CATARSIS"
            className="glitch-text font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            HIP-HOP //{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crt-amber via-amber-200 to-amber-500">
              RESISTENCIA & CATARSIS
            </span>
          </h1>

          <p className="crt-subtext font-mono text-xs sm:text-sm text-crt-cyan uppercase tracking-wider">
            Expedientes Culturales & Archivo Histórico // Dirección & Curaduría: Daniel S. Santander Urrutia
          </p>

          {/* Banner de Marco Teórico Académico FCFM U. de Chile */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 via-surface/80 to-surface border border-sky-500/30 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_4px_25px_rgba(14,165,233,0.08)]">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    Investigación Socioeconómica FCFM U. de Chile
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400">
                    Cátedra Socioeconomía Latinoamericana
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-white font-sans">
                  Marco Teórico: «Desarrollo, Rap y Evolución: Cultura Urbana en la Construcción de Sociedad»
                </h2>
                <p className="text-xs text-neutral-300 font-sans max-w-2xl leading-relaxed">
                  Toda esta obra está concebida bajo el paradigma de <strong>Desarrollo a Escala Humana (Max-Neef)</strong> y los <strong>7 principios cooperativos</strong>: el hip-hop como catalizador de identidad, subsistencia comunitaria y economía solidaria frente a la industria tradicional.
                </p>
              </div>
            </div>

            {onNavigateToMarcoTeorico && (
              <button
                onClick={onNavigateToMarcoTeorico}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 hover:text-white border border-sky-400/40 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0 group self-end md:self-auto"
              >
                <BookOpen className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>Explorar Marco Teórico</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* 4 Impact Metrics Cards: concise and fast to scan */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <MetricCard
            value="+12,000"
            label="Comunidad Digital"
            sublabel="Miembros y salas de audio de baja latencia"
            icon={Users}
            variant="cyan"
          />
          <MetricCard
            value="4 Elementos"
            label="Cultura Integral"
            sublabel="MCing, Breaking, Beatmaking y Beatbox"
            icon={Disc3}
            variant="amber"
          />
          <MetricCard
            value="5 Países"
            label="Red Federada"
            sublabel="Chile, Argentina, Colombia, Perú y México"
            icon={Globe2}
            variant="green"
          />
          <MetricCard
            value="100%"
            label="Autogestión"
            sublabel="Acopio de víveres y solidaridad territorial"
            icon={HeartHandshake}
            variant="red"
          />
        </div>

      </div>
    </section>
  );
};
