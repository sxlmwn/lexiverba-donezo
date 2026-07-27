import React, { useState } from 'react';

interface DocumentsPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const stats = [
    { id: 0, title: 'TOTAL ASSETS', value: '1,420', badge: '+8% ▲ Increased', icon: 'folder_open', color: 'text-blue-500' },
    { id: 1, title: 'SWORN CERTIFIED', value: '380', badge: 'ISO-9001 Certified', icon: 'verified', color: 'text-emerald-500' },
    { id: 2, title: 'STORAGE USED', value: '42.8 GB', badge: '78% of 50GB', icon: 'cloud', color: 'text-amber-500' },
    { id: 3, title: 'ACTIVE TMS & GLOSSARIES', value: '124', badge: 'Auto Syncing', icon: 'sync', color: 'text-purple-500' },
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
      iconColor: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
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
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">ASSETS VAULT &amp; ISO CERTIFICATION</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Documents &amp; Asset Repository
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage your ISO-17100 certified repository of <span className="font-black text-blue-500">1,420 translation memories</span> and sworn proofs.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          {/* View Mode Toggle */}
          <div className={`flex p-1.5 rounded-full border shadow-sm ${isDarkMode ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-slate-200'}`}>
            <button
              onClick={() => setViewType('grid')}
              className={`px-4 py-2 text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'grid'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewType('table')}
              className={`px-4 py-2 text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'table'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">table_rows</span>
              <span>Table</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
            Upload Asset
          </button>
        </div>
      </div>

      {/* Top 4 Stats Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((s) => {
          const isExpanded = hoveredCard === s.id;
          return (
            <div
              key={s.id}
              onMouseEnter={() => setHoveredCard(s.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#18181b] border-2 border-[#27272a] text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start relative z-10">
                <span className={`text-xs font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {s.title}
                </span>
                <span className={`text-[10px] px-3 py-1 rounded-full font-black ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {s.badge}
                </span>
              </div>
              <div className="mt-6 relative z-10">
                <div className="text-4xl font-black tracking-tight">{s.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {['All', 'Legal', 'Medical', 'Fintech', 'Software', 'Patent'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-2xs ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDarkMode
                ? 'bg-[#18181b] border border-[#27272a] text-slate-400 hover:text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat} Assets
          </button>
        ))}
      </div>

      {/* Main Grid Layout (Matching Team Page) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Side Capacity & Analytics Widgets - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Storage & Vault Capacity Donut Widget */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black leading-tight">Vault<br />Storage Capacity</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">cloud</span>
              </div>
            </div>

            {/* 78% Donut Arc Gauge */}
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
                  strokeDashoffset="96"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black tracking-tight">78%</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">42.8GB / 50GB</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">AES-256 Encrypted</span>
                <span className="font-black text-emerald-500 text-sm">Active</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Sworn Vault</span>
                <span className="font-black text-blue-600 dark:text-blue-400 text-sm">ISO-9001</span>
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
                  <span className="text-emerald-500 font-black">62%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full w-[62%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Fintech &amp; Audits</span>
                  <span className="text-amber-500 font-black">74%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full w-[74%]"></div>
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
                const isHovered = hoveredCard === doc.id;
                return (
                  <div
                    key={doc.id}
                    onMouseEnter={() => setHoveredCard(doc.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => onItemClick && onItemClick({ title: doc.name, subtitle: `${doc.category} • ${doc.size} • Status: ${doc.status}`, icon: doc.icon, badge: doc.status })}
                    className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer animate-card-pop ${
                      isHovered
                        ? 'shadow-2xl border-blue-500 z-10'
                        : isDarkMode
                        ? 'bg-[#18181b] border-[#27272a] text-white shadow-sm'
                        : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
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
                        <span className={`px-3 py-1 text-[10px] font-black rounded-full uppercase ${doc.statusColor}`}>
                          {doc.status}
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
