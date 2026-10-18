import React, { useState, useEffect } from 'react';
import { User, ArrowLeft } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { archiveData } from '../../data/archive-data';

interface ArchivalHeaderProps {
  activeMode: 'dossier' | 'executive';
  onChangeMode: (mode: 'dossier' | 'executive') => void;
  onGoHome?: () => void;
}

export const ArchivalHeader: React.FC<ArchivalHeaderProps> = ({
  activeMode,
  onChangeMode,
  onGoHome,
}) => {
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const frames = String(Math.floor((now.getMilliseconds() / 1000) * 30)).padStart(2, '0');
      setTimecode(`${hours}:${minutes}:${seconds}:${frames}`);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Identifier */}
        <button
          onClick={() => {
            if (activeMode !== 'dossier') onChangeMode('dossier');
            if (onGoHome) onGoHome();
          }}
          className="flex items-center gap-3 text-left group transition-opacity hover:opacity-90"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden border border-crt-amber/40 shadow-xs group-hover:border-crt-amber group-hover:scale-105 transition-all shrink-0">
            <img src="./app_icon.svg" alt="Dossier Rap Icon" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-white group-hover:text-crt-amber transition-colors">
                Dossier Rap
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700">
                2019–2021
              </span>
            </div>
            <p className="font-mono text-[10px] text-neutral-400 tracking-wide hidden md:block">
              Curaduría & Dirección: Daniel Santander
            </p>
          </div>
        </button>

        {/* Timecode & Live status */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-xs bg-neutral-900/80 px-3 py-1.5 rounded border border-neutral-800">
          <span className="flex items-center gap-1.5 text-crt-red text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-crt-red animate-ping" />
            REC
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-300 tracking-widest">{timecode}</span>
        </div>

        {/* Social channels & Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {archiveData.socials && (
            <div className="flex items-center gap-1.5 border-r border-neutral-800 pr-2 sm:pr-3">
              <a
                href={archiveData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @rap.beauchef"
                className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={archiveData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="Canal de YouTube @rapbeauchef8447"
                className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {activeMode === 'executive' ? (
            <button
              onClick={() => onChangeMode('dossier')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-border text-white border border-neutral-600 font-mono text-xs hover:border-crt-amber transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-crt-amber" />
              <span>Volver al Archivo</span>
            </button>
          ) : (
            <button
              onClick={() => onChangeMode('executive')}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-crt-cyan font-mono text-xs transition-all shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-crt-cyan" />
              <span className="font-semibold tracking-wide">Autor</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
