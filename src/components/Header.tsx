import React from 'react';

interface HeaderProps {
  onLoginClick?: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick, isDarkMode, toggleDarkMode }) => {
  return (
    <header
      className={`fixed top-0 left-72 right-0 h-20 backdrop-blur-xl border-b-2 z-40 px-10 flex items-center justify-between transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f172a]/80 border-slate-800 text-slate-100' : 'bg-white/80 border-slate-200/50 text-slate-900'
      }`}
    >
      {/* Search Input */}
      <div className={`flex items-center rounded-2xl px-4 py-2.5 w-[420px] border transition-all ${
        isDarkMode ? 'bg-slate-800/80 border-slate-700/60 focus-within:border-blue-500' : 'bg-slate-100/80 border-slate-200/60 focus-within:border-blue-600'
      }`}>
        <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
        <input
          type="text"
          placeholder="Search projects, glossaries, or translation memory..."
          className={`bg-transparent border-none text-xs w-full ml-2 outline-none font-bold placeholder-slate-400 ${
            isDarkMode ? 'text-white' : 'text-slate-800'
          }`}
        />
        <kbd className={`px-2 py-0.5 border text-[10px] font-black rounded-md shadow-2xs ${
          isDarkMode ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-white border-slate-200 text-slate-400'
        }`}>
          ⌘F
        </kbd>
      </div>

      {/* Header Right Actions */}
      <div className="flex items-center gap-4">
        {/* Live Engine Status Badge */}
        <div className={`hidden xl:flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-[11px] font-extrabold ${
          isDarkMode ? 'bg-blue-900/40 border-blue-700/60 text-blue-400' : 'bg-blue-50 border-blue-200/80 text-blue-700'
        }`}>
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>12 PAIRS ONLINE</span>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95 ${
            isDarkMode
              ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
              : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Notifications Button */}
        <button className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors shadow-2xs relative ${
          isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50'
        }`}>
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div
          onClick={onLoginClick}
          className="flex items-center gap-3 pl-4 cursor-pointer hover:opacity-90 transition-opacity"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
            alt="Alex Sterling"
            className="w-10 h-10 rounded-full object-cover shadow-sm border border-slate-200"
          />
          <div className="text-left hidden lg:block">
            <div className={`text-xs font-black leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Alex Sterling
            </div>
            <div className="text-[10px] font-bold text-blue-500">Master Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
};
