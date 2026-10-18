import React, { useState } from 'react';
import { YoutubeVideo } from '../../types/archive';
import { cuarentenaPortals } from '../../data/cuarentena-portals';
import { CuarentenaCinematicView } from '../cuarentena/CuarentenaCinematicView';

interface CuarentenaRapSectionProps {
  onSelectVideo: (video: YoutubeVideo) => void;
  onBackToDashboard?: () => void;
}

export const CuarentenaRapSection: React.FC<CuarentenaRapSectionProps> = ({
  onSelectVideo,
  onBackToDashboard,
}) => {
  const [activePortalIndex, setActivePortalIndex] = useState<number>(0);

  return (
    <section id="cuarentena-rap" className="relative w-full overflow-hidden bg-black">
      <CuarentenaCinematicView
        portals={cuarentenaPortals}
        activeIndex={activePortalIndex}
        onSelectIndex={setActivePortalIndex}
        onSelectVideo={onSelectVideo}
        onBackToDashboard={onBackToDashboard}
      />
    </section>
  );
};
