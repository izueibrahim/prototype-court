"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { CloudUpload, Video, Calendar, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function QuickLinksSection() {
    const router = useRouter();
    const { lang, wcagStates, setCurrentView, setPreselectedRole } = useAppStore();
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const quickActions = [
        { icon: CloudUpload, title: lang === 'en' ? 'File a Document' : 'Failkan Dokumen', color: 'bg-blue-600' },
        { icon: Video, title: lang === 'en' ? 'Join Virtual Court' : 'Sertai Mahkamah Maya', color: 'bg-blue-600' },
        { icon: Search, title: lang === 'en' ? 'Awards & Notes' : 'Award & Notis', color: 'bg-blue-600' },
    ];

    const handleQuickLinkClick = (idx: number) => {
        // 0: File a Document -> Login
        // 1: Join Virtual Court -> Login
        // 2: Practice Notes -> Stay (Portal)
        // 3: Selected Awards -> Stay (Portal)
        // 4: Forms -> Stay (Portal)
        // 5: Court Calendar -> Stay (Portal)
        if (idx === 0 || idx === 1) {
            if (idx === 0) {
                setPreselectedRole('efiling');
                router.push('/filing-instructions');
                return;
            }
            setCurrentView('login');
        }
        else if (idx === 2 || idx === 3 || idx === 4 || idx === 5) setCurrentView('portal'); // Assuming 'portal' for new links
    };

    return (
        <div className={`border-b py-6 sm:py-10 [overflow-x:clip] ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-50 border-zinc-200 shadow-inner relative z-10'}`}>
            <div className="relative">
                <div className="flex overflow-x-auto hide-scrollbar gap-4 sm:gap-6 pb-4 snap-x items-center justify-center px-4 sm:px-8 lg:px-12">
                    {quickActions.map((link, idx: number) => {
                        const Icon = link.icon;
                        return (
                            <button
                                key={idx}
                                onClick={() => handleQuickLinkClick(idx)}
                                className={`group flex items-center p-2 pr-8 sm:pr-10 gap-4 rounded-3xl border transition-all duration-300 snap-center text-left flex-shrink-0 outline-none ${isHighContrast ? 'bg-black border-zinc-700 hover:border-white text-white' : 'bg-white border-zinc-200 hover:border-blue-400 hover:shadow-premium hover:-translate-y-1 text-zinc-900 shadow-sm'}`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isHighContrast ? 'border border-white text-white group-hover:bg-white group-hover:text-black' : `${link.color} text-white shadow-inner group-hover:${link.color.replace('600', '700')}`}`}>
                                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                                </div>
                                <span className={`text-body-sm font-bold whitespace-nowrap tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
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
