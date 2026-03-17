"use client";

import React from 'react';
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
  Flag
} from 'lucide-react';

export default function AboutPage() {
  const { lang, wcagStates } = useAppStore();
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

  const SectionHeader = ({ title, id }: { title: string, id?: string }) => (
    <div id={id} className="flex flex-col mb-8">
      <h2 className={`text-4xl sm:text-5xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  );

  return (
    <main className={`flex-1 relative z-10 min-h-screen ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className={`py-20 sm:py-32 ${isHighContrast ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${isHighContrast ? 'bg-white text-black' : 'bg-slate-900 text-white'}`}>
              {t.subtitle}
            </span>
            <h1 className={`text-6xl sm:text-7xl font-black tracking-tighter mb-8 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </h1>
            <p className={`text-xl sm:text-2xl leading-relaxed font-medium tracking-tight ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
              {t.intro}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 divide-y divide-slate-100">

        {/* Vision, Mission & Client's Charter (Triple Column Row) */}
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <div className={`p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Eye className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.vTitle}</h4>
                <p className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.vDesc}</p>
              </div>
            </div>

            {/* Mission */}
            <div className={`p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <Flag className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`text-2xl font-black mb-4 ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>{t.mission.mTitle}</h4>
                <p className={`text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{t.mission.mDesc}</p>
              </div>
            </div>

            {/* Client's Charter */}
            <div className={`p-10 rounded-[2.5rem] border flex flex-col items-start gap-8 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className={`flex-shrink-0 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'}`}>
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
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
        <section className="py-16 sm:py-24">
          <SectionHeader title={t.sections.people} />
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-8">
              {/* Top Management */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className={`p-8 rounded-3xl border-2 text-center transition-all hover:border-slate-400 ${isHighContrast ? 'bg-white text-black border-white font-bold' : 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-900/10'}`}>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">{lang === 'ms' ? 'Presiden' : 'President'}</h4>
                  <h3 className="text-2xl font-black tracking-tight">{t.leadership.president}</h3>
                </div>
                <div className={`p-8 rounded-3xl border text-center transition-all hover:border-slate-300 ${isHighContrast ? 'bg-black text-white border-white' : 'bg-white text-slate-900 border-slate-200'}`}>
                  <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${isHighContrast ? 'text-white/40' : 'text-slate-400'}`}>{lang === 'ms' ? 'Pendaftar' : 'Registrar'}</h4>
                  <h3 className="text-2xl font-black tracking-tight">{t.leadership.registrar}</h3>
                </div>
              </div>

              {/* Regional Chairmen Title */}
              <div className="w-full pt-8">
                <h4 className={`text-[10px] font-black mb-8 text-center uppercase tracking-[0.3em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                  {lang === 'ms' ? 'Pengerusi Wilayah' : 'Regional Chairmen'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { loc: 'Johor', name: 'Y.A. Tengku Amir Zaki' },
                    { loc: 'Penang', name: 'Y.A. Puan Rusita binti Md Lazim' },
                    { loc: 'Perak', name: 'Y.A. Puan D. Sunita Kaur Jessy' },
                    { loc: 'Sabah', name: 'Y.A. Tuan Indra bin Ayub' },
                    { loc: 'Sarawak', name: 'Y.A. Puan Siti Zaharah binti Suboh' }
                  ].map((r, i) => (
                    <div key={i} className={`p-6 rounded-2xl border text-center transition-all hover:scale-[1.02] ${isHighContrast ? 'bg-slate-900 border-white' : 'bg-slate-50 border-slate-100 shadow-sm'}`}>
                      <h5 className="text-[10px] font-black mb-2 uppercase tracking-[0.2em] opacity-40">{r.loc}</h5>
                      <p className={`text-sm font-bold tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{r.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Courts Directory */}
              <div className="w-full pt-16">
                <h4 className={`text-[10px] font-black mb-10 text-center uppercase tracking-[0.3em] ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>
                  {lang === 'ms' ? 'Direktori Pengerusi Mahkamah' : 'Courts Chairmen Directory'}
                </h4>
                <div className={`rounded-3xl border overflow-hidden ${isHighContrast ? 'border-white' : 'border-slate-100'}`}>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${isHighContrast ? 'bg-white' : 'bg-slate-100'}`}>
                    {[
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
                    ].map((c, i) => (
                      <div key={i} className={`p-6 flex justify-between items-center gap-4 ${isHighContrast ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.1em] text-slate-400">{c.court}</span>
                        <span className="text-sm sm:text-base font-black text-right tracking-tight">{c.chairman}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
