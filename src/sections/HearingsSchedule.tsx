"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, latestJudgments } from '@/lib/data';
import { MapPin, Building2, ChevronDown, Download, Calendar, Gavel } from 'lucide-react';

export default function HearingsSchedule() {
    const { lang, wcagStates, setCurrentView } = useAppStore();
    const [homeListTab, setHomeListTab] = useState<'hearings' | 'judgments'>('hearings');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const mockHearingsTypes = lang === 'en' ?
        ['Trial (T)', 'Trial (T)', 'Mention (M)', 'Hearing (H)', 'Mention (M)', 'Decision (D)'] :
        ['Bicara (B)', 'Bicara (B)', 'Sebutan (S)', 'Bicara (B)', 'Sebutan (S)', 'Keputusan (K)'];

    return (
        <div className={`pt-8 pb-20 sm:pb-10 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12 sm:mb-16">
                    <h2 className={`text-h2 mb-4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {currentLang.homeHearingsTitle || currentLang.hearingsTitle}
                    </h2>
                    <p className={`text-body-lg font-medium max-w-3xl ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {currentLang.homeHearingsSub || currentLang.hearingsSub}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10">
                        <div className={`inline-flex w-full sm:w-auto p-1.5 rounded-2xl ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-zinc-50 border border-zinc-100 shadow-inner'}`}>
                            <button
                                onClick={() => setHomeListTab('hearings')}
                                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-body-sm font-bold transition-all ${homeListTab === 'hearings' ? (isHighContrast ? 'bg-white text-black shadow-lg' : 'bg-white text-blue-600 shadow-premium') : 'text-zinc-400 hover:text-zinc-600'}`}
                            >
                                {currentLang.homeHearingsTab}
                            </button>
                            <button
                                onClick={() => setHomeListTab('judgments')}
                                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-body-sm font-bold transition-all ${homeListTab === 'judgments' ? (isHighContrast ? 'bg-white text-black shadow-lg' : 'bg-white text-blue-600 shadow-premium') : 'text-zinc-400 hover:text-zinc-600'}`}
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

                <div className="space-y-6 sm:space-y-8">
                    {homeListTab === 'hearings' ? (
                        upcomingHearings.slice(0, 4).map((hearing, idx) => {
                            const isExpanded = expandedId === hearing.id;
                            const hType = mockHearingsTypes[idx] || "Trial";

                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col rounded-3xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-blue-400 shadow-premium') : 'hover:border-blue-200 hover:shadow-premium'}`}
                                >
                                    <div
                                        onClick={() => setExpandedId(isExpanded ? null : hearing.id)}
                                        className="flex flex-col sm:flex-row cursor-pointer group"
                                    >
                                        <div className={`sm:w-60 p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-zinc-50/30 border-zinc-50 group-hover:bg-blue-50/50 transition-colors'}`}>
                                            <span className={`text-h4 font-bold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{hearing.time}</span>
                                            <span className={`mt-0 sm:mt-4 inline-flex items-center px-4 py-1.5 rounded-xl text-ui-label font-bold uppercase ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-600 text-white shadow-lg shadow-blue-100'}`}>
                                                {hType}
                                            </span>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                            <h4 className={`text-h5 mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                <span className="group-hover:text-blue-600 transition-colors">{hearing.claimant}</span>
                                                <span className="text-zinc-300 font-medium mx-2 text-sm italic">vs</span>
                                                <span className="group-hover:text-blue-600 transition-colors">{hearing.respondent}</span>
                                            </h4>
                                            <p className={`text-ui-label mb-5 font-mono font-bold uppercase ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{hearing.id}</p>
                                            <div className="flex flex-wrap gap-x-8 gap-y-3 text-ui-label font-bold uppercase">
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
                                                <h5 className="text-ui-label font-bold uppercase mb-4 text-zinc-400">Case Keywords</h5>
                                                <div className="flex flex-wrap gap-3">
                                                    {hearing.keywords.map((kw: string) => (
                                                        <span key={kw} className={`px-4 py-1.5 text-ui-label font-bold uppercase rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm'}`}>{kw}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <h5 className="text-ui-label font-bold uppercase mb-3 text-zinc-400">Brief Overview</h5>
                                                <p className={`text-body-md leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{hearing.summary}</p>
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
                                            <span className={`text-h4 font-bold text-center leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{judgment.awardNo}</span>
                                            <span className={`mt-0 sm:mt-4 text-ui-label font-bold uppercase ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                                {judgment.date}
                                            </span>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                            <h4 className={`text-h4 mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                <span className="group-hover:text-emerald-600 transition-colors">{judgment.claimant}</span>
                                                <span className="text-zinc-300 font-medium mx-2 text-sm italic">vs</span>
                                                <span className="group-hover:text-emerald-600 transition-colors">{judgment.respondent}</span>
                                            </h4>
                                            <p className={`text-ui-label mb-5 font-mono font-bold uppercase ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{judgment.id}</p>
                                            <div className="flex flex-wrap gap-x-8 gap-y-3 text-ui-label font-bold uppercase">
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
                                                <h5 className="text-ui-label font-bold uppercase mb-4 text-zinc-400">Award Keywords</h5>
                                                <div className="flex flex-wrap gap-3">
                                                    {judgment.keywords.map((kw: string) => (
                                                        <span key={kw} className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm'}`}>{kw}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="mb-10">
                                                <h5 className="text-ui-label font-bold uppercase mb-3 text-zinc-400">Award Recap</h5>
                                                <p className={`text-body-md leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{judgment.summary}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <button onClick={() => setCurrentView('case-details')} className={`inline-flex items-center justify-center px-8 py-4 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-100'} rounded-2xl text-body-sm font-bold transition-all`}>
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
            </div>
        </div>
    );
}
