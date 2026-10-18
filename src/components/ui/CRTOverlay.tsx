import React from 'react';

interface CRTOverlayProps {
  enabled: boolean;
}

export const CRTOverlay: React.FC<CRTOverlayProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden"
    >
      {/* Subtle CRT scanlines layer */}
      <div className="absolute inset-0 crt-scanlines pointer-events-none opacity-40" />

      {/* Optical CRT curved vignette */}
      <div className="absolute inset-0 crt-vignette pointer-events-none opacity-80" />

      {/* Gentle rolling VHS scanning beam */}
      <div className="vhs-beam" />

      {/* Top Left: Vintage Rec HUD */}
      <div className="absolute top-3 left-4 flex items-center gap-2 font-mono text-[10px] text-crt-amber/70 tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-crt-red animate-ping" />
        <span className="text-crt-red font-bold">REC ●</span>
        <span className="text-neutral-500">|</span>
        <span className="text-neutral-400">CH 03 // DANIEL_S_SANTANDER_URRUTIA</span>

      </div>

      {/* Top Right: VHS Tape Play Status */}
      <div className="absolute top-3 right-4 flex items-center gap-2 font-mono text-[10px] text-crt-cyan/70 tracking-widest uppercase">
        <span className="font-bold text-crt-cyan">SP PLAY ▶</span>
        <span className="text-neutral-500">|</span>
        <span className="text-neutral-400">NTSC 1920x1080</span>
      </div>

      {/* Bottom Left: Archive Tag */}
      <div className="absolute bottom-3 left-4 font-mono text-[9px] text-neutral-500/70 tracking-wider uppercase hidden sm:block">
        ARCHIVE DOSSIER 2019–2021 · AUTO-TRACKING LOCK
      </div>

      {/* Bottom Right: Audio Specs */}
      <div className="absolute bottom-3 right-4 font-mono text-[9px] text-neutral-500/70 tracking-wider uppercase hidden sm:block">
        HI-FI STEREO // OPUS 64KBPS 48KHZ
      </div>
    </div>
  );
};

