import React, { useState } from 'react';
import { Server, Users, Radio, ArrowLeft, Cpu, Activity, Maximize2, PlayCircle, Clock, Video, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { LightboxModal } from '../media/LightboxModal';
import { YoutubeVideo } from '../../types/archive';

interface DiscordRapBeauchefSectionProps {
  onSelectVideo?: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

export const DiscordRapBeauchefSection: React.FC<DiscordRapBeauchefSectionProps> = ({
  onSelectVideo,
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'discord-rap-beauchef')!;
  const videos = data?.media?.youtube_videos || [];
  
  const discordItems = galleryData.filter(
    (item) => item.competitionId === 'discord-rap-beauchef'
  );

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleOpenVideo = (video: YoutubeVideo) => {
    if (onSelectVideo) {
      onSelectVideo(video);
    } else {
      window.open(video.url, '_blank');
    }
  };

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
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="green">Infraestructura Digital // 2020–2021</Badge>
              <span className="font-mono text-xs text-neutral-400">Servidor Automatizado & Streaming</span>
              
              <a
                href="https://www.instagram.com/rap.beauchef/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-900 border border-pink-500/30 text-pink-400 font-mono text-[10px] hover:bg-pink-500/10 transition-colors"
              >
                <InstagramIcon className="w-3 h-3" />
                <span>@rap.beauchef</span>
              </a>
              <a
                href="https://www.youtube.com/@rapbeauchef8447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-900 border border-red-500/30 text-red-400 font-mono text-[10px] hover:bg-red-500/10 transition-colors"
              >
                <YoutubeIcon className="w-3 h-3" />
                <span>@rapbeauchef8447</span>
              </a>
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

        {/* Streaming Vault: Videos oficiales de las transmisiones */}
        {videos.length > 0 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-surface-border/60">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    Transmisiones Desclasificadas // YouTube Stream
                  </span>
                </div>
                <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                  Archivo de Torneos en Directo
                </h3>
              </div>
              <span className="font-mono text-xs text-neutral-400">
                LIVESTREAMS & SEMIFINALES RECUPERADAS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {videos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => handleOpenVideo(vid)}
                  className="group cursor-pointer bg-surface border border-surface-border rounded-2xl overflow-hidden hover:border-emerald-500/60 hover:shadow-glow-green transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                    <img
                      src={`./covers/youtube/${vid.id}.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8" />
                      </div>
                    </div>

                    {vid.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-mono text-neutral-200 border border-white/10 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{vid.duration}</span>
                      </div>
                    )}

                    {vid.stage && (
                      <div className="absolute top-3 left-3">
                        <span className="font-mono text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/80 text-emerald-400 border border-emerald-500/30">
                          {vid.stage}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-2 flex-1 flex flex-col justify-between border-t border-surface-border/50">
                    <h4 className="font-mono text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {vid.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-surface-border/40">
                      <span className="text-emerald-400 group-hover:underline">Reproducir Transmisión Completa &rarr;</span>
                      <span>@rapbeauchef8447</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
