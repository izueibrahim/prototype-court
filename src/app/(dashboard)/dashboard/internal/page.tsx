"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { 
  Briefcase, Activity, ArrowDown, Search, Filter, Calendar, 
  MapPin, RefreshCw, FilePlus, ShieldCheck, CheckCircle2,
  AlertCircle, ChevronRight, PieChart, Users2, LayoutDashboard,
  ServerCrash, Settings, Smartphone, Bell, Monitor, Gavel
} from 'lucide-react';
import { 
  caseTypeDistribution, chairmanCases, filingQueue, 
  integrationLogs, mockNotices, mockCAs, upcomingHearings
} from '@/lib/data';
import SebutanChat from '@/components/sebutan/SebutanChat';

const mockAnalyticsStats = [
  { metric: 'Total Cases', value: '1,234', trend: '+12%', bg: 'bg-white', color: 'text-emerald-500' },
  { metric: 'Resolved', value: '892', trend: '+5%', bg: 'bg-white', color: 'text-emerald-500' },
  { metric: 'Pending', value: '342', trend: '-2%', bg: 'bg-white', color: 'text-rose-500' },
  { metric: 'Appealed', value: '45', trend: '+1%', bg: 'bg-white', color: 'text-rose-500' }
];

const mockUsageLogs = [
  { role: 'Admin', user: 'Admin User', action: 'System Backup', time: '10:00 AM' },
  { role: 'Officer', user: 'Officer User', action: 'Case Registration', time: '11:00 AM' }
];

const mockSystemSettings = [
  { name: 'Core Database', lastDowntime: '2 mins ago', status: 'Online' },
  { name: 'e-Filing Services', lastDowntime: '1 day ago', status: 'Active' }
];

