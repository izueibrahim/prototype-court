"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { ArrowLeft, CheckCircle2, ChevronDown, Download, Edit2, FileCheck, FileSignature, FileText, Globe, Printer, Users2, Scale, Zap, Lightbulb, ArrowUpRight } from 'lucide-react';

import { mockAwards, mockSearchResults } from '@/lib/data';

export default function AwardManagementModule() {
  const { lang, wcagStates, loginRole, internalActionView, setInternalActionView, selectedInternalItem, setSelectedInternalItem } = useAppStore();
  
  // Find Smart Award data for the selected case
  const smartAwardData = selectedInternalItem ? mockSearchResults.find((r: any) => 
    (r.id.includes(selectedInternalItem.id.split('-')[1]) || 
     r.title.includes(selectedInternalItem.claimant) ||
     r.id.includes('312')) && r.type === 'Award'
  ) : null;
  
  const mockCases = mockAwards;
  
  const currentLang = t[lang];
  const isHighContrast = wcagStates.highContrast;
  
  // Local state for the editor
  const [decisionSummary, setDecisionSummary] = useState('');
  
  const titleColor = isHighContrast ? 'text-white' : 'text-slate-900';
  const sublineColor = isHighContrast ? 'text-slate-400' : 'text-slate-500';
  const cardBg = isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200';

  // HELPER COMPONENTS
  const CaseHeader = ({ title, showBack = true }: { title: string, showBack?: boolean }) => (
    <div className="flex items-center gap-6 mb-8">
      {showBack && (
        <button
          onClick={() => setInternalActionView(null)}
          className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-md transition-all active:scale-90"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      )}
      <div>
        <h2 className={`text-3xl font-black ${titleColor}`}>{title}</h2>
        {selectedInternalItem && (
          <p className={`text-base font-bold ${sublineColor} mt-1`}>
            {selectedInternalItem.id} • {selectedInternalItem.claimant} vs {selectedInternalItem.respondent}
          </p>
        )}
      </div>
    </div>
  );

  const SmartAssistant = () => (
    <div className="space-y-6 sticky top-8">
      <div className={`p-6 rounded-3xl border shadow-premium ${isHighContrast ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-blue-100'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h4 className={`text-sm font-black uppercase tracking-widest ${titleColor}`}>Smart Assistant</h4>
            <p className="text-[10px] font-bold text-blue-500">AI-Powered Insights</p>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h5 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-600" /> Ratio Decidendi
            </h5>
            <p className={`text-xs font-medium leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1 ${isHighContrast ? 'text-zinc-300' : 'text-slate-600'}`}>
              "The failure to conduct a proper domestic inquiry is a fatal procedural flaw. The respondent failed to provide the claimant with a fair opportunity to mitigate the allegations prior to termination."
            </p>
          </section>

          <section className={`p-5 rounded-2xl ${isHighContrast ? 'bg-black border border-zinc-800 shadow-inner' : 'bg-slate-900 border border-slate-800 shadow-xl'}`}>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Estimated Award Amount</p>
            <p className="text-2xl font-black text-blue-400 font-mono tracking-tight">RM 156,000.00</p>
            <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>Back-wages (24m):</span>
                <span className="text-white">RM 144,000</span>
              </div>
              <div className="flex justify-between text-[11px] font-medium text-slate-400">
                <span>Compensation in lieue:</span>
                <span className="text-white">RM 12,000</span>
              </div>
            </div>
          </section>

          <section>
            <h5 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> AI-Matched Precedents
            </h5>
            <div className="space-y-2">
              {['Award 210/2023 - Procedural Inequity', 'Award 45/2024 - Non-compliance'].map(p => (
                <div key={p} className={`p-3 rounded-xl border flex items-center justify-between hover:border-blue-300 transform hover:-translate-y-1 transition-all cursor-pointer group ${isHighContrast ? 'bg-black border-zinc-800' : 'bg-slate-50 border-slate-100'}`}>
                  <span className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 truncate mr-2">{p}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-400" />
                </div>
              ))}
            </div>
          </section>

          <button className="w-full py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[11px] font-black rounded-xl transition-all uppercase tracking-widest">
            View Smart Award Details
          </button>
        </div>
      </div>

      <div className={`p-6 rounded-3xl border ${isHighContrast ? 'bg-zinc-900 border-zinc-700' : 'bg-amber-50 border-amber-100'}`}>
        <h4 className="text-[11px] font-black uppercase tracking-widest text-amber-700 mb-2">Drafting Tip</h4>
        <p className="text-xs font-bold text-amber-900 leading-relaxed">
          Ensure section 1.1 explicitly mentions the collective agreement if applicable to strengthen the enforcement potential.
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-transparent h-full min-h-[500px]">
      
      {/* 1. LIST VIEW */}
      {!internalActionView && (
        <div className={`p-6 md:p-8 rounded-3xl md:rounded-[32px] border shadow-sm ${cardBg}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className={`text-h3 font-black ${titleColor}`}>
                Award Management
              </h3>
              <p className={`text-body-sm font-bold mt-1 ${sublineColor}`}>
                Draft, review, and publish industrial court awards
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">Case No</th>
                  <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">Parties</th>
                  <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">Status</th>
                  <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400">Last Updated</th>
                  <th className="py-5 px-4 text-[11px] font-black uppercase tracking-[0.1em] text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {mockCases.map((item, idx) => (
                  <tr key={idx} className={`hover:bg-slate-50/50 transition-colors group ${isHighContrast ? 'hover:bg-zinc-900 border-zinc-800' : ''}`}>
                    <td className="py-6 px-4">
                      <span className={`text-base font-mono font-black ${isHighContrast ? 'text-white' : 'text-slate-700'}`}>{item.id}</span>
                    </td>
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm md:text-base font-black ${titleColor}`}>{item.claimant}</span>
                        <span className="text-zinc-300 font-extrabold text-sm italic">vs</span>
                        <span className={`text-sm md:text-base font-bold ${sublineColor}`}>{item.respondent}</span>
                      </div>
                    </td>
                    <td className="py-6 px-4">
                      <span className={`px-4 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider ${
                        item.status === 'Pending Draft' ? 'bg-amber-50 text-amber-600' :
                        item.status === 'Pending Approval' ? 'bg-blue-50 text-blue-600' :
                        'bg-emerald-50 text-emerald-600'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className={`py-6 px-4 text-sm font-bold ${sublineColor}`}>{item.date}</td>
                    <td className="py-6 px-4 text-right">
                      {item.status === 'Pending Draft' && (loginRole === 'chairman' || loginRole === 'admin') && (
                        <button
                          onClick={() => { setSelectedInternalItem(item); setInternalActionView('draft_award'); }}
                          className="px-6 py-2.5 bg-zinc-900 hover:bg-black text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 ml-auto"
                        >
                          <Edit2 className="w-3.5 h-3.5" /> Draft Award
                        </button>
                      )}
                      
                      {item.status === 'Pending Approval' && (loginRole === 'ydp' || loginRole === 'admin') && (
                        <button
                          onClick={() => { setSelectedInternalItem(item); setInternalActionView('review_award'); }}
                          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-2 ml-auto"
                        >
                          <FileCheck className="w-3.5 h-3.5" /> Review & Approve
                        </button>
                      )}

                      {item.status === 'Published' && (
                        <button
                          onClick={() => { setSelectedInternalItem(item); setInternalActionView('view_award'); }}
                          className={`px-6 py-2.5 border text-xs font-black rounded-xl transition-all active:scale-95 flex items-center gap-2 ml-auto ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-400'}`}
                        >
                          <Globe className="w-3.5 h-3.5" /> View Published
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 2. DRAFTING VIEW */}
      {internalActionView === 'draft_award' && selectedInternalItem && (
        <div className="max-w-5xl mx-auto pb-12">
          <CaseHeader title="Draft Award" />
          
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Editor Column */}
              <div className="lg:col-span-2 space-y-8">
                <div className={`p-8 md:p-10 rounded-3xl md:rounded-[32px] border shadow-sm space-y-10 ${cardBg}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h3 className={`text-xl font-black ${titleColor}`}>Decision Summary</h3>
                    </div>
                    <p className={`text-sm font-bold mb-4 ${sublineColor}`}>Provide a high-level summary of the decision. This will be visible on the public portal.</p>
                    <textarea
                      className={`w-full p-6 rounded-2xl border text-base font-medium outline-none transition-all min-h-[150px] resize-y ${isHighContrast ? 'bg-black border-zinc-700 text-white focus:border-white' : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`}
                      placeholder="The court findings indicate that the dismissal was with just cause and excuse..."
                      value={decisionSummary}
                      onChange={(e) => setDecisionSummary(e.target.value)}
                    />
                  </div>

                  <div className={`w-full h-px ${isHighContrast ? 'bg-zinc-800' : 'bg-slate-100'}`} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <FileSignature className="w-5 h-5 text-blue-600" />
                        <h3 className={`text-xl font-black ${titleColor}`}>Full Award Drafting</h3>
                      </div>
                      <button className={`px-4 py-2 rounded-lg text-xs font-bold border transition-colors ${isHighContrast ? 'border-zinc-700 text-white hover:border-white' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                        Use Template
                      </button>
                    </div>
                    
                    {/* Simulated Rich Text Editor */}
                    <div className={`rounded-2xl border overflow-hidden ${isHighContrast ? 'border-zinc-700' : 'border-slate-200'}`}>
                      {/* Toolbar */}
                      <div className={`px-4 py-3 border-b flex items-center gap-2 overflow-x-auto hide-scrollbar ${isHighContrast ? 'bg-zinc-900 border-zinc-700 text-zinc-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                        <span className="font-serif font-bold px-2 border-r border-slate-300">Times New Roman</span>
                        <span className="font-bold px-2 border-r border-slate-300">12pt</span>
                        <span className="font-black px-2 cursor-pointer hover:text-blue-600">B</span>
                        <span className="italic font-bold px-2 cursor-pointer hover:text-blue-600">I</span>
                        <span className="underline font-bold px-2 border-r border-slate-300 cursor-pointer hover:text-blue-600">U</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </div>
                      {/* Editor Area */}
                      <div 
                        className={`p-8 md:p-12 min-h-[500px] font-serif text-lg leading-loose outline-none ${isHighContrast ? 'bg-black text-zinc-300' : 'bg-white text-slate-800'}`}
                        contentEditable
                        suppressContentEditableWarning
                      >
                        <p className="text-center font-bold mb-8 uppercase tracking-widest">In The Industrial Court Of Malaysia<br/>Case No: {selectedInternalItem.id}</p>
                        <p className="mb-4">Between</p>
                        <p className="font-bold mb-4">{selectedInternalItem.claimant}</p>
                        <p className="mb-4">And</p>
                        <p className="font-bold mb-8">{selectedInternalItem.respondent}</p>
                        <p className="font-bold mb-4">1. AWARD</p>
                        <p>1.1 This is an Award concerning a trade dispute between the parties over...</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 pt-6">
                    <button 
                      onClick={() => setInternalActionView(null)}
                      className={`px-8 py-4 rounded-2xl text-sm font-bold transition-colors ${isHighContrast ? 'bg-zinc-900 text-white hover:bg-zinc-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                    >
                      Save Draft
                    </button>
                    <button 
                      onClick={() => setInternalActionView(null)} /* in a real app this changes state */
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-2xl text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                    >
                      Submit for YDP Approval
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar Column: Smart Insights */}
              <div className="lg:col-span-1">
                <SmartAssistant />
              </div>
            </div>
        </div>
      )}

      {/* 3. REVIEW VIEW (YDP) */}
      {internalActionView === 'review_award' && selectedInternalItem && (
        <div className="max-w-5xl mx-auto pb-12">
          <CaseHeader title="Review & Approve Award" />
          
          <div className={`p-8 md:p-10 rounded-3xl md:rounded-[32px] border shadow-sm space-y-10 ${cardBg}`}>
            
            <div className={`p-6 rounded-2xl border flex items-start gap-4 ${isHighContrast ? 'bg-zinc-900 border-zinc-700' : 'bg-blue-50/50 border-blue-100'}`}>
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className={`text-lg font-black ${titleColor}`}>Ready for Publishing</h4>
                <p className={`text-sm font-medium mt-1 ${sublineColor} leading-relaxed`}>This award has been drafted by the panel Chairman and is pending your final approval before being officially recorded and published to the public portal.</p>
              </div>
            </div>

            <div>
              <h3 className={`text-[11px] font-black uppercase tracking-widest mb-4 ${isHighContrast ? 'text-zinc-500' : 'text-slate-400'}`}>Decision Summary</h3>
              <p className={`text-base font-medium leading-relaxed ${titleColor}`}>
                The court finds that the claimant was dismissed without just cause and excuse. The respondent is ordered to pay compensation in lieu of reinstatement amounting to RM 45,000 within 30 days of this award.
              </p>
            </div>

            <div>
              <h3 className={`text-[11px] font-black uppercase tracking-widest mb-4 ${isHighContrast ? 'text-zinc-500' : 'text-slate-400'}`}>Full Document Review</h3>
              <div className={`w-full aspect-[1/1.4] max-h-[600px] border rounded-2xl bg-zinc-100 flex flex-col items-center justify-center ${isHighContrast ? 'border-zinc-700 bg-zinc-900' : 'border-slate-200'}`}>
                <FileText className="w-16 h-16 text-slate-300 mb-4" />
                <p className="text-sm font-bold text-slate-500">Award_Draft_Final_v1.pdf</p>
                <button className="mt-4 px-6 py-2 bg-white border border-slate-200 shadow-sm rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600">View PDF Document</button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
              <button 
                onClick={() => setInternalActionView(null)}
                className={`px-8 py-4 rounded-2xl text-sm font-bold transition-colors ${isHighContrast ? 'border border-white text-white hover:bg-zinc-900' : 'bg-white border border-rose-200 text-rose-600 hover:bg-rose-50'}`}
              >
                Return for Revision
              </button>
              <button 
                onClick={() => setInternalActionView(null)}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" /> Approve & Publish Award
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. PUBLISHED VIEW */}
      {internalActionView === 'view_award' && selectedInternalItem && (
        <div className="max-w-5xl mx-auto pb-12">
          <CaseHeader title="Published Award" />
          
          <div className={`p-8 md:p-10 rounded-3xl md:rounded-[32px] border shadow-sm ${cardBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-10 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-inner">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h4 className={`text-2xl font-black ${titleColor}`}>Award No: 312/2026</h4>
                  <p className={`text-sm font-bold mt-1 ${isHighContrast ? 'text-emerald-400' : 'text-emerald-600'}`}>Published on 25 March 2026</p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className={`flex-1 md:flex-none px-6 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isHighContrast ? 'text-white border-zinc-700 hover:border-white' : 'text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-blue-300'}`}>
                  <Printer className="w-4 h-4" /> Print
                </button>
                <button className={`flex-1 md:flex-none px-6 py-3 rounded-xl border flex items-center justify-center gap-2 text-sm font-bold transition-all ${isHighContrast ? 'text-white border-zinc-700 hover:border-white' : 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100'}`}>
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className={`p-6 rounded-2xl ${isHighContrast ? 'bg-zinc-900' : 'bg-slate-50'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-1 ${isHighContrast ? 'text-zinc-500' : 'text-slate-400'}`}>Claimant</p>
                <p className={`text-lg font-black ${titleColor}`}>{selectedInternalItem.claimant}</p>
              </div>
              <div className={`p-6 rounded-2xl ${isHighContrast ? 'bg-zinc-900' : 'bg-slate-50'}`}>
                <p className={`text-[11px] font-black uppercase tracking-widest mb-1 ${isHighContrast ? 'text-zinc-500' : 'text-slate-400'}`}>Respondent</p>
                <p className={`text-lg font-black ${titleColor}`}>{selectedInternalItem.respondent}</p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className={`text-[11px] font-black uppercase tracking-widest mb-4 ${isHighContrast ? 'text-zinc-500' : 'text-slate-400'}`}>Public Summary</h3>
              <p className={`text-base font-medium leading-relaxed p-6 rounded-2xl border-l-4 border-emerald-500 ${isHighContrast ? 'bg-zinc-900 text-white' : 'bg-emerald-50/50 text-slate-800'}`}>
                The court has finalized and published the award after taking into consideration all submissions and evidence. The complete record is now available for public viewing in accordance with the Industrial Court Rules.
              </p>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
}
