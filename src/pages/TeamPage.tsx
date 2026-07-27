import React, { useState } from 'react';

interface TeamPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">NETWORK MANAGEMENT</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Global Linguists
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage your distributed team of <span className="font-black text-blue-500">142 certified specialists</span> across 48 time zones.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover ${
            isDarkMode ? 'bg-[#182032] border-[#253046] text-white hover:bg-slate-800' : 'bg-blue-50/80 border-blue-200 text-blue-700 hover:bg-blue-100'
          }`}>
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filter Network
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Invite Expert
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Widgets - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Active Capacity Widget */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
            isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black leading-tight">Active<br />Capacity</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">monitoring</span>
              </div>
            </div>

            {/* 75% Donut Gauge */}
            <div className="relative w-44 h-44 mx-auto my-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="88" cy="88" r="70" fill="transparent" stroke={isDarkMode ? '#222d42' : '#e2e8f0'} strokeWidth="16" />
                <circle
                  cx="88"
                  cy="88"
                  r="70"
                  fill="transparent"
                  stroke="#004ac6"
                  strokeWidth="16"
                  strokeDasharray="440"
                  strokeDashoffset="110"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black tracking-tight">75%</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">UTILIZATION</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Active Projects</span>
                <span className="font-black text-slate-900 dark:text-white text-sm">84</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Available Today</span>
                <span className="font-black text-blue-600 dark:text-blue-400 text-sm">12 Experts</span>
              </div>
            </div>
          </div>

          {/* Expert Availability Bars */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-black">Expert Availability</h3>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Legal &amp; Compliance</span>
                  <span className="text-blue-600 font-black">92%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Medical / Life Sciences</span>
                  <span className="text-blue-600 font-black">45%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[45%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Technical / Engineering</span>
                  <span className="text-blue-600 font-black">68%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Member Profile Cards Grid - 8 Cols */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member) => {
              const isHovered = hoveredCard === member.id;
              return (
                <div
                  key={member.id}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onItemClick && onItemClick({ title: member.name, subtitle: `${member.role} • ${member.availability}`, icon: member.badge, badge: 'LINGUIST PROFILE' })}
                  className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer ${
                    isHovered
                      ? 'shadow-2xl border-blue-500 z-10'
                      : isDarkMode
                      ? 'bg-[#131927] border-[#1f283d] text-white shadow-sm'
                      : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
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
                    <h4 className="text-xl font-black tracking-tight">{member.name}</h4>
                    <p className="text-xs text-blue-500 font-extrabold mt-0.5 mb-3">{member.role}</p>

                    {/* Skill Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                            isDarkMode ? 'bg-[#1e2638] text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability & Quick Action Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">AVAILABILITY</span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-black rounded-full border backdrop-blur-md uppercase tracking-wider mt-1 ${
                        member.availability.includes('Available')
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          member.availability.includes('Available') ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                        }`}></span>
                        <span>{member.availability}</span>
                      </span>
                    </div>
                    <button className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-2xs">
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
              <h4 className="text-lg font-black">Add Member</h4>
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
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-black uppercase text-slate-500 tracking-widest">
          <span>NETWORK LIVE STREAM</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            SYNC_READY: 142_NODES_UP
          </span>
        </div>
        <div className="space-y-1 font-semibold text-[11px] text-blue-400">
          <div>&gt; [09:42:15] <span className="text-white font-bold">E. Rodriguez</span> COMPLETED "Case_Study_72_Revision"</div>
          <div>&gt; [09:44:02] <span className="text-white font-bold">M. Chen</span> ACCEPTED "Technical_Manual_V4"</div>
          <div>&gt; [09:45:55] SYSTEM ASSIGNING "Medical_Report_Alpha" TO <span className="text-white font-bold">A. Okafor</span></div>
          <div>&gt; [09:48:10] NETWORK_UPDATE: LATENCY 14ms | REGION: APAC_EU</div>
        </div>
      </div>
    </div>
  );
};
