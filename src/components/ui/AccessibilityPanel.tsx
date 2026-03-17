"use client";

import React from 'react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import {
    Accessibility, ZoomIn, ZoomOut, RotateCcw, X,
    MoveHorizontal, FoldHorizontal, Contrast, Droplet,
    Underline, MousePointer2, AlignJustify, Volume2, Mic
} from 'lucide-react';

export default function AccessibilityPanel() {
    const {
        lang, isWcagOpen, setIsWcagOpen,
        textSize, setTextSize,
        wcagStates, toggleWcagState, setWcagState, resetWcag
    } = useAppStore();

    const currentLang = t[lang];
    const isHighContrast = wcagStates.highContrast;

    const handleZoomIn = () => setTextSize((prev) => Math.min(prev + 10, 130));
    const handleZoomOut = () => setTextSize((prev) => Math.max(prev - 10, 90));

    const wcagOptions = [
        { icon: ZoomIn, label: 'Increase Text Size', action: handleZoomIn, active: false },
        { icon: ZoomOut, label: 'Decrease Text Size', action: handleZoomOut, active: false },
        { icon: MoveHorizontal, label: 'Increase Text Spacing', action: () => toggleWcagState('textSpacing'), active: wcagStates.textSpacing },
        { icon: FoldHorizontal, label: 'Decrease Text Spacing', action: () => setWcagState('textSpacing', false), active: !wcagStates.textSpacing && textSize === 100 },
        { icon: Contrast, label: 'High Contrast Colours', action: () => toggleWcagState('highContrast'), active: isHighContrast },
        { icon: Contrast, label: 'Invert Colours', action: () => toggleWcagState('invert'), active: wcagStates.invert },
        { icon: Droplet, label: 'Grey Hues', action: () => toggleWcagState('greyHues'), active: wcagStates.greyHues },
        { icon: Underline, label: 'Underline Links', action: () => toggleWcagState('underline'), active: wcagStates.underline },
        { icon: MousePointer2, label: 'Big Cursor', action: () => toggleWcagState('bigCursor'), active: wcagStates.bigCursor },
        { icon: AlignJustify, label: 'Reading Guide', action: () => toggleWcagState('readingGuide'), active: wcagStates.readingGuide },
        { icon: Volume2, label: 'Text to Speech', action: () => toggleWcagState('tts'), active: wcagStates.tts },
        { icon: Mic, label: 'Speech to Text', action: () => toggleWcagState('stt'), active: wcagStates.stt },
    ];

    return (
        <>
            {/* Stick Button */}
            <button
                onClick={() => setIsWcagOpen(true)}
                className={`fixed right-0 top-1/4 sm:top-1/3 z-[90] py-3 px-1.5 sm:py-4 sm:px-2 rounded-l-xl shadow-2xl transition-transform duration-300 hover:-translate-x-1 flex flex-col items-center gap-2 sm:gap-3 border border-r-0 ${isHighContrast ? 'bg-black border-white text-white' : 'bg-blue-600 border-blue-500 text-white'}`}
                aria-label="Accessibility Tools"
            >
                <Accessibility className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-[95] bg-zinc-950/20 backdrop-blur-sm transition-opacity duration-300 ${isWcagOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsWcagOpen(false)}
            />

            {/* Slide-over panel */}
            <div className={`fixed top-0 right-0 z-[100] h-full w-full sm:w-[400px] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isWcagOpen ? 'translate-x-0' : 'translate-x-full'} ${isHighContrast ? 'bg-black border-l-2 border-white text-white' : 'bg-white text-zinc-900'}`}>
                <div className={`flex justify-between items-center p-6 border-b ${isHighContrast ? 'border-white' : 'border-zinc-100'}`}>
                    <h2 className="text-h3 flex items-center gap-3">
                        <Accessibility className={`w-6 h-6 ${isHighContrast ? 'text-white' : 'text-blue-600'}`} />
                        {currentLang.a11yTitle}
                    </h2>
                    <div className="flex items-center gap-2">
                        <button onClick={resetWcag} className={`p-2 rounded-full transition-colors ${isHighContrast ? 'hover:bg-zinc-800' : 'text-zinc-500 hover:text-blue-600 hover:bg-blue-50'}`} title="Reset All">
                            <RotateCcw className="w-5 h-5" />
                        </button>
                        <button onClick={() => setIsWcagOpen(false)} className={`p-2 rounded-full transition-colors ${isHighContrast ? 'hover:bg-zinc-800 text-red-400' : 'text-zinc-500 hover:text-red-500 hover:bg-red-50'}`}>
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className={`flex-1 overflow-y-auto p-6 space-y-3 hide-scrollbar ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
                    {wcagOptions.map((opt, i) => {
                        const Icon = opt.icon;
                        return (
                            <button
                                key={i}
                                onClick={opt.action}
                                className={`w-full flex items-center px-5 py-3.5 border rounded-2xl transition-all duration-200 ${opt.active
                                    ? (isHighContrast ? 'bg-white text-black border-white' : 'bg-blue-600 text-white border-blue-600 shadow-md')
                                    : (isHighContrast ? 'bg-black text-white border-zinc-700 hover:border-white' : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50')
                                    }`}
                            >
                                <Icon className={`w-5 h-5 mr-4 flex-shrink-0 transition-colors ${opt.active ? (isHighContrast ? 'text-black' : 'text-white') : 'text-zinc-500'}`} strokeWidth={1.5} />
                                <span className="text-body-md font-medium">{opt.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
