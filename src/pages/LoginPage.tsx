import React from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
  isDarkMode: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, isDarkMode }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#090d16] text-slate-100' : 'bg-[#f9f9ff] text-slate-900'
    }`}>
      <main className="w-full flex flex-col items-center justify-center">
        {/* Main Card Container (Max-width 1100px matching login_unihedu_aligned) */}
        <div className={`relative w-full max-w-[1100px] flex flex-col md:flex-row rounded-[32px] shadow-2xl overflow-hidden border transition-all ${
          isDarkMode ? 'bg-[#131927] border-[#1f283d]' : 'bg-white border-slate-200/80'
        }`}>
          {/* Left Side: Visual / Branding (Desktop Only) */}
          <div className="hidden md:flex md:w-1/2 relative bg-[#004ac6] p-12 flex-col justify-between overflow-hidden text-white min-h-[620px]">
            {/* Animated Background Ornament matching login_unihedu_aligned */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <svg className="w-[150%] h-[150%] animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.5,-45.3C86.9,-32.1,91.9,-16.1,90.4,-0.9C88.8,14.4,80.7,28.8,71.2,40.9C61.7,53,50.7,62.8,38.1,70.1C25.5,77.4,12.7,82.2,-0.9,83.7C-14.5,85.2,-29,83.4,-42,76.5C-54.9,69.5,-66.4,57.4,-73.9,43.5C-81.4,29.7,-85,14.8,-83.9,0.7C-82.7,-13.4,-76.8,-26.8,-68.2,-38.7C-59.5,-50.5,-48.1,-60.8,-35.3,-68.4C-22.5,-76,-11.2,-81,2.3,-84.9C15.8,-88.8,31.1,-83.6,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-blue-600 text-[26px]">translate</span>
                </div>
                <span className="text-2xl font-black tracking-tight text-white">LexiVerba</span>
              </div>
              <h1 className="text-3xl font-black leading-tight tracking-tight mt-6">
                Your portal to <br />
                Global Linguistic <br />
                <span className="opacity-80 italic font-serif">Excellence.</span>
              </h1>
            </div>

            {/* Testimonial Box */}
            <div className="relative z-10 mt-auto pt-8">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl space-y-4">
                <p className="text-xs font-medium text-white italic leading-relaxed">
                  "The transition to AI-assisted localization has never been more seamless. LexiVerba provides the trust our enterprise requires."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden border border-white/30">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                      alt="Dr. Elena Vance"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs text-white">Dr. Elena Vance</p>
                    <p className="text-[10px] text-white/70 uppercase tracking-widest font-black">DEAN OF LINGUISTICS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-[64px] flex flex-col justify-center bg-white dark:bg-[#131927]">
            {/* Mobile Logo */}
            <div className="flex md:hidden items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">translate</span>
              </div>
              <span className="font-black text-xl text-slate-900 dark:text-white">LexiVerba</span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">Welcome back</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Please enter your credentials to access the dashboard.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onLoginSuccess();
              }}
              className="space-y-6"
            >
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    mail
                  </span>
                  <input
                    type="email"
                    defaultValue="alex.sterling@lexiverba.com"
                    required
                    placeholder="name@university.edu"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-100 dark:bg-[#1e2638] rounded-xl font-semibold text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all border-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs font-black text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                    lock
                  </span>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    required
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-100 dark:bg-[#1e2638] rounded-xl font-semibold text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all border-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 px-1 py-1">
                <input
                  type="checkbox"
                  id="remember"
                  defaultChecked
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
                />
                <label htmlFor="remember" className="text-xs font-bold text-slate-500 dark:text-slate-400 cursor-pointer">
                  Remember this device for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-xs shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Sign In to Dashboard</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[18px]">
                  arrow_forward
                </span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Or continue with your institution</p>
              <div className="flex gap-4 w-full">
                <button
                  type="button"
                  onClick={onLoginSuccess}
                  className="flex-1 py-3 flex items-center justify-center gap-2 bg-slate-100 dark:bg-[#1e2638] hover:bg-slate-200 dark:hover:bg-[#283248] rounded-lg transition-colors font-extrabold text-xs text-slate-900 dark:text-white cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={onLoginSuccess}
                  className="flex-1 py-3 flex items-center justify-center gap-2 bg-slate-100 dark:bg-[#1e2638] hover:bg-slate-200 dark:hover:bg-[#283248] rounded-lg transition-colors font-extrabold text-xs text-slate-900 dark:text-white cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </button>
              </div>
            </div>

            <div className="mt-8 text-center text-xs font-bold text-slate-400">
              New to the platform? <a href="#" className="text-blue-600 hover:underline font-black">Request access</a>
            </div>
          </div>
        </div>

        {/* Footer Metadata matching login_unihedu_aligned */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 opacity-40 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">
          <span>Privacy Protocol v4.2</span>
          <span className="hidden sm:inline">•</span>
          <span>ISO 27001 Certified</span>
          <span className="hidden sm:inline">•</span>
          <span>Data residency: EU-West</span>
        </div>
      </main>
    </div>
  );
};
