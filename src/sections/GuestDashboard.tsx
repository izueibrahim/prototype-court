"use client";

import React, { useState } from 'react';
import {
  X, Globe, Video, Plus, ChevronRight, ArrowLeft, Printer, Activity, Mic, Save, Gavel, Scale, Clock,
  MicOff, Zap, LogOut, Calendar, Fingerprint, Monitor, Settings, ShieldCheck, User, Camera
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import SebutanChat from '@/components/sebutan/SebutanChat';

export default function GuestDashboard() {
  const { setCurrentView, wcagStates, lang } = useAppStore();
  const [isJoined, setIsJoined] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  
  const isHighContrast = wcagStates.highContrast;

  const handleLogout = () => {
    setCurrentView('login');
  };

  const caseInfo = {
    id: '1/1-1522/25',
    title: 'Tay Hwee Lan v Healthy Vision Sdn Bhd',
    type: 'Unfair Dismissal',
    chairman: "Y.A. Dato' Wan Jeffry Bin Kassim"
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="flex-1 flex flex-col">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-4 bg-white border-b border-zinc-200 shadow-sm gap-4 z-20">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/jata-negara.png" alt="Logo" className="h-10 sm:h-12 w-auto" />
            <div className="flex flex-col">
              <span className={`text-h6 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>Mahkamah Perusahaan</span>
              <div className="h-px w-full bg-zinc-100 my-0.5"></div>
              <span className={`text-ui-label ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>Industrial Court of Malaysia</span>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className={`px-4 py-1.5 ${isJoined ? 'bg-rose-50 text-rose-700 border-rose-100' : 'bg-blue-50 text-blue-700 border-blue-100'} text-[10px] font-black uppercase tracking-widest rounded-full border shadow-sm flex items-center gap-2`}>
              {isJoined && <div className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></div>}
              {isJoined ? 'In Session' : 'Pre-Call Lobby'}
            </div>
            <button onClick={handleLogout} className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-400">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="flex-1 min-h-0 relative">
          {!isJoined ? (
            <div className="absolute inset-0 z-10 bg-slate-50 flex items-center justify-center p-4 md:p-8">
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Video Preview & Controls */}
                <div className="space-y-6">
                  <div className="aspect-video bg-slate-900 rounded-[32px] md:rounded-[48px] overflow-hidden relative shadow-2xl border-4 border-white group">
                    {!isVideoOff ? (
                      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 flex items-center justify-center">
                        <User className="w-24 h-24 text-slate-700 opacity-20" />
                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white text-xs font-black uppercase tracking-widest">
                          You (Guest Access)
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-slate-500 gap-4">
                        <Camera className="w-16 h-16 opacity-20" />
                        <p className="text-sm font-black uppercase tracking-widest opacity-40">Camera is off</p>
                      </div>
                    )}
                    
                    {/* Floating Controls Overlay */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                      <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl active:scale-90 ${isMuted ? 'bg-rose-600 text-white' : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'}`}
                      >
                        {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                      </button>
                      <button 
                         onClick={() => setIsVideoOff(!isVideoOff)}
                         className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl active:scale-90 ${isVideoOff ? 'bg-rose-600 text-white' : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'}`}
                      >
                        {isVideoOff ? <Video className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                      </button>
                      <button className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all shadow-xl active:scale-90">
                        <Settings className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-8 py-4 px-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Microphone</p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Camera</p>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Speaker</p>
                    </div>
                  </div>
                </div>

                {/* Right: Info & Join Action */}
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-600">
                      <ShieldCheck className="w-6 h-6" />
                      <span className="text-sm font-black uppercase tracking-[0.2em]">Secure Guest Access</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                      You're ready to join the session.
                    </h1>
                    <p className="text-lg font-bold text-slate-500">
                      Please ensure your hardware is working correctly before entering the virtual courtroom.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-premium space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{caseInfo.id}</p>
                      <h3 className="text-xl font-black text-slate-900">{caseInfo.title}</h3>
                      <p className="text-sm font-bold text-blue-600">{caseInfo.type}</p>
                    </div>
                    <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Gavel className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presiding Chairman</p>
                        <p className="text-sm font-black text-slate-700">{caseInfo.chairman}</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsJoined(true)}
                    className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] text-lg font-black shadow-2xl shadow-blue-600/30 transition-all active:scale-[0.98] flex items-center justify-center gap-4 group"
                  >
                    Join Session Now
                    <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs font-bold text-slate-400">
                    By joining, you agree to comply with the <span className="text-blue-600 underline cursor-pointer">Virtual Court Etiquette</span> and rules.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <SebutanChat onEndSession={() => setIsJoined(false)} />
          )}
        </div>
      </div>
    </div>
  );
}
