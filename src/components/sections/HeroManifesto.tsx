import React from 'react';
import { Users, Disc3, Globe2, HeartHandshake } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

interface HeroManifestoProps {
  onExploreClick?: () => void;
  onExecutiveClick?: () => void;
}

export const HeroManifesto: React.FC<HeroManifestoProps> = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-surface-border">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-crt-amber/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-crt-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="max-w-4xl mb-8">
          <h1
            data-text="HIP-HOP COMO RESISTENCIA & CATARSIS"
            className="glitch-text font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            HIP-HOP //{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crt-amber via-amber-200 to-amber-500">
              RESISTENCIA & CATARSIS
            </span>
          </h1>
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
