import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  value: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  variant?: 'amber' | 'cyan' | 'green' | 'red';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  sublabel,
  icon: Icon,
  variant = 'amber',
}) => {
  const accentColors = {
    amber: 'text-crt-amber border-amber-500/20 group-hover:border-amber-500/50 group-hover:shadow-glow-amber',
    cyan: 'text-crt-cyan border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-glow-cyan',
    green: 'text-crt-green border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:shadow-glow-green',
    red: 'text-crt-red border-rose-500/20 group-hover:border-rose-500/50 group-hover:shadow-glow-red',
  };

  const iconColors = {
    amber: 'text-amber-400 bg-amber-500/10',
    cyan: 'text-cyan-400 bg-cyan-500/10',
    green: 'text-emerald-400 bg-emerald-500/10',
    red: 'text-rose-400 bg-rose-500/10',
  };

  return (
    <div
      className={`group relative bg-surface border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 ${accentColors[variant]}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
          {label}
        </span>
        <div className={`p-2 rounded-lg ${iconColors[variant]}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      
      <div className="font-mono font-extrabold text-2xl lg:text-3xl tracking-tight text-white mb-1">
        {value}
      </div>
      
      <p className="text-xs text-neutral-400 leading-relaxed">
        {sublabel}
      </p>

      {/* Decorative LED indicator */}
      <div className="absolute bottom-2 right-2 flex gap-1">
        <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-current transition-colors" />
        <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-current transition-colors" />
        <span className="w-1 h-1 rounded-full bg-neutral-600 group-hover:bg-current transition-colors" />
      </div>
    </div>
  );
};
