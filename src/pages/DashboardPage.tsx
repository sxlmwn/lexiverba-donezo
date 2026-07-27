import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme';
import { MetricCard } from '../components/ui/MetricCard';
import { Badge } from '../components/ui/Badge';

interface DashboardPageProps {
  isDarkMode?: boolean;
  onAddProjectClick?: () => void;
  onImportDataClick?: () => void;
  onStartMeetingClick?: () => void;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onAddProjectClick,
  onImportDataClick,
  onStartMeetingClick,
  onItemClick,
}) => {
  const { isDarkMode } = useTheme();
  const [seconds, setSeconds] = useState(5048); // 01:24:08
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [chartType, setChartType] = useState<'bars' | 'line'>('bars');
  const [timeframe, setTimeframe] = useState<'D' | 'W' | 'M'>('W');

  // Interactive Animated Gauge State (Count up from 0 to 41% on mount)
  const [gaugePercent, setGaugePercent] = useState<number>(0);
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

  useEffect(() => {
    triggerGaugeAnimation();
  }, []);

  const formatTime = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const statCards = [
    { id: 0, title: 'TOTAL PROJECTS', value: '24', badge: '5 ▲ Increased', icon: 'folder_open' },
    { id: 1, title: 'ENDED PROJECTS', value: '10', badge: '6 ▲ Increased', icon: 'task_alt' },
    { id: 2, title: 'RUNNING PROJECTS', value: '12', badge: '2 ▲ Increased', icon: 'play_arrow' },
    { id: 3, title: 'PENDING PROJECT', value: '2', badge: 'On Discuss', icon: 'pending_actions' },
  ];

  const projectList = [
    { name: 'Develop API Endpoints', date: 'Due date: Nov 26, 2026', icon: 'code', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Onboarding Flow', date: 'Due date: Nov 28, 2026', icon: 'account_tree', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Build Dashboard', date: 'Due date: Nov 30, 2026', icon: 'dashboard', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Optimize Page Load', date: 'Due date: Dec 5, 2026', icon: 'speed', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
    { name: 'Cross-Browser Testing', date: 'Due date: Dec 6, 2026', icon: 'devices', color: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' },
  ];

  const teamMembers = [
    {
      name: 'Alexandra Deff',
      task: 'Working on Github Project Repository',
      status: 'Completed',
      dotColor: 'bg-emerald-500',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'Edwin Adenike',
      task: 'Working on Integrate User Authentication System',
      status: 'In Progress',
      dotColor: 'bg-amber-500',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'Isaac Oluwatemilorun',
      task: 'Working on Develop Search and Filter Functionality',
      status: 'Pending',
      dotColor: 'bg-rose-500',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    },
    {
      name: 'David Oshodi',
      task: 'Working on Responsive Layout for Homepage',
      status: 'In Progress',
      dotColor: 'bg-amber-500',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    },
  ];

  const totalArcLength = 251.32;
  const completedDashOffset = totalArcLength - (totalArcLength * (gaugePercent / 100));
  const inProgressDashOffset = totalArcLength - (totalArcLength * ((gaugePercent / 41) * 0.70));

  return (
    <div className="space-y-8">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPattern" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#3f3f46' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className={`text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Dashboard
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>

        {/* Pill Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onAddProjectClick}
            className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer"
          >
            <span className="text-base font-semibold">+</span>
            Add Project
          </button>
          <button 
            onClick={onImportDataClick}
            className={`px-6 py-3.5 border font-extrabold text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
              isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
            }`}
          >
            Import Data
          </button>
        </div>
      </div>

      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {statCards.map((card) => (
          <MetricCard
            key={card.id}
            title={card.title}
            value={card.value}
            badge={card.badge}
            icon={card.icon}
            onClick={() => onItemClick && onItemClick({ title: card.title, subtitle: `${card.value} • ${card.badge}`, icon: card.icon, badge: card.badge })}
          />
        ))}
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Project Analytics Card - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 float-shadow smooth-card flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold">Project Analytics</h3>
              <p className="text-xs text-zinc-400 font-semibold">Wordcount throughput &amp; active project volume</p>
            </div>

            <div className="flex items-center gap-3">
              <div className={`flex p-1 rounded-full border ${isDarkMode ? 'bg-[#27272a] border-zinc-700' : 'bg-slate-100 border-slate-200'}`}>
                <button
                  onClick={() => setChartType('bars')}
                  className={`px-3 py-1 text-xs font-extrabold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
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
                  className={`px-3 py-1 text-xs font-extrabold rounded-full transition-all flex items-center gap-1 cursor-pointer ${
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
                    className={`px-3 py-1 text-xs font-extrabold rounded-full transition-colors cursor-pointer ${
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
            <div className="h-60 pt-8 flex items-end justify-between px-2 gap-3 relative">
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
                    <div className="absolute -top-7 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-md">
                      {bar.badge}
                    </div>
                  )}
                  <div
                    className={`w-full rounded-full transition-all duration-300 hover:scale-105 ${
                      bar.type === 'dark'
                        ? isDarkMode
                          ? 'bg-zinc-100 text-slate-900'
                          : 'bg-blue-900'
                        : bar.type === 'solid'
                        ? 'bg-blue-600'
                        : bar.type === 'active'
                        ? 'bg-blue-500'
                        : isDarkMode
                        ? 'bg-zinc-800 border-2 border-dashed border-zinc-700'
                        : 'bg-blue-50 border-2 border-dashed border-blue-200'
                    }`}
                    style={{ height: bar.height }}
                  ></div>
                  <span className="text-xs font-semibold text-zinc-400 mt-3">{bar.day}</span>
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
                  <circle cx="150" cy="120" r="6" fill={isDarkMode ? '#09090b' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="450" cy="50" r="6" fill={isDarkMode ? '#09090b' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                  <circle cx="800" cy="40" r="6" fill={isDarkMode ? '#09090b' : 'white'} stroke="currentColor" strokeWidth="4"></circle>
                </svg>
              </div>
              <div className="flex justify-between mt-3 text-xs font-extrabold text-zinc-400 px-2">
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

        {/* Project Progress Arc Gauge - 5 Cols */}
        <div
          onMouseEnter={triggerGaugeAnimation}
          className={`lg:col-span-5 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-extrabold">Project Progress</h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">LIVE SLA</span>
          </div>

          <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4 cursor-pointer group">
            <svg className="w-64 h-40" viewBox="0 0 200 110">
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="url(#hatchedPattern)"
                strokeWidth="28"
                strokeLinecap="round"
              />

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

            <div className="absolute bottom-2 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
              <span className={`text-5xl font-extrabold tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {gaugePercent}%
              </span>
              <span className="text-xs font-semibold text-zinc-400 mt-1">Project Ended</span>
            </div>
          </div>

          <div className={`flex justify-between items-center text-xs font-semibold border-t pt-4 mt-2 ${
            isDarkMode ? 'border-zinc-800 text-zinc-300' : 'border-slate-100 text-slate-600'
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
              <span className="w-3.5 h-3.5 border-2 border-dashed border-zinc-400 rounded-sm bg-slate-100 dark:bg-zinc-800"></span>
              <span>Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Team Collaboration - 5 Cols */}
        <div className={`lg:col-span-5 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
          isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-extrabold">Team Collaboration</h3>
            <button className={`px-4 py-1.5 border font-extrabold text-xs rounded-full shadow-2xs transition-all hover:scale-105 cursor-pointer ${
              isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-slate-300 text-slate-800'
            }`}>
              + Add Member
            </button>
          </div>

          <div className="space-y-4">
            {teamMembers.map((m, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 rounded-2xl border transition-all hover:translate-x-1 ${
                isDarkMode ? 'border-zinc-800 hover:bg-zinc-800/60' : 'border-slate-100 hover:bg-slate-50'
              }`}>
                <div className="flex items-center gap-3">
                  <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-xs">{m.name}</div>
                    <div className="text-[10px] text-zinc-400 font-medium">{m.task}</div>
                  </div>
                </div>
                <Badge status={m.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Project List - 4 Cols */}
        <div className={`lg:col-span-4 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
          isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-extrabold">Project</h3>
            <button className={`px-4 py-1.5 border font-extrabold text-xs rounded-full shadow-2xs transition-all hover:scale-105 cursor-pointer ${
              isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-slate-300 text-slate-800'
            }`}>
              + New
            </button>
          </div>

          <div className="space-y-4">
            {projectList.map((p, idx) => (
              <div 
                key={idx}
                onClick={() => onItemClick && onItemClick({ title: p.name, subtitle: p.date, icon: p.icon, badge: 'PROJECT ITEM' })}
                className={`flex items-center gap-3 p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                  isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${p.color}`}>
                  <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-xs truncate">{p.name}</div>
                  <div className="text-[10px] text-zinc-400 font-medium">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Deadlines - 3 Cols */}
        <div className={`lg:col-span-3 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
          isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <h3 className="text-lg font-extrabold mb-4">Hard Deadlines</h3>
          <div 
            onClick={() => onItemClick && onItemClick({ title: 'Legal Contract - DE/EN', subtitle: 'URGENT • Due in 2 hours. Reviewer: Alex Sterling', icon: 'priority_high', badge: 'URGENT 2H' })}
            className="p-4 rounded-2xl bg-red-500/10 border-l-8 border-red-500 transition-all hover:translate-x-2 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest">URGENT • 2H</span>
              <span className="material-symbols-outlined text-red-500 text-[18px]">priority_high</span>
            </div>
            <h4 className="font-extrabold text-xs">Legal Contract - DE/EN</h4>
            <p className="text-[10px] text-zinc-400 font-medium mt-1">Reviewer: Alex Sterling</p>
          </div>

          <div 
            onClick={() => onItemClick && onItemClick({ title: 'Financial Report - ES/EN', subtitle: 'HIGH • Due Today. Validation Pending', icon: 'schedule', badge: 'HIGH TODAY' })}
            className="p-4 rounded-2xl bg-blue-500/10 border-l-8 border-blue-500 transition-all hover:translate-x-2 cursor-pointer"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-extrabold text-blue-500 uppercase tracking-widest">HIGH • TODAY</span>
            </div>
            <h4 className="font-extrabold text-xs">Financial Report - ES/EN</h4>
            <p className="text-[10px] text-zinc-400 font-medium mt-1">Validation pending</p>
          </div>
        </div>
      </div>

      {/* Donezo Reminders + Time Tracker Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Reminders - 7 Cols */}
        <div className={`lg:col-span-7 p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
          isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <div>
            <h3 className="text-lg font-extrabold mb-4">Reminders</h3>
            <div className="mt-2">
              <h4 className="text-2xl font-extrabold leading-snug">
                Meeting with Arc Company
              </h4>
              <p className="text-xs text-zinc-400 font-medium mt-2">
                Time : 02.00 pm - 04.00 pm
              </p>
            </div>
          </div>

          <button 
            onClick={onStartMeetingClick}
            className="w-full max-w-sm mt-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            Start Meeting
          </button>
        </div>

        {/* Time Tracker - 5 Cols */}
        <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white p-8 rounded-[2.5rem] shadow-2xl float-shadow float-hover smooth-card flex flex-col justify-between relative overflow-hidden border border-zinc-800">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div>
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Time Tracker</h3>
            <div className="text-4xl font-extrabold font-mono tracking-wider mt-4">
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
