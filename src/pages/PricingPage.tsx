import React, { useState } from 'react';

interface PricingPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter Tier',
      price: billingCycle === 'annual' ? '$79' : '$99',
      period: '/ month',
      description: 'Ideal for small businesses needing fast AI-assisted translations.',
      features: ['Up to 50,000 words/mo', '5 Active Language Pairs', 'Standard BLEU 75% Score', '24h SLA Turnaround'],
      tags: ['AI-POWERED', 'BASIC SLA', '5 PAIRS'],
      highlighted: false,
      buttonText: 'Select Starter',
    },
    {
      name: 'Professional Agency',
      price: billingCycle === 'annual' ? '$239' : '$299',
      period: '/ month',
      description: 'Full sworn translator review panel + ISO-9001 compliance audit.',
      features: ['Up to 250,000 words/mo', '12 Active Language Pairs', 'Sworn Human Reviewer Audit', 'Dedicated Account Manager', 'API & CMS Integrations'],
      tags: ['ISO-9001', 'SWORN PANEL', 'MOST POPULAR'],
      highlighted: true,
      buttonText: 'Get Started Now',
    },
    {
      name: 'Enterprise Custom',
      price: 'Custom',
      period: '',
      description: 'Custom neural MT model training with dedicated infrastructure.',
      features: ['Unlimited Word Count', 'All 48 Language Pairs', 'Dedicated Neural MT Models', 'Instant API Webhooks', 'Custom SLA Guarantee'],
      tags: ['DEDICATED CLUSTER', 'ALL 48 PAIRS', 'CUSTOM SLA'],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <div className="space-y-8 animate-page-enter">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">TRANSPARENT SUBSCRIPTIONS &amp; CERTIFIED TIERS</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Enterprise Pricing Plans
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Choose the localization tier tailored to your volume and ISO certification needs.
          </p>
        </div>

        {/* Annual / Monthly Toggle Pill Buttons */}
        <div className={`flex p-1.5 rounded-full border shadow-sm ${isDarkMode ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-slate-200'}`}>
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2.5 text-xs font-black rounded-full transition-all cursor-pointer ${
              billingCycle === 'monthly'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2.5 text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              billingCycle === 'annual'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Annual Billing</span>
            <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between relative transition-all duration-300 ${
              plan.highlighted
                ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl border-blue-500 z-10'
                : isDarkMode
                ? 'bg-[#18181b] border-2 border-[#27272a] text-white shadow-sm hover:shadow-lg'
                : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-4 right-8 bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </span>
            )}

            <div>
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className={`text-xs font-medium mt-1 mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                <span className={`text-xs font-bold ${plan.highlighted ? 'text-blue-200' : 'text-slate-400'}`}>{plan.period}</span>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {plan.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                      plan.highlighted
                        ? 'bg-white/20 text-white'
                        : isDarkMode
                        ? 'bg-[#27272a] text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6 text-xs font-semibold">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[18px] ${plan.highlighted ? 'text-amber-300' : 'text-blue-600'}`}>
                      check_circle
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onItemClick && onItemClick({ title: `${plan.name} Plan`, subtitle: `Price: ${plan.price}${plan.period} • Billing: ${billingCycle}`, icon: 'payments', badge: 'SUBSCRIPTION PLAN' })}
              className={`w-full mt-8 py-4 font-black text-xs rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                plan.highlighted
                  ? 'bg-white text-blue-700 hover:bg-blue-50'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
