// Web Audio API procedural 90s Underground Boom-Bap & Dark Atmosphere Engine
// Generates authentic 89 BPM boom-bap drums, sub basslines, vinyl crackle and crypt drones.
// 100% offline, zero external sound files, works in all modern browsers.

export type SoundEngineMode = 'boombap' | 'ambient';

class DarkAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private mode: SoundEngineMode = 'boombap';
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;

  // Rhythm Sequencer variables
  private timerID: number | null = null;
  private nextStepTime: number = 0;
  private currentStep: number = 0;
  private bpm: number = 89; // Classic 90s underground hip-hop tempo
  private lookahead: number = 25.0; // ms
  private scheduleAheadTime: number = 0.1; // seconds

  // Ambient nodes
  private bassOsc1: OscillatorNode | null = null;
  private bassOsc2: OscillatorNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private noiseNode: AudioNode | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public async start(initialMode?: SoundEngineMode): Promise<boolean> {
    try {
      this.init();
      if (!this.ctx) return false;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      if (initialMode) this.mode = initialMode;
      if (this.isRunning) return true;

      const now = this.ctx.currentTime;

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.32, now + 1.5);

      // Analyser for visualizer
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      this.isRunning = true;

      // Start vinyl crackle noise
      this.startVinylNoise();

      if (this.mode === 'boombap') {
        this.startBoomBapSequencer();
      } else {
        this.startAmbientDrone();
      }

      return true;
    } catch (e) {
      console.error('Failed to start DarkAudioEngine:', e);
      return false;
    }
  }

  public setMode(newMode: SoundEngineMode) {
    if (this.mode === newMode) return;
    this.mode = newMode;
    if (this.isRunning) {
      if (newMode === 'boombap') {
        this.stopAmbientDrone();
        this.startBoomBapSequencer();
      } else {
        this.stopBoomBapSequencer();
        this.startAmbientDrone();
      }
    }
  }

  public getMode(): SoundEngineMode {
    return this.mode;
  }

  // --- 90s BOOM-BAP PROCEDURAL SEQUENCER ---
  private startBoomBapSequencer() {
    if (!this.ctx) return;
    this.currentStep = 0;
    this.nextStepTime = this.ctx.currentTime + 0.05;
    this.scheduler();
  }

  private stopBoomBapSequencer() {
    if (this.timerID !== null) {
      window.clearTimeout(this.timerID);
      this.timerID = null;
    }
  }

  private scheduler = () => {
    if (!this.isRunning || !this.ctx || this.mode !== 'boombap') return;

    while (this.nextStepTime < this.ctx.currentTime + this.scheduleAheadTime) {
      this.scheduleStep(this.currentStep, this.nextStepTime);
      this.advanceStep();
    }
    this.timerID = window.setTimeout(this.scheduler, this.lookahead);
  };

  private advanceStep() {
    // 16th note step duration in seconds
    const secondsPerBeat = 60.0 / this.bpm;
    const stepDuration = 0.25 * secondsPerBeat;
    // 90s MPC style groove swing: delay odd 16th notes by 12%
    const swingOffset = this.currentStep % 2 === 1 ? stepDuration * 0.12 : 0;

    this.nextStepTime += stepDuration + swingOffset;
    this.currentStep = (this.currentStep + 1) % 16;
  }

  private scheduleStep(step: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Pattern in 16 steps (1 bar of 90s Boom Bap):
    // Kick: steps 0, 6, 8, 10
    if (step === 0 || step === 6 || step === 8 || step === 10) {
      this.playBoomBapKick(time);
    }

    // Snare (fat, cracked 90s snare): steps 4, 12
    if (step === 4 || step === 12) {
      this.playBoomBapSnare(time);
    }

    // Hi-Hats: all even steps + swung odd steps
    if (step % 2 === 0) {
      const isAccent = step % 4 === 0;
      this.playBoomBapHat(time, isAccent ? 0.22 : 0.12);
    } else if (step === 7 || step === 15) {
      // Ghost hat
      this.playBoomBapHat(time, 0.08);
    }

    // Sub-Bass groove: Re menor (D minor root = 36.71Hz, F = 43.65Hz, G = 49Hz)
    if (step === 0) {
      this.playBassNote(36.71, time, 0.45); // D1
    } else if (step === 6) {
      this.playBassNote(43.65, time, 0.35); // F1
    } else if (step === 8) {
      this.playBassNote(49.0, time, 0.4); // G1
    } else if (step === 12) {
      this.playBassNote(36.71, time, 0.45); // D1
    }
  }

  // Synthesis of classic 90s analog Kick drum
  private playBoomBapKick(time: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    // Pitch envelope drop: 140Hz punch down to 42Hz sub
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(42, time + 0.16);

    gain.gain.setValueAtTime(0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.38);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.4);
  }

  // Synthesis of gritty 90s Snare drum (noise burst + tone drop)
  private playBoomBapSnare(time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Body tone
    const osc = this.ctx.createOscillator();
    const toneGain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.1);

    toneGain.gain.setValueAtTime(0.5, time);
    toneGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);
    osc.connect(toneGain);
    toneGain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + 0.18);

    // Crackle noise burst
    const bufferSize = this.ctx.sampleRate * 0.25;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, time);
    filter.Q.setValueAtTime(1.5, time);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.55, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.25);
  }

  // Synthesis of closed/open Hi-Hat
  private playBoomBapHat(time: number, vol: number) {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7500, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(time);
    noise.stop(time + 0.07);
  }

  // Deep Sub-Bass note
  private playBassNote(freq: number, time: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(120, time);
    filter.Q.setValueAtTime(2.0, time);

    gain.gain.setValueAtTime(0.45, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // --- VINYL DUST CRACKLE (ALWAYS RUNS SUTTLY) ---
  private startVinylNoise() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.035;
    }
    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(700, this.ctx.currentTime);
    noiseFilter.Q.setValueAtTime(1.0, this.ctx.currentTime);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    whiteNoise.start();
    this.noiseNode = whiteNoise;
  }

  // --- AMBIENT DRONE MODE ---
  private startAmbientDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(130, now);
    filter.Q.setValueAtTime(4.0, now);
    filter.connect(this.masterGain);

    this.bassOsc1 = this.ctx.createOscillator();
    this.bassOsc1.type = 'sawtooth';
    this.bassOsc1.frequency.setValueAtTime(36.71, now);
    const b1Gain = this.ctx.createGain();
    b1Gain.gain.setValueAtTime(0.5, now);
    this.bassOsc1.connect(b1Gain);
    b1Gain.connect(filter);
    this.bassOsc1.start();

    this.bassOsc2 = this.ctx.createOscillator();
    this.bassOsc2.type = 'triangle';
    this.bassOsc2.frequency.setValueAtTime(55.0, now);
    this.bassOsc2.detune.setValueAtTime(-12, now);
    const b2Gain = this.ctx.createGain();
    b2Gain.gain.setValueAtTime(0.4, now);
    this.bassOsc2.connect(b2Gain);
    b2Gain.connect(filter);
    this.bassOsc2.start();
  }

  private stopAmbientDrone() {
    try {
      this.bassOsc1?.stop();
      this.bassOsc2?.stop();
      this.droneOsc?.stop();
    } catch {
      // Ignore
    }
  }

  public stop() {
    if (!this.isRunning || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    setTimeout(() => {
      this.stopBoomBapSequencer();
      this.stopAmbientDrone();
      try {
        if (this.noiseNode && 'stop' in this.noiseNode) {
          (this.noiseNode as AudioScheduledSourceNode).stop();
        }
      } catch {
        // Ignore
      }
      this.isRunning = false;
    }, 900);
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }

  public getSpectrumData(): number[] {
    if (!this.analyser || !this.isRunning) {
      return [4, 6, 8, 12, 10, 7, 5, 3];
    }
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    const bins = 8;
    const step = Math.floor(data.length / bins);
    const result: number[] = [];
    for (let i = 0; i < bins; i++) {
      let sum = 0;
      for (let j = 0; j < step; j++) {
        sum += data[i * step + j];
      }
      result.push(Math.round(sum / step / 3.8));
    }
    return result;
  }
}

export const darkAmbientAudio = new DarkAudioEngine();
