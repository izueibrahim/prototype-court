"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import {
    FileText, Upload, CheckCircle2, Send,
    ArrowRight, Info, AlertCircle, ArrowLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function FilingInstructionsSection() {
    const { wcagStates, setCurrentView } = useAppStore();
    const isHighContrast = wcagStates.highContrast;
    const router = useRouter();

    const instructions = [
        {
            icon: FileText,
            title: '1. Prepare Your Document',
            description: 'Ensure your legal document is in PDF format and does not exceed 20MB. All pages should be clear and legible.',
            action: 'Check PDF'
        },
        {
            icon: Upload,
            title: '2. Upload Document',
            description: "In your dashboard, click 'File New Dispute' or 'Upload Documents' on any active case.",
            action: 'Upload Guide'
        },
        {
            icon: CheckCircle2,
            title: '3. Verify Information',
            description: 'Carefully review all case details and metadata before confirming. Accuracy is critical for court records.',
            action: 'Review Tips'
        },
        {
            icon: Send,
            title: '4. Submit for Review',
            description: "Once submitted, your filing will be reviewed by the Registrar. You'll be notified of the status via email.",
            action: 'Track Status'
        }
    ];

    const handleProceed = () => {
        setCurrentView('login');
        router.push('/');
    };

    return (
        <div className={`min-h-screen pt-24 pb-32 px-6 sm:px-10 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 sm:mb-24">

                    <h1 className={`text-h1 mb-6 flex items-center justify-center gap-4 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                        {/* <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-xl shadow-blue-200'}`}>
                            <Info className="w-7 h-7" />
                        </div> */}
                        Filing Instructions
                    </h1>

                    <p className={`text-body-lg max-w-2xl mx-auto font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Follow these professional guidelines to ensure your legal filings are processed correctly by the Industrial Court.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
                    {instructions.map((step, idx) => (
                        <div
                            key={idx}
                            className={`w-full p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem] flex flex-col transition-all duration-500 border group/card ${isHighContrast
                                ? "bg-black border-white hover:bg-zinc-900"
                                : "bg-white border-zinc-100 hover:border-blue-400 hover:shadow-premium"
                                }`}
                        >
                            <div className="flex-1 flex flex-col">
                                <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 group-hover/card:scale-110 group-hover/card:-rotate-3 ${isHighContrast
                                        ? "border-2 border-white text-white"
                                        : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white"
                                        }`}
                                >
                                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 font-black" />
                                </div>
                                <h4
                                    className={`text-h3 mb-4 ${isHighContrast ? "text-white" : "text-zinc-900"}`}
                                >
                                    {step.title}
                                </h4>
                                <p className={`text-body-sm leading-relaxed font-medium ${isHighContrast ? "text-zinc-400" : "text-zinc-500"}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`p-10 sm:p-12 rounded-3xl sm:rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 lg:mx-24 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-3xl shadow-blue-900/30'}`}>
                    <div className="text-center lg:text-left">
                        <h4 className="text-h3 font-black mb-2">Ready to Proceed?</h4>
                        <p className={`text-body-md font-bold opacity-80 ${isHighContrast ? 'text-zinc-700' : 'text-blue-50'}`}>
                            You'll be taken to the secure login area to start your filing.
                        </p>
                    </div>

                    <button
                        onClick={handleProceed}
                        className={`w-full lg:w-auto px-12 py-5 font-black uppercase tracking-[0.2em] text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${isHighContrast ? 'bg-black text-white rounded-3xl hover:bg-zinc-900' : 'bg-white text-blue-600 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1'}`}
                    >
                        Start Filing Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
