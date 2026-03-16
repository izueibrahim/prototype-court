"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Bell, Globe } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, dashActiveView, loginRole } = useAppStore();
  const currentLang = t[lang] || t.en;

  if (pathname.includes('/guest')) return null;

  if (pathname.includes('/efiling')) {
    return (
      <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">External User Workspace</h1>
        <div className="flex items-center gap-5">
          <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors gap-1.5 uppercase">
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'ms' : 'en'}
          </button>
          <div className="w-px h-5 bg-slate-200"></div>
          <button className="text-slate-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm border-2 border-white shadow-sm">EU</div>
        </div>
      </header>
    );
  }

  const demoRole = loginRole || 'officer'; // fallback

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
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
      <div className="flex items-center gap-5">
        <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors gap-1.5 uppercase">
          <Globe className="w-3.5 h-3.5" />
          {lang === 'en' ? 'ms' : 'en'}
        </button>
        <div className="w-px h-5 bg-slate-200"></div>
        <button className="text-slate-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-sm border-2 border-white shadow-sm">
          {demoRole === 'ydp' ? 'YP' : demoRole === 'chairman' ? 'CH' : demoRole === 'admin' ? 'AD' : 'RO'}
        </div>
      </div>
    </header>
  );
}
