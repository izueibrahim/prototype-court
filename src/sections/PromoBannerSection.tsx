"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { ScrollText, FileCheck, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { t } from '@/lib/i18n';

export default function PromoBannerSection() {
    const router = useRouter();
    const { lang, wcagStates, setCurrentView, setPreselectedRole } = useAppStore();
    const isHighContrast = wcagStates.highContrast;
    const currentLang = t[lang];

    const handleFilingClick = () => {
        setPreselectedRole('efiling');
        router.push('/filing-instructions');
    };

    return (
        <section className={`pb-10 pt-20 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                    {/* Left Banner: e-Filing CA */}
                    <div
                        onClick={handleFilingClick}
                        className={`relative p-8 sm:p-10 rounded-2xl sm:rounded-[2rem] flex items-center justify-between overflow-hidden transition-all duration-500 border cursor-pointer group ${isHighContrast ? 'bg-zinc-900 border-zinc-800 hover:border-white' : 'bg-blue-600 text-white shadow-premium hover:shadow-2xl border-transparent hover:-translate-y-1'}`}
                    >
                        {/* Background shapes */}
                        {!isHighContrast && (
                            <>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
                            </>
                        )}

                        <div className="relative z-10 flex-1 pr-4">
                            <div className="mb-4">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isHighContrast ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm border border-white/20'}`}>
                                    {currentLang.promoFilingTag}
                                </span>
                            </div>
                            <h3 className={`text-h4 mb-6 leading-tight ${isHighContrast ? 'text-white' : 'text-white'}`}>
                                {currentLang.promoFilingTitle}
                            </h3>
                            <button
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-body-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white text-blue-700 hover:bg-zinc-50 shadow-lg'}`}
                            >
                                {currentLang.promoFilingBtn}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Right Icon Illustration */}
                        <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0">
                            {!isHighContrast && (
                                <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-12 scale-90 group-hover:rotate-45 group-hover:scale-100 transition-all duration-700" />
                            )}
                            <FileCheck className={`w-12 h-12 sm:w-16 sm:h-16 relative z-20 transition-all duration-700 group-hover:scale-110 ${isHighContrast ? 'text-white' : 'text-white drop-shadow-lg'}`} />
                        </div>
                    </div>

                    {/* Right Banner: Filing Skills */}
                    <div
                        onClick={() => setCurrentView('awards')}
                        className={`relative p-8 sm:p-10 rounded-2xl sm:rounded-[2rem] flex items-center justify-between overflow-hidden border cursor-pointer transition-all duration-500 group ${isHighContrast ? 'bg-zinc-950 border-white hover:bg-zinc-900 shadow-none' : 'bg-white border-zinc-100 shadow-premium hover:shadow-2xl hover:-translate-y-1'}`}
                    >
                        {!isHighContrast && (
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        )}

                        <div className="relative z-10 flex-1 pr-4">
                            <div className="mb-4">
                                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
                                    {currentLang.promoAwardsTag}
                                </span>
                            </div>
                            <h3 className={`text-h4 mb-6 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                {currentLang.promoAwardsTitle}
                            </h3>
                            <button
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-body-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100'}`}
                            >
                                <ScrollText className="w-4 h-4" />
                                {currentLang.promoAwardsBtn}
                            </button>
                        </div>

                        {/* Right Icon Illustration */}
                        <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0">
                            {!isHighContrast && (
                                <div className="absolute inset-0 bg-blue-50 rounded-3xl -rotate-6 scale-90 group-hover:-rotate-12 group-hover:scale-105 transition-all duration-700" />
                            )}
                            <div className={`relative z-20 transition-all duration-700 group-hover:scale-110 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>
                                <ScrollText className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-sm" />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
}
