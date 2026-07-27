import React, { useState } from 'react';

interface SettingsPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const statCards = [
    { id: 0, title: 'API KEYS ACTIVE', value: '2 Production', badge: 'Active Rate Limit', icon: 'key', color: 'text-blue-500' },
    { id: 1, title: 'ACTIVE WEBHOOKS', value: '6 Live Signals', badge: 'Auto Sync', icon: 'webhook', color: 'text-emerald-500' },
    { id: 2, title: 'AUTO-CORRECT MT', value: 'Enabled', badge: 'Glossary Priority', icon: 'auto_fix_high', color: 'text-amber-500' },
    { id: 3, title: 'ISO AUDIT VAULT', value: 'ISO-17100', badge: 'Compliance Pass', icon: 'verified', color: 'text-purple-500' },
  ];

  return (
    <div className="space-y-8 animate-page-enter">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">SYSTEM CONFIGURATION &amp; SECURITY</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Agency System Controls
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage API keys, Neural MT model parameters, and ISO team permissions.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">history</span>
            Export Audit Logs
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save System State
          </button>
        </div>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((c) => {
          const isExpanded = hoveredCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl scale-[1.02] border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#18181b] border-2 border-[#27272a] text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start relative z-10">
                <span className={`text-xs font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </span>
                <span className={`text-[10px] px-3 py-1 rounded-full font-black ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {c.badge}
                </span>
              </div>
              <div className="mt-6 relative z-10">
                <div className="text-4xl font-black tracking-tight">{c.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Settings Options Card Grid */}
      <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-6 transition-colors ${
        isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-zinc-800">
          <div>
            <h3 className="font-extrabold text-base">Neural MT Auto-Correction</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Automatically apply glossary terms before human review panel</p>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600 focus:ring-blue-600 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-zinc-800">
          <div>
            <h3 className="font-extrabold text-base">Sworn Audit Alerts</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Alert lead auditor when BLEU accuracy score drops below 75%</p>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600 focus:ring-blue-600 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base">API Key Production Access</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Production key: <span className="font-mono text-blue-500 font-bold">lx_prod_9921487291847</span></p>
          </div>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer">
            Regenerate Key
          </button>
        </div>
      </div>
    </div>
  );
};
