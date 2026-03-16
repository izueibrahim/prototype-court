"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, latestJudgments } from '@/lib/data';
import { MapPin, Building2, ChevronDown, Download, Clock, Calendar, Gavel } from 'lucide-react';

export default function HearingsSchedule() {
    const { lang, wcagStates, setCurrentView } = useAppStore();
    const [homeListTab, setHomeListTab] = useState<'hearings' | 'judgments'>('hearings');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

    const mockHearingsTypes = lang === 'en' ? 
        ['Trial (B)', 'Trial (B)', 'Mention (S)', 'Hearing (B)', 'Mention (S)', 'Decision (K)'] : 
        ['Bicara (B)', 'Bicara (B)', 'Sebutan (S)', 'Bicara (B)', 'Sebutan (S)', 'Keputusan (K)'];

    return (
        <div className={`py-20 sm:py-32 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="mb-12 sm:mb-16">
                    <h2 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {currentLang.homeHearingsTitle || currentLang.hearingsTitle}
                    </h2>
                    <p className={`text-base sm:text-xl font-medium max-w-3xl ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {currentLang.homeHearingsSub || currentLang.hearingsSub}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
                        <div className={`inline-flex w-full sm:w-auto p-1.5 rounded-2xl ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-zinc-50 border border-zinc-100 shadow-inner'}`}>
                            <button 
                                onClick={() => setHomeListTab('hearings')}
                                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-sm transition-all ${homeListTab === 'hearings' ? (isHighContrast ? 'bg-white text-black shadow-lg' : 'bg-white text-blue-600 shadow-premium') : 'text-zinc-400 hover:text-zinc-600'}`}
                            >
                                {currentLang.homeHearingsTab}
                            </button>
                            <button 
                                onClick={() => setHomeListTab('judgments')}
                                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-black text-sm transition-all ${homeListTab === 'judgments' ? (isHighContrast ? 'bg-white text-black shadow-lg' : 'bg-white text-blue-600 shadow-premium') : 'text-zinc-400 hover:text-zinc-600'}`}
                            >
                                {currentLang.homeJudgmentsTab}
                            </button>
                        </div>
                        
                        <button 
                            onClick={() => setCurrentView('schedule')}
                            className="btn-secondary flex items-center px-8 py-3.5"
                        >
                            <Calendar className="w-4 h-4 mr-2.5" />
                            {currentLang.viewAll}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className={`lg:col-span-8 space-y-6 sm:space-y-8`}>
                        {homeListTab === 'hearings' ? (
                            upcomingHearings.slice(0, 4).map((hearing, idx) => {
                                const isExpanded = expandedId === hearing.id;
                                const hType = mockHearingsTypes[idx] || "Trial";
                                
                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-blue-400 shadow-premium') : 'hover:border-blue-200 hover:shadow-premium'}`}
                                    >
                                        <div 
                                            onClick={() => setExpandedId(isExpanded ? null : hearing.id)}
                                            className="flex flex-col sm:flex-row cursor-pointer group"
                                        >
                                            <div className={`sm:w-60 p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-zinc-50/30 border-zinc-50 group-hover:bg-blue-50/50 transition-colors'}`}>
                                                <span className={`text-2xl sm:text-3xl font-black tracking-tighter ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{hearing.time}</span>
                                                <span className={`mt-0 sm:mt-4 inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-600 text-white shadow-lg shadow-blue-100'}`}>
                                                    {hType}
                                                </span>
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                                <h4 className={`text-xl sm:text-2xl font-black mb-2 tracking-tight leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                    <span className="group-hover:text-blue-600 transition-colors">{hearing.claimant}</span>
                                                    <span className="text-zinc-300 font-medium mx-2 text-sm italic">vs</span>
                                                    <span className="group-hover:text-blue-600 transition-colors">{hearing.respondent}</span>
                                                </h4>
                                                <p className={`text-xs sm:text-sm mb-5 font-mono font-black uppercase tracking-widest ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{hearing.id}</p>
                                                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-black uppercase tracking-widest">
                                                    <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                        <MapPin className="w-4 h-4 mr-2.5 text-blue-600 opacity-70 flex-shrink-0" /> {hearing.court}
                                                    </div>
                                                    <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                        <Building2 className="w-4 h-4 mr-2.5 text-blue-600 opacity-70 flex-shrink-0" /> {hearing.judge}
                                                    </div>
                                                </div>
                                                <div className={`absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'text-white' : 'bg-zinc-50 text-zinc-300 group-hover:text-blue-600 group-hover:bg-blue-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-lg scale-110 rotate-180') : ''}`}>
                                                    <ChevronDown className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {isExpanded && (
                                            <div className={`p-8 sm:p-10 border-t animate-in slide-in-from-top-4 duration-500 ${isHighContrast ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-50 bg-zinc-50/30'}`}>
                                                <div className="mb-8">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-4 text-zinc-400">Case Keywords</h5>
                                                    <div className="flex flex-wrap gap-3">
                                                        {hearing.keywords.map((kw: string) => (
                                                            <span key={kw} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm'}`}>{kw}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mb-10">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-3 text-zinc-400">Brief Overview</h5>
                                                    <p className={`text-base leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{hearing.summary}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <button onClick={() => setCurrentView('case-details')} className={`btn-primary px-8 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : ''}`}>
                                                        View Full Case Details
                                                    </button>
                                                    <button className={`btn-secondary flex items-center px-8 ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : ''}`}>
                                                        <Download className="w-4 h-4 mr-2.5" /> Export Schedule (PDF)
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            latestJudgments.slice(0, 4).map((judgment, idx) => {
                                const isExpanded = expandedId === judgment.id;
                                
                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-emerald-400 shadow-premium') : 'hover:border-emerald-200 hover:shadow-premium'}`}
                                    >
                                        <div 
                                            onClick={() => setExpandedId(isExpanded ? null : judgment.id)}
                                            className="flex flex-col sm:flex-row cursor-pointer group"
                                        >
                                            <div className={`sm:w-60 p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-zinc-50/30 border-zinc-50 group-hover:bg-emerald-50/50 transition-colors'}`}>
                                                <span className={`text-lg sm:text-xl font-black text-center tracking-tight leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{judgment.awardNo}</span>
                                                <span className={`mt-0 sm:mt-4 text-[10px] font-black uppercase tracking-widest ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                                    {judgment.date}
                                                </span>
                                            </div>
                                            <div className="p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                                <h4 className={`text-xl sm:text-2xl font-black mb-2 tracking-tight leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                    <span className="group-hover:text-emerald-600 transition-colors">{judgment.claimant}</span>
                                                    <span className="text-zinc-300 font-medium mx-2 text-sm italic">vs</span>
                                                    <span className="group-hover:text-emerald-600 transition-colors">{judgment.respondent}</span>
                                                </h4>
                                                <p className={`text-xs sm:text-sm mb-5 font-mono font-black uppercase tracking-widest ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{judgment.id}</p>
                                                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-black uppercase tracking-widest">
                                                    <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                        <MapPin className="w-4 h-4 mr-2.5 text-emerald-600 opacity-70 flex-shrink-0" /> {judgment.court}
                                                    </div>
                                                    <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                        <Gavel className="w-4 h-4 mr-2.5 text-emerald-600 opacity-70 flex-shrink-0" /> {judgment.judge}
                                                    </div>
                                                </div>
                                                <div className={`absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'text-white' : 'bg-zinc-50 text-zinc-300 group-hover:text-emerald-600 group-hover:bg-emerald-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white shadow-lg scale-110 rotate-180') : ''}`}>
                                                    <ChevronDown className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {isExpanded && (
                                            <div className={`p-8 sm:p-10 border-t animate-in slide-in-from-top-4 duration-500 ${isHighContrast ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-50 bg-zinc-50/30'}`}>
                                                <div className="mb-8">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-4 text-zinc-400">Award Keywords</h5>
                                                    <div className="flex flex-wrap gap-3">
                                                        {judgment.keywords.map((kw: string) => (
                                                            <span key={kw} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm'}`}>{kw}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mb-10">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest mb-3 text-zinc-400">Award Recap</h5>
                                                    <p className={`text-base leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{judgment.summary}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <button onClick={() => setCurrentView('case-details')} className={`inline-flex items-center justify-center px-8 py-4 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-100'} rounded-2xl font-black text-sm transition-all`}>
                                                        <Download className="w-5 h-5 mr-3" /> Download Full Award (PDF)
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>

                    <div className={`lg:col-span-4 rounded-[3rem] p-8 sm:p-10 h-fit flex flex-col ${isHighContrast ? 'border-4 border-white bg-black' : 'bg-zinc-900 shadow-premium-lg'}`}>
                        <h3 className="text-xl sm:text-2xl font-black mb-8 flex items-center border-b border-white/10 pb-6 text-white tracking-tight">
                            <Clock className={`w-6 h-6 mr-3 ${isHighContrast ? 'text-white' : 'text-blue-400'}`} />
                            {currentLang.noticesTitle}
                        </h3>
                        <ul className="space-y-8 flex-grow">
                            {currentLang.notices.map((notice: any, idx: number) => (
                                <li key={idx} className={`pb-8 ${idx !== currentLang.notices.length - 1 ? 'border-b border-white/10' : ''}`}>
                                    <span className={`text-[10px] block mb-3 font-mono font-black tracking-widest uppercase ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                        {notice.date}
                                    </span>
                                    <a href="#" className={`text-base sm:text-lg font-black leading-tight tracking-tight transition-colors line-clamp-3 block ${isHighContrast ? 'text-white underline decoration-2' : 'hover:text-blue-400 text-white/90'}`}>
                                        {notice.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className={`w-full mt-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${isHighContrast ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'}`}>
                            {currentLang.viewAllNotices}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