export default function InternalDashboard() {
  const { lang, dashActiveView, setDashActiveView } = useAppStore();
  const currentLang = t[lang] || t.en;

  const renderView = () => {
    switch (dashActiveView) {
      case 'overview': return <OverviewView lang={currentLang} />;
      case 'chairman': return <ChairmanView lang={currentLang} setDashActiveView={setDashActiveView} />;
      case 'analytics': return <AnalyticsView lang={currentLang} />;
      case 'registration': return <RegistrationView lang={currentLang} />;
      case 'cases': return <CasesView lang={currentLang} setDashActiveView={setDashActiveView} />;
      case 'schedule_int': return <ScheduleView lang={currentLang} />;
      case 'notice': return <NoticeView lang={currentLang} />;
      case 'collective': return <CollectiveView lang={currentLang} />;
      case 'display': return <DisplayView lang={currentLang} />;
      case 'integration': return <IntegrationView lang={currentLang} />;
      case 'usage': return <UsageView lang={currentLang} />;
      case 'settings': return <SettingsView lang={currentLang} />;
      case 'sebutan': return <SebutanChat />;
      default: return <OverviewView lang={currentLang} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      <div className="space-y-8">
        {renderView()}
      </div>
    </div>
  );
}

// --- VIEWS ---

function OverviewView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title={lang.kpiActive} value="1,284" icon={Briefcase} color="bg-blue-500" />
        <StatCard title={lang.kpiNew} value="156" icon={FilePlus} color="bg-indigo-500" />
        <StatCard title={lang.kpiClosed} value="89" icon={CheckCircle2} color="bg-emerald-500" />
        <StatCard title={lang.kpiBacklog} value="42" icon={AlertCircle} color="bg-rose-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-premium p-8">
          <h3 className="text-xl font-black text-zinc-900 mb-8 flex items-center justify-between tracking-tight">
            {lang.chartMonthly}
            <button className="btn-ghost w-10 h-10 p-0 text-zinc-400 hover:text-blue-600 transition-colors"><RefreshCw className="w-5 h-5" /></button>
          </h3>
          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {[40, 60, 45, 80, 55, 90, 75, 100, 65, 85, 70, 95].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="relative w-full h-full flex flex-col justify-end">
                  <div 
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-10 font-black shadow-lg"
                  >
                    {Math.round(val * 12.5)} cases
                  </div>
                  <div className="w-full bg-zinc-50 rounded-t-2xl relative overflow-hidden h-full border border-zinc-100">
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-2xl transition-all duration-700 group-hover:from-blue-500 group-hover:to-blue-300" 
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-premium p-8">
          <h3 className="text-xl font-black text-zinc-900 mb-8 tracking-tight">{lang.chartTypeDist}</h3>
          <div className="space-y-8">
            {caseTypeDistribution.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.15em]">
                  <span className="text-zinc-500">{item.type}</span>
                  <span className="text-zinc-900">{item.count}</span>
                </div>
                <div className="h-2.5 w-full bg-zinc-50 rounded-full overflow-hidden border border-zinc-100 p-0.5">
                  <div 
                    className={`h-full ${item.color} transition-all duration-1000 rounded-full`} 
                    style={{ width: `${(item.count / 125) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChairmanView({ lang, setDashActiveView }: { lang: { [key: string]: string }, setDashActiveView: (v: any) => void }) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-zinc-900 p-10 rounded-[2.5rem] text-white shadow-premium-lg relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[150%] bg-blue-600/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-3 tracking-tight">{lang.welcomeChairman}</h2>
          <p className="text-zinc-400 font-bold text-lg">{lang.chairmanSub}</p>
        </div>
        <div className="relative z-10 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-md">
          <Gavel className="w-10 h-10 text-blue-400" />
        </div>
      </div>
      
      <div className="card-premium overflow-hidden">
        <div className="p-8 border-b border-zinc-100 flex justify-between items-center">
          <h3 className="text-xl font-black text-zinc-900 tracking-tight">{lang.todaysDocket}</h3>
          <button className="btn-ghost text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">{lang.viewCalendar} <ChevronRight className="w-4 h-4 ml-1.5" /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-zinc-50/50 border-y border-zinc-100">
              <tr>
                <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.timeCol}</th>
                <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.caseNoCol}</th>
                <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.partiesCol}</th>
                <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.typeCol}</th>
                <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">{lang.actionCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {chairmanCases.map((c, i) => (
                <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                  <td className="py-6 px-8 text-sm font-black text-zinc-900 tracking-tight">{c.time}</td>
                  <td className="py-6 px-8 text-sm font-mono text-blue-600 font-black">{c.id}</td>
                  <td className="py-6 px-8 text-base font-black text-zinc-900 tracking-tight leading-tight">{c.title}</td>
                  <td className="py-6 px-8">
                    <span className="px-4 py-1.5 bg-zinc-50 text-zinc-500 text-[10px] rounded-xl font-black uppercase tracking-[0.1em] border border-zinc-100 transition-colors group-hover:bg-white group-hover:border-zinc-200">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-6 px-8 text-right">
                    <button 
                      onClick={() => setDashActiveView('sebutan')}
                      className="btn-primary text-xs uppercase tracking-widest px-6 py-2.5"
                    >
                      {lang.startSession}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RegistrationView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-black text-zinc-900 tracking-tight">{lang.filingQueue}</h3>
        <button className="btn-primary text-xs uppercase tracking-widest px-6 py-3">
          <FilePlus className="w-4 h-4 mr-2.5" /> {lang.newManualFiling}
        </button>
      </div>
      <div className="space-y-4">
        {filingQueue.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-6 border border-zinc-100 rounded-2xl hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center border border-zinc-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                <Briefcase className="w-6 h-6 text-zinc-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <div>
                <p className="font-black text-zinc-900 text-lg tracking-tight group-hover:text-blue-700 transition-colors">{item.id} - {item.submittedBy}</p>
                <p className="text-xs text-zinc-400 font-mono mt-1 font-black uppercase tracking-[0.1em]">{item.date} • {item.type}</p>
              </div>
            </div>
            <span className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl border ${
              item.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-50' : 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-50'
            }`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CasesView({ lang, setDashActiveView }: { lang: { [key: string]: string }, setDashActiveView: (v: any) => void }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 tracking-tight">{lang.dashCases}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px]">
          <thead className="bg-zinc-50/50 border-y border-zinc-100">
            <tr>
              <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.caseNoCol}</th>
              <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">{lang.partiesCol}</th>
              <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Summary</th>
              <th className="py-4 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">{lang.actionCol}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {upcomingHearings.map((c, i) => (
              <tr key={i} className="hover:bg-zinc-50/50 transition-colors group">
                <td className="py-6 px-8 text-sm font-mono text-blue-600 font-black">{c.id}</td>
                <td className="py-6 px-8 text-base font-black text-zinc-900 tracking-tight">{c.claimant} v {c.respondent}</td>
                <td className="py-6 px-8 text-sm text-zinc-500 max-w-xs font-medium leading-relaxed">{c.summary.substring(0, 80)}...</td>
                <td className="py-6 px-8 text-right flex items-center justify-end gap-3 font-sans">
                    <button 
                       onClick={() => setDashActiveView('sebutan')}
                       className="btn-primary text-[10px] font-black uppercase tracking-widest px-5 py-2.5 bg-brand-600 shadow-md shadow-brand-600/20 active:scale-95"
                    >
                       Join Session
                    </button>
                    <button className="btn-secondary text-[10px] font-black uppercase tracking-widest px-5 py-2.5 bg-zinc-50 hover:bg-white border-zinc-200">
                        {lang.viewDetails}
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScheduleView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 flex items-center gap-4 tracking-tight">
        <span className="w-1.5 h-7 bg-blue-600 rounded-full"></span>
        {lang.dashSchedule} - {lang.upcomingHearingsTitle}
      </h3>
      <div className="space-y-4">
        {upcomingHearings.map((h, i) => (
          <div key={i} className="flex p-6 border border-zinc-100 rounded-3xl hover:bg-zinc-50/50 hover:border-blue-400 hover:shadow-premium-lg transition-all gap-6 items-center group">
            <div className="flex flex-col items-center justify-center w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl shrink-0 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <span className="text-2xl font-black tracking-tight">{h.time.split(' ')[0]}</span>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{h.time.split(' ')[1]}</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-mono text-blue-600 font-black mb-1.5 uppercase tracking-[0.1em]">{h.id}</p>
              <p className="font-black text-zinc-900 text-xl tracking-tight leading-tight group-hover:text-blue-700 transition-colors">{h.claimant} v {h.respondent}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400 font-bold">
                 <MapPin className="w-3.5 h-3.5 text-blue-500 opacity-60" /> {h.court} • {h.judge}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NoticeView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 uppercase tracking-[0.2em] flex items-center tracking-tight"><Bell className="w-6 h-6 mr-3 text-amber-500" /> {lang.dashNotice}</h3>
      <div className="space-y-4">
        {mockNotices.map((n, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-zinc-100 rounded-[2rem] hover:shadow-premium-lg hover:bg-white hover:border-blue-400 transition-all gap-6 group">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 uppercase tracking-widest">{n.id}</span>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{n.type}</span>
              </div>
              <p className="font-black text-zinc-900 text-xl tracking-tight leading-tight group-hover:text-blue-700 transition-colors">{n.parties}</p>
              <p className="text-xs text-zinc-400 font-mono mt-2 font-black">Ref: {n.caseNo}</p>
            </div>
            <div className="flex items-center gap-4">
               <span className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl border ${
                 n.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-50' : 
                 n.status === 'Dispatched' ? 'bg-blue-50 text-blue-600 border-blue-100 shadow-sm shadow-blue-50' : 
                 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-50'
               }`}>{n.status}</span>
               <button className="btn-secondary text-[10px] uppercase tracking-widest px-5 py-2.5 bg-zinc-50 hover:bg-white">{lang.actionCol}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectiveView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 flex items-center tracking-tight"><Users2 className="w-6 h-6 mr-3 text-indigo-500" /> {lang.dashCollective}</h3>
      <div className="space-y-4">
        {mockCAs.map((ca, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-zinc-100 rounded-[2rem] hover:border-indigo-400 hover:bg-indigo-50/20 transition-all gap-6 group">
            <div>
              <p className="text-xs font-mono text-indigo-600 font-black mb-2 tracking-[0.2em] uppercase">{ca.id}</p>
              <p className="font-black text-zinc-900 text-xl tracking-tight leading-tight group-hover:text-indigo-700 transition-colors">{ca.company}</p>
              <div className="flex items-center gap-3 mt-3">
                <p className="text-xs text-zinc-400 font-black uppercase tracking-widest flex items-center pr-4 border-r border-zinc-100">
                    <Users2 className="w-4 h-4 mr-2 text-indigo-400" /> {ca.union}
                </p>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic opacity-60">Submitted: {ca.submitted}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3">
               <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl border ${
                 ca.status === 'Cognizance Granted' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-sm shadow-emerald-50' : 
                 ca.status === 'Approved' ? 'bg-blue-50 text-blue-600 border-blue-100 shadow-sm shadow-blue-50' : 
                 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm shadow-amber-50'
               }`}>{ca.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisplayView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <div className="flex items-center mb-10 gap-4">
        <Monitor className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-black text-zinc-900 tracking-tight">{lang.courtDisplay} Feed</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcomingHearings.slice(0, 4).map((h, i) => (
          <div key={i} className="bg-zinc-50/50 p-8 rounded-[2rem] border border-zinc-100 hover:border-blue-400 hover:bg-white hover:shadow-premium-lg transition-all group border-t-4 border-t-amber-500/30">
             <div className="flex justify-between items-start mb-6">
               <span className="text-2xl font-black text-amber-600 tracking-tighter group-hover:text-amber-700 transition-colors uppercase">{h.court}</span>
               <span className="text-[10px] font-black bg-white px-4 py-2 rounded-xl text-zinc-500 border border-zinc-100 shadow-sm tracking-widest uppercase">{h.time}</span>
             </div>
             <p className="font-mono text-blue-600 mb-2 font-black text-[10px] tracking-[0.2em] uppercase opacity-70">{h.id}</p>
             <div className="space-y-1.5">
               <p className="text-lg font-black text-zinc-900 tracking-tight leading-tight">{h.claimant}</p>
               <p className="text-zinc-300 font-bold text-[10px] tracking-[0.5em] uppercase py-1">v</p>
               <p className="text-lg font-black text-zinc-900 tracking-tight leading-tight">{h.respondent}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="space-y-8">
      <div className="card-premium p-10">
        <h3 className="text-2xl font-black text-zinc-900 mb-10 border-l-8 border-brand-600 pl-6 tracking-tight">{lang.analyticsMetrics}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mockAnalyticsStats.map((stat, i) => (
            <div key={i} className={`${stat.bg} p-8 rounded-[2rem] border border-zinc-100 group hover:border-brand-400 hover:bg-white hover:shadow-premium-lg transition-all`}>
              <p className="text-[10px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">{stat.metric}</p>
              <h4 className="text-4xl font-black text-zinc-900 mb-3 tracking-tighter group-hover:scale-110 group-hover:text-brand-600 transition-all origin-left">{stat.value}</h4>
              <p className={`text-[10px] font-black px-3 py-1 rounded-xl inline-block shadow-sm ${stat.color === 'text-emerald-500' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>{stat.trend}</p>
            </div>
          ))}
          {/* Additional Data Points */}
          <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 group hover:border-brand-400 hover:bg-white hover:shadow-premium-lg transition-all">
            <p className="text-[10px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Avg Award Value</p>
            <h4 className="text-4xl font-black text-zinc-900 mb-3 tracking-tighter group-hover:text-brand-600 transition-all origin-left">RM 42.5k</h4>
            <p className="text-[10px] font-black px-3 py-1 rounded-xl inline-block shadow-sm bg-blue-50 text-blue-600 border border-blue-100">+2.4%</p>
          </div>
          <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 group hover:border-brand-400 hover:bg-white hover:shadow-premium-lg transition-all">
            <p className="text-[10px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Settled vs Trial</p>
            <h4 className="text-4xl font-black text-zinc-900 mb-3 tracking-tighter group-hover:text-brand-600 transition-all origin-left">3.4 : 1</h4>
            <p className="text-[10px] font-black px-3 py-1 rounded-xl inline-block shadow-sm bg-emerald-50 text-emerald-600 border border-emerald-100">Optimal</p>
          </div>
          <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 group hover:border-brand-400 hover:bg-white hover:shadow-premium-lg transition-all">
            <p className="text-[10px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Appeal Success</p>
            <h4 className="text-4xl font-black text-zinc-900 mb-3 tracking-tighter group-hover:text-brand-600 transition-all origin-left">4.2%</h4>
            <p className="text-[10px] font-black px-3 py-1 rounded-xl inline-block shadow-sm bg-emerald-50 text-emerald-600 border border-emerald-100">-1.2%</p>
          </div>
          <div className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 group hover:border-brand-400 hover:bg-white hover:shadow-premium-lg transition-all">
            <p className="text-[10px] font-black text-zinc-400 mb-3 uppercase tracking-[0.2em]">Compliance Rate</p>
            <h4 className="text-4xl font-black text-zinc-900 mb-3 tracking-tighter group-hover:text-brand-600 transition-all origin-left">96.8%</h4>
            <p className="text-[10px] font-black px-3 py-1 rounded-xl inline-block shadow-sm bg-emerald-50 text-emerald-600 border border-emerald-100">High</p>
          </div>
        </div>

        {/* Second Chart: Award Settlement Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="border border-zinc-100 p-8 rounded-[2.5rem] bg-zinc-50/50 hover:bg-white transition-all">
              <h4 className="text-lg font-black text-zinc-900 mb-8 tracking-tight flex items-center gap-3">
                 <div className="w-1.5 h-6 bg-brand-600 rounded-full"></div> Settlement Methods Distribution
              </h4>
              <div className="flex items-center gap-12">
                 <div className="relative w-48 h-48 rounded-full border-[16px] border-zinc-100 flex items-center justify-center">
                    <div className="absolute inset-[-16px] rounded-full border-[16px] border-brand-600 border-t-transparent border-r-transparent rotate-[45deg]"></div>
                    <div className="text-center">
                       <p className="text-3xl font-black text-zinc-900">72%</p>
                       <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Settled</p>
                    </div>
                 </div>
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-600"></div> <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Mediation</span></div>
                       <span className="text-sm font-black text-zinc-900">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-400"></div> <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Direct Negotiate</span></div>
                       <span className="text-sm font-black text-zinc-900">27%</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-zinc-200"></div> <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Full Trial</span></div>
                       <span className="text-sm font-black text-zinc-900">28%</span>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="border border-zinc-100 p-8 rounded-[2.5rem] bg-zinc-50/50 hover:bg-white transition-all">
              <h4 className="text-lg font-black text-zinc-900 mb-8 tracking-tight flex items-center gap-3">
                 <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div> Award Compliance Velocity
              </h4>
              <div className="h-44 flex items-end gap-4 px-4 overflow-hidden pt-4">
                 {[45, 78, 52, 91, 64, 88, 72].map((h, i) => (
                    <div key={i} className="flex-1 bg-zinc-100 rounded-2xl relative group h-full">
                       <div 
                          className="absolute bottom-0 w-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-500 rounded-2xl"
                          style={{ height: `${h}%` }}
                       >
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-2 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all font-black">{h}%</div>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="flex justify-between mt-4 px-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                 <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function IntegrationView({ lang }: { lang: { [key: string]: string } }) {
  return (
     <div className="card-premium p-10">
       <div className="flex justify-between items-center mb-10">
         <div className="flex items-center gap-4">
           <ServerCrash className="w-7 h-7 text-emerald-600" />
           <h3 className="text-2xl font-black text-zinc-900 tracking-tight">{lang.sysIntegrationLogs}</h3>
         </div>
         <div className="flex items-center gap-2.5 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 shadow-sm shadow-emerald-50">
           <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
           <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{lang.liveSyncActive}</span>
         </div>
       </div>
       <div className="space-y-2">
         {integrationLogs.map((log, i) => (
           <div key={i} className="flex p-6 border-b border-zinc-100 items-center gap-6 hover:bg-zinc-50/50 transition-all group last:border-0 rounded-2xl">
             <div className="w-20 text-[10px] font-black text-zinc-400 font-mono tracking-tighter uppercase whitespace-nowrap">[{log.id}]</div>
             <div className="flex-1 flex items-center justify-between">
                <div className="flex items-center gap-12">
                   <span className="text-sm font-black text-blue-600 w-32 tracking-tight group-hover:text-blue-700">{log.system}</span>
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] w-48">{log.type}</span>
                  <span className={`text-sm font-black w-24 tracking-tight ${log.status === 'Success' ? 'text-emerald-600' : 'text-rose-600'}`}>{log.status}</span>
                </div>
                <div className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-500 transition-colors font-mono tracking-widest">{log.time}</div>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
}

function UsageView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 border-b border-zinc-50 pb-6 tracking-tight">{lang.usageActivity}</h3>
      <div className="space-y-3">
        {mockUsageLogs.map((log, i) => (
          <div key={i} className="flex flex-col sm:flex-row p-6 border border-zinc-100 rounded-[2rem] sm:items-center gap-6 hover:bg-zinc-50/50 hover:border-blue-400 transition-all group shadow-sm hover:shadow-premium">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shrink-0 shadow-lg ${log.role === 'Admin' ? 'bg-rose-50 text-rose-600 border border-rose-100 shadow-rose-50' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-blue-50'}`}>
              {log.role[0]}
            </div>
            <div className="flex-1">
              <p className="font-black text-zinc-900 text-lg tracking-tight group-hover:text-blue-700 transition-colors leading-tight">{log.action}</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] mt-1.5 font-black">{log.user} • {log.role}</p>
            </div>
            <div className="text-[10px] font-black text-zinc-400 group-hover:text-zinc-500 uppercase tracking-widest font-mono">{log.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="card-premium p-8">
      <h3 className="text-xl font-black text-zinc-900 mb-8 flex items-center gap-4 tracking-tight"><Settings className="w-6 h-6 text-zinc-400" /> {lang.sysAdmin} - {lang.systemSettings}</h3>
      <div className="grid grid-cols-1 gap-4">
        {mockSystemSettings.map((sys, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:justify-between p-6 border border-zinc-100 rounded-[2rem] sm:items-center gap-6 hover:border-blue-400 transition-all bg-zinc-50/50 hover:bg-white hover:shadow-premium group">
             <div>
                <p className="font-black text-zinc-900 text-lg tracking-tight group-hover:text-blue-700 transition-colors">{sys.name}</p>
                <p className="text-[10px] text-zinc-400 mt-2 uppercase tracking-[0.2em] font-black">Downtime: <span className="font-mono text-zinc-500">{sys.lastDowntime}</span></p>
             </div>
             <div>
               <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl border shadow-sm ${sys.status === 'Online' || sys.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-50' : 'bg-rose-50 text-rose-600 border border-rose-100 shadow-rose-50'}`}>
                 {sys.status}
               </span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: string, icon: any, color: string }) {
  const lightBg = color.replace('bg-', 'bg-').replace('-500', '-50');
  const lightBorder = color.replace('bg-', 'border-').replace('-500', '-100');
  return (
    <div className="card-premium p-8 hover:border-blue-400 hover:shadow-premium-lg transition-all group overflow-hidden relative border-t-4 border-t-blue-500/20">
      <div className={`absolute -right-10 -top-10 w-32 h-32 ${color} opacity-5 rounded-full group-hover:scale-[2] transition-transform duration-1000`}></div>
      <div className="flex items-center gap-6 relative z-10">
        <div className={`w-16 h-16 ${lightBg} rounded-[1.5rem] flex items-center justify-center border ${lightBorder} shadow-sm group-hover:scale-110 transition-transform`}>
          <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
        </div>
        <div>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.25em] mb-1">{title}</p>
          <p className="text-4xl font-black text-zinc-900 tracking-tighter">{value}</p>
        </div>
      </div>
    </div>
  );
}

function PlaceholderView({ title, icon: Icon }: { title: string, icon: React.ElementType }) {
  return (
    <div className="bg-white rounded-3xl border border-zinc-200 p-12 shadow-sm flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 border border-blue-100">
        <Icon className="w-10 h-10 text-blue-500" />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-500 max-w-xs font-medium">This module is currently being optimized for the new internal workspace standard.</p>
    </div>
  );
}
