"use client";

import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessibilityPanel from '@/components/ui/AccessibilityPanel';
import HeroSection from '@/sections/HeroSection';
import QuickLinksSection from '@/sections/QuickLinksSection';
import EServicesDirectory from '@/sections/EServicesDirectory';
import HearingsSchedule from '@/sections/HearingsSchedule';
import LoginSection from '@/sections/LoginSection';
import FullSchedule from '@/sections/FullSchedule';
import SearchPage from '@/sections/SearchPage';
import CaseDetailsSection from '@/sections/CaseDetailsSection';

export default function Home() {
  const { currentView, textSize, wcagStates, isWcagOpen } = useAppStore();

  const isHighContrast = wcagStates.highContrast;
  const tBg = isHighContrast ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900';

  const a11yClasses = `
    ${wcagStates.invert ? 'invert' : ''} 
    ${wcagStates.greyHues ? 'grayscale' : ''} 
    ${wcagStates.textSpacing ? 'tracking-widest' : ''} 
    ${wcagStates.bigCursor ? 'cursor-[url(https://cdn-icons-png.flaticon.com/512/32/32543.png),_auto]' : ''} 
  `;

  // For dynamic reading guide overlay
  useEffect(() => {
    if (wcagStates.readingGuide) {
      document.body.classList.add('a11y-reading-guide');
    } else {
      document.body.classList.remove('a11y-reading-guide');
    }

    if (wcagStates.underline) {
      document.body.classList.add('a11y-underline');
    } else {
      document.body.classList.remove('a11y-underline');
    }
  }, [wcagStates.readingGuide, wcagStates.underline]);

  return (
    <div
      className={`min-h-screen font-sans transition-all duration-300 overflow-x-hidden ${tBg} ${a11yClasses}`}
      style={{ fontSize: `${textSize}%` }}
    >
      <AccessibilityPanel />

      {currentView === 'login' ? (
        <LoginSection />
      ) : currentView === 'schedule' ? (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <FullSchedule />
          <Footer />
        </div>
      ) : currentView === 'search' ? (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <SearchPage />
          <Footer />
        </div>
      ) : currentView === 'case-details' ? (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <CaseDetailsSection />
          <Footer />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <QuickLinksSection />
          <EServicesDirectory />
          <HearingsSchedule />
          <Footer />
        </>
      )}
    </div>
  );
}
