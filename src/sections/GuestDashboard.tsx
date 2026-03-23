"use client";

import React from 'react';
import {
  X, Globe, Video, Plus, ChevronRight, ArrowLeft, Printer, Activity, Mic, Save, Gavel, Scale, Clock,
  MicOff, Zap, LogOut, Calendar, Fingerprint
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
            <div className="px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-blue-100 shadow-sm">
              Live Virtual Mention
            </div>
          </div>
        </header>

        <div className="flex-1 min-h-0 relative">
          <SebutanChat />
        </div>
      </div>
    </div>
  );
}
