import React, { useState } from 'react';
import {
  PlayCircle,
  ShieldCheck,
  Disc,
  FolderArchive,
  Volume2,
  Users,
  Compass,
  Radio,
  CheckCircle2,
  Maximize2,
  X,
  Layers,
  Trophy,
} from 'lucide-react';
import { CuarentenaPortal, PortalBattleVideo } from '../../types/cuarentena';
import { YoutubeVideo } from '../../types/archive';
import { DarkAmbientPlayer } from './DarkAmbientPlayer';

interface PortalViewDetailProps {
  portal: CuarentenaPortal;
  onSelectVideo: (video: YoutubeVideo) => void;
}

export const PortalViewDetail: React.FC<PortalViewDetailProps> = ({
  portal,
  onSelectVideo,
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    desc?: string;
  } | null>(null);

  const [playingVideo, setPlayingVideo] = useState<PortalBattleVideo | null>(null);
  const [activeTab, setActiveTab] = useState<'content' | 'lore' | 'media'>('content');

  const handleLaunchVideo = (v: PortalBattleVideo) => {
    setPlayingVideo(v);
    onSelectVideo({
      id: v.id,
      title: v.title,
      url: v.url,
      stage: v.stage,
      duration: v.duration,
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* PORTAL HERO HEADER */}
      <div className="relative bg-surface/90 border border-surface-border rounded-2xl p-6 sm:p-8 backdrop-blur-md overflow-hidden">
        {/* Glow corner */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[90px] opacity-25 pointer-events-none"
          style={{ backgroundColor: portal.bgAtmosphere.accentHex }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-2.5 py-1 rounded font-mono text-[11px] font-extrabold uppercase tracking-wider text-black"
                style={{ backgroundColor: portal.bgAtmosphere.accentHex }}
              >
                {portal.spineCode}
              </span>
              <span className="font-mono text-xs text-neutral-400">
                {portal.dimensionName}
              </span>
              <span className="font-mono text-xs text-crt-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-crt-green" />
                Umbral Desbloqueado
              </span>
            </div>

            <h2 className="font-mono text-2xl sm:text-4xl font-black text-white tracking-tight">
              {portal.title}
            </h2>

            <p className="font-mono text-sm text-neutral-300">
              {portal.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans pt-1">
              {portal.contextNarrative}
            </p>
          </div>

          {/* Totem Badge Box */}
          <div className="bg-neutral-950/80 border border-surface-border/80 rounded-xl p-5 max-w-sm flex-shrink-0 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xl">
                {portal.totem === 'horse' && '🐎'}
                {portal.totem === 'scroll' && '📜'}
                {portal.totem === 'tomb' && '⚰️'}
                {portal.totem === 'crow' && '🦅'}
                {portal.totem === 'break' && '⚡'}
                {portal.totem === 'graffiti' && '🎨'}
                {portal.totem === 'ideology' && '👁️'}
                {portal.totem === 'wolf' && '🐺'}
              </span>
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider"
                style={{ color: portal.bgAtmosphere.accentHex }}
              >
                Tótem: {portal.totemLabel}
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed italic font-sans">
              &ldquo;{portal.totemMeaning}&rdquo;
            </p>
            <div className="pt-2 border-t border-neutral-800 font-mono text-[11px] text-crt-amber">
              Manifiesto: {portal.conceptQuote}
            </div>
          </div>
        </div>

        {/* CINEMATIC ENVIRONMENTAL CANVAS OF THIS PORTAL */}
        <div className="mt-6 relative rounded-xl overflow-hidden border border-surface-border/80 group shadow-2xl">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full bg-neutral-950 overflow-hidden">
            <img
              src={
                portal.id === 'portal-0-genesis' ? './backgrounds/cuarentena/portal-0.jpg' :
                portal.id === 'portal-1-ronda-cero' ? './backgrounds/cuarentena/portal-1.jpg' :
                portal.id === 'portal-2-cementerio' ? './backgrounds/cuarentena/portal-2.jpg' :
                portal.id === 'portal-3-karmas' ? './backgrounds/cuarentena/portal-3.jpg' :
                portal.id === 'portal-break' ? './backgrounds/cuarentena/portal-break.jpg' :
                portal.id === 'portal-4-cuartos' ? './backgrounds/cuarentena/portal-4.jpg' :
                portal.id === 'portal-5-semifinales' ? './backgrounds/cuarentena/portal-5.jpg' :
                './backgrounds/cuarentena/portal-6.jpg'
              }
              alt={portal.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/30" />

            {/* Overlay metadata */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: portal.bgAtmosphere.accentHex }}
                  />
                  <span
                    className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-black/70 border border-white/10 text-white"
                  >
                    FOTOGRAMA DE ENTORNO // {portal.dimensionName}
                  </span>
                </div>
                <h3 className="font-mono text-sm sm:text-base font-black text-white drop-shadow-md">
                  {portal.title}
                </h3>
              </div>

              <button
                onClick={() =>
                  setSelectedImage({
                    url:
                      portal.id === 'portal-0-genesis' ? './backgrounds/cuarentena/portal-0.jpg' :
                      portal.id === 'portal-1-ronda-cero' ? './backgrounds/cuarentena/portal-1.jpg' :
                      portal.id === 'portal-2-cementerio' ? './backgrounds/cuarentena/portal-2.jpg' :
                      portal.id === 'portal-3-karmas' ? './backgrounds/cuarentena/portal-3.jpg' :
                      portal.id === 'portal-break' ? './backgrounds/cuarentena/portal-break.jpg' :
                      portal.id === 'portal-4-cuartos' ? './backgrounds/cuarentena/portal-4.jpg' :
                      portal.id === 'portal-5-semifinales' ? './backgrounds/cuarentena/portal-5.jpg' :
                      './backgrounds/cuarentena/portal-6.jpg',
                    title: `Entorno Visual: ${portal.title}`,
                    desc: portal.contextNarrative,
                  })
                }
                className="px-3.5 py-1.5 rounded-lg bg-neutral-950/90 hover:bg-neutral-900 border border-white/20 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5 backdrop-blur-md shadow-lg"
              >
                <Maximize2 className="w-3.5 h-3.5 text-crt-amber" />
                <span>Ampliar Escenario</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab switcher inside portal */}
        <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'content'
                ? 'bg-neutral-800 text-white border border-surface-border'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Expediente de Fase & Dinámica
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'media'
                ? 'bg-neutral-800 text-white border border-surface-border'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Evidencia Audiovisual & Archivo
          </button>
        </div>
      </div>

      {/* PORTAL 2 EXCLUSIVE: DARK AMBIENT PROCEDURAL SOUND PLAYER */}
      {portal.id === 'portal-2-cementerio' && (
        <div className="animate-pulse">
          <DarkAmbientPlayer isCryptZone={true} />
        </div>
      )}

      {/* TAB CONTENT: DETAILED DYNAMIC MODULES ACCORDING TO PORTAL */}
      {activeTab === 'content' && (
        <div className="space-y-8">
          {/* 1. PORTAL 0: GÉNESIS & BASES PROTOCOLS & JUDGES */}
          {portal.id === 'portal-0-genesis' && (
            <div className="space-y-6">
              {/* Three Protocol Rubric Posts */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-crt-amber" />
                  <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">
                    Protocolos Éticos y Bases de Evaluación (3 Posts Fundacionales)
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {portal.rubricPosts?.map((post) => (
                    <div
                      key={post.id}
                      className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div
                          className="relative aspect-square bg-neutral-900 cursor-pointer overflow-hidden"
                          onClick={() =>
                            setSelectedImage({
                              url: `./covers/instagram/${post.filename}`,
                              title: post.title,
                              desc: post.ruleExcerpt,
                            })
                          }
                        >
                          <img
                            src={`./covers/instagram/${post.filename}`}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="p-2 rounded-full bg-neutral-950/80 border border-amber-500/50 text-crt-amber opacity-0 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-5 h-5" />
                            </div>
                          </div>
                          <div className="absolute top-2 left-2 bg-neutral-950/80 px-2 py-0.5 rounded font-mono text-[10px] text-crt-amber border border-neutral-800">
                            {post.number}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <h4 className="font-mono text-xs font-bold text-white group-hover:text-crt-amber transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                            {post.ruleExcerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <button
                          onClick={() =>
                            setSelectedImage({
                              url: `./covers/instagram/${post.filename}`,
                              title: post.title,
                              desc: post.ruleExcerpt,
                            })
                          }
                          className="w-full py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 font-mono text-[11px] text-crt-amber transition-colors text-center"
                        >
                          Ampliar Documento &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Judges of Round 1 Presentation */}
              <div className="bg-gradient-to-r from-surface to-neutral-900 border border-surface-border rounded-xl p-6">
                <div className="flex items-center gap-2 text-crt-amber mb-3">
                  <Users className="w-5 h-5" />
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider">
                    {portal.judges?.role}
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {portal.judges?.rubricHighlight}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {portal.judges?.names.map((j, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex items-center gap-2 text-xs font-mono text-neutral-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-crt-green flex-shrink-0" />
                      <span>{j}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. PORTAL 1: RONDA CERO, LIGAS & BEATMAKERS / DRIVE & DISCORD */}
          {portal.id === 'portal-1-ronda-cero' && (
            <div className="space-y-6">
              {/* Participating Leagues Grid */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-crt-green" />
                    <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">
                      Cónclave de Ligas Participantes & Alianzas Internacionales
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    Red Federada 2020
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {portal.leagues?.map((l, i) => (
                    <div
                      key={i}
                      className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div
                          className="relative aspect-square bg-neutral-900 cursor-pointer overflow-hidden"
                          onClick={() =>
                            setSelectedImage({
                              url: `./covers/instagram/${l.coverImage}`,
                              title: `${l.name} - ${l.scope}`,
                              desc: l.description,
                            })
                          }
                        >
                          <img
                            src={`./covers/instagram/${l.coverImage}`}
                            alt={l.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute top-2 left-2 bg-neutral-950/80 px-2 py-0.5 rounded font-mono text-[9px] text-crt-green border border-neutral-800">
                            {l.iconTag}
                          </div>
                        </div>

                        <div className="p-3">
                          <h4 className="font-mono text-xs font-bold text-white group-hover:text-crt-green transition-colors">
                            {l.name}
                          </h4>
                          <span className="font-mono text-[10px] text-neutral-400 block mb-1">
                            {l.scope}
                          </span>
                          <p className="text-[11px] text-neutral-300 font-sans leading-snug line-clamp-3">
                            {l.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 pt-0">
                        <button
                          onClick={() =>
                            setSelectedImage({
                              url: `./covers/instagram/${l.coverImage}`,
                              title: `${l.name} - ${l.scope}`,
                              desc: l.description,
                            })
                          }
                          className="w-full py-1 rounded bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 font-mono text-[10px] text-crt-green transition-colors text-center"
                        >
                          Ver Insignia &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beatmakers & Drive/Discord Infrastructure */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-2 text-crt-amber">
                    <Disc className="w-5 h-5" />
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider">
                      Cuerpo Oficial de Beatmakers & Boom-Bap
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    Productores seleccionados crearon bancos de ritmos a 90 BPM diseñados para mantener la contundencia rítmica en grabaciones caseras sin estudios profesionales.
                  </p>
                  <div className="space-y-2">
                    {portal.driveDiscordKit?.beatmakers.map((b, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-200 flex items-center justify-between"
                      >
                        <span>{b}</span>
                        <span className="text-[10px] text-crt-amber">INSTRUMENTAL DRIVE</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-surface to-emerald-950/30 border border-emerald-900/40 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-2 text-crt-green">
                    <FolderArchive className="w-5 h-5" />
                    <h4 className="font-mono text-sm font-bold uppercase tracking-wider">
                      Distribución Digital: Google Drive & Discord
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {portal.driveDiscordKit?.kitDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {portal.driveDiscordKit?.discordChannels.map((c, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-300 flex items-center gap-2"
                      >
                        <Radio className="w-3.5 h-3.5 text-crt-green" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. PORTAL 2: RONDA PRIMERA // EL CEMENTERIO DE LAS TUMBAS */}
          {portal.id === 'portal-2-cementerio' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-400">
                  <Volume2 className="w-5 h-5" />
                  <h3 className="font-mono text-base font-bold text-white uppercase tracking-wider">
                    Batallas Grupales (6-7 Emcees): La Razón de la Muerte Simbólica
                  </h3>
                </div>
                <span className="font-mono text-xs text-purple-400 font-bold">
                  FASE DE CRIPTA 2020
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {portal.mortemProfiles?.map((m, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-purple-900/40 hover:border-purple-500 rounded-xl overflow-hidden transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="relative aspect-square bg-neutral-900 cursor-pointer overflow-hidden"
                        onClick={() =>
                          setSelectedImage({
                            url: `./covers/instagram/${m.coverImage}`,
                            title: `${m.name} // Causa: ${m.causeOfDeath}`,
                            desc: m.excerpt,
                          })
                        }
                      >
                        <img
                          src={`./covers/instagram/${m.coverImage}`}
                          alt={m.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-purple-950/30 group-hover:bg-transparent transition-colors" />
                        <div className="absolute bottom-2 left-2 right-2 bg-neutral-950/90 p-1.5 rounded border border-purple-800/60">
                          <span className="font-mono text-[10px] text-purple-300 font-bold block truncate">
                            {m.causeOfDeath}
                          </span>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-mono text-xs font-black text-white group-hover:text-purple-300 transition-colors">
                            {m.name}
                          </h4>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {m.team}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-300 font-sans leading-relaxed mt-2 line-clamp-3">
                          {m.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      <div className="pt-2 border-t border-purple-900/40 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-purple-400">{m.outcome}</span>
                        <span className="text-crt-amber">&rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Evaluations & Graveyard Rubric Box */}
              <div className="bg-neutral-950/80 border border-purple-900/50 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider">
                    Evaluaciones de Primera Ronda: El Juicio de la Lápida
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  El jurado evaluó en vivo mediante Discord la fidelidad de cada emcee a su motivo de deceso. Los participantes que recurrían al insulto prefabricado o ignoraban la temática de su tumba quedaban sentenciados; sólo aquellos capaces de realizar una introspección poética contundente accedieron al siguiente umbral.
                </p>
              </div>
            </div>
          )}

          {/* 4. PORTAL 3: SEGUNDA RONDA // CASA DE KARMAS (LAS KARPAS) */}
          {portal.id === 'portal-3-karmas' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-950/30 to-surface border border-red-900/40 rounded-xl p-6">
                <h3 className="font-mono text-sm font-bold text-red-400 uppercase tracking-wider mb-2">
                  La Purga en las Tiendas de Karma (Karpas)
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans max-w-3xl">
                  Al escapar de las tumbas, los emcees fueron agrupados en carpas según dilemas kármicos: la traición, el aislamiento forzado, el duelo familiar y el ego artístico. Tres entregas audiovisuales en YouTube recogieron la purga poética más intensa del certamen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portal.videos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => handleLaunchVideo(vid)}
                    className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-red-500/50 transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                      <img
                        src={`./covers/youtube/${vid.id}.jpg`}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-neutral-950/90 px-2 py-0.5 rounded font-mono text-[10px] text-red-400 border border-neutral-800">
                        {vid.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-mono text-xs font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 font-sans">
                        {vid.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. INTERLUDIO: BREAKING */}
          {portal.id === 'portal-break' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <div className="bg-surface border border-cyan-500/30 rounded-xl p-5 space-y-3">
                    <h4 className="font-mono text-sm font-bold text-cyan-400 uppercase tracking-wider">
                      La Danza como Resistencia Antiviral
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                      Los B-Boys y B-Girls se negaron a permanecer inmóviles. Utilizando linóleos en balcones, pasillos de departamentos y patios traseros, enviaron videos de footwork, freezes y giros de cabeza evaluados por los pioneros de la disciplina en Chile.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portal.galleryImageIds.slice(1).map((imgId) => (
                      <div
                        key={imgId}
                        onClick={() =>
                          setSelectedImage({
                            url: `./covers/instagram/${imgId}.jpg`,
                            title: 'Rutina de Breaking en Confinamiento',
                            desc: 'Video de postulación grabado en espacios reducidos durante la cuarentena obligatoria.',
                          })
                        }
                        className="bg-surface border border-surface-border rounded-xl overflow-hidden cursor-pointer hover:border-cyan-400/50 transition-all group"
                      >
                        <div className="relative aspect-video bg-neutral-900">
                          <img
                            src={`./covers/instagram/${imgId}.jpg`}
                            alt="Breaking"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-cyan-950/30 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="p-3 font-mono text-[11px] text-cyan-300 font-bold flex items-center justify-between">
                          <span>Footwork & Salto Aéreo</span>
                          <span>Ampliar &rarr;</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Judges breaking */}
                <div className="bg-neutral-950 border border-cyan-900/50 rounded-xl p-5 space-y-4">
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider block">
                    Cuerpo de Jueces de Breaking
                  </span>
                  <div className="aspect-square rounded-xl overflow-hidden border border-neutral-800">
                    <img
                      src="./covers/instagram/CHwWP8Wlq0u.jpg"
                      alt="Jurados Breaking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-mono text-xs font-bold text-white">
                      Tata Zapata & Mat Cabrera
                    </h5>
                    <p className="text-[11px] text-neutral-400 font-sans mt-1">
                      Leyendas de la danza urbana en Chile calificando musicalidad y limpieza acrobática sin ayuda de tarimas profesionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. PORTAL 4: CUARTOS DE FINAL // EL MURO DE GRAFFITI */}
          {portal.id === 'portal-4-cuartos' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-950/30 to-surface border border-yellow-900/40 rounded-xl p-5">
                <h4 className="font-mono text-sm font-bold text-yellow-400 uppercase tracking-wider mb-2">
                  Duelos Escritos 1v1 con Estética de Aerosol Urbano
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans max-w-3xl">
                  En los cuartos de final, los 8 mejores emcees se enfrentaron en duelos de ida y vuelta. Cada patrón de barras fue concebido como un trazo de pintura clandestina sobre el muro de la ciudad confinada.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {portal.graffitiBattles?.map((bat) => (
                  <div
                    key={bat.id}
                    onClick={() => handleLaunchVideo(bat)}
                    className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                        <img
                          src={`./covers/youtube/${bat.id}.jpg`}
                          alt={bat.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-yellow-500 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-neutral-950/90 px-2 py-0.5 rounded font-mono text-[9px] text-yellow-400 border border-neutral-800">
                          {bat.stage}
                        </div>
                      </div>

                      <div className="p-3">
                        <h4 className="font-mono text-xs font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {bat.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 font-sans mt-1 line-clamp-2">
                          {bat.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 pt-0">
                      <span className="font-mono text-[10px] text-yellow-400 group-hover:underline">
                        Reproducir Batalla &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. PORTAL 5: SEMIFINALES // LA FORJA IDEOLÓGICA */}
          {portal.id === 'portal-5-semifinales' && (
            <div className="space-y-6">
              <div className="bg-sky-950/30 border border-sky-500/40 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-sky-400">
                  <Compass className="w-5 h-5" />
                  <h4 className="font-mono text-sm font-bold uppercase tracking-wider">
                    {portal.ideologyDossier?.rule}
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {portal.ideologyDossier?.criteria}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {portal.ideologyDossier?.highlightBattles.map((bat) => (
                  <div
                    key={bat.id}
                    onClick={() => handleLaunchVideo(bat)}
                    className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-sky-400/50 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                        <img
                          src={`./covers/youtube/${bat.id}.jpg`}
                          alt={bat.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-sky-400 text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <PlayCircle className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-neutral-950/90 px-2 py-0.5 rounded font-mono text-[9px] text-sky-400 border border-neutral-800">
                          {bat.duration}
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="font-mono text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                          {bat.title}
                        </h4>
                        <p className="text-xs text-neutral-400 font-sans mt-1.5 leading-relaxed">
                          {bat.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0">
                      <span className="font-mono text-xs text-sky-400 group-hover:underline">
                        Ver Duelo Filosófico &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. PORTAL 6: GRAN FINAL // LA CUMBRE DE LOS LOBOS (RESURRECCIÓN) */}
          {portal.id === 'portal-6-final' && (
            <div className="space-y-6">
              {/* Champion Card */}
              <div className="bg-gradient-to-r from-amber-950/40 via-surface to-neutral-900 border border-amber-500/60 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-glow-amber flex-shrink-0 cursor-pointer">
                    <img
                      src={`./covers/instagram/${portal.finalFormat?.championImage}`}
                      alt="Campeón Crizzo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      onClick={() =>
                        setSelectedImage({
                          url: `./covers/instagram/${portal.finalFormat?.championImage}`,
                          title: `Crizzo - Campeón Absoluto de Cuarentena Rap`,
                          desc: 'Representante oficial de UAH Freestyle consagrado tras superar todas las fases de la resurrección lírica.',
                        })
                      }
                    />
                  </div>

                  <div className="space-y-2 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-400 text-neutral-950 font-mono text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5" />
                        CAMPEÓN DE LA RESURRECCIÓN
                      </span>
                      <span className="font-mono text-xs text-neutral-300">
                        {portal.finalFormat?.championLeague}
                      </span>
                    </div>

                    <h3 className="font-mono text-2xl sm:text-4xl font-black text-white">
                      {portal.finalFormat?.champion}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl font-sans">
                      Tras iniciar sepultado simbólicamente por el confinamiento de 2020, Crizzo atravesó la Cripta, las Karpas y el Muro de Concreto, venciendo a letristas de todo el continente y consagrándose en la cima de los lobos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Freedom of Formats Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-3">
                  <span className="font-mono text-[10px] text-crt-amber uppercase tracking-wider block">
                    Reglamento de la Gran Final: Libertad Expresiva Total
                  </span>
                  <h4 className="font-mono text-sm font-bold text-white">
                    Los 3 Caminos de la Resurrección
                  </h4>
                  <div className="space-y-2 pt-1">
                    {portal.finalFormat?.freedomTypes.map((type, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-200 flex items-center gap-2"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-crt-amber flex items-center justify-center font-bold text-[10px]">
                          0{i + 1}
                        </span>
                        <span>{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beatbox Showcase Box */}
                <div className="bg-surface border border-surface-border rounded-xl p-5 space-y-3">
                  <span className="font-mono text-[10px] text-crt-amber uppercase tracking-wider block">
                    Showcase de Beatbox en Vivo
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-neutral-700 flex-shrink-0">
                      <img
                        src={`./covers/instagram/${portal.finalFormat?.beatboxShowcase.image}`}
                        alt="OES Beatbox"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-mono text-sm font-bold text-white">
                        {portal.finalFormat?.beatboxShowcase.artist}
                      </h4>
                      <p className="text-[11px] text-neutral-400 font-sans mt-0.5">
                        {portal.finalFormat?.beatboxShowcase.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB MEDIA: AUDIOVISUAL ARCHIVE (VIDEOS & HIGH-RES INSTAGRAM COVERS) */}
      {activeTab === 'media' && (
        <div className="space-y-6">
          {/* Videos Grid */}
          {portal.videos.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-crt-amber" />
                Videos Oficiales de Esta Dimensión ({portal.videos.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portal.videos.map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => handleLaunchVideo(vid)}
                    className="bg-surface border border-surface-border rounded-xl overflow-hidden hover:border-amber-500/50 transition-all cursor-pointer group"
                  >
                    <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                      <img
                        src={`./covers/youtube/${vid.id}.jpg`}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-crt-amber text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <PlayCircle className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-neutral-950/80 px-2 py-0.5 rounded font-mono text-[10px] text-crt-amber border border-neutral-800">
                        {vid.stage}
                      </div>
                    </div>
                    <div className="p-3">
                      <h5 className="font-mono text-xs font-bold text-white group-hover:text-crt-amber transition-colors line-clamp-1">
                        {vid.title}
                      </h5>
                      <span className="text-[10px] font-mono text-neutral-400 block mt-1">
                        {vid.duration} · Abrir en Reproductor &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Archival Instagram Posters for this Portal */}
          {portal.galleryImageIds.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-surface-border/60">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FolderArchive className="w-4 h-4 text-crt-green" />
                Fotografías & Afiches Originales de Archivo ({portal.galleryImageIds.length})
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {portal.galleryImageIds.map((imgId) => (
                  <div
                    key={imgId}
                    onClick={() =>
                      setSelectedImage({
                        url: `./covers/instagram/${imgId}.jpg`,
                        title: `Expediente de Archivo // ${imgId}`,
                        desc: 'Registro fotográfico oficial de Cuarentena Rap 2020.',
                      })
                    }
                    className="bg-surface border border-surface-border rounded-xl overflow-hidden cursor-pointer hover:border-amber-500/50 transition-all group"
                  >
                    <div className="relative aspect-square bg-neutral-900">
                      <img
                        src={`./covers/instagram/${imgId}.jpg`}
                        alt={imgId}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <div className="p-2 font-mono text-[9px] text-neutral-400 group-hover:text-crt-amber truncate">
                      {imgId}.jpg
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* LIGHTBOX MODAL FOR IMAGES */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-white hover:text-crt-amber border border-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 space-y-2 bg-surface">
              <h4 className="font-mono text-sm font-bold text-white">
                {selectedImage.title}
              </h4>
              {selectedImage.desc && (
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {selectedImage.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIDEO PLAYER MODAL */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-surface border border-amber-500/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-neutral-950 border-b border-surface-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-crt-amber animate-ping" />
                <span className="font-mono text-xs font-bold text-crt-amber uppercase tracking-wider">
                  {playingVideo.stage} // REGISTRO OFICIAL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={playingVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded bg-neutral-900 border border-neutral-700 hover:border-amber-500 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                >
                  Abrir en YouTube &rarr;
                </a>
                <button
                  onClick={() => setPlayingVideo(null)}
                  className="p-1.5 rounded-lg bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Responsive iFrame */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${playingVideo.id}?autoplay=1&rel=0`}
                title={playingVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Footer with Title & Summary */}
            <div className="p-4 bg-surface space-y-1">
              <h4 className="font-mono text-sm font-bold text-white">
                {playingVideo.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans">
                {playingVideo.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
