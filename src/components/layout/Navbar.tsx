"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Globe, Scale, LogIn, Menu, X } from 'lucide-react';

export default function Navbar() {
    const { lang, setLang, wcagStates, setCurrentView } = useAppStore();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <>
            {/* Top Gov Bar */}
            <div className={`text-xs py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 transition-colors ${isHighContrast ? 'bg-black border-b border-white text-white' : 'bg-zinc-950 text-zinc-400'}`}>
                <div className="font-medium tracking-wide uppercase text-[10px] sm:text-xs text-center sm:text-left">
                    {currentLang.govPortal}
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="flex items-center hover:text-white transition-colors font-semibold">
                        <Globe className="w-3.5 h-3.5 mr-1.5" />
                        {lang === 'en' ? 'Bahasa Melayu' : 'English'}
                    </button>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`relative z-40 transition-colors ${isHighContrast ? 'bg-black border-b border-white' : 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 sm:h-24">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${isHighContrast ? 'border-2 border-white text-white' : 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-900/20'}`}>
                                <Scale className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    {currentLang.portal}
                                </span>
                                {/* <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>
                                    eMP v2.0
                                </span> */}
                            </div>
                        </div>

                        <div className="hidden lg:flex items-center space-x-8">
                            {['home', 'about', 'modules', 'schedule', 'contact'].map((item) => (
                                <a key={item} href={`#${item}`} className={`text-sm font-semibold transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-500 hover:text-zinc-900'}`}>
                                    {currentLang[item]}
                                </a>
                            ))}
                            <div className={`pl-6 border-l h-8 flex items-center ${isHighContrast ? 'border-white' : 'border-zinc-200'}`}>
                                <button
                                    onClick={() => setCurrentView('login')}
                                    className={`flex items-center px-6 py-2.5 text-sm font-bold rounded-full transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 hover:bg-blue-600 text-white shadow-md hover:shadow-xl hover:shadow-blue-600/20'}`}
                                >
                                    <LogIn className="w-4 h-4 mr-2" />
                                    {currentLang.login}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center lg:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${isHighContrast ? 'text-white border border-white' : 'text-zinc-600 bg-zinc-100'}`}>
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className={`lg:hidden absolute top-full left-0 w-full z-50 border-t ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100 shadow-2xl'}`}>
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {['home', 'about', 'modules', 'schedule', 'contact'].map((item) => (
                                <a key={item} href={`#${item}`} onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-600 hover:bg-zinc-50 hover:text-blue-600'}`}>
                                    {currentLang[item]}
                                </a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-zinc-100">
                                <button
                                    onClick={() => { setMobileMenuOpen(false); setCurrentView('login'); }}
                                    className={`w-full flex justify-center items-center px-6 py-3 text-base font-bold rounded-xl transition-all ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white'}`}
                                >
                                    <LogIn className="w-5 h-5 mr-2" />
                                    {currentLang.login}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
