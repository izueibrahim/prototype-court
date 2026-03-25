"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { ChevronRight } from 'lucide-react';

const industryTags = [
    { name: 'Perkhidmatan Awam & PBT' },
    { name: 'Perbankan, Kewangan & Insurans' },
    { name: 'Hartanah & Tanah' },
    { name: 'Pengangkutan & Pos' },
    { name: 'Perubatan & Kesihatan' },
    { name: 'Perkilangan Elektrik & Elektronik' },
    { name: 'Perhotelan & Restoran' },
    { name: 'Perladangan & Pertanian' },
    { name: 'Perkhidmatan Air, Tenaga & Telekomunikasi' },
];

const featuredColumns = [
    {
        title: 'Sabitan Popular',
        cases: [
            { id: '1/1-1522/25', parties: 'Aminah binti Abu vs Syarikat ABC Sdn Bhd', type: 'Pembuangan Kerja - 12 Jun 2024' },
            { id: '1/1-1079/25', parties: 'Zaman Holdings vs Sengketa Peniaga', type: 'Pertikaian Perdagangan - 15 Ogos 2024' },
            { id: '2/1-1522/25', parties: 'Ahmad bin Yasin vs Majikan ABC', type: 'Pembuangan Kerja - 12 Jun 2024' }
        ]
    },
    {
        title: 'Tumpuan Minggu Ini',
        cases: [
            { id: '3/1-1522/25', parties: 'Ahmad bin Ali vs Majikan X', type: 'Pembuangan Kerja - 12 Jun 2024' },
            { id: '1/2-1079/25', parties: 'Kesatuan Pekerja vs Syarikat Y', type: 'Pertikaian Perusahaan - 15 Ogos 2024' },
            { id: '4/1-1522/25', parties: 'Muthu Samy vs Majikan Z', type: 'Pembuangan Kerja - 12 Jun 2024' }
        ]
    },
    {
        title: 'Kes Mengikut Industri',
        cases: [
            { id: '1/3-1522/25', parties: 'Kilang ABC vs Syarikat XYZ', type: 'Pertikaian Syarikat - 12 Jun 2024' },
            { id: '1/1-2079/25', parties: 'Hotel DEF vs Kesatuan Pekerja', type: 'Pelanggaran Kontrak - 15 Ogos 2024' },
            { id: '2/1-4522/25', parties: 'Pekerja Asing vs Ladang Sawit', type: 'Pembuangan Kerja - 12 Jun 2024' }
        ]
    }
];

export default function FeaturedCasesSection() {
    const { wcagStates } = useAppStore();
    const isHighContrast = wcagStates.highContrast;

    return (
        <section className={`pt-12 pb-8 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Industry Tags */}
                <div className="mb-20">
                    <h2 className={`text-h2 mb-5 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        Terokai kes mengikut industri
                    </h2>

                    <div className="flex flex-wrap gap-2">
                        {industryTags.map((tag, idx) => (
                            <button
                                key={idx}
                                className={`flex items-center px-5 py-2 rounded-xl transition-all text-body-sm font-bold ${isHighContrast
                                    ? 'border border-white text-white bg-black hover:bg-white hover:text-black'
                                    : 'border border-blue-100 text-blue-600 bg-blue-50'
                                    }`}
                            >
                                {tag.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Focused Cases */}
                <div>
                    <h2 className={`text-h2 mb-8 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        Kes Dalam Tumpuan
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {featuredColumns.map((col, idx) => (
                            <div key={idx} className={`rounded-3xl sm:rounded-[2rem] ${isHighContrast ? 'bg-white' : 'bg-white'}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className={`text-ui-label font-bold uppercase tracking-widest ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                        {col.title}
                                    </h3>
                                    <ChevronRight className={`w-4 h-4 ${isHighContrast ? 'text-zinc-600' : 'text-zinc-400'}`} />
                                </div>

                                <div className="space-y-3">
                                    {col.cases.map((item, i) => (
                                        <div key={i} className={`p-4 rounded-2xl border transition-all hover:shadow-premium hover:-translate-y-1 cursor-pointer flex flex-col justify-center h-[120px] ${isHighContrast ? 'bg-black border-zinc-800 hover:border-white' : 'bg-white border-zinc-100 hover:border-blue-300'}`}>
                                            <div className={`text-[10px] font-bold mb-1 uppercase tracking-wider ${isHighContrast ? 'text-zinc-400' : 'text-blue-600'}`}>
                                                {item.id}
                                            </div>
                                            <h4 className={`text-body-sm font-bold leading-tight mb-1 line-clamp-2 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                                {item.parties}
                                            </h4>
                                            <p className={`text-[11px] ${isHighContrast ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                                {item.type}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
