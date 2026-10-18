import React, { useState } from 'react';
import { Mic2, Volume2, Users, ArrowLeft, Camera, MapPin, Disc3, Maximize2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { archiveData } from '../../data/archive-data';
import { galleryData } from '../../data/gallery-data';
import { LightboxModal } from '../media/LightboxModal';

interface RapBeauchefSectionProps {
  onSelectVideo?: (video: any) => void;
  onBackToDashboard?: () => void;
}

export const RapBeauchefSection: React.FC<RapBeauchefSectionProps> = ({
  onBackToDashboard,
}) => {
  const data = archiveData.competitions.find((c) => c.id === 'rap-beauchef')!;
  
  // Fotos 100% presenciales de Rap Beauchef en el anfiteatro y patios
  const presencialPhotos = galleryData.filter(
    (item) => item.competitionId === 'rap-beauchef' && item.category === 'Fotografía en Vivo'
  );

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  return (
    <section id="rap-beauchef" className="py-12 border-b border-surface-border bg-gradient-to-b from-[#07131d] via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Dedicated Back Navigation Bar */}
        {onBackToDashboard && (
          <div className="flex items-center justify-between pb-4 border-b border-surface-border/50">
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-crt-cyan transition-colors px-3 py-1.5 rounded-lg bg-surface border border-surface-border hover:border-cyan-500/50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver al Inicio</span>
            </button>
            <div className="font-mono text-[10px] text-crt-cyan uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-crt-cyan animate-ping" />
              EXPEDIENTE // RAP BEAUCHEF (PRESENCIAL)
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-border/60">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="cyan">Competencias Presenciales // 2019–2020</Badge>
              <span className="font-mono text-xs text-neutral-400">Anfiteatro FCFM Universidad de Chile</span>
            </div>
            <h2
              data-text="RAP BEAUCHEF"
              className="glitch-text font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3"
            >
              <Mic2 className="w-9 h-9 text-crt-cyan inline" />
              RAP BEAUCHEF
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-mono">
              {data.subtitle}
            </p>
          </div>

          <div className="bg-surface border border-cyan-500/30 rounded-xl p-5 max-w-md shadow-glow-cyan">
            <span className="font-mono text-[10px] text-crt-cyan uppercase tracking-wider block mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Locación & Entorno
            </span>
            <p className="text-xs text-neutral-200 leading-relaxed font-mono">
              {data.venue}
            </p>
          </div>
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

        {/* Dedicated Live Photo Vault (Fotografías Presenciales Exclusivas) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-surface-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Camera className="w-4 h-4 text-crt-cyan" />
                <span className="font-mono text-xs uppercase tracking-wider text-crt-cyan font-bold">
                  Archivo Fotográfico Presencial
                </span>
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                Registro en Directo: Batallas, Gradas & Tarima
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              {presencialPhotos.length} FOTOGRAFÍAS HISTÓRICAS RECUPERADAS
            </span>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {presencialPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(idx)}
                className="group cursor-pointer bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-cyan-500/60 hover:shadow-glow-cyan transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video sm:aspect-[4/3] bg-neutral-950 overflow-hidden flex items-center justify-center">
                  <img
                    src={`./covers/instagram/${photo.filename}`}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/20 text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-crt-cyan" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="font-mono text-[10px] text-crt-cyan font-bold uppercase tracking-wider bg-black/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      {photo.year} // Presencial
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-mono text-sm font-bold text-white group-hover:text-crt-cyan transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-neutral-400 font-sans line-clamp-2">
                    {photo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox for photos */}
        {selectedPhotoIndex !== null && presencialPhotos[selectedPhotoIndex] && (
          <LightboxModal
            poster={presencialPhotos[selectedPhotoIndex]}
            onClose={() => setSelectedPhotoIndex(null)}
            onNext={() => setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % presencialPhotos.length)}
            onPrev={() => setSelectedPhotoIndex((prev) => (((prev ?? 0) - 1 + presencialPhotos.length) % presencialPhotos.length))}
          />
        )}

      </div>
    </section>
  );
};
