export interface YoutubeVideo {
  title: string;
  id: string;
  url: string;
  stage?: string;
  duration?: string;
}

export interface Phase {
  phase: string;
  desc: string;
}

export interface Pillar {
  name: string;
  details: string;
}

export interface ProductionDetails {
  live?: string;
  women_leadership?: string;
  digital_infrastructure?: string;
  social_purpose?: string;
  protest_context?: string;
}

export interface Concept {
  title: string;
  summary: string;
  phases: Phase[];
}

export type CompetitionId =
  | 'cuarentena-rap'
  | 'rap-beauchef'
  | 'duenas-de-la-voz'
  | 'discord-rap-beauchef'
  | 'rap-libre'
  | 'las-escritas';

export interface Competition {
  id: CompetitionId;
  name: string;
  subtitle: string;
  years: string;
  venue?: string;
  concept?: Concept;
  pillars?: Pillar[];
  network?: string;
  production?: ProductionDetails;
  media?: {
    youtube_videos: YoutubeVideo[];
  };
}

export interface ArchiveData {
  project: string;
  curator: string;
  roles: string[];
  timeline: string;
  socials?: {
    instagram: string;
    youtube: string;
  };
  competitions: Competition[];
}

export interface PosterItem {
  id: string;
  filename: string;
  title: string;
  competitionId: CompetitionId;
  year: string;
  category: 'Flyer Convocatoria' | 'Fixture / Llaves' | 'Fase de Karmas' | 'Fase de Tumbas' | 'Dueñas de la Voz' | 'Solidaridad / Protesta' | 'Fotografía en Vivo' | 'Arte Conceptual';
  desc?: string;
}
