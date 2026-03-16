"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';

export default function AboutPage() {
  const { lang, wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;
  
  const t = {
    en: {
      about: 'About Us',
      desc: 'The Industrial Court of Malaysia was established under the Industrial Relations Act 1967. Our primary objective is to arbitrate and resolve trade disputes, unfair dismissal claims, and cases related to collective agreements securely, efficiently, and equitably.',
      missionTitle: 'Our Mission',
      missionDesc: 'To uphold industrial harmony through swift, fair, and transparent adjudication of employment disputes, ensuring justice for both employers and employees across Malaysia via continuous digital modernization.'
    },
    ms: {
      about: 'Mengenai Kami',
      desc: 'Mahkamah Perusahaan Malaysia ditubuhkan di bawah Akta Perhubungan Perusahaan 1967. Objektif utama kami adalah untuk menimbang tara dan menyelesaikan pertikaian perdagangan, tuntutan pemecatan tidak adil, dan kes-kes yang berkaitan dengan perjanjian kolektif secara selamat, cekap, dan saksama.',
      missionTitle: 'Misi Kami',
      missionDesc: 'Untuk mengekalkan keharmonian industri melalui adjudikasi pertikaian pekerjaan yang pantas, adil, dan telus, memastikan keadilan bagi majikan dan pekerja di seluruh Malaysia melalui pemodenan digital yang berterusan.'
    }
  };

  const currentLang = t[lang] || t.en;

  return (
    <main className="flex-1 relative z-10 py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
          {currentLang.about}
        </h1>
        <div className={`p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}>
          <p className={`text-lg sm:text-xl leading-relaxed font-medium mb-6 ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
            {currentLang.desc}
          </p>
          <div className={`h-px w-full my-8 ${isHighContrast ? 'bg-slate-800' : 'bg-slate-100'}`} />
          <h3 className={`text-2xl font-extrabold mb-4 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.missionTitle}</h3>
          <p className={`text-base sm:text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
            {currentLang.missionDesc}
          </p>
        </div>
      </div>
    </main>
  );
}
