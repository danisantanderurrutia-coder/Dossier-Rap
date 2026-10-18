import React, { useState, useEffect } from 'react';
import { CuarentenaPortal } from '../../types/cuarentena';

interface CuarentenaBackgroundProps {
  portal: CuarentenaPortal;
}

const portalImageMap: Record<string, string> = {
  'portal-0-genesis': './backgrounds/cuarentena/portal-0.jpg',
  'portal-1-ronda-cero': './backgrounds/cuarentena/portal-1.jpg',
  'portal-2-cementerio': './backgrounds/cuarentena/portal-2.jpg',
  'portal-3-karmas': './backgrounds/cuarentena/portal-3.jpg',
  'portal-break': './backgrounds/cuarentena/portal-break.jpg',
  'portal-4-cuartos': './backgrounds/cuarentena/portal-4.jpg',
  'portal-5-semifinales': './backgrounds/cuarentena/portal-5.jpg',
  'portal-6-final': './backgrounds/cuarentena/portal-6.jpg',
};

export const CuarentenaBackground: React.FC<CuarentenaBackgroundProps> = ({ portal }) => {
  const [currentImage, setCurrentImage] = useState<string>(portalImageMap[portal.id] || '');
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    const nextImg = portalImageMap[portal.id];
    if (nextImg && nextImg !== currentImage) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setCurrentImage(nextImg);
        setIsFading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [portal.id, currentImage]);

  const theme = portal.bgAtmosphere.theme;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden transition-all duration-1000 ease-in-out z-0">
      {/* CAPA 0: CINEMATIC GEMINI AI REALISTIC BACKGROUND IMAGE */}
      {currentImage && (
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <img
            src={currentImage}
            alt=""
            className={`w-full h-full object-cover object-center filter brightness-[0.8] contrast-[1.15] saturate-[0.95] transition-all duration-700 ${
              isFading ? 'opacity-0 scale-100' : 'opacity-75 sm:opacity-85 scale-105'
            }`}
          />
        </div>
      )}

      {/* Atmospheric Dark Tint & Vignette that preserves artwork details */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(9,10,13,0.75)_95%)]" />

      {/* Scanline CRT Subtle Filter */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] opacity-15" />

      {/* THEME SPECIFIC PROCEDURAL LIGHT ACCENTS */}

      {/* 1. CORCELES & PLAGA (AMBAR) */}
      {theme === 'confinement-horse' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" />
        </div>
      )}

      {/* 2. CELDAS DE GRABACIÓN & DISCORD (VERDE) */}
      {theme === 'matrix-leagues' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />
        </div>
      )}

      {/* 3. CEMENTERIO & CRIPTA (VIOLETA FÚNEBRE) */}
      {theme === 'crypt-tomb' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-purple-950/70 via-purple-900/20 to-transparent" />
          <div className="absolute top-10 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />
        </div>
      )}

      {/* 4. CASA DE KARMAS & CUERVOS (ROJO CARMESÍ) */}
      {theme === 'karmas-crow' && (
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/25 rounded-full blur-3xl" />
        </div>
      )}

      {/* 5. BREAKING CYPHER (CIAN ESTROBO) */}
      {theme === 'breaking-cypher' && (
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00f0ff15_0%,transparent_70%)]" />
        </div>
      )}

      {/* 6. MURO DE GRAFFITI (AMARILLO VAPOR DE SODIO) */}
      {theme === 'graffiti-concrete' && (
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-yellow-500/15 rounded-full blur-[100px]" />
        </div>
      )}

      {/* 7. FORJA IDEOLÓGICA (ACERO & AZUL PROFUNDO) */}
      {theme === 'ideology-geometry' && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-sky-400/10 rotate-45" />
        </div>
      )}

      {/* 8. CUMBRE DE LOS LOBOS (LUNA ROJA & AURORA) */}
      {theme === 'wolf-resurrection' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-12 right-24 w-48 h-48 bg-gradient-to-br from-red-600/35 to-amber-500/25 rounded-full blur-3xl animate-pulse" />
        </div>
      )}
    </div>
  );
};
