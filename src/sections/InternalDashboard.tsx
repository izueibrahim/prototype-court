"use client";

import React, { useState } from 'react';
import {
  Search, Calendar, Gavel, Scale, FileText, Download, Users2, Activity, Settings,
  MessageSquare, LayoutDashboard, Briefcase, Bell, Mail, Clock, ShieldCheck,
  LogOut, Menu, X, Plus, Printer, Share2, Filter, MoreVertical, CheckCircle2,
  ChevronRight, ArrowLeft, ArrowUpRight, Save, Mic, Video, ServerCrash, RefreshCw,
  ChevronLeft, FilePlus, SlidersHorizontal, Key, ShieldAlert, KanbanSquare, Tv,
  ArrowDown, Check, Upload, Trash2, File as FileIcon, FileCheck, ClipboardList,
  ChevronDown, ChevronUp, Users, PieChart, User, TrendingUp, TrendingDown, ExternalLink,
  BookOpen, FileSearch, Lightbulb, Zap, Globe
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import SebutanChat from '@/components/sebutan/SebutanChat';
import {
  chYears, courtLocations, caseTypes, caseStatuses, ch1, ch2, ch3, ch4Pts, ch4Vals, ch5, ch7SchedPts, ch7CompPts,
  ch7Comp, ch8, ch10, upcomingHearings, latestJudgments, mockSearchResults,
  caseTypeDistribution, chairmanWorkload, filingQueue, chairmanCases,
  integrationLogs, mockNotices, mockCAs, mockUsageLogs,
  executiveStats, opsStats, chairmanStats, awardAnalyticsStats, integrationStats, usageStats,
  mockSystemSettings, mockCollectiveAgreements
} from '@/lib/data';

const EmptyState = ({ title, description, icon: Icon, actionLabel, onAction }: any) => (
  <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-white rounded-[32px] border-2 border-dashed border-slate-200 shadow-sm">
    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-6">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-2">{title}</h3>
    <p className="text-base font-bold text-slate-500 max-w-md mb-8">{description}</p>
    {actionLabel && (
      <button
        onClick={onAction}
        className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-black rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-2"
      >
        <Plus className="w-4 h-4" /> {actionLabel}
      </button>
    )}
  </div>
);

export default function InternalDashboard() {
  const {
    lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView,
    dashActiveView, setDashActiveView, dashMobileMenuOpen, setDashMobileMenuOpen,
    selectedCaseId, setSelectedCaseId,
    selectedAward, setSelectedAward,
    searchQuery, setSearchQuery,
    internalActionView, setInternalActionView, selectedInternalItem, setSelectedInternalItem
  } = useAppStore();

  const currentLang = t[lang];
  const isHighContrast = wcagStates.highContrast;

  // Local dashboard state
  const [showOverviewFilters, setShowOverviewFilters] = useState(true);
  const [showAnalyticsFilters, setShowAnalyticsFilters] = useState(false);
  const [showCasesFilters, setShowCasesFilters] = useState(false);
  const [hideNoticePreview, setHideNoticePreview] = useState(false);
  const [filterYear, setFilterYear] = useState('2026');
  const [filterLocation, setFilterLocation] = useState('All Locations');
  const [filterCaseType, setFilterCaseType] = useState('All Types');
  const [filterChairman, setFilterChairman] = useState('All Chairmen');
  const [filterStatus, setFilterStatus] = useState('All Statuses');
  
  // Local CA module state
  const [caView, setCaView] = useState('grid'); // grid, filing, detail
  const [selectedCA, setSelectedCA] = useState<any>(null);
  const [caSearchQuery, setCaSearchQuery] = useState('');
  const [caSectorFilter, setCaSectorFilter] = useState('All Sectors');

  const handleLogout = () => {
    setLoginRole(null);
    setDashActiveView('overview');
    setDashMobileMenuOpen(false);
    setCurrentView('login');
  };

  const demoRole = loginRole || 'officer';

  const navGroups = [
    {
      label: currentLang.groupDashboards,
      roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer', 'efiling'],
      items: [
        { id: 'overview', icon: LayoutDashboard, label: currentLang.dashOverview, roles: ['admin', 'ydp', 'chairman', 'registrar', 'efiling'] },
        { id: 'chairman', icon: Gavel, label: currentLang.dashChairman, roles: ['admin', 'chairman'] },
        { id: 'analytics', icon: PieChart, label: currentLang.dashAnalytics, roles: ['admin', 'ydp'] },
      ]
    },
    {
      label: currentLang.groupCore,
      roles: ['admin', 'ydp', 'registrar', 'officer', 'ca_unit', 'chairman', 'efiling', 'guest'],
      items: [
        { id: 'registration', icon: FilePlus, label: currentLang.dashRegistration, roles: ['admin', 'registrar', 'officer', 'ydp', 'efiling'] },
        { id: 'cases', icon: KanbanSquare, label: currentLang.dashCases, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer', 'efiling'] },
        { id: 'schedule_int', icon: Calendar, label: currentLang.dashSchedule, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer', 'efiling', 'guest'] },
        { id: 'notice', icon: Bell, label: currentLang.dashNotice, roles: ['admin', 'registrar', 'officer'] },
        { id: 'notice_board', icon: Bell, label: currentLang.noticeBoard, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer', 'ca_unit', 'efiling', 'guest'] },
        { id: 'collective', icon: Users, label: currentLang.dashCollective, roles: ['admin', 'registrar', 'officer', 'ca_unit', 'efiling'] },
        { id: 'search', icon: Search, label: currentLang.dashSearch, roles: ['admin', 'ydp', 'chairman', 'registrar', 'officer', 'efiling'] },
        { id: 'sebutan', icon: MessageSquare, label: currentLang.eSebutan, roles: ['admin', 'registrar', 'chairman', 'ydp', 'efiling', 'guest'] },
        { id: 'display', icon: Tv, label: currentLang.dashDisplay, roles: ['admin', 'ydp'] },
      ]
    },
    {
      label: currentLang.groupSystemAdmin,
      roles: ['admin'],
      items: [
        { id: 'users', icon: Users2, label: currentLang.userManagement, roles: ['admin'] },
        { id: 'integration', icon: ServerCrash, label: currentLang.dashIntegration, roles: ['admin'] },
        { id: 'usage', icon: Activity, label: currentLang.dashUsage, roles: ['admin'] },
        { id: 'settings', icon: Settings, label: currentLang.dashAdmin, roles: ['admin'] },
      ]
    }
  ];

  const filteredNavGroups = navGroups
    .filter(group => group.roles.includes(demoRole))
    .map(group => ({
      ...group,
      items: group.items.filter(item => item.roles.includes(demoRole))
    }))
    .filter(group => group.items.length > 0);

  return (
    <div className={`flex h-screen overflow-hidden ${isHighContrast ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 md:w-72 transition-transform duration-300 transform ${dashMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 ${isHighContrast ? 'bg-black border-r border-white' : 'bg-white border-r border-slate-200'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-3">
            <img src="/jata-negara.png" alt="Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className={`text-h6 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>Mahkamah Perusahaan</span>
              <span className={`text-ui-label ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>Industrial Court</span>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 space-y-6 py-4 custom-scrollbar">
            {filteredNavGroups.map((group, gIdx) => (
              <div key={gIdx} className="space-y-2">
                <h4 className={`px-4 text-ui-label ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  {group.label}
                </h4>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setDashActiveView(item.id as any);
                        setDashMobileMenuOpen(false);
                        setInternalActionView(null);
                      }}
                      className={`w-full flex items-center px-4 py-2.5 rounded-xl transition-all duration-200 group ${dashActiveView === item.id
                        ? (isHighContrast ? 'bg-white text-black' : 'bg-[#1E1E2D] text-white shadow-lg')
                        : (isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900')}`}
                    >
                      <item.icon className={`w-5 h-5 mr-3 transition-transform group-hover:scale-110 ${dashActiveView === item.id ? 'text-blue-500' : 'text-zinc-400'}`} />
                      <span className="text-body-sm font-bold tracking-tight">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button
              onClick={handleLogout}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-colors ${isHighContrast ? 'border border-white text-white hover:bg-zinc-900' : 'bg-zinc-100 text-zinc-600 hover:bg-rose-50 hover:text-rose-600'}`}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-body-sm font-bold">{currentLang.logout}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-inherit relative h-full">
        {/* Standardized Top Header */}
        <header className={`h-20 sm:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b relative z-30 transition-colors ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white/70 backdrop-blur-xl border-zinc-200/50 shadow-sm'}`}>
          <div className="flex items-center gap-4 lg:gap-8">
            <button onClick={() => setDashMobileMenuOpen(!dashMobileMenuOpen)} className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>


            <h1 className="text-h6 text-zinc-900 truncate max-w-[150px] sm:max-w-none">
              {dashActiveView === 'overview' ? currentLang.dashOverview
                : dashActiveView === 'chairman' ? currentLang.dashChairman
                  : dashActiveView === 'analytics' ? currentLang.dashAnalytics
                    : dashActiveView === 'registration' ? currentLang.dashRegistration
                      : dashActiveView === 'cases' ? currentLang.dashCases
                        : dashActiveView === 'schedule_int' ? currentLang.dashSchedule
                          : dashActiveView === 'notice' ? currentLang.dashNotice
                            : dashActiveView === 'collective' ? currentLang.dashCollective
                              : dashActiveView === 'search' ? currentLang.dashSearch
                                : dashActiveView === 'display' ? currentLang.dashDisplay
                                  : dashActiveView === 'sebutan' ? 'E-Sebutan Virtual Room'
                                    : dashActiveView === 'integration' ? currentLang.dashIntegration
                                      : dashActiveView === 'usage' ? currentLang.dashUsage
                                        : 'System Administration'}
            </h1>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="hidden sm:block text-[10px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">{lang === 'en' ? 'MS' : 'EN'}</button>
            <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
            <button className="text-slate-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs md:text-sm border border-blue-100 shadow-inner">
              {demoRole === 'ydp' ? 'YP' : demoRole === 'chairman' ? 'CH' : demoRole === 'admin' ? 'AD' : 'RO'}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 hide-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* ---------------- OVERVIEW ---------------- */}
            {dashActiveView === 'overview' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">{currentLang.performanceOverview}</h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.performanceOverviewSub}</p>
                  </div>
                </div>

                <div className="bg-slate-50/50 p-6 md:p-8 rounded-[32px] border border-slate-100 flex flex-col gap-6">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => setShowOverviewFilters(!showOverviewFilters)}
                  >
                    <div className="flex items-center gap-3 text-slate-500 group-hover:text-blue-600 transition-colors">
                      <Filter className="w-5 h-5" />
                      <span className="text-[12px] font-black uppercase tracking-[0.1em]">{currentLang.advReportingFilters}</span>
                    </div>
                    {showOverviewFilters ? <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" /> : <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                  </div>

                  {showOverviewFilters && (
                    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex flex-wrap gap-4 items-center">
                        <select defaultValue="2026" className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[120px]">
                          {chYears.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allCourts}</option>
                          {courtLocations.map(l => <option key={l.region} value={l.region}>{l.region.toUpperCase()}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allCaseTypes}</option>
                          {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allChairmen}</option>
                          {['Y.A. DATO\' WAN JEFFRY', 'Y.A. TUAN AMRIK SINGH', 'Y.A. PUAN RUSITA MD LAZIM', 'Y.A. TUAN ZULHELMY HASAN'].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allStatuses}</option>
                          {caseStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="flex justify-end">
                        <button className="px-10 py-3.5 bg-blue-600 text-white text-[11px] font-black rounded-2xl uppercase tracking-widest hover:bg-blue-700 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all active:scale-95 font-black uppercase tracking-widest">{currentLang.applyFiltersBtn}</button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {(demoRole === 'ydp' ? executiveStats :
                    demoRole === 'registrar' || demoRole === 'officer' ? opsStats :
                      demoRole === 'chairman' ? chairmanStats : executiveStats).map((stat, i) => (
                        <div key={i} className={`p-6 rounded-[28px] border border-slate-100 ${stat.bg} flex flex-col justify-between hover:shadow-md transition-all`}>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight mb-3">{stat.metric}</p>
                          <div className="flex items-baseline justify-between mt-auto">
                            <h4 className={`text-2xl font-black ${stat.color} leading-none`}>{stat.value}</h4>
                            <div className={`flex items-center text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                              {stat.trend.startsWith('+') ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                              {stat.trend.replace('+', '').replace('-', '')}
                            </div>
                          </div>
                        </div>
                      ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  {/* 1. Reg vs Resolved */}
                  <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
                    <h3 className="text-ui-label text-slate-500 uppercase mb-4">1. Reg vs Resolved (Unfair Dismissal)</h3>
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
                    <h3 className="text-ui-label text-slate-500 uppercase mb-4">2. Types of UD Resolved</h3>
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
                    <h3 className="text-ui-label text-slate-500 uppercase mb-4">3. Reg. Categories (Other than UD)</h3>
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
              </div>
            )}

            {dashActiveView === 'analytics' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">{currentLang.awardAnalyticsInsights}</h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.awardAnalyticsSub}</p>
                  </div>
                </div>

                <div className="bg-slate-50/50 p-6 md:p-8 rounded-[32px] border border-slate-100 flex flex-col gap-6">
                  <div
                    className="flex justify-between items-center cursor-pointer group"
                    onClick={() => setShowAnalyticsFilters(!showAnalyticsFilters)}
                  >
                    <div className="flex items-center gap-3 text-slate-500 group-hover:text-blue-600 transition-colors">
                      <Filter className="w-5 h-5" />
                      <span className="text-[12px] font-black uppercase tracking-[0.1em]">{currentLang.advReportingFilters}:</span>
                    </div>
                    {showAnalyticsFilters ? <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" /> : <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                  </div>

                  {showAnalyticsFilters && (
                    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex flex-wrap gap-4 items-center">
                        <select defaultValue="2026" className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[120px]">
                          {chYears.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allCourts}</option>
                          {courtLocations.map(l => <option key={l.region} value={l.region}>{l.region.toUpperCase()}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allCaseTypes}</option>
                          {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allChairmen}</option>
                          {['Y.A. DATO\' WAN JEFFRY', 'Y.A. TUAN AMRIK SINGH', 'Y.A. PUAN RUSITA MD LAZIM', 'Y.A. TUAN ZULHELMY HASAN'].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                          <option>{currentLang.allStatuses}</option>
                          {caseStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="flex justify-end">
                        <button className="px-10 py-3.5 bg-blue-600 text-white text-[11px] font-black rounded-2xl uppercase tracking-widest hover:bg-blue-700 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all active:scale-95 font-black uppercase tracking-widest">{currentLang.applyFiltersBtn}</button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {awardAnalyticsStats.map((stat, i) => (
                    <div key={i} className={`p-6 rounded-[28px] border border-slate-100 ${stat.bg} flex flex-col justify-between hover:shadow-md transition-all`}>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-tight mb-3">{stat.metric}</p>
                      <div className="flex items-baseline justify-between mt-auto">
                        <h4 className={`text-2xl font-black ${stat.color} leading-none`}>{stat.value}</h4>
                        <div className={`flex items-center text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {stat.trend.startsWith('+') ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                          {stat.trend.replace('+', '').replace('-', '')}
                        </div>
                      </div>
                    </div>
                  ))}
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
              <div className="bg-white p-6 md:p-10 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">
                      {demoRole === 'efiling' ? currentLang.submitNewCaseFiling : currentLang.dashRegistration}
                    </h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.caseRegistrationSub}</p>
                  </div>
                  {demoRole === 'efiling' ? (
                    <button className="flex justify-center items-center px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
                      <Plus className="w-4 h-4 mr-2" /> {currentLang.newFilingSubmission}
                    </button>
                  ) : (
                    <button className="flex justify-center items-center px-6 py-3 bg-[#3B82F6] text-white text-sm font-bold rounded-xl hover:bg-blue-700 shadow-md transition-all active:scale-95">
                      <RefreshCw className="w-4 h-4 mr-2" /> {currentLang.syncJPPM}
                    </button>
                  )}
                </div>
                {demoRole === 'efiling' && filingQueue.length === 0 ? (
                  <EmptyState
                    title={currentLang.noFilingsTitle}
                    description={currentLang.noFilingsDesc}
                    icon={FilePlus}
                    actionLabel={currentLang.submitNewCaseFiling}
                    onAction={() => { }}
                  />
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[700px]">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">
                            {demoRole === 'efiling' ? currentLang.statusCol : currentLang.sourceCol}
                          </th>
                          <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">{currentLang.partiesCol}</th>
                          <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">
                            {demoRole === 'efiling' ? currentLang.submissionDateCol : currentLang.receivedDateCol}
                          </th>
                          <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400 text-right">{currentLang.actionCol}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {filingQueue.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                            <td className="py-6 px-4">
                              <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider ${demoRole === 'efiling'
                                ? 'bg-amber-50 text-amber-600'
                                : 'bg-blue-50 text-[#3B82F6]'
                                }`}>
                                {demoRole === 'efiling' ? currentLang.pendingReview : 'eFiling'}
                              </span>
                            </td>
                            <td className="py-6 px-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm md:text-base font-black text-[#1E1E2D]">{item.submittedBy}</span>
                                <span className="text-zinc-300 font-black text-sm uppercase">v</span>
                                <span className="text-sm md:text-base font-black text-[#1E1E2D]">Company XYZ</span>
                              </div>
                            </td>
                            <td className="py-6 px-4 text-sm font-bold text-slate-500">{item.date}</td>
                            <td className="py-6 px-4 text-right">
                              <button
                                onClick={() => { setSelectedInternalItem(item); setInternalActionView('review_filing'); }}
                                className="px-6 py-2.5 bg-[#111111] hover:bg-black text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
                              >
                                Review & Register
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {dashActiveView === 'registration' && internalActionView === 'review_filing' && selectedInternalItem && (
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-6 mb-10">
                  <button
                    onClick={() => setInternalActionView(null)}
                    className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <div>
                    <h2 className="text-3xl font-black text-[#1E1E2D]">{currentLang.filingReview}: {selectedInternalItem.id}</h2>
                    <p className="text-base font-bold text-slate-500 mt-1">{currentLang.filingReviewSub}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-3 space-y-8">
                    <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-sm space-y-10">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">{currentLang.submittedBy}</h4>
                        <p className="text-2xl font-black text-[#1E1E2D]">{selectedInternalItem.submittedBy}</p>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">{currentLang.disputeType}</h4>
                        <span className="px-5 py-2 bg-zinc-100 text-zinc-900 text-sm font-black rounded-xl inline-flex">
                          {selectedInternalItem.type}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-5">{currentLang.attachedDocs}</h4>
                        <div className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center justify-between group hover:border-blue-200 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-base font-black text-[#1E1E2D]">JPPM_Referral.pdf</p>
                              <p className="text-xs font-bold text-slate-400">2.4 MB</p>
                            </div>
                          </div>
                          <button className="text-[#3B82F6] text-sm font-black hover:underline px-4">{currentLang.viewBtn}</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Validation */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-sm h-full flex flex-col">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-8">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                          <h3 className="text-xl font-black text-[#1E1E2D]">{currentLang.registrarValidation}</h3>
                        </div>

                        <div className="space-y-6 mb-10">
                          {[
                            currentLang.checkPartiesComplete,
                            currentLang.checkJppmValid,
                            currentLang.checkNoDuplicate
                          ].map((check, i) => (
                            <label key={i} className="flex items-center gap-4 cursor-pointer group">
                              <div className="relative">
                                <input type="checkbox" className="peer hidden" />
                                <div className="w-6 h-6 border-2 border-slate-200 rounded-lg group-hover:border-blue-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                              </div>
                              <span className="text-base font-bold text-slate-700 group-hover:text-black transition-colors">{check}</span>
                            </label>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 block px-1">{currentLang.assignCaseNum}</label>
                          <input
                            type="text"
                            defaultValue="1/1-1555/26"
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-xl font-mono font-black text-[#1E1E2D] focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      <div className="mt-10">
                        <button
                          onClick={() => setInternalActionView(null)}
                          className="w-full py-5 bg-[#3B82F6] hover:bg-blue-700 text-white text-base font-extrabold rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-3"
                        >
                          {currentLang.registerForward}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M10 CASE MANAGEMENT ---------------- */}
            {dashActiveView === 'cases' && !internalActionView && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col h-[calc(100vh-12rem)] min-h-[500px]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">
                      {demoRole === 'efiling' ? currentLang.myPortfolioActive : currentLang.activeCaseMgmt}
                    </h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.activeCaseMgmtSub}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {demoRole === 'ydp' && (
                      <button onClick={() => setInternalActionView('allocate_case')} className="px-4 py-2 bg-amber-100 text-amber-800 text-[10px] font-black rounded-lg hover:bg-amber-200 flex items-center border border-amber-200 shadow-sm animate-pulse uppercase tracking-widest">
                        <ClipboardList className="w-4 h-4 mr-2" /> 3 {currentLang.pendingAllocation}
                      </button>
                    )}
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder={currentLang.searchCasePlace} className="text-sm font-semibold pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64 shadow-sm" />
                    </div>
                    <button
                      onClick={() => setShowCasesFilters(!showCasesFilters)}
                      className={`px-5 py-2.5 rounded-xl flex items-center transition-all border font-black active:scale-95 ${showCasesFilters ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'}`}
                    >
                      <Filter className="w-4 h-4 md:mr-2" />
                      <span className="hidden md:inline">{currentLang.advancedFilter}</span>
                    </button>
                  </div>
                </div>

                {showCasesFilters && (
                  <div className="mb-8 bg-slate-50/50 p-6 md:p-8 rounded-[32px] border border-slate-100 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-wrap gap-4 items-center">
                      <select defaultValue="2026" className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[120px]">
                        {chYears.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                      <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                        <option>ALL COURT LOCATIONS</option>
                        {courtLocations.map(l => <option key={l.region} value={l.region}>{l.region.toUpperCase()}</option>)}
                      </select>
                      <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                        <option>ALL CASE TYPES</option>
                        {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                        <option>ALL CHAIRMEN</option>
                        {['Y.A. DATO\' WAN JEFFRY', 'Y.A. TUAN AMRIK SINGH', 'Y.A. PUAN RUSITA MD LAZIM', 'Y.A. TUAN ZULHELMY HASAN'].map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <select className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm min-w-[200px]">
                        <option>{currentLang.allStatuses}</option>
                        {caseStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button className="px-10 py-3.5 bg-[#111111] text-white text-[11px] font-black rounded-2xl uppercase tracking-widest hover:bg-black shadow-lg transition-all active:scale-95">{currentLang.applySearchBtn}</button>
                    </div>
                  </div>
                )}

                {demoRole === 'efiling' && chairmanCases.length === 0 ? (
                  <div className="flex-1 bg-white rounded-[32px] border border-slate-200 shadow-sm flex items-center justify-center p-12">
                    <EmptyState
                      title={currentLang.noCasesFound}
                      description={currentLang.noCasesDesc}
                      icon={Briefcase}
                      actionLabel="Submit New Filing"
                      onAction={() => setDashActiveView('registration')}
                    />
                  </div>
                ) : (
                  <div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                    {chairmanCases.map((c, i) => {
                      const currentStage = i === 0 ? 3 : i === 1 ? 2 : 4; // Mock stage
                      const stages = ['Registered', 'Allocation', 'Mention', 'Hearing', 'Award'];

                      return (
                        <div key={i} onClick={() => { setSelectedInternalItem(c); setInternalActionView('case_detail'); }} className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-200 shadow-sm hover:border-indigo-400 hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-2 h-full bg-slate-100 group-hover:bg-indigo-600 transition-colors"></div>

                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div className="flex items-center gap-6">
                              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg ring-4 ring-slate-50">
                                {demoRole === 'efiling' ? 'MY' : 'CH'}
                              </div>
                              <div>
                                <div className="flex items-center gap-3 mb-1">
                                  <span className="text-sm font-mono font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{c.id}</span>
                                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{c.status}</span>
                                </div>
                                <h4 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">{c.title}</h4>
                                <p className="text-sm font-bold text-slate-400 mt-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Last Action: {c.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 relative z-20">
                              <button
                                onClick={(e) => { e.stopPropagation(); setDashActiveView('sebutan'); }}
                                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black rounded-xl transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest active:scale-95"
                              >
                                Join Session
                              </button>
                              <button className="px-8 py-3.5 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 text-[10px] font-black rounded-xl transition-all shadow-inner uppercase tracking-widest">Case Details</button>
                            </div>
                          </div>

                          {/* Horizontal Stepper */}
                          <div className="pt-8 border-t border-slate-50">
                            <div className="flex items-center w-full">
                              {stages.map((stage, idx) => (
                                <React.Fragment key={idx}>
                                  <div className="flex flex-col items-center relative z-10 flex-1">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${idx <= currentStage ? 'bg-blue-600 border-blue-100 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-300'
                                      }`}>
                                      {idx < currentStage ? <Check className="w-6 h-6" /> : <span className="text-xs font-black">{idx + 1}</span>}
                                    </div>
                                    <span className={`text-[10px] font-black uppercase mt-4 tracking-[0.2em] ${idx <= currentStage ? 'text-blue-600' : 'text-slate-300'}`}>{stage}</span>
                                  </div>
                                  {idx < stages.length - 1 && (
                                    <div className={`h-1.5 flex-1 -mx-8 mb-9 transition-all duration-1000 ${idx < currentStage ? 'bg-blue-600' : 'bg-slate-100'}`}></div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {dashActiveView === 'cases' && internalActionView === 'allocate_case' && (
              <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
                <div className="flex items-center gap-4 mb-6 flex-shrink-0">
                  <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90"><ArrowLeft className="w-6 h-6" /></button>
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
                        <p className="text-base font-semibold">{currentLang.selectCaseToAllocate}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {dashActiveView === 'cases' && internalActionView === 'case_detail' && selectedInternalItem && (
              <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-500">
                {/* Case Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="flex items-center gap-6 relative z-10">
                    <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-95"><ArrowLeft className="w-6 h-6" /></button>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{selectedInternalItem.title}</h2>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-base font-mono font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{selectedInternalItem.id}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        <span className="text-sm font-black text-slate-400 uppercase tracking-widest">{selectedInternalItem.type || currentLang.dismissalCase}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 relative z-10">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-black rounded-2xl transition-all">{currentLang.exportCasePDF}</button>
                    <button className="flex-1 md:flex-none px-6 py-3 bg-[#111111] hover:bg-black text-white text-sm font-black rounded-2xl shadow-xl transition-all active:scale-95">{currentLang.actionMenu}</button>
                  </div>
                </div>

                {/* Case Lifecycle Stepper */}
                <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 text-center">{currentLang.caseLifecycleProgress}</h3>
                  <div className="relative flex justify-between">
                    <div className="absolute top-5 left-0 w-full h-1 bg-slate-100 -z-10"></div>
                    <div className="absolute top-5 left-0 h-1 bg-blue-500 -z-10 transition-all duration-1000" style={{ width: '40%' }}></div>

                    {[
                      { label: currentLang.stageRegistration, date: '10 Jan' },
                      { label: currentLang.stageAllocation, date: '12 Jan' },
                      { label: currentLang.stageMention, date: '15 Feb' },
                      { label: currentLang.stageHearing, date: 'TBC' },
                      { label: currentLang.stageAward, date: 'TBC' }
                    ].map((step, idx) => {
                      const caseIdx = chairmanCases.findIndex(c => c.id === selectedInternalItem.id);
                      const currentStage = caseIdx === 0 ? 3 : caseIdx === 1 ? 2 : 4;
                      const isCompleted = idx < currentStage;
                      const isActive = idx === currentStage;
                      const isPending = idx > currentStage;

                      return (
                        <div key={idx} className="flex flex-col items-center gap-3 bg-white px-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${isCompleted || isActive ? 'bg-blue-600 border-blue-100 text-white shadow-lg shadow-blue-500/20' :
                            'bg-white border-slate-100 text-slate-300'
                            } ${isActive ? 'scale-125' : ''}`}>
                            {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-xs font-black">{idx + 1}</span>}
                          </div>
                          <div className="text-center">
                            <p className={`text-[11px] font-black uppercase tracking-wider mb-0.5 ${isPending ? 'text-slate-300' : 'text-slate-900'}`}>{step.label}</p>
                            <p className="text-[10px] font-bold text-slate-400">{step.date}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-8">
                    {/* Parties Overiew */}
                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-200 shadow-sm">
                      <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3"><Users className="w-6 h-6 text-blue-600" /> Litigant Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><User className="w-12 h-12" /></div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Claimant (Pihak Menuntut)</p>
                            <p className="text-lg font-black text-slate-900 leading-tight">Tay Hwee Lan</p>
                            <p className="text-xs font-bold text-blue-600 mt-2">Rep: Ahmad Faiz (Messrs Faiz & Co)</p>
                          </div>
                          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Scale className="w-12 h-12" /></div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Respondent (Pihak Menentang)</p>
                            <p className="text-lg font-black text-slate-900 leading-tight">Healthy Vision Sdn Bhd</p>
                            <p className="text-xs font-bold text-rose-600 mt-2">Rep: Self-Represented</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">Assigned Bench</h4>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-lg ring-4 ring-blue-50">WJ</div>
                              <div>
                                <p className="text-sm font-black text-slate-900">YA Dato' Wan Jeffry</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase">Chairman, Court 1</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm text-slate-900">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Next Event</p>
                            <h4 className="text-xl font-black mb-2">Notice of Mention</h4>
                            <p className="text-sm font-bold text-blue-600">Scheduled for 15 Feb 2026, 09:00 AM</p>
                            <button onClick={() => setDashActiveView('sebutan')} className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95 uppercase tracking-widest">Join E-Sebutan Room</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-slate-200 shadow-sm relative">
                      <h3 className="text-xl font-black text-slate-900 mb-10 flex items-center justify-between">
                        <span className="flex items-center gap-3"><Activity className="w-6 h-6 text-rose-500" /> Case Activity Log</span>
                        <button className="text-xs font-black text-blue-600 hover:underline">View Full Log</button>
                      </h3>
                      <div className="space-y-10 relative pl-6">
                        <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

                        <div className="relative">
                          <div className="absolute -left-[32px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-md z-10 transition-transform hover:scale-150 cursor-pointer"></div>
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">Case Allocation Completed</h4>
                              <span className="text-[10px] font-bold text-slate-400">12 Jan 2026, 14:15</span>
                            </div>
                            <p className="text-xs font-bold text-slate-500 leading-relaxed">Case file successfully assigned to Court 1 by the Registrar. Status updated to <span className="text-blue-600">Pending Mention</span>.</p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="absolute -left-[32px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white shadow-md z-10 transition-transform hover:scale-150 cursor-pointer"></div>
                          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">Initial Filing Received</h4>
                              <span className="text-[10px] font-bold text-slate-400">10 Jan 2026, 09:30</span>
                            </div>
                            <p className="text-xs font-bold text-slate-500 leading-relaxed">User <span className="text-slate-900">Tay Hwee Lan</span> submitted Representative e-Filing (Form A). System-validated via MyDigitalID.</p>
                            <div className="mt-4 flex gap-2">
                              <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-400 uppercase">FORM_A.PDF</span>
                              <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[9px] font-black text-slate-400 uppercase">IC_RECORDS.PNG</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm overflow-hidden relative group">
                      <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity text-slate-900"><Scale className="w-48 h-48" /></div>
                      <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">{currentLang.caseMetadata}</h3>
                      <div className="space-y-6">
                        <div>
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{currentLang.companyIndustry}</p>
                          <p className="text-base font-black italic text-slate-700">Healthcare / Retail</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{currentLang.estimatedRelief}</p>
                          <p className="text-base font-black italic text-slate-700">RM 45,000.00</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{currentLang.relatedPrecedents}</p>
                          <p className="text-xs font-bold text-slate-500 leading-relaxed">Match found with Award 124/2023 - Redundancy Justification.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm">
                      <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3"><FileText className="w-6 h-6 text-indigo-600" /> {currentLang.evidenceBundle}</h3>
                      <div className="space-y-4">
                        {[
                          { name: 'Statement_of_Case.pdf', tag: 'SOC' },
                          { name: 'Statement_in_Reply.pdf', tag: 'SIR' },
                          { name: 'Employment_Contract.pdf', tag: 'EVIDENCE' },
                          { name: 'Letter_of_Termination.pdf', tag: 'EVIDENCE' }
                        ].map((doc, idx) => (
                          <button key={idx} className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-zinc-900 hover:text-white border border-slate-100 rounded-2xl transition-all group">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-white/10"><FileText className="w-4 h-4 text-slate-400 group-hover:text-white" /></div>
                              <div className="text-left">
                                <p className="text-xs font-black truncate max-w-[120px]">{doc.name}</p>
                                <span className="text-[9px] font-black text-blue-600 group-hover:text-blue-300 uppercase tracking-widest">{doc.tag}</span>
                              </div>
                            </div>
                            <Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M6 SCHEDULE INTERNAL ---------------- */}
            {dashActiveView === 'schedule_int' && !internalActionView && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <h3 className="text-h3 text-slate-900">Master Court Calendar</h3>
                  <button onClick={() => setInternalActionView('add_schedule')} className="text-body-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-md flex items-center justify-center transition-all active:scale-95"><Calendar className="w-4 h-4 mr-2" /> Schedule</button>
                </div>
                <div className="border border-slate-200 rounded-[20px] overflow-hidden bg-slate-50 overflow-x-auto">
                  <div className="min-w-[800px]">
                    <div className="grid grid-cols-5 bg-slate-100 border-b border-slate-200 text-ui-label text-slate-500 divide-x divide-slate-200">
                      {['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13'].map(d => <div key={d} className="p-3 md:p-4 text-center">{d}</div>)}
                    </div>
                    <div className="grid grid-cols-5 min-h-[400px] divide-x divide-slate-200 bg-white">
                      {/* Mon 9 */}
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3">
                        {upcomingHearings.slice(0, 1).map((c, i) => (
                          <div key={i} className="p-2 md:p-3 bg-white border border-blue-200 shadow-sm rounded-xl cursor-pointer hover:border-blue-500 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                            <span className="text-ui-label text-slate-900 block mb-1">{c.time || '09:00 AM'}</span>
                            <span className="text-ui-label text-slate-500 block leading-tight">{c.id}</span>
                            <span className="text-ui-label text-blue-700 bg-blue-50 mt-2 inline-block px-1.5 rounded truncate w-full">{c.claimant} v {c.respondent}</span>
                          </div>
                        ))}
                      </div>
                      {/* Tue 10 */}
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3">
                        {upcomingHearings.slice(1, 2).map((c, i) => (
                          <div key={i} className="p-2 md:p-3 bg-white border border-emerald-200 shadow-sm rounded-xl cursor-pointer hover:border-emerald-500 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                            <span className="text-ui-label text-slate-900 block mb-1">{c.time || '10:00 AM'}</span>
                            <span className="text-ui-label text-slate-500 block leading-tight">{c.id}</span>
                            <span className="text-ui-label text-emerald-700 bg-emerald-50 mt-2 inline-block px-1.5 rounded truncate w-full">{c.claimant} v {c.respondent}</span>
                          </div>
                        ))}
                      </div>
                      {/* Wed 11 */}
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3 bg-blue-50/10">
                        {upcomingHearings.slice(2, 4).map((c, i) => (
                          <div key={i} className="p-2 md:p-3 bg-white border border-indigo-200 shadow-sm rounded-xl cursor-pointer hover:border-indigo-500 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                            <span className="text-ui-label text-slate-900 block mb-1">{c.time || '11:00 AM'}</span>
                            <span className="text-ui-label text-slate-500 block leading-tight">{c.id}</span>
                            <span className="text-ui-label text-indigo-700 bg-indigo-50 mt-2 inline-block px-1.5 rounded truncate w-full">{c.claimant} v {c.respondent}</span>
                          </div>
                        ))}
                      </div>
                      {/* Thu 12 */}
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3 bg-blue-50/30">
                        {upcomingHearings.slice(4, 5).map((c, i) => (
                          <div key={i} className="p-2 md:p-3 bg-white border border-rose-200 shadow-sm rounded-xl cursor-pointer hover:border-rose-500 transition-colors relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                            <span className="text-ui-label text-slate-900 block mb-1">{c.time || '02:00 PM'}</span>
                            <span className="text-ui-label text-slate-500 block leading-tight">{c.id}</span>
                            <span className="text-ui-label text-rose-700 bg-rose-50 mt-2 inline-block px-1.5 rounded truncate w-full">{c.claimant} v {c.respondent}</span>
                          </div>
                        ))}
                      </div>
                      {/* Fri 13 */}
                      <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {dashActiveView === 'schedule_int' && internalActionView === 'add_schedule' && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-slate-100">
                  <button onClick={() => setInternalActionView(null)} className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-colors mt-1"><ArrowLeft className="w-5 h-5 text-slate-600" /></button>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{currentLang.schedNewHearing}</h2>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">Assign a date, time, and court for an active case.</p>
                  </div>
                </div>

                <div className="max-w- bg-slate-50 p-6 md:p-10 rounded-[32px] border border-slate-100 shadow-sm">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">Case No. (Optional)</label>
                        <input type="text" placeholder="e.g. 2/4-123/26" className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 placeholder:font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">Case Category</label>
                        <select className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
                          <option>Dismissal (S.20)</option>
                          <option>Trade Dispute (S.26)</option>
                          <option>Non-Compliance (S.56)</option>
                          <option>Reference (S.33A)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">Claimant</label>
                        <input type="text" placeholder="Enter Claimant Name" className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 placeholder:font-medium" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">Respondent</label>
                        <input type="text" placeholder="Enter Respondent Name" className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300 placeholder:font-medium" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">{currentLang.date}</label>
                        <input type="date" className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all custom-date-input" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">{currentLang.timeCol}</label>
                        <input type="time" className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all custom-time-input" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-widest font-black text-slate-500 ml-1">{currentLang.courtLocation}</label>
                      <select className="w-full p-4 border border-slate-200 rounded-2xl bg-white outline-none font-bold text-slate-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
                        <option>Court 1 - Y.A. Dato' Wan Jeffry Bin Kassim</option>
                        <option>Court 2 - Y.A. Puan Rusita Binti Md Lazim</option>
                        <option>Court 3 - Y.A. Dato' Syed Noh Bin Said</option>
                        <option>Court 4 - Y.A. Tuan Amrik Singh</option>
                        <option>{currentLang.virtualCourtHearing}</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-4 pt-8 mt-8 border-t border-slate-200/60">
                      <button onClick={() => setInternalActionView(null)} className="px-8 py-3.5 font-bold text-slate-700 hover:bg-slate-200 bg-slate-100 rounded-2xl transition-all">{currentLang.cancel}</button>
                      <button onClick={() => setInternalActionView(null)} className="px-8 py-3.5 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all active:scale-95">{currentLang.saveSchedule}</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M3 NOTICE ---------------- */}
            {dashActiveView === 'notice' && !internalActionView && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">{currentLang.dashNotice}</h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.noticeManagementSub}</p>
                  </div>
                  <button
                    onClick={() => setInternalActionView('notice_form')}
                    className="flex items-center px-6 py-3 bg-[#111111] hover:bg-black text-white text-sm font-black rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <Plus className="w-4 h-4 mr-2" /> {currentLang.addNotice}
                  </button>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input type="text" placeholder={currentLang.searchNotices} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 outline-none">
                    <option>{currentLang.allCategories}</option>
                    <option>{currentLang.generalCat}</option>
                    <option>{currentLang.caseCat}</option>
                  </select>
                  <select className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 outline-none">
                    <option>{currentLang.allStatus}</option>
                    <option>{currentLang.activeStatus}</option>
                    <option>{currentLang.inactiveStatus}</option>
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[800px]">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-slate-400">{currentLang.noticeTitle}</th>
                        <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-slate-400">{currentLang.category}</th>
                        <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-slate-400">{currentLang.date}</th>
                        <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-slate-400">{currentLang.status}</th>
                        <th className="py-4 px-4 text-right text-[11px] font-black uppercase tracking-widest text-slate-400">{currentLang.actionCol}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {mockNotices.map((n, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="py-5 px-4 font-black text-slate-900 text-body-sm">{n.title}</td>
                          <td className="py-5 px-4"><span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-lg uppercase">{n.category}</span></td>
                          <td className="py-5 px-4 text-body-sm font-bold text-slate-500">{n.date}</td>
                          <td className="py-5 px-4">
                            <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${n.status === 'Aktif' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                              {n.status}
                            </span>
                          </td>
                          <td className="py-5 px-4 text-right">
                            <button
                              onClick={() => { setSelectedInternalItem(n); setInternalActionView('notice_form'); }}
                              className="px-4 py-2 bg-slate-100 hover:bg-zinc-900 hover:text-white text-slate-600 text-xs font-black rounded-lg transition-all"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {dashActiveView === 'notice' && internalActionView === 'notice_form' && (
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-6 mb-10">
                  <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90"><ArrowLeft className="w-6 h-6" /></button>
                  <div><h2 className="text-3xl font-black text-[#1E1E2D]">{selectedInternalItem ? currentLang.editNotice : currentLang.addNotice}</h2><p className="text-base font-bold text-slate-500 mt-1">{currentLang.configNoticeSub}</p></div>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
                  <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.noticeTitle}</label><input type="text" defaultValue={selectedInternalItem?.title} placeholder={currentLang.placeholderCourtClosure} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner" /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.category}</label><select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner"><option>{currentLang.generalCat}</option><option>{currentLang.caseCat}</option></select></div>
                    <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.status}</label><select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner"><option>{currentLang.activeStatus}</option><option>{currentLang.inactiveStatus}</option></select></div>
                  </div>
                  <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.noticeContent}</label><textarea defaultValue={selectedInternalItem?.content} rows={5} placeholder={currentLang.placeholderNoticeContent} className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner"></textarea></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.displayDate}</label><input type="date" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner" /></div>
                    <div className="space-y-2"><label className="text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">{currentLang.endDateOptional}</label><input type="date" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-base font-bold outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-inner" /></div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button onClick={() => setInternalActionView(null)} className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 text-base font-extrabold rounded-2xl transition-all">Batal</button>
                    <button onClick={() => setInternalActionView(null)} className="flex-[2] py-4 bg-[#111111] hover:bg-black text-white text-base font-extrabold rounded-2xl shadow-xl transition-all active:scale-95">Simpan & Publish</button>
                  </div>
                </div>
              </div>
            )}

            {dashActiveView === 'notice_board' && (() => {
              const activeNotices = mockNotices.filter(n => n.status === 'Aktif');
              const displayNotice = selectedInternalItem || activeNotices[0];
              const showPreview = !hideNoticePreview && displayNotice;

              return (
                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8 pb-6 border-b border-slate-100">
                    <div>
                      <h3 className="text-h3 text-slate-900 font-black flex items-center gap-3">
                        <Bell className="w-8 h-8 text-blue-600" /> {currentLang.digitalNoticeBoard}
                      </h3>
                      <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.noticeBoardSub}</p>
                    </div>
                  </div>

                  <div className={`grid ${showPreview ? 'grid-cols-1 lg:grid-cols-3 gap-8' : 'grid-cols-1'}`}>
                    {/* Left List */}
                    <div className={`${showPreview ? 'col-span-1 lg:border-r border-slate-100 lg:pr-6 space-y-4 max-h-[800px] overflow-y-auto custom-scrollbar' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}`}>
                      {activeNotices.length > 0 ? (
                        activeNotices.map((n, i) => (
                          <div key={i} className={`bg-white p-6 sm:p-8 rounded-[24px] border transition-all group flex flex-col cursor-pointer ${showPreview && displayNotice?.id === n.id ? 'border-blue-500 shadow-md bg-blue-50/50' : 'border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg'}`} onClick={() => { setSelectedInternalItem(n); setHideNoticePreview(false); }}>
                            <div className="flex justify-between items-start mb-4">
                              <span className={`px-3 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest ${showPreview && displayNotice?.id === n.id ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>{n.category}</span>
                              <span className="text-[11px] font-bold text-slate-400">{n.date}</span>
                            </div>
                            <h4 className={`text-lg font-black transition-colors mb-3 ${showPreview && displayNotice?.id === n.id ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>{n.title}</h4>
                            <p className="text-xs font-bold text-slate-500 line-clamp-2 leading-relaxed flex-1">{n.content}</p>
                            <div className="mt-6 flex items-center justify-between">
                              <span className="text-[11px] font-black text-blue-600 group-hover:underline uppercase tracking-widest">{currentLang.clickToReadMore}</span>
                              <ChevronRight className={`w-4 h-4 transition-all ${showPreview && displayNotice?.id === n.id ? 'text-blue-600 translate-x-1' : 'text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1'}`} />
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="col-span-full">
                          <EmptyState
                            title={currentLang.noNoticesTitle}
                            description={currentLang.noNoticesDesc}
                            icon={Bell}
                          />
                        </div>
                      )}
                    </div>

                    {/* Right Preview */}
                    {showPreview && (
                      <div className="col-span-2 bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-200 shadow-inner relative max-h-[800px] overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600"></div>
                        <button onClick={() => setHideNoticePreview(true)} className="self-end p-2 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors mb-6 shadow-sm"><X className="w-5 h-5 text-slate-600" /></button>

                        <div className="flex justify-between items-center mb-8">
                          <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-black rounded-xl uppercase tracking-widest">{displayNotice.category}</span>
                          <span className="text-sm font-bold text-slate-500">{displayNotice.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-8 tracking-tight">{displayNotice.title}</h2>

                        <div className="prose prose-slate prose-p:leading-relaxed prose-p:font-bold prose-p:text-slate-600 max-w-none flex-1">
                          <p className="whitespace-pre-line text-sm md:text-base">{displayNotice.content}</p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-400"><Scale className="w-5 h-5" /></div>
                            <div>
                              <p className="text-xs font-black text-slate-900 uppercase tracking-widest">{currentLang.courtRegistrar}</p>
                              <p className="text-[10px] font-bold text-slate-500 mt-1">Mahkamah Perusahaan Malaysia</p>
                            </div>
                          </div>
                          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 text-xs uppercase tracking-widest font-black rounded-xl transition-all shadow-sm"><Printer className="w-4 h-4" /> {currentLang.printNotice}</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* ---------------- M11 COLLECTIVE ---------------- */}
            {/* ---------------- M6 COLLECTIVE AGREEMENTS ---------------- */}
            {dashActiveView === 'collective' && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {caView !== 'grid' && (
                      <button 
                        onClick={() => { setCaView('grid'); setSelectedCA(null); }}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5 text-slate-600" />
                      </button>
                    )}
                    <h3 className="text-h3 text-slate-900">
                      {caView === 'grid' ? currentLang.dashCollective : caView === 'filing' ? 'Pendaftaran Perjanjian Baru' : 'Butiran Perjanjian Kolektif'}
                    </h3>
                  </div>
                  {caView === 'grid' && (
                    <button 
                      onClick={() => setCaView('filing')}
                      className="px-6 py-2.5 bg-blue-600 text-white text-body-sm font-bold rounded-xl hover:bg-blue-700 shadow-sm transition-colors flex items-center gap-2"
                    >
                      <FilePlus className="w-4 h-4" /> Daftar Perjanjian Baru
                    </button>
                  )}
                </div>

                {caView === 'grid' && (
                  <>
                    {/* CA Search & Filters */}
                    <div className="bg-white p-4 border border-slate-200 rounded-2xl flex flex-col md:flex-row items-center gap-4 transition-all shadow-sm">
                       <div className="relative flex-1 group">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input 
                            type="text"
                            placeholder="Cari mengikut nama syarikat atau kesatuan..."
                            value={caSearchQuery}
                            onChange={(e) => setCaSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-body-sm outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-medium"
                          />
                       </div>
                       <select 
                         value={caSectorFilter}
                         onChange={(e) => setCaSectorFilter(e.target.value)}
                         className="px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-body-sm font-bold text-slate-600 outline-none focus:border-blue-500 transition-all"
                       >
                         <option value="All Sectors">Semua Sektor</option>
                         {Array.from(new Set(mockCollectiveAgreements.map(ca => ca.category))).map(s => <option key={s} value={s}>{s}</option>)}
                       </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockCollectiveAgreements
                        .filter(ca => {
                          const matchesQuery = !caSearchQuery || ca.title.toLowerCase().includes(caSearchQuery.toLowerCase());
                          const matchesSector = caSectorFilter === 'All Sectors' || ca.category === caSectorFilter;
                          return matchesQuery && matchesSector;
                        })
                        .map((ca) => (
                          <div key={ca.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all group relative">
                             <div className="flex items-center justify-between mb-4">
                               <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${
                                 ca.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                                 ca.status === 'Expired' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                               }`}>
                                 {ca.status}
                               </span>
                               <span className="text-[10px] font-mono font-bold text-slate-400">{ca.id}</span>
                             </div>
                             <h4 className="text-body-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">{ca.title}</h4>
                             <div className="flex items-center gap-2 text-ui-label text-slate-500 mb-4">
                               <KanbanSquare className="w-3.5 h-3.5 text-blue-400" /> {ca.category}
                             </div>
                             <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                               <div>
                                 <p className="text-[10px] font-bold text-slate-400 uppercase">Tempoh Sah</p>
                                 <p className="text-body-sm font-bold text-slate-700">{ca.validity}</p>
                               </div>
                               <div className="text-right">
                                 <p className="text-[10px] font-bold text-slate-400 uppercase">Kemaskini</p>
                                 <p className="text-body-sm font-bold text-slate-700">{ca.lastUpdated}</p>
                               </div>
                             </div>
                             <button 
                               onClick={() => { setSelectedCA(ca); setCaView('detail'); }}
                               className="w-full mt-6 py-2.5 bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-bold rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-2"
                             >
                               <Search className="w-3.5 h-3.5" /> Lihat Butiran
                             </button>
                          </div>
                      ))}
                    </div>
                  </>
                )}

                {caView === 'filing' && (
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-4xl">
                     <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-body-sm font-bold text-slate-700">Pihak 1 (Majikan/Syarikat)</label>
                              <input type="text" placeholder="Nama Syarikat Majikan" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-medium" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-body-sm font-bold text-slate-700">Pihak 2 (Kesatuan Sekerja)</label>
                              <input type="text" placeholder="Nama Kesatuan Sekerja" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-medium" />
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <div className="space-y-2">
                              <label className="text-body-sm font-bold text-slate-700">Sektor / Industri</label>
                              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-bold">
                                 <option>Pembuatan</option>
                                 <option>Perkhidmatan</option>
                                 <option>Kewangan</option>
                                 <option>Pertanian</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-body-sm font-bold text-slate-700">Tarikh Mula</label>
                              <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-medium" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-body-sm font-bold text-slate-700">Tarikh Tamat</label>
                              <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-medium" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-body-sm font-bold text-slate-700">Skop Perjanjian</label>
                           <textarea rows={4} placeholder="Nyatakan skop pekerja yang terlibat..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500 font-medium"></textarea>
                        </div>
                        <div className="p-10 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50 flex flex-col items-center justify-center text-center">
                           <Upload className="w-12 h-12 text-slate-300 mb-4" />
                           <p className="text-body-sm font-bold text-slate-600">Muat Naik Dokumen Perjanjian (PDF)</p>
                           <p className="text-[11px] text-slate-400 mt-1">Sila pastikan dokumen lengkap ditandatangani oleh kedua-dua pihak</p>
                           <button className="mt-6 px-6 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-black rounded-lg hover:shadow-md transition-all">Pilih Fail</button>
                        </div>
                        <div className="flex justify-end gap-3 pt-4">
                           <button onClick={() => setCaView('grid')} className="px-6 py-3 text-slate-500 font-bold hover:text-slate-700">Batal</button>
                           <button onClick={() => setCaView('grid')} className="px-10 py-3 bg-blue-600 text-white font-black rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">Hantar Pendaftaran</button>
                        </div>
                     </div>
                  </div>
                )}

                {caView === 'detail' && selectedCA && (
                  <div className="space-y-8">
                     <div className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 text-blue-600"><Users className="w-64 h-64" /></div>
                        <div className="relative z-10 space-y-10">
                           <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                              <div className="space-y-4 max-w-2xl">
                                 <span className={`px-3 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${
                                   selectedCA.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                                   selectedCA.status === 'Expired' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'
                                 }`}>
                                   Status: {selectedCA.status}
                                 </span>
                                 <h2 className="text-h2 text-slate-900 leading-tight">{selectedCA.title}</h2>
                                 <div className="flex flex-wrap gap-4 text-ui-label font-bold text-slate-400">
                                    <span className="flex items-center gap-1.5"><KanbanSquare className="w-4 h-4" /> {selectedCA.category}</span>
                                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Dikemaskini: {selectedCA.lastUpdated}</span>
                                 </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                 <button className="px-6 py-3 bg-blue-600 text-white text-xs font-black rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                                   <Download className="w-4 h-4" /> Muat Turun Dokumen
                                 </button>
                                 <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 text-xs font-black rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                   <Printer className="w-4 h-4" /> Cetak Sijil
                                 </button>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                              <div className="md:col-span-2 space-y-8">
                                 <div className="space-y-4">
                                    <h4 className="text-body-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                       <Users className="w-4 h-4 text-blue-500" /> Pihak-Pihak Terlibat
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                       {selectedCA.parties?.map((p: string, i: number) => (
                                          <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                             <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">{i === 0 ? 'Majikan' : 'Kesatuan'}</p>
                                             <p className="text-body-sm font-bold text-slate-800">{p}</p>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                                 <div className="space-y-4">
                                    <h4 className="text-body-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                       <Scale className="w-4 h-4 text-slate-400" /> Skop Perjanjian
                                    </h4>
                                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                       <p className="text-body-md text-slate-600 leading-relaxed italic">
                                          "{selectedCA.scope}"
                                       </p>
                                    </div>
                                 </div>
                              </div>
                              <div className="space-y-6">
                                 <div className="p-6 bg-slate-900 text-white rounded-[24px] shadow-xl">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Metadata Perjanjian</p>
                                    <div className="space-y-4">
                                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                                          <span className="text-xs opacity-60">ID Rujukan:</span>
                                          <span className="text-xs font-mono font-bold text-blue-400">{selectedCA.id}</span>
                                       </div>
                                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                                          <span className="text-xs opacity-60">Tempoh Kesahihan:</span>
                                          <span className="text-xs font-bold">{selectedCA.validity}</span>
                                       </div>
                                       <div className="flex justify-between items-center py-2 border-b border-white/10">
                                          <span className="text-xs opacity-60">Bilangan Artikel:</span>
                                          <span className="text-xs font-bold">{selectedCA.articles} Artikel</span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="p-6 bg-blue-50 border border-blue-100 rounded-[24px]">
                                    <h5 className="text-xs font-black text-blue-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                       <Lightbulb className="w-4 h-4" /> Insight Kesatuan
                                    </h5>
                                    <p className="text-[11px] font-medium text-blue-600/80 leading-relaxed">
                                       Perjanjian ini adalah model standard bagi sektor {selectedCA.category?.toLowerCase()}. Mempunyai pematuhan WCAG 2.1 yang tinggi dalam pendokumentasian.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            )}

            {/* ---------------- E-SEBUTAN ---------------- */}
            {dashActiveView === 'sebutan' && (
              <div className="h-[calc(100vh-12rem)] min-h-[500px]">
                <SebutanChat />
              </div>
            )}

            {/* ---------------- M7 DIGITAL DISPLAY ---------------- */}
            {dashActiveView === 'display' && (
              <div className="flex flex-col items-center">
                <p className="text-ui-label text-slate-400 mb-6 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">Live Preview: Mahkamah 1 External Display</p>
                <div className="w-full max-w-4xl aspect-video bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-premium p-6 md:p-10 flex flex-col justify-between text-slate-900 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 p-4 opacity-5 text-slate-900"><Scale className="w-48 h-48 md:w-96 md:h-96" /></div>
                  <div className="relative z-10">
                    <h2 className="text-h3 text-slate-500 tracking-widest uppercase mb-1">Mahkamah 1</h2>
                    <h3 className="text-h2 text-blue-700">Y.A. Dato' Wan Jeffry Bin Kassim</h3>
                  </div>
                  <div className="bg-slate-50 p-4 md:p-8 rounded-[16px] md:rounded-[24px] border border-slate-200 relative z-10 shadow-sm">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6"><span className="px-3 py-1 md:px-4 md:py-1.5 bg-rose-500 text-white text-ui-label tracking-widest rounded-lg animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.3)]">{currentLang.nowHearing}</span> <span className="font-mono text-h4 text-slate-500">1/1-1522/25</span></div>
                    <h4 className="text-h2 mb-1 md:mb-2 text-slate-900">Tay Hwee Lan</h4>
                    <p className="text-h4 text-slate-600">{currentLang.vsCol}: Healthy Vision Sdn Bhd</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end relative z-10 gap-4 mt-4 md:mt-0">
                    <div><p className="text-ui-label text-slate-400 uppercase mb-1">{currentLang.nextCase}</p><p className="font-bold text-body-lg text-slate-600">11:00 AM - Azman Bin Isa</p></div>
                    <div className="text-display font-mono text-blue-700">09:14 AM</div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- CHAIRMAN WORKSPACE ---------------- */}
            {dashActiveView === 'chairman' && !internalActionView && (
              <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-h3 text-slate-900 font-black">{currentLang.chairmanWorkspace}</h3>
                    <p className="text-body-sm text-slate-500 font-bold mt-1">{currentLang.chairmanWorkspaceSub}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-ui-label text-slate-500 mb-2">{currentLang.assignedCases}</p><h3 className="text-h1 text-slate-900">28</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-ui-label text-slate-500 mb-2">{currentLang.hearingsThisWeek}</p><h3 className="text-h1 text-slate-900">6</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-ui-label text-slate-500 mb-2">{currentLang.mentionsThisWeek}</p><h3 className="text-h1 text-slate-900">4</h3></div>
                  <div className="bg-white p-5 md:p-6 rounded-[24px] border border-rose-200 bg-rose-50/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-ui-label text-rose-500 mb-2">{currentLang.awardsPending}</p><h3 className="text-h1 text-rose-600">3</h3></div>
                </div>
                <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                  <h3 className="text-h3 text-slate-900 mb-6 md:mb-8">{currentLang.assignedCaseRoster}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[600px]">
                      <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase">{currentLang.caseNumberCol}</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase">{currentLang.caseTitleCol}</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase text-center">{currentLang.integrationLogsStatus}</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase text-right">{currentLang.hearingDateCol}</th></tr></thead>
                      <tbody className="divide-y divide-slate-50">
                        {chairmanCases.map((c, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-4 text-body-sm font-mono font-bold text-blue-600 cursor-pointer hover:underline">{c.id}</td>
                            <td className="py-4 px-4 text-body-sm text-slate-900">{c.title}</td>
                            <td className="py-4 px-4 text-center">
                              <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 text-ui-label">
                                {c.status === 'Hearing' ? currentLang.stageHearing :
                                  c.status === 'Mention' ? currentLang.stageMention :
                                    c.status === 'Registration' ? currentLang.stageRegistration :
                                      c.status === 'Allocation' ? currentLang.stageAllocation :
                                        c.status === 'Award' ? currentLang.stageAward : c.status}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-body-sm text-slate-500 text-right flex items-center justify-end gap-2">
                              <button
                                onClick={() => setDashActiveView('sebutan')}
                                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl text-body-sm font-bold transition-colors shadow-md active:scale-95"
                              >
                                {currentLang.startSession}
                              </button>
                              <button
                                onClick={() => { setSelectedInternalItem(c); setInternalActionView('hearing_notes'); }}
                                className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-xl text-body-sm font-bold transition-colors"
                              >
                                {currentLang.workspace}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {dashActiveView === 'chairman' && internalActionView === 'hearing_notes' && selectedInternalItem && (
              <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-10rem)]">
                <div className="flex items-center justify-between mb-6 flex-shrink-0">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90"><ArrowLeft className="w-6 h-6" /></button>
                    <div>
                      <h2 className="text-h3 text-slate-900">{currentLang.hearingWorkspace}</h2>
                      <p className="text-body-sm text-blue-600">{selectedInternalItem.id} &bull; {selectedInternalItem.title}</p>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 bg-emerald-600 text-white text-body-sm rounded-xl hover:bg-emerald-700 shadow-md flex items-center"><Save className="w-4 h-4 mr-2" /> {currentLang.saveNotes}</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                  <div className="lg:col-span-2 flex flex-col bg-white rounded-[32px] overflow-hidden shadow-premium border border-slate-200 relative">
                    <div className="p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-slate-900">
                      <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div><h3 className="text-ui-label text-slate-500 font-black tracking-widest uppercase">{currentLang.liveHearingRecord}</h3></div>
                      <div className="flex gap-2"><button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-slate-400"><Mic className="w-4 h-4" /></button><button className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-slate-400"><Video className="w-4 h-4" /></button></div>
                    </div>
                    <div className="flex-1 p-8 overflow-y-auto">
                      <textarea placeholder={currentLang.hearingNotesPlace} className="w-full h-full bg-white text-h4 text-slate-900 leading-relaxed resize-none outline-none placeholder:text-slate-300"></textarea>
                    </div>
                    <div className="p-4 bg-slate-50 border-t border-slate-200 text-ui-label text-slate-400 text-center uppercase tracking-widest">{currentLang.autosavedAt} 09:42:15 AM</div>
                  </div>
                  <div className="space-y-6 overflow-y-auto pr-2">
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h4 className="text-ui-label text-slate-400 mb-4 flex items-center"><Gavel className="w-4 h-4 mr-2" /> {currentLang.benchReference}</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-body-sm text-slate-800 mb-1">{currentLang.relevantAward}</p>
                          <p className="text-ui-label text-slate-500 mb-2 leading-tight">Award 120/2024 - Similar Redundancy Facts</p>
                          <button className="text-blue-600 text-ui-label hover:underline">{currentLang.viewDecision}</button>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                          <p className="text-body-sm text-slate-400 uppercase">{currentLang.claimantIc}</p>
                          <p className="text-h6 font-mono text-slate-600">880214-14-XXXX</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
                      <h4 className="text-ui-label text-slate-400 mb-4 flex items-center"><FileText className="w-4 h-4 mr-2" /> {currentLang.pleadingsQuickAccess}</h4>
                      <div className="space-y-2">
                        {[
                          currentLang.statementOfCase,
                          currentLang.statementInReply,
                          currentLang.bundleOfDocs,
                          currentLang.witnessStatement + ' - C1'
                        ].map((doc, idx) => (
                          <button key={idx} className="w-full text-left p-3 hover:bg-blue-50 rounded-xl border border-transparent hover:border-blue-100 transition-all group">
                            <span className="text-body-sm text-slate-700 group-hover:text-blue-700">{doc}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M13 USERS ---------------- */}
            {dashActiveView === 'users' && !internalActionView && (
              <div className="bg-white p-6 md:p-10 rounded-[32px] border border-slate-200 shadow-sm animate-in fade-in duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-h2 text-slate-900">User & Role Management</h3>
                    <p className="text-body-sm text-slate-500 mt-1">Manage platform access, roles, and permissions (US-061).</p>
                  </div>
                  <button
                    onClick={() => setInternalActionView('add_user')}
                    className="flex justify-center items-center px-6 py-3 bg-[#111111] text-white text-body-sm rounded-xl hover:bg-black shadow-md transition-all active:scale-95">
                    <FilePlus className="w-4 h-4 mr-2" /> Add New User
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[700px]">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-5 px-4 text-ui-label text-slate-400 font-bold uppercase">User</th>
                        <th className="py-5 px-4 text-ui-label text-slate-400 font-bold uppercase">Role</th>
                        <th className="py-5 px-4 text-ui-label text-slate-400 font-bold uppercase text-center">Status</th>
                        <th className="py-5 px-4 text-ui-label text-slate-400 font-bold uppercase text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {[
                        { id: 'u1', name: 'Ahmad bin Zulkifli', email: 'ahmad.z@mpm.gov.my', role: 'Chairman', status: 'Active' },
                        { id: 'u2', name: 'Sarah Lee', email: 'sarah.lee@mpm.gov.my', role: 'Registrar', status: 'Active' },
                        { id: 'u3', name: 'Izzuddin Ibrahim', email: 'izzuddin@mpm.gov.my', role: 'Admin', status: 'Active' },
                        { id: 'u4', name: 'Fatimah Zakaria', email: 'fatimah@mpm.gov.my', role: 'YDP', status: 'Inactive' },
                      ].map((user, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-6 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-h6 text-[#3B82F6]">{user.name[0]}</div>
                              <div><p className="text-body-md text-[#1E1E2D] tracking-tight">{user.name}</p><p className="text-ui-label text-slate-400">{user.email}</p></div>
                            </div>
                          </td>
                          <td className="py-6 px-4"><span className="px-3 py-1 bg-blue-50 text-[#3B82F6] text-ui-label rounded-lg uppercase tracking-wider">{user.role}</span></td>
                          <td className="py-6 px-4 text-center"><span className={`px-2.5 py-1 rounded-full text-ui-label ${user.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{user.status}</span></td>
                          <td className="py-6 px-4 text-right">
                            <button
                              onClick={() => { setSelectedInternalItem(user); setInternalActionView('edit_user'); }}
                              className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors group">
                              <SlidersHorizontal className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sub-view: Add New User */}
            {dashActiveView === 'users' && internalActionView === 'add_user' && (
              <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-4 mb-8">
                  <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90">
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <h3 className="text-h2 text-slate-900">{currentLang.addNewUser}</h3>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setInternalActionView(null); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-ui-label text-slate-400">Full Name</label>
                      <input type="text" placeholder={currentLang.namePlace} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-body-md font-bold" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-ui-label text-slate-400">Email Address</label>
                      <input type="email" placeholder="name@mpm.gov.my" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-body-md font-bold" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-ui-label text-slate-400">{currentLang.assignedRole}</label>
                      <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none text-body-md font-bold appearance-none">
                        <option>{currentLang.chairmanLabel}</option>
                        <option>{currentLang.registrarLabel}</option>
                        <option>{currentLang.ydpExecLabel}</option>
                        <option>{currentLang.sysAdminLabel}</option>
                        <option>{currentLang.officerLabel}</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex gap-4">
                    <button type="submit" className="flex-1 py-4 bg-blue-600 text-white text-body-md font-bold rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
                      {currentLang.createAccount}
                    </button>
                    <button type="button" onClick={() => setInternalActionView(null)} className="flex-1 py-4 bg-slate-100 text-slate-600 text-body-md font-bold rounded-2xl hover:bg-slate-200 transition-all">
                      {currentLang.cancel}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Sub-view: Edit User / Permissions */}
            {dashActiveView === 'users' && internalActionView === 'edit_user' && selectedInternalItem && (
              <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-[32px] border border-slate-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setInternalActionView(null)} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90">
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <div>
                      <h3 className="text-h2 text-slate-900">User Settings</h3>
                      <p className="text-ui-label text-blue-600">{selectedInternalItem.name}</p>
                    </div>
                  </div>
                  <div className={`px-4 py-1.5 rounded-full text-ui-label font-bold uppercase tracking-widest ${selectedInternalItem.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {selectedInternalItem.status}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <h4 className="text-ui-label text-slate-400 mb-4">Account Information</h4>
                      <div className="space-y-4">
                        <div><p className="text-ui-label text-slate-400 mb-1">Current Role</p><p className="text-body-md font-black text-slate-900">{selectedInternalItem.role}</p></div>
                        <div><p className="text-ui-label text-slate-400 mb-1">Registered Email</p><p className="text-body-md font-black text-slate-900">{selectedInternalItem.email}</p></div>
                      </div>
                    </div>

                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Quick Actions</h4>
                      <div className="space-y-3">
                        <button className="w-full p-3 bg-white border border-slate-200 rounded-xl text-body-sm font-bold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                          <Key className="w-4 h-4" /> Reset Password
                        </button>
                        <button className={`w-full p-3 bg-white border rounded-xl text-body-sm font-bold transition-all flex items-center justify-center gap-2 ${selectedInternalItem.status === 'Active' ? 'border-rose-100 text-rose-600 hover:bg-rose-50' : 'border-emerald-100 text-emerald-600 hover:bg-emerald-50'}`}>
                          {selectedInternalItem.status === 'Active' ? <><ShieldAlert className="w-4 h-4" /> Deactivate Account</> : <><CheckCircle2 className="w-4 h-4" /> Activate Account</>}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">System Permissions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: 'View Sensitive Case Data', enabled: true },
                        { label: 'Manage System Integrations', enabled: selectedInternalItem.role === 'Admin' },
                        { label: 'Issue Legal Awards', enabled: selectedInternalItem.role === 'Chairman' },
                        { label: 'Broadcast System Announcements', enabled: selectedInternalItem.role === 'Admin' || selectedInternalItem.role === 'YDP' },
                      ].map((p, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                          <span className="text-sm font-bold text-slate-700">{p.label}</span>
                          <div className={`w-10 h-5 rounded-full relative p-1 transition-colors ${p.enabled ? 'bg-blue-600' : 'bg-slate-200'}`}>
                            <div className={`w-3 h-3 bg-white rounded-full absolute ${p.enabled ? 'right-1' : 'left-1'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <button onClick={() => setInternalActionView(null)} className="w-full py-4 bg-[#111111] text-white font-black rounded-2xl hover:bg-black shadow-lg transition-all active:scale-[0.98]">
                      Save Configuration
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ---------------- M13 INTEGRATION ---------------- */}
            {dashActiveView === 'integration' && (
              <div className="space-y-6">
                <div className="bg-white p-8 md:p-10 rounded-[32px] border border-zinc-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-h2 text-zinc-900">API Integration Monitoring</h3>
                      <p className="text-body-sm font-bold text-slate-500 mt-1">Real-time status of cross-agency and SSO integrations (US-062).</p>
                    </div>
                    <span className="flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 text-ui-label font-bold rounded-full uppercase border border-emerald-100">All Systems Operational</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {mockSystemSettings.map((s, i) => (
                      <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-200 relative overflow-hidden group hover:border-blue-400 transition-all">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ServerCrash className="w-16 h-16" /></div>
                        <h4 className="text-zinc-500 text-ui-label mb-1">{s.name}</h4>
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`w-2.5 h-2.5 rounded-full ${s.status === 'Online' || s.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]'}`}></div>
                          <p className="text-h2 text-zinc-900">{s.status}</p>
                        </div>
                        <div className="flex justify-between items-end">
                          <div><p className="text-ui-label text-zinc-400 mb-1">Last Downtime</p><p className="text-body-sm font-bold text-zinc-600">{s.lastDowntime}</p></div>
                          <div className="text-right"><p className="text-ui-label text-zinc-400 mb-1">Latency</p><p className="text-body-sm font-bold text-blue-600">42ms</p></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 md:p-10 rounded-[32px] border border-zinc-200 shadow-sm">
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-h3 text-zinc-900">Recent API Transactions (JPPM/SSO/MyDigitalID)</h3>
                    <div className="flex gap-2"><div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-white"><ChevronLeft className="w-4 h-4" /></div><div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-white"><ChevronRight className="w-4 h-4" /></div></div>
                  </div>
                  <div className="space-y-4">
                    {integrationLogs.map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
                        <div className="flex items-center gap-5">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:rotate-12 ${log.status === 'Success' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}><RefreshCw className="w-6 h-6" /></div>
                          <div><p className="text-body-lg font-black text-zinc-900">{log.system} {log.type}</p><p className="text-ui-label text-zinc-400">Request ID: {log.id}</p></div>
                        </div>
                        <div className="text-right">
                          <span className={`px-4 py-1 rounded-full text-ui-label font-bold uppercase transition-shadow ${log.status === 'Success' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-rose-500 text-white shadow-lg shadow-rose-200'}`}>{log.status}</span>
                          <p className="text-ui-label text-zinc-400 mt-2">Timestamp: {log.time}</p>
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
                <div className="flex items-center justify-between mb-8"><h3 className="text-h3 text-slate-900">Platform Usage Logs</h3><button className="p-2 hover:bg-slate-100 rounded-xl transition-colors"><ArrowUpRight className="w-5 h-5 text-slate-400" /></button></div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase">Timestamp</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase">Platform User</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase text-center">Role</th><th className="py-3 px-4 text-ui-label text-slate-400 font-bold uppercase text-right">Activity</th></tr></thead>
                    <tbody className="divide-y divide-slate-50">
                      {mockUsageLogs.map((log, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-body-sm font-semibold text-slate-500">{log.time}</td><td className="py-4 px-4"><p className="text-body-sm font-bold text-slate-900">{log.user}</p><p className="text-ui-label text-slate-400">{log.id}</p></td><td className="py-4 px-4 text-center"><span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-ui-label font-bold rounded-lg uppercase tracking-wider">{log.role}</span></td><td className="py-4 px-4 text-right text-body-sm font-bold text-slate-700">{log.action}</td></tr>
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
                  <h3 className="text-h3 text-slate-900 mb-8 pb-4 border-b border-slate-100">{currentLang.sysPreferences}</h3>
                  <div className="space-y-8">
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-body-md font-bold text-slate-900">{currentLang.strictDocVal}</h4><p className="text-body-sm text-slate-500">{currentLang.strictDocValSub}</p></div><div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute right-1"></div></div></div>
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-body-md font-bold text-slate-900">{currentLang.pubPortalMaint}</h4><p className="text-body-sm text-slate-500">{currentLang.pubPortalMaintSub}</p></div><div className="w-12 h-6 bg-slate-200 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute left-1"></div></div></div>
                    <div className="flex items-center justify-between"><div className="space-y-1"><h4 className="text-body-md font-bold text-slate-900">{currentLang.emailDispatch}</h4><p className="text-body-sm text-slate-500">{currentLang.emailDispatchSub}</p></div><div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer shadow-inner"><div className="w-4 h-4 bg-white rounded-full absolute right-1"></div></div></div>
                  </div>
                </div>
                <div className="bg-rose-50 border border-rose-200 p-8 rounded-[32px] flex items-center justify-between">
                  <div>
                    <h3 className="text-h3 text-rose-900">{currentLang.dangerZone}</h3>
                    <p className="text-body-sm text-rose-700 mt-1">{currentLang.dangerZoneSub}</p>
                  </div>
                  <button className="px-6 py-2.5 bg-rose-600 text-white text-body-sm font-bold rounded-xl hover:bg-rose-700 shadow-md transition-colors">
                    {currentLang.clearCache}
                  </button>
                </div>
              </div>
            )}

            {/* ---------------- SMART SEARCH (M8) ---------------- */}
            {dashActiveView === 'search' && (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                   <div>
                     <h3 className="text-h3 text-slate-900 font-bold">{currentLang.dashSearch}</h3>
                     <p className="text-body-sm text-slate-500 mt-1">AI-Powered Semantic & Vector Precedent Search</p>
                   </div>
                   <div className="flex items-center gap-3">
                     <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input 
                          type="text"
                          className="pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-body-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all min-w-[300px]"
                          placeholder={currentLang.searchPlace}
                          value={searchQuery}
                          onChange={(e) => {
                            setSearchQuery(e.target.value);
                            if (selectedAward) setSelectedAward(null);
                          }}
                        />
                     </div>
                     <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 relative group">
                        <Filter className="w-5 h-5 text-slate-600" />
                        {/* Filter Badge Simulation */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</div>
                     </button>
                   </div>
                </div>

                {/* Simplified Filter Bar */}
                <div className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-wrap items-center gap-4">
                   <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase px-1">Year</label>
                      <select 
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-body-sm font-bold text-slate-700 outline-none focus:border-blue-500"
                      >
                        <option value="All Years">All Years</option>
                        {chYears.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase px-1">Case Type</label>
                      <select 
                        value={filterCaseType}
                        onChange={(e) => setFilterCaseType(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-body-sm font-bold text-slate-700 outline-none focus:border-blue-500"
                      >
                        <option value="All Types">All Types</option>
                        {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase px-1">Court Location</label>
                      <select 
                        value={filterLocation}
                        onChange={(e) => setFilterLocation(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-body-sm font-bold text-slate-700 outline-none focus:border-blue-500"
                      >
                        <option value="All Locations">All Locations</option>
                        {Array.from(new Set(courtLocations.map(l => l.region))).map(r => <option key={r} value={r}>{r.toUpperCase()}</option>)}
                      </select>
                   </div>
                   <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase px-1">Status</label>
                      <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-body-sm font-bold text-slate-700 outline-none focus:border-blue-500"
                      >
                        <option value="All Statuses">All Statuses</option>
                        {caseStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                   </div>
                   <button 
                     onClick={() => {
                        setFilterYear('All Years');
                        setFilterCaseType('All Types');
                        setFilterLocation('All Locations');
                        setFilterStatus('All Statuses');
                        setSearchQuery('');
                     }}
                     className="self-end px-5 py-2 text-slate-400 text-body-sm font-bold hover:text-blue-600 transition-colors ml-auto"
                   >
                     Reset Filters
                   </button>
                </div>

                {!selectedAward ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {mockSearchResults
                      .filter(res => {
                        const matchesQuery = !searchQuery || res.title.toLowerCase().includes(searchQuery.toLowerCase()) || res.summary.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesYear = filterYear === 'All Years' || res.date.includes(filterYear);
                        const matchesType = filterCaseType === 'All Types' || res.type === filterCaseType;
                        const matchesLocation = filterLocation === 'All Locations' || res.location === filterLocation;
                        const matchesStatus = filterStatus === 'All Statuses' || res.status === filterStatus;
                        return matchesQuery && matchesYear && matchesType && matchesLocation && matchesStatus;
                      })
                      .map((res) => (
                      <div key={res.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all flex flex-col h-full group">
                         <div className="flex items-center justify-between mb-4">
                           <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                               {res.type?.includes('DISMISSAL') ? <Gavel className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                             </div>
                             <span className="text-ui-label font-bold text-slate-400">{res.id}</span>
                           </div>
                           <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">94% Semantic Match</span>
                         </div>
                         <h4 className="text-body-md font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{res.title}</h4>
                         <p className="text-body-sm text-slate-500 mb-6 line-clamp-3">{res.summary}</p>
                         <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1.5 text-ui-label text-slate-400">
                                <Calendar className="w-3.5 h-3.5" /> {res.date}
                              </div>
                              <div className="flex items-center gap-1.5 text-ui-label text-slate-400">
                                <Globe className="w-3.5 h-3.5" /> {res.court}
                              </div>
                           </div>
                           <button 
                             onClick={() => setSelectedAward(res)}
                             className="text-body-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                           >
                             {currentLang.viewBtn} <ArrowUpRight className="w-4 h-4" />
                           </button>
                         </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                     <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                        <button 
                          onClick={() => setSelectedAward(null)}
                          className="flex items-center gap-2 text-body-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back to Results
                        </button>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white border border-slate-200 text-body-sm font-bold text-slate-700 rounded-lg hover:bg-slate-50 flex items-center gap-2">
                            <Download className="w-4 h-4" /> PDF
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white text-body-sm font-bold rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-sm">
                            <ExternalLink className="w-4 h-4" /> Full Document
                          </button>
                        </div>
                     </div>
                     <div className="p-8 lg:p-12">
                        <div className="max-w-4xl mx-auto space-y-10">
                           <div className="space-y-4">
                              <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">Decision: Unfair Dismissal</span>
                              <h2 className="text-h2 text-slate-900 leading-tight">{selectedAward.title}</h2>
                              <div className="flex flex-wrap gap-6 pt-2">
                                 <div><p className="text-[10px] font-bold text-slate-400 uppercase">Award No</p><p className="text-body-md font-bold text-slate-900">{selectedAward.id}</p></div>
                                 <div><p className="text-[10px] font-bold text-slate-400 uppercase">Decision Date</p><p className="text-body-md font-bold text-slate-900">{selectedAward.date}</p></div>
                                 <div><p className="text-[10px] font-bold text-slate-400 uppercase">Court Location</p><p className="text-body-md font-bold text-slate-900">{selectedAward.court}</p></div>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              <div className="md:col-span-2 space-y-8">
                                 <section className="space-y-4">
                                    <h4 className="text-body-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                                      <Scale className="w-5 h-5 text-blue-600" /> Ratio Decidendi
                                    </h4>
                                    <p className="text-body-md text-slate-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2">
                                      "The failure to conduct a proper domestic inquiry is a fatal procedural flaw. The respondent failed to provide the claimant with a fair opportunity to mitigate the allegations prior to termination."
                                    </p>
                                    <p className="text-body-sm text-slate-500 leading-relaxed">
                                      The Court finds that the dismissal was not based on substantial evidence and thus lacks just cause or excuse.
                                    </p>
                                 </section>
                                 <section className="space-y-4">
                                    <h4 className="text-body-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                                      <Zap className="w-5 h-5 text-amber-500" /> AI-Matched Precedents
                                    </h4>
                                    <div className="space-y-3">
                                       {['Award 210/2023 - Procedural Inequity', 'Award 45/2024 - Non-compliance'].map(p => (
                                         <div key={p} className="p-4 bg-slate-50 rounded-xl flex items-center justify-between hover:bg-blue-50 cursor-pointer transition-colors group">
                                            <span className="text-body-sm font-bold text-slate-700 group-hover:text-blue-600">{p}</span>
                                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400" />
                                         </div>
                                       ))}
                                    </div>
                                 </section>
                              </div>
                              <div className="space-y-6">
                                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                                    <h4 className="text-body-sm font-bold text-slate-900 mb-4 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-blue-600" /> Smart Insight</h4>
                                    <p className="text-[12px] font-medium text-slate-600 leading-relaxed">
                                      This case strengthens the legal precedent regarding **Article 14** of collective agreements.
                                    </p>
                                 </div>
                                 <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-lg">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Total Award Amount</p>
                                    <p className="text-h3 text-blue-400 font-mono">RM 156,000.00</p>
                                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                                       <div className="flex justify-between text-[11px] opacity-70">
                                          <span>Back-wages:</span>
                                          <span>RM 144k</span>
                                       </div>
                                       <div className="flex justify-between text-[11px] opacity-70">
                                          <span>Compensation:</span>
                                          <span>RM 12k</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
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
