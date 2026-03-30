"use client";

import React, { useState, useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Search, ChevronLeft, ChevronRight, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

export default function HeroSection() {
    const { lang, wcagStates, searchQuery, setSearchQuery, setCurrentView } = useAppStore();
    const [localSearch, setLocalSearch] = useState('');
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    const notices = currentLang.notices || [];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -340 : 340;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

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
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center text-center">
                <div className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${isHighContrast ? 'border-white text-white' : 'border-blue-500/30 bg-[#1e3a8a]/50 text-blue-200'}`}>
                    <span className="flex w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                    VERSION 2.0 LIVE
                </div>

                <h1 className={`text-h1 sm:text-[56px] font-black text-white mb-4 uppercase tracking-tight leading-none`}>
                    SEAMLESS DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#60a5fa]">JUSTICE.</span>
                </h1>

                <p className={`text-body-sm mb-12 max-w-xl font-medium ${isHighContrast ? 'text-zinc-400' : 'text-blue-100/70'}`}>
                    Your unified gateway for case management, e-filing, and virtual court proceedings.
                </p>

                {/* Search Bar matching screenshot */}
                <div className={`w-full max-w-2xl p-1.5 rounded-3xl sm:rounded-full flex flex-col sm:flex-row items-center transition-all focus-within:ring-2 mb-20 ${isHighContrast ? 'bg-black border border-white focus-within:ring-white/50' : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl focus-within:bg-white/10 focus-within:border-white/20 focus-within:ring-blue-500/30'}`}>
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
                        className={`w-full sm:w-auto px-8 py-2.5 rounded-2xl sm:rounded-full text-body-sm font-bold transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap mt-2 sm:mt-0 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#2563eb] hover:bg-blue-500 text-white shadow-md'}`}>
                        Search
                    </button>
                </div>

                {/* Integrated Notices Slider */}
                <div className="w-full relative group/notices">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
                    >
                        {notices.slice(0, 5).map((notice: any, idx: number) => {
                            const noticeImages = [
                                '/images/notice-cards/gavel.png',
                                '/images/notice-cards/scales.png',
                                '/images/notice-cards/books.png',
                                '/images/notice-cards/pen.png',
                                '/images/notice-cards/courtroom.png'
                            ];
                            return (
                                <button
                                    key={idx}
                                    onClick={() => { }} // Placeholder for actual navigation
                                    className={`flex-none w-[320px] sm:w-[400px] h-[220px] sm:h-[260px] rounded-3xl sm:rounded-[2.5rem] flex flex-col text-left transition-all duration-500 snap-start border relative overflow-hidden group ${isHighContrast ? 'bg-black border-white' : 'border-white/10 hover:border-white/20 shadow-xl hover:-translate-y-1'}`}
                                >
                                    {!isHighContrast && (
                                        <>
                                            {/* Background Image Layer */}
                                            <div
                                                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url('${noticeImages[idx % noticeImages.length]}')`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                            />
                                            {/* Dynamic Gradient Overlay for glassmorphism and readability */}
                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/50 group-hover:from-slate-950/100 transition-colors duration-500" />
                                        </>
                                    )}

                                    <div className="relative z-20 flex-1 p-6 sm:p-8 flex flex-col h-full">
                                        <div className="flex-1">
                                            <span className={`inline-flex px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest mb-6 ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-500/30 text-blue-100 backdrop-blur-md border border-white/10'}`}>
                                                {notice.category || currentLang.generalCat || "Notice"}
                                            </span>
                                            <h3 className={`text-lg sm:text-xl font-bold mb-6 leading-tight line-clamp-2 ${isHighContrast ? 'text-white' : 'text-white drop-shadow-md'}`}>
                                                {notice.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                                            <div className={`flex items-center gap-2 ${isHighContrast ? 'text-zinc-400' : 'text-blue-100/70'}`}>
                                                <CalendarIcon className="w-4 h-4 opacity-80" />
                                                <span className="text-[10px] font-bold uppercase tracking-wider">{notice.date}</span>
                                            </div>
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-2xl transition-all ${isHighContrast ? 'text-white border-2 border-white group-hover:bg-white group-hover:text-black' : 'bg-white/10 text-white/60 group-hover:text-white group-hover:bg-white/20 border border-white/10 shadow-lg'}`}>
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}

                        {/* Minimal View All Card */}
                        <button
                            className={`flex-none w-[140px] rounded-3xl sm:rounded-[2rem] flex flex-col items-center justify-center transition-all duration-500 snap-start border group ${isHighContrast ? 'bg-black border-white text-white hover:bg-zinc-900' : 'bg-blue-600 border-blue-500 text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${isHighContrast ? 'bg-white text-black' : 'bg-white/20 backdrop-blur-md'}`}>
                                <ChevronRight className="w-6 h-6 font-black" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest px-2 text-center">
                                {currentLang.viewAllNotices}
                            </span>
                        </button>
                    </div>

                    {/* Navigation Arrows moved to bottom-right */}
                    <div className="flex items-center justify-end mt-2 gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white hover:bg-white hover:text-black' : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 shadow-lg'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white hover:bg-white hover:text-black' : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 shadow-lg'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
