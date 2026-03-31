"use client";

import React, { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { upcomingHearings, courtLocations } from '@/lib/data';
import { MapPin, Building2, ChevronDown, Download, Gavel, Clock, Calendar, Search, ArrowLeft, ChevronLeft, ChevronRight, X, Filter } from 'lucide-react';

export default function FullSchedule() {
    const { lang, wcagStates, setCurrentView, scheduleSearchQuery, setScheduleSearchQuery } = useAppStore();

    // UI states
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [selectedRegion, setSelectedRegion] = useState("Kuala Lumpur");
    const [selectedCourt, setSelectedCourt] = useState("Mahkamah 1");

    // Calendar states
    const [calendarMonth, setCalendarMonth] = useState(2); // 0-11 (March)
    const [calendarYear, setCalendarYear] = useState(2026);
    const [selectedDate, setSelectedDate] = useState(12);

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;
    const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

    const mockHearingsTypes = lang === 'en' ?
        ['Trial (B)', 'Trial (B)', 'Mention (S)', 'Hearing (B)', 'Mention (S)', 'Decision (K)'] :
        ['Bicara (B)', 'Bicara (B)', 'Sebutan (S)', 'Bicara (B)', 'Sebutan (S)', 'Keputusan (K)'];

    // Dynamic Calendar Logic
    const daysInMonthCount = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const daysInMonthArray = Array.from({ length: daysInMonthCount }, (_, i) => i + 1);
    const startDayOffset = new Date(calendarYear, calendarMonth, 1).getDay();
    const blankDaysArray = Array.from({ length: startDayOffset }, (_, i) => i);
    const daysWithHearings = [2, 5, 8, 12, 14, 15, 18, 22, 26, 29];

    const availableYears = [2025, 2026, 2027, 2028];

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCalendarMonth(Number(e.target.value));
    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCalendarYear(Number(e.target.value));
    const prevMonth = () => {
        if (calendarMonth === 0) { setCalendarMonth(11); setCalendarYear(y => y - 1); }
        else setCalendarMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (calendarMonth === 11) { setCalendarMonth(0); setCalendarYear(y => y + 1); }
        else setCalendarMonth(m => m + 1);
    };

    return (
        <div className="flex-1 flex flex-col relative z-10 w-full">
            <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-900 border-zinc-800 relative overflow-hidden'}`}>
                {!isHighContrast && (
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                        <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-blue-600/20 rounded-full blur-[100px]"></div>
                    </div>
                )}
                <div className="max-w-7xl mx-auto relative z-10">
                    <button
                        className="flex items-center text-body-sm font-bold text-blue-400 mb-4 hover:text-blue-300 transition-colors"
                        onClick={() => {
                            setScheduleSearchQuery("");
                            setCurrentView('portal');
                        }}
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {currentLang.backToPortal}
                    </button>
                    <h1 className={`text-h2 text-white mb-4`}>
                        {currentLang.fullScheduleTitle}
                    </h1>
                    <p className={`text-body-lg max-w-2xl font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        {currentLang.fullScheduleSub}
                    </p>
                </div>
            </div>

            <div className={`flex-1 py-6 sm:py-10 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* SIDEBAR: Filters & Calendar */}
                        <aside className="w-full lg:w-1/3 xl:w-1/4 space-y-6 flex-shrink-0">
                            <div className={`p-6 rounded-3xl shadow-sm border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-200'}`}>

                                <div className="mb-6">
                                    <label className={`text-ui-label font-bold uppercase mb-2 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.step1Region}</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                        <select
                                            value={selectedRegion}
                                            onChange={(e) => {
                                                setSelectedRegion(e.target.value);
                                                const newCourt = courtLocations.find(l => l.region === e.target.value)?.courts[0] || "Mahkamah 1";
                                                setSelectedCourt(newCourt);
                                            }}
                                            className={`w-full pl-9 pr-10 py-3 rounded-xl border text-sm font-bold appearance-none transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white focus:ring-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`}
                                        >
                                            {courtLocations.map(loc => <option key={loc.region} value={loc.region}>{loc.region}</option>)}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <label className={`text-ui-label font-bold uppercase mb-2 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.step2Court}</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                                        <select
                                            value={selectedCourt}
                                            onChange={(e) => setSelectedCourt(e.target.value)}
                                            className={`w-full pl-9 pr-10 py-3 rounded-xl border text-sm font-bold appearance-none transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white focus:ring-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'}`}
                                        >
                                            {courtLocations.find(l => l.region === selectedRegion)?.courts.map(court => (
                                                <option key={court} value={court}>{court}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className={`w-full h-px mb-8 ${isHighContrast ? 'bg-zinc-800' : 'bg-zinc-100'}`}></div>

                                {/* STEP 3: CALENDAR */}
                                <div>
                                    <label className={`text-ui-label font-bold uppercase mb-4 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.step3Date}</label>

                                    <div className="flex items-center justify-between mb-4 gap-2">
                                        <div className="flex flex-1 gap-2 relative">
                                            <div className="relative flex-1">
                                                <select
                                                    value={calendarMonth}
                                                    onChange={handleMonthChange}
                                                    className={`w-full appearance-none py-1.5 pl-2 pr-6 rounded-lg border text-sm font-bold outline-none ${isHighContrast ? 'bg-black text-white border-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500'}`}
                                                >
                                                    {currentLang.months.map((m: string, i: number) => <option key={i} value={i}>{m}</option>)}
                                                </select>
                                                <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                                            </div>
                                            <div className="relative w-24">
                                                <select
                                                    value={calendarYear}
                                                    onChange={handleYearChange}
                                                    className={`w-full appearance-none py-1.5 pl-2 pr-6 rounded-lg border text-sm font-bold outline-none ${isHighContrast ? 'bg-black text-white border-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:border-blue-500'}`}
                                                >
                                                    {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
                                                </select>
                                                <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" />
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 flex-shrink-0">
                                            <button onClick={prevMonth} className={`p-1.5 rounded-lg border transition-colors ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'border-zinc-200 text-zinc-500 hover:bg-zinc-100'}`}>
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>
                                            <button onClick={nextMonth} className={`p-1.5 rounded-lg border transition-colors ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'border-zinc-200 text-zinc-500 hover:bg-zinc-100'}`}>
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="lg:hidden flex overflow-x-auto hide-scrollbar gap-2 sm:gap-3 pb-2 snap-x">
                                        {daysInMonthArray.map(day => {
                                            const hasHearing = daysWithHearings.includes(day);
                                            const isSelected = selectedDate === day;
                                            const dayOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][(startDayOffset + day - 1) % 7];
                                            return (
                                                <button key={day} onClick={() => setSelectedDate(day)} className={`relative flex flex-col items-center justify-center flex-shrink-0 w-14 h-16 rounded-2xl border transition-all snap-center ${isSelected ? (isHighContrast ? 'bg-white text-black border-white' : 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200') : (isHighContrast ? 'bg-black text-white border-zinc-800 hover:border-white' : 'bg-white text-zinc-700 border-zinc-200 hover:border-blue-400 hover:bg-blue-50')}`}>
                                                    <span className={`text-[10px] font-black uppercase mb-0.5 ${isSelected ? (isHighContrast ? 'text-zinc-600' : 'text-blue-100') : 'text-zinc-400'}`}>{dayOfWeek}</span>
                                                    <span className="text-base font-black">{day}</span>
                                                    {hasHearing && <span className={`absolute bottom-2 w-1.5 h-1.5 rounded-full ${isSelected ? (isHighContrast ? 'bg-black' : 'bg-white') : (isHighContrast ? 'bg-white' : 'bg-blue-600')}`}></span>}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="hidden lg:block">
                                        <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                <div key={day} className={`text-ui-label font-bold uppercase ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{day}</div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">
                                            {blankDaysArray.map(d => <div key={`blank-${d}`} className="h-9"></div>)}
                                            {daysInMonthArray.map(day => {
                                                const hasHearing = daysWithHearings.includes(day);
                                                const isSelected = selectedDate === day;
                                                return (
                                                    <button key={day} onClick={() => setSelectedDate(day)} className={`relative h-9 w-full rounded-xl flex items-center justify-center text-body-sm font-bold transition-all ${isSelected ? (isHighContrast ? 'bg-white text-black shadow-md' : 'bg-blue-600 text-white shadow-lg shadow-blue-200') : (isHighContrast ? 'text-white hover:bg-zinc-900 hover:text-white' : 'text-zinc-700 hover:bg-blue-50 hover:text-blue-600')}`}>
                                                        <span className="relative z-10">{day}</span>
                                                        {hasHearing && <span className={`absolute bottom-1.5 w-1 h-1 rounded-full ${isSelected ? (isHighContrast ? 'bg-black' : 'bg-white') : (isHighContrast ? 'bg-blue-600' : 'bg-blue-300')}`}></span>}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className={`mt-4 lg:mt-6 pt-4 border-t flex items-center justify-between text-ui-label font-bold uppercase ${isHighContrast ? 'border-zinc-800 text-zinc-400' : 'border-zinc-100 text-zinc-400'}`}>
                                        <div className="flex items-center">
                                            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isHighContrast ? 'bg-white' : 'bg-blue-600'}`}></span>
                                            {lang === 'en' ? 'Scheduled' : 'Dijadualkan'}
                                        </div>
                                        <button className={`hover:text-blue-600 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-600'}`}>
                                            {lang === 'en' ? 'Today' : 'Hari Ini'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT: Listings */}
                        <div className="w-full lg:flex-1 flex flex-col">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                                <div className="w-full lg:w-auto flex flex-col">
                                    <h2 className={`text-h3 text-zinc-900`}>
                                        {selectedDate} {currentLang.months[calendarMonth]} {calendarYear}
                                    </h2>
                                    <p className={`text-body-sm font-bold mt-1.5 flex items-center ${isHighContrast ? 'text-white/60' : 'text-zinc-500'}`}>
                                        <MapPin className="w-4 h-4 mr-1.5 text-blue-600" /> {selectedRegion} <span className="mx-2 opacity-30">•</span> <Building2 className="w-4 h-4 mr-1.5 text-blue-600" /> {selectedCourt}
                                    </p>
                                </div>

                                <div className="flex w-full sm:w-auto items-center gap-4">
                                    <div className="relative flex-1 sm:flex-none">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <Search className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <input
                                            type="text"
                                            value={scheduleSearchQuery}
                                            onChange={(e) => setScheduleSearchQuery(e.target.value)}
                                            className={`w-full sm:w-72 pl-10 pr-10 py-3 rounded-xl border text-sm font-bold transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white placeholder-zinc-500' : 'bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm'}`}
                                            placeholder={currentLang.filterSearch}
                                        />
                                        {scheduleSearchQuery && (
                                            <button
                                                onClick={() => setScheduleSearchQuery('')}
                                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Render Content */}
                            <div className="w-full space-y-5">
                                {(() => {
                                    let displayedHearings = [];
                                    const isSearching = scheduleSearchQuery.trim().length > 0;

                                    if (isSearching) {
                                        const query = scheduleSearchQuery.toLowerCase();
                                        displayedHearings = upcomingHearings.filter(h =>
                                            h.claimant.toLowerCase().includes(query) ||
                                            h.respondent.toLowerCase().includes(query) ||
                                            h.id.toLowerCase().includes(query) ||
                                            h.summary.toLowerCase().includes(query) ||
                                            h.keywords.some(k => k.toLowerCase().includes(query))
                                        );
                                    } else {
                                        displayedHearings = daysWithHearings.includes(selectedDate) ? upcomingHearings : [];
                                    }

                                    if (displayedHearings.length > 0) {
                                        return displayedHearings.map((hearing, idx) => {
                                            const isExpanded = expandedId === hearing.id;
                                            const hType = mockHearingsTypes[idx % mockHearingsTypes.length] || "Trial";

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`flex flex-col rounded-3xl sm:rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-100'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white border-transparent' : 'border-blue-500 shadow-premium opacity-100 ring-4 ring-blue-500/5 z-10') : 'hover:border-blue-200 hover:shadow-premium'}`}
                                                >
                                                    <div
                                                        onClick={() => setExpandedId(isExpanded ? null : hearing.id)}
                                                        className="flex flex-col sm:flex-row cursor-pointer group"
                                                    >
                                                        <div className={`sm:w-60 p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-zinc-50/30 border-zinc-50 group-hover:bg-blue-50/50 transition-colors'}`}>
                                                            <span className={`text-h4 font-bold ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{hearing.time}</span>
                                                            <span className={`mt-0 sm:mt-4 inline-flex items-center px-4 py-1.5 rounded-xl text-ui-label font-bold uppercase ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-600 text-white shadow-lg shadow-blue-100'}`}>
                                                                {hType}
                                                            </span>
                                                        </div>

                                                        <div className="p-8 flex-1 flex flex-col justify-center relative pr-16 sm:pr-20">
                                                            <h4 className={`text-h5 mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                                <span className="group-hover:text-blue-600 transition-colors">{hearing.claimant}</span>
                                                                <span className="text-zinc-300 font-medium mx-2 text-sm italic">vs</span>
                                                                <span className="group-hover:text-blue-600 transition-colors">{hearing.respondent}</span>
                                                            </h4>
                                                            <p className={`text-ui-label mb-5 font-mono font-bold uppercase ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{hearing.id}</p>
                                                            <div className="flex flex-wrap gap-x-8 gap-y-3 text-ui-label font-bold uppercase">
                                                                <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                                    <Clock className="w-4 h-4 mr-2.5 text-blue-600 opacity-70 flex-shrink-0" /> {hearing.time} • Room 4
                                                                </div>
                                                                <div className={`flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-500'}`}>
                                                                    <Gavel className="w-4 h-4 mr-2.5 text-blue-600 opacity-70 flex-shrink-0" /> {hearing.judge}
                                                                </div>
                                                            </div>

                                                            <div className={`absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'text-white' : 'bg-zinc-50 text-zinc-300 group-hover:text-blue-600 group-hover:bg-blue-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-lg scale-110 rotate-180') : ''}`}>
                                                                <ChevronDown className="w-6 h-6" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {isExpanded && (
                                                        <div className={`p-8 sm:p-10 border-t animate-in slide-in-from-top-4 duration-500 ${isHighContrast ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-100 bg-zinc-50/30'}`}>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                                                                <div className="md:col-span-2">
                                                                    <h5 className="text-ui-label font-bold uppercase mb-4 text-zinc-400">Summary of Dispute</h5>
                                                                    <p className={`text-body-md leading-relaxed font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>{hearing.summary}</p>
                                                                </div>
                                                                <div>
                                                                    <h5 className="text-ui-label font-bold uppercase mb-4 text-zinc-400">Tags & Keywords</h5>
                                                                    <div className="flex flex-wrap gap-3">
                                                                        {hearing.keywords.map((kw: string) => (
                                                                            <span key={kw} className={`px-4 py-1.5 text-ui-label font-bold uppercase rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm'}`}>{kw}</span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-zinc-200/50">
                                                                <button onClick={() => setCurrentView('case-details')} className={`inline-flex items-center justify-center px-10 py-4 ${isHighContrast ? 'bg-white text-black hover:bg-zinc-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:scale-[1.02]'} rounded-full text-body-sm font-bold transition-all active:scale-95`}>
                                                                    <ChevronRight className="w-5 h-5 mr-3" /> View Full Case Details
                                                                </button>
                                                                <button className={`inline-flex items-center justify-center px-10 py-4 ${isHighContrast ? 'border-white text-white hover:bg-zinc-800' : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 shadow-sm'} rounded-full text-body-sm font-bold transition-all active:scale-95`}>
                                                                    <Download className="w-5 h-5 mr-3 text-blue-600" /> Export Schedule (PDF)
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        });
                                    } else {
                                        return (
                                            <div className={`p-12 rounded-[40px] border-2 border-dashed text-center flex flex-col items-center justify-center min-h-[400px] transition-all ${isHighContrast ? 'border-zinc-800' : 'border-zinc-100 bg-white'}`}>
                                                {isSearching ? (
                                                    <div className="animate-in fade-in zoom-in duration-500">
                                                        <div className="w-20 h-20 rounded-3xl bg-zinc-50 flex items-center justify-center mb-6 mx-auto border border-zinc-100 text-zinc-300">
                                                            <Search className="w-10 h-10" />
                                                        </div>
                                                        <h4 className={`text-h3 mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>No Matches Found</h4>
                                                        <p className={`text-body-sm max-w-sm mx-auto font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>We couldn&apos;t find any records matching &quot;{scheduleSearchQuery}&quot;. Please check your spelling or try different terms.</p>
                                                        <button
                                                            onClick={() => setScheduleSearchQuery('')}
                                                            className="mt-8 btn-ghost text-blue-600 font-bold"
                                                        >
                                                            Clear Search
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="animate-in fade-in zoom-in duration-500">
                                                        <div className="w-20 h-20 rounded-3xl bg-zinc-50 flex items-center justify-center mb-6 mx-auto border border-zinc-100 text-zinc-300">
                                                            <Calendar className="w-10 h-10" />
                                                        </div>
                                                        <h4 className={`text-h3 mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>No Hearings Scheduled</h4>
                                                        <p className={`text-body-sm max-w-sm mx-auto font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>There are no industrial court proceedings listed for {selectedCourt} on this specific date.</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
