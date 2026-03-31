"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { t } from '@/lib/i18n';
import { LogIn } from 'lucide-react';

export default function PortalStatsCTA() {
    const { lang, wcagStates, setCurrentView } = useAppStore();
    const router = useRouter();
    const isHighContrast = wcagStates.highContrast;
    const currentLang = t[lang];

    const stats = [
        { value: '12,540', label: currentLang.statsResolved, color: 'text-blue-400' },
        { value: '8,210', label: currentLang.statsHearings, color: 'text-blue-400' },
        { value: '92%', label: currentLang.statsSettlement, color: 'text-blue-400' },
        { value: currentLang.statsAvgTimeVal, label: currentLang.statsAvgTime, color: 'text-blue-400' },
    ];

    return (
        <section className={`flex flex-col ${isHighContrast ? 'bg-black' : ''}`}>

            {/* Upper Stats Banner - Dark Background */}
            <div className={`py-16 sm:py-24 ${isHighContrast ? 'bg-zinc-950 border-t border-b border-zinc-800' : 'bg-zinc-950'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center flex flex-col items-center justify-center">
                                <h4 className={`text-h1 tracking-tighter mb-4 ${isHighContrast ? 'text-white' : stat.color}`}>
                                    {stat.value}
                                </h4>
                                <p className={`text-body-lg font-bold tracking-wide ${isHighContrast ? 'text-zinc-400' : 'text-white'}`}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lower CTA Banner - Solid Blue Background */}
            <div className={`py-16 sm:py-20 text-center relative overflow-hidden ${isHighContrast ? 'bg-zinc-900 border-b border-zinc-800' : 'bg-blue-600'}`}>

                {/* Background Pattern */}
                {!isHighContrast && (
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                )}

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-h2 mb-6 ${isHighContrast ? 'text-white' : 'text-white'}`}>
                        {currentLang.ctaTitle}
                    </h2>
                    <p className={`text-body-lg mb-10 max-w-2xl mx-auto ${isHighContrast ? 'text-zinc-400' : 'text-blue-100'}`}>
                        {currentLang.ctaDesc}
                    </p>
                    <button
                        onClick={() => {
                            if (window.location.pathname !== '/') {
                                router.push('/#/login');
                            } else {
                                setCurrentView('login');
                            }
                        }}
                        className={`inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-black text-h6 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 ${isHighContrast ? 'bg-white text-black border-white hover:bg-zinc-200' : 'bg-white text-blue-900 border-zinc-100 hover:bg-zinc-50'}`}
                    >
                        <LogIn className="w-6 h-6" />
                        {currentLang.ctaLoginBtn}
                    </button>
                </div>
            </div>

        </section>
    );
}
