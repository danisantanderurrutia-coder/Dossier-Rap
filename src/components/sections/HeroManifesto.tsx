import React from 'react';
import { Users, Disc3, Globe2, HeartHandshake, Terminal } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';
import { Badge } from '../ui/Badge';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';

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
        
        {/* Top meta tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="amber" size="sm">
            Archivo Cultural 2019–2021
          </Badge>
          <Badge variant="cyan" size="sm">
            Curaduría & Dirección: {archiveData.curator}
          </Badge>
          <Badge variant="green" size="sm">
            Documento Desclasificado
          </Badge>

          {/* Social Sources Badges */}
          <a
            href="https://www.instagram.com/rap.beauchef/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-pink-500/30 text-pink-400 font-mono text-xs hover:bg-pink-500/10 transition-colors shadow-xs"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@rap.beauchef</span>
          </a>
          <a
            href="https://www.youtube.com/@rapbeauchef8447"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-red-500/30 text-red-400 font-mono text-xs hover:bg-red-500/10 transition-colors shadow-xs"
          >
            <YoutubeIcon className="w-3.5 h-3.5" />
            <span>@rapbeauchef8447</span>
          </a>
        </div>

        {/* Title & Core Narrative with Glitch Effect specifically on headings */}
        <div className="max-w-4xl space-y-4 mb-10">
          <h1
            data-text="HIP-HOP COMO DISPOSITIVO DE RESISTENCIA & CATARSIS"
            className="glitch-text font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            HIP-HOP COMO DISPOSITIVO DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crt-amber via-amber-200 to-amber-500 underline decoration-crt-amber/40">
              RESISTENCIA & CATARSIS
            </span>
          </h1>

          <p className="crt-subtext font-mono text-xs sm:text-sm text-crt-cyan uppercase tracking-wider">
            Expedientes Culturales & Archivo Histórico // Dirección & Curaduría: Daniel Santander
          </p>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-sans font-normal pt-2">
            Archivo cultural y memoria viva comunitaria organizada entre 2019 y 2021: 
            las competencias presenciales en el anfiteatro de <em>Rap Beauchef</em>, 
            la soberanía lírica femenina en <em>Dueñas de la Voz</em>, 
            el ecosistema digital de <em>Discord Rap Beauchef</em>, 
            el rito pandémico de la muerte y la liberación en <em>Cuarentena Rap</em>, 
            la solidaridad en parques urbanos con <em>Rap Libre</em> 
            y los duelos poéticos de <em>Las Escritas</em>.
          </p>

          {/* Roles pills */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            {archiveData.roles.map((role, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-subtle border border-surface-border text-neutral-300"
              >
                <Terminal className="w-3 h-3 text-crt-amber" />
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Impact Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <MetricCard
            value="+12,000"
            label="Comunidad Digital"
            sublabel="Miembros en Discord con salas de audio de baja latencia y bots de moderación para batallas online."
            icon={Users}
            variant="cyan"
          />
          <MetricCard
            value="4 Elementos"
            label="Cultura Integral"
            sublabel="MCing escrito, Breaking en video HD, Beatmaking boom-bap y Beatboxing en vivo en confinamiento."
            icon={Disc3}
            variant="amber"
          />
          <MetricCard
            value="5 Países"
            label="Red Federada"
            sublabel="Plazas y ligas de Chile, Argentina, Colombia, Perú y México con cuerpo de jueces y rúbricas públicas."
            icon={Globe2}
            variant="green"
          />
          <MetricCard
            value="100%"
            label="Autogestión Solidaria"
            sublabel="Acopio directo de víveres para damnificados por megaincendios y personas en situación de calle."
            icon={HeartHandshake}
            variant="red"
          />
        </div>

      </div>
    </section>
  );
};
