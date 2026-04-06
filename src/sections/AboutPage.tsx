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
  X,
  UsersRound,
  Gavel
} from 'lucide-react';

export default function AboutPage() {
  const { lang, wcagStates, setCurrentView } = useAppStore();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);
  const isHighContrast = wcagStates.highContrast;

  const historyImages = [
    '/images/history/1967.png',
    '/images/history/1977.png',
    '/images/history/present.jpg',
    'https://fareezlaw.com/wp-content/uploads/2023/08/Industrial_Court_Merdeka_Square_Kuala_Lumpur-2048x1529.jpeg.webp',
  ];

  const content = {
    en: {
      title: 'About Us',
      subtitle: 'Our Profile',
      intro: 'The Industrial Court of Malaysia was established under the Industrial Relations Act 1967. Our primary objective is to arbitrate and resolve trade disputes, unfair dismissal claims, and cases related to collective agreements securely, efficiently, and equitably.',

      sections: {
        mission: 'Mission & Vision',
        values: 'Core Values',
        people: 'Top Management',
        history: 'Our History',
        functions: 'Functions & Roles',
        charter: "Client's Charter"
      },

      mission: {
        vTitle: 'Vision',
        vDesc: 'To be a leading organization in promoting industrial harmony.',
        mTitle: 'Mission',
        mDesc: 'To uphold social justice and maintain industrial harmony through expeditious court awards and collective agreements.',
        fTitle: 'Function',
        fDesc: 'To hear and decide on industrial disputes, and to grant cognizance to collective agreements deposited by employers and trade unions.',
        oTitle: 'Objective',
        oDesc: 'To create a harmonious industrial environment through the process of arbitration pursuant to the Industrial Relations Act 1967.'
      },

      values: [
        { name: 'Justice', desc: 'Promoting fairness in process and excellence in service.', icon: <Scale className="w-5 h-5" /> },
        { name: 'Integrity', desc: 'Operating with transparency, honesty, and ethical standards.', icon: <ShieldCheck className="w-5 h-5" /> },
        { name: 'Service Excellence', desc: 'Committed to high-quality judicial and administrative services.', icon: <Award className="w-5 h-5" /> },
        { name: 'Innovation', desc: 'Fostering creativity through digital transformation and modernization.', icon: <Zap className="w-5 h-5" /> },
        { name: 'Unity', desc: 'Working collaboratively to achieve national industrial harmony.', icon: <Users className="w-5 h-5" /> }
      ],

      leadership: {
        president: {
          name: "Dato' Wan Jeffry bin Kassim",
          tel: "03-9236 5000",
          email: "mpm@mohr.gov.my"
        },
        registrar: {
          name: "Encik Bashah bin Bachik",
          tel: "03-9236 5043",
          email: "bashah@mohr.gov.my"
        }
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
      },
      charts: {
        mpm: 'MPM Organization Chart',
        management: 'Management and PTJ MPM Chart'
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
        mDesc: 'Menegakkan keadilan sosial dan mengekalkan keharmonian industri melalui award mahkamah dan perjanjian kolektif yang pantas.',
        fTitle: 'Fungsi',
        fDesc: 'Mendengar dan memutuskan pertikaian perusahaan yang dirujuk oleh Menteri atau pihak-pihak terlibat, serta memberi pengiktirafan kepada perjanjian kolektif yang didepositkan bersama oleh majikan dan kesatuan sekerja.',
        oTitle: 'Objektif',
        oDesc: 'Mewujudkan persekitaran perindustrian yang harmoni melalui proses timbang tara menurut Akta Perhubungan Perusahaan 1967.'
      },

      values: [
        { name: 'Keadilan', desc: 'Mempromosikan keadilan dalam proses dan kecemerlangan dalam perkhidmatan.', icon: <Scale className="w-5 h-5" /> },
        { name: 'Integriti', desc: 'Beroperasi dengan ketelusan, kejujuran, dan piawaian etika.', icon: <ShieldCheck className="w-5 h-5" /> },
        { name: 'Kecemerlangan Perkhidmatan', desc: 'Komited terhadap perkhidmatan kehakiman dan pentadbiran berkualiti tinggi.', icon: <Award className="w-5 h-5" /> },
        { name: 'Inovasi', desc: 'Memupuk kreativiti melalui transformasi digital dan pemodenan.', icon: <Zap className="w-5 h-5" /> },
        { name: 'Perpaduan', desc: 'Bekerja secara kolaboratif untuk mencapai keharmonian industri negara.', icon: <Users className="w-5 h-5" /> }
      ],

      leadership: {
        president: {
          name: "Dato' Wan Jeffry bin Kassim",
          tel: "03-9236 5000",
          email: "mpm@mohr.gov.my"
        },
        registrar: {
          name: "Encik Bashah bin Bachik",
          tel: "03-9236 5043",
          email: "bashah@mohr.gov.my"
        }
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
      },
      charts: {
        mpm: 'Carta MPM',
        management: 'Carta Pengurusan dan PTJ MPM'
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-slate-100">

        {/* Vision, Mission, Function & Objective (4 Column Row) */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vision */}
            <div className={`group relative p-8 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Scale className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Scale className="w-8 h-8" />
              </div>
              <div className="relative z-10 w-full">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.vTitle}</h4>
                <p className={`text-[15px] leading-relaxed font-medium text-left ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.vDesc}</p>
              </div>
            </div>

            {/* Mission */}
            <div className={`group relative p-8 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Target className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Target className="w-8 h-8" />
              </div>
              <div className="relative z-10 w-full">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.mTitle}</h4>
                <p className={`text-[15px] leading-relaxed font-medium text-left ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.mDesc}</p>
              </div>
            </div>

            {/* Function */}
            <div className={`group relative p-8 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <Gavel className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Gavel className="w-8 h-8" />
              </div>
              <div className="relative z-10 w-full">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.fTitle}</h4>
                <p className={`text-[15px] leading-relaxed font-medium text-left ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.fDesc}</p>
              </div>
            </div>

            {/* Objective */}
            <div className={`group relative p-8 rounded-[2.5rem] border flex flex-col items-start gap-8 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              {!isHighContrast && (
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                  <CheckCircle2 className="w-48 h-48 -rotate-12" />
                </div>
              )}
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="relative z-10 w-full">
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.oTitle}</h4>
                <p className={`text-[15px] leading-relaxed font-medium text-left ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.oDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Management / Hierarchy */}
        <section className="py-20 sm:py-28">
          <SectionHeader title={t.sections.people} />
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-8">
              {/* Top Management Tree */}
              <div className="flex flex-col items-center w-full relative">
                {/* President */}
                <div className={`relative z-10 w-full max-w-md p-8 rounded-[2.5rem] border-2 text-center transition-all hover:-translate-y-1 hover:shadow-2xl ${isHighContrast ? 'bg-white text-black border-white font-bold' : 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/20'}`}>
                  <div className={`w-16 h-16 mx-auto rounded-full overflow-hidden mb-6 border-2 flex-shrink-0 ${isHighContrast ? 'border-white' : 'border-white/20 shadow-md'}`}>
                    <img
                      src="https://www.mp.gov.my/images/topmanagement_photo/wan.jpg"
                      alt={t.leadership.president.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-3">{lang === 'ms' ? 'Presiden' : 'President'}</h4>
                  <h3 className="text-2xl font-black tracking-tight leading-tight mb-4">{t.leadership.president.name}</h3>
                  <div className="flex flex-col items-center gap-1 text-sm text-white/70 mt-2 font-medium">
                    <p>Tel: {t.leadership.president.tel}</p>
                    <p>E-mel: {t.leadership.president.email}</p>
                  </div>
                </div>

                {/* Vertical Line Connecting */}
                <div className={`w-0.5 h-12 ${isHighContrast ? 'bg-white' : 'bg-slate-200'}`}></div>

                {/* Registrar */}
                <div className={`relative z-10 w-full max-w-md p-8 rounded-[2.5rem] border-2 text-center transition-all hover:-translate-y-1 hover:shadow-xl ${isHighContrast ? 'bg-black text-white border-white' : 'bg-white text-slate-900 border-slate-200 shadow-sm'}`}>
                  <div className={`w-16 h-16 mx-auto rounded-full overflow-hidden mb-6 border-2 flex-shrink-0 transition-all ${isHighContrast ? 'border-white' : 'border-slate-200 group-hover:border-blue-200 shadow-sm'}`}>
                    <img
                      src="https://www.mp.gov.my/images/topmanagement_photo/bashah.jpg"
                      alt={t.leadership.registrar.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isHighContrast ? 'text-white/40' : 'text-slate-400'}`}>{lang === 'ms' ? 'Pendaftar' : 'Registrar'}</h4>
                  <h3 className="text-2xl font-black tracking-tight leading-tight mb-4">{t.leadership.registrar.name}</h3>
                  <div className={`flex flex-col items-center gap-1 text-sm mt-2 font-medium ${isHighContrast ? 'text-slate-400' : 'text-slate-500'}`}>
                    <p>Tel: {t.leadership.registrar.tel}</p>
                    <p>E-mel: {t.leadership.registrar.email}</p>
                  </div>
                </div>

                {/* Connecting Line Downwards */}
                <div className={`w-0.5 h-16 ${isHighContrast ? 'bg-white' : 'bg-slate-200'}`}></div>
              </div>

              {/* Regional Chairmen Title */}
              <div className="w-full -mt-4">
                <h4 className={`text-[10px] font-black mb-8 text-center uppercase tracking-[0.3em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                  {lang === 'ms' ? 'Pengerusi Wilayah' : 'Regional Chairmen'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                  {[
                    { loc: 'Johor', name: 'Y.A. Tengku Amir Zaki bin Tengku Abdul Rahman', registrar: 'Puan Aniza binti Abd. Rahim', tel: '07-227 2534', img: 'https://www.mp.gov.my/images/topmanagement_photo/tengkuamir.jpg' },
                    { loc: 'Penang', name: 'Y.A. Puan Rusita binti Md Lazim', registrar: 'Pn. Salasiah binti Suraka', tel: '04-323 1363', img: 'https://www.mp.gov.my/images/topmanagement_photo/rosita.png' },
                    { loc: 'Perak', name: 'Y.A. Puan D.Sunita Kaur Jessy', registrar: 'Encik Zainarulzairi Bin Annuar', tel: '05-243 7592', img: 'https://www.mp.gov.my/images/2026/02/04/y.a.-puan-sunita.png' },
                    { loc: 'Sabah', name: 'Y.A. Datuk Indra bin Haji Ayub', registrar: 'Puan Alice Gervasius @ Alice Cowboy', tel: '088-259 490', img: 'https://www.mp.gov.my/images/topmanagement_photo/indra.jpg' },
                    { loc: 'Sarawak', name: 'Y.A. Tuan Mohd Taufik bin Mohd Yusoff', registrar: 'Puan Doris Anak Rakey', tel: '082-240 101', img: 'https://www.mp.gov.my/images/topmanagement_photo/taufik.jpg' }
                  ].map((r, i) => (
                    <div key={i} className={`relative group flex flex-col p-8 rounded-[2rem] border transition-all hover:-translate-y-1 hover:shadow-lg ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'} ${i < 2 ? 'md:col-span-1 lg:col-span-3' : 'lg:col-span-2'
                      } ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                      }`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 transition-colors ${isHighContrast ? 'border-white' : 'border-slate-100 group-hover:border-blue-100 shadow-sm'}`}>
                          <img
                            src={r.img}
                            alt={r.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className={`text-[10px] font-black uppercase tracking-[0.2em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>{r.loc}</h5>
                          <h6 className={`text-xs font-bold mt-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{lang === 'ms' ? 'Pengerusi' : 'Chairman'}</h6>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className={`text-base leading-tight font-bold tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{r.name}</p>
                        </div>
                        <div className="pt-4 border-t border-slate-100">
                          <h6 className={`text-[10px] font-black uppercase tracking-[0.1em] mb-1 ${isHighContrast ? 'text-slate-500' : 'text-slate-400'}`}>{lang === 'ms' ? 'Penolong Pendaftar' : 'Assistant Registrar'}</h6>
                          <p className={`text-sm font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{r.registrar}</p>
                        </div>
                        <div className="pt-2">
                          <p className={`text-xs font-semibold ${isHighContrast ? 'text-slate-400' : 'text-slate-500'}`}>Tel: {r.tel}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizational Charts */}
              <div className="w-full pt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
                <a
                  href="https://www.mp.gov.my/images/organizationchart/CARTA%20MPM.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-lg ${isHighContrast ? 'bg-transparent text-white border-2 border-white hover:bg-white/10' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'}`}
                >
                  <UsersRound className="w-5 h-5" />
                  {t.charts.mpm}
                </a>
                <a
                  href="https://www.mp.gov.my/images/organizationchart/2CARTA%20PENGURUSAN%20DAN%20PTJ%20MPM.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-lg ${isHighContrast ? 'bg-transparent text-white border-2 border-white hover:bg-white/10' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'}`}
                >
                  <UsersRound className="w-5 h-5" />
                  {t.charts.management}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* History Section - Scrollytelling format */}
        <section className="py-20 sm:py-28 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">

            {/* Left Column: Explainer and Sticky Image Viewer */}
            <div className="flex flex-col h-full gap-8">
              <div className="pr-0 sm:pr-8">
                <h2 className={`text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1] ${isHighContrast ? 'text-white' : 'text-[#0f172a]'}`}>
                  {t.sections.history.split(' ').map((word: string, i: number) =>
                    word === '&' ? <span key={i}><br />&<br /></span> : <span key={i}>{word} </span>
                  )}
                </h2>
                <p className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-500'}`}>
                  {t.history.desc}
                </p>
              </div>

              <div className={`relative w-full aspect-video lg:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 bg-slate-100 ${isHighContrast ? 'border-2 border-white' : ''}`}>
                {t.history.milestones.map((_: any, i: number) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeHistoryIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{
                      backgroundImage: `url('${historyImages[i % historyImages.length]}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {!isHighContrast && <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Timeline */}
            <div className="pl-4 sm:pl-10">
              <div className={`relative border-l-2 ${isHighContrast ? 'border-zinc-800' : 'border-blue-50/80'}`}>
                <div className="space-y-10 sm:space-y-12 pb-4">
                  {t.history.milestones.map((m: any, i: number) => {
                    const isActive = activeHistoryIndex === i;
                    return (
                      <div
                        key={i}
                        className={`relative pl-10 sm:pl-12 group cursor-pointer transition-all duration-300 ${isActive ? '' : 'opacity-70 hover:opacity-100'}`}
                        onMouseEnter={() => setActiveHistoryIndex(i)}
                        onClick={() => setActiveHistoryIndex(i)}
                      >
                        <div className={`absolute left-[-11px] top-1.5 w-5 h-5 rounded-full border-[5px] flex items-center justify-center transition-all duration-500 z-10 ${isHighContrast ? (isActive ? 'border-white bg-white' : 'border-white bg-black') : (isActive ? 'border-blue-600 bg-white ring-4 ring-blue-100 scale-125' : 'border-slate-200 bg-white shadow-sm ring-4 ring-white group-hover:border-blue-300')}`} />
                        <div className={`transition-all duration-300 ${isActive ? 'translate-x-2' : 'group-hover:translate-x-1'}`}>
                          <span className={`text-2xl font-black mb-2 block tracking-tight transition-colors duration-300 ${isActive ? (isHighContrast ? 'text-white' : 'text-blue-600') : (isHighContrast ? 'text-slate-400' : 'text-[#0f172a]')}`}>
                            {m.year}
                          </span>
                          <p className={`text-[15.5px] font-medium leading-relaxed transition-colors duration-300 ${isActive ? (isHighContrast ? 'text-slate-200' : 'text-slate-700') : (isHighContrast ? 'text-slate-500' : 'text-slate-500')}`}>
                            {m.event}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </section>


      </div>
    </main>
  );
}
