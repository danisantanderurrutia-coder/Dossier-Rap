import React from 'react';
import { Terminal, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-border bg-surface/80 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-crt-amber animate-pulse" />
            <span className="font-mono text-sm font-bold tracking-wider uppercase text-white">
              Archivo Hip-Hop & Competencias de Rap (2019–2021)
            </span>
          </div>
          <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
            Curaduría, dirección conceptual, producción técnica y arquitectura de comunidades dirigida por{' '}
            <strong className="text-neutral-200">Daniel S. Santander Urrutia</strong>. Documentación histórica de resistencia cultural, autogestión y soberanía lírica en Chile y Latinoamérica.

          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-mono text-neutral-400">
          <a
            href="https://www.instagram.com/rap.beauchef/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800 hover:border-pink-500/50 hover:text-pink-400 transition-colors"
          >
            <span className="text-[11px] font-bold">@rap.beauchef</span>
            <span className="text-[10px] text-neutral-400 font-mono">(Instagram)</span>
          </a>

          <a
            href="https://www.youtube.com/@rapbeauchef8447"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800 hover:border-red-500/50 hover:text-red-400 transition-colors"
          >
            <span className="text-[11px] font-bold">@rapbeauchef8447</span>
            <span className="text-[10px] text-neutral-400 font-mono">(YouTube)</span>
          </a>

          <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800">
            <ShieldCheck className="w-3.5 h-3.5 text-crt-green" />
            <span>100% Autogestión Cultural</span>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded border border-neutral-800">
            <Terminal className="w-3.5 h-3.5 text-crt-cyan" />
            <span>React + TypeScript</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
        <div>
          © 2019–2021 Daniel S. Santander Urrutia · Todos los derechos artísticos y de registro reservados.
        </div>

        <div className="flex items-center gap-1 text-neutral-400">
          Construido con <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline mx-0.5" /> para la cultura hip-hop y la memoria colectiva.
        </div>
      </div>
    </footer>
  );
};
