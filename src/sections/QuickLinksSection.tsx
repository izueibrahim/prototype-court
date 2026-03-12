"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { iconColors } from '@/lib/data';

export default function QuickLinksSection() {
    const { lang, wcagStates } = useAppStore();
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <div className={`border-b ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-200 shadow-sm relative z-10'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex overflow-x-auto hide-scrollbar py-6 sm:py-8 gap-4 sm:gap-8 justify-start sm:justify-between items-center snap-x snap-mandatory">
                    {currentLang.quickLinks.map((link: any, idx: number) => {
                        const Icon = iconColors[idx % iconColors.length];
                        return (
                            <a key={idx} href="#" className="flex items-center gap-3 sm:gap-4 group min-w-max flex-shrink-0 snap-center p-2 sm:p-0 rounded-lg hover:bg-zinc-50 sm:hover:bg-transparent transition-colors">
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isHighContrast ? 'border-white text-white group-hover:bg-white group-hover:text-black' : 'border-zinc-200 text-zinc-500 group-hover:border-blue-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:shadow-sm'}`}>
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className={`text-xs sm:text-sm font-bold whitespace-pre-line leading-snug ${isHighContrast ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
                                    {link.title}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
