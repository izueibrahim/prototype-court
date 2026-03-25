"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { Percent } from 'lucide-react';

export default function MediationBanner() {
    const { wcagStates } = useAppStore();
    const isHighContrast = wcagStates.highContrast;

    return (
        <section className={`py-12 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`relative overflow-hidden rounded-[2.5rem] shadow-premium ${isHighContrast ? 'bg-zinc-900 border border-zinc-800' : 'bg-blue-900 text-white'}`}>

                    {/* Background decorations for normal mode */}
                    {!isHighContrast && (
                        <>
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
                        </>
                    )}

                    <div className="relative p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-3xl">
                            <h2 className={`text-h1 mb-6 text-white`}>
                                75% Kes berjaya diselesaikan melalui Pengantaraan
                            </h2>
                            <p className={`text-body-lg mb-10 max-w-2xl text-blue-100`}>
                                Selesaikan kes yang melibatkan kesatuan sekerja tanpa prosedur perbicaraan makhamah yang memakan masa dan kos yang tinggi.
                            </p>
                            <button className={`px-8 py-4 rounded-xl text-h6 font-bold transition-all w-full sm:w-auto shadow-lg hover:-translate-y-1 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-white text-blue-900 hover:bg-zinc-50'}`}>
                                Selesaikan Kes Sekarang
                            </button>
                        </div>

                        <div className="shrink-0 relative">
                            {/* Circular progress representation */}
                            <div className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full flex items-center justify-center relative ${isHighContrast ? 'bg-black border-8 border-white' : 'bg-blue-900/50 backdrop-blur-md shadow-2xl'}`}>
                                {/* Ring gradient overlay */}
                                {!isHighContrast && (
                                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                                        <circle
                                            cx="50%"
                                            cy="50%"
                                            r="45%"
                                            fill="none"
                                            stroke="url(#ringGradient)"
                                            strokeWidth="20"
                                            strokeDasharray="100 100" // This is just an approximation for styling
                                            className="opacity-100 text-blue-400"
                                            style={{ strokeDashoffset: '25' }} // 75%
                                        />
                                        <defs>
                                            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#60A5FA" />
                                                <stop offset="100%" stopColor="#3B82F6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                )}

                                <div className="text-center z-10 flex flex-col items-center justify-center">
                                    <span className={`text-5xl sm:text-6xl font-black tracking-tighter ${isHighContrast ? 'text-white' : 'text-white'}`}>
                                        75%
                                    </span>
                                </div>

                                {/* Outer decorative rings */}
                                {!isHighContrast && (
                                    <>
                                        <div className="absolute inset-[-1.5rem] rounded-full border border-blue-400/30"></div>
                                        <div className="absolute inset-[-3rem] rounded-full border border-blue-400/10"></div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
