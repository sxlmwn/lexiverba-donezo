import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FloatingAIAssistant } from './components/FloatingAIAssistant';
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

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (currentTab === 'login') {
    return <LoginPage onLoginSuccess={() => setCurrentTab('dashboard')} isDarkMode={isDarkMode} />;
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <DashboardPage isDarkMode={isDarkMode} />;
      case 'documents':
        return <DocumentsPage isDarkMode={isDarkMode} />;
      case 'team':
        return <TeamPage isDarkMode={isDarkMode} />;
      case 'invoices':
        return <InvoicesPage isDarkMode={isDarkMode} />;
      case 'pricing':
        return <PricingPage isDarkMode={isDarkMode} />;
      case 'insights':
        return <InsightsPage isDarkMode={isDarkMode} />;
      case 'settings':
        return <SettingsPage isDarkMode={isDarkMode} />;
      default:
        return <DashboardPage isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-[#09090b] text-slate-100 dark' : 'bg-[#f4f7ff] text-[#001033]'
    }`}>
      {/* Fixed Sidebar */}
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} isDarkMode={isDarkMode} />

      {/* Main Layout Area */}
      <div className="pl-72">
        {/* Fixed Top Header */}
        <Header
          onLoginClick={() => setCurrentTab('login')}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Dynamic Main Page Content */}
        <main className="pt-28 px-10 pb-16 min-h-screen">
          {renderContent()}
        </main>
      </div>

      {/* Floating AI Chatbot Assistant */}
      <FloatingAIAssistant />
    </div>
  );
}

export default App;
