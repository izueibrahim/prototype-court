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
  integrationLogs, mockNotices, mockCAs 
} from '@/lib/data';

export default function InternalDashboard() {
  const { lang, dashActiveView } = useAppStore();
  const currentLang = t[lang] || t.en;

  const renderView = () => {
    switch (dashActiveView) {
      case 'overview': return <OverviewView lang={currentLang} />;
      case 'chairman': return <ChairmanView lang={currentLang} />;
      case 'analytics': return <AnalyticsView lang={currentLang} />;
      case 'registration': return <RegistrationView lang={currentLang} />;
      case 'cases': return <CasesView lang={currentLang} />;
      case 'schedule_int': return <ScheduleView lang={currentLang} />;
      case 'notice': return <NoticeView lang={currentLang} />;
      case 'collective': return <CollectiveView lang={currentLang} />;
      case 'display': return <DisplayView lang={currentLang} />;
      case 'integration': return <IntegrationView lang={currentLang} />;
      case 'usage': return <UsageView lang={currentLang} />;
      case 'settings': return <SettingsView />;
      default: return <OverviewView lang={currentLang} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {renderView()}
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
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center justify-between">
            {lang.chartMonthly}
            <button className="text-slate-400 hover:text-blue-600"><RefreshCw className="w-5 h-5" /></button>
          </h3>
          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {[40, 60, 45, 80, 55, 90, 75, 100, 65, 85, 70, 95].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                <div className="relative w-full h-full flex flex-col justify-end">
                  <div 
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-bold"
                  >
                    {Math.round(val * 12.5)} cases
                  </div>
                  <div className="w-full bg-blue-100 rounded-t-xl relative overflow-hidden h-full">
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-xl transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-300" 
                      style={{ height: `${val}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6">{lang.chartTypeDist}</h3>
          <div className="space-y-5">
            {caseTypeDistribution.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-600">{item.type}</span>
                  <span className="text-slate-900">{item.count}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color.replace('bg-', 'bg-')} transition-all duration-1000 shadow-sm`} 
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

function ChairmanView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-indigo-900 border border-indigo-800 p-6 rounded-3xl text-white shadow-xl">
        <div>
          <h2 className="text-2xl font-black mb-2">Welcome, Y.A. Dato&apos; Wan Jeffry Bin Kassim</h2>
          <p className="text-indigo-200 font-medium">You have 4 hearings scheduled today. No pending approvals.</p>
        </div>
        <div className="w-16 h-16 bg-indigo-800 rounded-2xl flex items-center justify-center">
          <Gavel className="w-8 h-8 text-indigo-300" />
        </div>
      </div>
      
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-2">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Today&apos;s Docket (Mahkamah 1)</h3>
          <button className="text-sm font-bold text-blue-600 flex items-center hover:text-blue-700">View Calendar <ChevronRight className="w-4 h-4 ml-1" /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-slate-50 border-y border-slate-100">
              <tr>
                <th className="py-3 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Time</th>
                <th className="py-3 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Case No</th>
                <th className="py-3 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Parties</th>
                <th className="py-3 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Type</th>
                <th className="py-3 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {chairmanCases.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-slate-900">{c.time}</td>
                  <td className="py-4 px-6 text-sm font-mono text-blue-600 font-bold">{c.id}</td>
                  <td className="py-4 px-6 text-sm font-extrabold text-slate-800">{c.title}</td>
                  <td className="py-4 px-6"><span className="px-3 py-1 bg-slate-200 text-slate-700 text-[10px] rounded-lg font-bold uppercase tracking-wider">{c.status}</span></td>
                  <td className="py-4 px-6 text-right"><button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition-colors">Start Session</button></td>
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
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">{lang.filingQueue}</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 flex items-center shadow-md">
          <FilePlus className="w-4 h-4 mr-2" /> New Manual Filing
        </button>
      </div>
      <div className="space-y-4">
        {filingQueue.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">{item.id} - {item.submittedBy}</p>
                <p className="text-xs text-slate-500 font-mono mt-1">{item.date} • {item.type}</p>
              </div>
            </div>
            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg ${
              item.status === 'Approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
            }`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CasesView({ lang }: { lang: { [key: string]: string } }) {
  return <PlaceholderView title={lang.dashCases} icon={Briefcase} />;
}

function ScheduleView({ lang }: { lang: { [key: string]: string } }) {
  return <PlaceholderView title={lang.dashSchedule} icon={Calendar} />;
}

function NoticeView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6">{lang.dashNotice}</h3>
      <div className="space-y-4">
        {mockNotices.map((n, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-slate-100 rounded-2xl hover:shadow-md transition-all gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{n.id}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{n.type}</span>
              </div>
              <p className="font-extrabold text-slate-900">{n.parties}</p>
              <p className="text-sm text-slate-500 font-mono mt-1">Ref: {n.caseNo}</p>
            </div>
            <div className="flex items-center gap-3">
               <span className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg ${
                 n.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 
                 n.status === 'Dispatched' ? 'bg-blue-100 text-blue-800' : 
                 'bg-amber-100 text-amber-800'
               }`}>{n.status}</span>
               <button className="px-4 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-xl text-xs font-bold transition-colors">Action</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectiveView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6">{lang.dashCollective}</h3>
      <div className="space-y-4">
        {mockCAs.map((ca, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-5 border border-slate-100 rounded-2xl hover:border-purple-200 hover:bg-purple-50 transition-all gap-4">
            <div>
              <p className="text-sm font-mono text-purple-600 font-bold mb-1">{ca.id}</p>
              <p className="font-extrabold text-slate-900">{ca.company}</p>
              <p className="text-sm text-slate-500 mt-1 flex items-center pr-4 border-r border-slate-200"><Users2 className="w-4 h-4 mr-2" /> {ca.union}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
               <span className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg ${
                 ca.status === 'Cognizance Granted' ? 'bg-emerald-100 text-emerald-800' : 
                 ca.status === 'Approved' ? 'bg-blue-100 text-blue-800' : 
                 'bg-amber-100 text-amber-800'
               }`}>{ca.status}</span>
               <span className="text-xs font-bold text-slate-400">Submitted: {ca.submitted}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisplayView({ lang }: { lang: { [key: string]: string } }) {
  return <PlaceholderView title={lang.dashDisplay} icon={Monitor} />;
}

function AnalyticsView({ lang }: { lang: { [key: string]: string } }) {
  return <PlaceholderView title={lang.dashAnalytics} icon={PieChart} />;
}

function IntegrationView({ lang }: { lang: { [key: string]: string } }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6 text-slate-300 shadow-xl border border-slate-800">
       <div className="flex justify-between items-center mb-6">
         <h3 className="text-lg font-bold text-white flex items-center"><ServerCrash className="w-5 h-5 mr-3 text-emerald-400" /> System Integration Logs</h3>
         <div className="flex gap-2">
           <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
           <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">Live Sync Active</span>
         </div>
       </div>
       <div className="bg-slate-950 rounded-2xl p-4 font-mono text-xs overflow-hidden border border-slate-800/50">
         {integrationLogs.map((log, i) => (
           <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-800 hover:bg-slate-900 px-2 rounded-lg transition-colors">
              <span className="text-slate-500 w-16">[{log.id}]</span>
              <span className="text-blue-400 font-bold w-24">{log.system}</span>
              <span className="text-indigo-300 w-32">{log.type}</span>
              <span className={`font-bold w-20 ${log.status === 'Success' ? 'text-emerald-400' : 'text-rose-400'}`}>{log.status}</span>
              <span className="text-slate-500 ml-auto">{log.time}</span>
           </div>
         ))}
       </div>
    </div>
  );
}

function UsageView({ lang }: { lang: { [key: string]: string } }) {
  return <PlaceholderView title={lang.dashUsage} icon={Smartphone} />;
}

function SettingsView() {
  return <PlaceholderView title="System Administration" icon={Settings} />;
}

function PlaceholderView({ title, icon: Icon }: { title: string, icon: React.ElementType }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-12 shadow-sm flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-slate-300" />
      </div>
      <h3 className="text-2xl font-extrabold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 font-medium max-w-sm">This dashboard module is currently under active development. More features will be available soon.</p>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: string, icon: React.ElementType, color: string }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm font-bold text-slate-500 mb-1">{title}</p>
        <h4 className="text-3xl font-black text-slate-800">{value}</h4>
      </div>
      <div className={`w-14 h-14 rounded-2xl ${color} bg-opacity-10 flex items-center justify-center`}>
        <Icon className={`w-7 h-7 text-white`} />
      </div>
    </div>
  );
}
