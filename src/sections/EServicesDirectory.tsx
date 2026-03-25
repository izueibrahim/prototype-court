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
      className={`pt-10 pb-8 [overflow-x:clip] ${isHighContrast ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-h2 mb-4 ${isHighContrast ? "text-white" : "text-zinc-900"}`}
          >
            {currentLang.architectureTitle}
          </h2>
          <p className={`text-body-lg max-w-2xl mx-auto font-medium ${isHighContrast ? "text-zinc-400" : "text-zinc-500"}`}>
            {currentLang.architectureSub}
          </p>
        </div>

        {currentLang.tabs && currentLang.tabs.length > 1 && (
          <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap justify-start sm:justify-center gap-3 mb-10 sm:mb-12 pb-2 snap-x w-full">
            {currentLang.tabs.map((tabLabel: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 sm:px-8 py-3 rounded-2xl text-body-sm font-bold whitespace-nowrap snap-center transition-all duration-300 ${activeTab === idx
                  ? isHighContrast
                    ? "bg-white text-black shadow-lg"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : isHighContrast
                    ? "border-2 border-white text-white hover:bg-zinc-900"
                    : "bg-zinc-50 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-blue-600 shadow-sm"
                  }`}
              >
                {tabLabel}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative group/carousel">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 sm:left-4 lg:left-12 top-1/2 -translate-y-12 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl shadow-premium transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 ${isHighContrast
            ? "bg-black border-2 border-white text-white hover:bg-white hover:text-black"
            : "bg-white/80 backdrop-blur-md text-zinc-900 hover:text-blue-600 hover:scale-110 border border-zinc-200"
            }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 sm:right-4 lg:right-12 top-1/2 -translate-y-12 z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl shadow-premium transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 ${isHighContrast
            ? "bg-black border-2 border-white text-white hover:bg-white hover:text-black"
            : "bg-white/80 backdrop-blur-md text-zinc-900 hover:text-blue-600 hover:scale-110 border border-zinc-200"
            }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto lg:justify-center gap-6 sm:gap-8 pb-10 snap-x snap-mandatory hide-scrollbar px-4 sm:px-8 lg:px-24"
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
                  className={`flex-none w-[280px] sm:w-[340px] lg:w-[380px] p-8 sm:p-10 rounded-[2.5rem] flex flex-col transition-all duration-500 text-left snap-start group/card border ${isHighContrast
                    ? "bg-black border-white hover:bg-zinc-900"
                    : "bg-white border-zinc-100 hover:border-blue-400 hover:shadow-premium cursor-pointer"
                    }`}
                >
                  <div className="flex-1 flex flex-col">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-3xl flex items-center justify-center mb-6 sm:mb-8 transition-all duration-500 group-hover/card:scale-110 group-hover/card:-rotate-3 ${isHighContrast
                        ? "border-2 border-white text-white"
                        : "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-100"
                        }`}
                    >
                      <mod.icon className="w-7 h-7 sm:w-8 sm:h-8 font-black" />
                    </div>
                    <h4
                      className={`text-h4 mb-4 ${isHighContrast ? "text-white" : "text-zinc-900"}`}
                    >
                      {lang === "en" ? mod.enTitle : mod.msTitle}
                    </h4>
                    <p className={`text-body-sm leading-relaxed font-medium ${isHighContrast ? "text-zinc-400" : "text-zinc-500"}`}>
                      {lang === "en" ? mod.enDesc : mod.msDesc}
                    </p>
                  </div>

                  <div
                    className={`flex items-center justify-between mt-8 pt-6 border-t ${isHighContrast ? "border-zinc-800" : "border-zinc-50"}`}
                  >
                    <span
                      className={`text-ui-label font-bold uppercase ${isHighContrast ? "text-white" : "text-blue-600"}`}
                    >
                      Explore Service
                    </span>
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl transition-all duration-500 ${isHighContrast
                        ? "text-white border-2 border-white group-hover/card:bg-white group-hover/card:text-black"
                        : "bg-zinc-50 text-zinc-300 border border-zinc-100 group-hover/card:text-blue-600 group-hover/card:bg-blue-50 group-hover/card:border-blue-200 group-hover/card:translate-x-1"
                        }`}
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </button>
              ))}
        </div>
      </div>
    </div>
  );
}
