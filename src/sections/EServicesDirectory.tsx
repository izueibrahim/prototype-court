"use client";

import React, { useRef, useState } from "react";
import { useAppStore } from "@/lib/store";
import { t } from "@/lib/i18n";
import { allModules } from "@/lib/data";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function EServicesDirectory() {
  const { lang, wcagStates, setCurrentView } = useAppStore();
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentLang = t[lang];
  const isHighContrast = wcagStates.highContrast;
  const tTextSub = isHighContrast ? "text-zinc-300" : "text-zinc-500";

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -344 : 344;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="modules"
      className={`py-16 sm:py-20 [overflow-x:clip] ${isHighContrast ? "" : "bg-zinc-50/50"}`}
    >
      {/* Title & subtitle — constrained */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={`text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight ${isHighContrast ? "text-white" : "text-zinc-900"}`}
          >
            {currentLang.architectureTitle}
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl mx-auto ${tTextSub}`}>
            {currentLang.architectureSub}
          </p>
        </div>

        {/* Tabs — constrained */}
        {currentLang.tabs && currentLang.tabs.length > 1 && (
          <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 pb-2 snap-x w-full">
            {currentLang.tabs.map((tabLabel: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 sm:px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap snap-center transition-all duration-300 ${
                  activeTab === idx
                    ? isHighContrast
                      ? "bg-white text-black"
                      : "bg-zinc-900 text-white shadow-md"
                    : isHighContrast
                      ? "border border-white text-white hover:bg-zinc-800"
                      : "bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 shadow-sm"
                }`}
              >
                {tabLabel}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 
        Carousel — full-bleed (no max-w constraint) so cards are NEVER clipped.
        The scroll track spans the full viewport width with symmetric horizontal padding,
        while the nav arrows float above on top of it via absolute positioning.
      */}
      <div className="relative group/carousel">
        {/* Left nav button */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-6 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 ${
            isHighContrast
              ? "bg-black border border-white text-white hover:bg-white hover:text-black"
              : "bg-white text-zinc-600 hover:text-blue-600 hover:scale-110 border border-zinc-200 shadow-md"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right nav button */}
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-6 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover/carousel:opacity-100 ${
            isHighContrast
              ? "bg-black border border-white text-white hover:bg-white hover:text-black"
              : "bg-white text-zinc-600 hover:text-blue-600 hover:scale-110 border border-zinc-200 shadow-md"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Scroll track — full viewport width, symmetric padding keeps first & last cards inset */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-5 sm:gap-6 pb-6 snap-x snap-mandatory hide-scrollbar px-4 sm:px-8 lg:px-24"
        >
          {allModules[activeTab] &&
            allModules[activeTab].items
              .filter((mod: any) => mod.enTitle !== "Smart Award Search")
              .map((mod: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (mod.enTitle === 'Case Management' || mod.enTitle === 'Collective Agreement') {
                        setCurrentView('login');
                    } else if (mod.enTitle === 'Search Full Awards') {
                        setCurrentView('schedule');
                    }
                  }}
                  className={`flex-none w-[260px] sm:w-[300px] lg:w-[320px] p-6 sm:p-8 rounded-[2rem] flex flex-col transition-all duration-500 text-left snap-start group/card ${
                    isHighContrast
                      ? "bg-black border-2 border-white hover:bg-zinc-900"
                      : "bg-white border border-zinc-100 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-pointer"
                  }`}
                >
                  <div className="flex-1 flex flex-col">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-3 ${
                        isHighContrast
                          ? "border-2 border-white text-white"
                          : "bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600"
                      }`}
                    >
                      <mod.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h4
                      className={`text-xl sm:text-2xl font-bold leading-tight mb-3 ${isHighContrast ? "text-white" : "text-zinc-900"}`}
                    >
                      {lang === "en" ? mod.enTitle : mod.msTitle}
                    </h4>
                    <p className={`text-sm sm:text-base leading-relaxed ${tTextSub}`}>
                      {lang === "en" ? mod.enDesc : mod.msDesc}
                    </p>
                  </div>

                  <div
                    className={`flex items-center justify-between mt-6 pt-5 border-t ${isHighContrast ? "border-zinc-700" : "border-zinc-100"}`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${isHighContrast ? "text-white" : "text-blue-600"}`}
                    >
                      Explore
                    </span>
                    <div
                      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                        isHighContrast
                          ? "text-white border border-white group-hover/card:bg-white group-hover/card:text-black"
                          : "bg-zinc-50 text-zinc-400 group-hover/card:text-blue-600 group-hover/card:bg-blue-50 group-hover/card:translate-x-1"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </button>
              ))}

          {/* Right edge spacer so the last card is never flush against the viewport */}
          <div className="w-4 sm:w-8 lg:w-24 flex-shrink-0" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
