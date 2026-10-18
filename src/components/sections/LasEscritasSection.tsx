import React from 'react';
import { PenTool, PlayCircle, BookOpen, ArrowLeft, HelpCircle, CheckCircle2, Feather, Flame } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { archiveData } from '../../data/archive-data';
import { YoutubeVideo } from '../../types/archive';

interface LasEscritasSectionProps {
  onSelectVideo?: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

export const LasEscritasSection: React.FC<LasEscritasSectionProps> = ({
  onSelectVideo,
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'las-escritas')!;
  const videos = data?.media?.youtube_videos || [];

  return (
    <section id="las-escritas" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#1b120c] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-amber-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Inicio</span>
            </button>
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              EXPEDIENTE // LAS ESCRITAS
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="amber">Formato Poético & Literario // 2020–2021</Badge>
              <span className="font-mono text-xs text-neutral-400">Batallas de Barras Preparadas</span>
            </div>
            <h2
              data-text="LAS ESCRITAS"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <PenTool className="w-9 h-9 text-amber-400 inline" />
              LAS ESCRITAS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data?.subtitle || 'Torneo de Barras Escritas, Duelos Poéticos & Rúbrica Literaria'}
            </p>
          </div>

          <div className="bg-surface border border-amber-500/30 rounded-xl p-5 max-w-md shadow-glow-amber">
            <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <Feather className="w-3.5 h-3.5" /> Filosofía del Formato
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-sans">
              A diferencia del freestyle donde prima la espontaneidad inmediata, en las escritas los emcees pulen cada compás durante semanas con métricas multisilábicas y densidad conceptual.
            </p>
          </div>
        </div>

        {/* Curatorial Consultation Box: Addressing the user's doubt */}
        <div className="bg-gradient-to-r from-amber-950/30 via-surface to-neutral-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-base sm:text-lg font-bold text-white">
                Dilema Curatorial: ¿Qué hacer con &ldquo;Las Escritas&rdquo;?
              </h3>
              <p className="font-mono text-xs text-amber-300">
                Tres alternativas arquitectónicas para su integración permanente en el Dossier
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            <div className="bg-neutral-950/70 border border-amber-500/30 rounded-xl p-4 space-y-2">
              <div className="font-mono text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Opción 1: Expediente Propio (Actual)
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Mantenerla como sección independiente en el menú lateral. Permite destacar la técnica literaria, las rúbricas poéticas y los videos de duelos escritos sin mezclarlos con el freestyle.
              </p>
            </div>

            <div className="bg-neutral-950/70 border border-surface-border rounded-xl p-4 space-y-2 hover:border-neutral-700 transition-colors">
              <div className="font-mono text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-500" />
                Opción 2: Eje en Cuarentena Rap
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Subsumir las escritas como un filtro de modalidad ("Freestyle vs. Escritas") dentro de Cuarentena Rap y Discord, dado que allí se originó el certamen.
              </p>
            </div>

            <div className="bg-neutral-950/70 border border-surface-border rounded-xl p-4 space-y-2 hover:border-neutral-700 transition-colors">
              <div className="font-mono text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-500" />
                Opción 3: Antología de Barras
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Transformarla en un "Laboratorio Lírico" interactivo con fragmentos transcritos de las mejores rimas, análisis de métricas y glosario de figuras literarias.
              </p>
            </div>

          </div>
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
          <div className="flex items-center justify-between pb-2 border-b border-surface-border/60">
            <h3 className="font-mono text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-amber-400" />
              <span>Registro de Batallas Escritas Oficiales</span>
            </h3>
            <span className="font-mono text-xs text-neutral-400">
              {videos.length} ENFRENTAMIENTOS SELECCIONADOS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => onSelectVideo ? onSelectVideo(vid) : window.open(vid.url, '_blank')}
                className="group cursor-pointer bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-amber-500/60 hover:shadow-glow-amber transition-all duration-300 flex flex-col"
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
                  <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 rounded font-mono text-[10px] text-amber-400 border border-neutral-800">
                    {vid.stage}
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {vid.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-surface-border/40">
                    <span>{vid.duration}</span>
                    <span className="text-amber-400 group-hover:underline">Ver en YouTube &rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
