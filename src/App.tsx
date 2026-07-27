import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FloatingAIAssistant } from './components/FloatingAIAssistant';
import { InteractiveModal } from './components/InteractiveModal';
import { DashboardPage } from './pages/DashboardPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { TeamPage } from './pages/TeamPage';
import { InvoicesPage } from './pages/InvoicesPage';
import { PricingPage } from './pages/PricingPage';
import { InsightsPage } from './pages/InsightsPage';
import { SettingsPage } from './pages/SettingsPage';
import { LoginPage } from './pages/LoginPage';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [isAddProjectOpen, setIsAddProjectOpen] = useState<boolean>(false);
  const [isImportOpen, setIsImportOpen] = useState<boolean>(false);
  const [isMeetingOpen, setIsMeetingOpen] = useState<boolean>(false);
  const [isDownloadAppOpen, setIsDownloadAppOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  // Sync Dark Mode class on document Element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle Help Tab navigation
  useEffect(() => {
    if (currentTab === 'help') {
      setIsHelpOpen(true);
    }
  }, [currentTab]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Item Detail Modal State
  const [activeDetailItem, setActiveDetailItem] = useState<{ title: string; subtitle: string; icon?: string; badge?: string } | null>(null);

  if (currentTab === 'login') {
    return <LoginPage onLoginSuccess={() => setCurrentTab('dashboard')} isDarkMode={isDarkMode} />;
  }

  const handleItemClick = (item: { title: string; subtitle: string; icon?: string; badge?: string }) => {
    setActiveDetailItem(item);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return (
          <DashboardPage
            isDarkMode={isDarkMode}
            onAddProjectClick={() => setIsAddProjectOpen(true)}
            onImportDataClick={() => setIsImportOpen(true)}
            onStartMeetingClick={() => setIsMeetingOpen(true)}
            onItemClick={handleItemClick}
          />
        );
      case 'documents':
        return <DocumentsPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      case 'team':
        return <TeamPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      case 'invoices':
        return <InvoicesPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      case 'pricing':
        return <PricingPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      case 'insights':
        return <InsightsPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      case 'settings':
        return <SettingsPage isDarkMode={isDarkMode} onItemClick={handleItemClick} />;
      default:
        return (
          <DashboardPage
            isDarkMode={isDarkMode}
            onAddProjectClick={() => setIsAddProjectOpen(true)}
            onImportDataClick={() => setIsImportOpen(true)}
            onStartMeetingClick={() => setIsMeetingOpen(true)}
            onItemClick={handleItemClick}
          />
        );
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-[#09090b] text-slate-100 dark' : 'bg-[#f4f7ff] text-[#001033]'
      }`}
    >
      {/* Fixed Sidebar */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDarkMode={isDarkMode}
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      {/* Main Layout Area */}
      <div className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'pl-20' : 'pl-72'}`}>
        {/* Fixed Top Header */}
        <Header
          onLoginClick={() => setCurrentTab('login')}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isCollapsed={isCollapsed}
          onSelectTab={(tab) => setCurrentTab(tab)}
        />

        {/* Dynamic Main Page Content */}
        <main className="pt-28 px-10 pb-16 min-h-screen">{renderContent()}</main>
      </div>

      {/* Floating AI Chatbot Assistant */}
      <FloatingAIAssistant />

      {/* Add Project Modal */}
      <InteractiveModal
        isOpen={isAddProjectOpen}
        onClose={() => setIsAddProjectOpen(false)}
        title="Add New Project"
        isDarkMode={isDarkMode}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsAddProjectOpen(false);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold mb-1">Project Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Legal Contract Translation DE/EN"
              className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium outline-none ${
                isDarkMode ? 'bg-[#18181b] border-zinc-700 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Target Language Pair</label>
            <select
              className={`w-full px-4 py-2.5 rounded-xl border text-xs font-medium outline-none ${
                isDarkMode ? 'bg-[#18181b] border-zinc-700 text-white' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <option>German (DE) → English (EN)</option>
              <option>Spanish (ES) → English (EN)</option>
              <option>Chinese (ZH) → English (EN)</option>
              <option>French (FR) → English (EN)</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAddProjectOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl"
            >
              Create Project
            </button>
          </div>
        </form>
      </InteractiveModal>

      {/* Import Data Modal */}
      <InteractiveModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        title="Import Localization Data"
        isDarkMode={isDarkMode}
      >
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-3xl mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
          </div>
          <h4 className="font-semibold text-sm">Drag and drop Translation Memory (.TMX, .XLIFF, .CSV)</h4>
          <p className="text-xs text-slate-400">Supported formats: ISO-17100 standard glossaries and XML payloads.</p>
          <button
            onClick={() => setIsImportOpen(false)}
            className="px-6 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl"
          >
            Select File
          </button>
        </div>
      </InteractiveModal>

      {/* Start Meeting Modal */}
      <InteractiveModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
        title="Live Video Sync - Arc Company"
        isDarkMode={isDarkMode}
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-[40px]">videocam</span>
          </div>
          <div>
            <h4 className="font-bold text-base">Arc Company Review Session</h4>
            <p className="text-xs text-slate-400 mt-1">Connecting secure WebRTC encrypted room...</p>
          </div>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => setIsMeetingOpen(false)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl"
            >
              Join Room Now
            </button>
          </div>
        </div>
      </InteractiveModal>

      {/* Download Mobile App Modal */}
      <InteractiveModal
        isOpen={isDownloadAppOpen}
        onClose={() => setIsDownloadAppOpen(false)}
        title="Download LexiVerba Mobile App"
        isDarkMode={isDarkMode}
      >
        <div className="text-center py-4 space-y-4">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-[32px]">smartphone</span>
          </div>
          <h4 className="font-bold text-sm">LexiVerba iOS &amp; Android Companion</h4>
          <p className="text-xs text-slate-400">Scan QR code or send download link to your mobile device.</p>
          <div className="p-4 bg-slate-100 dark:bg-zinc-800 rounded-2xl w-32 h-32 mx-auto flex items-center justify-center font-mono text-[10px] text-slate-500">
            [ QR CODE ]
          </div>
        </div>
      </InteractiveModal>

      {/* Notifications Drawer/Modal */}
      <InteractiveModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        title="Notifications &amp; Activity"
        isDarkMode={isDarkMode}
      >
        <div className="space-y-3">
          {[
            { title: 'Legal Contract certified by Sworn Translator', time: '10m ago', icon: 'verified' },
            { title: 'New translation request from Arc Company', time: '1h ago', icon: 'translate' },
            { title: 'PostgreSQL DB Indexing benchmark complete (35ms)', time: '3h ago', icon: 'speed' },
          ].map((n, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-2xl border text-xs ${
                isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-slate-100 bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined text-blue-500 text-[20px]">{n.icon}</span>
              <div className="flex-1">
                <div className="font-semibold">{n.title}</div>
                <div className="text-[10px] text-slate-400">{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      </InteractiveModal>

      {/* Help & Support Modal */}
      <InteractiveModal
        isOpen={isHelpOpen}
        onClose={() => {
          setIsHelpOpen(false);
          if (currentTab === 'help') setCurrentTab('dashboard');
        }}
        title="LexiVerba Help &amp; Knowledge Base"
        isDarkMode={isDarkMode}
      >
        <div className="space-y-3 text-xs">
          <p className="text-slate-400">Need assistance with translation memories, ISO certification, or API integrations?</p>
          <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-xl font-medium text-blue-500">
            Contact 24/7 Priority Support: support@lexiverba.ai
          </div>
        </div>
      </InteractiveModal>

      {/* Item Detail Inspector Modal */}
      <InteractiveModal
        isOpen={activeDetailItem !== null}
        onClose={() => setActiveDetailItem(null)}
        title={activeDetailItem?.title || 'Asset Inspector'}
        isDarkMode={isDarkMode}
      >
        <div className="space-y-4 text-xs">
          {activeDetailItem?.badge && (
            <span className="inline-block bg-blue-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              {activeDetailItem.badge}
            </span>
          )}
          <div className="p-4 bg-slate-100 dark:bg-zinc-800/80 rounded-2xl border border-slate-200 dark:border-zinc-700/60 font-medium leading-relaxed">
            {activeDetailItem?.subtitle}
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={() => setActiveDetailItem(null)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      </InteractiveModal>
    </div>
  );
}

export default App;
