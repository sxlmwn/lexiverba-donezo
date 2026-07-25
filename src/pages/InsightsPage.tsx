import React from 'react';

export const InsightsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full"></div>
            <span className="text-xs font-black text-blue-600 uppercase tracking-[0.25em]">Analytics & Intelligence</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Localization Insights</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Quality assurance metrics, BLEU scores, and linguistic throughput.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl shadow-sm">
            Last 30 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm">
          <span className="text-xs font-black text-slate-400 uppercase">Average BLEU Score</span>
          <div className="text-4xl font-black text-slate-900 mt-2">68.4 / 70</div>
          <p className="text-xs text-emerald-600 font-bold mt-2">+3.2 vs Industry standard</p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm">
          <span className="text-xs font-black text-slate-400 uppercase">Translation Memory Reuse</span>
          <div className="text-4xl font-black text-blue-600 mt-2">84.2%</div>
          <p className="text-xs text-slate-500 font-medium mt-2">Cost savings: ~$14,200/mo</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-[2.5rem] text-white shadow-xl">
          <span className="text-xs font-black text-blue-200 uppercase">Neural MT Accuracy</span>
          <div className="text-4xl font-black text-white mt-2">99.1%</div>
          <p className="text-xs text-blue-100 font-medium mt-2">Zero critical error flags</p>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm p-8">
        <h3 className="text-xl font-extrabold text-slate-900 mb-4">Linguistic Pair Performance</h3>
        <div className="space-y-4">
          {[
            { pair: 'English (US) → German (DE)', volume: '420,000 words', accuracy: '99.4%', status: 'Optimal' },
            { pair: 'English (US) → Spanish (LATAM)', volume: '380,000 words', accuracy: '98.9%', status: 'Optimal' },
            { pair: 'English (US) → Mandarin (ZH)', volume: '240,000 words', accuracy: '97.8%', status: 'High Quality' },
            { pair: 'French (FR) → English (UK)', volume: '160,000 words', accuracy: '99.1%', status: 'Optimal' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div>
                <div className="font-extrabold text-sm text-slate-900">{item.pair}</div>
                <div className="text-xs text-slate-400 font-medium">{item.volume} processed</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-black text-blue-600">{item.accuracy}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
