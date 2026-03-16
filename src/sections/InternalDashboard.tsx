"use client";

import React, { useState } from 'react';
import { 
  Search, Calendar, Scale, FileText, Globe, Menu, X, 
  ChevronRight, ChevronDown, ChevronLeft, Gavel, FileSignature, MessageSquare, 
  Building2, LogIn, MapPin, Clock, Key, Bell, UploadCloud, 
  FilePlus, Briefcase, Users, Monitor, BarChart, Settings, 
  Landmark, BookOpen, HandHeart, List, Grid, Phone, Mail, Shield, 
  ShieldAlert, FileWarning, MoveHorizontal, FoldHorizontal, 
  Contrast, Droplet, Underline, MousePointer2, AlignJustify, 
  Volume2, Mic, Download, ArrowUpRight, ArrowLeft, HelpCircle, 
  ShieldCheck, UserCircle, Video, Lock, Fingerprint, Filter,
  SlidersHorizontal, FileSearch, LayoutDashboard, LogOut, Activity, Users2,
  PieChart, ServerCrash, Smartphone, Wrench, RefreshCw, CheckCircle2, AlertCircle,
  KanbanSquare, Tv, ArrowDown, Check, Upload, Trash2, File as FileIcon, MoreVertical,
  Save, FileCheck, ClipboardList
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { 
    chYears, ch1, ch2, ch3, ch4Pts, ch4Vals, ch5, ch7SchedPts, ch7CompPts, 
    ch7Comp, ch8, ch10, upcomingHearings, latestJudgments, mockSearchResults,
    caseTypeDistribution, chairmanWorkload, filingQueue, chairmanCases,
    integrationLogs, mockNotices, mockCAs, mockAnalyticsStats, mockUsageLogs,
    mockSystemSettings
} from '@/lib/data';

export default function InternalDashboard() {
  const { 
    lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView,
    dashActiveView, setDashActiveView, dashMobileMenuOpen, setDashMobileMenuOpen
  } = useAppStore();

  const currentLang = t[lang];
  const isHighContrast = wcagStates.highContrast;

  // Local dashboard state
  const [filterYear, setFilterYear] = useState('2026');
  const [filterLocation, setFilterLocation] = useState('All Locations');
  const [filterCaseType, setFilterCaseType] = useState('All Types');
  const [filterChairman, setFilterChairman] = useState('All Chairmen');
  const [filterStatus, setFilterStatus] = useState('All Statuses');

  const [internalActionView, setInternalActionView] = useState<string | null>(null);
  const [selectedInternalItem, setSelectedInternalItem] = useState<any>(null);

  const handleLogout = () => {
    setLoginRole(null);
    setDashActiveView('overview');
    setDashMobileMenuOpen(false);
    setCurrentView('login');
  };

  const demoRole = loginRole || 'officer';

  const navItems = [
    { id: 'overview', icon: LayoutDashboard, label: currentLang.dashOverview, roles: ['admin', 'ydp', 'chairman', 'registrar'] },
    { id: 'chairman', icon: Gavel, label: currentLang.dashChairman, roles: ['admin', 'chairman'] },
    { id: 'analytics', icon: PieChart, label: currentLang.dashAnalytics, roles: ['admin', 'ydp'] },
    { id: 'registration', icon: FilePlus, label: currentLang.dashRegistration, roles: ['admin', 'registrar', 'officer'] },
    { id: 'cases', icon: KanbanSquare, label: currentLang.dashCases, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer'] },
    { id: 'schedule_int', icon: Calendar, label: currentLang.dashSchedule, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer'] },
    { id: 'notice', icon: Bell, label: currentLang.dashNotice, roles: ['admin', 'registrar', 'officer'] },
    { id: 'collective', icon: Users, label: currentLang.dashCollective, roles: ['admin', 'registrar', 'officer', 'ca-unit'] },
    { id: 'display', icon: Tv, label: currentLang.dashDisplay, roles: ['admin', 'ydp'] },
    { id: 'integration', icon: ServerCrash, label: currentLang.dashIntegration, roles: ['admin', 'ydp'] },
    { id: 'usage', icon: Activity, label: currentLang.dashUsage, roles: ['admin', 'ydp'] },
    { id: 'settings', icon: Settings, label: currentLang.dashAdmin, roles: ['admin', 'ydp'] },
  ];

  const filteredNavItems = navItems.filter(item => item.roles.includes(demoRole));

  return (
    <div className={`flex h-screen overflow-hidden ${isHighContrast ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 md:w-72 transition-transform duration-300 transform ${dashMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 ${isHighContrast ? 'bg-black border-r border-white' : 'bg-white border-r border-slate-200'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <img src="/jata-negara.png" alt="Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className={`font-black text-xs leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>Mahkamah Perusahaan</span>
              <span className={`font-bold text-[9px] leading-tight ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>Industrial Court</span>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 space-y-1 py-4 custom-scrollbar">
            {filteredNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setDashActiveView(item.id as any); setDashMobileMenuOpen(false); }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${dashActiveView === item.id 
                  ? (isHighContrast ? 'bg-white text-black' : 'bg-blue-700 text-white shadow-lg shadow-blue-700/20') 
                  : (isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900')}`}
              >
                <item.icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${dashActiveView === item.id ? 'text-current' : 'text-zinc-400'}`} />
                <span className="text-sm font-bold tracking-tight">{item.label}</span>
                {dashActiveView === item.id && <div className={`ml-auto w-1.5 h-1.5 rounded-full ${isHighContrast ? 'bg-black' : 'bg-white'}`}></div>}
              </button>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button 
              onClick={handleLogout}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${isHighContrast ? 'border border-white text-white hover:bg-zinc-900' : 'bg-zinc-100 text-zinc-600 hover:bg-rose-50 hover:text-rose-600'}`}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-sm font-bold">{currentLang.logout}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-inherit relative h-full">
        {/* Top Header */}
        <header className={`h-16 md:h-20 flex items-center justify-between px-4 md:px-8 border-b relative z-30 transition-colors ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 shadow-sm'}`}>
          <div className="flex items-center gap-4">
            <button onClick={() => setDashMobileMenuOpen(!dashMobileMenuOpen)} className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-600"><Menu className="w-6 h-6" /></button>
            <h1 className="text-lg md:text-xl font-black tracking-tight truncate max-w-[200px] md:max-w-none">
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
          <div className="flex items-center gap-3 md:gap-5">
            <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="hidden sm:block text-xs font-extrabold text-slate-400 hover:text-blue-600 transition-colors uppercase">{lang === 'en' ? 'MS' : 'EN'}</button>
            <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
            <button className="text-slate-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs md:text-sm border-2 border-white shadow-sm">
                {demoRole === 'ydp' ? 'YP' : demoRole === 'chairman' ? 'CH' : demoRole === 'admin' ? 'AD' : 'RO'}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 hide-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* ---------------- OVERVIEW ---------------- */}
            {dashActiveView === 'overview' && (
              <>
                <div className="bg-white p-4 mb-6 rounded-[20px] border border-slate-200 shadow-sm flex flex-wrap gap-3 items-center relative z-20">
                  <div className="flex items-center gap-2 text-slate-600 font-bold text-sm px-2"><Filter className="w-4 h-4" /> Advanced Reporting Filters:</div>
                  <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Years (2019-2026)</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option><option>2020</option><option>2019</option></select>
                  <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Court Locations</option><option>Kuala Lumpur</option><option>Selangor</option><option>Johor</option><option>Penang</option><option>Perak</option></select>
                  <select value={filterCaseType} onChange={e => setFilterCaseType(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Case Types</option><option>Unfair Dismissal</option><option>Constructive Dismissal</option><option>Collective Agreement</option><option>Trade Dispute</option></select>
                  <select value={filterChairman} onChange={e => setFilterChairman(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Chairmen</option><option>Y.A. Dato' Wan Jeffry</option><option>Y.A. Tuan Amrik Singh</option><option>Y.A. Tuan Zulhelmy</option></select>
                  <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Statuses</option><option>Registered</option><option>Mention</option><option>Hearing</option><option>Award Pending</option><option>Closed</option></select>
                  <button className="ml-auto px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 shadow-md transition-colors">Apply Filters</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <div><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">{currentLang.kpiActive}</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">127</h3></div>
                      <div className="p-2.5 bg-blue-50 rounded-[14px] text-blue-600"><Briefcase className="w-5 h-5 md:w-6 md:h-6" /></div>
                    </div>
                    <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md"><Activity className="w-3 h-3 mr-1" /> Trending up 5%</div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    <div className="flex justify-between items-start mb-4">
                      <div><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Avg Resolution Time</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">68 <span className="text-lg md:text-xl text-slate-400">days</span></h3></div>
                      <div className="p-2.5 bg-indigo-50 rounded-[14px] text-indigo-600"><Clock className="w-5 h-5 md:w-6 md:h-6" /></div>
                    </div>
                    <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md"><ArrowDown className="w-3 h-3 mr-1" /> 5 days faster</div>
                  </div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] col-span-1 md:col-span-2 flex items-center justify-between overflow-hidden relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-50 to-transparent z-0"></div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">{currentLang.kpiResolution}</p>
                      <div className="flex items-baseline gap-3"><h3 className="text-3xl md:text-4xl font-black text-slate-900">67%</h3><span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md">+3% YoY</span></div>
                      <p className="text-xs font-bold text-slate-400 mt-2 md:mt-3">Target: 80% resolution within 90 days</p>
                    </div>
                    <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center z-10">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10%" fill="transparent" className="text-slate-100" />
                        <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10%" fill="transparent" strokeDasharray="250%" strokeDashoffset="82.5%" className="text-blue-600 transition-all duration-1000 ease-out" strokeLinecap="round" />
                      </svg>
                      <span className="absolute text-base md:text-lg font-black text-slate-800">67%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <h2 className="text-xl font-extrabold text-slate-900 flex items-center"><PieChart className="w-5 h-5 mr-2 text-blue-600" /> Advanced Analytics & Reporting</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* 1. Reg vs Resolved */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">1. Reg vs Resolved (Unfair Dismissal)</h3>
                    <div className="relative h-48 mt-auto border-b border-slate-200">
                      <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0"><div className="border-b border-slate-100 w-full h-0"></div><div className="border-b border-slate-100 w-full h-0"></div><div className="border-b border-slate-100 w-full h-0"></div></div>
                      <div className="relative z-10 flex items-end gap-2 h-full justify-between px-2 pb-0">
                        {ch1.map((d, i) => (
                          <div key={i} className="flex-1 flex justify-center gap-1 items-end h-full">
                            <div className="w-full max-w-[12px] bg-blue-200 rounded-t-sm relative group" style={{ height: `${(d.rg / 1400) * 100}%` }}><div className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{d.rg}</div></div>
                            <div className="w-full max-w-[12px] bg-blue-600 rounded-t-sm relative group" style={{ height: `${(d.rs / 1400) * 100}%` }}><div className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{d.rs}</div></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-2 h-2 bg-blue-200 mr-1.5"></span> Registered</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-blue-600 mr-1.5"></span> Resolved</div>
                    </div>
                  </div>

                  {/* 2. Types of UD Resolved */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">2. Types of UD Resolved</h3>
                    <div className="relative h-48 mt-auto border-b border-slate-200">
                      <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
                        {ch2.map((d, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end gap-[1px] items-center h-full group relative">
                            <div className="hidden group-hover:flex absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20 w-max">{d.d + d.c + d.r + d.t} Cases</div>
                            <div className="w-full max-w-[16px] bg-indigo-200" style={{ height: `${(d.t / 1200) * 100}%` }}></div>
                            <div className="w-full max-w-[16px] bg-indigo-400" style={{ height: `${(d.r / 1200) * 100}%` }}></div>
                            <div className="w-full max-w-[16px] bg-indigo-600" style={{ height: `${(d.c / 1200) * 100}%` }}></div>
                            <div className="w-full max-w-[16px] bg-indigo-800 rounded-t-sm" style={{ height: `${(d.d / 1200) * 100}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex flex-wrap items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-2 h-2 bg-indigo-800 mr-1"></span> Direct</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-indigo-600 mr-1"></span> Constructive</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-indigo-400 mr-1"></span> Retrenchment</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-indigo-200 mr-1"></span> Termination</div>
                    </div>
                  </div>

                  {/* 3. Reg by Category */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">3. Reg. Categories (Other than UD)</h3>
                    <div className="relative h-48 mt-auto border-b border-slate-200">
                      <div className="relative z-10 flex items-end gap-2 h-full justify-between px-2 pb-0">
                        {ch3.map((d, i) => (
                          <div key={i} className="flex-1 flex justify-center gap-[2px] items-end h-full">
                            <div className="w-full max-w-[8px] bg-purple-400 rounded-t-sm" style={{ height: `${(d.ca / 200) * 100}%` }}></div>
                            <div className="w-full max-w-[8px] bg-emerald-400 rounded-t-sm" style={{ height: `${(d.td / 200) * 100}%` }}></div>
                            <div className="w-full max-w-[8px] bg-amber-400 rounded-t-sm" style={{ height: `${(d.ur / 200) * 100}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-2 h-2 bg-purple-400 mr-1"></span> CA</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-emerald-400 mr-1"></span> Trade Dispute</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-amber-400 mr-1"></span> Union Rec.</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* 4. Avg Case Duration */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">4. Avg Duration (Months)</h3>
                    <div className="relative h-48 mt-auto">
                      <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0 text-[9px] text-slate-300 font-bold items-start">
                        <span>11m</span><span>10m</span><span>9m</span><span>8m</span>
                      </div>
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible ml-4">
                        <polyline fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={ch4Pts} />
                        {ch4Vals.map((v, i) => <circle key={i} cx={i * (100 / 7)} cy={50 - ((v - 8) / 3 * 50)} r="1.5" fill="#0ea5e9" />)}
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2 px-2 ml-4">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                  </div>

                  {/* 5. Location Dist */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">5. Case Dist by Location</h3>
                    <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar my-auto py-2">
                      {ch5.map((c, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-[10px] font-bold mb-1">
                            <span className="text-slate-700">{c.loc}</span><span className="text-slate-500">{c.val}</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-blue-500 h-full rounded-full" style={{ width: `${(c.val / 350) * 100}%` }}></div></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 7. Hearing Utilisation */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">7. Hearing Utilisation</h3>
                    <div className="relative h-48 mt-auto">
                      <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0 text-[9px] text-slate-300 font-bold items-start">
                        <span>1.6k</span><span>1.2k</span><span>.9k</span>
                      </div>
                      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible ml-4">
                        <polyline fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2,2" points={ch7SchedPts} />
                        <polyline fill="none" stroke="#2563eb" strokeWidth="2" points={ch7CompPts} />
                        {ch7Comp.map((v, i) => <circle key={i} cx={i * (100 / 7)} cy={50 - ((v - 900) / 700 * 50)} r="1.5" fill="#2563eb" />)}
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2 px-2 ml-4">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-4 border-b-2 border-dashed border-slate-400 mr-1.5"></span> Scheduled</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded mr-1.5"></span> Completed</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* 8. Pleading Filing */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">8. Pleading Filing Performance</h3>
                    <div className="relative h-48 mt-auto border-b border-slate-200">
                      <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
                        {ch8.map((d, i) => (
                          <div key={i} className="flex-1 flex flex-col justify-end gap-[1px] items-center h-full group relative">
                            <div className="hidden group-hover:flex absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20 w-max">{d.s1 + d.s2 + d.s3} Docs</div>
                            <div className="w-full max-w-[16px] bg-rose-200" style={{ height: `${(d.s3 / 3000) * 100}%` }}></div>
                            <div className="w-full max-w-[16px] bg-rose-400" style={{ height: `${(d.s2 / 3000) * 100}%` }}></div>
                            <div className="w-full max-w-[16px] bg-rose-600 rounded-t-sm" style={{ height: `${(d.s1 / 3000) * 100}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex flex-wrap items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-2 h-2 bg-rose-600 mr-1"></span> SOC</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-rose-400 mr-1"></span> SIR</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-rose-200 mr-1"></span> Rejoinder</div>
                    </div>
                  </div>

                  {/* 9. Award Outcome */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col items-center">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4 w-full">9. Award Decision Outcome</h3>
                    <svg viewBox="0 0 32 32" className="w-40 h-40 transform -rotate-90 rounded-full mt-2">
                      <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#ef4444" strokeWidth="32" strokeDasharray="32.8 100" />
                      <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#3b82f6" strokeWidth="32" strokeDasharray="29.7 100" strokeDashoffset="-32.8" />
                      <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="32" strokeDasharray="25 100" strokeDashoffset="-62.5" />
                      <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#f59e0b" strokeWidth="32" strokeDasharray="12.5 100" strokeDashoffset="-87.5" />
                    </svg>
                    <div className="grid grid-cols-2 gap-2 mt-auto w-full text-[9px] font-bold text-slate-600">
                      <div className="flex items-center"><span className="w-2 h-2 bg-red-500 mr-2"></span> Dismissed (21)</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-blue-500 mr-2"></span> Reinstatement (19)</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-emerald-500 mr-2"></span> Compensation (16)</div>
                      <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 mr-2"></span> Settlement (8)</div>
                    </div>
                  </div>

                  {/* 10. Backlog Case Monitoring */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">10. Backlog Monitoring</h3>
                    <div className="relative h-48 mt-auto border-b border-slate-200">
                      <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
                        {ch10.map((v, i) => (
                          <div key={i} className="flex-1 flex justify-center items-end h-full group relative">
                            <div className="hidden group-hover:block absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{v}</div>
                            <div className="w-full max-w-[16px] bg-amber-500 rounded-t-sm" style={{ height: `${(v / 100) * 100}%` }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
                    <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
                      <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 mr-1.5"></span> Backlogged Cases</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 leading-tight">Historical Performance Comparison</h2>
                      <p className="text-slate-500 font-bold text-sm mt-1">Comparative analysis of case throughput (2019-2026)</p>
                    </div>
                  </div>
                  <div className="relative h-64 border-b border-slate-200 flex items-end justify-between px-4 pb-0 gap-2 md:gap-4 overflow-x-auto custom-scrollbar">
                    {chYears.map((y, i) => (
                      <div key={y} className="flex-1 min-w-[50px] flex items-end justify-center gap-1 h-full group relative">
                        <div className="hidden group-hover:block absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded z-20">Total: {ch1[i].rg + ch1[i].rs}</div>
                        <div className="w-full bg-blue-100 rounded-t-md" style={{ height: `${(ch1[i].rg / 1400) * 100}%` }}></div>
                        <div className="w-full bg-blue-600 rounded-t-md" style={{ height: `${(ch1[i].rs / 1400) * 100}%` }}></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 px-4">{chYears.map(y => <span key={y} className="flex-1 text-center text-xs font-black text-slate-400">{y}</span>)}</div>
                </div>
              </>
            )}
            {/* ---------------- M8 ANALYTICS ---------------- */}
            {dashActiveView === 'analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Total Awards</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">8,421</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Searches Today</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">924</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Success Rate</p><h3 className="text-3xl md:text-4xl font-black text-emerald-600">92%</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Published (2026)</p><h3 className="text-3xl md:text-4xl font-black text-blue-600">312</h3></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                    <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-6 md:mb-8">Search Volume (30 Days)</h3>
                    <div className="relative h-48 mt-4 border-b border-slate-200">
                      <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0">
                        <div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div>
                      </div>
                      <div className="relative z-10 flex items-end gap-1 md:gap-2 h-full justify-between px-2 pb-0">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div key={i} className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors rounded-t-md" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col">
                    <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-6">Top Search Keywords</h3>
                    <div className="space-y-4 flex-1">
                      {[{ k: 'unfair dismissal', s: 412, w: 100 }, { k: 'constructive dismissal', s: 238, w: 60 }, { k: 'collective agreement', s: 179, w: 45 }, { k: 'trade dispute', s: 95, w: 25 }].map((kw, i) => (
                        <div key={i} className="relative py-2">
                          <div className="flex justify-between items-center relative z-10"><span className="text-xs md:text-sm font-bold text-slate-800">{kw.k}</span><span className="font-mono text-xs font-bold text-slate-500">{kw.s}</span></div>
                          <div className="absolute left-0 bottom-0 h-1.5 bg-blue-100 rounded-full w-full mt-1"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${kw.w}%` }}></div></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M9 REGISTRATION ---------------- */}
            {dashActiveView === 'registration' && !internalActionView && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Registration Queue</h3>
                  <button className="flex justify-center items-center px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 shadow-md"><RefreshCw className="w-4 h-4 mr-2" /> Sync JPPM</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Source</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Parties</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Received Date</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Action</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {filingQueue.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4"><span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-lg uppercase">eFiling</span></td><td className="py-4 px-4 text-xs md:text-sm font-extrabold text-slate-900">{item.submittedBy} <span className="text-slate-400 mx-1">v</span> Company XYZ</td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{item.date}</td><td className="py-4 px-4 text-right"><button onClick={() => { setSelectedInternalItem(item); setInternalActionView('review_filing'); }} className="px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-sm">Review & Register</button></td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {dashActiveView === 'registration' && internalActionView === 'review_filing' && selectedInternalItem && (
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Filing Review: {selectedInternalItem.id}</h2>
                    <p className="text-sm font-semibold text-slate-500">Validate documents and assign official case number.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Submitted By</h4>
                      <p className="text-base font-extrabold text-slate-900">{selectedInternalItem.submittedBy}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Dispute Type</h4>
                      <p className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg inline-flex">{selectedInternalItem.type}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Attached Documents</h4>
                      <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                        <div className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-blue-600" />
                          <div><p className="text-sm font-bold text-slate-900">JPPM_Referral.pdf</p><p className="text-[10px] font-semibold text-slate-500">2.4 MB</p></div>
                        </div>
                        <button className="text-blue-600 text-sm font-bold hover:underline">View</button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center"><FileCheck className="w-5 h-5 mr-2 text-emerald-500" /> Registrar Validation</h3>
                      <div className="space-y-4 mb-6">
                        <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">Parties information is complete</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">JPPM reference is valid</span></label>
                        <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">No duplicate cases found</span></label>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Assign Case Number</label>
                        <input type="text" defaultValue="1/1-1555/26" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-mono font-bold focus:ring-2 focus:ring-blue-500 outline-none" />
                      </div>
                    </div>
                    <div className="pt-6">
                      <button onClick={() => setInternalActionView(null)} className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-md">Register & Forward for Allocation</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M10 CASE MANAGEMENT ---------------- */}
            {dashActiveView === 'cases' && !internalActionView && (
              <div className="flex flex-col h-[calc(100vh-12rem)] min-h-[500px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Active Cases Kanban</h3>
                    {demoRole === 'ydp' && (
                      <button onClick={() => setInternalActionView('allocate_case')} className="px-4 py-2 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg hover:bg-amber-200 flex items-center border border-amber-200 shadow-sm animate-pulse">
                        <ClipboardList className="w-4 h-4 mr-2" /> 3 Pending Allocation
                      </button>
                    )}
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder="Search case..." className="text-sm font-semibold pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64" />
                    </div>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 flex items-center flex-shrink-0"><Filter className="w-4 h-4 md:mr-2" /><span className="hidden md:inline">Filter</span></button>
                  </div>
                </div>
                <div className="flex-1 flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
                  {['Registered', 'Allocation', 'Mention/Hearing', 'Award Pending'].map((stage, i) => (
                    <div key={i} className="w-72 md:w-80 flex-shrink-0 flex flex-col bg-slate-100/50 rounded-[24px] border border-slate-200 p-3 md:p-4 snap-center">
                      <div className="mb-4 font-extrabold text-xs md:text-sm text-slate-800 flex justify-between items-center px-2">
                        {stage} <span className="bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-[10px] md:text-xs">{i === 3 ? 1 : 3}</span>
                      </div>
                      <div className="flex-1 space-y-3 md:space-y-4 overflow-y-auto hide-scrollbar">
                        {chairmanCases.slice(0, i === 3 ? 1 : 3).map((c, j) => (
                          <div key={j} onClick={() => { setSelectedInternalItem(c); setInternalActionView('case_detail'); }} className="bg-white p-4 md:p-5 rounded-[16px] border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-3">
                              <p className="text-[10px] md:text-xs font-mono font-bold text-slate-500 group-hover:text-blue-600 transition-colors">{c.id}</p>
                              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase">{c.status}</span>
                            </div>
                            <p className="text-xs md:text-sm font-extrabold text-slate-900 leading-tight mb-4">{c.title}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {c.date}</span>
                              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] md:text-[10px] font-bold ring-2 ring-white">CH</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {dashActiveView === 'cases' && internalActionView === 'allocate_case' && (
              <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">YDP Case Allocation Panel</h2>
                    <p className="text-sm font-semibold text-slate-500">Review system recommendations and assign to Chairmen.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                  {/* Pending List */}
                  <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-5 border-b border-slate-100 bg-slate-50">
                      <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Pending Allocation (3)</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-3 space-y-3">
                      {['1/1-1555/26', '2/2-1556/26', '4/4-1557/26'].map((id, idx) => (
                        <div key={idx} onClick={() => setSelectedInternalItem({ id, title: 'New Registration Dispute', type: 'Unfair Dismissal' })} className={`p-4 rounded-xl border cursor-pointer transition-colors ${selectedInternalItem?.id === id ? 'bg-blue-50 border-blue-300 shadow-sm' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
                          <p className="text-xs font-mono font-bold text-blue-600 mb-1">{id}</p>
                          <p className="text-sm font-extrabold text-slate-900 line-clamp-1">New Registration Dispute</p>
                          <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Unfair Dismissal</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details & Assignment */}
                  <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col overflow-y-auto">
                    {selectedInternalItem?.type ? (
                      <>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-2">{selectedInternalItem.id}</h3>
                        <p className="text-sm font-bold text-slate-500 mb-8">{selectedInternalItem.title} &bull; {selectedInternalItem.type}</p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-[20px] p-6 mb-8 relative overflow-hidden">
                          <div className="absolute right-0 top-0 opacity-10"><Activity className="w-32 h-32" /></div>
                          <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">System Recommendation</h4>
                          <p className="text-lg font-black text-emerald-900">Y.A. Dato' Wan Jeffry Bin Kassim</p>
                          <p className="text-sm font-semibold text-emerald-700 mt-1">Mahkamah 1 &bull; Lowest active workload (28 cases) &bull; Specializes in Unfair Dismissal</p>
                        </div>

                        <h4 className="text-sm font-extrabold text-slate-900 mb-4">Current Chairman Workloads</h4>
                        <div className="space-y-4 mb-8">
                          {chairmanWorkload.map((ch, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs font-bold mb-1"><span className="text-slate-700">{ch.name}</span><span className="text-slate-500">{ch.cases} cases</span></div>
                              <div className="w-full bg-slate-100 rounded-full h-2"><div className={`${ch.color} h-full rounded-full`} style={{ width: `${(ch.cases / 50) * 100}%` }}></div></div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto border-t border-slate-100 pt-6">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Manual Assignment</label>
                          <div className="flex gap-4">
                            <select className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none">
                              <option>Y.A. Dato' Wan Jeffry Bin Kassim (Recommended)</option>
                              <option>Y.A. Puan Rusita Binti Md Lazim</option>
                              <option>Y.A. Tuan Amrik Singh</option>
                            </select>
                            <button onClick={() => setInternalActionView(null)} className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md">Confirm Allocation</button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-slate-400">
                        <ClipboardList className="w-16 h-16 mb-4 opacity-50" />
                        <p className="text-base font-semibold">Select a case from the queue to allocate.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {dashActiveView === 'cases' && internalActionView === 'case_detail' && selectedInternalItem && (
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex items-center justify-between bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                    <div>
                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">{selectedInternalItem.title}</h2>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-mono font-bold text-blue-600">{selectedInternalItem.id}</span>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">{selectedInternalItem.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200">Court Schedule</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-sm">Issue Notice</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                      <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-6 border-b border-slate-100 pb-4">Case History & Timeline</h3>
                      <div className="relative pl-4 border-l-2 border-blue-100 space-y-8">
                        <div className="relative">
                          <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
                          <h4 className="text-sm font-extrabold text-slate-900">Registered</h4>
                          <p className="text-xs font-semibold text-slate-500 mt-1">10 Jan 2026</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
                          <h4 className="text-sm font-extrabold text-slate-900">Allocated to YA Dato' Wan Jeffry</h4>
                          <p className="text-xs font-semibold text-slate-500 mt-1">12 Jan 2026</p>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center ring-4 ring-white"><div className="w-2 h-2 rounded-full bg-amber-500"></div></div>
                          <h4 className="text-sm font-extrabold text-amber-600">Active Stage: {selectedInternalItem.status}</h4>
                          <p className="text-xs font-semibold text-slate-500 mt-1">Pending next scheduled event</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4">Parties</h3>
                      <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Claimant</p>
                          <p className="text-sm font-bold text-slate-900">Tay Hwee Lan</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Respondent</p>
                          <p className="text-sm font-bold text-slate-900">Healthy Vision Sdn Bhd</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4">Case Documents</h3>
                      <div className="space-y-2">
                        <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
                          <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Statement of Case</div>
                          <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </button>
                        <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
                          <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Statement in Reply</div>
                          <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M6 SCHEDULE INTERNAL ---------------- */}
            {dashActiveView === 'schedule_int' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Master Court Calendar</h3>
                  <button className="text-xs md:text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-md flex items-center justify-center"><Calendar className="w-4 h-4 mr-2" /> Schedule</button>
                </div>
                <div className="border border-slate-200 rounded-[20px] overflow-hidden bg-slate-50 overflow-x-auto">
                  <div className="min-w-[600px]">
                    <div className="grid grid-cols-5 bg-slate-100 border-b border-slate-200 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest divide-x divide-slate-200">
                      {['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13'].map(d => <div key={d} className="p-3 md:p-4 text-center">{d}</div>)}
                    </div>
                    <div className="grid grid-cols-5 min-h-[400px] divide-x divide-slate-200 bg-white">
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3 bg-blue-50/30">
                        {chairmanCases.slice(0, 2).map((c, i) => (
                          <div key={i} className="p-2 md:p-3 bg-white border border-blue-200 shadow-sm rounded-xl cursor-pointer hover:border-blue-500 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                            <span className="text-[10px] md:text-xs font-black text-slate-900 block mb-1">09:00 AM</span>
                            <span className="text-[9px] md:text-[10px] font-bold text-slate-500 block leading-tight">{c.id}</span>
                            <span className="text-[9px] md:text-[10px] font-bold text-blue-700 bg-blue-50 mt-2 inline-block px-1.5 rounded">{c.status}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M3 NOTICE ---------------- */}
            {dashActiveView === 'notice' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8"><h3 className="text-lg md:text-xl font-extrabold text-slate-900">Dispatch Notices</h3><button className="text-xs md:text-sm font-bold bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl shadow-md">Generate Notice</button></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Notice ID</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Notice Type</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Related Case</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Status</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {mockNotices.map((n, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-slate-900">{n.id}</td><td className="py-4 px-4 text-xs font-bold text-slate-700">{n.type}</td><td className="py-4 px-4"><span className="text-xs font-bold text-blue-600 block">{n.caseNo}</span><span className="text-[10px] font-semibold text-slate-500">{n.parties}</span></td><td className="py-4 px-4 text-right"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${n.status === 'Delivered' || n.status === 'Dispatched' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{n.status}</span></td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------- M11 COLLECTIVE ---------------- */}
            {dashActiveView === 'collective' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8"><h3 className="text-lg md:text-xl font-extrabold text-slate-900">Collective Agreements</h3><button className="text-xs md:text-sm font-bold bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl shadow-md">Register CA</button></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">CA Number</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Parties</th><th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Submitted</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Status</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {mockCAs.map((ca, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-blue-600">{ca.id}</td><td className="py-4 px-4"><span className="text-xs font-bold text-slate-800 block">{ca.union}</span><span className="text-[10px] font-semibold text-slate-500 block mt-0.5">v {ca.company}</span></td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{ca.submitted}</td><td className="py-4 px-4 text-right"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${ca.status.includes('Approved') || ca.status.includes('Granted') ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>{ca.status}</span></td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------- M7 DIGITAL DISPLAY ---------------- */}
            {dashActiveView === 'display' && (
              <div className="flex flex-col items-center">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">Live Preview: Mahkamah 1 External Display</p>
                <div className="w-full max-w-4xl aspect-video bg-[#0B1120] rounded-[24px] md:rounded-[32px] border-[8px] md:border-[12px] border-slate-900 shadow-2xl p-6 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 p-4 opacity-10"><Scale className="w-48 h-48 md:w-96 md:h-96" /></div>
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-3xl font-bold text-slate-400 tracking-widest uppercase">Mahkamah 1</h2>
                    <h3 className="text-2xl md:text-4xl font-black mt-2 md:mt-3 text-blue-400">Y.A. Dato' Wan Jeffry Bin Kassim</h3>
                  </div>
                  <div className="bg-slate-900/80 p-4 md:p-8 rounded-[16px] md:rounded-[24px] border border-slate-700 backdrop-blur-xl relative z-10">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6"><span className="px-3 py-1 md:px-4 md:py-1.5 bg-rose-500 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-lg animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.5)]">Now Hearing</span> <span className="font-mono text-lg md:text-2xl font-bold text-slate-300">1/1-1522/25</span></div>
                    <h4 className="text-2xl md:text-4xl font-black mb-1 md:mb-2">Tay Hwee Lan</h4>
                    <p className="text-sm md:text-2xl font-bold text-slate-400">Lawan: Healthy Vision Sdn Bhd</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end relative z-10 gap-4 mt-4 md:mt-0">
                    <div><p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Next Case</p><p className="font-bold text-sm md:text-xl text-slate-300">11:00 AM - Azman Bin Isa</p></div>
                    <div className="text-3xl md:text-5xl font-black font-mono tracking-tighter text-blue-400">09:14 AM</div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- CHAIRMAN WORKSPACE ---------------- */}
            {dashActiveView === 'chairman' && !internalActionView && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Assigned Cases</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">28</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Hearings This Week</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">6</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Mentions This Week</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">4</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-rose-200 bg-rose-50/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-rose-500 mb-2">Awards Pending</p><h3 className="text-3xl md:text-4xl font-black text-rose-600">3</h3></div>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6 md:mb-8">Assigned Case Roster</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                      <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case Number</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case Title</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">Status</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Hearing Date</th></tr></thead>
                      <tbody className="divide-y divide-slate-50">
                        {chairmanCases.map((c, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-blue-600 cursor-pointer hover:underline">{c.id}</td><td className="py-4 px-4 text-xs md:text-sm font-bold text-slate-900">{c.title}</td><td className="py-4 px-4 text-center"><span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">{c.status}</span></td><td className="py-4 px-4 text-xs font-bold text-slate-500 text-right"><button onClick={() => { setSelectedInternalItem(c); setInternalActionView('hearing_notes'); }} className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-colors">Workspace</button></td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {dashActiveView === 'chairman' && internalActionView === 'hearing_notes' && selectedInternalItem && (
              <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-10rem)]">
                <div className="flex items-center justify-between mb-6 flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-50 shadow-sm"><ArrowLeft className="w-5 h-5" /></button>
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Hearing Workspace</h2>
                      <p className="text-xs font-bold text-blue-600">{selectedInternalItem.id} &bull; {selectedInternalItem.title}</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 shadow-md flex items-center"><Save className="w-4 h-4 mr-2" /> Save Notes</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                  <div className="lg:col-span-2 flex flex-col bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl relative">
                    <div className="p-6 bg-slate-800/50 border-b border-white/10 flex justify-between items-center text-white">
                      <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div><h3 className="text-xs font-black uppercase tracking-widest opacity-80">Live Hearing Record</h3></div>
                      <div className="flex gap-2"><button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"><Mic className="w-4 h-4" /></button><button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"><Video className="w-4 h-4" /></button></div>
                    </div>
                    <div className="flex-1 p-8 overflow-y-auto">
                      <textarea placeholder="Start typing hearing notes, evidence observations, and witness testimonies..." className="w-full h-full bg-transparent text-slate-200 text-lg font-medium leading-relaxed resize-none outline-none placeholder:text-slate-600"></textarea>
                    </div>
                    <div className="p-4 bg-slate-800/50 border-t border-white/10 text-[10px] font-bold text-slate-500 text-center uppercase tracking-widest">Autosaved at 09:42:15 AM</div>
                  </div>
                  <div className="space-y-6 overflow-y-auto pr-2">
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center"><Gavel className="w-4 h-4 mr-2" /> Bench Reference</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-xs font-bold text-slate-800 mb-1">Relevant Award</p>
                          <p className="text-[10px] font-semibold text-slate-500 mb-2">Award 120/2024 - Similar Redundancy Facts</p>
                          <button className="text-blue-600 text-[10px] font-bold hover:underline">View Decision</button>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-xs font-bold text-slate-800 mb-1">Claimant's IC Number</p>
                          <p className="text-sm font-mono font-bold text-slate-600">880214-14-XXXX</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center"><FileText className="w-4 h-4 mr-2" /> Pleadings Quick Access</h4>
                      <div className="space-y-2">
                        {['Statement of Case', 'Statement in Reply', 'Bundle of Documents', 'Witness Statement - C1'].map((doc, idx) => (
                          <button key={idx} className="w-full text-left p-3 hover:bg-blue-50 rounded-xl border border-transparent hover:border-blue-100 transition-all group">
                            <span className="text-xs font-bold text-slate-700 group-hover:text-blue-700">{doc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M12 INTEGRATION ---------------- */}
            {dashActiveView === 'integration' && (
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-zinc-900">System Integration Status</h3>
                    <span className="flex items-center px-4 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">All Systems Operational</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockSystemSettings.map((s, i) => (
                      <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ServerCrash className="w-16 h-16" /></div>
                        <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{s.name}</h4>
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2 h-2 rounded-full ${s.status === 'Online' || s.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                          <p className="text-lg font-bold text-zinc-900">{s.status}</p>
                        </div>
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Last Downtime</p>
                        <p className="text-xs font-bold text-zinc-600">{s.lastDowntime}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[32px] border border-zinc-200 shadow-sm">
                  <h3 className="text-lg font-bold text-zinc-900 mb-6">Real-time Integration Logs (JPPM/SSO)</h3>
                  <div className="space-y-3">
                    {integrationLogs.map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${log.status === 'Success' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}><RefreshCw className="w-5 h-5" /></div>
                          <div><p className="text-sm font-bold text-zinc-900">{log.system} {log.type}</p><p className="text-[10px] font-bold text-zinc-400">ID: {log.id}</p></div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xs font-black uppercase tracking-widest ${log.status === 'Success' ? 'text-emerald-600' : 'text-rose-600'}`}>{log.status}</p>
                          <p className="text-[10px] font-bold text-zinc-400">Latency: {log.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M12 USAGE ---------------- */}
            {dashActiveView === 'usage' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-8"><h3 className="text-xl font-extrabold text-slate-900">Platform Usage Logs</h3><button className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><ArrowUpRight className="w-5 h-5 text-slate-400" /></button></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Timestamp</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Platform User</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">Role</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Activity</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {mockUsageLogs.map((log, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-semibold text-slate-500">{log.time}</td><td className="py-4 px-4"><p className="text-xs font-bold text-slate-900">{log.user}</p><p className="text-[10px] font-bold text-slate-400">{log.id}</p></td><td className="py-4 px-4 text-center"><span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">{log.role}</span></td><td className="py-4 px-4 text-right text-xs font-bold text-slate-700">{log.action}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ---------------- M13 SETTINGS ---------------- */}
            {dashActiveView === 'settings' && (
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-slate-100">System Preferences</h3>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-sm font-bold text-slate-900">Strict Document Validation</h4><p className="text-xs font-semibold text-slate-500">Enable OCR-based automatic validation for e-Filing submissions.</p></div><div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute right-1"></div></div></div>
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-sm font-bold text-slate-900">Public Portal Maintenance Mode</h4><p className="text-xs font-semibold text-slate-500">Restrict access to external users during system upgrades.</p></div><div className="w-12 h-6 bg-slate-200 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute left-1"></div></div></div>
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-sm font-bold text-slate-900">Email Dispatch Notifications</h4><p className="text-xs font-semibold text-slate-500">Automatically notify parties via email on all case updates.</p></div><div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute right-1"></div></div></div>
                  </div>
                </div>
                <div className="bg-rose-50 border border-rose-200 p-8 rounded-[32px] flex items-center justify-between">
                  <div><h3 className="text-lg font-extrabold text-rose-900">Danger Zone</h3><p className="text-sm font-semibold text-rose-700 mt-1">Actions in this section are irreversible and affect global data.</p></div>
                  <button className="px-6 py-2.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 shadow-md transition-colors">Clear System Cache</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Menu Backdrop */}
      {dashMobileMenuOpen && <div onClick={() => setDashMobileMenuOpen(false)} className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"></div>}
    </div>
  );
}
