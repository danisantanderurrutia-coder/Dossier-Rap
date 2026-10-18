import React, { useState, useEffect } from 'react';
import { 
  Mic2, 
  Volume2, 
  Users, 
  ArrowLeft, 
  Camera, 
  MapPin, 
  Disc3, 
  Maximize2, 
  PlayCircle, 
  Video, 
  Sparkles, 
  Clock, 
  PenTool, 
  BookOpen, 
  Flame, 
  CheckCircle2, 
  HeartHandshake, 
  Megaphone 
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { LightboxModal } from '../media/LightboxModal';
import { YoutubeVideo } from '../../types/archive';

export type BeauchefSubTab = 'presencial' | 'escritas' | 'rap-libre';

interface RapBeauchefSectionProps {
  initialSubTab?: BeauchefSubTab;
  onSelectVideo?: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

export const RapBeauchefSection: React.FC<RapBeauchefSectionProps> = ({
  initialSubTab = 'presencial',
  onSelectVideo,
  onBackToDashboard,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<BeauchefSubTab>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Data sources
  const beauchefData = archiveData.competitions.find((c) => c.id === 'rap-beauchef')!;
  const escritasData = archiveData.competitions.find((c) => c.id === 'las-escritas')!;
  const libreData = archiveData.competitions.find((c) => c.id === 'rap-libre')!;

  // Presencial Videos & Photos
  const presencialVideos = beauchefData?.media?.youtube_videos || [];
  const presencialPhotos = galleryData.filter(
    (item) => item.competitionId === 'rap-beauchef' && item.category === 'Fotografía en Vivo'
  );
  const [selectedPresencialPhotoIndex, setSelectedPresencialPhotoIndex] = useState<number | null>(null);

  // Las Escritas Videos & Filter
  const allEscritasVideos = escritasData?.media?.youtube_videos || [];
  const [escritasFilter, setEscritasFilter] = useState<'all' | 'finals' | 'quarters' | 'eighths' | 'cuarentena'>('all');
  const filteredEscritasVideos = allEscritasVideos.filter((v) => {
    if (escritasFilter === 'finals') {
      return v.stage?.includes('Final Escritas Beauchef') || v.stage?.includes('Semifinales Escritas Beauchef') || v.stage?.includes('3er Lugar');
    }
    if (escritasFilter === 'quarters') {
      return v.stage?.includes('4tos Temáticos');
    }
    if (escritasFilter === 'eighths') {
      return v.stage?.includes('8vos Escritas Beauchef') || v.stage?.includes('Filtros');
    }
    if (escritasFilter === 'cuarentena') {
      return v.stage?.includes('Cuarentena Rap');
    }
    return true;
  });

  // Rap Libre Photos
  const rapLibrePhotos = galleryData.filter(
    (item) =>
      item.competitionId === 'rap-libre' ||
      ['B3VR8cqABYU', 'B3VfufbAH6A', 'B3ZZb3BgR1R', 'B9ljgLMngum'].includes(item.id)
  );
  const [selectedLibrePhotoIndex, setSelectedLibrePhotoIndex] = useState<number | null>(null);

  const handleOpenVideo = (video: YoutubeVideo) => {
    if (onSelectVideo) {
      onSelectVideo(video);
    } else {
      window.open(video.url, '_blank');
    }
  };

  return (
    <section id="rap-beauchef" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#07131d] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-crt-cyan transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-cyan-500/50 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Inicio</span>
            </button>
            <div className="font-mono text-[10px] text-crt-cyan uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crt-cyan animate-ping" />
              EXPEDIENTE // RAP BEAUCHEF · MATRIZ CULTURAL
            </div>
          </div>
        )}

        {/* Section Header with Official Black Calligraphy Logo */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Logo Oficial Rap Beauchef: Cápsula blanca con zoom ajustado */}
            <div className="relative group shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1 border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="./logos/rap-beauchef.png"
                  alt="Logo Oficial Rap Beauchef"
                  className="w-full h-full object-contain filter drop-shadow-sm scale-[1.25]"
                />
              </div>
              <span className="absolute -bottom-2 -right-1 font-mono text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-900 border border-cyan-500/50 text-cyan-300 shadow">
                OFICIAL
              </span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="cyan">Liga Matriz Fundacional // 2017–2021</Badge>
                <span className="font-mono text-xs text-neutral-400">Anfiteatro FCFM Universidad de Chile</span>
                
                {/* Direct Social Sources */}
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
                data-text="RAP BEAUCHEF"
                className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
              >
                <Mic2 className="w-8 h-8 sm:w-10 sm:h-10 text-crt-cyan inline" />
                RAP BEAUCHEF
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
                {beauchefData.subtitle}
              </p>
            </div>
          </div>

          <div className="bg-surface border border-cyan-500/30 rounded-xl p-5 max-w-md shadow-glow-cyan">
            <span className="font-mono text-[10px] text-crt-cyan uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Núcleo Matriz
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-mono">
              {beauchefData.venue}
            </p>
          </div>
        </div>

        {/* 3-Section Selector Bar for Rap Beauchef */}
        <div className="bg-neutral-900/90 border-2 border-surface-border p-2 rounded-2xl flex flex-col sm:flex-row gap-2.5 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setActiveSubTab('presencial')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'presencial'
                ? 'bg-cyan-500 text-neutral-950 shadow-[0_0_20px_rgba(6,182,212,0.45)] ring-2 ring-cyan-300 scale-[1.01]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80 border border-transparent'
            }`}
          >
            <Mic2 className="w-4 h-4" />
            <span>El Presencial (Anfiteatro FCFM)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('escritas')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'escritas'
                ? 'bg-amber-400 text-neutral-950 shadow-[0_0_20px_rgba(251,191,36,0.45)] ring-2 ring-amber-300 scale-[1.01]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80 border border-transparent'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Las Escritas (Duelos Poéticos)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('rap-libre')}
            className={`flex-1 flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeSubTab === 'rap-libre'
                ? 'bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.45)] ring-2 ring-rose-300 scale-[1.01]'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80 border border-transparent'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>Rap Libre (Versión Plaza & Solidaria)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* SUB-SECTION 1: EL PRESENCIAL (ANFITEATRO FCFM)                           */}
        {/* ========================================================================= */}
        {activeSubTab === 'presencial' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Context Badge */}
            <div className="flex items-center gap-2 pb-2 border-b border-cyan-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                Modalidad 01 // Batallas en Vivo en el Anfiteatro FCFM (2017–2019)
              </span>
            </div>

            {/* 3 Pillars of Live Production */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-cyan-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-crt-cyan">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Acústica en Hormigón & Sonido Autogestionado
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Rigging sonoro autogestionado en el anfiteatro de Beauchef: consolas análogas, microfonía dinámica resistente al viento y monitoreo en vivo para superar la reverberación del concreto.
                </p>
              </div>

              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-cyan-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-crt-cyan">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Cyphers Masivos & Comunidad Universitaria
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Convocatorias masivas de más de 400 estudiantes y letristas del circuito metropolitano en cada jornada, congregados en gradas y círculos de rima al atardecer y noche.
                </p>
              </div>

              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-cyan-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-crt-cyan">
                  <Disc3 className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Breaking & Cuatro Elementos en el Patio
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Duelos de B-Boys y B-Girls frente a la icónica cúpula de Beauchef, integrando el baile urbano, DJing y la improvisación oral en una experiencia cultural integral.
                </p>
              </div>
            </div>

            {/* Video Vault: Presencial Live Battles */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-surface-border/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-crt-cyan" />
                    <span className="font-mono text-xs uppercase tracking-wider text-crt-cyan font-bold">
                      Bóveda Presencial // Canal Oficial @rapbeauchef8447
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-crt-cyan" />
                    Batallas Presenciales en Vivo // BDG Beauchef 2017
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {presencialVideos.length} BATALLAS PRESENCIALES RECUPERADAS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {presencialVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleOpenVideo(video)}
                    className="group cursor-pointer bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-cyan-500/60 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video bg-neutral-950 overflow-hidden">
                      <img
                        src={`./covers/youtube/${video.id}.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-7 h-7" />
                        </div>
                      </div>

                      {video.duration && (
                        <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-neutral-200 border border-white/10 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-crt-cyan" />
                          <span>{video.duration}</span>
                        </div>
                      )}

                      {video.stage && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/80 text-crt-cyan border border-cyan-500/30">
                            {video.stage}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-crt-cyan transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="pt-2 border-t border-surface-border/40 flex items-center justify-between font-mono text-xs text-neutral-400">
                        <span className="text-crt-cyan group-hover:underline">Ver en YouTube &rarr;</span>
                        <span className="text-neutral-500 text-[10px]">Archivo BDG</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Presencial Photo Gallery */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-surface-border/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Camera className="w-4 h-4 text-crt-cyan" />
                    <span className="font-mono text-xs uppercase tracking-wider text-crt-cyan font-bold">
                      Registro Visual Presencial // Archivo FCFM
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-crt-cyan" />
                    <span>Postales del Anfiteatro & Cyphers Universitarios</span>
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {presencialPhotos.length} REGISTROS FOTOGRÁFICOS EN VIVO
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {presencialPhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className="group bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-cyan-500/60 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between"
                  >
                    <div
                      onClick={() => setSelectedPresencialPhotoIndex(idx)}
                      className="cursor-pointer relative aspect-[4/3] bg-neutral-950 overflow-hidden"
                    >
                      <img
                        src={`./covers/instagram/${photo.filename}`}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-black/80 border border-white/10 text-cyan-300">
                          {photo.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between border-t border-surface-border/40">
                      <div className="space-y-1.5">
                        <h4 className="font-mono text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-neutral-300 font-sans line-clamp-3 leading-relaxed">
                          {photo.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-surface-border/40 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedPresencialPhotoIndex(idx)}
                          className="font-mono text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Ampliar Foto</span>
                        </button>

                        <a
                          href={`https://www.instagram.com/p/${photo.id}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-pink-500/30 text-pink-400 hover:bg-pink-500 hover:text-white font-mono text-[10px] font-bold transition-all shadow-sm"
                        >
                          <InstagramIcon className="w-3 h-3" />
                          <span>Instagram ↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Presencial Lightbox */}
            {selectedPresencialPhotoIndex !== null && presencialPhotos[selectedPresencialPhotoIndex] && (
              <LightboxModal
                poster={presencialPhotos[selectedPresencialPhotoIndex]}
                onClose={() => setSelectedPresencialPhotoIndex(null)}
                onNext={() => setSelectedPresencialPhotoIndex((prev) => ((prev ?? 0) + 1) % presencialPhotos.length)}
                onPrev={() => setSelectedPresencialPhotoIndex((prev) => (((prev ?? 0) - 1 + presencialPhotos.length) % presencialPhotos.length))}
              />
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-SECTION 2: LAS ESCRITAS (DUELOS POÉTICOS)                            */}
        {/* ========================================================================= */}
        {activeSubTab === 'escritas' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Context Badge */}
            <div className="flex items-center gap-2 pb-2 border-b border-amber-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                Modalidad 02 // Batallas Escritas, Rúbrica Poética & A Capella (2019–2021)
              </span>
            </div>

            {/* Genealogy Banner */}
            <div className="bg-gradient-to-r from-amber-950/40 via-surface to-neutral-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Genealogía del Certamen Escrito
                </span>
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                Del Anfiteatro de Beauchef (2019) a la Liga Digital Internacional (2020–2021)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                El formato de batallas escritas nació presencialmente en el anfiteatro de la Facultad de Ciencias Físicas y Matemáticas (FCFM) con un torneo temático de personajes conceptuales, y evolucionó durante la pandemia hacia un certamen transnacional en Cuarentena Rap, conectando plumas consagradas de Chile, Argentina, Colombia, Perú y México.
              </p>
            </div>

            {/* 3 Pillars of Escritas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Métricas Multisilábicas & Estructura
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Composiciones complejas con rimas consonantes extendidas de 4 a 8 sílabas, calambures y paralelismos sintácticos que desafían los límites del lenguaje rap.
                </p>
              </div>

              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Contenido Sustantivo vs. Rima Vacía
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Erradicación del insulto fácil o superficial: los duelos escritos exigen argumentación dialéctica, introspección personal y deconstrucción de la narrativa del adversario.
                </p>
              </div>

              <div className="bg-surface border border-surface-border rounded-xl p-6 space-y-3 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Rúbrica de Jurados Especializados
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Evaluación pública por letristas consagrados puntuando criterio lírico (35%), puesta en escena y delivery (25%), coherencia conceptual (20%) y flow métrico (20%).
                </p>
              </div>
            </div>

            {/* Video Vault of Written Battles */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-surface-border/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold">
                      Bóveda de Batallas Escritas // Registros Oficiales
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span>Catálogo Audiovisual de Duelos Poéticos</span>
                  </h3>
                </div>
                
                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    { id: 'all', label: `Todas (${allEscritasVideos.length})` },
                    { id: 'finals', label: 'Beauchef: Finales & Semis' },
                    { id: 'quarters', label: 'Beauchef: 4tos Temáticos' },
                    { id: 'eighths', label: 'Beauchef: 8vos' },
                    { id: 'cuarentena', label: 'Cuarentena Rap' },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setEscritasFilter(filter.id as any)}
                      className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        escritasFilter === filter.id
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-glow-amber'
                          : 'bg-surface border-surface-border text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEscritasVideos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => handleOpenVideo(vid)}
                    className="group cursor-pointer bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-amber-500/60 hover:shadow-glow-amber transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video bg-neutral-950 overflow-hidden flex items-center justify-center">
                      <img
                        src={`./covers/youtube/${vid.id}.jpg`}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-amber-500 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-6 h-6" />
                        </div>
                      </div>
                      {vid.stage && (
                        <div className="absolute top-2.5 left-2.5">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-black/80 text-amber-400 border border-amber-500/30">
                            {vid.stage}
                          </span>
                        </div>
                      )}
                      {vid.duration && (
                        <div className="absolute bottom-2.5 right-2.5 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-neutral-200 border border-white/10 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{vid.duration}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                      <h4 className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                        {vid.title}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-surface-border/40">
                        <span className="text-amber-400 group-hover:underline">Ver en YouTube &rarr;</span>
                        <span className="text-neutral-500 text-[10px]">@rapbeauchef8447</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUB-SECTION 3: RAP LIBRE (VERSIÓN PLAZA & SOLIDARIA)                     */}
        {/* ========================================================================= */}
        {activeSubTab === 'rap-libre' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Context Badge */}
            <div className="flex items-center gap-2 pb-2 border-b border-rose-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="font-mono text-xs uppercase tracking-wider text-rose-400 font-bold">
                Modalidad 03 // Rap Libre: Plazas Urbanas & Acopio Popular (2019–2020)
              </span>
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
                  {libreData.production?.social_purpose}
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
                  {libreData.production?.protest_context}
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <Users className="w-3.5 h-3.5 text-crt-amber" />
                  <span>Conexión directa con asambleas territoriales, cabildos abiertos y plazas populares</span>
                </div>
              </div>
            </div>

            {/* Photographic Archive: Rap Libre in Public Squares */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-surface-border/60">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Camera className="w-4 h-4 text-crt-red" />
                    <span className="font-mono text-xs uppercase tracking-wider text-crt-red font-bold">
                      Archivo Fotográfico // Espacio Público & Resistencia
                    </span>
                  </div>
                  <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-crt-red" />
                    <span>Postales de Rap Libre & Movilización Popular</span>
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-400">
                  {rapLibrePhotos.length} REGISTROS FOTOGRÁFICOS DESCLASIFICADOS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rapLibrePhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    className="group bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-rose-500/60 hover:shadow-glow-red transition-all duration-300 flex flex-col justify-between"
                  >
                    <div
                      onClick={() => setSelectedLibrePhotoIndex(idx)}
                      className="cursor-pointer relative aspect-[4/3] bg-neutral-950 overflow-hidden"
                    >
                      <img
                        src={`./covers/instagram/${photo.filename}`}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4 text-rose-400" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <span className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-black/80 border border-white/10 text-rose-300">
                          {photo.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between border-t border-surface-border/40">
                      <div className="space-y-1.5">
                        <h4 className="font-mono text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-neutral-300 font-sans line-clamp-3 leading-relaxed">
                          {photo.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-surface-border/40 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedLibrePhotoIndex(idx)}
                          className="font-mono text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                        >
                          <Maximize2 className="w-3 h-3" />
                          <span>Ampliar Foto</span>
                        </button>

                        <a
                          href={`https://www.instagram.com/p/${photo.id}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-900 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white font-mono text-[10px] font-bold transition-all shadow-sm"
                        >
                          <InstagramIcon className="w-3 h-3" />
                          <span>Instagram ↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rap Libre Lightbox */}
            {selectedLibrePhotoIndex !== null && rapLibrePhotos[selectedLibrePhotoIndex] && (
              <LightboxModal
                poster={rapLibrePhotos[selectedLibrePhotoIndex]}
                onClose={() => setSelectedLibrePhotoIndex(null)}
                onNext={() => setSelectedLibrePhotoIndex((prev) => ((prev ?? 0) + 1) % rapLibrePhotos.length)}
                onPrev={() => setSelectedLibrePhotoIndex((prev) => (((prev ?? 0) - 1 + rapLibrePhotos.length) % rapLibrePhotos.length))}
              />
            )}
          </div>
        )}

      </div>
    </section>
  );
};
