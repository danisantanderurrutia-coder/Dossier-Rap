import React, { useState } from 'react';
import { ArchivalHeader } from './components/layout/ArchivalHeader';
import { RightHangingMenu, SectionTab } from './components/layout/RightHangingMenu';
import { Footer } from './components/layout/Footer';
import { HeroManifesto } from './components/sections/HeroManifesto';
import { CuarentenaRapSection } from './components/sections/CuarentenaRapSection';
import { RapBeauchefSection, BeauchefSubTab } from './components/sections/RapBeauchefSection';
import { DuenasDeLaVozSection } from './components/sections/DuenasDeLaVozSection';
import { DiscordRapBeauchefSection } from './components/sections/DiscordRapBeauchefSection';
import { ExecutiveCaseStudy } from './components/sections/ExecutiveCaseStudy';
import { PosterGallery } from './components/media/PosterGallery';
import { SectionsDashboard } from './components/sections/SectionsDashboard';
import { YoutubeVideo } from './types/archive';

export const App: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'dossier' | 'executive'>('dossier');
  const [activeTab, setActiveTab] = useState<SectionTab>('dashboard');
  const [beauchefSubTab, setBeauchefSubTab] = useState<BeauchefSubTab>('presencial');

  const handleSelectVideo = (video: YoutubeVideo) => {
    // Abrir video directamente en nueva pestaña si se selecciona desde un expediente
    window.open(video.url, '_blank');
  };

  const handleSelectTab = (tab: SectionTab, subTab?: BeauchefSubTab) => {
    setActiveMode('dossier');
    if (tab === 'las-escritas') {
      setActiveTab('rap-beauchef');
      setBeauchefSubTab('escritas');
    } else if (tab === 'rap-libre') {
      setActiveTab('rap-beauchef');
      setBeauchefSubTab('rap-libre');
    } else {
      setActiveTab(tab);
      if (subTab) {
        setBeauchefSubTab(subTab);
      } else if (tab === 'rap-beauchef') {
        setBeauchefSubTab('presencial');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setActiveTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-neutral-100 flex flex-col font-sans">
      
      {/* Main Archival Sticky Header (Oculto en Cuarentena Rap para inmersión cinematográfica) */}
      {activeTab !== 'cuarentena-rap' && (
        <ArchivalHeader
          activeMode={activeMode}
          onChangeMode={(mode) => setActiveMode(mode)}
          onGoHome={handleBackToDashboard}
        />
      )}

      {/* Menú Lateral Derecho Colgante con Logos de cada Sección */}
      <RightHangingMenu
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      <main className="flex-1">
        {activeMode === 'executive' ? (
          <div className="animate-fadeIn bg-[#fbfbfa]">
            <ExecutiveCaseStudy />
          </div>
        ) : (
          <div>
            {/* View 1: DASHBOARD CENTRAL (Landing General) */}
            {activeTab === 'dashboard' && (
              <div className="space-y-16">
                {/* Hero Manifesto & Impact Metrics */}
                <HeroManifesto />

                {/* Dashboard de los 6 Dispositivos Culturales */}
                <SectionsDashboard onSelectTab={handleSelectTab} />

                {/* Registro Presencial: Fotografías en Vivo */}
                <PosterGallery initialCompetitionFilter="all" />
              </div>
            )}

            {/* View 2: RAP BEAUCHEF (Matriz Cultural: El Presencial, Las Escritas, Rap Libre) */}
            {activeTab === 'rap-beauchef' && (
              <RapBeauchefSection
                initialSubTab={beauchefSubTab}
                onSelectVideo={handleSelectVideo}
                onBackToDashboard={handleBackToDashboard}
              />
            )}

            {/* View 3: DUEÑAS DE LA VOZ */}
            {activeTab === 'duenas-de-la-voz' && (
              <DuenasDeLaVozSection
                onSelectVideo={handleSelectVideo}
                onBackToDashboard={handleBackToDashboard}
              />
            )}

            {/* View 4: DISCORD RAP BEAUCHEF */}
            {activeTab === 'discord-rap-beauchef' && (
              <DiscordRapBeauchefSection
                onSelectVideo={handleSelectVideo}
                onBackToDashboard={handleBackToDashboard}
              />
            )}

            {/* View 5: CUARENTENA RAP (Cinemática Limpia) */}
            {activeTab === 'cuarentena-rap' && (
              <CuarentenaRapSection
                onSelectVideo={handleSelectVideo}
                onBackToDashboard={handleBackToDashboard}
              />
            )}
          </div>
        )}
      </main>

      {/* Archival Footer (Oculto en Cuarentena Rap) */}
      {activeTab !== 'cuarentena-rap' && <Footer />}

    </div>
  );
};

export default App;
