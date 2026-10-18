import React, { useState } from 'react';
import { Megaphone, HeartHandshake, Flame, Users, ArrowLeft, Maximize2, Sparkles, Camera } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { InstagramIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { LightboxModal } from '../media/LightboxModal';

interface RapLibreSectionProps {
  onViewGalleryForLibre?: () => void;
  onBackToDashboard?: () => void;
}

export const RapLibreSection: React.FC<RapLibreSectionProps> = ({
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'rap-libre')!;

  // Fotografías de Rap Libre, Plaza Dignidad y Cyphers Callejeros
  const rapLibrePhotos = galleryData.filter(
    (item) =>
      item.competitionId === 'rap-libre' ||
      ['B3VR8cqABYU', 'B3VfufbAH6A', 'B3ZZb3BgR1R', 'B9ljgLMngum'].includes(item.id)
  );

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section id="rap-libre" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#180d0d] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-rose-400 transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-rose-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Dashboard General</span>
            </button>
            <div className="font-mono text-[10px] text-crt-red uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crt-red animate-ping" />
              EXPEDIENTE // 03: RAP LIBRE
            </div>
          </div>
        )}

        {/* Section Header with Glitch on Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="red">Hito 03 // 2019–2020</Badge>
              <span className="font-mono text-xs text-neutral-400">Plazas Urbanas & Solidaridad Popular</span>
            </div>
            <h2
              data-text="RAP LIBRE"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <Megaphone className="w-9 h-9 text-crt-red inline" />
              RAP LIBRE
            </h2>
            <p className="crt-subtext text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data.subtitle}
            </p>
          </div>

          <div className="bg-surface border border-rose-500/30 rounded-xl p-5 max-w-md shadow-glow-red">
            <span className="font-mono text-[10px] text-crt-red uppercase tracking-wider block mb-1">
              Territorio y Espacio Público
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-mono">
              {data.venue}
            </p>
          </div>
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
              {data.production?.social_purpose}
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
              {data.production?.protest_context}
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-neutral-400">
              <Users className="w-3.5 h-3.5 text-crt-amber" />
              <span>Conexión directa con asambleas territoriales, cabildos abiertos y plazas populares</span>
            </div>
          </div>

        </div>

        {/* Photographic Archive: Registro en Vivo & Plaza */}
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
                  onClick={() => setSelectedPhotoIndex(idx)}
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
                      onClick={() => setSelectedPhotoIndex(idx)}
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

        {/* Lightbox Modal for Rap Libre */}
        {selectedPhotoIndex !== null && rapLibrePhotos[selectedPhotoIndex] && (
          <LightboxModal
            poster={rapLibrePhotos[selectedPhotoIndex]}
            onClose={() => setSelectedPhotoIndex(null)}
            onNext={() => setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % rapLibrePhotos.length)}
            onPrev={() => setSelectedPhotoIndex((prev) => (((prev ?? 0) - 1 + rapLibrePhotos.length) % rapLibrePhotos.length))}
          />
        )}

      </div>
    </section>
  );
};

