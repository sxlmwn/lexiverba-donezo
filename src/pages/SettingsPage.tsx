import React from 'react';

interface SettingsPageProps {
  isDarkMode?: boolean;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ isDarkMode = false }) => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className={`text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Agency System Controls
        </h1>
        <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          Manage API keys, Neural MT model parameters, and team permissions.
        </p>
      </div>

      <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-6 ${
        isDarkMode ? 'bg-[#131927] border-[#1f283d] text-white' : 'bg-white border-slate-200/80 text-slate-900'
      }`}>
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-extrabold text-base">Neural MT Auto-Correction</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Automatically apply glossary terms before human review</p>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600 focus:ring-blue-600 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="font-extrabold text-base">Sworn Audit Notification</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Alert lead auditor when BLEU score drops below 75%</p>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-blue-600 focus:ring-blue-600 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base">API Key Access</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Production key: lx_prod_9921487291847</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-md transition-all hover:scale-105 cursor-pointer">
            Regenerate Key
          </button>
        </div>
      </div>
    </div>
  );
};
