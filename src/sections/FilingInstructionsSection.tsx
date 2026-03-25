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

    const steps = [
        {
            icon: FileText,
            title: "Prepare Your Document",
            description: "Ensure your legal document is in PDF format and does not exceed 20MB. All pages should be clear and legible.",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Upload,
            title: "Upload Document",
            description: "In your dashboard, click 'File New Dispute' or 'Upload Documents' on any active case.",
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        },
        {
            icon: CheckCircle2,
            title: "Verify Information",
            description: "Carefully review all case details and metadata before confirming. Accuracy is critical for court records.",
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        },
        {
            icon: Send,
            title: "Submit for Review",
            description: "Once submitted, your filing will be reviewed by the Registrar. You'll be notified of the status via email.",
            color: "text-amber-500",
            bg: "bg-amber-50"
        }
    ];

    const handleProceed = () => {
        setCurrentView('login');
        router.push('/');
    };

    return (
        <div className={`min-h-screen py-20 px-6 sm:px-10 ${isHighContrast ? 'bg-black' : 'bg-zinc-50'}`}>
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={() => router.push('/')}
                    className={`flex items-center gap-2 mb-12 font-bold transition-colors ${isHighContrast ? 'text-zinc-400 hover:text-white' : 'text-zinc-400 hover:text-blue-600'}`}
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portal
                </button>

                <div className="mb-16 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 justify-center sm:justify-start">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'}`}>
                            <Info className="w-7 h-7" />
                        </div>
                        <h1 className={`text-4xl sm:text-5xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                            Filing Instructions
                        </h1>
                    </div>
                    <p className={`text-xl font-bold max-w-2xl ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Follow these professional guidelines to ensure your legal filings are processed correctly by the Industrial Court.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16`}>
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx} className={`p-8 rounded-[2rem] border transition-all duration-300 group ${isHighContrast ? 'bg-black border-zinc-700 hover:border-white' : 'bg-white border-zinc-100 hover:border-blue-400 hover:shadow-premium'}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${isHighContrast ? 'border-2 border-white text-white' : `${step.bg} ${step.color}`}`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className={`text-2xl font-black mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                                    {idx + 1}. {step.title}
                                </h3>
                                <p className={`text-zinc-500 text-lg font-medium leading-relaxed ${isHighContrast ? 'text-zinc-400' : ''}`}>
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className={`p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-10 ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-3xl shadow-blue-900/30'}`}>
                    <div className="flex items-start gap-5">
                        <div className={`p-3 rounded-2xl ${isHighContrast ? 'bg-black text-white' : 'bg-white/10 backdrop-blur-md'}`}>
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-xl font-black mb-1">Ready to Proceed?</h4>
                            <p className={`font-bold opacity-80 ${isHighContrast ? 'text-zinc-700' : 'text-blue-50'}`}>
                                You'll be taken to the secure login area to start your filing.
                            </p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleProceed}
                        className={`w-full sm:w-auto px-12 py-5 font-black uppercase tracking-[0.2em] text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-3 ${isHighContrast ? 'bg-black text-white hover:bg-zinc-800' : 'bg-white text-blue-600 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1'}`}
                    >
                        Proceed to Filing
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
