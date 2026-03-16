import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, latestJudgments } from '@/lib/data';
import {
  Building2, MapPin, Download, ArrowLeft,
  ChevronDown, ZoomOut, ZoomIn, Printer, Maximize,
  Clock, Calendar, Gavel, FileText, Briefcase,
  History, Shield, ExternalLink, ChevronRight,
  User, CheckCircle2, AlertCircle
} from 'lucide-react';

export default function CaseDetailsSection() {
  const { lang, wcagStates, setCurrentView, selectedCaseId } = useAppStore();
  const [showFullHistory, setShowFullHistory] = useState(false);
  const currentLang = t[lang];

  // Colors & Accessibility
  const isHighContrast = wcagStates.highContrast;
  const tBg = isHighContrast ? 'bg-black text-white' : 'bg-zinc-50/50 text-zinc-900';
  const tCardBg = isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-zinc-200/60 shadow-premium rounded-[32px] transition-all duration-300';
  const tTextSub = isHighContrast ? 'text-zinc-400' : 'text-zinc-500';

  // Find the active case from the mock data based on selectedCaseId, or default to the first
  const activeCase: any = upcomingHearings.find(h => h.id === selectedCaseId) ||
    latestJudgments.find(j => j.id === selectedCaseId) ||
    upcomingHearings[0];
  const isAward = !!activeCase.awardNo;

  // Mock timeline for this case (since it's not in the main data file)
  const timeline = [
    { date: activeCase.date || '15 January 2025', status: isAward ? 'Decision (K)' : 'Trial (Bicara)', type: 'primary' },
    { date: '05 February 2026', status: 'Mention (Sebutan)', type: 'success' },
    { date: '20 January 2026', status: 'Case Management', type: 'success' },
    { date: '15 January 2025', status: 'Case Registered', type: 'success' }
  ];

  return (
    <div className={`flex-1 flex flex-col relative z-10 w-full min-h-screen pb-24 ${tBg}`}>

      {/* --- PREMIUM HEADER HERO --- */}
      <div className={`pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-950 border-white/5 relative overflow-hidden'}`}>
        {!isHighContrast && (
          <div className="absolute inset-0 pointer-events-none opacity-60">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-blue-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-50%] left-[-10%] w-[50%] h-[100%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-xs font-black text-blue-400 mb-8 uppercase tracking-widest">
            <button onClick={() => setCurrentView('schedule')} className="hover:text-blue-300 transition-colors flex items-center group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {currentLang.home}
            </button>
            <ChevronRight className="w-3 h-3 mx-4 text-zinc-700 font-bold" />
            <span className="text-white/40">Case Details Tracking</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="flex-1 max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'}`}>
                  <Shield className="w-3 h-3 mr-2" />
                  {activeCase.stage || 'Active Proceedings'}
                </span>
                <span className={`text-xs font-mono font-black py-1 px-3 rounded-lg ${isHighContrast ? 'bg-zinc-900 text-zinc-400 border border-zinc-800' : 'bg-white/5 text-zinc-400 border border-white/10'}`}>
                  REFERENCE ID: {activeCase.id}
                </span>
              </div>
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8 leading-[1.1] ${isHighContrast ? 'text-white' : 'text-white'}`}>
                {activeCase.claimant}
                <span className="text-zinc-600 font-medium italic mx-4 block sm:inline">v.</span>
                {activeCase.respondent}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm font-black uppercase tracking-widest">
                <div className="flex items-center text-zinc-400">
                  <Building2 className="w-4 h-4 mr-3 text-blue-500" />
                  {activeCase.court}
                </div>
                {activeCase.judge && (
                  <div className="flex items-center text-zinc-400">
                    <Gavel className="w-4 h-4 mr-3 text-blue-500" />
                    {activeCase.judge}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="btn-primary py-4 px-8 rounded-2xl flex items-center gap-3 bg-white text-zinc-950 hover:bg-zinc-200 border-none transition-all">
                <Printer className="w-5 h-5" />
                <span className="uppercase text-[10px] tracking-widest font-black">Print Case File</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT LAYOUT --- */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT: Case Summary & Filings (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">

            {/* 1. COMPACT DETAILS CARD */}
            <div className={tCardBg}>
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-100">
                  <h3 className="text-xl font-black flex items-center tracking-tight text-zinc-900 uppercase">
                    <Briefcase className="w-6 h-6 mr-4 text-blue-600" />
                    Butiran Kes <span className="text-zinc-400 font-medium ml-2">(Details)</span>
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  {[
                    { label: 'Case Number', val: activeCase.id, icon: AlertCircle },
                    { label: 'Stage', val: activeCase.stage || 'N/A', icon: Shield },
                    { label: 'Classification', val: activeCase.keywords?.[0] || 'Unknown', icon: Gavel },
                    { label: 'Status', val: activeCase.status || 'Active', icon: CheckCircle2 },
                  ].map((field, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex items-center gap-2 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                        <field.icon className="w-3 h-3" /> {field.label}
                      </div>
                      <p className="text-sm sm:text-base font-black text-zinc-900 tracking-tight leading-tight">{field.val}</p>
                    </div>
                  ))}
                </div>

                {activeCase.summary && (
                  <div className="mt-12 p-8 rounded-3xl bg-zinc-50 border border-zinc-100 italic font-medium leading-[1.8] text-zinc-600 text-sm sm:text-base">
                    &quot;{activeCase.summary}&quot;
                  </div>
                )}
              </div>
            </div>

            {/* 2. FILINGS TABLE */}
            <div className={tCardBg}>
              <div className="p-8 sm:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-black flex items-center tracking-tight text-zinc-900 uppercase">
                    <FileText className="w-6 h-6 mr-4 text-indigo-600" />
                    Pemfailan <span className="text-zinc-400 font-medium ml-2">(Document Filing)</span>
                  </h3>
                </div>

                {activeCase.filings?.length > 0 ? (
                  <div className="overflow-x-auto -mx-1 px-1">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b-2 border-zinc-100">
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">ID</th>
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Document Title</th>
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Filed On</th>
                          <th className="py-4 px-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-center">Parties Verified</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-50">
                        {activeCase.filings.map((f: any, i: number) => (
                          <tr key={i} className="group hover:bg-zinc-50 transition-colors">
                            <td className="py-5 px-4 font-mono text-xs font-black text-zinc-400">#{f.id.toString().padStart(3, '0')}</td>
                            <td className="py-5 px-4">
                              <div className="flex items-center font-black text-sm text-zinc-900 group-hover:text-blue-600 transition-colors">
                                {f.document}
                                <Download className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </td>
                            <td className="py-5 px-4 text-xs font-bold text-zinc-500">{f.date}</td>
                            <td className="py-5 px-4">
                              <div className="flex justify-center gap-2">
                                {f.party1 && <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest border border-blue-100">Claimant</span>}
                                {f.party2 && <span className="px-2 py-1 rounded bg-amber-50 text-amber-600 text-[9px] font-black uppercase tracking-widest border border-amber-100">Respondent</span>}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="py-12 text-center bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-200">
                    <FileText className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">No filings recorded for this case.</p>
                  </div>
                )}
              </div>
            </div>

            {/* 3. PREMIUM DOCUMENT VIEWER */}
            <div className={`${tCardBg} overflow-hidden`}>
              <div className="bg-zinc-900 px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-widest">{activeCase.awardNo ? 'Statement of Award' : 'Statement of Case'}</h4>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">MP.GOV.MY Secure Document Server</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 hidden md:flex">
                    <button className="p-2 text-white/60 hover:text-white transition-colors"><ZoomOut className="w-4 h-4" /></button>
                    <span className="px-3 text-white text-[10px] font-black font-mono">100%</span>
                    <button className="p-2 text-white/60 hover:text-white transition-colors"><ZoomIn className="w-4 h-4" /></button>
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all"><Printer className="w-4 h-4" /></button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all"><Maximize className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="bg-zinc-100 p-6 md:p-12 min-h-[600px] flex justify-center overflow-y-auto">
                <div className="w-full max-w-[850px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-12 md:p-20 relative font-serif">
                  <div className="flex justify-between items-start mb-16 pb-8 border-b-2 border-zinc-900/5">
                    <div>
                      <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-2 uppercase italic">Industrial Court of Malaysia</h2>
                      <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-1">REFERENCE NO.</p>
                      <p className="text-sm font-black text-zinc-900 font-mono tracking-tighter">{activeCase.id}</p>
                    </div>
                  </div>

                  <div className="space-y-12 mb-20 text-center">
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Claimant</p>
                      <p className="text-2xl font-black text-zinc-900 tracking-tight leading-tight uppercase">{activeCase.claimant}</p>
                    </div>
                    <div className="flex items-center justify-center gap-6">
                      <div className="h-px w-12 bg-zinc-200"></div>
                      <span className="text-xs font-bold text-zinc-300 italic">V/S</span>
                      <div className="h-px w-12 bg-zinc-200"></div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Respondent</p>
                      <p className="text-2xl font-black text-zinc-900 tracking-tight leading-tight uppercase">{activeCase.respondent}</p>
                    </div>
                  </div>

                  <div className="space-y-8 text-zinc-800 leading-[2] text-justify text-sm md:text-base">
                    <p className="first-letter:text-4xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">This official document details the full proceedings and outcome for the mentioned case. The tribunal has reviewed all evidentiary submissions Provided by both parties in accordance with the Industrial Relations Act 1967.</p>
                    <p>&quot;{activeCase.summary} {activeCase.summary}&quot;</p>
                    <p>Furthermore, the court noted specific procedural adherence during the hearing phase, ensuring that all elements of natural justice were strictly maintained throughout the case lifespan.</p>
                  </div>

                  <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between gap-10">
                    <div>
                      <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">Presiding Dignity</p>
                      <p className="text-sm font-black text-zinc-900 uppercase tracking-tighter">{activeCase.judge}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">Certified Official Seal</p>
                      <div className="flex justify-start md:justify-end gap-2 text-zinc-200">
                        <Shield className="w-12 h-12 stroke-[1.5]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline (4 Cols) */}
          <div className="lg:col-span-4 sticky top-12">
            <div className={tCardBg}>
              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-lg font-black flex items-center tracking-tight text-zinc-900 uppercase">
                    <History className="w-5 h-5 mr-3 text-amber-500" />
                    Sejarah Kes <span className="text-zinc-400 font-medium ml-2">(History)</span>
                  </h3>
                  <button className="text-[10px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-widest flex items-center transition-colors">
                    Full Log <ExternalLink className="w-3 h-3 ml-1.5" />
                  </button>
                </div>

                <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-zinc-100">
                  {activeCase.mentions?.map((m: any, idx: number) => (
                    <div key={idx} className="relative pl-10 group">
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 duration-300 z-10 ${m.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-400'}`}>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${m.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {m.status === 'Completed' ? 'SELESAI' : 'TANGGUH'}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-tighter">Sebutan</span>
                        </div>
                        <h5 className="text-sm font-black text-zinc-900 leading-tight">Proceeding Logged: Mentions</h5>
                        <div className="flex items-center text-[11px] font-bold text-zinc-400 tracking-tight">
                          <Calendar className="w-3 h-3 mr-2" /> {m.date}
                        </div>
                      </div>
                    </div>
                  ))}

                  {activeCase.hearings?.map((h: any, idx: number) => (
                    <div key={`h-${idx}`} className="relative pl-10 group">
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 duration-300 z-10 ${h.status === 'Completed' ? 'bg-blue-600' : 'bg-zinc-400'}`}>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${h.status === 'Completed' ? 'text-blue-600' : 'text-zinc-500'}`}>
                            {h.status === 'Completed' ? 'SELESAI' : 'DALAM PROSES'}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-tighter">Bicara</span>
                        </div>
                        <h5 className="text-sm font-black text-zinc-900 leading-tight">Formal Hearing Stage</h5>
                        <div className="flex flex-col gap-1 mt-1">
                          <div className="flex items-center text-[11px] font-bold text-zinc-400 tracking-tight">
                            <Calendar className="w-3 h-3 mr-2" /> {h.date}
                          </div>
                          <div className="flex items-center text-[11px] font-bold text-zinc-400 tracking-tight">
                            <MapPin className="w-3 h-3 mr-2" /> {h.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <button className="btn-secondary w-full py-4 rounded-2xl border-2 border-zinc-100 text-xs font-black uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all">
                    Archive Access
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-[32px] bg-blue-600 text-white flex items-center gap-6 shadow-xl shadow-blue-900/10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Assigned Registrar</p>
                <p className="text-sm font-black leading-tight tracking-tight uppercase">Siti Aishah Binti Md Nor</p>
                <button className="text-[9px] font-black uppercase tracking-widest text-blue-200 mt-2 hover:text-white transition-colors flex items-center">
                  Contact Officer <ChevronRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
