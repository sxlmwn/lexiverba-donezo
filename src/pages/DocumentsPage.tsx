import React, { useState } from 'react';

interface DocumentsPageProps {
  isDarkMode?: boolean;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({ isDarkMode = false }) => {
  const [hoveredCard, setHoveredCard] = useState<number>(0);

  const stats = [
    { id: 0, title: 'TOTAL ASSETS', value: '1,420', badge: '+8% this month', icon: 'folder_open' },
    { id: 1, title: 'SWORN CERTIFIED', value: '380', badge: 'ISO-9001 Vault', icon: 'verified' },
    { id: 2, title: 'STORAGE USED', value: '42.8 GB', badge: '78% of 50GB', icon: 'cloud' },
  ];

  const documents = [
    { name: 'Legal_Contract_DE_EN_Final.pdf', category: 'Legal & Sworn', size: '4.2 MB', date: 'Jul 24, 2026', status: 'Certified', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' },
    { name: 'Medical_Report_ES_EN_v2.docx', category: 'Medical', size: '1.8 MB', date: 'Jul 22, 2026', status: 'In Review', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' },
    { name: 'Financial_Statement_Q2.xlsx', category: 'Finance', size: '8.5 MB', date: 'Jul 19, 2026', status: 'Certified', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' },
    { name: 'Software_UI_Strings_ZH.json', category: 'Localization', size: '640 KB', date: 'Jul 15, 2026', status: 'Processing', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className={`text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Documents &amp; Assets Vault
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            ISO-certified repository for translation memories, glossaries, and certified proofs.
          </p>
        </div>

        <button className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover">
          <span className="text-base font-bold">+</span>
          Upload Asset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((c) => {
          const isExpanded = hoveredCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-2xl scale-[1.02] border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#131927] border-2 border-[#1f283d] text-white shadow-sm'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-xs font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </span>
                <span className={`text-[10px] px-3 py-1 rounded-full font-black ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {c.badge}
                </span>
              </div>
              <div className="mt-6">
                <div className="text-4xl font-black tracking-tight">{c.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`rounded-[2.5rem] border-2 p-8 float-shadow smooth-card transition-colors ${
        isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
      }`}>
        <h3 className="text-xl font-black mb-6">Linguistic Assets Repository</h3>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className={`border-b-2 text-xs font-black uppercase tracking-wider ${
              isDarkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-400'
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
            isDarkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-100 text-slate-700'
          }`}>
            {documents.map((doc, idx) => (
              <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'}`}>
                <td className="py-4 font-black text-blue-500">{doc.name}</td>
                <td className="py-4 text-slate-400">{doc.category}</td>
                <td className="py-4">{doc.size}</td>
                <td className="py-4 text-slate-400">{doc.date}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 text-xs font-black rounded-full uppercase ${doc.color}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className={`p-2 rounded-full transition-colors ${
                    isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-500'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
