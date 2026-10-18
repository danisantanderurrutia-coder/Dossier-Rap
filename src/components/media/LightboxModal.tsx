import React, { useEffect } from 'react';
import { X, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { PosterItem } from '../../types/archive';
import { Badge } from '../ui/Badge';

interface LightboxModalProps {
  poster: PosterItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  poster,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!poster) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-surface border border-surface-border text-white hover:bg-neutral-800 transition-colors shadow-lg"
        title="Cerrar visor (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next floating arrows */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface/80 border border-surface-border text-white hover:bg-neutral-800 transition-colors hidden sm:block shadow-lg"
          title="Anterior pieza"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface/80 border border-surface-border text-white hover:bg-neutral-800 transition-colors hidden sm:block shadow-lg"
          title="Siguiente pieza"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Dialog Content */}
      <div className="relative max-w-4xl w-full bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-2xl my-auto flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Left: Poster Image display */}
        <div className="relative md:w-3/5 bg-neutral-950 flex items-center justify-center p-4 overflow-hidden">
          <img
            src={`./covers/instagram/${poster.filename}`}
            alt={poster.title}
            className="max-h-[75vh] w-auto object-contain rounded shadow-lg"
          />
        </div>

        {/* Right: Technical Archival Dossier Card */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between space-y-6 overflow-y-auto">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="amber" size="sm">
                {poster.competitionId.toUpperCase()}
              </Badge>
              <span className="font-mono text-xs text-neutral-400">
                {poster.year}
              </span>
            </div>

            <h3 className="font-mono text-xl font-bold text-white leading-snug">
              {poster.title}
            </h3>

            <div className="space-y-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2 text-neutral-400">
                <Tag className="w-3.5 h-3.5 text-crt-amber" />
                <span>Categoría: {poster.category}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-crt-cyan" />
                <span>Archivo ID: {poster.id}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-sans border-t border-surface-border pt-4">
              {poster.desc || 'Pieza gráfica original de difusión, convocatoria y registro visual perteneciente al archivo de competencias dirigidas por Daniel S. Santander Urrutia.'}
            </p>
          </div>

          <div className="pt-4 border-t border-surface-border space-y-2 text-[11px] font-mono text-neutral-400">
            <div>FORMATO: JPG ORIGINAL // RESOLUCIÓN ARCHIVO</div>
            <div>CURADURÍA: DANIEL S. SANTANDER URRUTIA</div>
          </div>


        </div>

      </div>

    </div>
  );
};
