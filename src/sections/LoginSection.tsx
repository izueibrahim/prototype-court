"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import {
    Globe, ArrowLeft, ShieldCheck, UserCircle,
    Video, ChevronRight, Mail, Lock, Briefcase, Key, ArrowUpRight, HelpCircle, Fingerprint
} from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function LoginSection() {
    const router = useRouter();
    const { lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView } = useAppStore();

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <div className={`min-h-screen flex flex-col ${isHighContrast ? 'bg-black' : 'bg-zinc-50'}`}>

            {/* Login Header — matches portal Navbar style */}
            <header className={`h-20 sm:h-24 px-4 sm:px-8 flex justify-between items-center border-b ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-200 shadow-sm transition-colors'}`}>
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
                        <span className={`font-bold text-xs sm:text-sm tracking-wide leading-snug ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>
                            Industrial Court of Malaysia
                        </span>
                    </div>
                </button>
                <div className="flex items-center gap-4">
                    <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className={`hidden sm:flex items-center px-3 py-1.5 rounded-lg border text-sm font-bold transition-colors gap-1.5 ${isHighContrast ? 'border-white text-white' : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-blue-600'}`}>
                        <Globe className="w-4 h-4" />
                        {lang === 'en' ? 'BM' : 'EN'}
                    </button>
                    <button
                        onClick={() => { setCurrentView('portal'); setLoginRole(null); }}
                        className={isHighContrast ? 'btn-secondary border-white text-white bg-black' : 'btn-secondary'}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">{currentLang.backToPortal}</span>
                        <span className="sm:hidden">Back</span>
                    </button>
                </div>
            </header>

            {/* Main Login Area */}
            <main className="flex-1 flex items-center justify-center p-4 sm:p-8 relative">
                {/* Subtle background decoration */}
                {!isHighContrast && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[100px]"></div>
                    </div>
                )}

                <div className={`w-full max-w-2xl relative z-10 p-6 sm:p-10 rounded-3xl transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-zinc-200 shadow-premium-lg'}`}>

                    {!loginRole ? (
                        // STEP 1: SELECT ACCESS ROLE
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                            <div className="text-center mb-10">
                                <h2 className={`text-3xl sm:text-4xl font-black mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.selectAccess}</h2>
                                <p className={`text-sm sm:text-base font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.selectAccessSub}</p>
                            </div>

                            <div className="space-y-4">
                                {/* Court Officer */}
                                <button
                                    onClick={() => setLoginRole('officer')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-blue-400 hover:shadow-premium'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-blue-600 text-white shadow-inner'}`}>
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-black mb-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.roleOfficer}</h3>
                                        <p className={`text-sm leading-snug pr-4 font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.roleOfficerDesc}</p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isHighContrast ? 'text-white' : 'text-zinc-300 group-hover:text-blue-600'}`} />
                                </button>

                                {/* eFiling User */}
                                <button
                                    onClick={() => setLoginRole('efiling')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-indigo-400 hover:shadow-premium'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-indigo-600 text-white shadow-inner'}`}>
                                        <UserCircle className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-black mb-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.roleEfiling}</h3>
                                        <p className={`text-sm leading-snug pr-4 font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.roleEfilingDesc}</p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isHighContrast ? 'text-white' : 'text-zinc-300 group-hover:text-indigo-600'}`} />
                                </button>

                                {/* Guest Access */}
                                <button
                                    onClick={() => setLoginRole('guest')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-emerald-400 hover:shadow-premium'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-emerald-600 text-white shadow-inner'}`}>
                                        <Video className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-black mb-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.roleGuest}</h3>
                                        <p className={`text-sm leading-snug pr-4 font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.roleGuestDesc}</p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isHighContrast ? 'text-white' : 'text-zinc-300 group-hover:text-emerald-600'}`} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        // STEP 2: SPECIFIC LOGIN FORMS
                        <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                            <button
                                onClick={() => setLoginRole(null)}
                                className={`flex items-center text-sm font-bold mb-8 transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Roles
                            </button>

                            <div className={`flex items-center gap-4 mb-8 pb-8 border-b ${isHighContrast ? 'border-zinc-700' : 'border-zinc-100'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isHighContrast ? 'border border-white text-white' : 'bg-blue-600 text-white shadow-inner'}`}>
                                    {loginRole === 'officer' && <ShieldCheck className="w-6 h-6" />}
                                    {loginRole === 'efiling' && <UserCircle className="w-6 h-6" />}
                                    {loginRole === 'guest' && <Video className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                        {loginRole === 'officer' ? currentLang.roleOfficer : loginRole === 'efiling' ? currentLang.roleEfiling : currentLang.roleGuest}
                                    </h2>
                                    <p className={`text-sm mt-1 font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>Secure authentication portal</p>
                                </div>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                {(loginRole === 'officer' || loginRole === 'efiling') && (
                                    <>
                                        <div>
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.userId}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className={`h-5 w-5 ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 placeholder:text-zinc-400 font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-400 focus:ring-blue-500/10 shadow-sm'}`}
                                                    placeholder="Enter your ID or email"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.password}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Lock className={`h-5 w-5 ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`} />
                                                </div>
                                                <input
                                                    type="password"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 placeholder:text-zinc-400 font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-400 focus:ring-blue-500/10 shadow-sm'}`}
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {loginRole === 'guest' && (
                                    <>
                                        <div>
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.caseRef}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Briefcase className={`h-5 w-5 ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 placeholder:text-zinc-400 font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-400 focus:ring-blue-500/10 shadow-sm'}`}
                                                    placeholder="e.g. 1/1-1522/25"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.accessCode}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Key className={`h-5 w-5 ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`} />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 placeholder:text-zinc-400 font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-400 focus:ring-blue-500/10 shadow-sm'}`}
                                                    placeholder="6-digit hearing PIN"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="pt-2">
                                    <button 
                                        onClick={() => {
                                            if (loginRole === 'officer') router.push('/dashboard/internal');
                                            else if (loginRole === 'efiling') router.push('/dashboard/efiling');
                                            else if (loginRole === 'guest') router.push('/dashboard/guest');
                                        }}
                                        className={isHighContrast ? 'btn-primary w-full bg-white text-black' : 'btn-primary w-full'}>
                                        {loginRole === 'guest' ? currentLang.joinHearing : currentLang.signIn}
                                        <ArrowUpRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>

                                {loginRole === 'efiling' && (
                                    <div className={`pt-4 border-t flex flex-col items-center gap-4 ${isHighContrast ? 'border-zinc-700' : 'border-zinc-100'}`}>
                                        <div className="w-full flex justify-between text-sm font-bold">
                                            <a href="#" className={`transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-zinc-700'}`}>{currentLang.forgotPwd}</a>
                                            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">{currentLang.register}</a>
                                        </div>
                                        <div className="relative w-full flex items-center justify-center mt-2">
                                            <span className={`absolute px-4 text-xs font-black uppercase tracking-widest ${isHighContrast ? 'bg-black text-zinc-600' : 'bg-white text-zinc-400'}`}>OR</span>
                                            <div className={`w-full border-t ${isHighContrast ? 'border-zinc-700' : 'border-zinc-200'}`}></div>
                                        </div>
                                        <button 
                                            onClick={() => router.push('/dashboard/efiling')}
                                            className={isHighContrast ? 'btn-secondary w-full border-white text-white bg-black' : 'btn-secondary w-full'}>
                                            <Fingerprint className="w-5 h-5 text-emerald-600" />
                                            Log Masuk MyDigital ID
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                </div>

                <button className={`absolute bottom-8 right-8 flex items-center text-sm font-bold transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}>
                    <HelpCircle className="w-5 h-5 mr-2" />
                    {currentLang.help}
                </button>
            </main>
        </div>
    );
}
