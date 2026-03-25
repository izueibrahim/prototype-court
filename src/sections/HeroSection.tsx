"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Search } from 'lucide-react';

export default function HeroSection() {
    const { lang, wcagStates, searchQuery, setSearchQuery, setCurrentView } = useAppStore();
    const [localSearch, setLocalSearch] = useState('');
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const handleSearch = () => {
        if (localSearch.trim()) {
            setSearchQuery(localSearch);
            setCurrentView('search');
        } else if (searchQuery.trim()) {
            setCurrentView('search');
        }
    };

    return (
        <div className={`relative ${isHighContrast ? 'bg-black border-b border-white' : 'bg-[#0f172a] overflow-hidden'}`}>
            {!isHighContrast && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Deep blue/purple glowing background similar to screenshot */}
                    <div className="absolute top-[-10%] left-1/4 w-[50%] h-[60%] bg-[#0047AB]/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-20%] right-1/4 w-[60%] h-[50%] bg-[#4f46e5]/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563eb]/20 to-transparent"></div>
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
                <div className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${isHighContrast ? 'border-white text-white' : 'border-blue-500/30 bg-[#1e3a8a]/50 text-blue-200'}`}>
                    <span className="flex w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                    VERSION 2.0 LIVE
                </div>

                <h1 className={`text-[40px] sm:text-[56px] font-black text-white mb-4 uppercase tracking-tight leading-none`}>
                    SEAMLESS DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#60a5fa]">JUSTICE.</span>
                </h1>
                
                <p className={`text-body-sm mb-12 max-w-xl font-medium ${isHighContrast ? 'text-zinc-400' : 'text-blue-100/70'}`}>
                    Your unified gateway for case management, e-filing, and virtual court proceedings.
                </p>

                {/* Search Bar matching screenshot */}
                <div className={`w-full max-w-2xl p-1.5 rounded-full flex flex-col sm:flex-row items-center transition-all focus-within:ring-2 ${isHighContrast ? 'bg-black border border-white focus-within:ring-white/50' : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl focus-within:bg-white/10 focus-within:border-white/20 focus-within:ring-blue-500/30'}`}>
                    <div className="pl-5 hidden sm:flex text-zinc-400">
                        <Search className="w-5 h-5 text-zinc-400" />
                    </div>
                    <input
                        type="text"
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Case No., Award Title, or Keywords..."
                        className={`w-full px-4 py-3 bg-transparent border-none focus:ring-0 text-body-sm outline-none text-center sm:text-left text-white placeholder:text-zinc-500`}
                    />
                    <button 
                        onClick={handleSearch}
                        className={`w-full sm:w-auto px-8 py-2.5 rounded-full text-body-sm font-bold transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap mt-2 sm:mt-0 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#2563eb] hover:bg-blue-500 text-white shadow-md'}`}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
