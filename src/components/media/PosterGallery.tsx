import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Filter, Layers, Maximize2, Tag, Sparkles } from 'lucide-react';
import { galleryData } from '../../data/gallery-data';
import { PosterItem } from '../../types/archive';
import { Badge } from '../ui/Badge';
import { LightboxModal } from './LightboxModal';

interface PosterGalleryProps {
  initialCompetitionFilter?: string;
}

export const PosterGallery: React.FC<PosterGalleryProps> = ({
  initialCompetitionFilter = 'all',
}) => {
  const [competitionFilter, setCompetitionFilter] = useState<string>(initialCompetitionFilter);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Lista de categorías únicas
  const categories = ['all', ...Array.from(new Set(galleryData.map((p) => p.category)))];

  // Filtrado de afiches
  const filteredPosters: PosterItem[] = galleryData.filter((item) => {
    const matchComp =
      competitionFilter === 'all' || item.competitionId === competitionFilter;
    const matchCat =
      categoryFilter === 'all' || item.category === categoryFilter;
    return matchComp && matchCat;
  });

  // Asegurar que selectedIndex no quede fuera de rango al cambiar filtros
  useEffect(() => {
    setSelectedIndex(0);
  }, [competitionFilter, categoryFilter]);

  const currentPoster = filteredPosters[selectedIndex] || filteredPosters[0];

  const handleNext = () => {
    if (filteredPosters.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % filteredPosters.length);
  };

  const handlePrev = () => {
    if (filteredPosters.length === 0) return;
    setSelectedIndex((prev) => (prev - 1 + filteredPosters.length) % filteredPosters.length);
  };

  // Atajos de teclado para el carrusel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredPosters.length, isLightboxOpen]);

  if (!currentPoster) return null;

  return (
    <section id="gallery" className="py-16 border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="cyan" size="sm">Bóveda Visual</Badge>
              <span className="font-mono text-xs text-neutral-400">49 Piezas Gráficas Originales</span>
            </div>
            <h2
              data-text="ARCHIVO GRÁFICO & AFICHES DE CULTO"
              className="glitch-text font-mono text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight"
            >
              ARCHIVO GRÁFICO & AFICHES DE CULTO
            </h2>
            <p className="crt-subtext text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              Carrusel editorial con registro histórico, fixtures, convocatorias y fases (2019–2021).
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-400 bg-surface px-3 py-1.5 rounded-lg border border-surface-border">
            PIEZA <strong className="text-crt-amber">{selectedIndex + 1}</strong> DE {filteredPosters.length}
          </div>
        </div>

        {/* Filters Panel */}
        <div className="bg-surface/80 border border-surface-border rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest flex items-center gap-1.5 flex-shrink-0">
              <Filter className="w-3 h-3 text-crt-amber" /> LIGA:
            </span>
            {[
              { id: 'all', label: 'Todas las Producciones' },
              { id: 'rap-beauchef', label: 'Rap Beauchef (Presencial)' },
              { id: 'duenas-de-la-voz', label: 'Dueñas de la Voz' },
              { id: 'discord-rap-beauchef', label: 'Discord Rap Beauchef' },
              { id: 'cuarentena-rap', label: 'Cuarentena Rap' },
              { id: 'rap-libre', label: 'Rap Libre' },
            ].map((comp) => (
              <button
                key={comp.id}
                onClick={() => setCompetitionFilter(comp.id)}
                className={`px-3 py-1 rounded font-mono text-xs transition-colors flex-shrink-0 ${
                  competitionFilter === comp.id
                    ? 'bg-crt-amber text-neutral-950 font-bold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {comp.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-surface-border/50">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest flex items-center gap-1.5 flex-shrink-0">
              <Layers className="w-3 h-3 text-crt-cyan" /> TEMA:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-0.5 rounded font-mono text-[11px] transition-colors flex-shrink-0 ${
                  categoryFilter === cat
                    ? 'bg-neutral-200 text-neutral-950 font-bold'
                    : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {cat === 'all' ? 'Todos los temas' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Split Curatorial Gallery: Left Carousel + Right Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Carousel Container (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Main Stage Image with Navigation Arrows */}
            <div className="relative aspect-square sm:aspect-[4/3] bg-neutral-950 border border-surface-border rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group">
              
              <img
                key={currentPoster.id}
                src={`./covers/instagram/${currentPoster.filename}`}
                alt={currentPoster.title}
                className="w-full h-full object-contain p-2 transition-all duration-300"
              />

              {/* Floating Action Buttons over Image */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-2 rounded-lg bg-black/70 backdrop-blur-md text-white hover:bg-black border border-white/20 transition-colors shadow-lg"
                  title="Ampliar a pantalla completa"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Carousel Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-crt-amber hover:text-neutral-950 transition-all opacity-80 group-hover:opacity-100 shadow-xl"
                title="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Carousel Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-crt-amber hover:text-neutral-950 transition-all opacity-80 group-hover:opacity-100 shadow-xl"
                title="Siguiente foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Carousel Counter Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-neutral-300">
                {selectedIndex + 1} / {filteredPosters.length}
              </div>

            </div>

            {/* Thumbnail Horizontal Scroller Strip */}
            <div className="bg-surface/50 border border-surface-border rounded-xl p-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {filteredPosters.map((poster, idx) => (
                <button
                  key={poster.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === selectedIndex
                      ? 'border-crt-amber scale-105 shadow-glow-amber'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-neutral-500'
                  }`}
                >
                  <img
                    src={`./covers/instagram/${poster.filename}`}
                    alt={poster.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: Curatorial Description Dossier (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Badges & Meta */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={currentPoster.competitionId === 'cuarentena-rap' ? 'amber' : currentPoster.competitionId === 'rap-beauchef' ? 'cyan' : 'red'}>
                  {currentPoster.competitionId.toUpperCase()}
                </Badge>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  AÑO {currentPoster.year}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  ID: {currentPoster.id}
                </span>
              </div>

              {/* Title with Glitch */}
              <div>
                <h3
                  data-text={currentPoster.title}
                  className="glitch-text font-mono text-xl sm:text-2xl font-bold text-white leading-snug"
                >
                  {currentPoster.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 font-mono text-xs text-crt-cyan">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{currentPoster.category}</span>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="border-t border-surface-border/60 pt-4 space-y-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
                  Contexto Histórico & Curaduría:
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {currentPoster.desc || 'Pieza gráfica original de difusión, convocatoria y registro visual perteneciente al archivo de competencias dirigidas por Daniel Santander.'}
                </p>
              </div>

              {/* Extra Archival Insight Card */}
              <div className="bg-neutral-950/70 border border-surface-border/80 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                  <Sparkles className="w-3.5 h-3.5 text-crt-amber" />
                  <span className="font-bold text-white">Notas de Producción</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {currentPoster.competitionId === 'cuarentena-rap' && (
                    'Pieza diseñada para el certamen digital en confinamiento, comunicando la atmósfera ritual de la muerte simbólica y catarsis colectiva a través de los canales de la liga.'
                  )}
                  {currentPoster.competitionId === 'rap-beauchef' && (
                    'Registro gráfico de los encuentros universitarios en el anfiteatro de Beauchef y las convocatorias del certamen femenino "Dueñas de la Voz".'
                  )}
                  {currentPoster.competitionId === 'rap-libre' && (
                    'Diseño orientado a la convocatoria callejera popular, articulando campañas de acopio directo de víveres durante emergencias y movilización social.'
                  )}
                </p>
              </div>

            </div>

            {/* Bottom Technical Deck */}
            <div className="pt-6 border-t border-surface-border">
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>CURADOR: DANIEL SANTANDER</span>
                <span>ORIGEN: ARCHIVO OFICIAL INSTAGRAM</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <LightboxModal
          poster={currentPoster}
          onClose={() => setIsLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
