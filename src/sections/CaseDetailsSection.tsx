import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, latestJudgments } from '@/lib/data';
import { 
  Building2, MapPin, Download, ArrowLeft,
  ChevronDown, ZoomOut, ZoomIn, Printer, Maximize,
  Clock, Calendar, Gavel, FileText, Briefcase
} from 'lucide-react';

export default function CaseDetailsSection() {
  const { lang, wcagStates, setCurrentView, selectedCaseId } = useAppStore();
  const [showFullHistory, setShowFullHistory] = useState(false);
  const currentLang = t[lang];

  // Colors & Accessibility
  const isHighContrast = wcagStates.highContrast;
  const tBg = isHighContrast ? 'bg-black text-white' : 'bg-[#FAFAFA] text-zinc-900';
  const tCardBg = isHighContrast ? 'bg-black border border-white' : 'bg-white border border-zinc-200/60 shadow-sm hover:shadow-md transition-shadow duration-300';
  const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

  // Find the active case from the mock data based on selectedCaseId, or default to the first
  const activeCase: any = upcomingHearings.find(h => h.id === selectedCaseId) || 
                          latestJudgments.find(j => j.id === selectedCaseId) || 
                          upcomingHearings[0];
  const isAward = !!activeCase.awardNo;

  // Mock timeline for this case (since it's not in the main data file)
  const timeline = [
    { date: activeCase.date || '12 March 2026', time: activeCase.time || '09:00 AM', event: isAward ? 'Decision (K)' : 'Trial (Bicara)', location: activeCase.court, status: isAward ? 'Completed' : 'Upcoming' },
    { date: '05 February 2026', time: '10:00 AM', event: 'Mention (Sebutan)', location: activeCase.court, status: 'Completed' },
    { date: '20 January 2026', time: '02:30 PM', event: 'Case Management', location: 'e-Review / Virtual', status: 'Completed' },
    { date: '15 January 2025', time: '-', event: 'Case Registered', location: 'Registry', status: 'Completed' }
  ];

  return (
    <div className={`flex-1 flex flex-col relative z-10 w-full min-h-screen pb-20 ${tBg}`}>
      
      {/* --- HEADER HERO (Butiran Kes & Maklumat Pihak context) --- */}
      <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-950 border-zinc-800 relative overflow-hidden'}`}>
        {!isHighContrast && (
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>
        )}
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="flex items-center text-sm font-medium text-blue-400 mb-6">
            <button onClick={() => setCurrentView('schedule')} className="hover:text-blue-300 transition-colors flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Schedule
            </button>
            <ChevronDown className="w-4 h-4 mx-2 text-zinc-500 -rotate-90" />
            <span className="text-zinc-300">Case Details</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest ${isHighContrast ? 'border border-white text-white' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}`}>
                  {activeCase.stage || 'Active'}
                </span>
                <span className={`text-sm font-mono font-bold ${isHighContrast ? 'text-zinc-300' : 'text-zinc-400'}`}>
                  {activeCase.id}
                </span>
              </div>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight ${isHighContrast ? 'text-white' : 'text-white'}`}>
                {activeCase.claimant} <span className="text-zinc-400 text-2xl mx-2">v</span> {activeCase.respondent}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-400">
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-2 text-zinc-500" />
                  {activeCase.court}
                </div>
                {activeCase.judge && (
                  <div className="flex items-center">
                    <Gavel className="w-4 h-4 mr-2 text-zinc-500" />
                    {activeCase.judge}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT (Stacked Layout for MP.gov.my Architecture) --- */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN: Details, Filings & PDF */}
          <div className="lg:col-span-2 space-y-8">
          
          {/* 1. BUTIRAN KES & SUMMARY CARD */}
          <div className={`rounded-3xl p-6 sm:p-8 ${tCardBg}`}>
            <h3 className={`text-xl font-extrabold mb-6 flex items-center border-b pb-4 ${isHighContrast ? 'border-white text-white' : 'border-zinc-100 text-zinc-900'}`}>
              <Briefcase className="w-5 h-5 mr-3 text-blue-500" />
              Butiran Kes (Case Details)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-8">
              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${tTextSub}`}>Nombor Kes (Case No)</label>
                <p className={`font-mono text-sm sm:text-base font-semibold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{activeCase.id}</p>
              </div>
              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${tTextSub}`}>Peringkat Kes (Case Stage)</label>
                <p className={`text-sm sm:text-base font-semibold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{activeCase.stage || 'N/A'}</p>
              </div>
              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${tTextSub}`}>Kod Kes (Case Code)</label>
                <p className={`text-sm sm:text-base font-semibold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{activeCase.keywords?.[0] || 'Unknown'}</p>
              </div>
              <div>
                <label className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${tTextSub}`}>Status Kes (Status)</label>
                <p className={`text-sm sm:text-base font-semibold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{activeCase.status || 'Active'}</p>
              </div>
            </div>

            {activeCase.summary && (
              <div className={`pt-6 border-t ${isHighContrast ? 'border-white' : 'border-zinc-100'}`}>
                <label className={`text-[10px] font-bold uppercase tracking-widest block mb-3 ${tTextSub}`}>Summary of Dispute</label>
                <p className={`text-sm sm:text-base leading-relaxed ${isHighContrast ? 'text-white' : 'text-zinc-700'}`}>
                  {activeCase.summary}
                </p>
              </div>
            )}
          </div>

          {/* (Timelines moved to Right Column) */}

          {/* 4. PEMFAILAN DOKUMEN (FILINGS) */}
          <div className={`rounded-3xl p-6 sm:p-8 ${tCardBg}`}>
            <h3 className={`text-xl font-extrabold mb-6 flex items-center border-b pb-4 ${isHighContrast ? 'border-white text-white' : 'border-zinc-100 text-zinc-900'}`}>
              <FileText className="w-5 h-5 mr-3 text-indigo-500" />
              Pemfailan Dokumen (Filing of Documents)
            </h3>
            {activeCase.filings?.length > 0 ? (
              <div className={`overflow-hidden rounded-xl border ${isHighContrast ? 'border-white' : 'border-zinc-200'} overflow-x-auto`}>
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className={`bg-zinc-50 dark:bg-zinc-900 border-b ${isHighContrast ? 'border-white' : 'border-zinc-200'}`}>
                    <tr>
                      <th className="p-3 font-bold uppercase text-[10px] tracking-wider text-zinc-500 w-12 text-center">Bil.</th>
                      <th className="p-3 font-bold uppercase text-[10px] tracking-wider text-zinc-500">Dokumen</th>
                      <th className="p-3 font-bold uppercase text-[10px] tracking-wider text-zinc-500">Tarikh</th>
                      <th className="p-3 font-bold uppercase text-[10px] tracking-wider text-zinc-500 text-center">Pihak Pertama<br/>(Claimant)</th>
                      <th className="p-3 font-bold uppercase text-[10px] tracking-wider text-zinc-500 text-center">Pihak Menentang<br/>(Respondent)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {activeCase.filings.map((f: any, i: number) => (
                      <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <td className="p-3 font-medium text-zinc-500 text-center">{f.id}</td>
                        <td className={`p-3 font-medium ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{f.document}</td>
                        <td className={`p-3 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{f.date}</td>
                        <td className="p-3 text-center">
                          {f.party1 && <span className="inline-flex w-5 h-5 rounded-full bg-blue-100 text-blue-600 items-center justify-center font-bold text-xs dark:bg-blue-900 dark:text-blue-300">✓</span>}
                        </td>
                        <td className="p-3 text-center">
                          {f.party2 && <span className="inline-flex w-5 h-5 rounded-full bg-amber-100 text-amber-600 items-center justify-center font-bold text-xs dark:bg-amber-900 dark:text-amber-300">✓</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-zinc-500 italic">Tiada rekod pemfailan.</p>
            )}
          </div>

          {/* 5. PDF VIEWER MOCKUP */}
          <div className={`rounded-3xl border overflow-hidden flex flex-col ${isHighContrast ? 'border-white bg-black' : 'border-zinc-200 bg-white shadow-sm'}`}>
            <div className={`px-4 sm:px-6 py-4 flex items-center justify-between border-b ${isHighContrast ? 'border-white bg-zinc-900' : 'border-zinc-200 bg-zinc-100/80'}`}>
              <h3 className={`text-base sm:text-lg font-extrabold flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                <FileText className={`w-5 h-5 mr-3 ${isHighContrast ? 'text-white' : 'text-emerald-500'}`} />
                {activeCase.awardNo ? 'Statement of Award' : 'Statement of Case'}
              </h3>
              <div className="flex items-center gap-1 sm:gap-2 bg-white/50 dark:bg-zinc-800 backdrop-blur-sm p-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                <button className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'hover:bg-zinc-700 text-white' : 'hover:bg-white text-zinc-600 shadow-sm'}`}><ZoomOut className="w-4 h-4" /></button>
                <span className={`text-xs font-bold px-2 font-mono ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>100%</span>
                <button className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'hover:bg-zinc-700 text-white' : 'hover:bg-white text-zinc-600 shadow-sm'}`}><ZoomIn className="w-4 h-4" /></button>
                <div className={`w-px h-4 mx-1 ${isHighContrast ? 'bg-zinc-600' : 'bg-zinc-300'}`}></div>
                <button className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'hover:bg-zinc-700 text-white' : 'hover:bg-white text-zinc-600 shadow-sm'}`}><Printer className="w-4 h-4" /></button>
                <button className={`p-1.5 rounded-md transition-colors ${isHighContrast ? 'hover:bg-zinc-700 text-white' : 'hover:bg-white text-zinc-600 shadow-sm'}`}><Maximize className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div className={`h-[500px] sm:h-[600px] overflow-y-auto p-4 sm:p-8 flex justify-center ${isHighContrast ? 'bg-zinc-950' : 'bg-zinc-100/50'}`}>
              {/* Fake PDF Page */}
              <div className={`w-full max-w-[800px] min-h-[800px] p-8 sm:p-12 shadow-md ${isHighContrast ? 'bg-black border border-white' : 'bg-white border border-zinc-200'} rounded-sm`}>
                <div className="text-center mb-10 border-b pb-6 border-zinc-200">
                  <h2 className="text-xl font-bold uppercase tracking-widest mb-2 font-serif text-zinc-800 dark:text-zinc-200">In the Industrial Court of Malaysia</h2>
                  <p className="text-sm font-semibold mb-1 font-mono text-zinc-600 dark:text-zinc-400">CASE NO: {activeCase.id}</p>
                  {activeCase.awardNo && <p className="text-sm font-bold mt-2 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 inline-block px-3 py-1 rounded-md">{activeCase.awardNo}</p>}
                </div>
                
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                  <p className="font-bold text-lg font-serif text-zinc-900 dark:text-white uppercase">{activeCase.claimant}</p>
                  <p className="text-sm font-bold text-zinc-400">AND</p>
                  <p className="font-bold text-lg font-serif text-zinc-900 dark:text-white uppercase">{activeCase.respondent}</p>
                </div>

                <div className="space-y-6 text-sm leading-loose text-justify font-serif text-zinc-700 dark:text-zinc-300">
                  <p className="intent-0"><span className="font-bold uppercase border-b border-zinc-300 dark:border-zinc-700 pb-0.5">Summary of Dispute:</span> This is a digital rendering of the case summary. The actual comprehensive document detailing the full proceedings, representations, and judgment will be displayed within this viewer.</p>
                  <p>{activeCase.summary} {activeCase.summary} Additionally, all relevant evidence presented by both parties was carefully evaluated against the specific provisions of the prevailing labour laws.</p>
                  <div className="h-6"></div>
                  <div className="flex justify-between items-end border-t border-zinc-200 dark:border-zinc-800 pt-6 mt-12 text-sm text-zinc-600 dark:text-zinc-400">
                    <div>
                      <p className="font-semibold uppercase tracking-wider mb-1">Presiding Chairman</p>
                      <p className="font-bold text-zinc-900 dark:text-white">{activeCase.judge}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold uppercase tracking-wider mb-1">Venue</p>
                      <p className="font-bold text-zinc-900 dark:text-white">{activeCase.court}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>

          {/* RIGHT COLUMN: Interactive Case History */}
          <div className="lg:col-span-1 space-y-8">
            <div className={`rounded-3xl p-6 sm:p-8 ${tCardBg} flex flex-col sticky top-24`}>
              <h3 className={`text-xl font-extrabold mb-6 flex items-center border-b pb-4 ${isHighContrast ? 'border-white text-white' : 'border-zinc-100 text-zinc-900'}`}>
                <Clock className="w-5 h-5 mr-3 text-amber-500" />
                Sejarah Kes (History)
              </h3>
              
              <div className={`relative ${!showFullHistory ? 'max-h-[350px] overflow-hidden' : ''}`}>
                <div className="relative border-l-2 ml-3 border-zinc-200 dark:border-zinc-800 space-y-8 mt-2 pb-6">
                  
                  {/* Sebutan Mentions */}
                  {activeCase.mentions?.length > 0 && activeCase.mentions.map((m: any, idx: number) => (
                    <div key={`m-${idx}`} className={`relative pl-6 opacity-80`}>
                      <span className="absolute -left-[27px] -top-2 bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 text-[9px] font-bold px-1 rounded uppercase">Sebutan</span>
                      <span className={`absolute -left-[9px] top-2.5 w-4 h-4 rounded-full ring-4 ring-white dark:ring-black ${m.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      <div className="flex flex-col mt-2">
                        <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${m.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {m.status}
                        </span>
                        <div className={`text-sm font-medium space-y-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                          <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-zinc-500" /> {m.date}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Perbicaraan Hearings */}
                  {activeCase.hearings?.length > 0 && activeCase.hearings.map((h: any, idx: number) => (
                    <div key={`h-${idx}`} className={`relative pl-6 opacity-80`}>
                      <span className="absolute -left-[35px] -top-2 bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 text-[9px] font-bold px-1 rounded uppercase">Perbicaraan</span>
                      <span className={`absolute -left-[9px] top-2.5 w-4 h-4 rounded-full ring-4 ring-white dark:ring-black ${h.status === 'Completed' ? 'bg-emerald-500' : h.status === 'Part-heard' ? 'bg-blue-500' : 'bg-red-500'}`}></span>
                      <div className="flex flex-col mt-2">
                        <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${h.status === 'Completed' ? 'text-emerald-600' : h.status === 'Part-heard' ? 'text-blue-600' : 'text-red-600'}`}>
                          {h.status}
                        </span>
                        <div className={`text-sm font-medium space-y-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                          <div className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-zinc-500" /> {h.date}</div>
                          <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-zinc-500" /> {h.location}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                
                {/* Fade Out Element */}
                {!showFullHistory && (
                  <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${isHighContrast ? 'from-black to-transparent' : 'from-white to-transparent dark:from-zinc-950 dark:to-transparent'} pointer-events-none`}></div>
                )}
              </div>

              {/* View History Button */}
              <button 
                onClick={() => setShowFullHistory(!showFullHistory)}
                className={`w-full mt-2 py-3 rounded-xl border text-sm font-bold transition-colors ${showFullHistory ? (isHighContrast ? 'border-white text-white bg-zinc-900' : 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700') : (isHighContrast ? 'border-white text-black bg-white hover:bg-zinc-200' : 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800')}`}
              >
                {showFullHistory ? 'Hide History' : 'View Full History'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
