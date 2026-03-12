"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import {
    Scale, Globe, ArrowLeft, ShieldCheck, UserCircle,
    Video, ChevronRight, Mail, Lock, Briefcase, Key, ArrowUpRight, HelpCircle, Fingerprint
} from 'lucide-react';

export default function LoginSection() {
    const { lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView } = useAppStore();

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    return (
        <div className={`min-h-screen flex flex-col ${isHighContrast ? 'bg-black' : 'bg-zinc-950'}`}>

            {/* Minimal Login Header */}
            <header className={`h-20 sm:h-24 px-4 sm:px-8 flex justify-between items-center border-b ${isHighContrast ? 'border-white' : 'border-zinc-800'}`}>
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${isHighContrast ? 'border-2 border-white text-white' : 'bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg'}`}>
                        <Scale className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-1 text-white">
                            {currentLang.portal}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500">
                            {currentLang.loginGateway}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="hidden sm:flex items-center text-zinc-400 hover:text-white transition-colors text-sm font-semibold">
                        <Globe className="w-4 h-4 mr-1.5" />
                        {lang === 'en' ? 'BM' : 'EN'}
                    </button>
                    <button
                        onClick={() => { setCurrentView('portal'); setLoginRole(null); }}
                        className={`flex items-center px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-bold rounded-full transition-all ${isHighContrast ? 'border border-white text-white hover:bg-white hover:text-black' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">{currentLang.backToPortal}</span>
                        <span className="sm:hidden">Back</span>
                    </button>
                </div>
            </header>

            {/* Main Login Area */}
            <main className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
                {/* Ambient Background */}
                {!isHighContrast && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                    </div>
                )}

                <div className={`w-full max-w-2xl relative z-10 p-6 sm:p-10 rounded-[2rem] shadow-2xl transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-zinc-900/80 backdrop-blur-xl border border-zinc-800'}`}>

                    {!loginRole ? (
                        // STEP 1: SELECT ACCESS ROLE
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">{currentLang.selectAccess}</h2>
                                <p className="text-zinc-400 text-sm sm:text-base">{currentLang.selectAccessSub}</p>
                            </div>

                            <div className="space-y-4">
                                {/* Court Officer */}
                                <button
                                    onClick={() => setLoginRole('officer')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-blue-500/10 text-blue-400'}`}>
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">{currentLang.roleOfficer}</h3>
                                        <p className="text-sm text-zinc-400 leading-snug pr-4">{currentLang.roleOfficerDesc}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                                </button>

                                {/* eFiling User */}
                                <button
                                    onClick={() => setLoginRole('efiling')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-indigo-500/10 text-indigo-400'}`}>
                                        <UserCircle className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">{currentLang.roleEfiling}</h3>
                                        <p className="text-sm text-zinc-400 leading-snug pr-4">{currentLang.roleEfilingDesc}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                                </button>

                                {/* Guest Access */}
                                <button
                                    onClick={() => setLoginRole('guest')}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-blue-500'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                        <Video className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1">{currentLang.roleGuest}</h3>
                                        <p className="text-sm text-zinc-400 leading-snug pr-4">{currentLang.roleGuestDesc}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors flex-shrink-0" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        // STEP 2: SPECIFIC LOGIN FORMS
                        <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                            <button
                                onClick={() => setLoginRole(null)}
                                className="flex items-center text-sm font-semibold text-zinc-400 hover:text-white mb-8 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Roles
                            </button>

                            {/* Header based on Role */}
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-zinc-800">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isHighContrast ? 'border border-white text-white' : loginRole === 'officer' ? 'bg-blue-500/10 text-blue-400' : loginRole === 'efiling' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                                    {loginRole === 'officer' && <ShieldCheck className="w-6 h-6" />}
                                    {loginRole === 'efiling' && <UserCircle className="w-6 h-6" />}
                                    {loginRole === 'guest' && <Video className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-extrabold text-white">
                                        {loginRole === 'officer' ? currentLang.roleOfficer : loginRole === 'efiling' ? currentLang.roleEfiling : currentLang.roleGuest}
                                    </h2>
                                    <p className="text-sm text-zinc-400 mt-1">Secure authentication portal</p>
                                </div>
                            </div>

                            {/* FORMS */}
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                                {/* Court Officer & eFiling Common Fields */}
                                {(loginRole === 'officer' || loginRole === 'efiling') && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">{currentLang.userId}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-zinc-500" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white focus:ring-white' : 'bg-zinc-950 border border-zinc-700 focus:ring-blue-500 focus:border-transparent'}`}
                                                    placeholder="Enter your ID or email"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">{currentLang.password}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Lock className="h-5 w-5 text-zinc-500" />
                                                </div>
                                                <input
                                                    type="password"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white focus:ring-white' : 'bg-zinc-950 border border-zinc-700 focus:ring-blue-500 focus:border-transparent'}`}
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Guest Specific Fields */}
                                {loginRole === 'guest' && (
                                    <>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">{currentLang.caseRef}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Briefcase className="h-5 w-5 text-zinc-500" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white focus:ring-white' : 'bg-zinc-950 border border-zinc-700 focus:ring-blue-500 focus:border-transparent'}`}
                                                    placeholder="e.g. 1/1-1522/25"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-300 mb-2">{currentLang.accessCode}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Key className="h-5 w-5 text-zinc-500" />
                                                </div>
                                                <input
                                                    type="text"
                                                    className={`block w-full rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:ring-2 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white focus:ring-white' : 'bg-zinc-950 border border-zinc-700 focus:ring-blue-500 focus:border-transparent'}`}
                                                    placeholder="6-digit hearing PIN"
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Action Buttons */}
                                <div className="pt-4">
                                    <button className={`w-full flex justify-center items-center py-4 rounded-xl font-bold text-base transition-all ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50'}`}>
                                        {loginRole === 'guest' ? currentLang.joinHearing : currentLang.signIn}
                                        <ArrowUpRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>

                                {/* Extra Links for eFiling */}
                                {loginRole === 'efiling' && (
                                    <div className="pt-6 border-t border-zinc-800 flex flex-col items-center gap-4">
                                        <div className="w-full flex justify-between text-sm font-medium">
                                            <a href="#" className="text-zinc-400 hover:text-white transition-colors">{currentLang.forgotPwd}</a>
                                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">{currentLang.register}</a>
                                        </div>
                                        {/* Mock MyDigital ID Integration */}
                                        <div className="relative w-full flex items-center justify-center mt-2">
                                            <span className="absolute bg-zinc-900 px-4 text-xs font-bold uppercase tracking-widest text-zinc-500">OR</span>
                                            <div className="w-full border-t border-zinc-800"></div>
                                        </div>
                                        <button className={`w-full mt-2 flex justify-center items-center py-3.5 rounded-xl font-bold text-sm transition-all border ${isHighContrast ? 'border-white text-white hover:bg-zinc-900' : 'border-zinc-700 text-white hover:bg-zinc-800'}`}>
                                            <Fingerprint className="w-5 h-5 mr-2 text-emerald-500" />
                                            Log Masuk MyDigital ID
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                </div>

                {/* Help Floating Button */}
                <button className="absolute bottom-8 right-8 flex items-center text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    {currentLang.help}
                </button>
            </main>
        </div>
    );
}
