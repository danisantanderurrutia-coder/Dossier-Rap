import React, { useState } from 'react';
import { ArchivalHeader } from './components/layout/ArchivalHeader';
import { RightHangingMenu, SectionTab } from './components/layout/RightHangingMenu';
import { Footer } from './components/layout/Footer';
import { HeroManifesto } from './components/sections/HeroManifesto';
import { CuarentenaRapSection } from './components/sections/CuarentenaRapSection';
import { RapBeauchefSection } from './components/sections/RapBeauchefSection';
import { DuenasDeLaVozSection } from './components/sections/DuenasDeLaVozSection';
import { DiscordRapBeauchefSection } from './components/sections/DiscordRapBeauchefSection';
import { RapLibreSection } from './components/sections/RapLibreSection';
import { LasEscritasSection } from './components/sections/LasEscritasSection';
import { ExecutiveCaseStudy } from './components/sections/ExecutiveCaseStudy';
import { PosterGallery } from './components/media/PosterGallery';
import { YoutubeVideo } from './types/archive';

export const App: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'dossier' | 'executive'>('dossier');
  const [activeTab, setActiveTab] = useState<SectionTab>('dashboard');

  const handleSelectVideo = (video: YoutubeVideo) => {
    // Abrir video directamente en nueva pestaña si se selecciona desde un expediente
    window.open(video.url, '_blank');
  };

  const handleSelectTab = (tab: SectionTab) => {
    setActiveMode('dossier');
    setActiveTab(tab);
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
              <div className="space-y-12">
                {/* Hero Manifesto & Impact Metrics */}
                <HeroManifesto />

                {/* Bóveda Visual y Afiches de Culto */}
                <PosterGallery initialCompetitionFilter="all" />
              </div>
            )}

            {/* View 2: RAP BEAUCHEF (Presencial con Fotos y Videos) */}
            {activeTab === 'rap-beauchef' && (
              <RapBeauchefSection
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

            {/* View 6: RAP LIBRE */}
            {activeTab === 'rap-libre' && (
              <RapLibreSection
                onBackToDashboard={handleBackToDashboard}
              />
            )}

            {/* View 7: LAS ESCRITAS */}
            {activeTab === 'las-escritas' && (
              <LasEscritasSection
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
