import React, { useState } from 'react';

export const DocumentsPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number>(0);

  const statCards = [
    { id: 0, title: 'ACTIVE DOCUMENTS', value: '12', subtext: 'In processing pipeline', icon: 'description' },
    { id: 1, title: 'TRANSLATION MEMORY', value: '84.2%', subtext: 'Fuzzy match efficiency', icon: 'auto_stories' },
    { id: 2, title: 'GLOSSARIES SYNCD', value: '150+', subtext: 'Real-time terms active', icon: 'folder_zip' },
  ];

  const documents = [
    {
      title: 'Q4 Financial Audit Report (DE-EN)',
      type: 'PDF Document',
      size: '4.2 MB',
      updated: '10 mins ago',
      status: 'In Progress',
      progress: 82,
    },
    {
      title: 'iOS App Strings Localization (ES-LATAM)',
      type: 'JSON Glossary',
      size: '1.8 MB',
      updated: '1 hour ago',
      status: 'Completed',
      progress: 100,
    },
    {
      title: 'Medical Devices Compliance Manual (ZH-CN)',
      type: 'DOCX Manual',
      size: '12.4 MB',
      updated: 'Yesterday',
      status: 'In Review',
      progress: 45,
    },
    {
      title: 'Legal Patent Application #84920 (FR-EN)',
      type: 'PDF Document',
      size: '8.1 MB',
      updated: '3 days ago',
      status: 'Completed',
      progress: 100,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Linguistic Vault & Assets</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Manage translation memory files, source assets, and glossaries.
          </p>
        </div>

        {/* Pill Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-full shadow-lg shadow-blue-700/30 transition-all hover:scale-105 active:scale-95">
          <span className="text-base font-bold">+</span>
          Upload Document
        </button>
      </div>

      {/* Interactive Expand Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {statCards.map((c) => {
          const isExpanded = hoveredCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer transition-all duration-500 relative overflow-hidden flex items-center justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl scale-[1.02] border-2 border-blue-500'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div>
                <div className={`text-3xl font-black ${isExpanded ? 'text-white' : 'text-slate-900'}`}>{c.value}</div>
                <div className={`text-xs font-black uppercase tracking-wider mt-1 ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </div>
              </div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isExpanded ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'
              }`}>
                <span className="material-symbols-outlined text-[28px]">{c.icon}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm p-8 space-y-4">
        <h3 className="text-xl font-black text-slate-900 mb-4">Active Documents</h3>
        <div className="space-y-4">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">description</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">{doc.title}</h4>
                  <span className="text-xs text-slate-400 font-medium">
                    {doc.type} • {doc.size} • Updated {doc.updated}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-32 hidden md:block">
                  <div className="flex justify-between text-[10px] font-bold mb-1 text-slate-500">
                    <span>{doc.status}</span>
                    <span>{doc.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        doc.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${doc.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Pill Button */}
                <button className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors shadow-2xs">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
