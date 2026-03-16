"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { 
  Scale, LayoutDashboard, Gavel, PieChart, FilePlus, Briefcase, 
  Calendar, Bell, Users, Monitor, ServerCrash, Smartphone, Settings, LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang, dashActiveView, setDashActiveView, loginRole, setLoginRole, setCurrentView } = useAppStore();
  const currentLang = t[lang] || t.en;

  if (pathname.includes('/guest')) return null;

  const handleLogout = () => {
    setLoginRole(null);
    setDashActiveView('overview');
    setCurrentView('portal');
    router.push('/');
  };

  if (pathname.includes('/efiling')) {
    return (
      <aside className="w-[280px] bg-[#1e1b4b] text-indigo-100 flex flex-col flex-shrink-0 hidden md:flex border-r border-[#312e81]">
        <div className="h-24 flex items-center px-6 border-b border-[#312e81] gap-3">
          <img src="/jata-negara.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-sm leading-tight">Mahkamah Perusahaan</span>
            <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-bold">e-Filing Portal</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4">
          <button className="w-full flex items-center px-4 py-3 rounded-[14px] bg-[#312e81] text-white font-bold text-sm shadow-sm"><Briefcase className="w-5 h-5 mr-3" /> My Cases</button>
        </div>
        <div className="p-6 border-t border-[#312e81]">
          <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl border border-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors text-xs font-bold"><LogOut className="w-4 h-4 mr-2" /> Sign Out</button>
        </div>
      </aside>
    );
  }

  // Internal Sidebar
  const demoRole = loginRole || 'officer'; // fallback
  return (
    <aside className="w-[280px] bg-[#0B1120] text-slate-400 flex flex-col flex-shrink-0 hidden md:flex border-r border-[#1E293B]">
      <div className="h-24 flex items-center px-6 border-b border-[#1E293B] gap-3">
        <img src="/jata-negara.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
        <div className="flex flex-col">
          <span className="text-white font-extrabold text-sm leading-tight">Mahkamah Perusahaan</span>
          <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">
            {t.en[demoRole === 'ydp' ? 'roleYDP' : demoRole === 'chairman' ? 'roleChairman' : demoRole === 'admin' ? 'roleAdmin' : 'roleRegistrar']}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4 hide-scrollbar">
        <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Dashboards</div>
        
        <button onClick={() => setDashActiveView('overview')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'overview' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <LayoutDashboard className={`w-5 h-5 mr-3 ${dashActiveView === 'overview' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashOverview}
        </button>
        <button onClick={() => setDashActiveView('chairman')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'chairman' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Gavel className={`w-5 h-5 mr-3 ${dashActiveView === 'chairman' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashChairman}
        </button>
        <button onClick={() => setDashActiveView('analytics')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'analytics' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <PieChart className={`w-5 h-5 mr-3 ${dashActiveView === 'analytics' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashAnalytics}
        </button>
        
        <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-6">Teras (Core)</div>

        <button onClick={() => setDashActiveView('registration')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'registration' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <FilePlus className={`w-5 h-5 mr-3 ${dashActiveView === 'registration' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashRegistration}
        </button>
        <button onClick={() => setDashActiveView('cases')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'cases' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Briefcase className={`w-5 h-5 mr-3 ${dashActiveView === 'cases' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashCases}
        </button>
        <button onClick={() => setDashActiveView('schedule_int')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'schedule_int' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Calendar className={`w-5 h-5 mr-3 ${dashActiveView === 'schedule_int' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashSchedule}
        </button>
        <button onClick={() => setDashActiveView('notice')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'notice' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Bell className={`w-5 h-5 mr-3 ${dashActiveView === 'notice' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashNotice}
        </button>
        <button onClick={() => setDashActiveView('collective')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'collective' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Users className={`w-5 h-5 mr-3 ${dashActiveView === 'collective' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashCollective}
        </button>
        <button onClick={() => setDashActiveView('display')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'display' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Monitor className={`w-5 h-5 mr-3 ${dashActiveView === 'display' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashDisplay}
        </button>

        <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-6">System Admin</div>

        <button onClick={() => setDashActiveView('integration')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'integration' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <ServerCrash className={`w-5 h-5 mr-3 ${dashActiveView === 'integration' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashIntegration}
        </button>
        <button onClick={() => setDashActiveView('usage')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'usage' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Smartphone className={`w-5 h-5 mr-3 ${dashActiveView === 'usage' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashUsage}
        </button>
        <button onClick={() => setDashActiveView('settings')} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'settings' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
          <Settings className={`w-5 h-5 mr-3 ${dashActiveView === 'settings' ? 'text-blue-500' : 'text-slate-500'}`} /> System Admin
        </button>
      </div>
      
      <div className="p-6 border-t border-[#1E293B]">
        <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors text-xs font-bold text-slate-300">
          <LogOut className="w-4 h-4 mr-2" /> {currentLang.logout}
        </button>
      </div>
    </aside>
  );
}
