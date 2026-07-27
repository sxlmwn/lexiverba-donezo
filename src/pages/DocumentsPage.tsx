import React, { useState } from 'react';

interface DocumentsPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredStatCard, setHoveredStatCard] = useState<number | null>(null);
  const [hoveredDocCard, setHoveredDocCard] = useState<number | string | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const stats = [
    { id: 0, title: 'TOTAL ASSETS', value: '1,420', badge: '+8% ▲ Increased', icon: 'folder_open', color: 'text-blue-500' },
    { id: 1, title: 'SWORN CERTIFIED', value: '380', badge: 'ISO-9001 Certified', icon: 'verified', color: 'text-emerald-500' },
    { id: 2, title: 'STORAGE USED', value: '42.8 GB', badge: '78% of 50GB', icon: 'cloud', color: 'text-amber-500' },
    { id: 3, title: 'ACTIVE TMS & GLOSSARIES', value: '124', badge: 'Auto Syncing', icon: 'sync', color: 'text-blue-500' },
  ];

  const documents = [
    {
      id: 0,
      name: 'Legal_Contract_DE_EN_Final.pdf',
      category: 'Legal & Sworn',
      tags: ['ISO-9001', 'SWORN STAMP', '256-BIT AES'],
      size: '4.2 MB',
      date: 'Jul 24, 2026',
      reviewer: 'Elena Rodriguez (JD)',
      status: 'Certified',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'picture_as_pdf',
      iconColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30',
      badge: 'verified',
    },
    {
      id: 1,
      name: 'Medical_Report_ES_EN_v2.docx',
      category: 'Medical & Bio',
      tags: ['HIPAA CLEAN', 'MD VERIFIED', 'DE-IDENTIFIED'],
      size: '1.8 MB',
      date: 'Jul 22, 2026',
      reviewer: 'Amina Okafor (MD)',
      status: 'In Review',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 badge-glow-amber',
      icon: 'description',
      iconColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30',
      badge: 'workspace_premium',
    },
    {
      id: 2,
      name: 'Financial_Statement_Q2.xlsx',
      category: 'Fintech & Audit',
      tags: ['CFA CERT', 'SEC AUDIT', 'XLSX VAULT'],
      size: '8.5 MB',
      date: 'Jul 19, 2026',
      reviewer: 'Johan Muller (CFA)',
      status: 'Certified',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'table_chart',
      iconColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      badge: 'verified_user',
    },
    {
      id: 3,
      name: 'Software_UI_Strings_ZH.json',
      category: 'Software Loc',
      tags: ['I18N JSON', 'REACT HOOKS', 'AUTO LINT'],
      size: '640 KB',
      date: 'Jul 15, 2026',
      reviewer: 'Marcus Chen',
      status: 'Processing',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 badge-shadow',
      icon: 'code',
      iconColor: 'text-purple-600 bg-purple-50 dark:bg-purple-900/30',
      badge: 'verified',
    },
    {
      id: 4,
      name: 'Marketing_Brand_Guide_FR.pdf',
      category: 'Transcreation',
      tags: ['BRAND KIT', 'TRANSCREATION', 'ADOBE CC'],
      size: '14.2 MB',
      date: 'Jul 12, 2026',
      reviewer: 'Yuki Tanaka',
      status: 'Certified',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'picture_as_pdf',
      iconColor: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
      badge: 'verified',
    },
    {
      id: 5,
      name: 'Patent_Claim_Robotics_JA.pdf',
      category: 'Patent & IP',
      tags: ['PATENT BAR', 'ISO-17100', 'PRIORITY CLAIM'],
      size: '6.1 MB',
      date: 'Jul 10, 2026',
      reviewer: 'Elena Rodriguez (JD)',
      status: 'In Review',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 badge-glow-amber',
      icon: 'gavel',
      iconColor: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30',
      badge: 'workspace_premium',
    },
  ];

  const filteredDocs = documents.filter(doc => 
    selectedCategory === 'All' || doc.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-page-enter">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPatternDoc" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#3f3f46' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">ISO-9001 SWORN REPOSITORY</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Document Vault &amp; Assets
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage bilingual legal contracts, certified clinical reports, and patent translation portfolios.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-black text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
            Batch Import
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            Upload Document
          </button>
        </div>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((c) => {
          const isExpanded = hoveredStatCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredStatCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#18181b] border-2 border-[#27272a] text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </span>
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shadow-sm ${
                  isExpanded ? 'bg-white/10 text-white' : 'bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                }`}>
                  <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
                </div>
              </div>

              <div>
                <div className="text-3xl font-black tracking-tight mb-1">{c.value}</div>
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    isExpanded
                      ? 'bg-white/20 text-white'
                      : isDarkMode
                      ? 'bg-blue-900/40 text-blue-300 border border-blue-800/40'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {c.badge}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Side Storage & Category Allocations - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Storage & Vault Capacity Donut Widget */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black leading-tight">Vault<br />Storage Capacity</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">cloud</span>
              </div>
            </div>

            {/* Standardized Arc Gauge */}
            <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4 cursor-pointer group">
              <svg className="w-64 h-40" viewBox="0 0 200 110">
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#hatchedPatternDoc)"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="28"
                  strokeDasharray="251.32"
                  strokeDashoffset="100.52"
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#004ac6"
                  strokeWidth="28"
                  strokeDasharray="251.32"
                  strokeDashoffset="55.29"
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              <div className="absolute bottom-2 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                <span className={`text-4xl font-black tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  78%
                </span>
                <span className="text-[10px] font-extrabold text-zinc-400 mt-1">42.8 GB / 50 GB</span>
              </div>
            </div>

            <div className={`flex justify-between items-center text-xs font-bold border-t pt-4 mt-2 ${
              isDarkMode ? 'border-zinc-800 text-zinc-300' : 'border-slate-100 text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#004ac6]"></span>
                <span>Used Vault</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#38bdf8]"></span>
                <span>Active Cache</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 border-2 border-dashed border-zinc-400 rounded-sm bg-slate-100 dark:bg-zinc-800"></span>
                <span>Free Space</span>
              </div>
            </div>
          </div>

          {/* Category Allocation Progress Bars */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-black">Asset Categories</h3>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Legal &amp; Contracts</span>
                  <span className="text-blue-600 font-black">88%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Medical / Life Sciences</span>
                  <span className="text-blue-600 font-black">62%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[62%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Fintech &amp; Audits</span>
                  <span className="text-blue-600 font-black">74%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[74%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards Grid or Table View - 8 Cols */}
        <div className="lg:col-span-8">
          {viewType === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDocs.map((doc) => {
                const isHovered = hoveredDocCard === doc.id;
                return (
                  <div
                    key={doc.id}
                    onMouseEnter={() => setHoveredDocCard(doc.id)}
                    onMouseLeave={() => setHoveredDocCard(null)}
                    onClick={() => onItemClick && onItemClick({ title: doc.name, subtitle: `${doc.category} • ${doc.size} • Status: ${doc.status}`, icon: doc.icon, badge: doc.status })}
                    className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer animate-card-pop ${
                      isDarkMode ? 'bg-[#18181b] text-white' : 'bg-white text-slate-900'
                    } ${
                      isHovered
                        ? 'border-blue-500 shadow-2xl z-10'
                        : isDarkMode
                        ? 'border-[#27272a] shadow-sm'
                        : 'border-slate-200/80 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Document Icon & Verified Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${doc.iconColor}`}>
                          <span className="material-symbols-outlined text-[28px]">{doc.icon}</span>
                        </div>
                        <span className="material-symbols-outlined text-blue-600 text-[24px]">
                          {doc.badge}
                        </span>
                      </div>

                      {/* Document Info */}
                      <h4 className="text-lg font-black tracking-tight leading-snug">{doc.name}</h4>
                      <p className="text-xs text-blue-500 font-extrabold mt-1 mb-3">{doc.category}</p>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {doc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                              isDarkMode ? 'bg-[#27272a] text-slate-300' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata & Quick Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <div>
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                          {doc.size} • {doc.date}
                        </div>
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-0.5">
                          Rev: {doc.reviewer}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/60 text-slate-700 dark:text-slate-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${doc.status === 'Certified' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                          <span>{doc.status}</span>
                        </span>
                        <button className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-2xs cursor-pointer">
                          <span className="material-symbols-outlined text-[20px]">download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={`rounded-[2.5rem] border-2 p-8 float-shadow smooth-card transition-colors ${
              isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
            }`}>
              <h3 className="text-xl font-black mb-6">Linguistic Assets Repository</h3>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className={`border-b-2 text-xs font-black uppercase tracking-wider ${
                    isDarkMode ? 'border-zinc-800 text-slate-400' : 'border-slate-100 text-slate-400'
                  }`}>
                    <th className="pb-4">Document Name</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">File Size</th>
                    <th className="pb-4">Upload Date</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className={`divide-y font-semibold ${
                  isDarkMode ? 'divide-zinc-800 text-slate-300' : 'divide-slate-100 text-slate-700'
                }`}>
                  {filteredDocs.map((doc, idx) => (
                    <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-zinc-800/40' : 'hover:bg-slate-50'}`}>
                      <td className="py-4 font-black text-blue-500">{doc.name}</td>
                      <td className="py-4 text-slate-400">{doc.category}</td>
                      <td className="py-4">{doc.size}</td>
                      <td className="py-4 text-slate-400">{doc.date}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 text-xs font-black rounded-full uppercase ${doc.statusColor}`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className={`p-2 rounded-full transition-colors cursor-pointer ${
                          isDarkMode ? 'hover:bg-zinc-800 text-slate-300' : 'hover:bg-slate-100 text-slate-500'
                        }`}>
                          <span className="material-symbols-outlined text-[20px]">download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
