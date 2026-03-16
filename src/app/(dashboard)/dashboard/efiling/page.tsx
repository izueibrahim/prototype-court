"use client";
import React from 'react';
import { FilePlus } from 'lucide-react';

export default function EFilingDashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900">My Active Cases</h2>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 flex items-center"><FilePlus className="w-4 h-4 mr-2" /> File New Dispute</button>
      </div>
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-2">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="border-b-2 border-slate-100">
              <tr><th className="py-4 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case No.</th><th className="py-4 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Title</th><th className="py-4 px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Next Action</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50 transition-colors"><td className="py-5 px-6 text-sm font-mono text-indigo-600 font-bold cursor-pointer hover:underline">1/1-1522/25</td><td className="py-5 px-6 text-sm font-extrabold text-slate-900">Tay Hwee Lan v Healthy Vision</td><td className="py-5 px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Upload Documents</span></td></tr>
              <tr className="hover:bg-slate-50 transition-colors"><td className="py-5 px-6 text-sm font-mono text-indigo-600 font-bold cursor-pointer hover:underline">1/1-1079/25</td><td className="py-5 px-6 text-sm font-extrabold text-slate-900">Azman Bin Isa v Technip Energies</td><td className="py-5 px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Attend Hearing (12 Mar)</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
