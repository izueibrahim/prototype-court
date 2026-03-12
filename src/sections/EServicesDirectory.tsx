"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { allModules } from '@/lib/data';
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {allModules[activeTab].items.map((mod: any, idx: number) => (
                        <div key={idx} className={`p-4 sm:p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 group ${isHighContrast ? 'bg-black border border-white hover:bg-zinc-900' : 'bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-md cursor-pointer'}`}>
                            <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-blue-50 text-blue-600'}`}>
                                <mod.icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0 pr-2">
                                <h4 className={`text-base font-bold truncate mb-0.5 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    {lang === 'en' ? mod.enTitle : mod.msTitle}
                                </h4>
                                <p className={`text-sm truncate ${tTextSub}`}>
                                    {lang === 'en' ? mod.enDesc : mod.msDesc}
                                </p>
                            </div>
                            <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isHighContrast ? 'text-white group-hover:bg-white group-hover:text-black' : 'text-zinc-300 group-hover:text-blue-600 group-hover:bg-blue-50'}`}>
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
