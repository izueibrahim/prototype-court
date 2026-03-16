"use client";

import React from 'react';
import { 
  Video, UserCircle, Mic, Monitor
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function GuestDashboard() {
  const { setCurrentView } = useAppStore();

  const handleLogout = () => {
    setCurrentView('login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="flex-1 flex flex-col p-4 md:p-6">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/jata-negara.png" alt="Logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-zinc-900 font-extrabold text-sm leading-tight">Mahkamah Perusahaan</span>
              <span className="text-zinc-500 font-semibold text-[10px] leading-tight">Industrial Court</span>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">Live Virtual Mention</div>
            <button onClick={handleLogout} className="flex-1 sm:flex-none px-6 py-2.5 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-600 hover:text-white rounded-xl text-sm font-bold transition-all shadow-sm">Leave Session</button>
          </div>
        </header>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 min-h-0">
          <div className="bg-white rounded-[24px] md:rounded-[32px] border border-zinc-200 flex flex-col items-center justify-center relative overflow-hidden shadow-sm h-full">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-4"><UserCircle className="w-12 h-12 md:w-16 md:h-16 text-zinc-400" /></div>
            <p className="font-extrabold text-sm md:text-base text-zinc-900 uppercase tracking-tight">YA Chairman (Host)</p>
            <p className="text-[10px] font-bold text-zinc-400 mt-1">Mahkamah 1</p>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-zinc-50 p-2 rounded-full border border-zinc-100 shadow-inner"><Mic className="w-4 h-4 text-zinc-400" /></div>
          </div>
          <div className="bg-white rounded-[24px] md:rounded-[32px] border border-blue-200 flex flex-col items-center justify-center relative shadow-lg ring-4 ring-blue-500/5 h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
            <div className="w-20 h-20 md:w-28 md:h-28 bg-blue-700 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 relative z-10 shadow-xl ring-8 ring-blue-50">Me</div>
            <p className="font-extrabold text-sm md:text-base text-blue-900 relative z-10 uppercase tracking-tight">Claimant Representative</p>
            <p className="text-[10px] font-bold text-blue-500 relative z-10 mt-1">Case: 1/1-1522/25</p>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-emerald-100 p-2 rounded-full border border-emerald-200 shadow-sm"><Mic className="w-4 h-4 text-emerald-600" /></div>
          </div>
        </div>
        <div className="h-20 md:h-24 bg-white rounded-[24px] flex items-center justify-center gap-4 md:gap-6 border border-zinc-200 shadow-xl flex-shrink-0">
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center transition-all hover:scale-105 shadow-sm"><Mic className="w-5 h-5 md:w-6 md:h-6" /></button>
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200 flex items-center justify-center hover:bg-zinc-200 transition-all hover:scale-105 shadow-sm"><Video className="w-5 h-5 md:w-6 md:h-6" /></button>
          <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-105 shadow-lg shadow-blue-700/20"><Monitor className="w-5 h-5 md:w-6 md:h-6" /></button>
        </div>
      </div>
    </div>
  );
}
