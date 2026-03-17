"use client";

import React from 'react';
import { MapPin } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export default function ContactPage() {
  const { lang, wcagStates } = useAppStore();
  const isHighContrast = wcagStates.highContrast;
  
  const t = {
    en: {
      contact: 'Contact',
      hqTitle: 'Headquarters Address',
      hqAddr: 'Mahkamah Perusahaan Malaysia,\nWisma Perkeso, Jalan Tun Razak,\n50400 Kuala Lumpur',
      enquiryTitle: 'General Enquiries',
      mapTitle: 'Interactive Map'
    },
    ms: {
      contact: 'Hubungi Kami',
      hqTitle: 'Alamat Ibu Pejabat',
      hqAddr: 'Mahkamah Perusahaan Malaysia,\nWisma Perkeso, Jalan Tun Razak,\n50400 Kuala Lumpur',
      enquiryTitle: 'Pertanyaan Am',
      mapTitle: 'Peta Interaktif'
    }
  };

  const currentLang = t[lang] || t.en;

  return (
    <main className="flex-1 relative z-10 py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-h1 mb-8 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
          {currentLang.contact}
        </h1>
        <div className={`p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border flex flex-col md:flex-row gap-12 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}>
          <div className="flex-1 space-y-8">
            <div>
              <h3 className={`text-ui-label font-bold uppercase mb-2 ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>{currentLang.hqTitle}</h3>
              <p className={`text-h3 font-bold leading-tight whitespace-pre-line ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
                {currentLang.hqAddr}
              </p>
            </div>
            <div>
              <h3 className={`text-ui-label font-bold uppercase mb-2 ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>{currentLang.enquiryTitle}</h3>
              <p className={`text-body-lg font-bold text-blue-600`}>eicsupport@mohr.gov.my</p>
              <p className={`text-body-lg font-bold mt-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>+603-9236 5056</p>
            </div>
          </div>
          <div className="flex-1">
            <div className={`w-full h-full min-h-[250px] rounded-2xl flex flex-col items-center justify-center border-2 border-dashed ${isHighContrast ? 'border-slate-800 bg-slate-900/50 text-slate-500' : 'border-slate-200 bg-slate-50 text-slate-400'}`}>
              <MapPin className="w-12 h-12 mb-4 opacity-50" />
              <span className="text-body-sm font-bold">{currentLang.mapTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
