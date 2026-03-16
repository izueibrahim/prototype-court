"use client";

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Bell, Globe, LogOut } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang, setLang, dashActiveView, loginRole, setLoginRole, setDashActiveView, setCurrentView } = useAppStore();
  const currentLang = t[lang] || t.en;

  const handleLogout = () => {
    setLoginRole(null);
    setDashActiveView('overview');
    setCurrentView('login');
    router.push('/');
  };

  if (pathname.includes('/guest')) return null;

  if (pathname.includes('/efiling')) {
    return (
      <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 flex-shrink-0 shadow-sm transition-colors">
        <h1 className="text-xl font-black text-zinc-900 tracking-tight">External User Workspace</h1>
        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="btn-ghost text-xs uppercase tracking-widest px-3 py-2">
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'BM' : 'EN'}
          </button>
          <div className="w-px h-6 bg-zinc-200"></div>
          <button className="btn-ghost p-2 text-zinc-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
          <div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100 shadow-inner">EU</div>
        </div>
      </header>
    );
  }

  const demoRole = loginRole || 'officer';

  return (
    <header className="h-24 bg-white border-b border-zinc-200 flex items-center justify-between px-10 flex-shrink-0 transition-all">
      <div className="flex items-center">
        <h1 className="text-2xl font-black text-zinc-900 tracking-tight">
          {dashActiveView === 'overview' ? currentLang.dashOverview
          : dashActiveView === 'chairman' ? currentLang.dashChairman
          : dashActiveView === 'analytics' ? currentLang.dashAnalytics
          : dashActiveView === 'registration' ? currentLang.dashRegistration
          : dashActiveView === 'cases' ? currentLang.dashCases
          : dashActiveView === 'schedule_int' ? currentLang.dashSchedule
          : dashActiveView === 'notice' ? currentLang.dashNotice
          : dashActiveView === 'collective' ? currentLang.dashCollective
          : dashActiveView === 'display' ? currentLang.dashDisplay
          : dashActiveView === 'integration' ? currentLang.dashIntegration
          : dashActiveView === 'usage' ? currentLang.dashUsage
          : 'System Administration'}
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="btn-ghost text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2.5 rounded-xl border border-zinc-100 hover:border-blue-200">
          <Globe className="w-4 h-4 mr-2 text-blue-600" />
          {lang === 'en' ? 'Bahasa Melayu' : 'English'}
        </button>
        <div className="w-px h-8 bg-zinc-100"></div>
        <button className="btn-ghost w-11 h-11 p-0 rounded-xl text-zinc-400 hover:text-blue-600 border border-zinc-100 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-sm border border-blue-100 shadow-inner">
          {demoRole === 'ydp' ? 'YP' : demoRole === 'chairman' ? 'CH' : demoRole === 'admin' ? 'AD' : 'RO'}
        </div>
      </div>
    </header>
  );
}
