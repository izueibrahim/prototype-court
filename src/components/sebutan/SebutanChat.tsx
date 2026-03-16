"use client";

import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Users, FileText, Download, 
  MessageSquare, User, Shield, CheckCircle2,
  Paperclip, MoreVertical, X, Globe
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

export default function SebutanChat() {
  const { lang, loginRole } = useAppStore();
  
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Registrar',
      role: 'Court Officer',
      text: 'Good morning. We are now starting the mention session for case 1/1-1522/25. Please ensures all documents are ready.',
      textMs: 'Selamat pagi. Kita akan mulakan sesi sebutan bagi kes 1/1-1522/25 sekarang. Pastikan semua dokumen sedia.',
      timestamp: '09:00 AM',
      isMe: loginRole === 'registrar'
    },
    {
      id: '2',
      sender: 'YA Chairman',
      role: 'Chairman',
      text: 'Parties please introduce yourselves.',
      textMs: 'Pihak-pihak diminta memperkenalkan diri.',
      timestamp: '09:02 AM',
      isMe: loginRole === 'chairman'
    }
  ]);

  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: loginRole?.toUpperCase() || 'USER',
      role: loginRole || 'Guest',
      text: input,
      textMs: `[Terjemahan]: ${input}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
  };

  const participants = [
    { name: 'YA Dato\' Wan Jeffry', role: 'Chairman', status: 'online', color: 'bg-slate-900', initial: 'W' },
    { name: 'Pendaftar Mahkamah', role: 'Registrar', status: 'online', color: 'bg-indigo-600', initial: 'R' },
    { name: 'Tay Hwee Lan', role: 'Claimant', status: 'online', color: 'bg-emerald-600', initial: 'T' },
    { name: 'Ahmad Faiz (Lawyer)', role: 'Rep', status: 'online', color: 'bg-blue-600', initial: 'A' },
  ];

  const documents = [
    { name: 'Statement_of_Case.pdf', type: 'SOC', size: '2.4 MB' },
    { name: 'Statement_in_Reply.pdf', type: 'SIR', size: '1.2 MB' },
    { name: 'Exhibits_Bundle_A.pdf', type: 'BOD', size: '15.8 MB' }
  ];

  return (
    <div className="flex h-full bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-xl ring-1 ring-black/5 relative">
      
      {/* Participants Sidebar Overlay (Mobile) */}
      {(isParticipantsOpen || isDocumentsOpen) && (
        <div 
          className="lg:hidden absolute inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => {
            setIsParticipantsOpen(false);
            setIsDocumentsOpen(false);
          }}
        />
      )}

      {/* Participants Sidebar */}
      <div className={`absolute lg:relative inset-y-0 left-0 z-50 lg:z-0 flex flex-col bg-zinc-50 border-r border-zinc-200 transition-all duration-300 ${isParticipantsOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none'}`}>
        <div className="p-6 border-b border-zinc-200 bg-white flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
            <Users className="w-4 h-4 text-indigo-600" />
            Participants
          </h3>
          <button onClick={() => setIsParticipantsOpen(false)} className="lg:hidden p-1 hover:bg-zinc-100 rounded-lg">
            <X className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {participants.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-zinc-100 group cursor-default">
              <div className={`w-10 h-10 rounded-full ${p.color} flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                {p.initial}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-900 truncate">{p.name}</p>
                <p className="text-[10px] text-zinc-500 font-medium">{p.role}</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 shrink-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white relative">
        
        {/* Header */}
        <div className="px-4 lg:px-6 py-4 border-b border-zinc-100 flex justify-between items-center bg-white/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2 lg:gap-4">
            <button 
              onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
              className={`p-2 rounded-lg transition-colors ${isParticipantsOpen ? 'text-indigo-600 bg-indigo-50' : 'text-zinc-400 hover:bg-zinc-100'}`}
              title="Toggle Participants"
            >
              <Users className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-zinc-200 hidden sm:block"></div>
            <div>
              <h2 className="text-sm lg:text-base font-bold text-zinc-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] sm:max-w-none">E-Sebutan Live Session</h2>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Live Room</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest leading-none">MY-IC-SECURE</span>
            </div>
            <button 
              onClick={() => setIsDocumentsOpen(!isDocumentsOpen)}
              className={`p-2 rounded-lg transition-colors relative ${isDocumentsOpen ? 'text-indigo-600 bg-indigo-50' : 'text-zinc-400 hover:bg-zinc-100'}`}
              title="Toggle Documents"
            >
              <FileText className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full border border-white">3</span>
            </button>
            <button className="p-2 text-zinc-400 hover:bg-zinc-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6 bg-zinc-50/30"
        >
          {messages.map((m) => (
            <div key={m.id} className={`flex flex-col ${m.isMe ? 'items-end' : 'items-start'}`}>
              <div className={`flex items-center gap-2 mb-1.5 px-1 ${m.isMe ? 'flex-row-reverse' : ''}`}>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${m.isMe ? 'text-indigo-600' : 'text-zinc-500'}`}>
                   {m.sender}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">{m.timestamp}</span>
              </div>
              <div className={`max-w-[90%] lg:max-w-[70%] px-4 lg:px-5 py-3 lg:py-3.5 rounded-2xl shadow-sm border ${
                m.isMe 
                  ? 'bg-indigo-600 text-white border-indigo-700 rounded-tr-none' 
                  : 'bg-white text-zinc-900 border-zinc-200 rounded-tl-none'
              }`}>
                <p className="text-sm font-medium leading-relaxed">{lang === 'en' ? m.text : m.textMs}</p>
                <div className={`mt-2 pt-2 border-t text-[11px] font-medium italic opacity-70 ${m.isMe ? 'border-white/20' : 'border-zinc-100'}`}>
                   {lang === 'en' ? m.textMs : m.text}
                </div>
              </div>
              {m.isMe && (
                <div className="flex items-center mt-1.5 px-1 text-[9px] font-bold text-indigo-600">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> RECORDED
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 lg:p-6 bg-white border-t border-zinc-100">
          <div className="mx-auto flex items-center gap-2 lg:gap-3 bg-zinc-50 border border-zinc-200 p-2 rounded-2xl lg:rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500/50 transition-all">
             <button className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                <Paperclip className="w-5 h-5" />
             </button>
             <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'en' ? "Write your message..." : "Tulis mesej anda..."}
                className="flex-1 bg-transparent py-2 lg:py-2.5 text-sm font-medium text-zinc-900 outline-none placeholder:text-zinc-400"
             />
             <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className={`p-2 lg:p-2.5 rounded-xl transition-all ${
                  input.trim() ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'bg-zinc-200 text-zinc-400'
                }`}
             >
                <Send className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>

      {/* Documents Sidebar */}
      <div className={`absolute lg:relative inset-y-0 right-0 z-50 lg:z-0 flex flex-col bg-zinc-50 border-l border-zinc-200 transition-all duration-300 ${isDocumentsOpen ? 'w-80 lg:w-80 translate-x-0' : 'w-0 translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100 pointer-events-none'}`}>
        <div className="p-6 border-b border-zinc-200 bg-white flex items-center justify-between">
          <h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            Document Assets
          </h3>
          <button onClick={() => setIsDocumentsOpen(false)} className="lg:hidden p-1 hover:bg-zinc-100 rounded-lg">
            <X className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {documents.map((doc, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition-all group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-zinc-900 truncate leading-tight mb-1">{doc.name}</p>
                  <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                    {doc.type} • {doc.size}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-zinc-50 hover:bg-zinc-900 hover:text-white rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all">Preview</button>
                <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          <button className="w-full py-8 mt-4 bg-white border-2 border-dashed border-zinc-200 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group">
            <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-all text-zinc-400">
               <Paperclip className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-zinc-400 group-hover:text-indigo-600 uppercase tracking-wider">Flash Evidence</span>
          </button>
        </div>

        {/* Encryption Status Footer */}
        <div className="p-4 bg-white border-t border-zinc-100 flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 opacity-40">
            <Shield className="w-3 h-3" />
            <span className="text-[8px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">AES-256 SECURED</span>
          </div>
        </div>
      </div>

    </div>
  );
}
