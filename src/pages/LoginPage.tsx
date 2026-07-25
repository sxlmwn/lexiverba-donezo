import React from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
  isDarkMode: boolean;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, isDarkMode }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0b1329] text-slate-100' : 'bg-[#f4f7ff] text-slate-900'
    }`}>
      {/* Container Box matching login_unihedu_aligned */}
      <div className={`w-full max-w-5xl rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border-2 transition-all ${
        isDarkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200/80'
      }`}>
        {/* Left Column: Vibrant Blue Banner */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white text-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[24px]">translate</span>
              </div>
              <span className="font-black text-2xl tracking-tight text-white">LexiVerba</span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight mt-6">
              Your portal to <br />
              <span className="italic font-serif text-blue-200">Global Linguistic Excellence.</span>
            </h2>
          </div>

          {/* Bottom Testimonial Card */}
          <div className="bg-white/15 backdrop-blur-xl border border-white/20 p-6 rounded-3xl mt-12 space-y-3">
            <p className="text-xs font-medium leading-relaxed text-blue-50 italic">
              "The transition to AI-assisted localization has never been more seamless. LexiVerba provides the precision our enterprise requires."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-white/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                alt="Dr. Elena Vance"
                className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
              />
              <div>
                <div className="font-extrabold text-xs text-white">Dr. Elena Vance</div>
                <div className="text-[10px] font-bold text-blue-200 uppercase tracking-wider">DEAN OF LINGUISTICS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 p-10 flex flex-col justify-between">
          <div className="space-y-6 max-w-md mx-auto w-full">
            <div>
              <h2 className="text-2xl font-black tracking-tight">Welcome back</h2>
              <p className="text-xs text-slate-400 font-medium mt-1">Please enter your credentials to access the dashboard.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onLoginSuccess();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-1.5">Work Email</label>
                <div className={`flex items-center rounded-2xl px-4 py-3 border transition-all ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700 focus-within:border-blue-500' : 'bg-slate-100/80 border-slate-200/80 focus-within:border-blue-600'
                }`}>
                  <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2">mail</span>
                  <input
                    type="email"
                    defaultValue="alex.sterling@lexiverba.com"
                    required
                    className="bg-transparent border-none text-xs w-full outline-none font-bold text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-wider">Password</label>
                  <a href="#" className="text-xs font-bold text-blue-600 hover:underline">Forgot password?</a>
                </div>
                <div className={`flex items-center rounded-2xl px-4 py-3 border transition-all ${
                  isDarkMode ? 'bg-slate-800/80 border-slate-700 focus-within:border-blue-500' : 'bg-slate-100/80 border-slate-200/80 focus-within:border-blue-600'
                }`}>
                  <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2">lock</span>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    required
                    className="bg-transparent border-none text-xs w-full outline-none font-bold text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-1">
                <input type="checkbox" id="remember" defaultChecked className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="remember" className="cursor-pointer">Remember this device for 30 days</label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-full text-xs shadow-lg shadow-blue-700/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Sign In to Dashboard</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </form>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              <span className="flex-shrink mx-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Or continue with your institution</span>
              <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className={`py-3 px-4 rounded-2xl border text-xs font-extrabold flex items-center justify-center gap-2 transition-all hover:scale-105 ${
                isDarkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}>
                <span className="font-bold text-blue-600">G</span> Google
              </button>
              <button className={`py-3 px-4 rounded-2xl border text-xs font-extrabold flex items-center justify-center gap-2 transition-all hover:scale-105 ${
                isDarkMode ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}>
                GitHub
              </button>
            </div>

            <div className="text-center text-xs text-slate-400 font-bold">
              New to the platform? <a href="#" className="text-blue-600 hover:underline font-extrabold">Request access</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-[11px] font-black text-slate-400 tracking-widest uppercase text-center space-x-2">
        <span>PRIVACY PROTOCOL V4.2</span>
        <span>•</span>
        <span>ISO 27001 CERTIFIED</span>
        <span>•</span>
        <span>DATA RESIDENCY: EU-WEST</span>
      </div>
    </div>
  );
};
