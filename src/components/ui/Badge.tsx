import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'amber' | 'green' | 'cyan' | 'red' | 'magenta' | 'neutral';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  size = 'md',
}) => {
  const variantStyles = {
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    red: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    magenta: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30',
    neutral: 'bg-neutral-800 text-neutral-300 border-neutral-700',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-1.5 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono uppercase font-semibold rounded border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse opacity-80" />
      {children}
    </span>
  );
};
