import React, { useState } from 'react';
import { Trophy, PlayCircle, ArrowLeft, Maximize2, Sparkles, BookOpen, Mic, Clock, Video } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { YoutubeVideo } from '../../types/archive';
import { LightboxModal } from '../media/LightboxModal';

interface DuenasDeLaVozSectionProps {
  onSelectVideo?: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

export const DuenasDeLaVozSection: React.FC<DuenasDeLaVozSectionProps> = ({
  onSelectVideo,
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'duenas-de-la-voz')!;
  const videos = data?.media?.youtube_videos || [];
  const queenaVideo = videos.find((v) => v.id === 'NcDejj3NKXo') || videos[0];

  // Afiches y fotografías pertenecientes a Dueñas de la Voz
  const duenasItems = galleryData.filter(
    (item) => item.competitionId === 'duenas-de-la-voz'
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
    <section id="duenas-de-la-voz" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#180a1c] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-fuchsia-400 transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-fuchsia-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Inicio</span>
            </button>
            <div className="font-mono text-[10px] text-fuchsia-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
              EXPEDIENTE // DUEÑAS DE LA VOZ
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="magenta">Hito Histórico de Soberanía Lírica // 2019–2020</Badge>
              <span className="font-mono text-xs text-neutral-400">Pionero en el Freestyle Universitario</span>
              
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
              data-text="DUEÑAS DE LA VOZ"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <Trophy className="w-9 h-9 text-fuchsia-400 inline" />
              DUEÑAS DE LA VOZ
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data?.subtitle || 'Certamen & Conversatorio de Soberanía Lírica Femenina'}
            </p>
          </div>

          {/* Malala Quote Banner */}
          <div className="bg-gradient-to-r from-surface to-fuchsia-950/40 border border-fuchsia-500/30 rounded-xl p-5 max-w-md shadow-glow-magenta">
            <span className="font-mono text-[10px] text-fuchsia-400 uppercase tracking-wider block mb-1">
              Manifiesto Fundacional (Malala Yousafzai)
            </span>
            <p className="text-xs text-neutral-200 italic font-serif leading-relaxed">
              &ldquo;Cuando el mundo está en silencio, hasta una voz se vuelve poderosa.&rdquo;
            </p>
          </div>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-fuchsia-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <Mic className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              Paridad de Tarima & Espacio Seguro
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Ruptura con la hostilidad estructural en las plazas metropolitanas. Creación de un cuadrilátero donde las mujeres del rap compiten bajo protocolos estrictos de no discriminación y respeto artístico.
            </p>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-fuchsia-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              Conversatorios & Formación Teórica
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              Instancias de diálogo previas a la tarima con letristas, productoras y sociólogas, analizando el rol del hip-hop como herramienta de emancipación y construcción comunitaria.
            </p>
          </div>

          <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-fuchsia-500/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              Consagración Histórica de QUEENA
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              La final celebrada en el anfiteatro de Beauchef coronó a QUEENA con una ovación unánime, estableciendo un precedente que resonó en el circuito nacional de batallas.
            </p>
          </div>
        </div>

        {/* Feature Spotlight: Final de QUEENA */}
        {queenaVideo && (
          <div className="bg-gradient-to-r from-surface via-[#1b1022] to-neutral-900 border border-fuchsia-500/40 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge variant="magenta">Registro Audiovisual Oficial</Badge>
                <span className="font-mono text-xs text-neutral-400">Anfiteatro FCFM Universidad de Chile</span>
              </div>
              <h3 className="font-mono text-2xl font-bold text-white">
                QUEENA — Gran Final Dueñas de la Voz (Campeona)
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Documento desclasificado en directo con la presentación y coronación de QUEENA. Una demostración contundente de métrica lírica, coherencia conceptual y puesta en escena frente a cientos de asistentes.
              </p>
              <button
                onClick={() => handleOpenVideo(queenaVideo)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-fuchsia-500 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-fuchsia-400 transition-colors shadow-lg"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Ver Batalla en YouTube</span>
              </button>
            </div>

            <div
              onClick={() => handleOpenVideo(queenaVideo)}
              className="group cursor-pointer relative aspect-video w-full lg:w-96 rounded-xl overflow-hidden border border-fuchsia-500/50 shadow-2xl flex-shrink-0"
            >
              <img
                src={`./covers/youtube/${queenaVideo.id}.jpg`}
                alt={queenaVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-fuchsia-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8" />
                </div>
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-neutral-200 border border-white/10 flex items-center gap-1">
                <Clock className="w-3 h-3 text-fuchsia-400" />
                <span>{queenaVideo.duration || '2:38'}</span>
              </div>
            </div>
          </div>
        )}

        {/* Pentagrama de Finalistas: Los 5 Videos de la Final */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-surface-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Video className="w-4 h-4 text-fuchsia-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-fuchsia-400 font-bold">
                  Pentagrama de Finalistas // Registro en Vivo
                </span>
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-fuchsia-400" />
                Todas las Presentaciones de la Gran Final
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              5 REGISTROS OFICIALES EN YOUTUBE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => handleOpenVideo(vid)}
                className={`group cursor-pointer bg-surface border rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                  vid.id === queenaVideo?.id
                    ? 'border-fuchsia-500/80 shadow-glow-magenta'
                    : 'border-surface-border hover:border-fuchsia-500/50 hover:shadow-glow-magenta'
                }`}
              >
                <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                  <img
                    src={`./covers/youtube/${vid.id}.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-fuchsia-500/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                  </div>
                  {vid.duration && (
                    <div className="absolute bottom-2 right-2 bg-black/85 px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-200 border border-white/10">
                      {vid.duration}
                    </div>
                  )}
                  {vid.id === queenaVideo?.id && (
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-fuchsia-500 text-neutral-950">
                        Campeona
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-3 space-y-1.5 flex-1 flex flex-col justify-between border-t border-surface-border/40">
                  <h4 className="font-mono text-xs font-bold text-white group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                  <div className="text-[10px] font-mono text-fuchsia-400 group-hover:underline">
                    Ver en YouTube &rarr;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Vault for Dueñas de la Voz */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-surface-border/60">
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
              <span>Bóveda Visual: Afiches, Emblemas & Registro</span>
            </h3>
            <span className="font-mono text-xs text-neutral-400">
              {duenasItems.length} PIEZAS HISTÓRICAS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {duenasItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(idx)}
                className="group cursor-pointer bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-fuchsia-500/60 hover:shadow-glow-magenta transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square bg-neutral-950 overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={`./covers/instagram/${item.filename}`}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/20 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-fuchsia-400" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2 border-t border-surface-border/40">
                  <h4 className="font-mono text-xs font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-sans line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox for Dueñas de la Voz */}
        {selectedItemIndex !== null && duenasItems[selectedItemIndex] && (
          <LightboxModal
            poster={duenasItems[selectedItemIndex]}
            onClose={() => setSelectedItemIndex(null)}
            onNext={() => setSelectedItemIndex((prev) => ((prev ?? 0) + 1) % duenasItems.length)}
            onPrev={() => setSelectedItemIndex((prev) => (((prev ?? 0) - 1 + duenasItems.length) % duenasItems.length))}
          />
        )}

      </div>
    </section>
  );
};
