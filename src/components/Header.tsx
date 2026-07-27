import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  onLoginClick?: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
  isCollapsed?: boolean;
  onSelectTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  isDarkMode,
  toggleDarkMode,
  searchQuery = '',
  setSearchQuery,
  isCollapsed = false,
  onSelectTab,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [unreadCount, setUnreadCount] = useState<number>(3);
  const [selectedSearchCategory, setSelectedSearchCategory] = useState<string>('All');

  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global Omnipresent Search Database covering the ENTIRE LexiVerba Website
  const globalDatabase = [
    // Documents
    { title: 'Legal Contract DE/EN Final.pdf', type: 'Document', category: 'Documents', tab: 'documents', icon: 'picture_as_pdf', color: 'text-blue-500', desc: '14.2 MB • Sworn Certified by Elena Rodriguez' },
    { title: 'Medical Report ES/EN v2.docx', type: 'Document', category: 'Documents', tab: 'documents', icon: 'description', color: 'text-blue-500', desc: '8.4 MB • In Review by Amina Okafor' },
    { title: 'Annual Financial Statement 2026.xlsx', type: 'Document', category: 'Documents', tab: 'documents', icon: 'table_chart', color: 'text-emerald-500', desc: '4.8 MB • Certified Audit Pass' },
    { title: 'Patent Application ZH/EN Draft.pdf', type: 'Document', category: 'Documents', tab: 'documents', icon: 'gavel', color: 'text-amber-500', desc: '18.9 MB • Reviewed by Marcus Chen' },
    { title: 'EU Privacy Compliance Protocol.docx', type: 'Document', category: 'Documents', tab: 'documents', icon: 'policy', color: 'text-blue-500', desc: '2.1 MB • ISO-27001 Security Audit' },

    // Team Members & Linguists
    { title: 'Elena Rodriguez', type: 'Team Member', category: 'Team', tab: 'team', icon: 'person', color: 'text-blue-500', desc: 'Legal Reviewer (ES/EN) • JD Degree • ISO-17100' },
    { title: 'Marcus Chen', type: 'Team Member', category: 'Team', tab: 'team', icon: 'person_outline', color: 'text-blue-500', desc: 'Technical Specialist (ZH/EN) • Patent Bar' },
    { title: 'Amina Okafor', type: 'Team Member', category: 'Team', tab: 'team', icon: 'workspace_premium', color: 'text-emerald-500', desc: 'Medical Translator (FR/EN) • MD Candidate' },
    { title: 'Alexandra Deff', type: 'Team Member', category: 'Team', tab: 'team', icon: 'engineering', color: 'text-blue-500', desc: 'GitHub Repository Lead Engineer' },
    { title: 'Edwin Adenike', type: 'Team Member', category: 'Team', tab: 'team', icon: 'shield_person', color: 'text-blue-500', desc: 'User Authentication System Lead' },

    // Invoices & Billing
    { title: 'INV-2026-001 — Acme Global Corp', type: 'Invoice', category: 'Invoices', tab: 'invoices', icon: 'receipt_long', color: 'text-emerald-500', desc: '$4,850.00 • Status: Paid via Stripe' },
    { title: 'INV-2026-002 — Helios Pharma Ltd', type: 'Invoice', category: 'Invoices', tab: 'invoices', icon: 'payments', color: 'text-amber-500', desc: '$9,200.00 • Status: Pending Settlement' },
    { title: 'INV-2026-003 — Quantum Dynamics', type: 'Invoice', category: 'Invoices', tab: 'invoices', icon: 'account_balance', color: 'text-emerald-500', desc: '$2,340.00 • Status: Paid SWIFT Wire' },
    { title: 'INV-2026-004 — Vanguard Financial', type: 'Invoice', category: 'Invoices', tab: 'invoices', icon: 'error_outline', color: 'text-rose-500', desc: '$14,500.00 • Status: Overdue NET-30' },

    // Projects
    { title: 'Develop API Endpoints', type: 'Project', category: 'Projects', tab: 'dashboard', icon: 'code', color: 'text-blue-500', desc: 'Due: Nov 26, 2026 • Backend System Sync' },
    { title: 'Onboarding Flow UI/UX', type: 'Project', category: 'Projects', tab: 'dashboard', icon: 'account_tree', color: 'text-blue-500', desc: 'Due: Nov 28, 2026 • Agency Portal' },
    { title: 'Build Agency Dashboard', type: 'Project', category: 'Projects', tab: 'dashboard', icon: 'dashboard', color: 'text-blue-500', desc: 'Due: Nov 30, 2026 • Analytics Core' },
    { title: 'Optimize Page Load Speed', type: 'Project', category: 'Projects', tab: 'dashboard', icon: 'speed', color: 'text-blue-500', desc: 'Due: Dec 05, 2026 • Performance Benchmarks' },

    // Analytics & Quality Insights
    { title: 'Neural Model BLEU Accuracy (89.4%)', type: 'Analytics', category: 'Analytics', tab: 'insights', icon: 'monitoring', color: 'text-emerald-500', desc: 'Precision Threshold Pass • ISO-17100' },
    { title: 'Wordcount Throughput (42.5K WPH)', type: 'Analytics', category: 'Analytics', tab: 'insights', icon: 'bolt', color: 'text-blue-500', desc: 'Peak NMT Engine Speed • Latency 35ms' },
    { title: 'German to English Pair (DE/EN)', type: 'Analytics', category: 'Analytics', tab: 'insights', icon: 'translate', color: 'text-blue-500', desc: '98.4% Domain Precision • Sworn Active' },
    { title: 'Spanish to English Pair (ES/EN)', type: 'Analytics', category: 'Analytics', tab: 'insights', icon: 'translate', color: 'text-blue-500', desc: '96.8% Domain Precision • Certified' },

    // Pricing & Subscriptions
    { title: 'Pro Team Sworn Agency Plan', type: 'Pricing', category: 'Pricing', tab: 'pricing', icon: 'card_membership', color: 'text-blue-500', desc: '$149/mo • 100K Words • Dedicated Reviewer' },
    { title: 'Enterprise Custom AI Plan', type: 'Pricing', category: 'Pricing', tab: 'pricing', icon: 'diamond', color: 'text-blue-500', desc: '$399/mo • Unlimited NMT • SLA Guarantee' },

    // Settings & Security
    { title: 'Neural MT Auto-Correction Glossary', type: 'Settings', category: 'Settings', tab: 'settings', icon: 'auto_fix_high', color: 'text-blue-500', desc: 'Glossary Priority Pre-processing Enabled' },
    { title: 'Production API Access Keys', type: 'Settings', category: 'Settings', tab: 'settings', icon: 'key', color: 'text-blue-500', desc: 'Key: lx_prod_9921487291847 • Active' },
    { title: 'Sworn Audit Alert Threshold (75%)', type: 'Settings', category: 'Settings', tab: 'settings', icon: 'verified_user', color: 'text-emerald-500', desc: 'BLEU Drop Notification Engine Active' },
  ];

  const searchCategories = ['All', 'Documents', 'Team', 'Invoices', 'Projects', 'Analytics', 'Settings'];

  const filteredSearch = globalDatabase.filter(item => {
    const matchesCategory = selectedSearchCategory === 'All' || item.category === selectedSearchCategory;
    const matchesQuery = searchQuery.trim() === ''
      ? true
      : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const displayedResults = searchQuery.trim() === '' && selectedSearchCategory === 'All'
    ? globalDatabase.slice(0, 6)
    : filteredSearch;

  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Sworn Certificate Granted', desc: 'Legal Contract DE/EN certified by Elena Rodriguez', time: '10m ago', icon: 'verified', read: false },
    { id: 2, title: 'New Translation Request', desc: 'Arc Company submitted 12,000 words (FR/EN)', time: '1h ago', icon: 'translate', read: false },
    { id: 3, title: 'System Benchmark Complete', desc: 'PostgreSQL index latency down to 35ms', time: '3h ago', icon: 'speed', read: false },
    { id: 4, title: 'Invoice INV-2026-001 Paid', desc: '$4,850.00 realized via Stripe', time: 'Yesterday', icon: 'payments', read: true },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <header
      className={`fixed top-0 right-0 h-20 backdrop-blur-xl border-b-2 z-40 px-10 flex items-center justify-between transition-all duration-300 ease-in-out ${
        isCollapsed ? 'left-20' : 'left-72'
      } ${
        isDarkMode ? 'bg-[#121215]/90 border-[#27272a] text-slate-100' : 'bg-white/80 border-slate-200/50 text-slate-900'
      }`}
    >
      {/* Vast Universal Search Input Container */}
      <div ref={searchRef} className="relative">
        <div
          className={`flex items-center rounded-2xl px-4 py-2.5 w-[500px] border transition-all ${
            isSearchFocused
              ? isDarkMode
                ? 'bg-[#18181b] border-blue-500 shadow-lg shadow-blue-500/10'
                : 'bg-white border-blue-600 shadow-lg shadow-blue-600/10'
              : isDarkMode
              ? 'bg-[#18181b] border-[#27272a]'
              : 'bg-slate-100/80 border-slate-200/60'
          }`}
        >
          <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
          <input
            type="text"
            value={searchQuery}
            onFocus={() => setIsSearchFocused(true)}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            placeholder="Search anything across documents, team, invoices, projects, or settings..."
            className={`bg-transparent border-none text-xs w-full ml-2 outline-none font-semibold placeholder-slate-400 ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery && setSearchQuery('')}
              className="text-slate-400 hover:text-slate-200 text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          ) : (
            <kbd
              className={`px-2 py-0.5 border text-[10px] font-extrabold rounded-md shadow-2xs ${
                isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-300' : 'bg-white border-slate-200 text-slate-400'
              }`}
            >
              ⌘F
            </kbd>
          )}
        </div>

        {/* Global Omnipresent Instant Search Dropdown */}
        {isSearchFocused && (
          <div
            className={`absolute left-0 top-14 w-[560px] rounded-3xl border-2 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200 ${
              isDarkMode ? 'bg-[#121215] border-[#27272a] text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-2.5 border-b border-slate-100 dark:border-zinc-800">
              {searchCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSearchCategory(cat)}
                  className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                    selectedSearchCategory === cat
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : isDarkMode
                      ? 'bg-[#18181b] text-slate-400 hover:text-white border border-zinc-800'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-2 py-1 flex justify-between items-center">
              <span>{searchQuery ? `SEARCH RESULTS FOR "${searchQuery}"` : 'RECOMMENDED ASSETS'}</span>
              <span>{displayedResults.length} MATCHES</span>
            </div>

            <div className="space-y-1.5 mt-2 max-h-96 overflow-y-auto pr-1">
              {displayedResults.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-400 font-medium">
                  No matching assets, team members, or documents found for "{searchQuery}".
                </div>
              ) : (
                displayedResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (onSelectTab) onSelectTab(item.tab);
                      setIsSearchFocused(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all cursor-pointer text-left border ${
                      isDarkMode ? 'border-zinc-800/60 hover:bg-[#18181b] hover:border-blue-500/50' : 'border-slate-100 hover:bg-slate-50 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 ${item.color}`}>
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-xs truncate">{item.title}</div>
                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-500 uppercase tracking-wider shrink-0">
                            {item.type}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 text-[18px] shrink-0 ml-2">arrow_forward</span>
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Header Right Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer ${
            isDarkMode
              ? 'bg-[#18181b] border-[#27272a] text-amber-400 hover:bg-zinc-800'
              : 'bg-white border-slate-200/80 text-slate-700 hover:bg-slate-50'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Notifications Dropdown Container */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all shadow-2xs relative cursor-pointer hover:scale-105 active:scale-95 ${
              isNotificationsOpen
                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30'
                : isDarkMode
                ? 'bg-[#18181b] border-[#27272a] text-slate-300 hover:bg-zinc-800'
                : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50'
            }`}
            title="Notifications"
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full ring-2 ring-white dark:ring-[#121215] animate-ping"></span>
            )}
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-600 rounded-full ring-2 ring-white dark:ring-[#121215]"></span>
            )}
          </button>

          {/* Notifications Dropdown Panel */}
          {isNotificationsOpen && (
            <div
              className={`absolute right-0 top-14 w-96 rounded-3xl border-2 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200 ${
                isDarkMode ? 'bg-[#121215] border-[#27272a] text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm">Notifications</h4>
                  {unreadCount > 0 && (
                    <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {unreadCount} NEW
                    </span>
                  )}
                </div>
                <button
                  onClick={markAllRead}
                  className="text-[10px] font-semibold text-blue-500 hover:underline cursor-pointer"
                >
                  Mark all read
                </button>
              </div>

              <div className="space-y-2 mt-3 max-h-80 overflow-y-auto pr-1">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`p-3 rounded-2xl border transition-all ${
                      !n.read
                        ? isDarkMode
                          ? 'bg-blue-900/20 border-blue-500/30'
                          : 'bg-blue-50/70 border-blue-200'
                        : isDarkMode
                        ? 'bg-[#18181b] border-zinc-800 opacity-70'
                        : 'bg-slate-50 border-slate-100 opacity-70'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">{n.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h5 className="font-bold text-xs leading-tight">{n.title}</h5>
                          <span className="text-[9px] text-slate-400 font-semibold shrink-0">{n.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mt-1 leading-snug">{n.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Account Profile Dropdown Container */}
        <div ref={profileRef} className="relative">
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-2 cursor-pointer group"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                alt="Alex Sterling"
                className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-blue-500/20 group-hover:ring-blue-500/60 transition-all"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#121215]"></span>
            </div>
            <div className="text-left hidden lg:block">
              <div className={`text-xs font-extrabold leading-tight flex items-center gap-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <span>Alex Sterling</span>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-blue-500 transition-colors">
                  {isProfileOpen ? 'expand_less' : 'expand_more'}
                </span>
              </div>
              <div className="text-[10px] font-semibold text-blue-500">Master Administrator</div>
            </div>
          </div>

          {/* User Account Profile Dropdown Panel */}
          {isProfileOpen && (
            <div
              className={`absolute right-0 top-14 w-72 rounded-3xl border-2 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200 ${
                isDarkMode ? 'bg-[#121215] border-[#27272a] text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              {/* Account Header */}
              <div className="flex items-center gap-3 pb-4 mb-3 border-b border-slate-100 dark:border-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Alex Sterling"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                />
                <div className="min-w-0">
                  <div className="font-extrabold text-sm truncate">Alex Sterling</div>
                  <div className="text-[10px] text-slate-400 font-semibold truncate">alex.sterling@lexiverba.ai</div>
                  <span className="inline-block mt-1 bg-blue-600/10 text-blue-500 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                    PRO ADMIN
                  </span>
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                <button
                  onClick={() => {
                    if (onSelectTab) onSelectTab('team');
                    setIsProfileOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                    isDarkMode ? 'hover:bg-[#18181b] text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] text-blue-500">person</span>
                  <span>View Profile &amp; Role</span>
                </button>

                <button
                  onClick={() => {
                    if (onSelectTab) onSelectTab('settings');
                    setIsProfileOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                    isDarkMode ? 'hover:bg-[#18181b] text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] text-blue-500">settings</span>
                  <span>System Preferences</span>
                </button>

                <button
                  onClick={() => {
                    toggleDarkMode();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                    isDarkMode ? 'hover:bg-[#18181b] text-slate-200' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-blue-500">
                      {isDarkMode ? 'light_mode' : 'dark_mode'}
                    </span>
                    <span>{isDarkMode ? 'Switch to Light' : 'Switch to Dark'}</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-200 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {isDarkMode ? 'DARK' : 'LIGHT'}
                  </span>
                </button>

                <div className="pt-2 mt-2 border-t border-slate-100 dark:border-zinc-800">
                  <button
                    onClick={() => {
                      if (onLoginClick) onLoginClick();
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-semibold text-rose-500 hover:bg-rose-500/10 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">logout</span>
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
