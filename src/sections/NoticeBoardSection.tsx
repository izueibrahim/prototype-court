"use client";

import React, { useRef } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { ChevronLeft, ChevronRight, Bell, Calendar as CalendarIcon, ExternalLink } from 'lucide-react';

export default function NoticeBoardSection() {
    const { lang, wcagStates } = useAppStore();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -420 : 420;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const notices = currentLang.notices || [];

    return (
        <div className={`py-16 sm:py-24 border-y ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-50/50 border-zinc-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-lg shadow-blue-200'}`}>
                                <Bell className="w-5 h-5" />
                            </div>
                            <h2 className={`text-h3 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                {currentLang.noticesTitle}
                            </h2>
                        </div>
                        <p className={`text-body-md font-medium max-w-2xl ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {currentLang.noticeBoardSub || "Official announcements and updates from the Industrial Court of Malaysia."}
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => scroll('left')}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white hover:bg-white hover:text-black' : 'bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-200 shadow-sm'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white hover:bg-white hover:text-black' : 'bg-white border border-zinc-200 text-zinc-400 hover:text-blue-600 hover:border-blue-200 shadow-sm'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar px-4 sm:px-6 lg:px-[max(1rem,calc((100vw-80rem)/2+2rem))]"
                >
                    {notices.map((notice: any, idx: number) => (
                        <div 
                            key={idx}
                            className={`flex-none w-[320px] sm:w-[380px] lg:w-[420px] p-8 sm:p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 snap-start border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100 hover:border-blue-400 hover:shadow-premium'}`}
                        >
                            <div className="flex-1">
                                <span className={`inline-flex px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-50 text-blue-600'}`}>
                                    {notice.category || currentLang.generalCat || "Notice"}
                                </span>
                                <h3 className={`text-h4 mb-8 leading-tight line-clamp-3 group-hover:text-blue-600 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    {notice.title}
                                </h3>
                            </div>
                            
                            <div className="flex items-center justify-between pt-6 border-t border-zinc-50 mt-auto">
                                <div className={`flex items-center gap-2.5 ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>
                                    <CalendarIcon className="w-4 h-4 opacity-70" />
                                    <span className="text-ui-label font-bold uppercase">{notice.date}</span>
                                </div>
                                <button className={`flex items-center justify-center w-10 h-10 rounded-2xl transition-all ${isHighContrast ? 'text-white border-2 border-white hover:bg-white hover:text-black' : 'bg-zinc-50 text-zinc-300 hover:text-blue-600 hover:bg-blue-50'}`}>
                                    <ExternalLink className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    {/* View All Card */}
                    <button 
                        className={`flex-none w-[200px] sm:w-[240px] rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-500 snap-start border group ${isHighContrast ? 'bg-black border-white text-white hover:bg-zinc-900' : 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 hover:-translate-y-1 hover:shadow-2xl'}`}
                    >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${isHighContrast ? 'bg-white text-black' : 'bg-white/20 backdrop-blur-md'}`}>
                            <ChevronRight className="w-8 h-8 font-black" />
                        </div>
                        <span className="text-body-sm font-black uppercase tracking-widest">
                            {currentLang.viewAllNotices}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
