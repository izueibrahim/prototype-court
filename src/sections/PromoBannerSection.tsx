"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { FileDown, FileCheck, ArrowRight, Asterisk } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PromoBannerSection() {
    const router = useRouter();
    const { wcagStates, setCurrentView, setPreselectedRole } = useAppStore();
    const isHighContrast = wcagStates.highContrast;

    const handleFilingClick = () => {
        setPreselectedRole('efiling');
        router.push('/filing-instructions');
    };

    return (
        <section className={`pb-10 pt-20 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                    {/* Left Banner: e-Filing CA */}
                    <div className={`relative p-8 sm:p-12 lg:p-14 rounded-3xl sm:rounded-[2.5rem] flex flex-col justify-between overflow-hidden transition-all border ${isHighContrast ? 'bg-zinc-900 border-zinc-800 hover:border-white group' : 'bg-blue-600 text-white shadow-premium hover:shadow-2xl group border-transparent'}`}>
                        {/* Background shapes */}
                        {!isHighContrast && (
                            <>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-400/30 rounded-full blur-2xl translate-y-1/4 translate-x-1/4"></div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full opacity-90"></div>
                            </>
                        )}

                        <div className="relative z-10 flex gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${isHighContrast ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm border border-white/20'}`}>File a documents</span>
                            </div>
                        </div>

                        <div className="relative z-10 max-w-[85%]">
                            <h3 className={`text-h3 mb-10 ${isHighContrast ? 'text-white' : 'text-white'}`}>
                                How to file a document.
                            </h3>
                            <button
                                onClick={handleFilingClick}
                                className={`mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-h6 font-bold transition-all group-btn ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white text-blue-700 hover:bg-zinc-50 shadow-xl hover:shadow-2xl hover:-translate-y-1'}`}
                            >
                                File Document Now
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Banner: Filing Skills */}
                    <div className={`relative p-8 sm:p-12 lg:p-14 rounded-3xl sm:rounded-[2.5rem] flex flex-col justify-between overflow-hidden border transition-all ${isHighContrast ? 'bg-zinc-950 border-white hover:bg-zinc-900 group' : 'bg-white border-zinc-100 shadow-premium hover:shadow-2xl group'}`}>
                        <div className="relative z-10 flex gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${isHighContrast ? 'bg-white text-black' : 'bg-blue-100 text-blue-700'}`}>Awards</span>
                            </div>
                        </div>

                        <div className="relative z-10 max-w-[85%]">
                            <h3 className={`text-h3 mb-10 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                Award Lists.
                            </h3>
                            <button
                                onClick={() => setCurrentView('awards')}
                                className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-h6 font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1'}`}
                            >
                                <FileDown className="w-5 h-5" />
                                Search Award Lists
                            </button>
                        </div>

                        {/* Decorative Graphic */}
                        {!isHighContrast && (
                            <div className="absolute right-0 bottom-0 pointer-events-none translate-x-4 translate-y-4">
                                <Asterisk className="w-32 h-32 text-blue-200 animate-[spin_10s_linear_infinite]" />
                                <div className="absolute bottom-4 right-10 w-24 h-24 bg-blue-600 rounded-[2rem] -rotate-12 flex items-center justify-center text-white shadow-2xl">
                                    <FileCheck className="w-10 h-10" />
                                </div>
                            </div>
                        )}
                        {isHighContrast && (
                            <div className="absolute right-6 bottom-6 pointer-events-none text-zinc-800">
                                <FileCheck className="w-24 h-24" />
                            </div>
                        )}
                    </div>



                </div>
            </div>
        </section>
    );
}
