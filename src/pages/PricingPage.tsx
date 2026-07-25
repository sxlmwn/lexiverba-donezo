import React, { useState } from 'react';

export const PricingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can I switch plans anytime?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time without any hidden penalties.',
    },
    {
      q: 'What languages are supported?',
      a: 'Over 50+ language pairs including English, German, Spanish, French, Arabic, Mandarin Chinese, Japanese, and Portuguese.',
    },
    {
      q: 'Is my data secure?',
      a: 'Absolutely. We enforce end-to-end TLS encryption, ISO-9001 quality audits, and strict SOC2 Type II compliance controls.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-blue-600 uppercase tracking-[0.25em]">Pricing Plans</span>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Scale Your Communication</h1>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          From boutique startups to global enterprises, we provide the linguistic precision and infrastructure needed to speak every language fluently.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Starter Plan */}
        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Starter</span>
            <div className="mt-4 mb-6">
              <span className="text-5xl font-black text-slate-900">$99</span>
              <span className="text-slate-400 font-bold text-sm">/mo</span>
            </div>
            <p className="text-xs text-slate-500 font-medium mb-6">Essential translation tools for growing teams.</p>
            <ul className="space-y-3 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                Up to 5,000 words/mo
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                3 Core Languages
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                Standard AI Engine
              </li>
            </ul>
          </div>
          {/* Pill Button */}
          <button className="w-full mt-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black rounded-full text-xs transition-all shadow-2xs hover:scale-105">
            Downgrade to Starter
          </button>
        </div>

        {/* Professional Plan (Highlighted) */}
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 p-8 rounded-[2.5rem] text-white shadow-2xl flex flex-col justify-between relative transform lg:-translate-y-2 hover:scale-[1.02] transition-transform">
          <div className="absolute -top-3 right-8 bg-white text-blue-800 text-[10px] font-black px-4 py-1 rounded-full uppercase shadow-md">
            CURRENT PLAN
          </div>
          <div>
            <span className="text-xs font-extrabold text-blue-200 uppercase tracking-widest">MOST POPULAR</span>
            <h3 className="text-2xl font-black text-white mt-1">Professional</h3>
            <div className="mt-4 mb-6">
              <span className="text-5xl font-black text-white">$299</span>
              <span className="text-blue-200 font-bold text-sm">/mo</span>
            </div>
            <p className="text-xs text-blue-100 font-medium mb-6">Full-service localization for high-velocity global brands.</p>
            <ul className="space-y-3.5 text-xs font-semibold text-white">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
                Unlimited word count
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
                40+ Languages
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-white text-[18px]">check_circle</span>
                Premium Neural Engine
              </li>
            </ul>
          </div>
          {/* Pill Button */}
          <button className="w-full mt-8 py-4 bg-white hover:bg-blue-50 text-blue-800 font-black rounded-full text-xs transition-all shadow-lg hover:scale-105">
            Manage Subscription
          </button>
        </div>

        {/* Custom Plan */}
        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Enterprise</span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">Custom</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-black text-slate-900">Custom Quote</span>
            </div>
            <p className="text-xs text-slate-500 font-medium mb-6">Bespoke solutions for global governance and scale.</p>
            <ul className="space-y-3 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                Dedicated Account Manager
              </li>
            </ul>
          </div>
          {/* Pill Button */}
          <button className="w-full mt-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-full text-xs transition-all shadow-md hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};
