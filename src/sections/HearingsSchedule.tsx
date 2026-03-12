"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings } from '@/lib/data';
import { MapPin, Building2, ChevronDown, Download, Clock, List, Grid, Calendar } from 'lucide-react';

export default function HearingsSchedule() {
    const { lang, wcagStates } = useAppStore();
    const [scheduleView, setScheduleView] = useState<'list' | 'grid'>('list');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

    return (
        <div className={`border-y py-16 sm:py-32 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-6">
                    <div>
                        <h2 className={`text-2xl sm:text-4xl font-extrabold tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.hearingsTitle}</h2>
                        <p className={`mt-2 text-sm sm:text-lg ${tTextSub}`}>{currentLang.hearingsSub}</p>
                    </div>

                    <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-4">
                        <div className={`hidden sm:flex items-center p-1 rounded-xl border ${isHighContrast ? 'border-white' : 'border-zinc-200 bg-zinc-50'}`}>
                            <button onClick={() => setScheduleView('list')} className={`p-2.5 rounded-lg transition-all ${scheduleView === 'list' ? (isHighContrast ? 'bg-white text-black' : 'bg-white shadow-sm text-zinc-900') : 'text-zinc-400 hover:text-zinc-600'}`}>
                                <List className="w-4 h-4" />
                            </button>
                            <button onClick={() => setScheduleView('grid')} className={`p-2.5 rounded-lg transition-all ${scheduleView === 'grid' ? (isHighContrast ? 'bg-white text-black' : 'bg-white shadow-sm text-zinc-900') : 'text-zinc-400 hover:text-zinc-600'}`}>
                                <Grid className="w-4 h-4" />
                            </button>
                        </div>
                        <button className={`w-full md:w-auto flex justify-center items-center px-6 py-3 border rounded-xl text-sm font-bold transition-colors ${isHighContrast ? 'border-white text-white hover:bg-white hover:text-black' : 'border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400'}`}>
                            <Calendar className="w-4 h-4 mr-2" />
                            {currentLang.viewAll}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className={`lg:col-span-8 ${scheduleView === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6' : 'space-y-4 sm:space-y-6'}`}>
                        {upcomingHearings.map((hearing, idx) => {
                            const isExpanded = expandedId === hearing.id;
                            return (
                                <div key={idx} className={`flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border shadow-sm'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-blue-500 shadow-xl ring-4 ring-blue-500/10') : 'border-zinc-200 hover:shadow-lg hover:border-blue-300'}`}>

                                    <div
                                        onClick={() => setExpandedId(isExpanded ? null : hearing.id)}
                                        className={`flex ${scheduleView === 'list' ? 'flex-col sm:flex-row' : 'flex-col'} cursor-pointer group`}
                                    >
                                        <div className={`${scheduleView === 'list' ? 'sm:w-56 p-5 sm:p-8 sm:border-r' : 'p-5 sm:p-6 border-b'} flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-zinc-50/50 border-zinc-100 group-hover:bg-blue-50/30 transition-colors'}`}>
                                            <span className={`text-lg sm:text-2xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{hearing.time}</span>
                                            <span className={`mt-0 sm:mt-3 inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isHighContrast ? 'border border-white text-white' : 'bg-zinc-900 text-white'}`}>
                                                {currentLang.mockHearings[idx].type}
                                            </span>
                                        </div>
                                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center relative pr-12 sm:pr-14">
                                            <h4 className={`text-base sm:text-xl font-bold mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.mockHearings[idx].parties}</h4>
                                            <p className={`text-xs sm:text-sm mb-4 font-mono font-semibold ${isHighContrast ? 'text-zinc-300' : 'text-blue-600'}`}>{hearing.id}</p>
                                            <div className={`flex ${scheduleView === 'grid' ? 'flex-col gap-2' : 'flex-col sm:flex-row gap-2 sm:gap-5'} text-xs sm:text-sm font-medium`}>
                                                <div className={`flex items-center ${tTextSub}`}>
                                                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 opacity-60 flex-shrink-0" /> {hearing.court}
                                                </div>
                                                <div className={`flex items-center ${tTextSub}`}>
                                                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 opacity-60 flex-shrink-0" /> {hearing.judge}
                                                </div>
                                            </div>
                                            <div className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isHighContrast ? 'text-white' : 'text-zinc-400 group-hover:text-blue-600 group-hover:bg-blue-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white rotate-180') : ''}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    {isExpanded && (
                                        <div className={`p-5 sm:p-8 border-t ${isHighContrast ? 'border-white bg-zinc-900' : 'border-zinc-100 bg-zinc-50/50'}`}>
                                            <div className="mb-5">
                                                <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 text-zinc-500">Keywords</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {hearing.keywords.map(kw => (
                                                        <span key={kw} className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md border ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-zinc-200 text-zinc-600'}`}>{kw}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mb-6 sm:mb-8">
                                                <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-zinc-500">Summary</h5>
                                                <p className={`text-xs sm:text-sm leading-relaxed ${isHighContrast ? 'text-white' : 'text-zinc-700'}`}>{hearing.summary}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <button className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-blue-600 shadow-md'}`}>
                                                    View Details
                                                </button>
                                                <button className={`w-full sm:w-auto flex justify-center items-center px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'bg-white border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 shadow-sm'}`}>
                                                    <Download className="w-4 h-4 mr-2" /> Download PDF
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className={`lg:col-span-4 rounded-3xl p-6 sm:p-8 h-fit flex flex-col ${isHighContrast ? 'border-2 border-white' : 'bg-zinc-900 text-white shadow-2xl'}`}>
                        <h3 className="text-lg sm:text-xl font-extrabold mb-6 sm:mb-8 flex items-center border-b border-zinc-800 pb-4">
                            <Clock className={`w-5 h-5 mr-3 ${isHighContrast ? 'text-white' : 'text-blue-400'}`} />
                            {currentLang.noticesTitle}
                        </h3>
                        <ul className="space-y-6 flex-grow">
                            {currentLang.notices.map((notice: any, idx: number) => (
                                <li key={idx} className={`pb-6 ${idx !== currentLang.notices.length - 1 ? 'border-b border-zinc-800' : ''}`}>
                                    <span className={`text-[10px] sm:text-xs block mb-2 font-mono font-semibold tracking-wider ${isHighContrast ? 'text-white' : 'text-zinc-400'}`}>
                                        {notice.date}
                                    </span>
                                    <a href="#" className={`text-sm sm:text-base font-medium leading-snug transition-colors line-clamp-3 ${isHighContrast ? 'underline' : 'hover:text-blue-400 text-zinc-100'}`}>
                                        {notice.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full mt-4 py-3 sm:py-4 rounded-xl font-bold text-sm transition-colors ${isHighContrast ? 'bg-white text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                            {currentLang.viewAllNotices}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
