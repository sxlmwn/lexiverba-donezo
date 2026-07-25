import React from 'react';

interface InsightsPageProps {
  isDarkMode?: boolean;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ isDarkMode = false }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className={`text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Analytics &amp; Quality Insights
        </h1>
        <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          BLEU score accuracy analytics, NMT throughput, and language pair metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card ${
          isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">AVERAGE BLEU SCORE</span>
          <div className="text-5xl font-black text-blue-600">89.4%</div>
          <p className="text-xs text-slate-400 font-semibold mt-2">+2.1% improvement vs baseline</p>
        </div>

        <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card ${
          isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">NEURAL ENGINE THROUGHPUT</span>
          <div className="text-5xl font-black text-emerald-600">42.5K</div>
          <p className="text-xs text-slate-400 font-semibold mt-2">Words processed per hour</p>
        </div>

        <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card ${
          isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
        }`}>
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">SLA ACCURACY RATE</span>
          <div className="text-5xl font-black text-indigo-600">99.8%</div>
          <p className="text-xs text-slate-400 font-semibold mt-2">Zero deadline breaches</p>
        </div>
      </div>
    </div>
  );
};
