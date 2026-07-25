import React, { useState } from 'react';

export const SettingsPage: React.FC = () => {
  const [autoProofing, setAutoProofing] = useState(true);
  const [tmMatching, setTmMatching] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <div className="space-y-8">
      {/* Blue Gradient Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-[2.5rem] text-white shadow-xl flex items-center justify-between">
        <div>
          <span className="text-xs font-black text-blue-200 uppercase tracking-widest">SYSTEM CONTROLS</span>
          <h1 className="text-3xl font-black text-white mt-1">Preferences & Configuration</h1>
          <p className="text-xs text-blue-100 font-medium mt-1">Manage global translation rules, security, and team permissions.</p>
        </div>
        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px]">tune</span>
        </div>
      </div>

      {/* Numbered Section 01 */}
      <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center">01</span>
          <h3 className="text-lg font-extrabold text-slate-900">AI & Neural Engine Settings</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <div className="font-extrabold text-sm text-slate-900">Auto-Proofing Engine</div>
              <div className="text-xs text-slate-400 font-medium">Run continuous background grammar & terminology check</div>
            </div>
            <button
              onClick={() => setAutoProofing(!autoProofing)}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 ${autoProofing ? 'bg-blue-600' : 'bg-slate-300'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${autoProofing ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div>
              <div className="font-extrabold text-sm text-slate-900">Translation Memory (TM) Matching</div>
              <div className="text-xs text-slate-400 font-medium">Automatically pre-translate &gt;75% fuzzy matches</div>
            </div>
            <button
              onClick={() => setTmMatching(!tmMatching)}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 ${tmMatching ? 'bg-blue-600' : 'bg-slate-300'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${tmMatching ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Numbered Section 02 */}
      <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200/80 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center">02</span>
          <h3 className="text-lg font-extrabold text-slate-900">Notification Alerts</h3>
        </div>

        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div>
            <div className="font-extrabold text-sm text-slate-900">Email Digest for SLA Deadlines</div>
            <div className="text-xs text-slate-400 font-medium">Receive urgent reminders when deadlines are within 4 hours</div>
          </div>
          <button
            onClick={() => setEmailAlerts(!emailAlerts)}
            className={`w-12 h-6 rounded-full transition-colors relative p-1 ${emailAlerts ? 'bg-blue-600' : 'bg-slate-300'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${emailAlerts ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>
    </div>
  );
};
