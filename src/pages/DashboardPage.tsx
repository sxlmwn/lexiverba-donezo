import React, { useState, useEffect } from 'react';

interface DashboardPageProps {
  isDarkMode?: boolean;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ isDarkMode = false }) => {
  const [seconds, setSeconds] = useState(5048); // 01:24:08
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number>(0);
  const [chartType, setChartType] = useState<'bars' | 'line'>('bars');
  const [timeframe, setTimeframe] = useState<'D' | 'W' | 'M'>('W');

  // Interactive Animated Gauge State (Count up from 0 to 41% on hover)
  const [gaugePercent, setGaugePercent] = useState<number>(41);
  const [isGaugeAnimating, setIsGaugeAnimating] = useState<boolean>(false);

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

  const triggerGaugeAnimation = () => {
    if (isGaugeAnimating) return;
    setIsGaugeAnimating(true);
    setGaugePercent(0);

    let start = 0;
    const target = 41;
    const duration = 1000; // 1 second
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setGaugePercent(start);
      if (start >= target) {
        clearInterval(timer);
        setIsGaugeAnimating(false);
      }
    }, stepTime);
  };

  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const statCards = [
    {
      id: 0,
      title: 'TOTAL PROJECTS',
      value: '24',
      badge: '5 ▲ Increased',
      icon: 'north_east',
    },
    {
      id: 1,
      title: 'ENDED PROJECTS',
      value: '10',
      badge: '6 ▲ Increased',
      icon: 'north_east',
    },
    {
      id: 2,
      title: 'RUNNING PROJECTS',
      value: '12',
      badge: '2 ▲ Increased',
      icon: 'north_east',
    },
    {
      id: 3,
      title: 'PENDING PROJECT',
      value: '2',
      badge: 'On Discuss',
      icon: 'north_east',
    },
  ];

  const projectList = [
    { name: 'Develop API Endpoints', date: 'Due date: Nov 26, 2026', icon: 'code', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Onboarding Flow', date: 'Due date: Nov 28, 2026', icon: 'account_tree', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30' },
    { name: 'Build Dashboard', date: 'Due date: Nov 30, 2026', icon: 'dashboard', color: 'text-sky-600 bg-sky-50 dark:bg-sky-900/30' },
    { name: 'Optimize Page Load', date: 'Due date: Dec 5, 2026', icon: 'speed', color: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30' },
    { name: 'Cross-Browser Testing', date: 'Due date: Dec 6, 2026', icon: 'devices', color: 'text-purple-600 bg-purple-50 dark:bg-purple-900/30' },
  ];

  const teamMembers = [
    {
      name: 'Alexandra Deff',
      task: 'Working on Github Project Repository',
      status: 'Completed',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'Edwin Adenike',
      task: 'Working on Integrate User Authentication System',
      status: 'In Progress',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'Isaac Oluwatemilorun',
      task: 'Working on Develop Search and Filter Functionality',
      status: 'Pending',
      statusColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'David Oshodi',
      task: 'Working on Responsive Layout for Homepage',
      status: 'In Progress',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    },
  ];

  // Total Arc Perimeter: π * 80 = 251.32
  const totalArcLength = 251.32;
  const completedDashOffset = totalArcLength - (totalArcLength * (gaugePercent / 100));
  const inProgressDashOffset = totalArcLength - (totalArcLength * 0.70);

  return (
    <div className="space-y-8">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#334155' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Dashboard
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>

        {/* Pill Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="text-base font-bold">+</span>
            Add Project
          </button>
          <button className={`px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#182032] border-[#26324a] text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            Import Data
          </button>
        </div>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const isExpanded = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#111726] border-2 border-[#1e2638] text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              {isExpanded && (
                <div className="absolute -right-6 -top-6 opacity-10 text-white pointer-events-none transition-all duration-500">
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
                    isExpanded ? 'bg-white/20 text-white' : isDarkMode ? 'bg-slate-800 text-slate-300' : 'border border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <div className="text-5xl font-black tracking-tight mb-3">
                  {card.value}
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black transition-colors ${
                    isExpanded
                      ? 'bg-white/20 text-white'
                      : isDarkMode
                      ? 'bg-slate-800 text-slate-300 border border-slate-700'
                      : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  {card.badge}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Grid: Project Analytics + Donezo Project Progress Arc Gauge */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Project Analytics Card - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 float-shadow smooth-card flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-black">Project Analytics</h3>
              <p className="text-xs text-slate-400 font-bold">Wordcount throughput &amp; active project volume</p>
            </div>

            <div className="flex items-center gap-3">
              <div className={`flex p-1 rounded-full border ${isDarkMode ? 'bg-[#1a2334] border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                <button
                  onClick={() => setChartType('bars')}
                  className={`px-3 py-1 text-xs font-black rounded-full transition-all flex items-center gap-1 cursor-pointer ${
                    chartType === 'bars'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
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
                      : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">show_chart</span>
                  <span>Line</span>
                </button>
              </div>

              <div className={`flex p-1 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {(['D', 'W', 'M'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 text-xs font-black rounded-full transition-colors cursor-pointer ${
                      timeframe === t
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

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
                    <div className="absolute -top-7 bg-blue-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md animate-bounce">
                      {bar.badge}
                    </div>
                  )}
                  <div
                    className={`w-full rounded-full transition-all duration-300 hover:scale-105 ${
                      bar.type === 'dark'
                        ? isDarkMode
                          ? 'bg-blue-600'
                          : 'bg-blue-900'
                        : bar.type === 'solid'
                        ? 'bg-blue-600'
                        : bar.type === 'active'
                        ? 'bg-blue-500'
                        : isDarkMode
                        ? 'bg-slate-800 border-2 border-dashed border-slate-700'
                        : 'bg-blue-50 border-2 border-dashed border-blue-200'
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
                  <circle cx="150" cy="120" r="6" fill={isDarkMode ? '#070b14' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="450" cy="50" r="6" fill={isDarkMode ? '#070b14' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="800" cy="40" r="6" fill={isDarkMode ? '#070b14' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
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

        {/* Donezo Project Progress Arc Gauge with Rounded Light Blue End & Interactive Hover Count-Up Animation - 5 Cols */}
        <div
          onMouseEnter={triggerGaugeAnimation}
          className={`lg:col-span-5 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-black">Project Progress</h3>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">LIVE SLA</span>
          </div>

          <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4 cursor-pointer group">
            <svg className="w-64 h-40" viewBox="0 0 200 110">
              {/* Layer 1: Pending Segment (Hatched Pattern) */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#hatchedPattern)"
                strokeWidth="28"
                strokeLinecap="round"
              />

              {/* Layer 2: In Progress Segment (Sky Blue #38bdf8 with ROUND END strokeLinecap="round") */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="28"
                strokeDasharray="251.32"
                strokeDashoffset={inProgressDashOffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />

              {/* Layer 3: Completed Segment (Solid Dark Blue #004ac6 with ROUND END strokeLinecap="round") */}
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#004ac6"
                strokeWidth="28"
                strokeDasharray="251.32"
                strokeDashoffset={completedDashOffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
            </svg>

            {/* Interactive Count-Up Counter */}
            <div className="absolute bottom-2 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
              <span className={`text-5xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {gaugePercent}%
              </span>
              <span className="text-xs font-bold text-slate-400 mt-1">Project Ended</span>
            </div>
          </div>

          <div className={`flex justify-between items-center text-xs font-bold border-t pt-4 mt-2 ${
            isDarkMode ? 'border-slate-800 text-slate-300' : 'border-slate-100 text-slate-600'
          }`}>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#004ac6]"></span>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#38bdf8]"></span>
              <span>In Progress</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 border-2 border-dashed border-slate-400 rounded-sm bg-slate-100 dark:bg-slate-800"></span>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Team Collaboration - 5 Cols */}
        <div className={`lg:col-span-5 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
          isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black">Team Collaboration</h3>
            <button className={`px-4 py-1.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 cursor-pointer ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
            }`}>
              + Add Member
            </button>
          </div>

          <div className="space-y-4">
            {teamMembers.map((m, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 rounded-2xl border transition-all hover:translate-x-1 ${
                isDarkMode ? 'border-slate-800 hover:bg-slate-800/60' : 'border-slate-100 hover:bg-slate-50'
              }`}>
                <div className="flex items-center gap-3">
                  <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-extrabold text-xs">{m.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{m.task}</div>
                  </div>
                </div>
                <span className={`px-3 py-1 text-[10px] font-black rounded-full uppercase ${m.statusColor}`}>
                  {m.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Project List - 4 Cols */}
        <div className={`lg:col-span-4 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
          isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black">Project</h3>
            <button className={`px-4 py-1.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 cursor-pointer ${
              isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
            }`}>
              + New
            </button>
          </div>

          <div className="space-y-4">
            {projectList.map((p, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-2 rounded-2xl transition-all hover:translate-x-1 ${
                isDarkMode ? 'hover:bg-slate-800/60' : 'hover:bg-slate-50'
              }`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${p.color}`}>
                  <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-extrabold text-xs truncate">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Deadlines - 3 Cols */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
          isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <h3 className="text-lg font-black mb-4">Hard Deadlines</h3>
          <div className="p-4 rounded-2xl bg-red-500/10 border-l-8 border-red-500 transition-all hover:translate-x-2 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">URGENT • 2H</span>
              <span className="material-symbols-outlined text-red-500 text-[18px]">priority_high</span>
            </div>
            <h4 className="font-black text-xs">Legal Contract - DE/EN</h4>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Reviewer: Alex Sterling</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-500/10 border-l-8 border-blue-500 transition-all hover:translate-x-2 cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">HIGH • TODAY</span>
            </div>
            <h4 className="font-black text-xs">Financial Report - ES/EN</h4>
            <p className="text-[10px] text-slate-400 font-medium mt-1">Validation pending</p>
          </div>
        </div>
      </div>

      {/* Donezo Reminders + Time Tracker Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Reminders - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-[#111726] border-[#1e2638] text-white' : 'bg-white border-slate-200/80 text-slate-900'
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

          <button className="w-full max-w-sm mt-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            Start Meeting
          </button>
        </div>

        {/* Time Tracker - 5 Cols */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white p-8 rounded-[2.5rem] shadow-2xl float-shadow float-hover smooth-card flex flex-col justify-between relative overflow-hidden">
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
              className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-105 transition-transform shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isTimerRunning ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              onClick={() => setSeconds(0)}
              className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">stop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
