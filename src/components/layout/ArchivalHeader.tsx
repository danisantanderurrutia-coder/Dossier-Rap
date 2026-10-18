import React from 'react';
import { User, ArrowLeft } from 'lucide-react';

interface ArchivalHeaderProps {
  activeMode: 'dossier' | 'executive';
  onChangeMode: (mode: 'dossier' | 'executive') => void;
  onGoHome?: () => void;
}

export const ArchivalHeader: React.FC<ArchivalHeaderProps> = ({
  activeMode,
  onChangeMode,
}) => {
  return (
    <div className="fixed top-4 right-4 sm:right-6 z-50 pointer-events-auto">
      {activeMode === 'executive' ? (
        <button
          onClick={() => onChangeMode('dossier')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-900/95 text-white border border-neutral-700 font-mono text-xs hover:border-crt-amber hover:text-crt-amber transition-all shadow-xl backdrop-blur-md cursor-pointer hover:scale-105"
          title="Volver al Archivo"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-crt-amber" />
          <span className="font-bold">Volver al Archivo</span>
        </button>
      ) : (
        <button
          onClick={() => onChangeMode('executive')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-950/90 border border-neutral-800 text-neutral-300 hover:text-white hover:border-crt-cyan font-mono text-xs transition-all shadow-xl backdrop-blur-md cursor-pointer hover:scale-105"
          title="Ver Expediente de Autor"
        >
          <User className="w-3.5 h-3.5 text-crt-cyan" />
          <span className="font-semibold tracking-wide">Autor</span>
        </button>
      )}
    </div>
  );
};
