"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import {
  History,
  Users,
  Target,
  ShieldCheck,
  Briefcase,
  UserRound,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Monitor,
  Flame,
  Award,
  Scale,
  Lock,
  Zap,
  Quote,
  Eye,
  Flag,
  ArrowLeft,
  Search,
  X
} from 'lucide-react';

export default function AboutPage() {
  const { lang, wcagStates, setCurrentView } = useAppStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const isHighContrast = wcagStates.highContrast;

  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Our Profile',
      intro: 'The Industrial Court of Malaysia was established under the Industrial Relations Act 1967. Our primary objective is to arbitrate and resolve trade disputes, unfair dismissal claims, and cases related to collective agreements securely, efficiently, and equitably.',

      sections: {
        mission: 'Mission & Vision',
        values: 'Core Values',
        people: 'Our People',
        history: 'History & Background',
        functions: 'Functions & Roles',
        charter: "Client's Charter"
      },

      mission: {
        vTitle: 'Vision',
        vDesc: 'To be a leading organization in promoting industrial harmony.',
        mTitle: 'Mission',
        mDesc: 'To uphold social justice and maintain industrial harmony through expeditious court awards and collective agreements.'
      },

      values: [
        { name: 'Justice', desc: 'Promoting fairness in process and excellence in service.', icon: <Scale className="w-5 h-5" /> },
        { name: 'Integrity', desc: 'Operating with transparency, honesty, and ethical standards.', icon: <ShieldCheck className="w-5 h-5" /> },
        { name: 'Service Excellence', desc: 'Committed to high-quality judicial and administrative services.', icon: <Award className="w-5 h-5" /> },
        { name: 'Innovation', desc: 'Fostering creativity through digital transformation and modernization.', icon: <Zap className="w-5 h-5" /> },
        { name: 'Unity', desc: 'Working collaboratively to achieve national industrial harmony.', icon: <Users className="w-5 h-5" /> }
      ],

      leadership: {
        president: "Dato' Wan Jeffry bin Kassim",
        registrar: "Encik Bashah bin Bachik"
      },

      history: {
        title: 'Our History',
        desc: 'Established in 1967, the court has evolved from a single office in KL to a nationwide network of 22 specialized courts.',
        milestones: [
          { year: '1967', event: 'First established at Jalan Tuanku Abdul Rahman.' },
          { year: '1977', event: 'Relocated to Jalan Duta Selangor State buildings.' },
          { year: '2018', event: 'Moved to current headquarters at Wisma PERKESO.' },
          { year: 'Present', event: '22 courts operating across KL, Penang, Johor, Sabah, and Sarawak.' }
        ]
      },

      charter: {
        items: [
          "Dispose of dismissal cases within 16 months.",
          "Resolve trade dispute cases within 12 months.",
          "Process collective agreements within 6 weeks.",
          "Hand down awards within 3 months of final submission."
        ]
      }
    },
    ms: {
      title: 'Mengenai Kami',
      subtitle: 'Profil Kementerian',
      intro: 'Mahkamah Perusahaan Malaysia ditubuhkan di bawah Akta Perhubungan Perusahaan 1967. Objektif utama kami adalah untuk menimbang tara dan menyelesaikan pertikaian perdagangan, tuntutan pemecatan tidak adil, dan kes-kes yang berkaitan dengan perjanjian kolektif secara selamat, cekap, dan saksama.',

      sections: {
        mission: 'Misi & Visi',
        values: 'Nilai Teras',
        people: 'Warga Kami',
        history: 'Sejarah & Latar Belakang',
        functions: 'Fungsi & Peranan',
        charter: 'Piagam Pelanggan'
      },

      mission: {
        vTitle: 'Visi',
        vDesc: 'Menjadi organisasi peneraju dalam mempromosikan keharmonian industri.',
        mTitle: 'Misi',
        mDesc: 'Menegakkan keadilan sosial dan mengekalkan keharmonian industri melalui award mahkamah dan perjanjian kolektif yang pantas.'
      },

      values: [
        { name: 'Keadilan', desc: 'Mempromosikan keadilan dalam proses dan kecemerlangan dalam perkhidmatan.', icon: <Scale className="w-5 h-5" /> },
        { name: 'Integriti', desc: 'Beroperasi dengan ketelusan, kejujuran, dan piawaian etika.', icon: <ShieldCheck className="w-5 h-5" /> },
        { name: 'Kecemerlangan Perkhidmatan', desc: 'Komited terhadap perkhidmatan kehakiman dan pentadbiran berkualiti tinggi.', icon: <Award className="w-5 h-5" /> },
        { name: 'Inovasi', desc: 'Memupuk kreativiti melalui transformasi digital dan pemodenan.', icon: <Zap className="w-5 h-5" /> },
        { name: 'Perpaduan', desc: 'Bekerja secara kolaboratif untuk mencapai keharmonian industri negara.', icon: <Users className="w-5 h-5" /> }
      ],

      leadership: {
        president: "Dato' Wan Jeffry bin Kassim",
        registrar: "Encik Bashah bin Bachik"
      },

      history: {
        title: 'Sejarah Kami',
        desc: 'Ditubuhkan pada 1967, mahkamah telah berkembang daripada satu pejabat di KL kepada rangkaian nasional 22 mahkamah khusus.',
        milestones: [
          { year: '1967', event: 'Mula ditubuhkan di Jalan Tuanku Abdul Rahman.' },
          { year: '1977', event: 'Berpindah ke bangunan negeri Selangor di Jalan Duta.' },
          { year: '2018', event: 'Berpindah ke ibu pejabat semasa di Wisma PERKESO.' },
          { year: 'Kini', event: '22 mahkamah beroperasi di KL, P.Pinang, Johor, Sabah, dan Sarawak.' }
        ]
      },

      charter: {
        items: [
          "Menyelesaikan kes pemecatan dalam tempoh 16 bulan.",
          "Menyelesaikan kes pertikaian perdagangan lain dalam tempoh 12 bulan.",
          "Memproses perjanjian kolektif dalam tempoh 6 minggu.",
          "Mengeluarkan award dalam tempoh 3 bulan dari penghujahan terakhir."
        ]
      }
    }
  };

  const t = content[lang] || content.en;

  const SectionHeader = ({ title, id, align = 'left' }: { title: string, id?: string, align?: 'left' | 'center' }) => (
    <div id={id} className={`flex flex-col mb-8 ${align === 'center' ? 'items-center text-center' : ''}`}>
      <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <main className={`flex-1 relative z-10 min-h-screen ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section - Standardized Layout (Transparent Background) */}
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
              setCurrentView('portal');
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === 'ms' ? 'Kembali ke Portal' : 'Back to Portal'}
          </button>
          <h1 className={`text-h2 text-white mb-4`}>
            {t.title}
          </h1>
          <p className={`text-body-lg font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-400'}`}>
            {t.intro}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-slate-100">

        {/* Vision, Mission & Client's Charter (Triple Column Row) */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className={`group relative p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Target className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Target className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.vTitle}</h4>
                <p className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.vDesc}</p>
              </div>
            </div>

            {/* Mission */}
            <div className={`group relative p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Flag className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Flag className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.mTitle}</h4>
                <p className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.mDesc}</p>
              </div>
            </div>

            {/* Client's Charter */}
            <div className={`group relative p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <ShieldCheck className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="relative z-10">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.sections.charter}</h4>
                <div className="space-y-4">
                  {t.charter.items.slice(0, 2).map((item, i) => (
                    <p key={i} className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our People / Hierarchy */}
        <section className="py-16 sm:py-16">
          <SectionHeader title={t.sections.people} align="center" />
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-8">
              {/* Top Management Tree */}
              <div className="flex flex-col items-center w-full relative">
                {/* President */}
                <div className={`relative z-10 w-full max-w-md p-8 rounded-[2.5rem] border-2 text-center transition-all hover:-translate-y-1 hover:shadow-2xl ${isHighContrast ? 'bg-white text-black border-white font-bold' : 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20'}`}>
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <UserRound className="w-8 h-8 text-white/80" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-3">{lang === 'ms' ? 'Presiden' : 'President'}</h4>
                  <h3 className="text-2xl font-black tracking-tight leading-tight">{t.leadership.president}</h3>
                </div>

                {/* Vertical Line Connecting */}
                <div className={`w-0.5 h-12 ${isHighContrast ? 'bg-white' : 'bg-slate-200'}`}></div>

                {/* Registrar */}
                <div className={`relative z-10 w-full max-w-[400px] p-8 rounded-[2.5rem] border text-center transition-all hover:-translate-y-1 hover:shadow-xl ${isHighContrast ? 'bg-black text-white border-white' : 'bg-white text-slate-900 border-slate-200 shadow-sm'}`}>
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 transition-all ${isHighContrast ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-blue-50 hover:text-blue-500'}`}>
                    <UserRound className="w-8 h-8" />
                  </div>
                  <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isHighContrast ? 'text-white/40' : 'text-slate-400'}`}>{lang === 'ms' ? 'Pendaftar' : 'Registrar'}</h4>
                  <h3 className="text-2xl font-black tracking-tight leading-tight">{t.leadership.registrar}</h3>
                </div>

                {/* Connecting Line Downwards */}
                <div className={`w-0.5 h-16 ${isHighContrast ? 'bg-white' : 'bg-slate-200'}`}></div>
              </div>

              {/* Regional Chairmen Title */}
              <div className="w-full -mt-4">
                <h4 className={`text-[10px] font-black mb-8 text-center uppercase tracking-[0.3em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                  {lang === 'ms' ? 'Pengerusi Wilayah' : 'Regional Chairmen'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                  {[
                    { loc: 'Johor', name: 'Y.A. Tengku Amir Zaki' },
                    { loc: 'Penang', name: 'Y.A. Puan Rusita binti Md Lazim' },
                    { loc: 'Perak', name: 'Y.A. Puan D. Sunita Kaur Jessy' },
                    { loc: 'Sabah', name: 'Y.A. Tuan Indra bin Ayub' },
                    { loc: 'Sarawak', name: 'Y.A. Puan Siti Zaharah binti Suboh' }
                  ].map((r, i) => (
                    <div key={i} className={`relative group flex flex-col items-center p-6 rounded-[2rem] border text-center transition-all hover:-translate-y-1 hover:shadow-lg ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center transition-colors ${isHighContrast ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'}`}>
                        <UserRound className="w-6 h-6" />
                      </div>
                      <h5 className={`text-[10px] font-black mb-2 uppercase tracking-[0.2em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>{r.loc}</h5>
                      <p className={`text-sm sm:text-base leading-tight font-bold tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{r.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Courts Directory */}
              <div className="w-full pt-16">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                  <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                    {lang === 'ms' ? 'Direktori Pengerusi Mahkamah' : 'Courts Chairmen Directory'}
                  </h4>
                  <div className="relative w-full sm:w-72">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm font-bold transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm'}`}
                      placeholder={lang === 'ms' ? 'Cari mahkamah atau nama...' : 'Search court or name...'}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>

                {(() => {
                  const allCourts = [
                    { court: 'KL Court 1', chairman: "Y.A. Dato' Wan Jeffry bin Kassim" },
                    { court: 'KL Court 2', chairman: "Y.A. Tuan Mohd Zulbahrin bin Zainuddin" },
                    { court: 'KL Court 3 - 11', chairman: "Y.A. Chairmen assigned to KL Courts" },
                    { court: 'KL Court 12', chairman: "Y.A. Puan Chow Siew Lin" },
                    { court: 'KL Court 13 - 16', chairman: "Y.A. Chairmen assigned to KL Courts" },
                    { court: 'Penang 1 & 2', chairman: "Y.A. Puan Rusita binti Md Lazim & Colleague" },
                    { court: 'Johor', chairman: "Y.A. Tengku Amir Zaki" },
                    { court: 'Perak', chairman: "Y.A. Puan D. Sunita Kaur Jessy" },
                    { court: 'Sabah', chairman: "Y.A. Tuan Indra bin Ayub" },
                    { court: 'Sarawak', chairman: "Y.A. Puan Siti Zaharah binti Suboh" }
                  ];
                  const filteredCourts = allCourts.filter(c =>
                    c.court.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    c.chairman.toLowerCase().includes(searchQuery.toLowerCase())
                  );

                  return filteredCourts.length > 0 ? (
                    <div className={`rounded-3xl border overflow-hidden transition-all duration-300 ${isHighContrast ? 'border-white' : 'border-slate-100 shadow-sm'}`}>
                      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${isHighContrast ? 'bg-white' : 'bg-slate-100'}`}>
                        {filteredCourts.map((c, i) => (
                          <div key={i} className={`p-6 flex justify-between items-center gap-4 group transition-colors ${isHighContrast ? 'bg-black text-white hover:bg-zinc-900' : 'bg-white text-slate-900 hover:bg-slate-50'}`}>
                            <span className={`text-[10px] sm:text-xs font-black uppercase tracking-[0.1em] transition-colors ${isHighContrast ? 'text-slate-400' : 'text-slate-400 group-hover:text-blue-500'}`}>{c.court}</span>
                            <span className="text-sm sm:text-base font-black text-right tracking-tight">{c.chairman}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={`p-12 text-center rounded-3xl border-2 border-dashed ${isHighContrast ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500 bg-slate-50'}`}>
                      <Search className="w-8 h-8 mx-auto mb-4 opacity-30" />
                      <p className="font-bold">{lang === 'ms' ? 'Tiada Padanan Ditemui' : 'No Matches Found'}</p>
                      <p className="text-sm mt-1">{lang === 'ms' ? `Tiada rekod mahkamah untuk "${searchQuery}"` : `No judges or courts match "${searchQuery}"`}</p>
                    </div>
                  );
                })()}

                <div className="mt-10 text-center">
                  <p className={`text-xs font-black uppercase tracking-[0.15em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                    {lang === 'ms' ? 'Jumlah Keseluruhan: 22 Mahkamah Perusahaan di Malaysia' : 'Total: 22 Industrial Courts across Malaysia'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <SectionHeader title={t.sections.history} id="history" />
              <p className={`text-lg leading-relaxed ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
                {t.history.desc}
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="relative">
                <div className={`absolute left-[11px] top-0 bottom-0 w-0.5 ${isHighContrast ? 'bg-slate-700' : 'bg-slate-100'}`} />
                <div className="space-y-16">
                  {t.history.milestones.map((m, i) => (
                    <div key={i} className="relative pl-12 group">
                      <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 duration-300 z-10 ${isHighContrast ? 'bg-white' : 'bg-blue-600'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${isHighContrast ? 'bg-black' : 'bg-white'}`} />
                      </div>
                      <span className={`text-3xl font-black mb-3 block tracking-tighter ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{m.year}</span>
                      <p className={`text-lg font-medium leading-relaxed ${isHighContrast ? 'text-slate-400' : 'text-slate-600'}`}>{m.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </main>
  );
}
