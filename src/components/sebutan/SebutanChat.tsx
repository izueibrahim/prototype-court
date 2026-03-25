"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Users, FileText, Download, 
  MessageSquare, User, Shield, CheckCircle2,
  Paperclip, MoreVertical, X, Globe, Video, Plus, ChevronRight, ArrowLeft, Printer, Activity, Mic, Save, Gavel, Scale, Clock,
  MicOff, Zap, LogOut, Calendar
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { t } from '@/lib/i18n';

interface Message {
  id: string;
  sender: string;
  role: string;
  text: string;
  textMs: string;
  timestamp: string;
  isMe: boolean;
}

export default function SebutanChat({ onEndSession, sessionInfo }: { onEndSession?: () => void; sessionInfo?: { id: string; title: string; status: string; type?: string } }) {
  const { lang, loginRole, setDashActiveView, setCurrentView } = useAppStore();
  
  type SessionState = 'select' | 'code' | 'waiting' | 'chat' | 'moderator';
  const isAdmin = loginRole === 'chairman' || loginRole === 'registrar' || loginRole === 'admin' || loginRole === 'ydp';
  const isGuest = loginRole === 'guest';
  const initialState: SessionState = isAdmin ? 'moderator' : isGuest ? 'chat' : 'select';
  const [sessionState, setSessionState] = useState<SessionState>(initialState);
  
  const [roomCode, setRoomCode] = useState('');
  const [selectedSession, setSelectedSession] = useState<any>(null);
  const [admittedParticipants, setAdmittedParticipants] = useState<string[]>(['YA Dato\' Wan Jeffry', 'Pendaftar Mahkamah']);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'YA Dato\' Wan Jeffry',
      role: 'Chairman',
      text: 'Good morning. This mention session for case 1/1-1522/25 is now in session.',
      textMs: 'Selamat pagi. Sesi sebutan untuk kes 1/1-1522/25 kini bermula.',
      timestamp: '09:00 AM',
      isMe: false
    },
    {
      id: '2',
      sender: 'Pendaftar Mahkamah',
      role: 'Registrar',
      text: 'Both parties are present and ready to proceed.',
      textMs: 'Kedua-dua pihak hadir dan bersedia untuk diteruskan.',
      timestamp: '09:01 AM',
      isMe: false
    },
    {
      id: '3',
      sender: 'Ahmad Faiz',
      role: 'Claimant Rep',
      text: 'Thank you, we are ready.',
      textMs: 'Terima kasih, kami bersedia.',
      timestamp: '09:02 AM',
      isMe: false
    }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const mockSessions = [
    { id: 'SEB-2026-X1', caseId: '1/1-1522/25', title: 'John Doe v Tech Corp', time: '09:00 AM', status: 'Ready' },
    { id: 'SEB-2026-X2', caseId: '2/4-821/25', title: 'Jane Smith v Global Ltd', time: '11:45 AM', status: 'Scheduled' },
  ];

  const allParticipants = [
    { name: 'YA Dato\' Wan Jeffry', role: 'Chairman', status: 'online', color: 'bg-slate-900', initial: 'W' },
    { name: 'Pendaftar Mahkamah', role: 'Registrar', status: 'online', color: 'bg-indigo-600', initial: 'R' },
    { name: 'Ahmad Faiz (Guest)', role: 'Claimant Rep', status: 'waiting', color: 'bg-blue-600', initial: 'A' },
    { name: 'Tay Hwee Lan', role: 'Claimant', status: 'waiting', color: 'bg-emerald-600', initial: 'T' },
  ];

  const documents = [
    { name: 'Borang_A_Pendaftaran.pdf', type: 'Form A', size: '2.4 MB' },
    { name: 'Eksibit_P1.pdf', type: 'Exhibit', size: '1.2 MB' },
    { name: 'Sijil_JPPM.pdf', type: 'JPPM', size: '500 KB' }
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, sessionState]);

  // Automated admission for non-admins
  useEffect(() => {
    if (sessionState === 'waiting' && !isAdmin) {
      const timer = setTimeout(() => {
        setSessionState('chat');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sessionState, isAdmin]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: loginRole?.toUpperCase() || 'USER',
      role: loginRole || 'Guest',
      text: input,
      textMs: `[BM]: ${input}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const handleJoinSession = (session: any) => {
    setSelectedSession(session);
    setSessionState('code');
  };

  const handleVerifyCode = () => {
    if (roomCode === '1234') {
      setSessionState('waiting');
    } else {
      alert('Invalid Room Code. Hint: 1234');
    }
  };

  const getMessageStyles = (m: Message) => {
    if (m.isMe) {
      return {
        container: "items-end",
        bubble: "bg-blue-600 text-white rounded-tr-none border-blue-500 shadow-blue-500/20",
        text: "text-white/95",
        sender: "text-blue-600 text-right",
        meta: "flex-row-reverse"
      };
    }

    const role = (m.role || '').toLowerCase();
    if (role === 'chairman') {
      return {
        container: "items-start",
        bubble: "bg-slate-900 text-white rounded-tl-none border-slate-800",
        text: "text-white/90",
        sender: "text-slate-900",
        meta: "flex-row"
      };
    }
    if (role === 'registrar') {
      return {
        container: "items-start",
        bubble: "bg-indigo-50 text-indigo-900 rounded-tl-none border-indigo-100",
        text: "text-indigo-950",
        sender: "text-indigo-600",
        meta: "flex-row"
      };
    }
    if (role.includes('claimant')) {
      return {
        container: "items-start",
        bubble: "bg-emerald-50 text-emerald-900 rounded-tl-none border-emerald-100",
        text: "text-emerald-950",
        sender: "text-emerald-600",
        meta: "flex-row"
      };
    }
    if (role.includes('respondent')) {
      return {
        container: "items-start",
        bubble: "bg-rose-50 text-rose-900 rounded-tl-none border-rose-100",
        text: "text-rose-950",
        sender: "text-rose-600",
        meta: "flex-row"
      };
    }

    return {
      container: "items-start",
      bubble: "bg-white text-zinc-700 rounded-tl-none border-zinc-100",
      text: "text-zinc-700",
      sender: "text-zinc-400",
      meta: "flex-row"
    };
  };

  // --- RENDERING SUB-VIEWS ---

  if (sessionState === 'select') {
    return (
      <div className="h-full bg-slate-50 p-8 flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-500">
        <div className="text-center max-w-2xl">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-blue-500/30">
            <Video className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">E-Sebutan Sessions</h2>
          <p className="text-lg font-bold text-slate-500">Select an active session to join the virtual mention room.</p>
        </div>
        
        <div className="flex flex-col gap-6 w-full max-w-5xl">
          {mockSessions.map((s) => (
            <div key={s.id} className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm hover:border-blue-500 hover:shadow-xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-slate-100 group-hover:bg-blue-600 transition-colors"></div>
               <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-lg ring-4 ring-slate-50">
                  {s.status === 'Ready' ? <Activity className="w-6 h-6 text-emerald-400" /> : <Clock className="w-6 h-6 text-slate-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-mono font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg uppercase tracking-wider">{s.caseId}</span>
                    <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${s.status === 'Ready' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>{s.status}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-sm font-bold text-slate-400 mt-1 flex items-center gap-2"><Calendar className="w-4 h-4" /> Today &bull; {s.time}</p>
                </div>
              </div>
              <button 
                onClick={() => handleJoinSession(s)}
                className="px-8 py-4 bg-[#111111] hover:bg-blue-600 text-white text-[10px] font-black rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-xl active:scale-95 whitespace-nowrap"
              >
                Join Mention <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sessionState === 'code') {
    return (
      <div className="h-full bg-slate-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-2xl p-10 rounded-[48px] border border-white/10 text-center shadow-2xl animate-in zoom-in duration-500">
          <button onClick={() => setSessionState('select')} className="absolute top-8 left-8 text-white/40 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-blue-400 mx-auto mb-8 border border-white/20">
            <Shield className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Security Verification</h2>
          <p className="text-slate-400 font-bold mb-10">Enter the 4-digit Room Code provided in your hearing notice.</p>
          
          <input 
            type="password" 
            maxLength={4}
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-6 text-center text-4xl font-black text-white tracking-[1em] outline-none focus:border-blue-500 transition-all mb-8 shadow-inner"
            placeholder="****"
          />
          
          <button 
            onClick={handleVerifyCode}
            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/40 transition-all active:scale-95"
          >
            Authenticate & Join
          </button>
        </div>
      </div>
    );
  }

  if (sessionState === 'waiting') {
    return (
      <div className="h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center text-white relative animate-in fade-in duration-700">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-lg">
          <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-10 relative">
            <Activity className="w-12 h-12 text-emerald-400 animate-pulse" />
            <div className="absolute inset-0 border-4 border-emerald-400/20 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-4xl font-black mb-6 tracking-tight">Waiting for Admission</h2>
          <p className="text-xl font-bold text-slate-400 mb-12 leading-relaxed">
            Case <span className="text-blue-400 font-mono">{selectedSession?.caseId}</span> is ready. <br/>
            Please wait while the Court Officer admits you to the session.
          </p>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-6 text-left mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400"><Clock className="w-6 h-6" /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Your Queue Pos</p>
              <p className="text-lg font-black text-white">#2 in line</p>
            </div>
          </div>
          <p className="text-sm font-black text-emerald-400 animate-pulse flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            ADMISSION PENDING...
          </p>
          <button 
            onClick={() => setSessionState('select')}
            className="mt-16 text-slate-500 hover:text-white font-black text-xs uppercase tracking-[0.3em] transition-colors"
          >
            Leave Waiting Room
          </button>
        </div>
      </div>
    );
  }

  const [activeSidebar, setActiveSidebar] = useState<'chat' | 'participants' | 'documents' | null>(null);

  if (sessionState === 'moderator' || sessionState === 'chat') {
    return (
      <div className="h-full bg-zinc-50 flex flex-col relative animate-in fade-in duration-500 overflow-hidden font-sans">
        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* Header Bar - Mobile Optimized */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-20 pointer-events-none">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-2xl border border-zinc-200 shadow-md pointer-events-auto">
              <h2 className="text-[10px] md:text-ui-label text-zinc-900/90 tracking-[0.2em] font-black leading-none">{sessionInfo?.id || 'SEB-2026-X1'}</h2>
              <div className="w-[1px] h-3 bg-zinc-200"></div>
              <p className="text-[10px] md:text-body-sm font-bold text-zinc-400 tracking-tight leading-none">{sessionInfo?.status || 'Hearing'}</p>
              {sessionInfo?.title && (
                <>
                  <div className="w-[1px] h-3 bg-zinc-200"></div>
                  <p className="text-[10px] md:text-body-sm font-bold text-blue-600 tracking-tight leading-none truncate max-w-[250px]">{sessionInfo.title}</p>
                </>
              )}
            </div>
          </div>

          {/* Participant Grid Section */}
          <div className={`flex-1 transition-all duration-700 flex flex-col ${activeSidebar ? 'lg:mr-[400px]' : ''}`}>
            <div className="flex-1 p-4 md:p-8 pt-24 md:pt-32 pb-40 overflow-y-auto hide-scrollbar">
              <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {allParticipants.filter(p => p.status === 'online' || p.name === 'Ahmad Faiz (Guest)').map((p, i) => (
                  <div key={i} className="aspect-video bg-white rounded-3xl md:rounded-4xl border border-zinc-200 flex flex-col items-center justify-center relative overflow-hidden group shadow-md ring-1 ring-zinc-100 hover:ring-brand-600/30 transition-all hover:shadow-lg">
                    <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${p.color} flex items-center justify-center text-white text-h3 md:text-display font-black shadow-lg ring-4 md:ring-8 ring-zinc-50`}>
                      {p.initial}
                    </div>
                    
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
                      <span className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">{p.name}</span>
                      {p.status === 'online' && <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>}
                    </div>

                    {p.name === 'Ahmad Faiz (Guest)' && (
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <span className="px-2 py-1 md:px-3 md:py-1.5 bg-amber-50 text-amber-600 text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-lg md:rounded-xl border border-amber-100 shadow-sm flex items-center gap-1.5">
                           <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" /> Waiting
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 md:gap-5">
                       <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white hover:bg-rose-600 text-zinc-400 hover:text-rose-600 flex items-center justify-center transition-all hover:scale-110 shadow-md border border-zinc-100">
                         <MicOff className="w-5 md:w-6 h-5 md:h-6" />
                       </button>
                       {isAdmin && p.name === 'Ahmad Faiz (Guest)' && (
                         <button 
                            onClick={(e) => { e.stopPropagation(); }} 
                            className="px-4 py-2 md:px-8 md:py-4 bg-brand-600 hover:bg-brand-700 text-white text-[10px] md:text-xs font-black rounded-lg md:rounded-2xl transition-all shadow-lg hover:scale-105 uppercase tracking-widest"
                          >
                           Admit User
                         </button>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unified Sidebar Panel (Responsive) */}
          <div className={`fixed top-0 right-0 bottom-0 w-full lg:w-[400px] bg-white border-l border-zinc-200 shadow-lg transition-all duration-700 z-[70] flex flex-col ${activeSidebar ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
             <div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                    {activeSidebar === 'chat' && <MessageSquare className="w-5 h-5" />}
                    {activeSidebar === 'participants' && <Users className="w-5 h-5" />}
                    {activeSidebar === 'documents' && <FileText className="w-5 h-5" />}
                  </div>
                  <h3 className="text-h6 font-black text-zinc-900 tracking-tight capitalize">{activeSidebar}</h3>
                </div>
                <button onClick={() => setActiveSidebar(null)} className="w-10 h-10 rounded-xl hover:bg-zinc-100 flex items-center justify-center text-zinc-400 transition-colors">
                  <X className="w-5 h-5" />
                </button>
             </div>
             
             {activeSidebar === 'chat' && (
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar bg-zinc-50/30">
                    {messages.map((m, i) => {
                      const styles = getMessageStyles(m);
                      return (
                        <div key={i} className={`flex flex-col gap-2.5 ${styles.container}`}>
                          <div className={`flex items-center gap-3 ml-1 ${styles.meta}`}>
                            <span className={`text-[10px] font-black uppercase tracking-widest leading-none ${styles.sender}`}>{m.sender}</span>
                            <span className="text-[9px] font-bold text-zinc-300 leading-none">{m.timestamp}</span>
                          </div>
                          <div className={`p-4 md:p-5 rounded-3xl border shadow-sm max-w-[85%] ${styles.bubble}`}>
                             <p className={`text-body-sm leading-relaxed font-medium ${styles.text}`}>{m.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-6 md:p-8 bg-white border-t border-zinc-200">
                    <div className="relative">
                      <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="w-full pl-5 pr-14 py-4 md:py-5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-4 focus:ring-brand-600/10 focus:border-brand-600 outline-none transition-all text-body-sm font-medium"
                      />
                      <button onClick={handleSend} className="absolute right-3 top-3 md:right-3.5 md:top-3.5 w-10 md:w-12 h-10 md:h-12 bg-brand-600 text-white rounded-xl flex items-center justify-center hover:bg-brand-700 transition-all shadow-lg active:scale-95">
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
             )}

             {activeSidebar === 'participants' && (
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 custom-scrollbar">
                   {allParticipants.map((p, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white text-xs font-black`}>{p.initial}</div>
                            <div>
                               <p className="text-body-sm font-black text-zinc-900">{p.name}</p>
                               <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{p.role}</p>
                            </div>
                         </div>
                         <div className="flex gap-2">
                            <Mic className="w-4 h-4 text-zinc-300" />
                            <Video className="w-4 h-4 text-zinc-300" />
                         </div>
                      </div>
                   ))}
                </div>
             )}

             {activeSidebar === 'documents' && (
                <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4 custom-scrollbar">
                   {documents.map((d, i) => (
                      <div key={i} className="p-5 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:border-brand-600/30 transition-all group cursor-pointer">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                               <FileText className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                               <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-0.5">{d.type}</p>
                               <p className="text-xs font-black text-zinc-900 truncate">{d.name}</p>
                            </div>
                            <Download className="w-5 h-5 text-zinc-300 group-hover:text-brand-600 transition-colors" />
                         </div>
                      </div>
                   ))}
                </div>
             )}
          </div>
        </div>

        <div className={`absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center items-center z-[60] pointer-events-none px-4 transition-all duration-700 ${activeSidebar ? 'lg:right-[400px]' : ''}`}>
          <div className="flex items-center gap-3 md:gap-5 bg-white/95 backdrop-blur-3xl px-6 md:px-12 py-4 md:py-6 rounded-3xl md:rounded-4xl border border-zinc-200 shadow-lg pointer-events-auto transition-all duration-700 max-w-full overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-all shadow-md border border-zinc-100 active:scale-95">
               <Mic className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            <button className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 flex items-center justify-center transition-all shadow-md border border-zinc-100 active:scale-95">
               <Video className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            <div className="w-[1px] h-6 md:h-8 bg-zinc-200 mx-1 md:mx-3"></div>
            
            <button 
               onClick={() => setActiveSidebar(activeSidebar === 'chat' ? null : 'chat')}
               className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full transition-all shadow-md border flex items-center justify-center active:scale-95 ${
                 activeSidebar === 'chat' ? 'bg-brand-600 border-brand-600 text-white shadow-brand-600/30' : 'bg-zinc-100 border-zinc-100 text-zinc-600 hover:bg-zinc-200'
               }`}>
               <MessageSquare className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            <button 
               onClick={() => setActiveSidebar(activeSidebar === 'participants' ? null : 'participants')}
               className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full transition-all shadow-md border flex items-center justify-center active:scale-95 ${
                 activeSidebar === 'participants' ? 'bg-brand-600 border-brand-600 text-white shadow-brand-600/30' : 'bg-zinc-100 border-zinc-100 text-zinc-600 hover:bg-zinc-200'
               }`}>
               <Users className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            <button 
               onClick={() => setActiveSidebar(activeSidebar === 'documents' ? null : 'documents')}
               className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full transition-all shadow-md border flex items-center justify-center active:scale-95 ${
                 activeSidebar === 'documents' ? 'bg-brand-600 border-brand-600 text-white shadow-brand-600/30' : 'bg-zinc-100 border-zinc-100 text-zinc-600 hover:bg-zinc-200'
               }`}>
               <FileText className="w-5 md:w-6 h-5 md:h-6" />
            </button>
            
            <div className="w-2 md:w-6"></div>
            <button 
                onClick={() => {
                  if (onEndSession) {
                    onEndSession();
                  } else {
                    setSessionState(initialState);
                  }
                  setActiveSidebar(null);
                  setSelectedSession(null);
                }}
                className="flex-shrink-0 px-6 md:px-12 h-12 md:h-14 rounded-2xl md:rounded-3xl bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition-all shadow-lg active:scale-95 gap-2 md:gap-3 group"
            >
               <LogOut className="w-5 md:w-6 h-5 md:h-6 rotate-180" />
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] pb-0.5 hidden sm:block">{isAdmin ? 'End Session' : 'Leave Session'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
