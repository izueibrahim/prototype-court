"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { MapPin, Phone, Mail, ChevronRight, Shield, ShieldAlert, FileWarning } from 'lucide-react';

export default function Footer() {
    const { lang, wcagStates, setCurrentView } = useAppStore();
    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <footer className={`${isHighContrast ? 'bg-black border-t-2 border-white' : 'bg-zinc-50 border-t border-zinc-200 text-zinc-600'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    <div className="lg:col-span-5 pr-0 lg:pr-8">
                        <button 
                            onClick={() => setCurrentView('portal')}
                            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-left outline-none hover:opacity-80 transition-opacity"
                        >
                            <img
                                src="/jata-negara.png"
                                alt="Jata Negara"
                                className={`h-14 sm:h-16 w-auto object-contain ${isHighContrast ? 'brightness-0 invert' : ''}`}
                            />
                            <div>
                                <h3 className={`text-base sm:text-lg font-extrabold leading-snug ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    Mahkamah Perusahaan Malaysia
                                </h3>
                                <div className={`my-0.5 h-px w-full ${isHighContrast ? 'bg-white/30' : 'bg-zinc-200'}`} />
                                <p className={`text-xs sm:text-sm font-semibold tracking-wide ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>
                                    Industrial Court of Malaysia
                                </p>
                            </div>
                        </button>
                        <p className={`text-sm sm:text-base leading-relaxed mb-8 font-medium ${isHighContrast ? 'text-white' : 'text-zinc-600'}`}>
                            {currentLang.footerDesc}
                        </p>
                        <ul className="space-y-4 sm:space-y-5 text-sm font-bold">
                            <li className="flex items-start group">
                                <MapPin className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-400 group-hover:text-blue-600'}`} />
                                <span className={`${isHighContrast ? 'text-white' : 'text-zinc-700'}`}>Mahkamah Perusahaan Malaysia,<br />Wisma Perkeso, Jalan Tun Razak,<br />50400 Kuala Lumpur, Malaysia</span>
                            </li>
                            <li className="flex items-center group cursor-pointer">
                                <Phone className={`w-5 h-5 mr-3 flex-shrink-0 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-400 group-hover:text-blue-600'}`} />
                                <span className={`transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-700 group-hover:text-blue-600'}`}>+603-9236 5056</span>
                            </li>
                            <li className="flex items-center group cursor-pointer">
                                <Mail className={`w-5 h-5 mr-3 flex-shrink-0 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-400 group-hover:text-blue-600'}`} />
                                <span className={`transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-700 group-hover:text-blue-600'}`}>eicsupport@mohr.gov.my</span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-7">
                        <h4 className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.quickLinksTitle}</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm font-bold">
                            {currentLang.quickLinks.slice(0, 5).map((link: any, idx: number) => (
                                <li key={idx}>
                                    <a href="#" className={`flex items-center group transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-600 hover:text-blue-600'}`}>
                                        <ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        {link.title.replace('\n', ' ')}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.resourcesTitle}</h4>
                        <ul className="space-y-3 sm:space-y-4 text-sm font-bold">
                            <li><a href="#" className={`flex items-center group transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-600 hover:text-blue-600'}`}><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> Industrial Relations Dept</a></li>
                            <li><a href="#" className={`flex items-center group transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-600 hover:text-blue-600'}`}><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> Labour Department</a></li>
                            <li><a href="#" className={`flex items-center group transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-600 hover:text-blue-600'}`}><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> eMP User Manuals</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className={`border-t ${isHighContrast ? 'border-white' : 'border-zinc-200'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 text-center lg:text-left">
                    <p className={`text-xs sm:text-sm font-bold ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                        &copy; 2026 {currentLang.rights}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold">
                        <a href="#" className={`flex items-center transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-500 hover:text-blue-600'}`}><Shield className="w-4 h-4 mr-1.5 opacity-60" /> Privacy</a>
                        <a href="#" className={`flex items-center transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-500 hover:text-blue-600'}`}><ShieldAlert className="w-4 h-4 mr-1.5 opacity-60" /> Security</a>
                        <a href="#" className={`flex items-center transition-colors ${isHighContrast ? 'text-white hover:underline' : 'text-zinc-500 hover:text-blue-600'}`}><FileWarning className="w-4 h-4 mr-1.5 opacity-60" /> Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
