"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { allModules } from '@/lib/data';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function EServicesDirectory() {
    const { lang, wcagStates } = useAppStore();
    const [activeTab, setActiveTab] = useState(0);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

    return (
        <div id="modules" className={`py-16 sm:py-20 ${isHighContrast ? '' : 'bg-zinc-50/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 px-4">
                    <h2 className={`text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {currentLang.architectureTitle}
                    </h2>
                    <p className={`text-sm sm:text-base max-w-2xl mx-auto ${tTextSub}`}>
                        {currentLang.architectureSub}
                    </p>
                </div>

                {/* Horizontal scrollable tabs on mobile */}
                {currentLang.tabs.length > 1 && (
                    <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-4 sm:px-0 pb-2 snap-x w-full">
                        {currentLang.tabs.map((tabLabel: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap snap-center transition-all duration-300 ${activeTab === idx
                                        ? (isHighContrast ? 'bg-white text-black' : 'bg-zinc-900 text-white shadow-md')
                                        : (isHighContrast ? 'border border-white text-white hover:bg-zinc-800' : 'bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm')
                                    }`}
                            >
                                {tabLabel}
                            </button>
                        ))}
                    </div>
                )}

                {/* Carousel Container */}
                <div className="relative group/carousel">
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                        {allModules[activeTab].items
                            .filter((mod: any) => mod.enTitle !== 'Smart Award Search')
                            .map((mod: any, idx: number) => (
                                <Link 
                                    key={idx} 
                                    href={mod.href || '#'}
                                    className={`flex-none w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-500 snap-center group/card ${isHighContrast 
                                        ? 'bg-black border-2 border-white hover:bg-zinc-900' 
                                        : 'bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer'
                                    }`}
                                >
                                    <div>
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3 ${isHighContrast 
                                            ? 'border-2 border-white text-white' 
                                            : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600'
                                        }`}>
                                            <mod.icon className="w-7 h-7" />
                                        </div>
                                        <h4 className={`text-xl sm:text-2xl font-bold leading-tight mb-4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                            {lang === 'en' ? mod.enTitle : mod.msTitle}
                                        </h4>
                                        <p className={`text-sm sm:text-base leading-relaxed line-clamp-4 ${tTextSub}`}>
                                            {lang === 'en' ? mod.enDesc : mod.msDesc}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-auto pt-6">
                                        <span className={`text-sm font-bold uppercase tracking-wider ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>
                                            Explore
                                        </span>
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isHighContrast 
                                            ? 'text-white border border-white group-hover/card:bg-white group-hover/card:text-black' 
                                            : 'bg-zinc-50 text-zinc-400 group-hover/card:text-blue-600 group-hover/card:bg-blue-50 group-hover/card:translate-x-1'
                                        }`}>
                                            <ChevronRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>

                    {/* Stylized scroll hints or controls could go here if needed, but Apple Store 
                        style often relies on the natural peeking of cards and horizontal scroll */}
                </div>

            </div>
        </div>
    );
}
