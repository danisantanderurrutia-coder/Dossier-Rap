import React from 'react';
import { Skull, Mic2, Megaphone, LayoutGrid } from 'lucide-react';

export type TabType = 'dashboard' | 'cuarentena-rap' | 'rap-beauchef' | 'rap-libre';

interface NavigationTabsProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const tabs = [
    {
      id: 'dashboard' as TabType,
      label: '00. Dashboard Central',
      sublabel: 'Vista General & Bóveda',
      icon: LayoutGrid,
      color: 'border-neutral-500 text-neutral-300',
      activeColor: 'bg-neutral-800 text-white border-neutral-400 shadow-sm',
    },
    {
      id: 'cuarentena-rap' as TabType,
      label: '01. Cuarentena Rap',
      sublabel: '2020–2021 // Muerte & Liberación',
      icon: Skull,
      color: 'border-amber-500/30 text-amber-400',
      activeColor: 'bg-amber-500/10 text-amber-300 border-amber-500 shadow-glow-amber',
    },
    {
      id: 'rap-beauchef' as TabType,
      label: '02. Rap Beauchef',
      sublabel: '2019–2021 // Anfiteatro & Discord',
      icon: Mic2,
      color: 'border-cyan-500/30 text-cyan-400',
      activeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500 shadow-glow-cyan',
    },
    {
      id: 'rap-libre' as TabType,
      label: '03. Rap Libre',
      sublabel: '2019–2020 // Plazas & Solidaridad',
      icon: Megaphone,
      color: 'border-rose-500/30 text-rose-400',
      activeColor: 'bg-rose-500/10 text-rose-300 border-rose-500 shadow-glow-red',
    },
  ];

  return (
    <div className="w-full border-b border-surface-border bg-surface/80 backdrop-blur-md sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl border text-left transition-all duration-200 ${
                  isActive
                    ? `${tab.activeColor} font-semibold`
                    : 'bg-surface/60 border-surface-border text-neutral-400 hover:text-white hover:border-neutral-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-current' : 'text-neutral-500'}`} />
                <div>
                  <div className="font-mono text-xs tracking-wider uppercase">
                    {tab.label}
                  </div>
                  <div className="text-[10px] text-neutral-400 font-sans hidden sm:block">
                    {tab.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
