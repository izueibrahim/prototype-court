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
        <div className={`relative ${isHighContrast ? 'bg-black border-b border-white' : 'bg-zinc-950 overflow-hidden'}`}>
            {!isHighContrast && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 flex flex-col items-center text-center">
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-ui-label mb-8 border ${isHighContrast ? 'border-white text-white' : 'border-blue-500/30 bg-blue-500/10 text-blue-300'}`}>
                    <span className="flex w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                    Version 2.0 Live
                </div>

                <h1 className={`text-display text-white mb-6 uppercase tracking-tighter`}>
                    {currentLang.heroTitle.split(' ').map((word: string, i: number, arr: string[]) => (
                        <span key={i} className={i === arr.length - 1 && !isHighContrast ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>
                <p className={`text-body-lg mb-10 sm:mb-14 max-w-2xl px-4 ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>
                    {currentLang.heroSub}
                </p>

                <div className={`w-full max-w-3xl p-2 rounded-2xl flex flex-col sm:flex-row items-center transition-all focus-within:ring-4 ${isHighContrast ? 'bg-black border border-white focus-within:ring-white/50' : 'bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl focus-within:bg-white/15 focus-within:border-white/30 focus-within:ring-blue-500/20'}`}>
                    <div className="pl-4 hidden sm:flex text-zinc-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <input
                        type="text"
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder={currentLang.searchPlace}
                        className={`w-full px-4 py-3 sm:py-4 bg-transparent border-none focus:ring-0 text-h6 outline-none text-center sm:text-left text-white placeholder:text-zinc-400`}
                    />
                    <button 
                        onClick={handleSearch}
                        className={`w-full sm:w-auto px-8 py-3 sm:py-4 rounded-xl text-h6 font-bold transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap mt-2 sm:mt-0 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'}`}>
                        {currentLang.searchBtn}
                    </button>
                </div>
            </div>
        </div>
    );
}
