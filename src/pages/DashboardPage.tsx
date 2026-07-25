import React, { useState, useEffect } from 'react';

interface DashboardPageProps {
  isDarkMode?: boolean;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ isDarkMode = false }) => {
  const [seconds, setSeconds] = useState(5048); // 01:24:08
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number>(0);
  const [chartType, setChartType] = useState<'bars' | 'line'>('bars'); // Toggle between Donezo Bars and Line Wave!
  const [timeframe, setTimeframe] = useState<'D' | 'W' | 'M'>('W');

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const statCards = [
    {
      id: 0,
      title: 'LIVE PROJECTS',
      value: '24',
      badge: '+12.4%',
      subtext: '12.4% Increase vs last month',
      icon: 'translate',
      type: 'blue',
    },
    {
      id: 1,
      title: 'PENDING REVIEWS',
      value: '12',
      badge: 'ACTIVE',
      subtext: '12 Reviews in queue',
      icon: 'pending_actions',
      type: 'white',
    },
    {
      id: 2,
      title: 'DELIVERY MILESTONE',
      value: '150',
      badge: 'GOAL 100%',
      subtext: '150 Batches delivered',
      icon: 'check_circle',
      type: 'white',
    },
    {
      id: 3,
      title: 'MONTHLY REVENUE',
      value: '$42,910',
      badge: 'TARGET GOAL',
      subtext: 'Goal $50K target',
      icon: 'payments',
      type: 'dark',
    },
  ];

  const projectList = [
    { name: 'Develop API Endpoints', date: 'Due date: Nov 26, 2026', icon: 'code', color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Onboarding Flow', date: 'Due date: Nov 28, 2026', icon: 'account_tree', color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' },
    { name: 'Build Dashboard', date: 'Due date: Nov 30, 2026', icon: 'dashboard', color: 'text-sky-500 bg-sky-50 dark:bg-sky-900/30' },
    { name: 'Optimize Page Load', date: 'Due date: Dec 5, 2026', icon: 'speed', color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/30' },
    { name: 'Cross-Browser Testing', date: 'Due date: Dec 6, 2026', icon: 'devices', color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/30' },
  ];

  const liveNetworkLogs = [
    {
      name: 'Alexandra Deff',
      time: 'NOW',
      action: "Updated 'Legal Contract - DE/EN' final proofs with SEO keywords.",
      status: 'Proofing',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    },
    {
      name: 'Edwin Adenike',
      time: '45M AGO',
      action: 'System auto-assigned 14,000 words for technical review.',
      status: 'Queue',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
    },
  ];

  return (
    <div className="space-y-8">
      {/* SVG Definitions for Hatched Patterns */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#475569' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">OPERATIONAL DASHBOARD</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Overview <span className="text-blue-500 italic font-serif">&amp;</span> Performance
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Managing <span className={isDarkMode ? 'text-white font-black' : 'text-slate-900 font-black'}>1.2M words</span> this month across 12 active language pairs with elite certification levels.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 ${
            isDarkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-200/80 border-slate-300 text-slate-900 hover:bg-slate-300/80'
          }`}>
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            Export Report
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-full shadow-lg shadow-blue-700/30 transition-all hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            New Project
          </button>
        </div>
      </div>

      {/* Top 4 Interactive Expandable Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const isExpanded = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer hover-vibrate transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white shadow-2xl scale-[1.03] z-20 border-2 border-blue-500'
                  : card.type === 'dark'
                  ? 'bg-slate-900 text-white border-2 border-slate-800 shadow-md'
                  : isDarkMode
                  ? 'bg-slate-800/80 border-2 border-slate-700/80 text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              {isExpanded && (
                <div className="absolute -right-6 -top-6 opacity-10 text-white pointer-events-none transition-all duration-700">
                  <span className="material-symbols-outlined text-[160px]">{card.icon}</span>
                </div>
              )}

              <div className="flex justify-between items-start relative z-10">
                <span className={`text-xs font-black uppercase tracking-widest ${
                  isExpanded ? 'text-blue-100' : isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {card.title}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isExpanded ? 'bg-white/20 text-white' : isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">{card.icon}</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <div className="text-4xl lg:text-5xl font-black tracking-tight mb-2">
                  {card.value}
                </div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${
                  isExpanded ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  {card.badge}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Grid: Project Analytics (With Bars/Line Toggle) + Donezo Project Progress 180° Arc Meter */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Analytics Card with Chart Type Toggle (Bars vs Line Wave) - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 shadow-sm relative overflow-hidden flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-black">Project Analytics</h3>
              <p className="text-xs text-slate-400 font-bold">Wordcount throughput & active project volume</p>
            </div>

            {/* Controls: Chart Type Toggle (Bars/Line) + Timeframe */}
            <div className="flex items-center gap-3">
              {/* Bars vs Line Toggle */}
              <div className={`flex p-1 rounded-full border ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                <button
                  onClick={() => setChartType('bars')}
                  className={`px-3 py-1 text-xs font-black rounded-full transition-all flex items-center gap-1 ${
                    chartType === 'bars'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                  <span>Bars</span>
                </button>
                <button
                  onClick={() => setChartType('line')}
                  className={`px-3 py-1 text-xs font-black rounded-full transition-all flex items-center gap-1 ${
                    chartType === 'line'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">show_chart</span>
                  <span>Line</span>
                </button>
              </div>

              {/* Timeframe D/W/M */}
              <div className={`flex p-1 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}`}>
                {(['D', 'W', 'M'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 text-xs font-black rounded-full transition-colors ${
                      timeframe === t
                        ? 'bg-blue-700 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Render Selected Chart: Donezo Capsule Bars OR Smooth Line Wave */}
          {chartType === 'bars' ? (
            <div className="h-60 flex items-end justify-between px-2 gap-3 relative">
              {[
                { day: 'S', height: '60%', type: 'hatched' },
                { day: 'M', height: '85%', type: 'solid' },
                { day: 'T', height: '74%', type: 'active', badge: '74%' },
                { day: 'W', height: '95%', type: 'dark' },
                { day: 'T', height: '65%', type: 'hatched' },
                { day: 'F', height: '50%', type: 'hatched' },
                { day: 'S', height: '70%', type: 'hatched' },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative group">
                  {bar.badge && (
                    <div className="absolute -top-7 bg-blue-700 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md animate-bounce">
                      {bar.badge}
                    </div>
                  )}
                  <div
                    className={`w-full rounded-full transition-all duration-500 hover:scale-105 ${
                      bar.type === 'dark'
                        ? 'bg-blue-900'
                        : bar.type === 'solid'
                        ? 'bg-blue-700'
                        : bar.type === 'active'
                        ? 'bg-blue-500'
                        : 'bg-blue-100 border-2 border-dashed border-blue-300 dark:bg-slate-700 dark:border-slate-600'
                    }`}
                    style={{ height: bar.height }}
                  ></div>
                  <span className="text-xs font-bold text-slate-400 mt-3">{bar.day}</span>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="h-60 relative w-full flex items-end">
                <svg className="w-full h-full text-blue-500/10 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 800 200">
                  <path d="M0,200 L0,150 C50,140 100,170 150,120 S250,40 300,80 S400,100 450,50 S550,20 600,60 S700,90 800,40 L800,200 Z" fill="currentColor"></path>
                </svg>
                <svg className="w-full h-full text-blue-500 relative z-10" preserveAspectRatio="none" viewBox="0 0 800 200">
                  <path d="M0,150 C50,140 100,170 150,120 S250,40 300,80 S400,100 450,50 S550,20 600,60 S700,90 800,40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"></path>
                  <circle cx="150" cy="120" r="6" fill={isDarkMode ? '#0f172a' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="450" cy="50" r="6" fill={isDarkMode ? '#0f172a' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="800" cy="40" r="6" fill={isDarkMode ? '#0f172a' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                </svg>
              </div>
              <div className="flex justify-between mt-3 text-xs font-black text-slate-400 px-2">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </div>
          )}
        </div>

        {/* Donezo Project Progress 180° Semi-Circle Arc Meter (Positioned at Top-Right!) - 5 Cols */}
        <div className={`lg:col-span-5 p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-black">Project Progress</h3>
            <span className="text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">LIVE SLA</span>
          </div>

          <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4">
            <svg className="w-64 h-40" viewBox="0 0 200 110">
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#hatchedPattern)"
                strokeWidth="28"
                strokeLinecap="butt"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="28"
                strokeDasharray="251.3"
                strokeDashoffset="80"
                strokeLinecap="butt"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#004ac6"
                strokeWidth="28"
                strokeDasharray="251.3"
                strokeDashoffset="148"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute bottom-2 flex flex-col items-center justify-center">
              <span className={`text-5xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                41%
              </span>
              <span className="text-xs font-bold text-slate-400 mt-1">Project Ended</span>
            </div>
          </div>

          <div className={`flex justify-between items-center text-xs font-bold border-t pt-4 mt-2 ${
            isDarkMode ? 'border-slate-700 text-slate-300' : 'border-slate-100 text-slate-600'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-700"></span>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-sky-400"></span>
              <span>In Progress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 border-2 border-dashed border-slate-400 rounded-sm bg-slate-100 dark:bg-slate-700"></span>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Live Network + Hard Deadlines + Reminders + Time Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Live Network Logs - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-black">Live Network</h3>
            <button className="text-xs font-black text-blue-500 hover:underline flex items-center gap-1">
              ALL LOGS →
            </button>
          </div>

          <div className="space-y-4">
            {liveNetworkLogs.map((log, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
                isDarkMode ? 'border-slate-700/60 hover:bg-slate-700/40' : 'border-slate-100 hover:bg-slate-50'
              }`}>
                <img src={log.avatar} alt={log.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm">{log.name}</span>
                    <span className="text-[10px] font-black text-slate-400">{log.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mt-0.5 truncate">{log.action}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${log.statusColor}`}>
                  {log.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Deadlines + Mobile App CTA - 5 Cols */}
        <div className="lg:col-span-5 space-y-8">
          {/* Hard Deadlines */}
          <div className={`p-8 rounded-[2.5rem] border-2 shadow-sm space-y-4 transition-colors ${
            isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-xl font-black mb-4">Hard Deadlines</h3>
            <div className="p-4 rounded-2xl bg-red-500/10 border-l-8 border-red-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">URGENT • 2H REMAINING</span>
                <span className="material-symbols-outlined text-red-500 text-[18px]">priority_high</span>
              </div>
              <h4 className="font-black text-sm">Legal Contract - DE/EN</h4>
              <p className="text-xs text-slate-400 font-medium mt-1">Reviewer: Alex Sterling</p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/10 border-l-8 border-blue-500">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">STANDARD • TOMORROW</span>
              </div>
              <h4 className="font-black text-sm">Financial Report - ES/EN</h4>
              <p className="text-xs text-slate-400 font-medium mt-1">In-house validation pending...</p>
            </div>
          </div>

          {/* Productivity Unbound Mobile CTA */}
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <span className="text-[10px] font-black bg-blue-600 text-white px-3 py-1 rounded-full uppercase tracking-wider">Mobile Access</span>
            <h3 className="text-2xl font-black leading-tight mt-3 mb-2">
              Productivity <br />
              <span className="text-blue-500">Unbound.</span>
            </h3>
            <p className="text-xs text-slate-400 font-medium mb-6">Approve batches and monitor linguistics on the fly.</p>
            <button className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-full shadow-lg shadow-blue-700/30 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
              <span className="material-symbols-outlined text-[18px]">install_mobile</span>
              GET THE MOBILE APP
            </button>
          </div>
        </div>
      </div>

      {/* Donezo Reminders + Time Tracker Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Reminders - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 shadow-sm flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div>
            <h3 className="text-lg font-black mb-4">Reminders</h3>
            <div className="mt-2">
              <h4 className="text-2xl font-black leading-snug">
                Meeting with Arc Company
              </h4>
              <p className="text-xs text-slate-400 font-semibold mt-2">
                Time : 02.00 pm - 04.00 pm
              </p>
            </div>
          </div>

          <button className="w-full max-w-sm mt-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-700/30 transition-all hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            Start Meeting
          </button>
        </div>

        {/* Time Tracker - 5 Cols */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div>
            <h3 className="text-xs font-extrabold text-blue-200 uppercase tracking-widest mb-4">Time Tracker</h3>
            <div className="text-4xl font-black font-mono tracking-wider mt-4">
              {formatTime(seconds)}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isTimerRunning ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              onClick={() => setSeconds(0)}
              className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <span className="material-symbols-outlined text-[20px]">stop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
