"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import {
    Globe, ArrowLeft, ShieldCheck, UserCircle,
    Video, ChevronRight, Mail, Lock, Briefcase, Key, ArrowUpRight, HelpCircle,
    Scale, Gavel, Settings, CheckCircle2, AlertCircle
} from 'lucide-react';

import { useRouter } from 'next/navigation';

export default function LoginSection() {
    const router = useRouter();
    const { lang, setLang, wcagStates, loginRole, setLoginRole, setCurrentView, setDashActiveView, setEFilingActiveView, toggleOnboarding } = useAppStore();
    const [step, setStep] = React.useState<1 | 2>(1);
    const [demoRole, setDemoRole] = React.useState<'ydp' | 'chairman' | 'registrar' | 'admin' | 'officer' | 'ca_unit' | 'efiling' | 'guest'>('ydp');
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
        <div className={`min-h-screen flex flex-col lg:flex-row ${isHighContrast ? 'bg-black' : 'bg-zinc-50'}`}>

            {/* LEFT COLUMN: Login Controls & Form */}
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen relative z-10">
                {/* Simplified Left Nav */}
                <header className="h-20 sm:h-24 px-6 sm:px-10 flex items-center justify-between">
                    <button
                        onClick={() => setCurrentView('portal')}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img src="/jata-negara.png" alt="Logo" className="h-10 w-auto" />
                        <span className={`text-h6 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                            Mahkamah Perusahaan
                        </span>
                    </button>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className={`flex items-center px-2 py-1.5 rounded-lg border text-ui-label transition-colors gap-1 ${isHighContrast ? 'border-white text-white' : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}>
                            <Globe className="w-3.5 h-3.5" />
                            {lang === 'en' ? 'BM' : 'EN'}
                        </button>
                    </div>
                </header>

                <main className="flex-1 flex items-center justify-center px-6 sm:px-12 lg:px-20 py-12">
                    <div className="w-full max-w-md">
                        {step === 1 ? (
                            // STEP 1: SELECT ACCESS ROLE
                            <div className="animate-in fade-in zoom-in-95 duration-300">
                                <button onClick={() => setCurrentView('portal')} className={`flex items-center text-body-sm font-bold mb-8 transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}>
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Portal
                                </button>
                                <div className="mb-10">
                                    <h2 className={`text-h2 mb-3 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.loginWelcome}</h2>
                                    <p className={`text-body-md font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.selectAccessSub}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="relative">
                                        <label className={`block text-ui-label mb-3 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>Select Your Role</label>
                                        <div className="relative group">
                                            <select
                                                id="tour-role-select"
                                                value={demoRole}
                                                onChange={(e) => setDemoRole(e.target.value as any)}
                                                className={`w-full appearance-none bg-white py-5 px-6 rounded-2xl border-2 text-h6 transition-all cursor-pointer focus:outline-none focus:ring-4 ${isHighContrast ? 'bg-black border-white text-white focus:ring-white/20' : 'border-zinc-100 text-zinc-900 focus:border-blue-500 focus:ring-blue-500/10 hover:border-zinc-200'}`}
                                            >
                                                <option value="ydp">YDP / Executive</option>
                                                <option value="chairman">Chairman</option>
                                                <option value="admin">System Admin</option>
                                                <option value="efiling">{currentLang.roleEfiling}</option>
                                                <option value="guest">{currentLang.roleGuest}</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none text-zinc-400 group-hover:text-blue-600 transition-colors">
                                                <ChevronRight className="w-5 h-5 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                            <button
                                                id="tour-next-btn"
                                                onClick={() => setStep(2)}
                                                className={isHighContrast ? 'w-full py-5 rounded-2xl text-h5 bg-white text-black flex items-center justify-center gap-3 transition-transform active:scale-[0.98]' : 'w-full py-5 rounded-2xl text-h5 bg-blue-600 text-white shadow-xl shadow-blue-500/20 hover:bg-blue-700 flex items-center justify-center gap-3 transition-all active:scale-[0.98]'}
                                            >
                                                Next Step
                                                <ArrowUpRight className="w-6 h-6" />
                                            </button>
                                    </div>

                                </div>
                            </div>
                        ) : (
                            // STEP 2: SPECIFIC LOGIN FORMS
                            <div className="animate-in slide-in-from-right-8 fade-in duration-300">
                                <button
                                    onClick={() => { setStep(1); setShowMFA(false); }}
                                    className={`flex items-center text-body-sm font-bold mb-8 transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Roles
                                </button>

                                <div className="mb-10">
                                    <h2 className={`text-h2 mb-2 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                        {demoRole === 'ydp' ? 'YDP / Executive' : demoRole === 'chairman' ? 'Chairman' : demoRole === 'admin' ? currentLang.roleAdmin : demoRole === 'efiling' ? currentLang.roleEfiling : demoRole === 'guest' ? currentLang.roleGuest : currentLang.roleOfficer}
                                    </h2>
                                    <p className={`text-body-md font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>Enter your credentials to continue</p>
                                </div>

                                {showMFA ? (
                                    <form className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500" onSubmit={handleLoginSubmit}>
                                        <div className="flex items-start gap-3 bg-[#18181b] text-zinc-200 p-4 rounded-xl text-sm font-medium border border-zinc-800 shadow-sm">
                                            <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 fill-blue-500/20" />
                                            <span>
                                                Enter any <strong className="text-white">6-digit code</strong> (e.g. <strong className="text-white">123456</strong>) for demo access.
                                            </span>
                                        </div>
                                        <div className="flex justify-between gap-2">
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
                                                            const nextInput = (e.target as any).nextElementSibling as HTMLInputElement;
                                                            if (nextInput) nextInput.focus();
                                                        }
                                                    }}
                                                    className={`w-full h-14 text-center text-xl font-black rounded-xl border-2 transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none'}`}
                                                />
                                            ))}
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className={isHighContrast ? 'w-full py-4 rounded-xl text-h6 font-bold bg-white text-black' : 'w-full py-4 rounded-xl text-h6 font-bold bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all active:scale-[0.98]'}>
                                                {currentLang.verify}
                                                <ArrowUpRight className="w-5 h-5 ml-2 inline" />
                                            </button>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setShowMFA(false)}
                                            className={`w-full mt-4 text-body-sm font-bold transition-colors ${isHighContrast ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
                                        >
                                            Cancel & Back
                                        </button>
                                    </form>
                                ) : (
                                    <form id="tour-login-form" className="space-y-6" onSubmit={handleLoginSubmit}>
                                        {demoRole !== 'guest' && (
                                            <div className="flex items-start gap-3 bg-[#18181b] text-zinc-200 p-4 rounded-xl text-sm font-medium border border-zinc-800 shadow-sm">
                                                <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 fill-blue-500/20" />
                                                <span>
                                                    Use <strong className="text-white">demo@kt.com</strong> username and <strong className="text-white">demo123</strong> for demo access.
                                                </span>
                                            </div>
                                        )}
                                        {demoRole !== 'guest' && (
                                            <>
                                                <div>
                                                    <label className={`block text-ui-label mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.userId}</label>
                                                    <input
                                                        type="text"
                                                        defaultValue={demoRole === 'admin' ? 'admin_icourt@mpm.gov.my' : ''}
                                                        className={`block w-full rounded-xl py-4 px-4 text-body-md font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500/10 shadow-sm'}`}
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className={`block text-ui-label mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.password}</label>
                                                    <input
                                                        type="password"
                                                        defaultValue={demoRole === 'admin' ? '••••••••' : ''}
                                                        className={`block w-full rounded-xl py-4 px-4 text-body-md font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500/10 shadow-sm'}`}
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        {demoRole === 'guest' && (
                                            <>
                                                <div>
                                                    <label className={`block text-ui-label mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.caseRef}</label>
                                                    <input
                                                        type="text"
                                                        className={`block w-full rounded-xl py-4 px-4 text-body-md font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500/10 shadow-sm'}`}
                                                        placeholder="e.g. 1/1-1522/25"
                                                    />
                                                </div>
                                                <div>
                                                    <label className={`block text-ui-label mb-2 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.accessCode}</label>
                                                    <input
                                                        type="text"
                                                        className={`block w-full rounded-xl py-4 px-4 text-body-md font-bold focus:ring-4 focus:outline-none transition-all ${isHighContrast ? 'bg-black border-2 border-white text-white focus:ring-white/50' : 'bg-zinc-50 border border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-blue-500/10 shadow-sm'}`}
                                                        placeholder="6-digit PIN"
                                                    />
                                                </div>
                                            </>
                                        )}

                                        <div className="flex items-center justify-between py-2">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500" />
                                                <span className={`text-body-sm font-bold ${isHighContrast ? 'text-white' : 'text-zinc-600'}`}>Remember me</span>
                                            </label>
                                            <a href="#" className="text-body-sm font-bold text-blue-600 hover:text-blue-700">{currentLang.forgotPwd}</a>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className={isHighContrast ? 'w-full py-4 rounded-xl text-h6 font-bold bg-white text-black' : 'w-full py-4 rounded-xl text-h6 font-bold bg-blue-600 text-white shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-all active:scale-[0.98]'}>
                                                {demoRole === 'guest' ? currentLang.joinHearing : currentLang.signIn}
                                                <ArrowUpRight className="w-5 h-5 ml-2 inline" />
                                            </button>
                                        </div>

                                         {demoRole !== 'guest' && (
                                            <div className="pt-6">
                                                <div className="relative flex items-center justify-center mb-6">
                                                    <div className={`w-full border-t ${isHighContrast ? 'border-zinc-700' : 'border-zinc-200'}`}></div>
                                                    <span className={`absolute px-4 text-ui-label ${isHighContrast ? 'bg-black text-zinc-600' : 'bg-white text-zinc-400'}`}>OR</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={handleLoginSubmit}
                                                    className={isHighContrast ? 'w-full py-4 rounded-xl border border-white text-white bg-black text-body-md font-bold flex items-center justify-center gap-3 transition-transform active:scale-[0.98]' : 'w-full py-4 rounded-xl border border-zinc-200 bg-white text-zinc-800 text-body-md font-bold flex items-center justify-center gap-3 hover:bg-zinc-50 shadow-sm transition-transform active:scale-[0.98]'}>
                                                    <img src="/mydigitalidlogo.png" alt="MyDigital ID" className="w-6 h-6 object-contain" />
                                                    Log Masuk MyDigital ID
                                                </button>
                                            </div>
                                        )}

                                        <p className="text-center pt-4 text-body-sm font-bold">
                                            <span className={isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}>Don't have an account? </span>
                                            <a href="#" className="text-blue-600 hover:underline">Sign up</a>
                                        </p>
                                    </form>
                                )}
                            </div>
                        )}
                    </div>
                </main>

                <footer className="h-20 px-10 flex items-center justify-between">
                    <button onClick={() => toggleOnboarding(true)} className={`flex items-center text-ui-label transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}>
                        <HelpCircle className="w-4 h-4 mr-2" />
                        {currentLang.help}
                    </button>
                    <span className={`text-[10px] font-bold uppercase tracking-tight ${isHighContrast ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        © 2026 Mahkamah Perusahaan Malaysia
                    </span>
                </footer>
            </div>

            {/* RIGHT COLUMN: Branding & Info (Hidden on mobile) */}
            <div className={`hidden lg:flex w-1/2 relative flex-col justify-center px-16 xl:px-24 overflow-hidden ${isHighContrast ? 'bg-zinc-900 border-l border-white' : 'bg-blue-600'}`}>
                {/* Background Decoration */}
                {!isHighContrast && (
                    <>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                        <div className="absolute bottom-48 -left-24 w-64 h-64 bg-indigo-400 rounded-full blur-[100px] opacity-10"></div>
                    </>
                )}

                <div className="relative z-10">
                    <div className="mb-12 flex items-center gap-4">
                    </div>

                    <h1 className={`text-display text-white mb-8`}>
                        {currentLang.loginBrandingTitle}
                    </h1>

                    <p className="text-body-lg text-blue-100 mb-12 max-w-lg opacity-90">
                        {currentLang.loginBrandingSub}
                    </p>

                    <div className="flex flex-col gap-8">
                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-3">
                            {['Secure E-Filing', 'Real-time Analytics', 'Virtual Courtroom'].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-ui-label text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom decorative elements */}
                <div className="absolute bottom-12 right-12 flex items-center gap-6 opacity-30">
                    <ShieldCheck className="w-6 h-6 text-white" />
                    <Settings className="w-6 h-6 text-white" />
                    <Key className="w-6 h-6 text-white" />
                </div>
            </div>
        </div>
    );
}
