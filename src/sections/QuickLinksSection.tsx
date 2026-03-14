"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { iconColors } from '@/lib/data';

export default function QuickLinksSection() {
    const { lang, wcagStates, setCurrentView } = useAppStore();
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const handleQuickLinkClick = (idx: number) => {
        // 0: File a Document -> Login
        // 1: Join Virtual Court -> Login
        // 2: Check Schedule -> Schedule
        // 3: Search Awards -> Schedule
        // 4: Practice Notes -> Stay (Portal)
        // 5: Selected Awards -> Stay (Portal)
        if (idx === 0 || idx === 1) setCurrentView('login');
        else if (idx === 2 || idx === 3) setCurrentView('schedule');
    };

    return (
        <div className={`border-b py-6 sm:py-10 [overflow-x:clip] ${isHighContrast ? 'bg-black border-white' : 'bg-[#f8fafc] border-zinc-200 shadow-inner relative z-10'}`}>
            <div className="relative">
                <div className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 pb-4 snap-x items-center justify-start px-4 sm:px-8 lg:px-12">
                    {currentLang.quickLinks.map((link: any, idx: number) => {
                        const Icon = iconColors[idx % iconColors.length];
                        return (
                            <button 
                                key={idx} 
                                onClick={() => handleQuickLinkClick(idx)}
                                className={`group flex items-center p-2 pr-8 sm:pr-10 gap-4 rounded-[28px] border transition-all duration-300 snap-center text-left flex-shrink-0 outline-none ${isHighContrast ? 'bg-black border-zinc-700 hover:border-white text-white' : 'bg-white border-blue-300/80 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 text-zinc-900 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.15)]'}`}
                            >
                                <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHighContrast ? 'border border-white text-white group-hover:bg-white group-hover:text-black' : 'bg-[#2563eb] text-white shadow-inner group-hover:bg-blue-700'}`}>
                                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                                </div>
                                <span className={`text-sm font-bold whitespace-nowrap tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    {link.title.replace('\n', ' ')}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
