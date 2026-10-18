import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Disc, Skull } from 'lucide-react';
import { darkAmbientAudio, SoundEngineMode } from '../../utils/darkAmbientAudio';

interface DarkAmbientPlayerProps {
  isCryptZone?: boolean;
}

export const DarkAmbientPlayer: React.FC<DarkAmbientPlayerProps> = ({ isCryptZone = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState<SoundEngineMode>('boombap');
  const [spectrum, setSpectrum] = useState<number[]>([3, 5, 8, 12, 9, 6, 4, 2]);

  useEffect(() => {
    let animId: number;
    const updateSpectrum = () => {
      if (darkAmbientAudio.getIsPlaying()) {
        setSpectrum(darkAmbientAudio.getSpectrumData());
      }
      animId = requestAnimationFrame(updateSpectrum);
    };
    animId = requestAnimationFrame(updateSpectrum);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleTogglePlay = async () => {
    if (isPlaying) {
      darkAmbientAudio.stop();
      setIsPlaying(false);
    } else {
      const ok = await darkAmbientAudio.start(mode);
      if (ok) setIsPlaying(true);
    }
  };

  const handleSwitchMode = (newMode: SoundEngineMode) => {
    setMode(newMode);
    darkAmbientAudio.setMode(newMode);
    if (!isPlaying) {
      darkAmbientAudio.start(newMode).then((ok) => {
        if (ok) setIsPlaying(true);
      });
    }
  };

  return (
    <div
      className={`relative rounded-xl p-3.5 transition-all duration-300 border backdrop-blur-md ${
        isCryptZone
          ? 'bg-purple-950/40 border-purple-500/50 shadow-glow-cyan'
          : 'bg-neutral-950/80 border-surface-border hover:border-amber-500/40'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Play/Pause button + Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
              isPlaying
                ? 'bg-crt-amber text-neutral-950 shadow-glow-amber animate-pulse'
                : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-700 hover:border-amber-500/50'
            }`}
            title={isPlaying ? 'Pausar audio' : 'Reproducir base underground 90s'}
          >
            {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? 'bg-crt-amber animate-ping' : 'bg-neutral-600'
                }`}
              />
              <span className="font-mono text-[10px] uppercase tracking-wider text-crt-amber font-black flex items-center gap-1.5">
                <Disc className="w-3 h-3 text-crt-amber animate-spin [animation-duration:8s]" />
                Banda Sonora Oficial // Web Audio Procedural
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-100 font-bold mt-0.5">
              {isPlaying
                ? mode === 'boombap'
                  ? '90s Underground Boom-Bap (89 BPM / MPC Groove + Vinilo)'
                  : 'Atmósfera de Cripta (Drone Sub-bajo 36.7Hz Re Menor)'
                : 'Música pausada · Haz clic para iniciar base 90s'}
            </p>
          </div>
        </div>

        {/* Center: Mode Switcher (Boom-Bap vs Cripta) */}
        <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-lg border border-neutral-800">
          <button
            onClick={() => handleSwitchMode('boombap')}
            className={`px-2.5 py-1 rounded font-mono text-[10px] font-bold transition-all flex items-center gap-1.5 ${
              mode === 'boombap'
                ? 'bg-amber-500/20 text-crt-amber border border-amber-500/40 shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Disc className="w-3 h-3" />
            <span>Rap 90s Boom-Bap</span>
          </button>

          <button
            onClick={() => handleSwitchMode('ambient')}
            className={`px-2.5 py-1 rounded font-mono text-[10px] font-bold transition-all flex items-center gap-1.5 ${
              mode === 'ambient'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-xs'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Skull className="w-3 h-3" />
            <span>Cripta Oscura</span>
          </button>
        </div>

        {/* Right: Graphic visualizer */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <div className="flex items-end gap-1 h-7 px-2.5 py-1 bg-black/70 rounded-lg border border-neutral-800">
            {spectrum.map((val, idx) => (
              <div
                key={idx}
                className={`w-1 rounded-xs transition-all duration-75 ${
                  isPlaying
                    ? mode === 'boombap'
                      ? 'bg-gradient-to-t from-amber-600 to-amber-300'
                      : 'bg-gradient-to-t from-purple-700 to-purple-300'
                    : 'bg-neutral-700'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(15, Math.min(100, val * 3.8))}%` : '20%',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
