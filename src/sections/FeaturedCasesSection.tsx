"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { ChevronRight } from 'lucide-react';
import { t } from '@/lib/i18n';

export default function FeaturedCasesSection() {
    const { lang, wcagStates } = useAppStore();
    const isHighContrast = wcagStates.highContrast;
    const currentLang = t[lang];

    const industryTags = currentLang.industryTags || [];
    const featuredColumns = currentLang.featuredColumns || [];

    return (
        <section className={`pt-12 pb-8 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Industry Tags */}
                <div className="mb-20">
                    <h2 className={`text-h2 mb-5 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {currentLang.exploreCasesByIndustry}
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {industryTags.map((tag: any, idx: number) => (
                            <button
                                key={idx}
                                className={`flex items-center px-5 py-2 rounded-xl transition-all text-body-sm font-bold ${isHighContrast
                                    ? 'border border-white text-white bg-black hover:bg-white hover:text-black'
                                    : 'border border-blue-100 text-blue-600 bg-blue-50'
                                    }`}
                            >
                                {tag.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Focused Cases */}
                <div>
                    <h2 className={`text-h2 mb-8 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {currentLang.featuredCasesTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {featuredColumns.map((col: any, idx: number) => (
                            <div key={idx} className={`rounded-3xl sm:rounded-[2rem] ${isHighContrast ? 'bg-white' : 'bg-white'}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className={`text-ui-label font-bold uppercase tracking-widest ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {col.title}
                                    </h3>
                                    <ChevronRight className={`w-4 h-4 ${isHighContrast ? 'text-zinc-600' : 'text-zinc-400'}`} />
                                </div>

                                <div className="space-y-3">
                                    {col.cases.map((item: any, i: number) => (
                                        <div key={i} className={`p-4 rounded-2xl border transition-all hover:shadow-premium hover:-translate-y-1 cursor-pointer flex flex-col justify-center h-[120px] ${isHighContrast ? 'bg-black border-zinc-800 hover:border-white' : 'bg-white border-zinc-100 hover:border-blue-300'}`}>
                                            <div className={`text-[10px] font-bold mb-1 uppercase tracking-wider ${isHighContrast ? 'text-zinc-400' : 'text-blue-600'}`}>
                                                {item.id}
                                            </div>
                                            <h4 className={`text-body-sm font-bold leading-tight mb-1 line-clamp-2 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                {item.parties}
                                            </h4>
                                            <p className={`text-[11px] ${isHighContrast ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                                {item.type}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
