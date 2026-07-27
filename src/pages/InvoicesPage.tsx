import React, { useState } from 'react';

interface InvoicesPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const InvoicesPage: React.FC<InvoicesPageProps> = ({ isDarkMode = false, onItemClick }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const statCards = [
    { id: 0, title: 'TOTAL OUTSTANDING', value: '$12,150.00', badge: '3 Pending Invoices', icon: 'warning', color: 'text-amber-500' },
    { id: 1, title: 'PAID THIS MONTH', value: '$17,250.00', badge: '91% Realized ▲', icon: 'check_circle', color: 'text-emerald-500' },
    { id: 2, title: 'RETAINER BALANCE', value: '$45,000.00', badge: 'Active Retainer', icon: 'account_balance_wallet', color: 'text-blue-500' },
    { id: 3, title: 'AVG SETTLEMENT', value: '4.2 Days', badge: 'Fast Speed', icon: 'speed', color: 'text-blue-500' },
  ];

  const invoices = [
    {
      id: 'INV-2026-001',
      client: 'Acme Global Corp',
      service: 'Legal Contract (DE/EN) - 14,200 Words',
      amount: '$4,850.00',
      dueDate: 'Jul 28, 2026',
      tags: ['NET-30', 'SWORN CERT', 'STRIPE'],
      status: 'Paid',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'receipt',
      iconColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30',
      badge: 'verified',
    },
    {
      id: 'INV-2026-002',
      client: 'Helios Health Tech',
      service: 'Medical Trial Protocols (ES/EN)',
      amount: '$12,400.00',
      dueDate: 'Aug 04, 2026',
      tags: ['HIPAA COMPLIANT', 'WIRE TRANSFER'],
      status: 'Paid',
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 badge-glow-emerald',
      icon: 'local_hospital',
      iconColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30',
      badge: 'verified_user',
    },
    {
      id: 'INV-2026-003',
      client: 'Vanguard Legal LLC',
      service: 'Patent Claim Portfolio (JA/EN)',
      amount: '$3,200.00',
      dueDate: 'Jul 31, 2026',
      tags: ['PATENT BAR', 'PENDING REVIEW'],
      status: 'Pending',
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300 badge-glow-amber',
      icon: 'gavel',
      iconColor: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30',
      badge: 'workspace_premium',
    },
    {
      id: 'INV-2026-004',
      client: 'Starlight Financial',
      service: 'SEC Audit & Q2 Earnings Report',
      amount: '$8,950.00',
      dueDate: 'Jul 20, 2026',
      tags: ['OVERDUE 7D', 'RETAINER CLAIM'],
      status: 'Overdue',
      statusColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 badge-glow-rose',
      icon: 'account_balance',
      iconColor: 'text-rose-600 bg-rose-50 dark:bg-rose-900/30',
      badge: 'warning',
    },
  ];

  const filteredInvoices = invoices.filter(inv =>
    selectedStatus === 'All' || inv.status.toLowerCase() === selectedStatus.toLowerCase()
  );

  return (
    <div className="space-y-8 animate-page-enter">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-black text-blue-500 uppercase tracking-[0.25em]">FINANCIAL TRANSACTIONS &amp; RETAINERS</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Invoices &amp; Billing Ledger
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Manage client retainers, word-count billing, and ISO certified invoices.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          {/* View Type Toggle */}
          <div className={`flex p-1.5 rounded-full border shadow-sm ${isDarkMode ? 'bg-[#18181b] border-[#27272a]' : 'bg-white border-slate-200'}`}>
            <button
              onClick={() => setViewType('grid')}
              className={`px-4 py-2 text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'grid'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewType('table')}
              className={`px-4 py-2 text-xs font-black rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                viewType === 'table'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">table_rows</span>
              <span>Table</span>
            </button>
          </div>

          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">add_card</span>
            Create Invoice
          </button>
        </div>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {statCards.map((c) => {
          const isExpanded = hoveredCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer smooth-card float-shadow float-hover transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white shadow-2xl scale-[1.02] border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-[#18181b] border-2 border-[#27272a] text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start relative z-10">
                <span className={`text-xs font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </span>
                <span className={`text-[10px] px-3 py-1 rounded-full font-black ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {c.badge}
                </span>
              </div>
              <div className="mt-6 relative z-10">
                <div className="text-4xl font-black tracking-tight">{c.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Status Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {['All', 'Paid', 'Pending', 'Overdue'].map((st) => (
          <button
            key={st}
            onClick={() => setSelectedStatus(st)}
            className={`px-5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer shadow-2xs ${
              selectedStatus === st
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDarkMode
                ? 'bg-[#18181b] border border-[#27272a] text-slate-400 hover:text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {st} Invoices
          </button>
        ))}
      </div>

      {/* Main Grid Layout (Matching Team & Documents Pages) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Side Billing Capacity & Payment Methods - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Realization Rate Donut Arc Gauge */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black leading-tight">Billing<br />Realization Rate</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>

            {/* 91% Donut Arc Gauge */}
            <div className="relative w-44 h-44 mx-auto my-6 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="88" cy="88" r="70" fill="transparent" stroke={isDarkMode ? '#27272a' : '#e2e8f0'} strokeWidth="16" />
                <circle
                  cx="88"
                  cy="88"
                  r="70"
                  fill="transparent"
                  stroke="#10b981"
                  strokeWidth="16"
                  strokeDasharray="440"
                  strokeDashoffset="39"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-4xl font-black tracking-tight">91%</span>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">$17.2K / $19K</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs">
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">Payment Gateway</span>
                <span className="font-black text-emerald-500 text-sm">Stripe Auto Pay</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-400">ISO Billing Standard</span>
                <span className="font-black text-blue-600 dark:text-blue-400 text-sm">ISO-17100</span>
              </div>
            </div>
          </div>

          {/* Payment Method Breakdown */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-black">Settlement Channels</h3>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Stripe Instant Credit Card</span>
                  <span className="text-blue-600 font-black">68%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[68%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Corporate Wire (SWIFT/SEPA)</span>
                  <span className="text-blue-600 font-black">24%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[24%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>USDC Stablecoin Settlement</span>
                  <span className="text-blue-600 font-black">8%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[8%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Invoice Cards Grid or Table View - 8 Cols */}
        <div className="lg:col-span-8">
          {viewType === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredInvoices.map((inv, idx) => {
                const isHovered = hoveredCard === idx;
                return (
                  <div
                    key={inv.id}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => onItemClick && onItemClick({ title: `${inv.id} • ${inv.client}`, subtitle: `${inv.service} • Amount: ${inv.amount} • Due: ${inv.dueDate}`, icon: inv.icon, badge: inv.status })}
                    className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer animate-card-pop ${
                      isHovered
                        ? 'shadow-2xl border-blue-500 z-10'
                        : isDarkMode
                        ? 'bg-[#18181b] border-[#27272a] text-white shadow-sm'
                        : 'bg-white border-slate-200/80 text-slate-900 shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Invoice Icon & Verified Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${inv.iconColor}`}>
                          <span className="material-symbols-outlined text-[28px]">{inv.icon}</span>
                        </div>
                        <span className="material-symbols-outlined text-blue-600 text-[24px]">
                          {inv.badge}
                        </span>
                      </div>

                      {/* Invoice Info & Client */}
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{inv.id}</div>
                      <h4 className="text-xl font-black tracking-tight">{inv.client}</h4>
                      <p className="text-xs text-blue-500 font-extrabold mt-0.5 mb-3">{inv.service}</p>

                      {/* Amount Display */}
                      <div className="text-3xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
                        {inv.amount}
                      </div>

                      {/* Tag Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {inv.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider ${
                              isDarkMode ? 'bg-[#27272a] text-slate-300' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Due Date & PDF Action Button */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <div>
                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">DUE DATE</div>
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{inv.dueDate}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/60 text-slate-700 dark:text-slate-300">
                          <span className={`w-1.5 h-1.5 rounded-full ${inv.status === 'Paid' ? 'bg-emerald-500' : inv.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'}`}></span>
                          <span>{inv.status}</span>
                        </span>
                        <button className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-2xs cursor-pointer">
                          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={`rounded-[2.5rem] border-2 p-8 float-shadow smooth-card transition-colors ${
              isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
            }`}>
              <h3 className="text-xl font-black mb-6">Recent Invoices</h3>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className={`border-b-2 text-xs font-black uppercase tracking-wider ${
                    isDarkMode ? 'border-zinc-800 text-slate-400' : 'border-slate-100 text-slate-400'
                  }`}>
                    <th className="pb-4">Invoice ID</th>
                    <th className="pb-4">Client</th>
                    <th className="pb-4">Due Date</th>
                    <th className="pb-4">Amount</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4 text-right">PDF</th>
                  </tr>
                </thead>
                <tbody className={`divide-y font-semibold ${
                  isDarkMode ? 'divide-zinc-800 text-slate-300' : 'divide-slate-100 text-slate-700'
                }`}>
                  {filteredInvoices.map((inv, idx) => (
                    <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-zinc-800/40' : 'hover:bg-slate-50'}`}>
                      <td className="py-4 font-black">{inv.id}</td>
                      <td className="py-4 font-black text-blue-500">{inv.client}</td>
                      <td className="py-4 text-slate-400">{inv.dueDate}</td>
                      <td className="py-4 font-black text-slate-900 dark:text-white">{inv.amount}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 text-xs font-black rounded-full uppercase ${inv.statusColor}`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className={`p-2 rounded-full transition-colors cursor-pointer ${
                          isDarkMode ? 'hover:bg-zinc-800 text-slate-300' : 'hover:bg-slate-100 text-slate-500'
                        }`}>
                          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
