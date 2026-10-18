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
import { Layers } from 'lucide-react';

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

                {/* Guía Curatorial de Navegación Lateral */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-gradient-to-r from-surface via-[#13171e] to-surface border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-crt-amber animate-ping" />
                        <span className="font-mono text-xs uppercase tracking-widest text-crt-amber font-bold">
                          Navegación por Expedientes
                        </span>
                      </div>
                      <h3 className="font-mono text-xl sm:text-2xl font-bold text-white">
                        Explora los Archivos desde el Menú Lateral Colgante
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                        Accede directamente a los expedientes monográficos: 
                        <strong> Rap Beauchef (Presencial)</strong>, 
                        <strong> Dueñas de la Voz</strong>, 
                        <strong> Discord Rap Beauchef</strong>, 
                        <strong> Cuarentena Rap</strong>, 
                        <strong> Rap Libre</strong> y 
                        <strong> Las Escritas</strong>, utilizando la barra lateral interactiva situada a la derecha de la pantalla.
                      </p>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2 font-mono text-xs bg-neutral-900 border border-neutral-800 text-crt-amber px-4 py-2.5 rounded-xl shadow-inner">
                      <Layers className="w-4 h-4 text-crt-amber" />
                      <span>Menú lateral derecho activo &rarr;</span>
                    </div>
                  </div>
                </section>

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
