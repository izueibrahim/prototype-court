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
    currentView: 'portal' | 'login';
    loginRole: 'officer' | 'efiling' | 'guest' | null;
    lang: 'en' | 'ms';
    isWcagOpen: boolean;
    textSize: number;
    wcagStates: WcagStates;

    setCurrentView: (view: 'portal' | 'login') => void;
    setLoginRole: (role: 'officer' | 'efiling' | 'guest' | null) => void;
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
