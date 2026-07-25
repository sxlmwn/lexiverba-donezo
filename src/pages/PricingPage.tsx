import React from 'react';

interface PricingPageProps {
  isDarkMode?: boolean;
}

export const PricingPage: React.FC<PricingPageProps> = ({ isDarkMode = false }) => {
  const plans = [
    {
      name: 'Starter Tier',
      price: '$99',
      period: '/ month',
      description: 'Ideal for small businesses needing fast AI-assisted translations.',
      features: ['Up to 50,000 words/mo', '5 Active Language Pairs', 'Standard BLEU 75% Score', '24h SLA Turnaround'],
      highlighted: false,
      buttonText: 'Select Starter',
    },
    {
      name: 'Professional Agency',
      price: '$299',
      period: '/ month',
      description: 'Full sworn translator review panel + ISO-9001 compliance audit.',
      features: ['Up to 250,000 words/mo', '12 Active Language Pairs', 'Sworn Human Reviewer Audit', 'Dedicated Account Manager', 'API & CMS Integrations'],
      highlighted: true,
      buttonText: 'Get Started Now',
    },
    {
      name: 'Enterprise Custom',
      price: 'Custom',
      period: '',
      description: 'Custom neural MT model training with dedicated infrastructure.',
      features: ['Unlimited Word Count', 'All 48 Language Pairs', 'Dedicated Neural MT Models', 'Instant API Webhooks', 'Custom SLA Guarantee'],
      highlighted: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className={`text-4xl lg:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Transparent Enterprise Pricing
        </h1>
        <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Choose the localization tier tailored to your volume and certification needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between relative transition-all duration-300 ${
              plan.highlighted
                ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl scale-[1.03] border-blue-500 z-10'
                : isDarkMode
                ? 'bg-[#131927] border-[#1f283d] text-white shadow-sm'
                : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-4 right-8 bg-amber-400 text-slate-900 text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-md">
                MOST POPULAR
              </span>
            )}

            <div>
              <h3 className="text-xl font-black">{plan.name}</h3>
              <p className={`text-xs font-medium mt-1 mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-400'}`}>
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 my-6">
                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                <span className={`text-xs font-bold ${plan.highlighted ? 'text-blue-200' : 'text-slate-400'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-6 text-xs font-semibold">
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
