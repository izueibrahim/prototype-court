import { 
  Search, Calendar, Globe, Key, Bell, UploadCloud, 
  FilePlus, Briefcase, Users, Monitor, BarChart, Settings, 
  MessageSquare, FileText, BookOpen
} from 'lucide-react';
import React from 'react';

export const upcomingHearings = [
  { 
    id: '1/1-1522/25', 
    court: 'Mahkamah 1', 
    judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', 
    time: '09:00 AM',
    keywords: ['Constructive Dismissal', 'Unpaid Wages', 'Breach of Contract'],
    summary: 'The claimant alleges constructive dismissal due to a significant, unilateral reduction in responsibilities and non-payment of contractual allowances over a period of 3 months.'
  },
  { 
    id: '1/1-1079/25', 
    court: 'Mahkamah 1', 
    judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', 
    time: '11:00 AM',
    keywords: ['Retrenchment', 'Redundancy', 'LIFO Principle'],
    summary: 'A dispute regarding the company\'s retrenchment exercise. The union claims the company failed to follow the Last-In-First-Out (LIFO) principle and did not consult prior to the termination.'
  },
  { 
    id: '4/4-2024/25', 
    court: 'Mahkamah 4', 
    judge: 'Y.A. Tuan Amrik Singh', 
    time: '02:30 PM',
    keywords: ['Domestic Inquiry', 'Misconduct', 'Absenteeism'],
    summary: 'Mention for case management. The respondent asserts the dismissal was lawful following a properly conducted Domestic Inquiry regarding severe absenteeism.'
  },
];

export const iconColors = [UploadCloud, MessageSquare, Calendar, Search, FileText, BookOpen];

export const allModules = [
  {
    items: [
      { icon: Globe, enTitle: 'eMP Portal', msTitle: 'Portal eMP', enDesc: 'Official website for public information access.', msDesc: 'Laman web rasmi untuk akses maklumat awam.' },
      { icon: Calendar, enTitle: 'Court Schedule', msTitle: 'Jadual Mahkamah', enDesc: 'Latest proceedings and trial schedules.', msDesc: 'Jadual prosiding dan perbicaraan terkini.' },
      { icon: Monitor, enTitle: 'Digital Signage', msTitle: 'Kandungan Digital', enDesc: 'Integration for LED screens outside courtrooms.', msDesc: 'Integrasi skrin LED di luar bilik mahkamah.' },
    ]
  },
  {
    items: [
      { icon: Key, enTitle: 'Access Management', msTitle: 'Pengurusan Akses', enDesc: 'Centralized Login (SSO) & MyDigital ID.', msDesc: 'Log Masuk Berpusat (SSO) & MyDigital ID.' },
      { icon: UploadCloud, enTitle: 'e-Filing & e-Service', msTitle: 'e-Filing & e-Service', enDesc: 'Online case document filing for parties.', msDesc: 'Pemfailan dokumen kes secara atas talian.' },
      { icon: MessageSquare, enTitle: 'e-Mention', msTitle: 'e-Sebutan', enDesc: 'Virtual case mention proceedings.', msDesc: 'Prosiding sebutan kes secara maya.' },
      { icon: Search, enTitle: 'Smart Award Search', msTitle: 'Carian Pintar Award', enDesc: 'Semantic AI & Full-Text Search.', msDesc: 'Carian AI Semantik & Full-Text Search.' },
      { icon: Bell, enTitle: 'Notice Management', msTitle: 'Pengurusan Notis', enDesc: 'Notifications, reminders, and schedules.', msDesc: 'Notifikasi, peringatan dan jadual tugasan.' },
    ]
  },
  {
    items: [
      { icon: FilePlus, enTitle: 'Case Registration', msTitle: 'Pendaftaran Kes', enDesc: 'Registration and automated distribution.', msDesc: 'Pendaftaran dan agihan kes automatik.' },
      { icon: Briefcase, enTitle: 'Case Management', msTitle: 'Pengurusan Kes', enDesc: 'Management of the entire trial process.', msDesc: 'Pengurusan proses perbicaraan menyeluruh.' },
      { icon: Users, enTitle: 'Collective Agreement', msTitle: 'Perjanjian Kolektif', enDesc: 'Registration and review of CA.', msDesc: 'Pengurusan pendaftaran dan semakan CA.' },
      { icon: BarChart, enTitle: 'Dashboard & Reports', msTitle: 'Dashboard & Laporan', enDesc: 'Automated statistics and analytics.', msDesc: 'Janaan statistik automatik dan analitik.' },
      { icon: Settings, enTitle: 'System Admin', msTitle: 'Pentadbir Sistem', enDesc: 'System configuration and audit logs.', msDesc: 'Konfigurasi sistem dan audit log.' },
    ]
  }
];
