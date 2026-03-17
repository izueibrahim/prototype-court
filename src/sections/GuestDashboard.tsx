"use client";

import React from 'react';
import {
  Video, UserCircle, Mic, Monitor
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import SebutanChat from '@/components/sebutan/SebutanChat';

export default function GuestDashboard() {
  const { setCurrentView, wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  const handleLogout = () => {
    setCurrentView('login');
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="flex-1 flex flex-col p-4 md:p-6">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/jata-negara.png" alt="Logo" className="h-10 sm:h-12 w-auto" />
            <div className="flex flex-col">
              <span className={`text-h6 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>Mahkamah Perusahaan</span>
              <div className="h-px w-full bg-zinc-100 my-0.5"></div>
              <span className={`text-ui-label ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>Industrial Court</span>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="px-3 py-1 bg-blue-50 text-blue-700 text-ui-label rounded-lg border border-blue-100">Live Virtual Mention</div>
            <button onClick={handleLogout} className="flex-1 sm:flex-none px-6 py-2.5 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-600 hover:text-white rounded-xl text-body-sm font-bold transition-all shadow-sm">Leave Session</button>
          </div>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 overflow-hidden">
          {/* Left: Video Area */}
          <div className="flex-[0.4] flex flex-col gap-4 md:gap-6 min-h-0">
            <div className="flex-1 bg-zinc-950 rounded-[24px] md:rounded-[32px] border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden shadow-premium group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-4 border border-zinc-800 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <UserCircle className="w-12 h-12 md:w-16 md:h-16 text-zinc-700" />
              </div>
              <div className="relative z-10 text-center">
                <p className="text-ui-label text-zinc-300 px-3 py-1 bg-zinc-900/80 rounded-full border border-zinc-800 inline-block">YA Chairman (Host)</p>
                <p className="text-ui-label text-zinc-500 mt-2 block">Mahkamah 1 • Kuala Lumpur</p>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 shadow-inner"><Mic className="w-4 h-4 text-zinc-600" /></div>
            </div>

            <div className="flex-1 bg-zinc-900 rounded-[24px] md:rounded-[32px] border border-blue-900/20 flex flex-col items-center justify-center relative shadow-premium overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-blue-700 rounded-full flex items-center justify-center text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 relative z-10 shadow-2xl ring-8 ring-blue-900/10 group-hover:scale-105 transition-all duration-500">Me</div>
              <div className="relative z-10 text-center">
                <p className="text-ui-label text-blue-100 block">Claimant Representative</p>
                <p className="text-ui-label text-blue-400 mt-2 block">Case: 1/1-1522/25</p>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-emerald-500 p-2.5 rounded-xl border border-emerald-400 shadow-lg shadow-emerald-500/20 animate-pulse"><Mic className="w-4 h-4 text-white" /></div>
            </div>

            <div className="h-20 lg:h-24 bg-white rounded-[24px] flex items-center justify-center gap-4 md:gap-6 border border-zinc-200 shadow-premium flex-shrink-0">
              <button className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center transition-all hover:scale-105 shadow-sm active:scale-95"><Mic className="w-5 h-5" /></button>
              <button className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-500 border border-zinc-200 flex items-center justify-center hover:bg-zinc-200 transition-all hover:scale-105 shadow-sm active:scale-95"><Video className="w-5 h-5" /></button>
              <button className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-105 shadow-lg shadow-blue-700/20 active:scale-95"><Monitor className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Right: Chat Interaction Area */}
          <div className="flex-[0.6] min-h-0">
            <SebutanChat />
          </div>
        </div>
      </div>
    </div>
  );
}
