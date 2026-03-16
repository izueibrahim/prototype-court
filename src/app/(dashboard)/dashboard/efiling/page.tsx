"use client";
import React from 'react';
import { FilePlus } from 'lucide-react';

export default function EFilingDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16">
        <div>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-4">My Active Cases</h2>
          <p className="text-xl text-zinc-400 font-bold tracking-tight">Manage and track your ongoing legal matters.</p>
        </div>
        <button className="btn-primary flex items-center shadow-lg shadow-blue-100 px-8 py-4">
          <FilePlus className="w-5 h-5 mr-3" /> 
          File New Dispute
        </button>
      </div>

      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-zinc-50/50 border-b border-zinc-100">
              <tr>
                <th className="py-6 px-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Case No.</th>
                <th className="py-6 px-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Title & Description</th>
                <th className="py-6 px-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 text-right">Status & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr className="group hover:bg-zinc-50/50 transition-all duration-300">
                <td className="py-10 px-10">
                  <span className="text-sm font-mono font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 cursor-pointer hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    1/1-1522/25
                  </span>
                </td>
                <td className="py-10 px-10">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-zinc-900 mb-1.5 group-hover:text-blue-600 transition-colors tracking-tight">Tay Hwee Lan v Healthy Vision</span>
                    <span className="text-sm text-zinc-400 font-bold tracking-tight">Industrial Relations Dispute • Kuala Lumpur</span>
                  </div>
                </td>
                <td className="py-10 px-10 text-right">
                  <div className="flex flex-col items-end gap-3">
                    <span className="inline-flex px-5 py-2 bg-amber-50 text-amber-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-amber-100 shadow-sm shadow-amber-50/50">
                      Upload Documents
                    </span>
                    <button className="btn-ghost text-[10px] font-black uppercase tracking-widest py-2 px-4 hover:text-blue-600">View Timeline</button>
                  </div>
                </td>
              </tr>
              <tr className="group hover:bg-zinc-50/50 transition-all duration-300">
                <td className="py-10 px-10">
                  <span className="text-sm font-mono font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 cursor-pointer hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    1/1-1079/25
                  </span>
                </td>
                <td className="py-10 px-10">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-zinc-900 mb-1.5 group-hover:text-blue-600 transition-colors tracking-tight">Azman Bin Isa v Technip Energies</span>
                    <span className="text-sm text-zinc-400 font-bold tracking-tight">Unfair Dismissal • Selangor</span>
                  </div>
                </td>
                <td className="py-10 px-10 text-right">
                  <div className="flex flex-col items-end gap-3">
                    <span className="inline-flex px-5 py-2 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-emerald-100 shadow-sm shadow-emerald-50/50">
                      Attend Hearing (12 Mar)
                    </span>
                    <button className="btn-ghost text-[10px] font-black uppercase tracking-widest py-2 px-4 hover:text-blue-600">Hearing Details</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
