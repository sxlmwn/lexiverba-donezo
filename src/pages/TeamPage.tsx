import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';

interface TeamPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onItemClick }) => {
  const { isDarkMode } = useTheme();
  const [hoveredMemberCard, setHoveredMemberCard] = useState<number | string | null>(null);

  // Gauge animation state (Count up from 0 to 75% on mount)
  const [gaugePercent, setGaugePercent] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const target = 75;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setGaugePercent(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const totalArcLength = 251.32;
  const completedDashOffset = totalArcLength - (totalArcLength * (gaugePercent / 100));
  const standbyDashOffset = totalArcLength - (totalArcLength * ((gaugePercent / 75) * 0.55));

  const teamMembers = [
    {
      id: 0,
      name: 'Elena Rodriguez',
      role: 'Legal Reviewer (ES/EN)',
      tags: ['JD DEGREE', 'ISO-17100'],
      availability: 'Available Now',
      availabilityColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      actionIcon: 'mail',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
      badge: 'verified',
    },
    {
      id: 1,
      name: 'Marcus Chen',
      role: 'Technical Specialist (ZH/EN)',
      tags: ['ENGINEER', 'PATENT BAR'],
      availability: 'In Session (2h)',
      availabilityColor: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30',
      actionIcon: 'calendar_today',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      badge: 'verified_user',
    },
    {
      id: 2,
      name: 'Amina Okafor',
      role: 'Medical Translator (FR/EN)',
      tags: ['SENIOR LEAD', 'MD CANDIDATE'],
      availability: 'Available Now',
      availabilityColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      actionIcon: 'chat',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      badge: 'workspace_premium',
    },
    {
      id: 3,
      name: 'Johan Muller',
      role: 'Fintech Specialist (DE/EN)',
      tags: ['CFA LEVEL II'],
      availability: 'Offline',
      availabilityColor: 'text-slate-400 bg-slate-100 dark:bg-slate-800',
      actionIcon: 'more_vert',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
      badge: 'verified',
    },
    {
      id: 4,
      name: 'Yuki Tanaka',
      role: 'Marketing Transcreation (JA/EN)',
      tags: ['COPYWRITER', 'SEO CERT'],
      availability: 'Available Now',
      availabilityColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      actionIcon: 'mail',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
      badge: 'verified',
    },
  ];

  return (
    <div className="space-y-8 animate-page-enter">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPatternTeam" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#3f3f46' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-[0.25em]">ISO-17100 LINGUIST NETWORK &amp; EXPERTS</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Team Collaboration
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage your distributed team of <span className="font-semibold text-blue-500">142 certified specialists</span> across 48 time zones.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-semibold text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter Network
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Invite Expert
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Widgets - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Active Capacity Widget */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold leading-tight">Active<br />Capacity</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">monitoring</span>
              </div>
            </div>

            {/* Standardized Arc Gauge */}
            <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4 cursor-pointer group">
              <svg className="w-64 h-40" viewBox="0 0 200 110">
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#hatchedPatternTeam)"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="28"
                  strokeDasharray="251.32"
                  strokeDashoffset={standbyDashOffset}
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
                <span className={`text-4xl font-semibold tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {gaugePercent}%
                </span>
                <span className="text-[10px] font-semibold text-zinc-400 mt-1">Utilization</span>
              </div>
            </div>

            <div className={`flex justify-between items-center text-xs font-semibold border-t pt-4 mt-2 ${
              isDarkMode ? 'border-zinc-800 text-zinc-300' : 'border-slate-100 text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#004ac6]"></span>
                <span>Allocated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#38bdf8]"></span>
                <span>Standby</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 border-2 border-dashed border-zinc-400 rounded-sm bg-slate-100 dark:bg-zinc-800"></span>
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Expert Availability Bars */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-semibold">Expert Availability</h3>

            <div className="space-y-4 pt-2">
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={92} showLabel label="Legal & Compliance" barColor="bg-blue-600" />
              </div>
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={45} showLabel label="Medical / Life Sciences" barColor="bg-blue-600" />
              </div>
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={78} showLabel label="Financial & Banking" barColor="bg-blue-600" />
              </div>
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={60} showLabel label="Patent & IP Law" barColor="bg-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Member Profile Cards Grid - 8 Cols */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => {
              const isHovered = hoveredMemberCard === member.id;
              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredMemberCard(member.id)}
                  onMouseLeave={() => setHoveredMemberCard(null)}
                  onClick={() => onItemClick && onItemClick({ title: member.name, subtitle: `${member.role} • ${member.availability}`, icon: member.badge, badge: 'LINGUIST PROFILE' })}
                  className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                    isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
                  }`}
                >
                  <div>
                    {/* Avatar & Verified Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-14 h-14 rounded-2xl object-cover ring-4 ring-blue-500/20"
                        />
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                      </div>
                      <span className="material-symbols-outlined text-blue-600 text-[22px]">
                        {member.badge}
                      </span>
                    </div>

                    {/* Member Info */}
                    <h4 className="text-xl font-semibold tracking-tight">{member.name}</h4>
                    <p className="text-xs text-blue-500 font-semibold mt-0.5 mb-3">{member.role}</p>

                    {/* Tag Metadata */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability & Quick Action Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest block mb-1">AVAILABILITY</span>
                      <Badge status={member.availability.includes('Available') ? 'Available' : member.availability === 'Offline' ? 'Offline' : 'Pending'}>
                        {member.availability}
                      </Badge>
                    </div>
                    <button className="w-10 h-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer">
                      <span className="material-symbols-outlined text-[20px]">{member.actionIcon}</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Add Member Card */}
            <div className={`p-6 rounded-[2.5rem] border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all float-hover smooth-card ${
              isDarkMode ? 'border-slate-700 bg-[#131927]/60 text-slate-300 hover:border-blue-500' : 'border-slate-300 bg-slate-50/60 text-slate-700 hover:border-blue-600'
            }`}>
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-lg shadow-blue-600/30">
                <span className="material-symbols-outlined text-[28px]">add</span>
              </div>
              <h4 className="text-lg font-semibold">Add Member</h4>
              <p className="text-xs text-slate-400 font-medium max-w-[180px] mt-1">
                Invite a new linguist to join your agency team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Network Live Stream Console */}
      <div className={`p-6 rounded-[2.5rem] border-2 float-shadow smooth-card font-mono text-xs space-y-2 transition-colors ${
        isDarkMode ? 'bg-[#080b12] border-slate-800 text-slate-300' : 'bg-slate-900 border-slate-900 text-slate-200'
      }`}>
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-semibold uppercase text-slate-500 tracking-widest">
          <span>NETWORK LIVE STREAM</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            SYNC_READY: 142_NODES_UP
          </span>
        </div>
        <div className="space-y-1 font-medium text-[11px] text-blue-400">
          <div>&gt; [09:42:15] <span className="text-white font-semibold">E. Rodriguez</span> COMPLETED "Case_Study_72_Revision"</div>
          <div>&gt; [09:44:02] <span className="text-white font-semibold">M. Chen</span> ACCEPTED "Technical_Manual_V4"</div>
          <div>&gt; [09:45:55] SYSTEM ASSIGNING "Medical_Report_Alpha" TO <span className="text-white font-semibold">A. Okafor</span></div>
          <div>&gt; [09:48:10] NETWORK_UPDATE: LATENCY 14ms | REGION: APAC_EU</div>
        </div>
      </div>
    </div>
  );
};
