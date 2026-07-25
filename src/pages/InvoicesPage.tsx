import React, { useState } from 'react';

interface InvoicesPageProps {
  isDarkMode?: boolean;
}

export const InvoicesPage: React.FC<InvoicesPageProps> = ({ isDarkMode = false }) => {
  const [hoveredCard, setHoveredCard] = useState<number>(0);

  const statCards = [
    { id: 0, title: 'TOTAL OUTSTANDING', value: '$12,150.00', badge: '3 Unpaid Invoices', icon: 'warning' },
    { id: 1, title: 'PAID THIS MONTH', value: '$17,250.00', badge: '91% Realized', icon: 'check_circle' },
    { id: 2, title: 'RETAINER BALANCE', value: '$45,000.00', badge: 'Active Contract', icon: 'account_balance_wallet' },
  ];

  const invoices = [
    { id: 'INV-2026-001', client: 'Acme Global Corp', date: 'Jul 24, 2026', amount: '$4,850.00', status: 'Paid', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' },
    { id: 'INV-2026-002', client: 'Helios Health Tech', date: 'Jul 20, 2026', amount: '$12,400.00', status: 'Paid', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' },
    { id: 'INV-2026-003', client: 'Vanguard Legal LLC', date: 'Jul 15, 2026', amount: '$3,200.00', status: 'Pending', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' },
    { id: 'INV-2026-004', client: 'Starlight Financial', date: 'Jul 02, 2026', amount: '$8,950.00', status: 'Overdue', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className={`text-4xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Invoices & Billing
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Track word-count billing, agency retainers, and client invoices.
          </p>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-black text-xs rounded-full shadow-lg shadow-blue-700/30 transition-all hover:scale-105 active:scale-95">
          <span className="text-base font-bold">+</span>
          Create Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((c) => {
          const isExpanded = hoveredCard === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHoveredCard(c.id)}
              className={`p-6 rounded-[2.5rem] cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${
                isExpanded
                  ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-2xl scale-[1.02] border-2 border-blue-500'
                  : isDarkMode
                  ? 'bg-slate-800/80 border-2 border-slate-700 text-white shadow-sm hover:shadow-lg'
                  : 'bg-white border-2 border-slate-200/80 text-slate-900 shadow-sm hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-xs font-black uppercase tracking-widest ${isExpanded ? 'text-blue-100' : 'text-slate-400'}`}>
                  {c.title}
                </span>
                <span className={`text-[10px] px-3 py-1 rounded-full font-black ${
                  isExpanded ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {c.badge}
                </span>
              </div>
              <div className="mt-6">
                <div className="text-3xl font-black tracking-tight">{c.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`rounded-[2.5rem] border-2 p-8 shadow-sm transition-colors ${
        isDarkMode ? 'bg-slate-800/80 border-slate-700/80 text-white' : 'bg-white border-slate-200/80 text-slate-900'
      }`}>
        <h3 className="text-xl font-black mb-6">Recent Invoices</h3>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className={`border-b-2 text-xs font-black uppercase tracking-wider ${
              isDarkMode ? 'border-slate-700 text-slate-400' : 'border-slate-100 text-slate-400'
            }`}>
              <th className="pb-4">Invoice ID</th>
              <th className="pb-4">Client</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
              <th className="pb-4 text-right">PDF</th>
            </tr>
          </thead>
          <tbody className={`divide-y font-semibold ${
            isDarkMode ? 'divide-slate-700/60 text-slate-300' : 'divide-slate-100 text-slate-700'
          }`}>
            {invoices.map((inv, idx) => (
              <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-slate-700/40' : 'hover:bg-slate-50'}`}>
                <td className="py-4 font-black">{inv.id}</td>
                <td className="py-4 font-black text-blue-500">{inv.client}</td>
                <td className="py-4 text-slate-400">{inv.date}</td>
                <td className="py-4 font-black">{inv.amount}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 text-xs font-black rounded-full uppercase ${inv.color}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <button className={`p-2 rounded-full transition-colors ${
                    isDarkMode ? 'hover:bg-slate-700 text-slate-300' : 'hover:bg-slate-100 text-slate-500'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
