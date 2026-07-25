import React from 'react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDarkMode: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab, isDarkMode }) => {
  const menuNav = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'documents', label: 'Documents', icon: 'description', badge: '12+' },
    { id: 'team', label: 'Team', icon: 'group' },
    { id: 'insights', label: 'Analytics', icon: 'monitoring' },
    { id: 'invoices', label: 'Invoices', icon: 'receipt_long' },
    { id: 'pricing', label: 'Pricing', icon: 'payments', badge: 'NEW' },
  ];

  const generalNav = [
    { id: 'settings', label: 'Settings', icon: 'settings' },
    { id: 'help', label: 'Help', icon: 'help' },
    { id: 'login', label: 'Logout', icon: 'logout' },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-72 border-r-2 z-50 flex flex-col justify-between p-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f172a] border-slate-800 text-slate-100' : 'bg-white border-slate-200/80 text-slate-900'
      }`}
    >
      <div>
        {/* Donezo-style Top Logo: Leaf/Circle Logo + Brand Name */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-600/30">
            <span className="material-symbols-outlined text-[24px]">translate</span>
          </div>
          <span className={`font-black text-2xl tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            LexiVerba
          </span>
        </div>

        {/* Sidebar Navigation */}
        <div className="space-y-6">
          {/* MENU Group */}
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-3 mb-3">
              MENU
            </div>
            <div className="space-y-1">
              {menuNav.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentTab(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-bold transition-all text-xs relative group ${
                      isActive
                        ? isDarkMode
                          ? 'bg-slate-800/80 text-white font-extrabold'
                          : 'bg-slate-100 text-slate-900 font-extrabold'
                        : isDarkMode
                        ? 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {/* Donezo Active Left Pill Indicator Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-r-full"></span>
                    )}

                    <div className="flex items-center gap-3.5 pl-1">
                      <span className={`material-symbols-outlined text-[20px] transition-colors ${
                        isActive
                          ? 'text-blue-600'
                          : isDarkMode
                          ? 'text-slate-500 group-hover:text-slate-300'
                          : 'text-slate-400 group-hover:text-slate-700'
                      }`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-slate-900 text-white dark:bg-blue-600'
                          : 'bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* GENERAL Group */}
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-3 mb-3">
              GENERAL
            </div>
            <div className="space-y-1">
              {generalNav.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentTab(item.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl font-bold transition-all text-xs relative group ${
                      isActive
                        ? isDarkMode
                          ? 'bg-slate-800/80 text-white font-extrabold'
                          : 'bg-slate-100 text-slate-900 font-extrabold'
                        : isDarkMode
                        ? 'text-slate-400 hover:bg-slate-800/40 hover:text-white'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-r-full"></span>
                    )}

                    <div className="flex items-center gap-3.5 pl-1">
                      <span className={`material-symbols-outlined text-[20px] transition-colors ${
                        isActive
                          ? 'text-blue-600'
                          : isDarkMode
                          ? 'text-slate-500 group-hover:text-slate-300'
                          : 'text-slate-400 group-hover:text-slate-700'
                      }`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Donezo Reference Dark Mobile App Card (Exact Bottom Card Aesthetic) */}
      <div className="bg-slate-900 p-5 rounded-[2rem] text-white shadow-xl space-y-3 relative overflow-hidden group border border-slate-800">
        <div className="absolute -right-6 -bottom-6 opacity-10 text-white pointer-events-none group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[100px]">smartphone</span>
        </div>

        <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
          <span className="material-symbols-outlined text-[18px]">smartphone</span>
        </div>

        <div>
          <h4 className="font-extrabold text-sm leading-snug">Download our Mobile App</h4>
          <p className="text-[10px] text-slate-400 font-medium mt-0.5">Get easy in another way</p>
        </div>

        <button className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs font-black rounded-xl transition-all shadow-md hover:scale-105 active:scale-95">
          Download
        </button>
      </div>
    </aside>
  );
};
