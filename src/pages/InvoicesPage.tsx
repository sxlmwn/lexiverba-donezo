import React, { useState, useEffect } from 'react';
import { useTheme } from '../theme';
import { MetricCard } from '../components/ui/MetricCard';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';

interface InvoicesPageProps {
  isDarkMode?: boolean;
  onItemClick?: (item: { title: string; subtitle: string; icon?: string; badge?: string }) => void;
}

export const InvoicesPage: React.FC<InvoicesPageProps> = ({ onItemClick }) => {
  const { isDarkMode } = useTheme();
  const [hoveredInvoiceCard, setHoveredInvoiceCard] = useState<string | number | null>(null);
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // Gauge animation state (Count up from 0 to 91% on mount)
  const [gaugePercent, setGaugePercent] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const target = 91;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setGaugePercent(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const totalArcLength = 251.32;
  const completedDashOffset = totalArcLength - (totalArcLength * (gaugePercent / 100));
  const clearingDashOffset = totalArcLength - (totalArcLength * ((gaugePercent / 91) * 0.96));

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
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      icon: 'receipt',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
      icon: 'local_hospital',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
      icon: 'gavel',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
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
      statusColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
      icon: 'account_balance',
      iconColor: 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300',
      badge: 'warning',
    },
  ];

  const filteredInvoices = invoices.filter(inv =>
    selectedStatus === 'All' || inv.status.toLowerCase() === selectedStatus.toLowerCase()
  );

  return (
    <div className="space-y-8 animate-page-enter">
      {/* SVG Definitions for Hatched Pattern */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <pattern id="hatchedPatternInv" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" stroke={isDarkMode ? '#3f3f46' : '#cbd5e1'} strokeWidth="3" />
          </pattern>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1.5 w-10 bg-blue-600 rounded-full shadow-md shadow-blue-500/30"></div>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-[0.25em]">FINANCIAL SETTLEMENTS &amp; INVOICING</span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-semibold tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Billing &amp; Invoices
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Track corporate billing, milestone payouts, and instant Stripe SWIFT settlements.
          </p>
        </div>

        {/* Pill Action Buttons */}
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-2 px-6 py-3.5 border font-semibold text-xs rounded-full shadow-2xs transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
          }`}>
            <span className="material-symbols-outlined text-[18px]">receipt</span>
            Statement History
          </button>
          <button className="flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 float-hover cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">add_card</span>
            Create Invoice
          </button>
        </div>
      </div>

      {/* Top 4 Stats Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((c) => (
          <MetricCard
            key={c.id}
            title={c.title}
            value={c.value}
            badge={c.badge}
            icon={c.icon}
            onClick={() => onItemClick && onItemClick({ title: c.title, subtitle: `${c.value} • ${c.badge}`, icon: c.icon, badge: c.badge })}
          />
        ))}
      </div>

      {/* Main Content Grid: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-0">
        {/* Left Side Billing Capacity & Payment Methods - 4 Cols */}
        <div className="lg:col-span-4 space-y-8">
          {/* Realization Rate Donut Arc Gauge */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card flex flex-col justify-between transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold leading-tight">Billing<br />Realization Rate</h3>
              <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>

            {/* Standardized Arc Gauge */}
            <div className="relative w-64 h-40 mx-auto flex flex-col items-center justify-end my-4 cursor-pointer group">
              <svg className="w-64 h-40" viewBox="0 0 200 110">
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="url(#hatchedPatternInv)"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="28"
                  strokeDasharray="251.32"
                  strokeDashoffset={clearingDashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#004ac6"
                  strokeWidth="28"
                  strokeDasharray="251.32"
                  strokeDashoffset={completedDashOffset}
                  strokeLinecap="round"
                  className="transition-all duration-700 ease-out"
                />
              </svg>

              <div className="absolute bottom-2 flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
                <span className={`text-4xl font-semibold tracking-tight leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {gaugePercent}%
                </span>
                <span className="text-[10px] font-semibold text-zinc-400 mt-1">$17.2K / $19K</span>
              </div>
            </div>

            <div className={`flex justify-between items-center text-xs font-semibold border-t pt-4 mt-2 ${
              isDarkMode ? 'border-zinc-800 text-zinc-300' : 'border-slate-100 text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#004ac6]"></span>
                <span>Collected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#38bdf8]"></span>
                <span>Clearing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 border-2 border-dashed border-zinc-400 rounded-sm bg-slate-100 dark:bg-zinc-800"></span>
                <span>Pending</span>
              </div>
            </div>
          </div>

          {/* Payment Method Breakdown */}
          <div className={`p-8 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card space-y-4 transition-colors ${
            isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
          }`}>
            <h3 className="text-lg font-semibold">Settlement Channels</h3>

            <div className="space-y-4 pt-2">
              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Stripe Instant Credit Card</span>
                  <span className="text-blue-600 font-semibold">68%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[68%]"></div>
                </div>
              </div>

              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Corporate Wire (SWIFT/SEPA)</span>
                  <span className="text-blue-600 font-semibold">24%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-[24%]"></div>
                </div>
              </div>

              <div className={`p-2.5 rounded-2xl transition-all hover:translate-x-1 cursor-pointer ${
                isDarkMode ? 'hover:bg-zinc-800/60' : 'hover:bg-slate-50'
              }`}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>USDC Stablecoin Settlement</span>
                  <span className="text-blue-600 font-semibold">8%</span>
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
              {filteredInvoices.map((inv) => {
                const isHovered = hoveredInvoiceCard === inv.id;
                return (
                  <div
                    key={inv.id}
                    onMouseEnter={() => setHoveredInvoiceCard(inv.id)}
                    onMouseLeave={() => setHoveredInvoiceCard(null)}
                    onClick={() => onItemClick && onItemClick({ title: `${inv.id} • ${inv.client}`, subtitle: `${inv.service} • Amount: ${inv.amount} • Due: ${inv.dueDate}`, icon: inv.icon, badge: inv.status })}
                    className={`p-6 rounded-[2.5rem] border-2 float-shadow float-hover smooth-card transition-all duration-300 relative flex flex-col justify-between cursor-pointer animate-card-pop ${
                      isDarkMode ? 'bg-[#18181b] border-[#27272a] text-white' : 'bg-white border-slate-200/80 text-slate-900'
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
                      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{inv.id}</div>
                      <h4 className="text-xl font-semibold tracking-tight">{inv.client}</h4>
                      <p className="text-xs text-blue-500 font-semibold mt-0.5 mb-3">{inv.service}</p>

                      {/* Amount Display */}
                      <div className="text-3xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">
                        {inv.amount}
                      </div>

                      {/* Tag Metadata */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {inv.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Due Date & PDF Action Button */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-zinc-800">
                      <div>
                        <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">DUE DATE</div>
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">{inv.dueDate}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge status={inv.status} />
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
              <h3 className="text-xl font-semibold mb-6">Recent Invoices</h3>
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className={`border-b-2 text-xs font-semibold uppercase tracking-wider ${
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
                <tbody className={`divide-y font-medium ${
                  isDarkMode ? 'divide-zinc-800 text-slate-300' : 'divide-slate-100 text-slate-700'
                }`}>
                  {filteredInvoices.map((inv, idx) => (
                    <tr key={idx} className={`transition-colors ${isDarkMode ? 'hover:bg-zinc-800/40' : 'hover:bg-slate-50'}`}>
                      <td className="py-4 font-semibold">{inv.id}</td>
                      <td className="py-4 font-semibold text-blue-500">{inv.client}</td>
                      <td className="py-4 text-slate-400">{inv.dueDate}</td>
                      <td className="py-4 font-semibold text-slate-900 dark:text-white">{inv.amount}</td>
                      <td className="py-4">
                        <Badge status={inv.status} />
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
