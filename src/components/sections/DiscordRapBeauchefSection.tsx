import React, { useState } from 'react';
import { Server, Users, Radio, ArrowLeft, Cpu, Activity, Maximize2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { LightboxModal } from '../media/LightboxModal';

interface DiscordRapBeauchefSectionProps {
  onBackToDashboard?: () => void;
}

export const DiscordRapBeauchefSection: React.FC<DiscordRapBeauchefSectionProps> = ({
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'discord-rap-beauchef')!;
  
  const discordItems = galleryData.filter(
    (item) => item.competitionId === 'discord-rap-beauchef'
  );

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  return (
    <section id="discord-rap-beauchef" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#0a171d] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-emerald-400 transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-emerald-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Inicio</span>
            </button>
            <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              EXPEDIENTE // DISCORD RAP BEAUCHEF
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="green">Infraestructura Digital // 2020–2021</Badge>
              <span className="font-mono text-xs text-neutral-400">Servidor Automatizado & Streaming</span>
            </div>
            <h2
              data-text="DISCORD RAP BEAUCHEF"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <Server className="w-9 h-9 text-emerald-400 inline" />
              DISCORD RAP BEAUCHEF
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data?.subtitle || 'Ecosistema Digital Comunitario, Baja Latencia & +12k Miembros'}
            </p>
          </div>

          <div className="bg-surface border border-emerald-500/30 rounded-xl p-5 max-w-md shadow-glow-green">
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block mb-1">
              Capacidad & Servidor
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-mono">
              Arquitectura de baja latencia diseñada para albergar a más de 12.000 freestylers en pleno aislamiento pandémico.
            </p>
          </div>
        </div>

        {/* 4 Technical Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-2 hover:border-emerald-500/40 transition-colors">
            <Users className="w-6 h-6 text-emerald-400" />
            <div className="font-mono text-2xl font-bold text-white">+12,000</div>
            <div className="font-mono text-xs text-emerald-400 uppercase font-semibold">Miembros Activos</div>
            <p className="text-[11px] text-neutral-400">Comunidad hispanohablante conectada permanentemente en canales de voz y texto.</p>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-2 hover:border-emerald-500/40 transition-colors">
            <Activity className="w-6 h-6 text-emerald-400" />
            <div className="font-mono text-2xl font-bold text-white">Opus 96kbps</div>
            <div className="font-mono text-xs text-emerald-400 uppercase font-semibold">Baja Latencia</div>
            <p className="text-[11px] text-neutral-400">Canales de voz optimizados para que instrumentales y barras suenen al unísono sin eco.</p>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-2 hover:border-emerald-500/40 transition-colors">
            <Cpu className="w-6 h-6 text-emerald-400" />
            <div className="font-mono text-2xl font-bold text-white">Bots Custom</div>
            <div className="font-mono text-xs text-emerald-400 uppercase font-semibold">Automatización</div>
            <p className="text-[11px] text-neutral-400">Sorteo automático de llaves de batalla, conteo regresivo de tiempo y moderación 24/7.</p>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-2 hover:border-emerald-500/40 transition-colors">
            <Radio className="w-6 h-6 text-emerald-400" />
            <div className="font-mono text-2xl font-bold text-white">Simulcast</div>
            <div className="font-mono text-xs text-emerald-400 uppercase font-semibold">Multi-Streaming</div>
            <p className="text-[11px] text-neutral-400">Retransmisión en vivo simultánea hacia Twitch y YouTube para miles de espectadores.</p>
          </div>
        </div>

        {/* Feature Spotlight: The Launch Poster and Architecture */}
        <div className="bg-surface border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2">
              <Badge variant="green">Afiche Oficial de Mudanza Digital</Badge>
              <span className="font-mono text-xs text-neutral-400">Lanzamiento 2020</span>
            </div>
            <h3 className="font-mono text-2xl font-bold text-white">
              Migración del Anfiteatro de Hormigón a la Nube de Discord
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Cuando la pandemia clausuró las universidades y plazas públicas, Rap Beauchef no se detuvo: diseñó un servidor Discord de nivel profesional que se transformó en la catedral de entrenamiento, clasificatorias y batallas para miles de jóvenes en América Latina.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              {['Canales de Audición', 'Salas de Calentamiento', 'Cabina de Jurados', 'Anti-Raid Protegido'].map((feature) => (
                <span key={feature} className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-emerald-300">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {discordItems[0] && (
            <div
              onClick={() => setSelectedItemIndex(0)}
              className="group cursor-pointer relative aspect-square w-full sm:w-80 rounded-xl overflow-hidden border border-emerald-500/40 shadow-2xl flex-shrink-0"
            >
              <img
                src={`./covers/instagram/${discordItems[0].filename}`}
                alt={discordItems[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="bg-black/80 px-3 py-1 rounded border border-emerald-500/50 text-emerald-400 font-mono text-xs flex items-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Afiche Original</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lightbox for Discord poster */}
        {selectedItemIndex !== null && discordItems[selectedItemIndex] && (
          <LightboxModal
            poster={discordItems[selectedItemIndex]}
            onClose={() => setSelectedItemIndex(null)}
            onNext={() => setSelectedItemIndex((prev) => ((prev ?? 0) + 1) % discordItems.length)}
            onPrev={() => setSelectedItemIndex((prev) => (((prev ?? 0) - 1 + discordItems.length) % discordItems.length))}
          />
        )}

      </div>
    </section>
  );
};
