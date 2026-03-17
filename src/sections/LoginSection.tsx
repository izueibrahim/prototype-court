"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import {
    Globe, ArrowLeft, ShieldCheck, UserCircle,
    Video, ChevronRight, Mail, Lock, Briefcase, Key, ArrowUpRight, HelpCircle, Fingerprint,
    Scale, Gavel, Settings, CheckCircle2
} from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function LoginSection() {
    const router = useRouter();
    const { lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView, setDashActiveView, setEFilingActiveView } = useAppStore();
    const [demoRole, setDemoRole] = React.useState<'ydp' | 'chairman' | 'registrar' | 'admin' | 'officer' | 'ca_unit' | 'efiling' | 'guest'>('officer');
    const [showMFA, setShowMFA] = React.useState(false);
    const [otp, setOtp] = React.useState(['', '', '', '', '', '']);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // MFA Simulation for Admin/YDP/Chairman
        if (!showMFA && ['admin', 'ydp', 'chairman'].includes(demoRole)) {
            setShowMFA(true);
            return;
        }

        setLoginRole(demoRole);
        if (['ydp', 'registrar', 'officer', 'chairman', 'ca_unit', 'admin'].includes(demoRole)) {
            setCurrentView('dashboard-internal');
            if (demoRole === 'chairman') setDashActiveView('chairman');
            else if (demoRole === 'admin') setDashActiveView('integration');
            else if (demoRole === 'ca_unit') setDashActiveView('collective');
            else setDashActiveView('overview');
        }
        else if (demoRole === 'efiling') {
            setCurrentView('dashboard-efiling');
            setEFilingActiveView('cases');
        }
        else if (demoRole === 'guest') setCurrentView('dashboard-guest');
    };

    return (
        <div className={`min-h-screen flex flex-col ${isHighContrast ? 'bg-black' : 'bg-zinc-50'}`}>

            {/* Login Header — standardized to match portal Navbar style */}
            <header className={`relative z-40 h-20 sm:h-24 border-b transition-colors ${isHighContrast ? 'bg-black border-white' : 'bg-white/70 backdrop-blur-xl border-zinc-200/50 shadow-sm'}`}>
                <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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
                    <div className="flex items-center gap-4">
                        <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className={`hidden sm:flex items-center px-3 py-1.5 rounded-lg border text-sm font-bold transition-colors gap-1.5 ${isHighContrast ? 'border-white text-white' : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-blue-600'}`}>
                            <Globe className="w-4 h-4" />
                            {lang === 'en' ? 'BM' : 'EN'}
                        </button>
                        <button
                            onClick={() => { setCurrentView('portal'); setLoginRole(null); }}
                            className={isHighContrast ? 'px-4 py-2 rounded-xl text-sm font-bold border border-white text-white bg-black' : 'px-4 py-2 rounded-xl text-sm font-bold bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 shadow-sm'}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 inline" />
                            <span className="hidden sm:inline">{currentLang.backToPortal}</span>
                            <span className="sm:hidden">Back</span>
                        </button>
                    </div>
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

                <div className={`w-full max-w-2xl relative z-10 p-6 sm:p-10 rounded-3xl transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-zinc-200 shadow-xl'}`}>

                    {!loginRole ? (
                        // STEP 1: SELECT ACCESS ROLE
                        <div className="animate-in fade-in zoom-in-95 duration-300">
                            <div className="text-center mb-10">
                                <h2 className={`text-3xl sm:text-4xl font-black mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.selectAccess}</h2>
                                <p className={`text-sm sm:text-base font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.selectAccessSub}</p>
                            </div>

                            <div className="space-y-4">
                                {/* Internal Users Dropdown simulation with buttons */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <button onClick={() => { setDemoRole('ydp'); setLoginRole('officer'); }} className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${isHighContrast ? 'border-white text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white shadow-sm'}`}>
                                        <ShieldCheck className="w-8 h-8 mb-2 text-blue-600" />
                                        <span className="text-sm font-bold">YDP / Executive</span>
                                    </button>
                                    <button onClick={() => { setDemoRole('chairman'); setLoginRole('officer'); }} className={`p-4 rounded-xl border flex flex-col items-center justify-center transition-all ${isHighContrast ? 'border-white text-white' : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white shadow-sm'}`}>
                                        <Gavel className="w-8 h-8 mb-2 text-blue-600" />
                                        <span className="text-sm font-bold">Chairman (Judge)</span>
                                    </button>
                                </div>

                                {/* Pentadbir Sistem (Admin) */}
                                <button
                                    onClick={() => { setDemoRole('admin'); setLoginRole('officer'); }}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group mb-4 ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-amber-400 shadow-sm'}`}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-amber-600 text-white shadow-inner'}`}>
                                        <Settings className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-black mb-1 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.roleAdmin}</h3>
                                        <p className={`text-sm leading-snug pr-4 font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.roleAdminDesc}</p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${isHighContrast ? 'text-white' : 'text-zinc-300 group-hover:text-amber-600'}`} />
                                </button>

                                {/* eFiling User */}
                                <button
                                    onClick={() => { setDemoRole('efiling'); setLoginRole('efiling'); }}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-indigo-400 shadow-sm'}`}
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
                                    onClick={() => { setDemoRole('guest'); setLoginRole('guest'); }}
                                    className={`w-full flex items-center p-5 sm:p-6 rounded-2xl border text-left transition-all group ${isHighContrast ? 'border-white hover:bg-zinc-900' : 'border-zinc-200 bg-zinc-50 hover:bg-white hover:border-emerald-400 shadow-sm'}`}
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
                                    {loginRole === 'officer' && (demoRole === 'admin' ? <Settings className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />)}
                                    {loginRole === 'efiling' && <UserCircle className="w-6 h-6" />}
                                    {loginRole === 'guest' && <Video className="w-6 h-6" />}
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                        {loginRole === 'officer' ? (demoRole === 'ydp' ? 'YDP / Executive' : demoRole === 'chairman' ? 'Chairman (Judge)' : demoRole === 'admin' ? currentLang.roleAdmin : currentLang.roleOfficer) : loginRole === 'efiling' ? currentLang.roleEfiling : currentLang.roleGuest}
                                    </h2>
                                    <p className={`text-sm mt-1 font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>Secure authentication portal</p>
                                </div>
                            </div>

                            {showMFA ? (
                                <form className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" onSubmit={handleLoginSubmit}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                            <ShieldCheck className="w-8 h-8" />
                                        </div>
                                        <h3 className={`text-xl font-black mb-2 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.mfaTitle}</h3>
                                        <p className={`text-sm font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>{currentLang.mfaSub}</p>
                                    </div>

                                    <div className="flex justify-between gap-2 sm:gap-4">
                                        {otp.map((digit, idx) => (
                                            <input
                                                key={idx}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) => {
                                                    const newOtp = [...otp];
                                                    newOtp[idx] = e.target.value;
                                                    setOtp(newOtp);
                                                    if (e.target.value && idx < 5) {
                                                        const nextInput = e.target.nextElementSibling as HTMLInputElement;
                                                        if (nextInput) nextInput.focus();
                                                    }
                                                }}
                                                className={`w-10 h-14 sm:w-14 sm:h-16 text-center text-xl font-black rounded-xl border-2 transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none'}`}
                                            />
                                        ))}
                                    </div>

                                    <button 
                                        type="submit"
                                        className={isHighContrast ? 'w-full py-4 rounded-xl text-lg font-bold bg-white text-black' : 'w-full py-4 rounded-xl text-lg font-bold bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all active:scale-[0.98]'}>
                                        {currentLang.verify}
                                        <ArrowUpRight className="w-5 h-5 ml-2 inline" />
                                    </button>

                                    <button 
                                        type="button"
                                        onClick={() => setShowMFA(false)}
                                        className={`w-full text-sm font-bold transition-colors ${isHighContrast ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
                                    >
                                        Cancel & Back
                                    </button>
                                </form>
                            ) : (
                                <form className="space-y-6" onSubmit={handleLoginSubmit}>
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
                                                        defaultValue={demoRole === 'admin' ? 'admin_icourt@mpm.gov.my' : ''}
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
                                                        defaultValue={demoRole === 'admin' ? '••••••••' : ''}
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
                                            type="submit"
                                            className={isHighContrast ? 'w-full py-4 rounded-xl text-lg font-bold bg-white text-black' : 'w-full py-4 rounded-xl text-lg font-bold bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all'}>
                                            {loginRole === 'guest' ? currentLang.joinHearing : currentLang.signIn}
                                            <ArrowUpRight className="w-5 h-5 ml-2 inline" />
                                        </button>
                                    </div>

                                    {(loginRole === 'efiling' || loginRole === 'officer') && (
                                        <div className={`pt-4 border-t flex flex-col items-center gap-4 ${isHighContrast ? 'border-zinc-700' : 'border-zinc-100'}`}>
                                            {loginRole === 'efiling' && (
                                                <div className="w-full flex justify-between text-sm font-bold">
                                                    <a href="#" className={`transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-zinc-700'}`}>{currentLang.forgotPwd}</a>
                                                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">{currentLang.register}</a>
                                                </div>
                                            )}
                                            <div className="relative w-full flex items-center justify-center mt-2">
                                                <span className={`absolute px-4 text-xs font-black uppercase tracking-widest ${isHighContrast ? 'bg-black text-zinc-600' : 'bg-white text-zinc-400'}`}>OR</span>
                                                <div className={`w-full border-t ${isHighContrast ? 'border-zinc-700' : 'border-zinc-200'}`}></div>
                                            </div>
                                            <button 
                                                type="button"
                                                onClick={handleLoginSubmit}
                                                className={isHighContrast ? 'w-full py-3 rounded-xl border border-white text-white bg-black font-bold flex items-center justify-center gap-2' : 'w-full py-3 rounded-xl border border-zinc-200 bg-white text-zinc-800 font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 shadow-sm'}>
                                                <Fingerprint className="w-5 h-5 text-emerald-600" />
                                                Log Masuk MyDigital ID
                                            </button>
                                        </div>
                                    )}
                                </form>
                            )}
                        </div>
                    )}
                </div>

                <button className={`absolute bottom-8 right-8 flex items-center text-sm font-bold transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}>
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Help
                </button>
            </main>
        </div>
    );
}
