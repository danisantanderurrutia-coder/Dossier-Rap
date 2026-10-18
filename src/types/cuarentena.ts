export type TotemType = 'horse' | 'scroll' | 'tomb' | 'crow' | 'break' | 'graffiti' | 'ideology' | 'wolf';

export interface PortalRubricPost {
  id: string;
  filename: string;
  title: string;
  number: string;
  shortDesc: string;
  ruleExcerpt: string;
}

export interface MortemProfile {
  name: string;
  team: string;
  causeOfDeath: string;
  coverImage: string;
  excerpt: string;
  outcome: string;
}

export interface LeagueBadge {
  name: string;
  scope: string;
  coverImage: string;
  description: string;
  iconTag: string;
}

export type MacroPhase = 'La Muerte' | 'Cementerio' | 'Purgatorio' | 'Resurrección';

export interface PortalBattleVideo {
  id: string;
  title: string;
  stage: string;
  duration: string;
  summary: string;
  url: string;
  league?: string;
  region?: string;
  beatmaker?: string;
}

export interface CuarentenaPortal {
  id: string;
  levelIndex: number;
  macroPhase: MacroPhase;
  canonicalPhaseTitle: string;
  spineCode: string;
  title: string;
  subtitle: string;
  dimensionName: string;
  totem: TotemType;
  totemLabel: string;
  totemMeaning: string;
  contextNarrative: string;
  conceptQuote: string;
  bgAtmosphere: {
    theme: 'confinement-horse' | 'matrix-leagues' | 'crypt-tomb' | 'karmas-crow' | 'breaking-cypher' | 'graffiti-concrete' | 'ideology-geometry' | 'wolf-resurrection';
    ambientColor: string;
    borderAccent: string;
    glowClass: string;
    accentHex: string;
  };
  introVideo?: PortalBattleVideo;
  rubricPosts?: PortalRubricPost[];
  judges?: {
    role: string;
    names: string[];
    rubricHighlight: string;
  };
  leagues?: LeagueBadge[];
  driveDiscordKit?: {
    driveBeatsCount: number;
    beatmakers: string[];
    discordChannels: string[];
    kitDescription: string;
  };
  mortemProfiles?: MortemProfile[];
  graffitiBattles?: PortalBattleVideo[];
  ideologyDossier?: {
    rule: string;
    criteria: string;
    highlightBattles: PortalBattleVideo[];
  };
  finalFormat?: {
    freedomTypes: string[];
    champion: string;
    championLeague: string;
    championImage: string;
    beatboxShowcase: {
      artist: string;
      image: string;
      desc: string;
    };
  };
  videos: PortalBattleVideo[];
  galleryImageIds: string[];
}
