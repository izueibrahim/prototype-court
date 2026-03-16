"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { Globe, LogIn, Menu, X } from 'lucide-react';

export default function Navbar() {
    const { lang, setLang, wcagStates, setCurrentView } = useAppStore();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <>


            {/* Main Navigation */}
            <nav className={`relative z-40 transition-colors ${isHighContrast ? 'bg-black border-b border-white' : 'bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 sm:h-24">
                        <button 
                            onClick={() => setCurrentView('portal')}
                            className="flex items-center gap-3 sm:gap-4 text-left outline-none hover:opacity-80 transition-opacity"
                        >
                            <img
                                src="/jata-negara.png"
                                alt="Jata Negara"
                                className="h-12 sm:h-14 w-auto object-contain"
                            />
                            <div className="flex flex-col justify-center">
                                <span className={`font-extrabold text-base sm:text-lg tracking-tight leading-snug ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    Mahkamah Perusahaan Malaysia
                                </span>
                                <div className={`my-0.5 h-px w-full ${isHighContrast ? 'bg-white/40' : 'bg-zinc-200'}`} />
                                <span className={`font-semibold text-xs sm:text-sm tracking-wide leading-snug ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>
                                    Industrial Court of Malaysia
                                </span>
                            </div>
                        </button>

                        <div className="hidden lg:flex items-center space-x-8">
                            {['home', 'about', 'modules', 'schedule', 'contact'].map((item) => (
                                <a 
                                    key={item} 
                                    href={item === 'schedule' ? undefined : `#${item}`}
                                    onClick={(e) => {
                                        if (item === 'schedule') {
                                            e.preventDefault();
                                            setCurrentView('schedule');
                                        } else if (item === 'about' || item === 'contact' || item === 'modules') {
                                            e.preventDefault();
                                            setCurrentView(item);
                                        } else {
                                            setCurrentView('portal');
                                        }
                                    }}
                                    className={`text-sm font-bold transition-colors cursor-pointer ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-500 hover:text-blue-600'}`}
                                >
                                    {currentLang[item]}
                                </a>
                            ))}
                            <div className="flex items-center gap-6 mr-6">
                                <button 
                                    onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} 
                                    className={`flex items-center text-sm font-bold transition-colors px-3 py-1.5 rounded-lg border ${isHighContrast ? 'border-white text-white' : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-blue-600'}`}
                                >
                                    <Globe className="w-4 h-4 mr-2" />
                                    {lang === 'en' ? 'BM' : 'EN'}
                                </button>
                            </div>
                            <div className={`pl-6 border-l h-8 flex items-center ${isHighContrast ? 'border-white' : 'border-zinc-200'}`}>
                                <button
                                    onClick={() => setCurrentView('login')}
                                    className={isHighContrast ? 'btn-primary bg-white text-black hover:bg-zinc-200' : 'btn-primary bg-blue-700 shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/20'}
                                >
                                    <LogIn className="w-4 h-4" />
                                    {currentLang.login}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center lg:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isHighContrast ? 'p-2 rounded-lg text-white border border-white' : 'btn-ghost bg-zinc-100'}>
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
                                <a 
                                    key={item} 
                                    href={item === 'schedule' ? undefined : `#${item}`}
                                    onClick={(e) => {
                                        setMobileMenuOpen(false);
                                        if (item === 'schedule') {
                                            e.preventDefault();
                                            setCurrentView('schedule');
                                        } else if (item === 'about' || item === 'contact' || item === 'modules') {
                                            e.preventDefault();
                                            setCurrentView(item);
                                        } else {
                                            setCurrentView('portal');
                                        }
                                    }}
                                    className={`text-base font-bold px-4 py-3 rounded-xl cursor-pointer ${isHighContrast ? 'text-white hover:bg-zinc-900 border border-transparent hover:border-white' : 'text-zinc-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                >
                                    {currentLang[item]}
                                </a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-zinc-100">
                                <button
                                    onClick={() => { setMobileMenuOpen(false); setCurrentView('login'); }}
                                    className={isHighContrast ? 'btn-primary w-full bg-white text-black' : 'btn-primary w-full'}
                                >
                                    <LogIn className="w-5 h-5" />
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
