import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type WcagStates = {
    highContrast: boolean;
    textSpacing: boolean;
    invert: boolean;
    greyHues: boolean;
    underline: boolean;
    bigCursor: boolean;
    readingGuide: boolean;
    tts: boolean;
    stt: boolean;
    [key: string]: boolean;
};

interface AppState {
    currentView: 'portal' | 'login' | 'schedule' | 'search' | 'dashboard-internal' | 'dashboard-efiling' | 'dashboard-guest' | 'case-details' | 'about' | 'contact' | 'modules';
    loginRole: 'ydp' | 'chairman' | 'registrar' | 'admin' | 'officer' | 'ca_unit' | 'efiling' | 'guest' | null;
    dashActiveView: 'overview' | 'chairman' | 'analytics' | 'registration' | 'cases' | 'schedule_int' | 'notice' | 'collective' | 'display' | 'integration' | 'usage' | 'settings' | 'sebutan';
    internalActionView: 'review_filing' | 'allocate_case' | 'case_detail' | 'hearing_notes' | null;
    eFilingActiveView: 'cases' | 'new_filing' | 'case_details';
    selectedInternalItem: any | null;
    selectedEFilingCase: any | null;
    dashMobileMenuOpen: boolean;
    selectedCaseId: string | null;
    searchQuery: string;
    scheduleSearchQuery: string;
    lang: 'en' | 'ms';
    isWcagOpen: boolean;
    textSize: number;
    wcagStates: WcagStates;

    setCurrentView: (view: AppState['currentView']) => void;
    setLoginRole: (role: AppState['loginRole']) => void;
    setDashActiveView: (view: AppState['dashActiveView']) => void;
    setInternalActionView: (view: AppState['internalActionView']) => void;
    setEFilingActiveView: (view: AppState['eFilingActiveView']) => void;
    setSelectedInternalItem: (item: any | null) => void;
    setSelectedEFilingCase: (item: any | null) => void;
    setDashMobileMenuOpen: (isOpen: boolean) => void;
    setSelectedCaseId: (id: string | null) => void;
    setSearchQuery: (query: string) => void;
    setScheduleSearchQuery: (query: string) => void;
    setLang: (lang: 'en' | 'ms') => void;
    setIsWcagOpen: (isOpen: boolean) => void;
    setTextSize: (size: number | ((prev: number) => number)) => void;
    toggleWcagState: (key: keyof WcagStates) => void;
    setWcagState: (key: keyof WcagStates, value: boolean) => void;
    resetWcag: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            currentView: 'portal',
            loginRole: null,
            dashActiveView: 'overview',
            internalActionView: null,
            eFilingActiveView: 'cases',
            selectedInternalItem: null,
            selectedEFilingCase: null,
            dashMobileMenuOpen: false,
            selectedCaseId: null,
            searchQuery: '',
            scheduleSearchQuery: '',
            lang: 'en',
            isWcagOpen: false,
            textSize: 100,
            wcagStates: {
                highContrast: false,
                textSpacing: false,
                invert: false,
                greyHues: false,
                underline: false,
                bigCursor: false,
                readingGuide: false,
                tts: false,
                stt: false
            },

            setCurrentView: (view) => set({ currentView: view }),
            setLoginRole: (role) => set({ loginRole: role }),
            setDashActiveView: (view) => set({ dashActiveView: view }),
            setInternalActionView: (view) => set({ internalActionView: view }),
            setEFilingActiveView: (view) => set({ eFilingActiveView: view }),
            setSelectedInternalItem: (item) => set({ selectedInternalItem: item }),
            setSelectedEFilingCase: (item) => set({ selectedEFilingCase: item }),
            setDashMobileMenuOpen: (isOpen) => set({ dashMobileMenuOpen: isOpen }),
            setSelectedCaseId: (id) => set({ selectedCaseId: id }),
            setSearchQuery: (query) => set({ searchQuery: query }),
            setScheduleSearchQuery: (query) => set({ scheduleSearchQuery: query }),
            setLang: (lang) => set({ lang }),
            setIsWcagOpen: (isOpen) => set({ isWcagOpen: isOpen }),
            setTextSize: (size) => set((state) => ({
                textSize: typeof size === 'function' ? size(state.textSize) : size
            })),
            toggleWcagState: (key) => set((state) => ({
                wcagStates: { ...state.wcagStates, [key]: !state.wcagStates[key] }
            })),
            setWcagState: (key, value) => set((state) => ({
                wcagStates: { ...state.wcagStates, [key]: value }
            })),
            resetWcag: () => set({
                textSize: 100,
                wcagStates: {
                    highContrast: false,
                    textSpacing: false,
                    invert: false,
                    greyHues: false,
                    underline: false,
                    bigCursor: false,
                    readingGuide: false,
                    tts: false,
                    stt: false
                }
            })
        }),
        {
            name: 'emp-v2-storage',
            partialize: (state) => ({ 
                currentView: state.currentView, 
                loginRole: state.loginRole,
                dashActiveView: state.dashActiveView,
                lang: state.lang,
                wcagStates: state.wcagStates
            }),
        }
    )
);
