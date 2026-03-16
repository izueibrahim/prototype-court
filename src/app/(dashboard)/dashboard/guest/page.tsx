"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Video, UserCircle, Mic, Monitor } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function GuestDashboard() {
  const router = useRouter();
  const { setLoginRole, setDashActiveView, setCurrentView } = useAppStore();

  const handleLogout = () => {
    setLoginRole(null);
    setDashActiveView('overview');
    setCurrentView('portal');
    router.push('/');
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#050505] text-white fixed inset-0 z-50">
      <div className="flex-1 flex flex-col p-6 w-full">
        <header className="flex justify-between items-center mb-8 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-[14px] flex items-center justify-center shadow-lg shadow-blue-900/50"><Video className="w-6 h-6 text-white" /></div>
            <div><h1 className="font-extrabold text-xl leading-none">e-Sebutan Virtual Mention</h1><p className="text-xs text-zinc-400 font-mono mt-1 font-bold">Case: 1/1-1522/25</p></div>
          </div>
          <button onClick={handleLogout} className="px-6 py-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white rounded-xl text-sm font-bold transition-all">Leave Session</button>
        </header>
        
        <div className="flex-1 grid grid-cols-2 gap-6 mb-8">
           <div className="bg-zinc-900/80 rounded-[32px] border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group backdrop-blur-xl">
             <UserCircle className="w-24 h-24 text-zinc-700 mb-6" />
             <p className="font-bold text-zinc-400">YA Chairman (Host)</p>
             <div className="absolute top-6 right-6 bg-zinc-800 p-2 rounded-full"><Mic className="w-4 h-4 text-zinc-500" /></div>
           </div>
           <div className="bg-zinc-800/80 rounded-[32px] border border-zinc-700 flex flex-col items-center justify-center relative shadow-2xl ring-4 ring-emerald-500/30 backdrop-blur-xl overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
             <div className="w-28 h-28 bg-zinc-700 rounded-full flex items-center justify-center text-3xl font-black mb-6 relative z-10 shadow-xl">Me</div>
             <p className="font-bold text-white relative z-10">Claimant Representative</p>
             <div className="absolute top-6 right-6 bg-emerald-500/20 p-2 rounded-full border border-emerald-500/50"><Mic className="w-4 h-4 text-emerald-400" /></div>
           </div>
        </div>
        <div className="h-24 bg-zinc-900/80 rounded-[24px] flex items-center justify-center gap-6 border border-zinc-800 backdrop-blur-xl shadow-2xl">
           <button className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-all hover:scale-105"><Mic className="w-6 h-6" /></button>
           <button className="w-14 h-14 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-700 transition-all hover:scale-105"><Video className="w-6 h-6" /></button>
           <button className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/50"><Monitor className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
}
