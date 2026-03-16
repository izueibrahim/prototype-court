"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { 
  LayoutDashboard, Gavel, PieChart, FilePlus, Briefcase, 
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
    setCurrentView('login');
    router.push('/');
  };

  if (pathname.includes('/efiling')) {
    return (
      <aside className="w-[280px] bg-brand-600 text-white flex flex-col flex-shrink-0 hidden md:flex border-r border-brand-700">
        <div className="h-24 flex items-center px-6 border-b border-white/10 gap-3">
          <img src="/jata-negara.png" alt="Logo" className="h-12 w-auto brightness-0 invert" />
          <div className="flex flex-col">
            <span className="text-white font-black text-sm leading-tight">Mahkamah Perusahaan</span>
            <span className="text-[9px] uppercase tracking-widest text-brand-50/60 font-black">e-Filing Portal</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4 scrollbar-hide">
          <button className="w-full flex items-center px-4 py-3 rounded-xl bg-white/10 text-white font-bold text-sm shadow-inner transition-colors border border-white/10">
            <Briefcase className="w-5 h-5 mr-3" /> My Cases
          </button>
        </div>
        <div className="p-6 border-t border-white/10">
          <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white transition-all text-xs font-bold active:scale-95">
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </button>
        </div>
      </aside>
    );
  }

  const demoRole = loginRole || 'officer';
  return (
    <aside className="w-[280px] bg-white text-zinc-600 flex flex-col flex-shrink-0 hidden md:flex border-r border-zinc-200 transition-colors">
      <div className="h-24 flex items-center px-6 border-b border-zinc-200 gap-3">
        <img src="/jata-negara.png" alt="Logo" className="h-12 w-auto object-contain" />
        <div className="flex flex-col">
          <span className="text-zinc-900 font-black text-sm leading-tight tracking-tight">Mahkamah Perusahaan</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-blue-600 font-black">
            {t.en[demoRole === 'ydp' ? 'roleYDP' : demoRole === 'chairman' ? 'roleChairman' : demoRole === 'admin' ? 'roleAdmin' : 'roleRegistrar']}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-8 space-y-1.5 px-4 hide-scrollbar">
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Dashboards</div>
        
        <NavBtn active={dashActiveView === 'overview'} onClick={() => setDashActiveView('overview')} icon={LayoutDashboard} label={currentLang.dashOverview} />
        <NavBtn active={dashActiveView === 'chairman'} onClick={() => setDashActiveView('chairman')} icon={Gavel} label={currentLang.dashChairman} />
        <NavBtn active={dashActiveView === 'analytics'} onClick={() => setDashActiveView('analytics')} icon={PieChart} label={currentLang.dashAnalytics} />
        
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mt-8 mb-2">Teras (Core)</div>

        <NavBtn active={dashActiveView === 'registration'} onClick={() => setDashActiveView('registration')} icon={FilePlus} label={currentLang.dashRegistration} />
        <NavBtn active={dashActiveView === 'cases'} onClick={() => setDashActiveView('cases')} icon={Briefcase} label={currentLang.dashCases} />
        <NavBtn active={dashActiveView === 'schedule_int'} onClick={() => setDashActiveView('schedule_int')} icon={Calendar} label={currentLang.dashSchedule} />
        <NavBtn active={dashActiveView === 'notice'} onClick={() => setDashActiveView('notice')} icon={Bell} label={currentLang.dashNotice} />
        <NavBtn active={dashActiveView === 'collective'} onClick={() => setDashActiveView('collective')} icon={Users} label={currentLang.dashCollective} />
        <NavBtn active={dashActiveView === 'display'} onClick={() => setDashActiveView('display')} icon={Monitor} label={currentLang.dashDisplay} />

        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mt-8 mb-2">System Admin</div>

        <NavBtn active={dashActiveView === 'integration'} onClick={() => setDashActiveView('integration')} icon={ServerCrash} label={currentLang.dashIntegration} />
        <NavBtn active={dashActiveView === 'usage'} onClick={() => setDashActiveView('usage')} icon={Smartphone} label={currentLang.dashUsage} />
        <NavBtn active={dashActiveView === 'settings'} onClick={() => setDashActiveView('settings')} icon={Settings} label="System Admin" />
      </div>
      
      <div className="p-6 border-t border-zinc-200">
        <button onClick={handleLogout} className="btn-secondary w-full py-3 text-xs uppercase tracking-widest text-zinc-500 hover:text-red-600 hover:bg-red-50 hover:border-red-100">
          <LogOut className="w-4 h-4 mr-2" /> {currentLang.logout}
        </button>
      </div>
    </aside>
  );
}

function NavBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: any; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-3 py-2.5 rounded-xl transition-all font-bold text-sm border ${
        active
          ? 'bg-blue-50 text-blue-700 border-blue-100 shadow-sm'
          : 'text-zinc-600 border-transparent hover:bg-zinc-50 hover:text-zinc-900'
      }`}
    >
      <Icon className={`w-4 h-4 mr-3 flex-shrink-0 ${active ? 'text-blue-600' : 'text-zinc-400 transition-colors'}`} />
      {label}
    </button>
  );
}
