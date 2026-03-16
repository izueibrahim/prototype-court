import { create } from 'zustand';

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
    currentView: 'portal' | 'login' | 'schedule' | 'search' | 'dashboard-internal' | 'dashboard-efiling' | 'dashboard-guest' | 'case-details';
    loginRole: 'ydp' | 'chairman' | 'registrar' | 'admin' | 'officer' | 'ca_unit' | 'efiling' | 'guest' | null;
    dashActiveView: 'overview' | 'chairman' | 'analytics' | 'registration' | 'cases' | 'schedule_int' | 'notice' | 'collective' | 'display' | 'integration' | 'usage' | 'settings';
    selectedCaseId: string | null;
    searchQuery: string;
    scheduleSearchQuery: string;
    lang: 'en' | 'ms';
    isWcagOpen: boolean;
    textSize: number;
    wcagStates: WcagStates;

    setCurrentView: (view: 'portal' | 'login' | 'schedule' | 'search' | 'dashboard-internal' | 'dashboard-efiling' | 'dashboard-guest' | 'case-details') => void;
    setLoginRole: (role: 'ydp' | 'chairman' | 'registrar' | 'admin' | 'officer' | 'ca_unit' | 'efiling' | 'guest' | null) => void;
    setDashActiveView: (view: 'overview' | 'chairman' | 'analytics' | 'registration' | 'cases' | 'schedule_int' | 'notice' | 'collective' | 'display' | 'integration' | 'usage' | 'settings') => void;
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

export const useAppStore = create<AppState>((set) => ({
    currentView: 'portal',
    loginRole: null,
    dashActiveView: 'overview',
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
}));
