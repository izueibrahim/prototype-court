"use client";

import React from 'react';
import { useAppStore } from '../lib/store';
import { t } from '../lib/i18n';
import {
  ClipboardList, Users, Search, BookOpen, ChevronRight, Gavel, Scale,
  Briefcase, Monitor, ArrowRight, Download, FileText, Star, TrendingUp
} from 'lucide-react';

// ─── Industry Trend Tags ────────────────────────────────────────────────
export function IndustryTrendsSection() {
  const { wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  const industries = [
    { label: 'Perkhidmatan & Bisnes', icon: '💼', color: 'border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100' },
    { label: 'Kecerdasan Buatan (AI)', icon: '✨', color: 'border-amber-200 text-amber-700 bg-amber-50 hover:bg-amber-100' },
    { label: 'Analitik Data', icon: '📊', color: 'border-violet-200 text-violet-700 bg-violet-50 hover:bg-violet-100' },
    { label: 'Komputer & IT', icon: '💻', color: 'border-cyan-200 text-cyan-700 bg-cyan-50 hover:bg-cyan-100' },
    { label: 'Perubatan & Kesihatan', icon: '🏥', color: 'border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100' },
    { label: 'Perkapalan & Logistik', icon: '🚢', color: 'border-teal-200 text-teal-700 bg-teal-50 hover:bg-teal-100' },
    { label: 'Kesatuan Sains & Budaya', icon: '🎭', color: 'border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100' },
    { label: 'Perkilangan & Hartanah', icon: '🏗️', color: 'border-orange-200 text-orange-700 bg-orange-50 hover:bg-orange-100' },
    { label: 'Perladangan Alam Sekitar', icon: '🌿', color: 'border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100' },
  ];

  return (
    <div className={`py-8 sm:py-12 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className={`text-h5 mb-4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
          Trend Kes Mengikut Industri
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {industries.map((ind, i) => (
            <button
              key={i}
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border text-[11px] sm:text-body-sm font-bold transition-all duration-200 cursor-pointer ${isHighContrast ? 'border-white text-white hover:bg-zinc-900' : ind.color
                }`}
            >
              <span>{ind.icon}</span>
              {ind.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── e-Perkhidmatan Mahkamah ────────────────────────────────────────────
export function ECourtServicesSection() {
  const { wcagStates, setCurrentView } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  const services = [
    {
      icon: ClipboardList,
      title: 'Case Management',
      desc: 'Management of the active case process',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      icon: Users,
      title: 'Collective Agreement',
      desc: 'Registration and review of CA',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      icon: Search,
      title: 'Search Full Awards',
      desc: 'Semantic & Full-Text Search',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      icon: BookOpen,
      title: 'User Guides',
      desc: 'User Guides',
      color: 'text-blue-600 bg-blue-50 border-blue-100',
    },
  ];

  return (
    <div className={`px-16 sm:py-20 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-h2 mb-3 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
            e-Services Directory
          </h2>
          <p className={`text-body-lg font-medium max-w-2xl mx-auto ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Explore our comprehensive suite of online judicial services based on your user role.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <button
                key={i}
                onClick={() => setCurrentView('login')}
                className={`group p-8 rounded-[28px] border text-left transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${isHighContrast
                  ? 'bg-black border-white hover:bg-zinc-900'
                  : 'bg-white border-zinc-100 hover:border-blue-400 hover:shadow-xl'
                  }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 border transition-all group-hover:scale-110 ${isHighContrast ? 'border-white text-white' : svc.color
                  }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className={`text-h5 mb-3 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                  {svc.title}
                </h4>
                <p className={`text-[12px] font-medium leading-relaxed mb-6 flex-grow ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  {svc.desc}
                </p>
                <div className={`flex items-center justify-between w-full uppercase text-[10px] font-black tracking-widest ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>
                  EXPLORE SERVICE
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isHighContrast ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
                    <ChevronRight className={`w-3 h-3 ${isHighContrast ? 'text-white' : 'text-zinc-400'}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Kes Dalam Tumpuan (Featured Cases) ─────────────────────────────────
export function FeaturedCasesSection() {
  const { wcagStates, setCurrentView } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  const popularCases = [
    { court: 'Mahkamah 22', title: 'Siti Nurhaliza vs ABC Sdn Bhd', type: 'Pembuangan Kerja', rating: 4.8, icon: '💼', color: 'text-violet-600 bg-violet-50' },
    { court: 'Mahkamah 4', title: 'Azman Isa vs Technip Energies', type: 'Pertikaian Industri', rating: 4.9, icon: '❕', color: 'text-rose-600 bg-rose-50' },
    { court: 'Mahkamah 1', title: 'Kesatuan Pekerja vs TM', type: 'Perjanjian Kolektif', rating: 4.6, icon: '👥', color: 'text-emerald-600 bg-emerald-50' },
  ];

  const weeklyFocus = [
    { court: 'Mahkamah 18', title: 'Ahmad Albab vs Binaan KL', type: 'Penamatan Kontrak', rating: 4.5, icon: '📄', color: 'text-cyan-600 bg-cyan-50' },
    { court: 'Mahkamah 8', title: 'Lim Ah Kau vs Bank Setia', type: 'Tuntutan Gaji', rating: 4.7, icon: '💳', color: 'text-amber-600 bg-amber-50' },
    { court: 'Mahkamah 5', title: 'Muthu Samy vs Plastik JB', type: 'Pemberhentian', rating: 4.4, icon: '👤', color: 'text-zinc-600 bg-zinc-100' },
  ];

  const industryCases = [
    { industry: 'Kesihatan & Perubatan', title: 'Dr. Wong vs Hospital swasta', type: 'Tuntutan Elaun', rating: 4.9, icon: '🏥', color: 'text-rose-600 bg-rose-50' },
    { industry: 'Teknologi Maklumat', title: 'Persatuan IT vs Syarikat Gergasi', type: 'Perjanjian Kolektif', rating: 4.8, icon: '💻', color: 'text-blue-600 bg-blue-50' },
    { industry: 'Perladangan', title: 'Pekerja Asing vs Ladang Sawit', type: 'Pertikaian Gaji', rating: 4.5, icon: '🌿', color: 'text-emerald-600 bg-emerald-50' },
  ];

  const CaseCard = ({ item, showCourt = true }: { item: any; showCourt?: boolean }) => (
    <div className={`p-4 rounded-[20px] shadow-sm flex items-center gap-4 cursor-pointer transition-all hover:-translate-y-0.5 ${isHighContrast ? 'bg-zinc-900 border border-zinc-700 hover:bg-zinc-800' : 'bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-md'
      }`}>
      <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-xl shrink-0 ${isHighContrast ? 'bg-zinc-800 border border-zinc-700' : item.color
        }`}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-[9px] font-black uppercase tracking-widest mb-1 ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {showCourt ? (`⚖ ${item.court}`) : item.industry}
        </p>
        <h5 className={`text-body-sm font-black leading-tight truncate ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
          {item.title}
        </h5>
        <div className="flex items-center gap-2 mt-1">
          <p className={`text-[10px] font-bold ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
            {item.type}
          </p>
          <span className="text-zinc-300 text-[10px]">•</span>
          <p className={`text-[10px] font-bold ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'} flex items-center`}>
            <Star className="w-2.5 h-2.5 inline text-amber-400 fill-amber-400 mr-1" /> {item.rating}
          </p>
        </div>
      </div>
    </div>
  );

  const Column = ({ title, cases, showCourt = true }: { title: string; cases: any[]; showCourt?: boolean }) => (
    <div className={`p-6 rounded-[24px] border border-zinc-200/60 shadow-sm ${isHighContrast ? 'bg-black border-zinc-800' : 'bg-purple-50/30'}`}>
      <div className="flex items-center justify-between mb-6">
        <h4 className={`text-body-md font-black ${isHighContrast ? 'text-white' : 'text-zinc-800'}`}>{title} <ArrowRight className="w-4 h-4 inline-block ml-1 opacity-50" /></h4>
      </div>
      <div className="space-y-3">
        {cases.map((c, i) => (
          <CaseCard key={i} item={c} showCourt={showCourt} />
        ))}
      </div>
    </div>
  );

  return (
    <div className={`py-12 sm:py-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-h4 mb-8 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
          Kes Dalam Tumpuan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Column title="Sabitan Popular" cases={popularCases} />
          <Column title="Tumpuan Minggu Ini" cases={weeklyFocus} />
          <Column title="Kes Mengikut Industri" cases={industryCases} showCourt={false} />
        </div>
      </div>
    </div>
  );
}

// ─── 75% Mediation Banner ───────────────────────────────────────────────
export function MediationBanner() {
  const { wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  return (
    <div className={`py-8 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-[24px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 ${isHighContrast ? 'bg-zinc-900 border border-white' : 'bg-[#1e3a8a]'
          }`}>
          {!isHighContrast && (
            <>
              {/* Decorative circles to match the screenshot */}
              <div className="absolute -right-20 -top-40 w-96 h-96 bg-[#2563eb] rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border-[40px] border-[#2563eb]/20 rounded-full"></div>
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[270px] h-[270px] border-[20px] border-[#2563eb]/30 rounded-full"></div>
            </>
          )}
          <div className="relative z-10 flex-1">
            <h3 className="text-h3 text-white mb-3 leading-tight font-black">
              75% kes berjaya diselesaikan melalui Pengantaraan
            </h3>
            <p className="text-body-sm text-blue-100 opacity-90 mb-5 max-w-2xl font-medium">
              Penyelesaian pertikaian lebih cepat, jimat kos, dan mengekalkan keharmonian tanpa perbicaraan penuh.
            </p>
            <button className="inline-flex items-center text-[12px] text-white font-bold uppercase tracking-widest group">
              Ketahui lebih lanjut <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          {/* Donut Chart matching screenshot */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 z-10 mr-4">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#06b6d4" strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 50 * 0.75} ${2 * Math.PI * 50 * 0.25}`}
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-h2 text-white font-black">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Promo Cards ────────────────────────────────────────────────────────
export function PromoCardsSection() {
  const { wcagStates, setCurrentView } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  return (
    <div className={`py-12 pb-24 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          {/* Guide Card - matches screenshot */}
          <div className={`relative overflow-hidden rounded-[20px] p-8 flex flex-col justify-between items-start border border-zinc-100 shadow-sm ${isHighContrast ? 'bg-zinc-900 border-white' : 'bg-zinc-50'
            }`}>
            <div className="flex-1 w-2/3 relative z-10">
              <span className="inline-flex items-center px-2.5 py-1 mb-4 rounded-md bg-[#8b5cf6] text-[9px] font-black uppercase text-white tracking-widest gap-1">
                <img src="/jata-negara.png" className="w-3 h-3 invert brightness-0" alt="Jata" /> PANDUAN
              </span>
              <h4 className={`text-h5 leading-tight mb-6 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                Tingkatkan kemahiran pemfailan dan urus dokumen kes dengan tepat.
              </h4>
              <button className="inline-flex items-center px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-[11px] font-bold transition-all active:scale-95 gap-2 shadow-sm shadow-purple-500/20">
                Muat Turun Panduan <Download className="w-3 h-3" />
              </button>
            </div>
            {/* Visuals */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2">
              <div className="absolute -left-12 -top-8 text-amber-400 rotate-12">
                <span className="text-6xl font-black scale-x-75 inline-block">✱</span>
              </div>
              <div className="w-24 h-28 bg-[#7c3aed] rounded-2xl flex flex-col justify-center items-center text-white shadow-lg">
                <FileText className="w-8 h-8 mb-2" />
                <span className="text-[10px] font-bold">Manual</span>
              </div>
            </div>
          </div>

          {/* e-CA Card - matches screenshot */}
          <div className={`relative overflow-hidden rounded-[20px] p-8 flex flex-col justify-between items-start shadow-sm ${isHighContrast ? 'bg-zinc-900 border-2 border-white' : 'bg-[#7c3aed]'
            }`}>
            <div className="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-bl-[100px] pointer-events-none"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white rounded-full pointer-events-none"></div>

            <div className="flex-1 relative z-10 w-4/5">
              <div className="flex items-center gap-2 mb-4 text-white/80 text-[10px] font-bold tracking-widest uppercase">
                <img src="/jata-negara.png" className="w-4 h-4 invert brightness-0 opacity-80" alt="Jata" />
                <span>untuk Kesatuan & Majikan</span>
              </div>
              <h4 className="text-h5 text-white mb-6 leading-tight">
                Daftar dan uruskan rekod Perjanjian Kolektif (CA) secara dalam talian.
              </h4>
              <button
                onClick={() => setCurrentView('login')}
                className="inline-flex items-center px-4 py-2 bg-white text-[#7c3aed] rounded-lg text-[11px] font-black transition-all hover:bg-zinc-50 active:scale-95 gap-2 shadow-md"
              >
                Akses e-CA Sekarang <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Statistics Bar ─────────────────────────────────────────────────────
// Matches the dark band with yellow text below the promo cards
export function StatsBarSection() {
  const { wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  const stats = [
    { value: '12,540', label: 'Kes Diproses' },
    { value: '8,210', label: 'Award Dikeluarkan' },
    { value: '92%', label: 'Kadar Penyelesaian' },
    { value: '45 Hari', label: 'Purata Masa' },
  ];

  return (
    <div className={`py-12 ${isHighContrast ? 'bg-black border-y-2 border-white' : 'bg-[#18181b]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center text-center gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[150px]">
              <h3 className={`text-display mb-1 font-black ${isHighContrast ? 'text-white' : 'text-[#fbbf24]'}`}>
                {stat.value}
              </h3>
              <p className={`text-[11px] font-bold ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Final CTA Section ──────────────────────────────────────────────────
// Matches the blue block before the footer in screenshot
export function CTASection() {
  const { wcagStates, setCurrentView } = useAppStore();
  const isHighContrast = wcagStates.highContrast;

  return (
    <div className={`py-16 ${isHighContrast ? 'bg-black border-none' : 'bg-[#0047AB]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-h3 mb-3 font-black ${isHighContrast ? 'text-white' : 'text-white'}`}>
          Mulakan Penggunaan eMP v2.0 Hari Ini
        </h2>
        <p className={`text-body-sm max-w-2xl mx-auto mb-8 font-medium ${isHighContrast ? 'text-zinc-400' : 'text-blue-100'}`}>
          Akses sistem untuk pengurusan kes dan prosiding mahkamah secara digital. Pengalaman baharu bersama keadilan digital.
        </p>
        <button
          onClick={() => setCurrentView('login')}
          className={`inline-flex items-center px-8 py-3 rounded-lg text-[13px] font-black transition-all active:scale-95 ${isHighContrast
            ? 'bg-white text-black border-2 border-white hover:bg-zinc-200'
            : 'bg-white text-[#0047AB] hover:bg-zinc-100 shadow-lg'
            }`}
        >
          Log Masuk Portal
        </button>
      </div>
    </div>
  );
}
