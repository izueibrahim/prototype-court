import React from 'react';
import { 
  Search, SlidersHorizontal, FileSearch, Gavel, 
  Briefcase, FileText, MapPin, Calendar, ArrowUpRight, 
  ArrowLeft, ChevronRight, ChevronDown 
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';
import { mockSearchResults, courtLocations } from '@/lib/data';

export default function SearchPage() {
  const { searchQuery, setSearchQuery, lang, setCurrentView, wcagStates } = useAppStore();
  const currentLang = t[lang];
  const isHighContrast = wcagStates.highContrast;
  const tTextSub = isHighContrast ? 'text-zinc-300' : 'text-zinc-500';

  // --- SEARCH & FILTER LOGIC ---
  const filteredSearchResults = mockSearchResults.filter(res => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      res.title.toLowerCase().includes(q) ||
      res.summary.toLowerCase().includes(q) ||
      res.id.toLowerCase().includes(q) ||
      res.court.toLowerCase().includes(q) ||
      res.keywords.some(k => k.toLowerCase().includes(q))
    );
  });

  const highlightText = (text: string, highlight: string) => {
    if (!highlight || !highlight.trim()) return text;
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) 
        ? <mark key={i} className={`bg-transparent ${isHighContrast ? 'text-white font-bold bg-zinc-800' : 'text-blue-800 font-bold bg-blue-100'} px-1 rounded`}>{part}</mark> 
        : part
    );
  };

  return (
    <main className="flex-1 flex flex-col relative z-10">
      {/* Header Hero */}
      <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-zinc-900 border-zinc-800 relative overflow-hidden'}`}>
        {!isHighContrast && (
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[150%] bg-blue-600/20 rounded-full blur-[100px]"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center text-sm font-medium text-blue-400 mb-6">
            <button onClick={() => setCurrentView('portal')} className="hover:text-blue-300 transition-colors flex items-center">
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              {currentLang.home}
            </button>
            <ChevronRight className="w-4 h-4 mx-2 text-zinc-500" />
            <span className="text-zinc-300">{currentLang.searchResTitle}</span>
          </nav>
          <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isHighContrast ? 'text-white' : 'text-white'}`}>
            {currentLang.searchResTitle}
          </h1>
          
          <div className="flex items-center gap-4 max-w-2xl mt-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border text-base font-medium transition-all ${isHighContrast ? 'bg-black border-white text-white placeholder-zinc-500' : 'bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-400 focus:bg-zinc-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'}`}
                placeholder={currentLang.searchPlace}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`flex-1 py-8 sm:py-12 ${isHighContrast ? 'bg-black' : 'bg-zinc-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* SIDEBAR: Filters */}
            <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0 hidden lg:block">
              <div className={`p-6 rounded-3xl shadow-sm ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-zinc-200'}`}>
                <h3 className={`text-lg font-bold mb-6 flex items-center ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                  <SlidersHorizontal className="w-5 h-5 mr-2 text-blue-500" /> Filters
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.searchFilterCategory}</label>
                    <div className="space-y-2">
                      {['All Categories', 'Award', 'Case / Hearing', 'Practice Note'].map(cat => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${cat === 'All Categories' ? (isHighContrast ? 'bg-white border-white' : 'bg-blue-600 border-blue-600') : (isHighContrast ? 'border-zinc-500 group-hover:border-white' : 'border-zinc-300 group-hover:border-blue-400')}`}>
                            {cat === 'All Categories' && <div className={`w-2.5 h-2.5 rounded-sm ${isHighContrast ? 'bg-black' : 'bg-white'}`} />}
                          </div>
                          <span className={`text-sm font-semibold transition-colors ${isHighContrast ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700 group-hover:text-zinc-900'}`}>{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={`w-full h-px ${isHighContrast ? 'bg-zinc-800' : 'bg-zinc-200'}`}></div>

                  <div>
                    <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.searchFilterYear}</label>
                    <div className="relative">
                      <select className={`w-full pl-4 pr-10 py-2.5 rounded-xl border text-sm font-semibold appearance-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500'}`}>
                        <option>All Years</option>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>{currentLang.searchFilterCourt}</label>
                    <div className="relative">
                      <select className={`w-full pl-4 pr-10 py-2.5 rounded-xl border text-sm font-semibold appearance-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-200 text-zinc-900 focus:bg-white focus:border-blue-500'}`}>
                        <option>All Courts</option>
                        {courtLocations.flatMap(l => l.courts).map(court => (
                          <option key={court}>{court}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all border ${isHighContrast ? 'border-white text-white hover:bg-zinc-900' : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'}`}>
                      {currentLang.searchClearFilters}
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT: Listings */}
            <div className="w-full lg:w-3/4 flex flex-col">
              <div className="mb-6">
                <p className={`text-sm sm:text-base font-semibold ${tTextSub}`}>
                  {currentLang.searchResShowing} <span className={isHighContrast ? 'text-white' : 'text-zinc-900'}>{filteredSearchResults.length} items</span> {searchQuery ? `for "${searchQuery}"` : ''}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {filteredSearchResults.length === 0 ? (
                  <div className={`p-12 text-center rounded-3xl border-2 border-dashed flex flex-col items-center justify-center ${isHighContrast ? 'border-zinc-800 bg-black' : 'border-zinc-200 bg-white'}`}>
                    <FileSearch className={`w-16 h-16 mb-4 ${isHighContrast ? 'text-zinc-600' : 'text-zinc-300'}`} />
                    <h3 className={`text-xl font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.searchNoResults}</h3>
                    <p className={`text-sm ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>{currentLang.searchNoResultsSub} &quot;{searchQuery}&quot;</p>
                  </div>
                ) : (
                  filteredSearchResults.map((res, idx) => {
                    const isAward = res.type === 'Award';
                    const isCase = res.type === 'Case';
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-5 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 group ${isHighContrast ? 'bg-black border-white hover:ring-2 hover:ring-white' : 'bg-white border-zinc-200 shadow-sm hover:shadow-lg hover:border-blue-300'}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                          <div className="flex-1 pr-0 sm:pr-8">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isHighContrast ? 'border border-white text-white' : isAward ? 'bg-emerald-100 text-emerald-800' : isCase ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                                {isAward ? <Gavel className="w-3 h-3 mr-1.5" /> : isCase ? <Briefcase className="w-3 h-3 mr-1.5" /> : <FileText className="w-3 h-3 mr-1.5" />}
                                {res.type}
                              </span>
                              <span className={`text-xs sm:text-sm font-mono font-bold ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                {highlightText(res.id, searchQuery)}
                              </span>
                            </div>
                            <h4 className={`text-lg sm:text-xl font-bold leading-tight mb-3 ${isHighContrast ? 'text-white' : 'text-blue-700 group-hover:text-blue-800'}`}>
                              {highlightText(res.title, searchQuery)}
                            </h4>
                            <div className={`flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold ${tTextSub}`}>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1.5 opacity-60 flex-shrink-0" /> {highlightText(res.court, searchQuery)}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1.5 opacity-60 flex-shrink-0" /> {res.date}
                              </div>
                            </div>
                          </div>
                          
                          <button className={`hidden sm:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-xl transition-all ${isHighContrast ? 'border border-white text-white hover:bg-white hover:text-black' : 'bg-zinc-50 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm'}`}>
                            <ArrowUpRight className="w-6 h-6" />
                          </button>
                        </div>

                        <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isHighContrast ? 'text-zinc-300' : 'text-zinc-600'}`}>
                          {highlightText(res.summary, searchQuery)}
                        </p>

                        <div className={`pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${isHighContrast ? 'border-zinc-800' : 'border-zinc-100'}`}>
                          <div className="flex flex-wrap gap-2">
                            {res.keywords.map((kw, i) => (
                              <span key={i} className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md border ${isHighContrast ? 'bg-black border-zinc-600 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-600'}`}>
                                {highlightText(kw, searchQuery)}
                              </span>
                            ))}
                          </div>
                          <button className={`w-full sm:hidden flex items-center justify-center py-2.5 rounded-xl text-sm font-bold transition-all ${isHighContrast ? 'border border-white text-white hover:bg-white hover:text-black' : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white'}`}>
                            View Document <ArrowUpRight className="w-4 h-4 ml-1.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Pagination - Hide if no results */}
              {filteredSearchResults.length > 0 && (
                <div className="mt-10 flex justify-center">
                  <div className={`inline-flex rounded-xl shadow-sm ${isHighContrast ? 'border border-white' : 'bg-white border border-zinc-200'}`}>
                    <button className={`px-4 py-2 text-sm font-semibold rounded-l-xl ${isHighContrast ? 'text-white hover:bg-zinc-800' : 'text-zinc-500 hover:bg-zinc-50'}`}>Prev</button>
                    <button className={`px-4 py-2 text-sm font-bold ${isHighContrast ? 'bg-white text-black' : 'bg-blue-50 text-blue-600 border-x border-blue-100'}`}>1</button>
                    <button className={`px-4 py-2 text-sm font-semibold ${isHighContrast ? 'text-white hover:bg-zinc-800' : 'text-zinc-700 hover:bg-zinc-50 border-r border-zinc-200'}`}>2</button>
                    <button className={`px-4 py-2 text-sm font-semibold rounded-r-xl ${isHighContrast ? 'text-white hover:bg-zinc-800' : 'text-zinc-500 hover:bg-zinc-50'}`}>Next</button>
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
