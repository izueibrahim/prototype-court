"use client";

import React from 'react';
import { 
  Scale, X, Briefcase, LogOut, Menu, FilePlus, ArrowLeft, UserCircle, 
  Building2, FileSignature, ChevronDown, UploadCloud, Upload, 
  FileText, Check, Calendar, Download, Trash2, File as FileIcon
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function EFilingDashboard() {
  const { 
    currentView, setCurrentView, eFilingActiveView, setEFilingActiveView, 
    selectedEFilingCase, setSelectedEFilingCase, dashMobileMenuOpen, setDashMobileMenuOpen 
  } = useAppStore();

  const handleLogout = () => {
    setCurrentView('login');
  };

  const openCaseDetails = (caseInfo: any) => {
    setSelectedEFilingCase(caseInfo);
    setEFilingActiveView('case_details');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* DASHBOARD MOBILE OVERLAY */}
      {dashMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setDashMobileMenuOpen(false)} />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white text-zinc-900 flex flex-col flex-shrink-0 border-r border-zinc-200 transform transition-transform duration-300 md:relative md:translate-x-0 ${dashMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-zinc-200">
          <div className="flex items-center gap-3">
            <img src="/jata-negara.png" alt="Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-zinc-900 font-extrabold text-sm leading-tight">Mahkamah Perusahaan</span>
              <span className="text-zinc-500 font-semibold text-[10px] leading-tight">Industrial Court</span>
            </div>
          </div>
          <button className="md:hidden text-zinc-400 hover:text-zinc-900" onClick={() => setDashMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4">
          <button 
            onClick={() => { setEFilingActiveView('cases'); setDashMobileMenuOpen(false); }} 
            className={`w-full flex items-center px-4 py-3 rounded-[14px] font-bold text-sm transition-all ${eFilingActiveView === 'cases' || eFilingActiveView === 'case_details' ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/20' : 'text-zinc-500 hover:bg-zinc-50'}`}
          >
            <Briefcase className="w-5 h-5 mr-3" /> My Cases
          </button>
        </div>
        <div className="p-6 border-t border-zinc-200">
          <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-zinc-100 text-zinc-600 hover:bg-rose-50 hover:text-rose-600 transition-colors text-xs font-bold"><LogOut className="w-4 h-4 mr-2" /> Sign Out</button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f8fafc]">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100" onClick={() => setDashMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">External User Workspace</h1>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs md:text-sm border-2 border-white shadow-sm">EU</div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">

          {/* --- eFILING VIEW: CASES LIST --- */}
          {eFilingActiveView === 'cases' && (
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">My Active Cases</h2>
                <button onClick={() => setEFilingActiveView('new_filing')} className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 flex justify-center items-center transition-all transform hover:-translate-y-0.5"><FilePlus className="w-4 h-4 mr-2" /> File New Dispute</button>
              </div>
              <div className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-1 md:p-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead className="border-b-2 border-slate-100">
                      <tr><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case No.</th><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Title</th><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Next Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr onClick={() => openCaseDetails({ id: '1/1-1522/25', title: 'Tay Hwee Lan v Healthy Vision', status: 'mention' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-indigo-600 font-bold group-hover:underline">1/1-1522/25</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Tay Hwee Lan v Healthy Vision</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Upload Documents</span></td>
                      </tr>
                      <tr onClick={() => openCaseDetails({ id: '1/1-1079/25', title: 'Azman Bin Isa v Technip Energies', status: 'hearing' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-indigo-600 font-bold group-hover:underline">1/1-1079/25</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Azman Bin Isa v Technip Energies</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Attend Hearing (12 Mar)</span></td>
                      </tr>
                      <tr onClick={() => openCaseDetails({ id: 'F1003', title: 'Ravi Kumar v Synergy Corp', status: 'review' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-slate-400 font-bold">Pending Registration</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Ravi Kumar v Synergy Corp</td>
                        <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">Pending Review</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* --- eFILING VIEW: NEW FILING FORM --- */}
          {eFilingActiveView === 'new_filing' && (
            <div className="max-w-4xl mx-auto pb-12">
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setEFilingActiveView('cases')} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">File New Dispute</h2>
                  <p className="text-sm font-semibold text-slate-500">Borang Pendaftaran Kes (e-Filing)</p>
                </div>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setEFilingActiveView('cases'); }} className="space-y-6">

                {/* Section 1: Claimant */}
                <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><UserCircle className="w-5 h-5 mr-2 text-indigo-600" /> 1. Claimant Details (Pihak Menuntut)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="Enter full name as per NRIC" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">NRIC / Passport</label>
                      <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="e.g., 900101-14-5555" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="+60 12-345 6789" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Mailing Address</label>
                      <textarea required rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none resize-none" placeholder="Full residential or mailing address"></textarea>
                    </div>
                  </div>
                </div>

                {/* Section 2: Respondent */}
                <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><Building2 className="w-5 h-5 mr-2 text-indigo-600" /> 2. Respondent Details (Pihak Penentang)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Employer Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="Registered company name" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company Address</label>
                      <textarea required rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none resize-none" placeholder="Registered office or business address"></textarea>
                    </div>
                  </div>
                </div>

                {/* Section 3: Dispute Details */}
                <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><FileSignature className="w-5 h-5 mr-2 text-indigo-600" /> 3. Dispute Details (Butiran Kes)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nature of Dispute</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none appearance-none">
                          <option value="">Select case category</option>
                          <option value="unfair">Unfair Dismissal (Sec 20 IRA 1967)</option>
                          <option value="constructive">Constructive Dismissal</option>
                          <option value="trade">Trade Dispute</option>
                          <option value="ca">Collective Agreement</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Date of Dismissal / Dispute</label>
                      <input type="date" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Drawn Salary (RM)</label>
                      <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="e.g. 3500" />
                    </div>
                  </div>
                </div>

                {/* Section 4: Initial Documents */}
                <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><UploadCloud className="w-5 h-5 mr-2 text-indigo-600" /> 4. Supporting Documents</h3>
                  <p className="text-sm text-slate-500 mb-4 font-medium">Please upload the Representation Letter or JPPM referral document if available. PDF format only (Max 10MB).</p>
                  <div className="border-2 border-dashed border-slate-300 rounded-[20px] bg-slate-50 p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/50 hover:border-indigo-300 transition-colors cursor-pointer">
                    <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4"><Upload className="w-6 h-6" /></div>
                    <p className="text-sm font-bold text-slate-700 mb-1">Click to browse or drag and drop</p>
                    <p className="text-xs font-semibold text-slate-500">JPPM_Referral.pdf</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 justify-end">
                  <button type="button" onClick={() => setEFilingActiveView('cases')} className="px-6 py-3.5 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>
                  <button type="submit" className="px-8 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5">Submit Filing</button>
                </div>
              </form>
            </div>
          )}

          {/* --- eFILING VIEW: CASE DETAILS & TRACKING --- */}
          {eFilingActiveView === 'case_details' && selectedEFilingCase && (
            <div className="max-w-6xl mx-auto pb-12">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setEFilingActiveView('cases')} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors flex-shrink-0"><ArrowLeft className="w-5 h-5" /></button>
                  <div>
                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">{selectedEFilingCase.title}</h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm font-mono font-bold text-indigo-600">{selectedEFilingCase.id}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span className="text-sm font-bold text-slate-500">Unfair Dismissal</span>
                    </div>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center flex-shrink-0"><Download className="w-4 h-4 mr-2" /> Download Summary</button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* LEFT COLUMN: TIMELINE */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                    <h3 className="text-base font-extrabold text-slate-900 mb-6 uppercase tracking-wider text-xs">Case Timeline</h3>

                    <div className="relative pl-4 border-l-2 border-indigo-100 space-y-8">
                      {/* Step 1: Filing */}
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
                        <h4 className="text-sm font-extrabold text-slate-900">Case Filed</h4>
                        <p className="text-xs font-semibold text-slate-500 mt-1">05 Mar 2026, 10:30 AM</p>
                      </div>

                      {/* Step 2: Registration */}
                      <div className="relative">
                        <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status !== 'review' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                          {selectedEFilingCase.status !== 'review' && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status !== 'review' ? 'text-slate-900' : 'text-slate-500'}`}>Registered by Court</h4>
                        {selectedEFilingCase.status !== 'review' && <p className="text-xs font-semibold text-slate-500 mt-1">Assigned ID: {selectedEFilingCase.id}</p>}
                      </div>

                      {/* Step 3: Mention */}
                      <div className="relative">
                        <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status === 'hearing' ? 'bg-indigo-600 text-white' : selectedEFilingCase.status === 'mention' ? 'bg-amber-100 text-amber-600 border-2 border-amber-500' : 'bg-slate-200 text-slate-400'}`}>
                          {selectedEFilingCase.status === 'hearing' && <Check className="w-3.5 h-3.5" />}
                          {selectedEFilingCase.status === 'mention' && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
                        </div>
                        <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status === 'hearing' ? 'text-slate-900' : selectedEFilingCase.status === 'mention' ? 'text-amber-600' : 'text-slate-400'}`}>First Mention</h4>
                        {selectedEFilingCase.status === 'mention' && (
                          <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
                            <p className="text-xs font-bold text-amber-800 mb-1">Action Required</p>
                            <p className="text-[10px] font-semibold text-amber-700">Please upload your Statement of Case (SOC) before the next mention date.</p>
                          </div>
                        )}
                      </div>

                      {/* Step 4: Hearing */}
                      <div className="relative">
                        <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status === 'hearing' ? 'bg-indigo-100 text-indigo-600 border-2 border-indigo-600' : 'bg-slate-200 text-slate-400'}`}>
                          {selectedEFilingCase.status === 'hearing' && <div className="w-2 h-2 rounded-full bg-indigo-600"></div>}
                        </div>
                        <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status === 'hearing' ? 'text-indigo-600' : 'text-slate-400'}`}>Trial / Hearing</h4>
                        {selectedEFilingCase.status === 'hearing' && (
                          <div className="mt-2 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                            <p className="text-xs font-bold text-indigo-800 flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> Scheduled: 12 Mar 2026</p>
                          </div>
                        )}
                      </div>

                      {/* Step 5: Award */}
                      <div className="relative">
                        <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center ring-4 ring-white"></div>
                        <h4 className="text-sm font-extrabold text-slate-400">Award / Decision</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: DOCUMENT MANAGEMENT */}
                <div className="lg:col-span-2 space-y-6">

                  {/* Upload Interface */}
                  <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs">Pleadings & Document Upload</h3>
                      <button className="text-xs font-bold text-indigo-600 hover:underline">Guidelines</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
                          <option>Statement of Case (SOC)</option>
                          <option>Statement in Reply (SIR)</option>
                          <option>Rejoinder</option>
                          <option>Bundle of Documents</option>
                          <option>Witness Statement</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                      <button className="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-colors flex justify-center items-center"><Upload className="w-4 h-4 mr-2" /> Browse File</button>
                    </div>

                    {/* Dropzone visual */}
                    <div className="border-2 border-dashed border-slate-300 rounded-[20px] bg-slate-50 p-6 flex flex-col items-center justify-center text-center">
                      <FileIcon className="w-8 h-8 text-slate-400 mb-2" />
                      <p className="text-sm font-semibold text-slate-600">Drag & drop your PDF document here</p>
                      <p className="text-[10px] font-semibold text-slate-400 mt-1">Max file size: 20MB. Format: PDF only.</p>
                    </div>
                  </div>

                  {/* Uploaded Documents List */}
                  <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
                    <h3 className="text-base font-extrabold text-slate-900 mb-6 uppercase tracking-wider text-xs">Case File Repository</h3>

                    {selectedEFilingCase.status === 'review' ? (
                      <div className="text-center py-8">
                        <FileText className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-slate-500">No official documents registered yet.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
                            <div>
                              <p className="text-sm font-extrabold text-slate-900">Representation Letter (JPPM)</p>
                              <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 05 Mar 2026 • 2.4 MB</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                          </div>
                        </div>

                        {selectedEFilingCase.status === 'hearing' && (
                          <>
                            <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
                                <div>
                                  <p className="text-sm font-extrabold text-slate-900">Statement of Case (SOC)</p>
                                  <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 10 Mar 2026 • 5.1 MB • Claimant</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                                <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
                                <div>
                                  <p className="text-sm font-extrabold text-slate-900">Statement in Reply (SIR)</p>
                                  <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 11 Mar 2026 • 4.8 MB • Respondent</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
