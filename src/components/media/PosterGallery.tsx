import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Filtrado estricto: ÚNICAMENTE fotografías en vivo de competidores o liga presencial (cero flyers)
  const filteredPosters: PosterItem[] = galleryData.filter((item) => {
    const isLivePhoto = item.category === 'Fotografía en Vivo' && item.id !== 'B1k2tdFgYoK';
    if (!isLivePhoto) return false;
    return competitionFilter === 'all' || item.competitionId === competitionFilter;
  });

  // Resetear índice al cambiar de filtro
  useEffect(() => {
    setSelectedIndex(0);
  }, [competitionFilter]);

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
              <Badge variant="cyan" size="sm">Registro Presencial</Badge>
              <span className="font-mono text-xs text-neutral-400">{filteredPosters.length} Fotografías en Vivo</span>
            </div>
            <h2
              data-text="FOTOGRAFÍA EN VIVO & COMPETIDORES"
              className="glitch-text font-mono text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight"
            >
              FOTOGRAFÍA EN VIVO & COMPETIDORES
            </h2>
            <p className="crt-subtext text-xs sm:text-sm text-neutral-400 font-mono mt-1">
              Registro directo en el anfiteatro de Beauchef: emcees al micrófono, cyphers en círculo, jurados y batallas en vivo.
            </p>
          </div>

          <div className="font-mono text-xs text-neutral-400 bg-surface px-3 py-1.5 rounded-lg border border-surface-border">
            FOTO <strong className="text-crt-amber">{selectedIndex + 1}</strong> DE {filteredPosters.length}
          </div>
        </div>

        {/* Streamlined Live Photo Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: 'Todas las Fotos' },
            { id: 'rap-beauchef', label: 'Rap Beauchef (Anfiteatro)' },
            { id: 'duenas-de-la-voz', label: 'Dueñas de la Voz' },
            { id: 'cuarentena-rap', label: 'Breaking' },
          ].map((comp) => (
            <button
              key={comp.id}
              onClick={() => setCompetitionFilter(comp.id)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-colors flex-shrink-0 cursor-pointer ${
                competitionFilter === comp.id
                  ? 'bg-crt-amber text-neutral-950 font-bold shadow-xs'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {comp.label}
            </button>
          ))}
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
              <div className="border-t border-surface-border/60 pt-4 space-y-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">
                  Registro de la Batalla:
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  {currentPoster.desc}
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
