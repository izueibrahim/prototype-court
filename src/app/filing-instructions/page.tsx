"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessibilityPanel from '@/components/ui/AccessibilityPanel';
import FilingInstructionsSection from '@/sections/FilingInstructionsSection';
import { useAppStore } from '@/lib/store';

export default function FilingInstructionsPage() {
    const { textSize, wcagStates } = useAppStore();
    const isHighContrast = wcagStates.highContrast;
    const tBg = isHighContrast ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900';

    const a11yClasses = `
        ${wcagStates.invert ? 'invert' : ''} 
        ${wcagStates.greyHues ? 'grayscale' : ''} 
        ${wcagStates.textSpacing ? 'tracking-widest' : ''} 
        ${wcagStates.bigCursor ? 'cursor-[url(https://cdn-icons-png.flaticon.com/512/32/32543.png),_auto]' : ''} 
    `;

    return (
        <div 
            className={`min-h-screen font-sans transition-all duration-300 overflow-x-hidden ${tBg} ${a11yClasses}`}
            style={{ fontSize: `${textSize}%` }}
        >
            <AccessibilityPanel />
            <Navbar />
            <FilingInstructionsSection />
            <Footer />
        </div>
    );
}
