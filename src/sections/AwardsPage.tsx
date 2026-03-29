"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { latestJudgements } from '@/lib/data';
import { MapPin, Building2, ChevronDown, Download, Gavel, Search, ArrowLeft, X, ExternalLink } from 'lucide-react';

export default function AwardsPage() {
    const { lang, wcagStates, setCurrentView, setSelectedCaseId } = useAppStore();
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    // Filter judgements based on search query
    const filteredJudgements = latestJudgements.filter(judgment => {
        const query = searchQuery.toLowerCase();
        return (
            judgment.claimant.toLowerCase().includes(query) ||
            judgment.respondent.toLowerCase().includes(query) ||
            judgment.id.toLowerCase().includes(query) ||
            judgment.awardNo.toLowerCase().includes(query) ||
            judgment.summary.toLowerCase().includes(query) ||
            judgment.keywords.some(k => k.toLowerCase().includes(query))
        );
    });

    const handleViewCaseDetails = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedCaseId(id);
        setCurrentView('case-details');
    };

    return (
        <div className="flex-1 flex flex-col relative z-10 w-full">
            {/* Header Section */}
            <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8  ${isHighContrast ? 'bg-black border-white' : 'bg-slate-50 relative overflow-hidden'}`}>
                {!isHighContrast && (
                    <div className="absolute inset-0 pointer-events-none opacity-30">
                        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-slate-50 rounded-full blur-[100px]"></div>
                    </div>
                )}
                <div className="max-w-7xl mx-auto relative z-10">
                    <button
                        className="flex items-center text-body-sm font-bold text-black mb-4 hover:text-emerald-300 transition-colors"
                        onClick={() => setCurrentView('portal')}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {currentLang.backToPortal || "Kenyataan Utama"}
                    </button>
                    <h1 className={`text-h2 text-black mb-4`}>
                        {lang === 'en' ? 'Awards & Practice Notes' : 'Award & Notis Amalan'}
                    </h1>
                    <p className={`text-body-lg max-w-2xl font-medium ${isHighContrast ? 'text-black' : 'text-black'}`}>
                        {lang === 'en'
                            ? 'Browse, search, and download the latest published industrial court awards and official practice notes.'
                            : 'Cari, semak, dan muat turun award mahkamah perusahaan yang terkini serta nota amalan rasmi.'}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className={`flex-1 py-10 sm:py-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Search and Filters */}
                    <div className={`mb-10 p-2 pl-4 flex items-center bg-white rounded-full border shadow-sm transition-all ${isHighContrast ? 'bg-black border-white' : 'border-zinc-200 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/10'}`}>
                        <Search className={`w-5 h-5 flex-shrink-0 ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`} />
                        <input
                            type="text"
                            placeholder={lang === 'en' ? "Search by party names, award number, or keywords..." : "Cari mengikut nama pihak, nombor award, atau kata kunci..."}
                            className={`flex-1 bg-transparent border-none outline-none px-4 py-3 text-body-md font-medium ${isHighContrast ? 'text-white placeholder-zinc-600' : 'text-zinc-900 placeholder-zinc-400'}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery("")} className="mr-2 p-2 text-zinc-400 hover:text-zinc-600">
                                <X className="w-5 h-5" />
                            </button>
                        )}
                        <button className={`px-6 sm:px-8 py-3 rounded-full text-body-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200'}`}>
                            {lang === 'en' ? 'Search' : 'Cari'}
                        </button>
                    </div>

                    {/* Results List */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className={`text-h4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                {lang === 'en' ? 'Latest Publications' : 'Penerbitan Terkini'}
                            </h3>
                            <span className={`text-body-sm font-bold uppercase py-1.5 px-4 rounded-xl ${isHighContrast ? 'border border-zinc-700 text-zinc-400' : 'bg-blue-100 text-blue-800'}`}>
                                {filteredJudgements.length} {lang === 'en' ? 'Results' : 'Keputusan'}
                            </span>
                        </div>

                        {filteredJudgements.length > 0 ? (
                            filteredJudgements.map((judgment, idx) => {
                                const isExpanded = expandedId === judgment.id;

                                return (
                                    <div
                                        key={idx}
                                        className={`flex flex-col rounded-3xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-300 border ${isHighContrast ? 'bg-black border-white' : 'bg-white shadow-sm'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white border-transparent' : 'border-emerald-500 shadow-premium ring-4 ring-emerald-500/5 z-10') : 'border-zinc-200 hover:border-emerald-300 hover:shadow-md'}`}
                                    >
                                        <div
                                            onClick={() => setExpandedId(isExpanded ? null : judgment.id)}
                                            className="flex flex-col sm:flex-row cursor-pointer group"
                                        >
                                            <div className={`sm:w-56 p-6 sm:p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-zinc-800' : 'bg-zinc-50 border-zinc-100 group-hover:bg-emerald-50/50 transition-colors'}`}>
                                                <span className={`text-h4 font-bold text-center leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{judgment.awardNo}</span>
                                                <span className={`mt-0 sm:mt-4 text-ui-label font-bold uppercase ${isHighContrast ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                                    {judgment.date}
                                                </span>
                                            </div>

                                            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                                <h4 className={`text-h5 mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                    <span className="group-hover:text-emerald-600 transition-colors">{judgment.claimant}</span>
                                                    <span className="text-zinc-400 font-medium mx-3 text-sm italic">vs</span>
                                                    <span className="group-hover:text-emerald-600 transition-colors">{judgment.respondent}</span>
                                                </h4>
                                                <p className={`text-ui-label mb-5 font-mono font-bold ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>{judgment.id}</p>

                                                <div className="flex flex-wrap gap-x-6 gap-y-3 text-ui-label font-bold uppercase">
                                                    <div className={`flex items-center ${isHighContrast ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                                        <MapPin className="w-4 h-4 mr-2 text-emerald-600 opacity-80 flex-shrink-0" /> {judgment.court}
                                                    </div>
                                                    <div className={`flex items-center ${isHighContrast ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                                        <Gavel className="w-4 h-4 mr-2 text-emerald-600 opacity-80 flex-shrink-0" /> {judgment.judge}
                                                    </div>
                                                </div>

                                                <div className={`absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isHighContrast ? 'text-white border border-white hover:bg-white hover:text-black' : 'text-zinc-400 bg-zinc-50 border border-zinc-100 group-hover:text-emerald-600 group-hover:bg-emerald-50 group-hover:border-emerald-100'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white border-emerald-600 rotate-180') : ''}`}>
                                                    <ChevronDown className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>

                                        {isExpanded && (
                                            <div className={`p-6 sm:p-8 border-t animate-in fade-in slide-in-from-top-2 duration-300 ${isHighContrast ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-100 bg-white'}`}>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                                                    <div className="md:col-span-2">
                                                        <h5 className="text-ui-label font-bold uppercase mb-3 text-zinc-400">Award Recap</h5>
                                                        <p className={`text-body-md leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-700'}`}>{judgment.summary}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="text-ui-label font-bold uppercase mb-3 text-zinc-400">Award Keywords</h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {judgment.keywords.map((kw: string) => (
                                                                <span key={kw} className={`px-3 py-1.5 text-ui-label font-bold rounded-lg border uppercase ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-zinc-50 border-zinc-200 text-zinc-600 shadow-sm'}`}>{kw}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-zinc-100">
                                                    <button
                                                        onClick={(e) => handleViewCaseDetails(judgment.id, e)}
                                                        className={`btn-primary flex items-center justify-center px-8 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-200'}`}
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2.5" />
                                                        {lang === 'en' ? 'View Case Details Management' : 'Lihat Pengurusan Butiran Kes'}
                                                    </button>
                                                    <button className={`btn-secondary flex items-center justify-center px-8 ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'}`}>
                                                        <Download className="w-4 h-4 mr-2.5 text-emerald-600" />
                                                        {lang === 'en' ? 'Download Full Award (PDF)' : 'Muat Turun Award Penuh (PDF)'}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <div className={`p-16 rounded-[40px] border-2 border-dashed text-center flex flex-col items-center justify-center transition-all ${isHighContrast ? 'border-zinc-800' : 'border-zinc-200 bg-white'}`}>
                                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 mx-auto">
                                    <Search className="w-10 h-10 text-emerald-400" />
                                </div>
                                <h4 className={`text-h3 mb-3 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>No Awards Found</h4>
                                <p className={`text-body-md max-w-sm mx-auto ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                    {lang === 'en' ? 'We couldn\'t find any records matching your search.' : 'Kami tidak dapat mencari rekod yang sepadan dengan carian anda.'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
