import React from 'react';
import { 
  Search, SlidersHorizontal, FileSearch, Gavel, 
  Briefcase, FileText, MapPin, Calendar, ArrowUpRight, 
  ArrowLeft, ChevronRight, ChevronDown, ChevronLeft
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
          <nav className="flex items-center text-ui-label text-blue-400 mb-6 uppercase">
            <button onClick={() => setCurrentView('portal')} className="hover:text-blue-300 transition-colors flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentLang.home}
            </button>
            <ChevronRight className="w-4 h-4 mx-3 text-zinc-600" />
            <span className="text-white/60">{currentLang.searchResTitle}</span>
          </nav>
          <h1 className="text-h1 tracking-tighter mb-4 text-white">
            {currentLang.searchResTitle}
          </h1>
          
          <div className="flex items-center gap-4 max-w-2xl mt-8">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-14 pr-6 py-4 rounded-2xl border text-body-lg font-bold transition-all outline-none ${isHighContrast ? 'bg-black border-2 border-white text-white placeholder-zinc-500' : 'bg-white/10 backdrop-blur-md border-white/10 text-white placeholder-zinc-400 focus:bg-white/20 focus:border-white/30 focus:ring-4 focus:ring-white/10 shadow-2xl'}`}
                placeholder={currentLang.searchPlace}
              />
            </div>
            <button className="btn-primary py-4 px-8 hidden sm:block">Search Result</button>
          </div>
        </div>
      </div>

      <div className={`flex-1 py-10 sm:py-16 ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* SIDEBAR: Filters */}
            <aside className="w-full lg:w-1/4 space-y-8 flex-shrink-0 hidden lg:block">
              <div className={`p-8 rounded-[2.5rem] border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-zinc-200 shadow-premium'}`}>
                <h3 className={`text-h3 mb-8 flex items-center tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                  <SlidersHorizontal className="w-5 h-5 mr-3 text-blue-600" /> Filters
                </h3>

                <div className="space-y-8">
                  <div>
                    <label className="text-ui-label text-zinc-400 uppercase mb-4 block">{currentLang.searchFilterCategory}</label>
                    <div className="space-y-3">
                      {['All Categories', 'Award', 'Case / Hearing', 'Practice Note'].map(cat => (
                       <label key={cat} className="flex items-center gap-4 cursor-pointer group">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center border-2 transition-all ${cat === 'All Categories' ? (isHighContrast ? 'bg-white border-white' : 'bg-blue-600 border-blue-600 scale-105') : (isHighContrast ? 'border-zinc-800 hover:border-white' : 'border-zinc-100 group-hover:border-blue-200')}`}>
                            {cat === 'All Categories' && <div className={`w-2.5 h-2.5 rounded-sm ${isHighContrast ? 'bg-black' : 'bg-white'}`} />}
                          </div>
                          <span className={`text-body-sm font-bold tracking-tight transition-colors ${isHighContrast ? 'text-zinc-400 group-hover:text-white' : 'text-zinc-600 group-hover:text-blue-600'}`}>{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={`w-full h-px ${isHighContrast ? 'bg-zinc-800' : 'bg-zinc-100'}`}></div>

                  <div>
                    <label className={`text-[10px] font-black uppercase tracking-widest mb-4 block ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{currentLang.searchFilterYear}</label>
                    <div className="relative">
                      <select className={`w-full pl-5 pr-12 py-3.5 rounded-2xl border text-sm font-black appearance-none transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-100 text-zinc-900 focus:bg-white focus:border-blue-500 shadow-sm'}`}>
                        <option>All Years</option>
                        <option>2026</option>
                        <option>2025</option>
                        <option>2024</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className={`text-[10px] font-black uppercase tracking-widest mb-4 block ${isHighContrast ? 'text-zinc-400' : 'text-zinc-400'}`}>{currentLang.searchFilterCourt}</label>
                    <div className="relative">
                      <select className={`w-full pl-5 pr-12 py-3.5 rounded-2xl border text-sm font-black appearance-none transition-all outline-none ${isHighContrast ? 'bg-black border-white text-white' : 'bg-zinc-50 border-zinc-100 text-zinc-900 focus:bg-white focus:border-blue-500 shadow-sm'}`}>
                        <option>All Courts</option>
                        {courtLocations.flatMap(l => l.courts).map(court => (
                          <option key={court}>{court}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="btn-secondary w-full">
                      {currentLang.searchClearFilters}
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT: Listings */}
            <div className="w-full lg:w-3/4 flex flex-col">
              <div className="mb-8">
                <p className={`text-base font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {currentLang.searchResShowing} <span className={`font-black ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{filteredSearchResults.length} items</span> {searchQuery ? `found for your query` : ''}
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                {filteredSearchResults.length === 0 ? (
                  <div className={`p-16 text-center rounded-[3rem] border-2 border-dashed flex flex-col items-center justify-center ${isHighContrast ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-100 bg-zinc-50/50'}`}>
                    <div className="w-20 h-20 rounded-3xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-400">
                        <FileSearch className="w-10 h-10" />
                    </div>
                    <h3 className={`text-2xl font-black mb-3 tracking-tight ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>{currentLang.searchNoResults}</h3>
                    <p className={`text-sm max-w-sm mx-auto font-medium ${isHighContrast ? 'text-zinc-400' : 'text-zinc-500'}`}>{currentLang.searchNoResultsSub} &quot;{searchQuery}&quot;. Please try reflecting your search with broader terms.</p>
                  </div>
                ) : (
                  filteredSearchResults.map((res, idx) => {
                    const isAward = res.type === 'Award';
                    const isCase = res.type === 'Case';
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-7 sm:p-10 rounded-[2.5rem] border transition-all duration-500 group animate-in fade-in slide-in-from-bottom-4 ${isHighContrast ? 'bg-black border-white hover:bg-zinc-900' : 'bg-white border-zinc-100 hover:border-blue-400 hover:shadow-premium'}`}
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-5">
                              <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-ui-label font-bold uppercase ${isHighContrast ? 'border-2 border-white text-white' : isAward ? 'bg-emerald-50 text-emerald-700' : isCase ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>
                                {isAward ? <Gavel className="w-3.5 h-3.5 mr-2" /> : isCase ? <Briefcase className="w-3.5 h-3.5 mr-2" /> : <FileText className="w-3.5 h-3.5 mr-2" />}
                                {res.type}
                              </span>
                              <span className={`text-body-sm font-mono font-bold ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                #{res.id}
                              </span>
                            </div>
                            <h4 className={`text-h3 tracking-tighter leading-tight mb-4 group-hover:text-blue-600 transition-colors ${isHighContrast ? 'text-white' : 'text-zinc-900'}`}>
                              {highlightText(res.title, searchQuery)}
                            </h4>
                            <div className={`flex flex-wrap gap-x-8 gap-y-3 text-ui-label font-bold uppercase ${isHighContrast ? 'text-zinc-500' : 'text-zinc-400'}`}>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2.5 text-blue-600 opacity-70" /> {highlightText(res.court, searchQuery)}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2.5 text-blue-600 opacity-70" /> {res.date}
                              </div>
                            </div>
                          </div>
                          
                          <button className={`hidden sm:flex flex-shrink-0 items-center justify-center w-14 h-14 rounded-2xl transition-all duration-500 ${isHighContrast ? 'border-2 border-white text-white hover:bg-white hover:text-black' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-100'}`}>
                            <ArrowUpRight className="w-8 h-8" />
                          </button>
                        </div>

                        <p className={`text-body-md leading-relaxed mb-8 font-medium ${isHighContrast ? 'text-zinc-300' : 'text-zinc-500'}`}>
                          {res.summary}
                        </p>

                        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6 ${isHighContrast ? 'border-zinc-800' : 'border-zinc-50'}`}>
                          <div className="flex flex-wrap gap-3">
                            {res.keywords.map((kw, i) => (
                              <span key={i} className={`px-4 py-1.5 text-ui-label font-bold uppercase rounded-xl border ${isHighContrast ? 'bg-black border-zinc-700 text-zinc-400' : 'bg-white border-zinc-100 text-zinc-500 shadow-sm transition-colors hover:border-blue-200'}`}>
                                {kw}
                              </span>
                            ))}
                          </div>
                          <button className="btn-secondary w-full sm:w-auto px-8">
                            View Document Detail
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Pagination */}
              {filteredSearchResults.length > 0 && (
                <div className="mt-16 flex justify-center">
                  <div className={`inline-flex items-center p-1.5 rounded-2xl ${isHighContrast ? 'border-2 border-white' : 'bg-zinc-50 border border-zinc-100 shadow-sm'}`}>
                    <button className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-400 hover:text-blue-600 hover:bg-white'}`}>
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="px-6 flex gap-2">
                        <button className={`w-10 h-10 flex items-center justify-center rounded-xl text-body-sm font-bold ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white shadow-lg shadow-blue-100'}`}>1</button>
                        <button className={`w-10 h-10 flex items-center justify-center rounded-xl text-body-sm font-bold transition-colors ${isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-400 hover:text-blue-600 hover:bg-white'}`}>2</button>
                        <button className={`w-10 h-10 flex items-center justify-center rounded-xl text-body-sm font-bold transition-colors ${isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-400 hover:text-blue-600 hover:bg-white'}`}>3</button>
                    </div>
                    <button className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${isHighContrast ? 'text-white hover:bg-zinc-900' : 'text-zinc-400 hover:text-blue-600 hover:bg-white'}`}>
                        <ChevronRight className="w-5 h-5" />
                    </button>
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
