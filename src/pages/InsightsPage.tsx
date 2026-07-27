import React, { useState } from 'react';

interface InsightsPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [chartType, setChartType] = useState<'bars' | 'line'>('bars');
  const [timeframe, setTimeframe] = useState<'D' | 'W' | 'M'>('W');

  const statCards = [
    { id: 0, title: 'AVERAGE BLEU SCORE', value: '89.4%', badge: '+2.1% ▲ vs Baseline', icon: 'monitoring', color: 'text-blue-500' },
    { id: 1, title: 'NEURAL ENGINE SPEED', value: '42.5K WPH', badge: 'Words / Hour', icon: 'speed', color: 'text-emerald-500' },
    { id: 2, title: 'SLA ACCURACY RATE', value: '99.8%', badge: '0 Breaches ▲', icon: 'verified', color: 'text-blue-500' },
    { id: 3, title: 'LATENCY SCORE', value: '35ms', badge: 'Sub-50ms Target', icon: 'bolt', color: 'text-blue-500' },
  ];

  const languagePairs = [
    {
      id: 'LP-01',
      pair: 'German (DE) → English (EN)',
      type: 'Legal & Sworn Model',
      accuracy: '98.4%',
      throughput: '18.4K WPH',
      tags: ['BLEU 92.1', 'ISO-17100', 'NEURAL V4'],
      status: 'Optimal',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'translate',
      iconColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30',
      badge: 'verified',
    },
    {
      id: 'LP-02',
      pair: 'Spanish (ES) → English (EN)',
      type: 'Medical & Clinical Model',
      accuracy: '96.8%',
      throughput: '14.2K WPH',
      tags: ['HIPAA ENGINE', 'MD CERTIFIED', 'LLM PROMPT'],
      status: 'Optimal',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'health_and_safety',
      iconColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      badge: 'verified_user',
    },
    {
      id: 'LP-03',
      pair: 'Chinese (ZH) → English (EN)',
      type: 'Technical & Software i18n',
      accuracy: '94.2%',
      throughput: '12.0K WPH',
      tags: ['JSON AUTO', 'PATENT BAR', 'RETRAINING'],
      status: 'Calibrating',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 badge-glow-amber',
      icon: 'code',
      iconColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30',
      badge: 'workspace_premium',
    },
    {
      id: 'LP-04',
      pair: 'French (FR) → English (EN)',
      type: 'Transcreation & Brand Kit',
      accuracy: '97.1%',
      throughput: '9.8K WPH',
      tags: ['COPYWRITER', 'GLOSSARY v2', 'CREATIVE AI'],
      status: 'Optimal',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'draw',
      iconColor: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
      badge: 'verified',
    },
  ];

  return (
    <div className="space-y-8 animate-page-enter">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">LOCALIZATION INTELLIGENCE &amp; QUALITY TELEMETRY</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Analytics &amp; Quality Insights
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            BLEU score accuracy analytics, NMT throughput performance, and model latency.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Analytics
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            Live Telemetry
          </button>
        </div>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
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

      {/* Main Grid Layout (Matching Team, Documents, and Invoices Pages) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Side Gauges & Model Precision - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Neural Model Accuracy Donut Arc Gauge */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black leading-tight">Neural Model<br />Precision SLA</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
            </div>

            {/* 98.2% Donut Arc Gauge */}
            <div className="relative w-44 h-44 mx-auto my-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="88" cy="88" r="70" fill="transparent" stroke={isDarkMode ? '#27272a' : '#e2e8f0'} strokeWidth="16" />
                <circle
                  cx="88"
                  cy="88"
                  r="70"
                  fill="transparent"
                  stroke="#004ac6"
                  strokeWidth="16"
                  strokeDasharray="440"
                  strokeDashoffset="8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black tracking-tight">98.2%</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">12 ENGINE PAIRS</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">BLEU Threshold</span>
                <span className="font-black text-emerald-500 text-sm">Pass (ISO-17100)</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Retraining Frequency</span>
                <span className="font-black text-blue-600 dark:text-blue-400 text-sm">Daily Auto Sync</span>
              </div>
            </div>
          </div>

          {/* Model Accuracy by Domain Progress Bars */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-black">Domain Precision</h3>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Legal &amp; Sworn Contracts</span>
                  <span className="text-blue-600 font-black">98.4%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[98.4%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Medical &amp; Bio Protocols</span>
                  <span className="text-blue-600 font-black">96.8%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[96.8%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Fintech &amp; Earnings Reports</span>
                  <span className="text-blue-600 font-black">97.1%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[97.1%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Chart & Language Pair Cards Grid - 8 Cols */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Throughput Chart Card */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-black">NMT Wordcount &amp; Precision Throughput</h3>
                <p className="text-xs text-zinc-400 font-bold">Real-time words processed per hour</p>
              </div>

              <div className="flex items-center gap-3">
                <div className={`flex p-1 rounded-full border ${isDarkMode ? 'bg-[#27272a] border-zinc-700' : 'bg-slate-100 border-slate-200'}`}>
                  <button
                    onClick={() => setChartType('bars')}
                    className={`px-3 py-1 text-xs font-black rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                      chartType === 'bars'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                    <span>Bars</span>
                  </button>
                  <button
                    onClick={() => setChartType('line')}
                    className={`px-3 py-1 text-xs font-black rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                      chartType === 'line'
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">show_chart</span>
                    <span>Line</span>
                  </button>
                </div>

                <div className={`flex p-1 rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                  {(['D', 'W', 'M'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeframe(t)}
                      className={`px-3 py-1 text-xs font-black rounded-full transition-colors cursor-pointer ${
                        timeframe === t
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {chartType === 'bars' ? (
              <div className="h-56 flex items-end justify-between px-2 gap-3 relative">
                {[
                  { day: 'S', height: '65%', type: 'solid' },
                  { day: 'M', height: '90%', type: 'solid' },
                  { day: 'T', height: '82%', type: 'active', badge: '82%' },
                  { day: 'W', height: '98%', type: 'dark' },
                  { day: 'T', height: '70%', type: 'solid' },
                  { day: 'F', height: '85%', type: 'solid' },
                  { day: 'S', height: '75%', type: 'solid' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative group">
                    {bar.badge && (
                      <div className="absolute -top-7 bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md animate-bounce">
                        {bar.badge}
                      </div>
                    )}
                    <div
                      className={`w-full rounded-full transition-all duration-300 hover:scale-105 ${
                        bar.type === 'dark'
                          ? isDarkMode
                            ? 'bg-zinc-100 text-slate-900'
                            : 'bg-blue-900'
                          : 'bg-blue-600'
                      }`}
                      style={{ height: bar.height }}
                    ></div>
                    <span className="text-xs font-bold text-zinc-400 mt-3">{bar.day}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-56 relative w-full flex items-end">
                <svg className="w-full h-full text-blue-500/10 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 800 200">
                  <path d="M0,200 L0,150 C50,140 100,170 150,120 S250,40 300,80 S400,100 450,50 S550,20 600,60 S700,90 800,40 L800,200 Z" fill="currentColor"></path>
                </svg>
                <svg className="w-full h-full text-blue-500 relative z-10" preserveAspectRatio="none" viewBox="0 0 800 200">
                  <path d="M0,150 C50,140 100,170 150,120 S250,40 300,80 S400,100 450,50 S550,20 600,60 S700,90 800,40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"></path>
                </svg>
              </div>
            )}
          </div>

          {/* Language Pair Performance Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languagePairs.map((lp, idx) => {
              const isHovered = hoveredCard === idx;
              return (
                <div
                  key={lp.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onItemClick && onItemClick({ title: lp.pair, subtitle: `${lp.type} • Accuracy: ${lp.accuracy} • Throughput: ${lp.throughput}`, icon: lp.icon, badge: lp.status })}
                  className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer animate-card-pop ${
                    isHovered
                      ? 'shadow-2xl border-blue-500 z-10'
                      : isDarkMode
                      ? 'bg-[#18181b] border-[#27272a] text-white shadow-sm'
                      : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Icon & Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${lp.iconColor}`}>
                        <span className="material-symbols-outlined text-[28px]">{lp.icon}</span>
                      </div>
                      <span className="material-symbols-outlined text-blue-600 text-[24px]">
                        {lp.badge}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{lp.id}</div>
                    <h4 className="text-lg font-black tracking-tight">{lp.pair}</h4>
                    <p className="text-xs text-blue-500 font-extrabold mt-0.5 mb-3">{lp.type}</p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {lp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                            isDarkMode ? 'bg-[#27272a] text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Accuracy & Status */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-zinc-800">
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ACCURACY / SPEED</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{lp.accuracy} • {lp.throughput}</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/60 text-slate-700 dark:text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full ${lp.status === 'Optimal' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      <span>{lp.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
