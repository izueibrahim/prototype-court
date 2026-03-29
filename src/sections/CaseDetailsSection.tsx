import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, latestJudgements } from '@/lib/data';
import {
  Building2, MapPin, Download, ArrowLeft,
  ChevronDown, ZoomOut, ZoomIn, Printer, Maximize,
  Clock, Calendar, Gavel, FileText, Briefcase,
  History, Shield, ExternalLink, ChevronRight,
  User, CheckCircle2, AlertCircle, Users, Activity, Mail, X, Zap, Video, Plus
} from 'lucide-react';

export default function CaseDetailsSection() {
  const { lang, wcagStates, setCurrentView, selectedCaseId } = useAppStore();
  const [activeTab, setActiveTab] = useState<'overview' | 'parties' | 'documents'>('overview');
  const [selectedDoc, setSelectedDoc] = useState<any | null>(null);
  const currentLang = t[lang];

  // Colors & Accessibility
  const isHighContrast = wcagStates.highContrast;
  const tBg = isHighContrast ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900';
  const tCardBg = isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-zinc-200 shadow-sm rounded-[32px] overflow-hidden';
  const tTextSub = isHighContrast ? 'text-zinc-400' : 'text-zinc-500';

  // Find the active case from the mock data based on selectedCaseId, or default to the first
  const activeCase: any = upcomingHearings.find(h => h.id === selectedCaseId) ||
    latestJudgements.find(j => j.id === selectedCaseId) ||
    upcomingHearings[0];
  const isAward = !!activeCase.awardNo;

  const tabs = [
    { id: 'overview', label: lang === 'en' ? 'Overview' : 'Ringkasan', icon: Briefcase },
    { id: 'parties', label: lang === 'en' ? 'Parties' : 'Pihak-pihak', icon: Users },
    { id: 'documents', label: lang === 'en' ? 'Documents' : 'Dokumen', icon: FileText },
  ];

  return (
    <div className={`flex-1 flex flex-col relative z-10 w-full min-h-screen pb-24 ${tBg}`}>

      {/* --- REFINED HEADER --- */}
      <div className={`pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-950 border-white/5 relative overflow-hidden'}`}>
        {!isHighContrast && (
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-[10px] font-black tracking-widest text-blue-400 mb-8 uppercase">
            <button onClick={() => setCurrentView('awards')} className="hover:text-blue-300 transition-colors flex items-center group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {currentLang.backToPortal || "Back to Awards"}
            </button>
            <ChevronRight className="w-3 h-3 mx-4 text-zinc-700" />
            <span className="text-white/40">Case Details Management</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${isHighContrast ? 'border border-white text-white' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'}`}>
                  {activeCase.stage || 'Active'}
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">{activeCase.id}</span>
              </div>
              <h1 className="text-h2 md:text-h1 text-white tracking-tighter leading-tight">
                {activeCase.claimant} <span className="text-zinc-600 italic">v.</span> {activeCase.respondent}
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all border border-white/10 flex items-center gap-2">
                <Printer className="w-4 h-4" /> Print
              </button>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2">
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- TAB NAVIGATION --- */}
      <div className={`sticky top-0 z-40 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-white/80 backdrop-blur-md border-zinc-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${activeTab === tab.id ? 'text-blue-600' : 'text-zinc-400 hover:text-zinc-600'}`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-blue-600' : 'text-zinc-400'}`} />
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- TAB CONTENT AREA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* IMMEDIATE ATTENTION ALERT */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-[32px] p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm shadow-amber-200/20">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-[10px] font-black uppercase text-amber-600 tracking-widest mb-1">Immediate Attention Required</p>
                <h3 className="text-xl font-black text-amber-900 tracking-tight">Witness Statement Submission Deadline</h3>
                <p className="text-sm font-bold text-amber-700/70 mt-1">Please ensure all witness statements are uploaded by tomorrow, 15 March 2026, 4:00 PM.</p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <div className="text-center bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-200">
                  <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Countdown</p>
                  <p className="text-xl font-black text-amber-900">24:12:05</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Case Number', val: activeCase.id, icon: AlertCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'Court Room', val: activeCase.court || 'Court 1 (KV)', icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { label: 'Chairman / Judge', val: activeCase.judge || 'Dato\' Wan Jeffry', icon: Gavel, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { label: 'Case Category', val: activeCase.keywords?.[0] || 'Unfair Dismissal', icon: Shield, color: 'text-amber-600', bg: 'bg-amber-50' },
              ].map((stat, i) => (
                <div key={i} className={tCardBg}>
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-body-sm font-black text-zinc-900 leading-tight">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8">
                <div className={`${tCardBg} border-blue-100 ring-4 ring-blue-50/50`}>
                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-[24px] bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                          <Zap className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-h3 text-zinc-900 tracking-tight mb-1">Action Center</h3>
                          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                            {activeCase.stage === 'Final award' ? 'Next Step: Drafting Award' :
                              activeCase.stage === 'Mention' ? 'Next Step: Case Management' :
                                'Next Step: Virtual Hearing'}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="px-8 py-4 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
                          {activeCase.stage === 'Final award' ? (
                            <><FileText className="w-4 h-4" /> Submit Award Draft</>
                          ) : activeCase.stage === 'Mention' ? (
                            <><Activity className="w-4 h-4" /> Join e-Mention</>
                          ) : (
                            <><Video className="w-4 h-4" /> Join Virtual Court</>
                          )}
                        </button>
                        <button className="px-8 py-4 bg-white border-2 border-zinc-100 text-zinc-600 text-[11px] font-black uppercase tracking-widest rounded-2xl hover:border-blue-200 hover:text-blue-600 transition-all active:scale-95 flex items-center justify-center gap-2">
                          <Plus className="w-4 h-4" /> {activeCase.stage === 'Final award' ? 'Request Clarification' : 'Request Postponement'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={tCardBg}>
                  <div className="p-8 sm:p-10">
                    <h3 className="text-h3 text-zinc-900 uppercase tracking-tight mb-8 flex items-center">
                      <FileText className="w-6 h-6 mr-4 text-blue-600" strokeWidth={2.5} />
                      Case Brief <span className="text-zinc-400 font-medium ml-2 text-body-sm">(Ringkasan Kes)</span>
                    </h3>
                    <div className="p-8 rounded-[24px] bg-zinc-50 border border-zinc-100 font-medium leading-[1.8] text-zinc-600">
                      &quot;{activeCase.summary || 'The claimant alleges unfair dismissal based on procedural non-compliance during the termination process. The company maintains that the dismissal was for just cause following multiple disciplinary warnings.'}&quot;
                    </div>
                  </div>
                </div>

                <div className={tCardBg}>
                  <div className="p-8 sm:p-10">
                    <h3 className="text-h3 text-zinc-900 uppercase tracking-tight mb-8">Related References</h3>
                    <div className="space-y-4">
                      {['Industrial Relations Act 1967 - Section 20(3)', 'Practice Note No.1 of 2026', 'Manual on Virtual Proceedings'].map(ref => (
                        <div key={ref} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-100 hover:border-blue-300 transition-all group cursor-pointer">
                          <span className="text-body-sm font-bold text-zinc-700">{ref}</span>
                          <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-blue-600 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-600 p-8 rounded-[32px] text-white shadow-xl shadow-blue-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <User className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-blue-200 tracking-widest">Assigned Registrar</p>
                      <p className="text-body-sm font-bold">Siti Aishah Binti Md Nor</p>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-white text-blue-600 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-100 transition-colors">
                    Contact Officer
                  </button>
                </div>

                {/* CASE JOURNEY LIFECYCLE (Narrow Column Version) */}
                <div className={tCardBg}>
                  <div className="p-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6 flex items-center">
                      <Activity className="w-4 h-4 mr-2" /> Journey
                    </h4>

                    <div className="relative space-y-0 before:absolute before:inset-y-0 before:left-[17px] before:w-0.5 before:bg-zinc-100">
                      {[
                        { title: 'Award (Final)', date: activeCase.awardNo ? '20 Mar 2026' : 'Awaiting trial', status: activeCase.awardNo ? 'Completed' : 'Upcoming', side: 'left', icon: Gavel },
                        { title: 'Full Trial', date: '15 Mar 2026', status: activeCase.awardNo ? 'Completed' : 'Current', side: 'right', icon: Activity },
                        { title: 'Final Mention', date: '01 Mar 2026', status: 'Completed', side: 'left', icon: Calendar },
                        { title: 'Interlocutory', date: '15 Feb 2026', status: 'Completed', side: 'right', icon: FileText },
                        { title: 'Case Management', date: '20 Jan 2026', status: 'Completed', side: 'left', icon: Shield },
                        { title: 'Registration', date: '15 Jan 2026', status: 'Completed', side: 'right', icon: CheckCircle2 },
                      ].map((step, idx) => (
                        <div key={idx} className="relative flex items-start mb-6 last:mb-0">
                          {/* Timeline Center Dot */}
                          <div className="z-10 relative flex-shrink-0 w-9 h-9 rounded-xl bg-white border-2 border-zinc-100 flex items-center justify-center shadow-sm">
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${step.status === 'Completed' ? 'bg-emerald-500 text-white' : step.status === 'Current' ? 'bg-blue-600 text-white animate-pulse' : 'bg-zinc-100 text-zinc-400'}`}>
                              <step.icon className="w-3 h-3" />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="ml-4 pt-1">
                            <h4 className={`text-[12px] font-black leading-tight mb-1 ${step.status === 'Completed' ? 'text-zinc-900' : 'text-zinc-400'}`}>{step.title}</h4>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{step.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={tCardBg}>
                  <div className="p-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Case Metrics</h4>
                    <div className="space-y-6">
                      {[
                        { label: 'Time Since Registration', val: '42 Days', p: 60 },
                        { label: 'Document Completion', val: '80%', p: 80 },
                        { label: 'Next Event (12d)', val: 'Trial', p: 100 },
                      ].map(m => (
                        <div key={m.label} className="space-y-2">
                          <div className="flex justify-between text-[11px] font-bold">
                            <span className="text-zinc-500">{m.label}</span>
                            <span className="text-zinc-900">{m.val}</span>
                          </div>
                          <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${m.p}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PARTIES TAB */}
        {activeTab === 'parties' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CLAIMANT CARD */}
              <div className={tCardBg}>
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-[24px] bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase text-blue-600 tracking-widest mb-1">Pihak Menuntut (Claimant)</h4>
                      <h3 className="text-h3 text-zinc-900 tracking-tight">{activeCase.claimant}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">Legal Representation</p>
                      <p className="text-body-md font-bold text-zinc-900">Messrs. Aziz & Co.</p>
                      <p className="text-xs font-medium text-zinc-500 mt-1">Lead Counsel: Encik Kamal Aziz</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-ui-label font-bold">
                      <button className="py-4 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2 uppercase font-black text-[10px]">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </button>
                      <button className="py-4 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2 uppercase font-black text-[10px]">
                        <ExternalLink className="w-3.5 h-3.5" /> Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESPONDENT CARD */}
              <div className={tCardBg}>
                <div className="p-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-[24px] bg-amber-600 flex items-center justify-center text-white shadow-lg shadow-amber-600/20">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase text-amber-600 tracking-widest mb-1">Pihak Menentang (Respondent)</h4>
                      <h3 className="text-h3 text-zinc-900 tracking-tight">{activeCase.respondent}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">Legal Representation</p>
                      <p className="text-body-md font-bold text-zinc-900">Winston & Partners</p>
                      <p className="text-xs font-medium text-zinc-500 mt-1">Lead Counsel: Ms. Sarah Winston</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-ui-label font-bold">
                      <button className="py-4 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:border-amber-400 hover:text-amber-600 transition-all flex items-center justify-center gap-2 uppercase font-black text-[10px]">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </button>
                      <button className="py-4 rounded-xl bg-white border border-zinc-200 text-zinc-600 hover:border-amber-400 hover:text-amber-600 transition-all flex items-center justify-center gap-2 uppercase font-black text-[10px]">
                        <ExternalLink className="w-3.5 h-3.5" /> Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTS TAB */}
        {activeTab === 'documents' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={tCardBg}>
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-h3 text-zinc-900 uppercase tracking-tight">E-Filings & Submissions</h3>
                  <button className="px-6 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-700 transition-all">Upload New</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left list */}
                  <div className="col-span-1 border-r border-zinc-100 pr-4 overflow-y-auto custom-scrollbar max-h-[600px]">
                    <table className="w-full text-left">
                      <thead className="sticky top-0 bg-white z-10">
                        <tr className="border-b-2 border-zinc-100">
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Title</th>
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-50">
                        {(activeCase.filings || []).map((f: any, i: number) => {
                          const isSelected = selectedDoc ? selectedDoc.id === f.id : i === 0;
                          return (
                            <tr key={i} className={`group transition-colors cursor-pointer ${isSelected ? 'bg-blue-50/50' : 'hover:bg-zinc-50'}`} onClick={() => setSelectedDoc(f)}>
                              <td className="py-5 px-4 font-black text-sm text-zinc-900">{f.document}</td>
                              <td className="py-5 px-4 w-[100px]">
                                <div className="flex justify-end gap-2">
                                  <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-400 hover:text-blue-600 hover:border-blue-300 transition-all active:scale-90" onClick={(e) => { e.stopPropagation(); }}><Download className="w-4 h-4" /></button>
                                  <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-400 hover:text-blue-600 hover:border-blue-300 transition-all active:scale-90" onClick={(e) => { e.stopPropagation(); setSelectedDoc(f); }}><ExternalLink className="w-4 h-4" /></button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Right PDF */}
                  <div className="col-span-2 bg-zinc-100 rounded-2xl flex flex-col overflow-hidden border border-zinc-200 h-[600px] animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="bg-zinc-800 text-white p-3 flex justify-between items-center text-xs shadow-md z-10">
                      <span className="font-bold truncate max-w-[300px]">{selectedDoc?.document || activeCase.filings?.[0]?.document}</span>
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-zinc-700 rounded transition-colors" title="Zoom In"><ZoomIn className="w-4 h-4" /></button>
                        <button className="p-1 hover:bg-zinc-700 rounded transition-colors" title="Zoom Out"><ZoomOut className="w-4 h-4" /></button>
                        <button className="p-1 hover:bg-red-500 rounded ml-4 transition-colors bg-red-600/20 text-red-100" onClick={() => setSelectedDoc(null)} title="Close"><X className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="flex-1 bg-zinc-200/50 p-4 sm:p-8 overflow-y-auto custom-scrollbar flex justify-center">
                      <div className="bg-white w-full max-w-[800px] min-h-[800px] shadow-lg p-8 sm:p-12 mb-8 origin-top scale-[0.85] sm:scale-100">
                        <div className="border-b-2 border-black pb-4 mb-8">
                          <h1 className="text-xl sm:text-2xl font-black text-center uppercase tracking-widest text-black">Mahkamah Perusahaan Malaysia</h1>
                          <p className="text-center text-sm font-bold mt-2 text-zinc-800">Case No: {activeCase.id}</p>
                        </div>
                        <h2 className="text-lg font-bold text-center underline uppercase mb-8 text-black">{selectedDoc?.document || activeCase.filings?.[0]?.document}</h2>
                        <div className="text-sm font-medium leading-relaxed text-justify indent-8 text-zinc-800 space-y-4">
                          <p>IN THE MATTER of the Industrial Court between <strong>{activeCase.claimant.toUpperCase()}</strong> and <strong>{activeCase.respondent.toUpperCase()}</strong>.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien eget nunc rhoncus ullamcorper. Integer varius aliquet velit, sed eleifend diam ultrices nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam euismod, sem in vehicula faucibus, felis nisi cursus nisi, vitae malesuada risus lacus ut velit.</p>
                          <p>This is a simulated PDF view for <strong>{selectedDoc?.document || activeCase.filings?.[0]?.document}</strong> filed by {(selectedDoc || activeCase.filings?.[0])?.party1 ? 'the Claimant' : 'the Respondent'} on {(selectedDoc || activeCase.filings?.[0])?.date}.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AWARD PREVIEW (if available) */}
            {isAward && (
              <div className={`${tCardBg} border-blue-500 ring-4 ring-blue-500/10`}>
                <div className="p-8 sm:p-10 bg-blue-600 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-h3 text-white uppercase tracking-tight">Final Award Decision</h3>
                    <p className="text-blue-200 text-body-sm font-bold uppercase mt-1">Award No: {activeCase.awardNo}</p>
                  </div>
                  <Download className="w-8 h-8 opacity-40" />
                </div>
                <div className="p-10 bg-white">
                  <div className="max-w-2xl border-l-[6px] border-blue-200 pl-8 space-y-4">
                    <p className="text-body-md font-black text-zinc-900 leading-relaxed italic">
                      &quot;Upon careful consideration of all facts and circumstances presented by the parties, the court hereby awards in favor of the Claimant...&quot;
                    </p>
                    <button className="text-blue-600 font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      Read Full Award <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}



      </div>
    </div>
  );
}
