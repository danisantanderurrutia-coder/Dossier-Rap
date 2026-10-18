import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  PlayCircle,
  X,
  Filter,
  ExternalLink,
  ChevronDown,
  Smartphone,
  Tv,
} from 'lucide-react';
import { CuarentenaPortal, PortalBattleVideo } from '../../types/cuarentena';
import { YoutubeVideo } from '../../types/archive';
import { InstagramIcon } from '../ui/SocialIcons';
import { BoneArrowButton } from './BoneArrowButton';
import { HorizontalSpineTimeline } from './HorizontalSpineTimeline';
import { DarkAmbientPlayer } from './DarkAmbientPlayer';

interface CuarentenaCinematicViewProps {
  portals: CuarentenaPortal[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
  onSelectVideo: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

interface HangingItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
  league?: string;
  region?: string;
  beatmaker?: string;
  videoId?: string;
  desc?: string;
  isVertical?: boolean;
  isSquare?: boolean;
  instagramUrl?: string;
  externalUrl?: string;
}

// 65 Verified Vertical (9:16 smartphone portrait) videos recorded during the 2020 pandemic
const VERTICAL_VIDEO_IDS = new Set([
  'RhHZ9344LRY', 'x_M7yiXcSAg', 'eQ8o4xRh2cI', 'l2PwaGDStx8', 'gD-IergtRag',
  'JTG_jd_xRow', 'b_l1inOdpCo', 'GblCNj-Y6GM', 'n3Fqnsst6wE', '3bP54F3R9O8',
  '86PZePTJF7c', 'G1LEt3FDWBY', '0z0IgNwQKRA', 'koCmzyrx_ZY', 'XDvlzC_T96I',
  '9n7iw974tkU', 'RbWpMDswZnY', 'OVtmj2SHgvs', '8zJOx5Y9uFk', 'X48mlgGG_nw',
  'H75YIswCR10', 'zV_W43Y6s_s', 'hSEoA7oSrls', 'vf5O9P3OxpE', 'NUh0eoG3qMo',
  'VZqeZN4fWrE', 'Be1Qi9e0F18', 'LyAL-DMblmE', '1drunvuEcnI', 'lDsnB4uijcQ',
  'ZVcLvyLmVBM', 'F6FQ8J2bjHc', 'pJxjDb_sNhg', 'AFbnM4AntBA', 'nMwCwL7xc7A',
  '_srMhK7dtdY', '_9yBsmsyfJ4', 'sKkh9hvj0Mg', 'nKDY6qUswAk', 'gnGp3VHazqE',
  'qz3IATMFyHQ', 'c4qtrYBIWsk', 'O_XakZ0BM1I', 'KT_zGMzN-20', 'm5n703wL9s0',
  'F0Ojem2cUic', 'oA5NGAPzlFk', '3ExbAJUV0GY', '3fKWWDJlSXE', '9dOTV_ag7Eg',
  '2MxYuyDzQD0', 'LrjrnKEOPmE', 'DdsPDi-Az88', 'zFnZpZLZbz0', '_QYRUdLZfZQ',
  '7jxmhwX8_UU', 'mYAexqg4nx0', 'vLzKsJEsjL4', 'AliWQWKyIN4', 'yY1mARoDN3E',
  'U8CGZT_mkSc', 'FHYG_Iw7lu4', 'j_RWOzVDWD8', 'k2CALPhfVDI', 'Wl9sxgy1CC4'
]);

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

export const CuarentenaCinematicView: React.FC<CuarentenaCinematicViewProps> = ({
  portals,
  activeIndex,
  onSelectIndex,
  onBackToDashboard,
}) => {
  const currentPortal = portals[activeIndex];
  const bgImage = portalImageMap[currentPortal.id] || './backgrounds/cuarentena/portal-0.jpg';

  // Active embedded video in the current portal (auto-loads the first video of the portal)
  const [selectedVideo, setSelectedVideo] = useState<PortalBattleVideo | null>(
    currentPortal.videos.length > 0 ? currentPortal.videos[0] : null
  );

  // Active sub-filter for videos (groups in R1, karmas in R2, duels in 4tos/semis)
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Video aspect ratio mode: 'auto' | 'vertical' | 'cinema'
  const [playerOrientation, setPlayerOrientation] = useState<'auto' | 'vertical' | 'cinema'>('auto');

  // Check if current video was recorded vertically on smartphone
  const isVideoVertical = useMemo(() => {
    if (!selectedVideo) return false;
    if (playerOrientation === 'vertical') return true;
    if (playerOrientation === 'cinema') return false;
    return VERTICAL_VIDEO_IDS.has(selectedVideo.id);
  }, [selectedVideo, playerOrientation]);

  // Sync selected video whenever portal index changes
  useEffect(() => {
    setActiveFilter('all');
    setPlayerOrientation('auto');
    if (currentPortal.videos.length > 0) {
      setSelectedVideo(currentPortal.videos[0]);
    } else {
      setSelectedVideo(null);
    }
  }, [currentPortal.id, currentPortal.videos]);

  // Available filter tabs depending on portal
  const availableFilters = useMemo(() => {
    if (currentPortal.id === 'portal-2-cementerio') {
      return [
        { id: 'all', label: 'Todos (44)' },
        { id: 'g3', label: 'G3 · Peste (7)' },
        { id: 'g9', label: 'G9 · Suicidio (6)' },
        { id: 'g6', label: 'G6 · Súbita (6)' },
        { id: 'g7', label: 'G7 · Ideales (6)' },
        { id: 'g4', label: 'G4 · Traición (5)' },
        { id: 'g2', label: 'G2 · Guerra (5)' },
        { id: 'g8', label: 'G8 · Accidente (5)' },
        { id: 'g1', label: 'G1 · Naturaleza (3)' },
        { id: 'g5', label: 'G5 · Enfermedad (1)' },
      ];
    }
    if (currentPortal.id === 'portal-3-karmas') {
      return [
        { id: 'all', label: 'Todos (21)' },
        { id: 'vanidad', label: 'Vanidad' },
        { id: 'pereza', label: 'Pereza' },
        { id: 'irresponsabilidad', label: 'Irresponsabilidad' },
        { id: 'infidelidad', label: 'Infidelidad' },
        { id: 'amor', label: 'Amor' },
        { id: 'vicios', label: 'Vicios' },
        { id: 'odio', label: 'Odio' },
        { id: 'corrupción', label: 'Corrupción' },
      ];
    }
    if (currentPortal.id === 'portal-4-cuartos') {
      return [
        { id: 'all', label: 'Todos (8)' },
        { id: 'duelo 1', label: 'Duelo 1 · Crizzo vs Racee' },
        { id: 'duelo 2', label: 'Duelo 2 · Niggy vs Kmusa' },
        { id: 'duelo 3', label: 'Duelo 3 · Chologuapo vs Johatsu' },
        { id: 'duelo 4', label: 'Duelo 4 · Pimc vs Pronoia' },
      ];
    }
    if (currentPortal.id === 'portal-5-semifinales') {
      return [
        { id: 'all', label: 'Todos (4)' },
        { id: 'semi 1', label: 'Semi 1 · Crizzo vs Chologuapo' },
        { id: 'semi 2', label: 'Semi 2 · Niggy vs Pimc' },
      ];
    }
    if (currentPortal.id === 'portal-1-ronda-cero') {
      return [
        { id: 'all', label: 'Todos (21)' },
        { id: 'niggy', label: 'Niggy' },
        { id: 'racee', label: 'Racee' },
        { id: 'cholo', label: 'Cholo Guapo' },
        { id: 'tanguito', label: 'Tanguito (ARG)' },
        { id: 'sacramento', label: 'Sacramento' },
        { id: 'vraz', label: 'Vraz' },
        { id: 'bo mc', label: 'Bo MC' },
      ];
    }
    return [];
  }, [currentPortal.id]);

  // Filtered videos based on active filter
  const filteredVideos = useMemo(() => {
    if (activeFilter === 'all') return currentPortal.videos;
    const filterKey = activeFilter.toLowerCase();
    return currentPortal.videos.filter((v) => {
      const searchTarget = `${v.stage} ${v.title} ${v.summary} ${v.league || ''} ${v.region || ''}`.toLowerCase();
      return searchTarget.includes(filterKey);
    });
  }, [currentPortal.videos, activeFilter]);

  // Generates the suspended "Hanging Posts & Screenshots" sequence for the current portal
  const hangingTrail = useMemo<HangingItem[]>(() => {
    const list: HangingItem[] = [];

    // PORTAL 0: LA MUERTE // GÉNESIS & MANIFIESTO
    if (currentPortal.id === 'portal-0-genesis') {
      list.push({
        id: 'post-bases-1',
        title: 'Bases & Portada Decimal',
        tag: 'POST 01 // BASES Y PROTOCOLOS',
        imageUrl: './covers/instagram/CFwD6Nqjbrn.jpg',
        league: 'Cuarentena Rap Oficial',
        region: 'Santiago / Virtual',
        desc: 'Pacto de Transparencia y erradicación del insulto vacuo en confinamiento.',
        isSquare: true,
      });
      list.push({
        id: 'post-bases-2',
        title: 'Protocolo de Respeto & Criterio Temático',
        tag: 'POST 02 // EVALUACIÓN',
        imageUrl: './covers/instagram/CFv-xFUj3cP.jpg',
        league: 'Cuerpo Colegiado de Jueces',
        region: 'Chile / Internacional',
        desc: 'Fidelidad al concepto asignado y ponderación de rimas multisilábicas.',
        isSquare: true,
      });
      list.push({
        id: 'post-bases-3',
        title: 'Remates y Punchlines sobre el Beat',
        tag: 'POST 03 // CRITERIO VI',
        imageUrl: './covers/instagram/CFwMfCCDvp5.jpg',
        league: 'Reglamento 2020',
        region: 'Virtual',
        desc: 'Evaluación del cierre de compás y sincronía con las instrumentales.',
        isSquare: true,
      });
      list.push({
        id: 'manifiesto-video-shot',
        title: 'Video Manifiesto Fundacional 2020',
        tag: 'REGISTRO AUDIOVISUAL 16:9',
        imageUrl: 'https://img.youtube.com/vi/B2XrNxHxwrA/hqdefault.jpg',
        videoId: 'B2XrNxHxwrA',
        league: 'Cuarentena Rap Vol. 2',
        region: 'Santiago',
        beatmaker: 'Drak / Enigmatic',
        desc: 'Declaración de principios convocando a la juventud en pleno toque de queda.',
        isVertical: false,
      });
    }

    // PORTAL 1: LA MUERTE // INSCRIPCIONES & DISCORD
    else if (currentPortal.id === 'portal-1-ronda-cero') {
      list.push({
        id: 'discord-terminal-card',
        title: 'Servidor Oficial Discord QRTN',
        tag: 'INFRAESTRUCTURA // DISCORD.GG/W5WEW5Z',
        imageUrl: './covers/instagram/CBCA5DGFBwO.jpg',
        league: '12.000 Miembros',
        region: 'Red Virtual',
        desc: 'Canal de voz de 320kbps y recepción de tomas de video para evaluación a ciegas.',
        isSquare: true,
        instagramUrl: 'https://www.instagram.com/p/CBCA5DGFBwO/',
      });
      list.push({
        id: 'nenewladi-production-card',
        title: 'Nene Wladi · Beatmaker & Producción Urbana',
        tag: 'BEATMAKER / ARTISTA OFICIAL',
        imageUrl: './covers/instagram/CGBnB36jLL8.jpg',
        league: 'Producción Musical & Ecosistema',
        region: 'Chile',
        desc: 'Compositor e instrumentista urbano del circuito. Haz clic en el enlace para escuchar sus canciones y lanzamientos oficiales en Instagram (@nenewladi).',
        isSquare: true,
        instagramUrl: 'https://www.instagram.com/nenewladi/',
        externalUrl: 'https://www.instagram.com/nenewladi/',
      });

      // Filter screenshots (All vertical phone recordings)
      const keyFilters = [
        { id: 'FHYG_Iw7lu4', name: 'Niggy · Audición QRTN2', league: 'Circuito Underground', reg: 'Santiago' },
        { id: 'U8CGZT_mkSc', name: 'Racee · Audición Filtro', league: 'Circuito Underground', reg: 'Santiago' },
        { id: 'vLzKsJEsjL4', name: 'Cholo Guapo · Audición QRTN2', league: 'Circuito Independiente', reg: 'Santiago' },
        { id: 'k2CALPhfVDI', name: 'Tanguito (ARG) · Audición Filtro', league: 'Circuito Argentino', reg: 'Argentina' },
        { id: '0D_gqo1iDSA', name: 'Sacramento · Audición QRTN2', league: 'Circuito Independiente', reg: 'Santiago' },
        { id: 'oA5NGAPzlFk', name: 'Nayahop · Audición QRTN2', league: 'Resistencia Femenina', reg: 'Santiago' },
        { id: '3ExbAJUV0GY', name: 'Baloo · Audición QRTN2', league: 'Circuito Independiente', reg: 'Santiago' },
      ];

      keyFilters.forEach((kf) => {
        list.push({
          id: kf.id,
          title: kf.name,
          tag: 'TOMA VERTICAL // AUDICIÓN',
          imageUrl: `https://img.youtube.com/vi/${kf.id}/hqdefault.jpg`,
          videoId: kf.id,
          league: kf.league,
          region: kf.reg,
          beatmaker: 'Instrumental 90 BPM',
          desc: 'Toma casera grabada en formato vertical con smartphone en confinamiento.',
          isVertical: true,
        });
      });
    }

    // PORTAL 2: CEMENTERIO // CASA DE LAS TUMBAS (R1)
    else if (currentPortal.id === 'portal-2-cementerio') {
      const cemeteryKeyEmcees = [
        { id: 'cEhqAAeSOto', name: 'Crizzo // Peste Negra', group: 'G3 · PESTE NEGRA', league: 'Erasmo Battles / UAH', reg: 'Santiago', beat: 'Jorge Dolores', vert: false },
        { id: 'lDsnB4uijcQ', name: 'Pimc // Suicidio Anímico', group: 'G9 · SUICIDIO', league: 'Rap Rules', reg: 'Santiago', beat: 'Wecefen', vert: true },
        { id: 'pJxjDb_sNhg', name: 'Babuqueen // Peste Negra', group: 'G3 · PESTE NEGRA', league: 'Team KOS', reg: 'Circuito Underground', beat: 'Drubeats', vert: true },
        { id: 'picaW8HKvYk', name: 'Racee // Muerte Súbita', group: 'G6 · SÚBITA', league: 'Circuito Underground', reg: 'Santiago', beat: 'Wecefen', vert: false },
        { id: '1drunvuEcnI', name: 'Tanguito (ARG) // Guerra', group: 'G2 · GUERRA', league: 'Circuito Argentino', reg: 'Argentina', beat: 'Enigmatic', vert: true },
        { id: 'vf5O9P3OxpE', name: 'Cholo Guapo // Traición', group: 'G4 · TRAICIÓN', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Jorge Dolores', vert: true },
        { id: 'ZVcLvyLmVBM', name: 'Johatsu // Ideales', group: 'G7 · IDEALES', league: 'Team Cuarentena', reg: 'Circuito Virtual', beat: 'Drubeats', vert: true },
        { id: 'B8eaIODOcnI', name: 'Kmusa // Accidente', group: 'G8 · ACCIDENTE', league: 'Guerra Santa', reg: 'Circuito Underground', beat: 'Enigmatic', vert: false },
        { id: '46zySyJxbLE', name: 'Dani Trip // Naturaleza', group: 'G1 · NATURALEZA', league: 'KND Battles', reg: 'Santiago', beat: 'Wecefen', vert: false },
        { id: 'LyAL-DMblmE', name: 'Noreck // Muerte Guerra', group: 'G3 · PATAGONIA', league: 'KOS Coyhaique', reg: 'Patagonia (Aysén)', beat: 'Drubeats', vert: true },
      ];

      cemeteryKeyEmcees.forEach((em) => {
        list.push({
          id: em.id,
          title: em.name,
          tag: em.vert ? `TOMA VERTICAL // ${em.group}` : `TOMA 16:9 // ${em.group}`,
          imageUrl: `https://img.youtube.com/vi/${em.id}/hqdefault.jpg`,
          videoId: em.id,
          league: em.league,
          region: em.reg,
          beatmaker: em.beat,
          desc: 'Rima estructurada sobre la causa de muerte para romper la lápida.',
          isVertical: em.vert,
        });
      });
    }

    // PORTAL 3: PURGATORIO // CASA DE LOS KARMAS (R2)
    else if (currentPortal.id === 'portal-3-karmas') {
      const karmasKeyEmcees = [
        { id: 'x1ei6EljC2Y', name: 'Crizzo // Carpa de la Vanidad', karma: 'VANIDAD', league: 'Erasmo Battles', reg: 'Santiago', beat: 'Enigmatic', vert: false },
        { id: 'GblCNj-Y6GM', name: 'Pimc // Carpa de la Pereza', karma: 'PEREZA', league: 'Rap Rules', reg: 'Santiago', beat: 'Jorge Dolores', vert: true },
        { id: 'I7Kiv8B5-8I', name: 'Racee // Irresponsabilidad', karma: 'IRRESPONSABILIDAD', league: 'Circuito Underground', reg: 'Santiago', beat: 'Wecefen', vert: false },
        { id: 'lyOFX1Z2YLc', name: 'Chologuapo // Infidelidad', karma: 'INFIDELIDAD', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Drubeats', vert: false },
        { id: '6cjDePm0h9s', name: 'Pronoia // Carpa del Amor', karma: 'AMOR', league: 'Ufro Rap', reg: 'Araucanía (Temuco)', beat: 'Enigmatic', vert: false },
        { id: 'G1LEt3FDWBY', name: 'Niggy // Carpa de los Vicios', karma: 'VICIOS', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Wecefen', vert: true },
        { id: '0z0IgNwQKRA', name: 'Babuqueen // Carpa del Odio', karma: 'ODIO', league: 'Team KOS', reg: 'Circuito Underground', beat: 'Jorge Dolores', vert: true },
        { id: '8zJOx5Y9uFk', name: 'Johatsu // Corrupción', karma: 'CORRUPCIÓN', league: 'Team Cuarentena', reg: 'Circuito Virtual', beat: 'Drubeats', vert: true },
      ];

      karmasKeyEmcees.forEach((km) => {
        list.push({
          id: km.id,
          title: km.name,
          tag: km.vert ? `TOMA VERTICAL // ${km.karma}` : `TOMA 16:9 // ${km.karma}`,
          imageUrl: `https://img.youtube.com/vi/${km.id}/hqdefault.jpg`,
          videoId: km.id,
          league: km.league,
          region: km.reg,
          beatmaker: km.beat,
          desc: 'Expiación poética de culpas individuales durante el confinamiento.',
          isVertical: km.vert,
        });
      });
    }

    // PORTAL 4: PURGATORIO // EL BREAK
    else if (currentPortal.id === 'portal-break') {
      list.push({
        id: 'break-art-1',
        title: 'B-Boy en Suspensión en Confinamiento',
        tag: 'PURGATORIO // BREAKING CASERO',
        imageUrl: './covers/instagram/CDMWyFale-C.jpg',
        league: 'Cuatro Elementos',
        region: 'Chile',
        desc: 'Freezes en baldosas de cocina desafiando el encierro físico.',
        isSquare: true,
      });
      list.push({
        id: 'break-jueces',
        title: 'Jurados: Tata Zapata & Mat Cabrera',
        tag: 'JUECES OFICIALES DE BREAKING',
        imageUrl: './covers/instagram/CHwWP8Wlq0u.jpg',
        league: 'Leyendas de la Danza Urbana',
        region: 'Chile',
        desc: 'Evaluación técnica de toprock, footwork y musicalidad en espacios reducidos.',
        isSquare: true,
      });
    }

    // PORTAL 5: RESURRECCIÓN // CUARTOS (CASA DE LA LIBERTAD)
    else if (currentPortal.id === 'portal-4-cuartos') {
      const quarters = [
        { id: 'Rwk_Ps2SYy8', name: 'Duelo 1 · Crizzo vs Racee', tag: 'LIBERTAD // CRIZZO', league: 'Erasmo Battles', reg: 'Santiago', beat: 'Drubeats', vert: false },
        { id: 'WhTTfx-Wv_E', name: 'Duelo 1 · Racee vs Crizzo', tag: 'LIBERTAD // RACEE', league: 'Circuito Underground', reg: 'Santiago', beat: 'Drubeats', vert: false },
        { id: 'RhHZ9344LRY', name: 'Duelo 2 · Niggy vs Kmusa', tag: 'LIBERTAD // NIGGY', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Wecefen', vert: true },
        { id: 'I1ichj4qFrQ', name: 'Duelo 2 · Kmusa vs Niggy', tag: 'LIBERTAD // KMUSA', league: 'Guerra Santa', reg: 'Circuito Underground', beat: 'Wecefen', vert: false },
        { id: 'YZhhS7l_04Q', name: 'Duelo 3 · Chologuapo vs Johatsu', tag: 'LIBERTAD // CHOLOGUAPO', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Enigmatic', vert: false },
        { id: 'QcHRipCLj_0', name: 'Duelo 3 · Johatsu vs Chologuapo', tag: 'LIBERTAD // JOHATSU', league: 'Team Cuarentena', reg: 'Circuito Virtual', beat: 'Enigmatic', vert: false },
        { id: 'gD-IergtRag', name: 'Duelo 4 · Pimc vs Pronoia', tag: 'LIBERTAD // PIMC', league: 'Rap Rules', reg: 'Santiago', beat: 'Jorge Dolores', vert: true },
        { id: 'bIAlFlbqG4o', name: 'Duelo 4 · Pronoia vs Pimc', tag: 'LIBERTAD // PRONOIA', league: 'Ufro Rap', reg: 'Araucanía (Temuco)', beat: 'Jorge Dolores', vert: false },
      ];

      quarters.forEach((q) => {
        list.push({
          id: q.id,
          title: q.name,
          tag: q.vert ? `TOMA VERTICAL // ${q.tag}` : `TOMA 16:9 // ${q.tag}`,
          imageUrl: `https://img.youtube.com/vi/${q.id}/hqdefault.jpg`,
          videoId: q.id,
          league: q.league,
          region: q.reg,
          beatmaker: q.beat,
          desc: 'Duelo directo de ida y vuelta sobre estética de muros de graffiti.',
          isVertical: q.vert,
        });
      });
    }

    // PORTAL 6: RESURRECCIÓN // SEMIFINALES (FORJA IDEOLÓGICA)
    else if (currentPortal.id === 'portal-5-semifinales') {
      const semis = [
        { id: 'k5gCKdOxmYU', name: 'Semi 1 · Crizzo (vs Chologuapo)', tag: 'IDEOLOGÍA & VURAN', league: 'Erasmo Battles', reg: 'Santiago', beat: 'Vuran (Beatmaker Exclusivo)', vert: false },
        { id: 'eQ8o4xRh2cI', name: 'Semi 1 · Chologuapo (vs Crizzo)', tag: 'IDEOLOGÍA & VURAN', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Vuran (Beatmaker Exclusivo)', vert: true },
        { id: 'l2PwaGDStx8', name: 'Semi 2 · Pimc (vs Niggy)', tag: 'IDEOLOGÍA & BEATIME', league: 'Rap Rules', reg: 'Santiago', beat: 'Beatime (Beatmaker Exclusivo)', vert: true },
        { id: 'x_M7yiXcSAg', name: 'Semi 2 · Niggy (vs Pimc)', tag: 'IDEOLOGÍA & BEATIME', league: 'Circuito Independiente', reg: 'Santiago', beat: 'Beatime (Beatmaker Exclusivo)', vert: true },
      ];

      semis.forEach((s) => {
        list.push({
          id: s.id,
          title: s.name,
          tag: s.vert ? `TOMA VERTICAL // ${s.tag}` : `TOMA 16:9 // ${s.tag}`,
          imageUrl: `https://img.youtube.com/vi/${s.id}/hqdefault.jpg`,
          videoId: s.id,
          league: s.league,
          region: s.reg,
          beatmaker: s.beat,
          desc: 'Construcción de doctrina ontológica sobre instrumentales a medida.',
          isVertical: s.vert,
        });
      });
    }

    // PORTAL 7: RESURRECCIÓN // GRAN FINAL
    else if (currentPortal.id === 'portal-6-final') {
      list.push({
        id: 'crizzo-champion-card',
        title: 'Crizzo: Campeón Absoluto de Cuarentena Rap',
        tag: 'EL RESUCITADO // CAMPEÓN 2020',
        imageUrl: './covers/instagram/CGBnI06jRLK.jpg',
        videoId: 'k5gCKdOxmYU',
        league: 'Erasmo Battles // UAH Freestyle',
        region: 'Santiago',
        desc: 'Superó la peste en las tumbas, purgó en los karmas y se alzó en la cumbre.',
        isSquare: true,
        instagramUrl: 'https://www.instagram.com/p/CGBnI06jRLK/',
      });
      list.push({
        id: 'pimc-finalist-video-card',
        title: 'Pimc: Subcampeón & Video Ruta a la Final',
        tag: 'TOMA VERTICAL // RUTA A LA FINAL',
        imageUrl: 'https://img.youtube.com/vi/l2PwaGDStx8/hqdefault.jpg',
        videoId: 'l2PwaGDStx8',
        league: 'Rap Rules Oficial',
        region: 'Santiago',
        beatmaker: 'Beatime (Beatmaker Exclusivo)',
        desc: 'Registro en video vertical de la semifinal contra Niggy y ruta directa a la Gran Final. Haz clic para reproducir arriba.',
        isVertical: true,
        instagramUrl: 'https://www.instagram.com/p/CGln20TAcaU/',
      });
      list.push({
        id: 'pimc-finalist-card',
        title: 'Pimc: Afiche Oficial Gran Final',
        tag: 'FINALISTA CONSAGRADO // RAP RULES',
        imageUrl: './covers/instagram/CGln20TAcaU.jpg',
        league: 'Rap Rules Oficial',
        region: 'Santiago',
        desc: 'Campaña implacable desde el suicidio inicial en las tumbas hasta el duelo por el campeonato.',
        isSquare: true,
        instagramUrl: 'https://www.instagram.com/p/CGln20TAcaU/',
      });
      list.push({
        id: 'oes-beatbox-card',
        title: 'Showcase Oficial: OES Beatbox',
        tag: 'PERCUSIÓN ORGÁNICA EN LA FINAL',
        imageUrl: './covers/instagram/CDMWyFale-C.jpg',
        league: 'OES BBX Nacional',
        region: 'Chile',
        desc: 'Patrones de beatbox acústico para la ronda de improvisación y escrita libre.',
        isSquare: true,
        instagramUrl: 'https://www.instagram.com/p/CDMWyFale-C/',
      });
    }

    return list;
  }, [currentPortal.id]);

  // Lightbox for expanding archival posts / backgrounds
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    desc?: string;
    instagramUrl?: string;
  } | null>(null);

  const handlePrev = () => {
    if (activeIndex > 0) onSelectIndex(activeIndex - 1);
  };

  const handleNext = () => {
    if (activeIndex < portals.length - 1) onSelectIndex(activeIndex + 1);
  };

  return (
    <div className="relative w-full min-h-screen text-neutral-100 select-none">
      
      {/* 1. FIXED CINEMATIC BACKGROUND: 100% SIZE & PINNED (ALLOWS APPRECIATING THE CONTEXT) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          key={currentPortal.id}
          src={bgImage}
          alt={currentPortal.title}
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.15] saturate-[0.92] transition-all duration-1000 scale-100"
        />
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-neutral-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(9,10,13,0.65)_95%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] opacity-10" />
      </div>

      {/* 2. MINIMAL TOP BAR */}
      <header className="relative z-30 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-2 bg-neutral-950/80 md:bg-neutral-950/50 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {onBackToDashboard && (
            <button
              onClick={onBackToDashboard}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono text-neutral-300 hover:text-crt-amber hover:border-amber-500/50 transition-all shadow-md"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>← Dashboard</span>
            </button>
          )}

          {/* Logo Oficial Máscara de Médico de la Peste & QRTN */}
          <div className="flex items-center gap-2.5">
            <img
              src="./logos/cuarentena-rap.png"
              alt="Cuarentena Rap QRTN Oficial"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-amber-400/80 shadow-glow-amber bg-black object-contain p-0.5 flex-shrink-0"
            />
            <div>
              <span className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                <span>CUARENTENA RAP</span>
                <span className="px-1 py-0.2 rounded bg-amber-400 text-black text-[8px] font-black uppercase">QRTN</span>
              </span>
              <div className="font-mono text-[9px] text-crt-amber tracking-widest uppercase hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-crt-amber animate-ping" />
                <span>MACRO-FASE // {currentPortal.macroPhase.toUpperCase()} (2020)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 90s Underground Boom-Bap & Crypt Audio Engine */}
        <div className="flex items-center gap-3">
          <DarkAmbientPlayer isCryptZone={currentPortal.id === 'portal-2-cementerio'} />
        </div>
      </header>

      {/* 3. HORIZONTAL SPINE TIMELINE WITH SKULL & BONE ARROWS */}
      <div className="relative z-30 w-full px-4 sm:px-6 md:px-8 py-1.5 bg-neutral-950/75 md:bg-neutral-950/45 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl md:max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Bone Arrow Left */}
          <div className="w-full md:w-auto flex justify-start flex-shrink-0">
            <BoneArrowButton
              direction="left"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              label="Previo"
              sublabel={activeIndex > 0 ? portals[activeIndex - 1].macroPhase : undefined}
            />
          </div>

          {/* Horizontal Spine Timeline */}
          <div className="flex-1 w-full max-w-4xl px-2">
            <HorizontalSpineTimeline
              portals={portals}
              activeIndex={activeIndex}
              onSelectIndex={onSelectIndex}
            />
          </div>

          {/* Bone Arrow Right */}
          <div className="w-full md:w-auto flex justify-end flex-shrink-0">
            <BoneArrowButton
              direction="right"
              onClick={handleNext}
              disabled={activeIndex === portals.length - 1}
              label="Ascender"
              sublabel={
                activeIndex < portals.length - 1
                  ? portals[activeIndex + 1].macroPhase
                  : undefined
              }
            />
          </div>
        </div>
      </div>

      {/* 4. MAIN SCROLLABLE CONTENT BODY (AIRY, CINEMATIC & MINIMAL TEXT) */}
      <main className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 space-y-6">
        
        {/* ULTRA-MINIMAL SECTION BANNER (LESS TEXT, MORE AMBIENCE) */}
        <div className="bg-neutral-950/70 md:bg-neutral-950/45 border border-white/10 p-3.5 md:p-3 rounded-xl backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="px-2 py-0.5 rounded font-mono text-[9px] font-black uppercase tracking-wider text-black shadow-sm"
              style={{ backgroundColor: currentPortal.bgAtmosphere.accentHex }}
            >
              {currentPortal.macroPhase.toUpperCase()}
            </span>
            <span className="font-mono text-xs md:text-sm font-bold text-white">
              {currentPortal.canonicalPhaseTitle}
            </span>
          </div>

          <div className="text-[10px] font-mono text-neutral-400 italic">
            &ldquo;{currentPortal.conceptQuote}&rdquo;
          </div>
        </div>

        {/* 5. INLINE EMBEDDED VIDEO PLAYER (ADAPTIVE VERTICAL / HORIZONTAL FORMAT) */}
        {selectedVideo && (
          <div className="bg-neutral-950/80 md:bg-neutral-950/50 border border-amber-500/40 md:border-amber-500/25 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
            
            {/* Player Header with Format Switcher */}
            <div className="px-3 py-1.5 bg-neutral-900/80 border-b border-surface-border flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crt-amber animate-ping" />
                <span className="font-mono text-[10.5px] font-bold text-crt-amber uppercase tracking-wider">
                  {selectedVideo.stage}
                </span>
                <span className="text-[9.5px] text-neutral-400 font-mono hidden sm:inline">
                  · {selectedVideo.duration}
                </span>
                {isVideoVertical && (
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/40 font-mono text-[8.5px] text-amber-300 flex items-center gap-1">
                    <Smartphone className="w-2.5 h-2.5" />
                    <span>Vertical Celular (9:16)</span>
                  </span>
                )}
              </div>

              {/* Aspect Ratio Switcher Toggle */}
              <div className="flex items-center gap-1 bg-black/60 p-0.5 rounded-lg border border-neutral-800">
                <button
                  onClick={() => setPlayerOrientation('cinema')}
                  className={`px-2 py-0.5 rounded font-mono text-[8.5px] font-bold flex items-center gap-1 transition-all ${
                    !isVideoVertical
                      ? 'bg-neutral-800 text-crt-amber border border-amber-500/40 shadow-sm'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Formato Cinemático Horizontal 16:9"
                >
                  <Tv className="w-2.5 h-2.5" />
                  <span>16:9 Cine</span>
                </button>
                <button
                  onClick={() => setPlayerOrientation('vertical')}
                  className={`px-2 py-0.5 rounded font-mono text-[8.5px] font-bold flex items-center gap-1 transition-all ${
                    isVideoVertical
                      ? 'bg-amber-400 text-neutral-950 border border-amber-300 shadow-glow-amber'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Formato Vertical Smartphone 9:16 (Sin barras negras)"
                >
                  <Smartphone className="w-2.5 h-2.5" />
                  <span>9:16 Celular</span>
                </button>
              </div>
            </div>

            {/* Sub-filter tabs if applicable */}
            {availableFilters.length > 0 && (
              <div className="flex flex-wrap items-center gap-1 px-3 py-1.5 bg-neutral-950/70 border-b border-neutral-800/80">
                <span className="font-mono text-[8.5px] text-neutral-400 uppercase flex items-center gap-1 mr-1">
                  <Filter className="w-2.5 h-2.5 text-crt-amber" />
                  Filtrar:
                </span>
                {availableFilters.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-2 py-0.5 rounded font-mono text-[8.5px] font-bold transition-all border ${
                      activeFilter === f.id
                        ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-glow-amber'
                        : 'bg-neutral-900/80 text-neutral-300 border-neutral-800 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {/* Video Selector Pills (Compact scroll) */}
            {currentPortal.videos.length > 1 && (
              <div className="flex flex-wrap items-center gap-1 max-h-20 overflow-y-auto px-3 py-1.5 bg-black/40 border-b border-neutral-800/80 no-scrollbar">
                {filteredVideos.map((vid) => {
                  const isThisVert = VERTICAL_VIDEO_IDS.has(vid.id);
                  return (
                    <button
                      key={vid.id}
                      onClick={() => setSelectedVideo(vid)}
                      className={`px-2 py-0.5 rounded font-mono text-[8.5px] font-bold transition-all border truncate max-w-[150px] flex items-center gap-1 ${
                        selectedVideo?.id === vid.id
                          ? 'bg-crt-amber text-neutral-950 border-amber-400 shadow-glow-amber'
                          : 'bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:text-white hover:border-neutral-700'
                      }`}
                      title={vid.title}
                    >
                      {isThisVert ? <Smartphone className="w-2 h-2 text-amber-300 flex-shrink-0" /> : null}
                      <span className="truncate">{vid.stage}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ADAPTIVE VIDEO CANVAS: SMARTPHONE 9:16 VS CINEMA 16:9 */}
            {isVideoVertical ? (
              /* VERTICAL SMARTPHONE PRESENTATION: AMBIENT GLOW + COMPACT 9:16 PHONE FRAME */
              <div className="relative py-4 md:py-6 bg-neutral-950 flex items-center justify-center overflow-hidden">
                {/* Ambient Blurred Video Aura in the Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-20 scale-125 pointer-events-none"
                  style={{ backgroundImage: `url(https://img.youtube.com/vi/${selectedVideo.id}/hqdefault.jpg)` }}
                />

                {/* Smartphone Realistic Archival Device Bezel */}
                <div className="relative z-10 w-full max-w-[310px] sm:max-w-[340px] aspect-[9/16] max-h-[580px] rounded-3xl border-2 border-amber-500/60 shadow-[0_0_40px_rgba(0,0,0,0.95)] overflow-hidden bg-black flex flex-col justify-between">
                  {/* Top Phone Speaker / Notch */}
                  <div className="h-4 bg-black/90 flex items-center justify-center border-b border-neutral-800/60 flex-shrink-0">
                    <div className="w-12 h-1 rounded-full bg-neutral-700/80" />
                  </div>

                  {/* Vertical Video iframe filling 100% of the phone frame */}
                  <div className="flex-1 w-full h-full bg-black">
                    <iframe
                      key={selectedVideo.id}
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?rel=0`}
                      title={selectedVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Bottom Phone Bar */}
                  <div className="h-2.5 bg-black/90 flex items-center justify-center border-t border-neutral-800/60 flex-shrink-0">
                    <div className="w-16 h-0.5 rounded-full bg-neutral-600/60" />
                  </div>
                </div>
              </div>
            ) : (
              /* HORIZONTAL WIDESCREEN PRESENTATION */
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  key={selectedVideo.id}
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?rel=0`}
                  title={selectedVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Telemetry Bar Under Video */}
            <div className="px-3 py-2 bg-neutral-950/80 flex flex-wrap items-center justify-between gap-2 border-t border-surface-border/50 text-[9.5px] font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-bold">{selectedVideo.title}</span>
                {selectedVideo.league && (
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    🏆 {selectedVideo.league}
                  </span>
                )}
                {selectedVideo.region && (
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-crt-amber">
                    📍 {selectedVideo.region}
                  </span>
                )}
                {selectedVideo.beatmaker && (
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                    🎛️ Beat: {selectedVideo.beatmaker}
                  </span>
                )}
              </div>

              <a
                href={selectedVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3 text-crt-amber" />
              </a>
            </div>
          </div>
        )}

        {/* 6. RECORRIDO COLGANTE DE POSTS & SCREENSHOTS (GENEROUS NEGATIVE SPACE & ADAPTIVE ORIENTATION) */}
        <section className="relative py-12 md:py-16">
          
          {/* Section Indicator to scroll down */}
          <div className="flex flex-col items-center justify-center gap-1.5 pb-12 text-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 flex items-center gap-1">
              <span>Recorrido de Archivo & Capturas Suspendidas</span>
            </span>
            <ChevronDown className="w-4 h-4 text-crt-amber animate-bounce" />
          </div>

          {/* Central Hanging Spinal Cord Wire */}
          <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-12 w-px bg-gradient-to-b from-amber-500/50 via-neutral-700/60 to-transparent pointer-events-none hidden md:block" />

          {/* Suspended Hanging Posts Sequence (Hacia abajo con abundante espacio vacío) */}
          <div className="space-y-24 md:space-y-36">
            {hangingTrail.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col items-center ${
                    isEven ? 'md:items-start md:pr-12' : 'md:items-end md:pl-12'
                  }`}
                >
                  {/* Subtle horizontal wire connecting card to central thread on desktop */}
                  <div
                    className={`absolute top-5 h-px bg-neutral-700/60 pointer-events-none hidden md:block ${
                      isEven ? 'left-full w-12' : 'right-full w-12'
                    }`}
                  />

                  {/* Hanging Polaroid / Screenshot Card (Adaptive Width & Aspect Ratio) */}
                  <div
                    className={`w-full bg-neutral-950/80 md:bg-neutral-950/55 border border-white/10 hover:border-amber-400/70 rounded-2xl md:rounded-xl overflow-hidden shadow-2xl backdrop-blur-md group transition-all duration-500 hover:-translate-y-1.5 ${
                      item.isVertical
                        ? 'max-w-[290px] sm:max-w-[310px]' // Sleek smartphone portrait card
                        : item.isSquare
                        ? 'max-w-md md:max-w-sm' // Square Instagram post
                        : 'max-w-lg md:max-w-md' // Horizontal battle
                    }`}
                  >
                    
                    {/* Hanging Top Metallic Clasp */}
                    <div className="h-3.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between px-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                      <span className="font-mono text-[7.5px] text-neutral-400 tracking-wider">
                        {item.isVertical ? '📱 CELULAR 9:16' : item.isSquare ? '📸 POST IG' : '🎬 CINE 16:9'}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                    </div>

                    {/* HERO IMAGE: Adaptive Aspect Ratio */}
                    <div
                      className={`relative bg-black overflow-hidden cursor-pointer ${
                        item.isVertical
                          ? 'aspect-[9/16]'
                          : item.isSquare
                          ? 'aspect-square'
                          : 'aspect-video'
                      }`}
                      onClick={() =>
                        setLightboxImage({
                          url: item.imageUrl,
                          title: item.title,
                          desc: item.desc,
                        })
                      }
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Concept Badge Overlay */}
                      <div className="absolute top-2 left-2 bg-neutral-950/90 px-2 py-0.5 rounded font-mono text-[8.5px] text-crt-amber border border-neutral-800">
                        {item.tag}
                      </div>

                      {/* Play overlay if it represents a video */}
                      {item.videoId && (
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <div className="p-2 rounded-full bg-black/70 border border-white/20 text-white group-hover:text-crt-amber group-hover:scale-110 transition-transform shadow-lg">
                            <PlayCircle className="w-7 h-7" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Minimalist Caption (Less text, essential data) */}
                    <div className="p-3 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-mono text-xs md:text-[11px] font-bold text-white group-hover:text-crt-amber transition-colors truncate">
                          {item.title}
                        </h4>
                        {item.league && (
                          <span className="font-mono text-[8.5px] text-neutral-400 flex-shrink-0">
                            {item.league}
                          </span>
                        )}
                      </div>

                      {item.desc && (
                        <p className="text-[9.5px] text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-1.5 pt-1.5 text-[8.5px] font-mono text-neutral-400">
                        {item.region && (
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-neutral-800 text-neutral-300">
                            📍 {item.region}
                          </span>
                        )}
                        {item.beatmaker && (
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-neutral-800 text-crt-amber">
                            🎛️ {item.beatmaker}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions footer */}
                    <div className="px-3 py-1.5 bg-neutral-900/80 border-t border-neutral-800/80 flex items-center justify-between text-[9px] font-mono gap-1">
                      {item.videoId ? (
                        <button
                          onClick={() => {
                            const foundVid = currentPortal.videos.find((v) => v.id === item.videoId);
                            if (foundVid) {
                              setSelectedVideo(foundVid);
                              window.scrollTo({ top: 120, behavior: 'smooth' });
                            }
                          }}
                          className="text-crt-amber hover:text-amber-300 flex items-center gap-1 font-bold transition-colors cursor-pointer"
                        >
                          <PlayCircle className="w-3 h-3" />
                          <span>Cargar Video ↗</span>
                        </button>
                      ) : (
                        <span className="text-neutral-500">Documento Archivo</span>
                      )}

                      {/* Enlace directo a Instagram / Perfil externo */}
                      {(() => {
                        const directUrl =
                          item.instagramUrl ||
                          item.externalUrl ||
                          (item.imageUrl.includes('/covers/instagram/')
                            ? `https://www.instagram.com/p/${item.imageUrl.split('/').pop()?.replace('.jpg', '')}/`
                            : null);
                        if (!directUrl) return null;
                        return (
                          <a
                            href={directUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-bold transition-colors"
                            title="Abrir publicación original en Instagram"
                          >
                            <InstagramIcon className="w-3 h-3" />
                            <span>Instagram ↗</span>
                          </a>
                        );
                      })()}

                      <button
                        onClick={() =>
                          setLightboxImage({
                            url: item.imageUrl,
                            title: item.title,
                            desc: item.desc,
                            instagramUrl:
                              item.instagramUrl ||
                              item.externalUrl ||
                              (item.imageUrl.includes('/covers/instagram/')
                                ? `https://www.instagram.com/p/${item.imageUrl.split('/').pop()?.replace('.jpg', '')}/`
                                : undefined),
                          })
                        }
                        className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        Ampliar &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* 7. LIGHTBOX MODAL FOR EXPANDING SCREENSHOTS & POSTS */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/80 text-white hover:text-crt-amber border border-neutral-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-h-[78vh] bg-black flex items-center justify-center p-2">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="p-3.5 bg-neutral-900 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="font-mono text-xs font-bold text-white">
                  {lightboxImage.title}
                </h4>
                {lightboxImage.instagramUrl && (
                  <a
                    href={lightboxImage.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/40 text-pink-400 hover:bg-pink-500 hover:text-white font-mono text-[10px] font-bold transition-all shadow-sm flex-shrink-0"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Ver en Instagram ↗</span>
                  </a>
                )}
              </div>
              {lightboxImage.desc && (
                <p className="text-[10px] text-neutral-400 font-sans leading-relaxed">
                  {lightboxImage.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
