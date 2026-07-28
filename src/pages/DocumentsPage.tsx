import React, { useState } from 'react';
import { useTheme } from '../theme';
import { MetricCard } from '../components/ui/MetricCard';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';

interface DocumentsPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ onItemClick }) => {
  const { isDarkMode } = useTheme();
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
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      icon: 'picture_as_pdf',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
      icon: 'description',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      icon: 'table_chart',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
      icon: 'code',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      icon: 'picture_as_pdf',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
      badge: 'verified',
    },
    {
      id: 5,
      name: 'AI_Ethics_Whitepaper_ZH_EN.pdf',
      category: 'Tech & Manuals',
      size: '4.2 MB',
      date: 'Updated Oct 18',
      status: 'In Review',
      statusColor: 'bg-amber-500/10 text-amber-500 border border-amber-500/20',
      badge: 'sync',
      tags: ['NEURAL DRAFT', 'GLOSSARY MATCH'],
      reviewer: 'Sophia Al-Mansoor',
      icon: 'terminal',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
    },
  ];

  const categories = ['All', 'Legal & Sworn', 'Financial & Banking', 'Medical & Life Sci', 'Tech & Manuals'];

  const filteredDocs = selectedCategory === 'All'
    ? documents
    : documents.filter((d) => d.category === selectedCategory);

  return (
    <div className="space-y-8 animate-page-enter">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPatternDocs" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#3f3f46' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Header section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-[0.25em]">ISO-17100 CERTIFIED VAULT</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Documents &amp; Assets
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage verified Translation Memories (TMs), glossaries, and certified documents.
          </p>
        </div>

        {/* Actions & View Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className={`flex p-1 rounded-full border ${isDarkMode ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-slate-200'}`}>
            <button
              onClick={() => setViewType('grid')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'grid'
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewType('table')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'table'
                  ? 'bg-blue-600 text-white shadow-md'
                  : isDarkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">table_rows</span>
              <span>Table</span>
            </button>
          </div>

          <button className={`flex items-center gap-2 px-6 py-3.5 border font-semibold text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
            Batch Import
          </button>
        </div>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((c) => (
          <MetricCard
            key={c.id}
            title={c.title}
            value={c.value}
            badge={c.badge}
            icon={c.icon}
            onClick={() => onItemClick && onItemClick({ title: c.title, subtitle: `${c.value} • ${c.badge}`, icon: c.icon, badge: c.badge })}
          />
        ))}
      </div>

      {/* Main Content Grid: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Filter & Asset Analytics Panel - 4 Cols */}
        <div className="lg:col-span-4 space-y-6">
          {/* Category Filter Card */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Asset Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-xs font-semibold transition-all hover:translate-x-1 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : isDarkMode
                      ? 'bg-[#27272a]/60 text-slate-300 hover:bg-[#27272a]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                    selectedCategory === cat
                      ? 'bg-white/20 text-white'
                      : isDarkMode
                      ? 'bg-zinc-800 text-slate-400'
                      : 'bg-white text-slate-500'
                  }`}>
                    {cat === 'All' ? documents.length : documents.filter((d) => d.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Storage Capacity Gauge Card */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Vault Storage</h3>
              <span className="text-xs font-semibold text-blue-500 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">78% CAPACITY</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={85} showLabel label="Legal & Sworn TMs" barColor="bg-blue-600" />
              </div>
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={52} showLabel label="Medical Glossaries" barColor="bg-blue-600" />
              </div>
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <ProgressBar progress={74} showLabel label="Fintech & Audits" barColor="bg-blue-600" />
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
                      isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
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
                      <h4 className="text-lg font-semibold tracking-tight leading-snug">{doc.name}</h4>
                      <p className="text-xs text-blue-500 font-semibold mt-1 mb-3">{doc.category}</p>

                      {/* Tag Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {doc.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metadata & Quick Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <div>
                        <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
                          {doc.size} • {doc.date}
                        </div>
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                          Rev: {doc.reviewer}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge status={doc.status} />
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
              <h3 className="text-xl font-semibold mb-6">Linguistic Assets Repository</h3>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className={`border-b-2 text-xs font-semibold uppercase tracking-wider ${
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
                <tbody className={`divide-y font-medium ${
                  isDarkMode ? 'divide-zinc-800 text-slate-300' : 'divide-slate-100 text-slate-700'
                }`}>
                  {filteredDocs.map((doc, idx) => (
                    <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-zinc-800/40' : 'hover:bg-slate-50'}`}>
                      <td className="py-4 font-semibold text-blue-500">{doc.name}</td>
                      <td className="py-4 text-slate-400">{doc.category}</td>
                      <td className="py-4">{doc.size}</td>
                      <td className="py-4 text-slate-400">{doc.date}</td>
                      <td className="py-4">
                        <Badge status={doc.status} />
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
