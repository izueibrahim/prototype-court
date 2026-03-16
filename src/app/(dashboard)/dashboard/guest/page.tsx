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
    <div className="flex h-screen w-full overflow-hidden bg-white text-zinc-900 fixed inset-0 z-50">
      <div className="flex-1 flex flex-col px-6 sm:px-10 py-12 sm:py-16 w-full max-w-7xl mx-auto overflow-y-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-16 bg-zinc-900 p-8 rounded-[3rem] text-white shadow-premium-lg relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[150%] bg-blue-600/10 rounded-full blur-[80px]"></div>
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20 animate-pulse border border-blue-400/30">
              <Video className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="font-black text-3xl sm:text-4xl tracking-tight leading-tight">e-Sebutan Virtual Mention</h1>
              <div className="flex items-center gap-4 mt-3">
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl border border-blue-500/30 backdrop-blur-md">Live Session</span>
                <p className="text-sm text-zinc-400 font-mono font-black opacity-80 uppercase tracking-widest">Case: #1/1-1522/25</p>
              </div>
            </div>
          </div>
          <button onClick={handleLogout} className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-red-600 hover:text-white hover:border-red-500 px-10 py-4 font-black uppercase tracking-widest text-xs relative z-10 transition-all active:scale-95 shadow-lg">
            End Virtual Session
          </button>
        </header>
        
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
           <div className="bg-zinc-50 rounded-[4rem] border border-zinc-100 flex flex-col items-center justify-center relative overflow-hidden group shadow-sm transition-all hover:bg-white hover:border-blue-200">
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/10 to-transparent"></div>
             <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-premium border border-zinc-100 relative z-10 transition-transform duration-700 group-hover:scale-110">
               <UserCircle className="w-20 h-20 text-zinc-100" />
             </div>
             <p className="font-black text-2xl text-zinc-900 relative z-10 tracking-tight">YA Chairman (Host)</p>
             <p className="text-[10px] font-black text-zinc-400 mt-2 relative z-10 uppercase tracking-[0.3em] opacity-60">Presiding Officer</p>
             <div className="absolute top-10 right-10 bg-white p-4 rounded-3xl border border-zinc-200 shadow-premium-sm group-hover:bg-zinc-50 transition-colors"><Mic className="w-6 h-6 text-zinc-300" /></div>
           </div>
           
           <div className="bg-white rounded-[4rem] border-4 border-blue-100/50 flex flex-col items-center justify-center relative shadow-premium-lg overflow-hidden group transition-all hover:border-blue-400 group">
             <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
             <div className="w-36 h-36 bg-blue-600 rounded-[3.5rem] flex items-center justify-center text-4xl font-black text-white mb-10 relative z-10 shadow-2xl shadow-blue-500/30 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3">
               Me
             </div>
             <p className="font-black text-3xl text-zinc-900 relative z-10 tracking-tight">Claimant Representative</p>
             <p className="text-[10px] font-black text-blue-600 mt-3 relative z-10 uppercase tracking-[0.3em]">Active Speaker</p>
             <div className="absolute top-10 right-10 bg-emerald-50 p-4 rounded-3xl border border-emerald-100 shadow-premium-sm animate-bounce"><Mic className="w-6 h-6 text-emerald-600" /></div>
           </div>
        </div>

        <div className="h-32 bg-white/90 backdrop-blur-3xl rounded-[3rem] flex items-center justify-center gap-10 border border-zinc-200/50 shadow-premium-xl mb-6 px-12">
            <button className="w-16 h-16 rounded-2xl bg-zinc-50 text-zinc-400 border border-zinc-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 transition-all hover:scale-110 group shadow-sm active:scale-95">
              <Mic className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
            <button className="w-16 h-16 rounded-2xl bg-zinc-50 text-zinc-400 border border-zinc-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 transition-all hover:scale-110 group shadow-sm active:scale-95">
              <Video className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </button>
            <div className="w-px h-12 bg-zinc-100"></div>
            <button className="w-24 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20 group active:scale-95">
              <Monitor className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
}
