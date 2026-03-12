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
      { icon: Briefcase, enTitle: 'Case Management', msTitle: 'Pengurusan Kes', enDesc: 'Management of the entire trial process.', msDesc: 'Pengurusan proses perbicaraan menyeluruh.', href: '/modules/case-management' },
      { icon: Users, enTitle: 'Collective Agreement', msTitle: 'Perjanjian Kolektif', enDesc: 'Registration and review of CA.', msDesc: 'Pengurusan pendaftaran dan semakan CA.', href: '/modules/collective-agreement' },
      { icon: Search, enTitle: 'Search Full Awards', msTitle: 'Carian Penuh Awards', enDesc: 'Semantic AI & Full-Text Search.', msDesc: 'Carian AI Semantik & Full-Text Search.', href: '/modules/search-awards' },
      { icon: Briefcase, enTitle: 'Practice Notes', msTitle: 'Nota Latihan', enDesc: 'Practice Notes.', msDesc: 'Senarai Nota Latihan', href: '/modules/practice-notes' },
      { icon: Briefcase, enTitle: 'Forms', msTitle: 'Borang', enDesc: 'Forms.', msDesc: 'Senarai Borang', href: '/modules/forms' },
      { icon: Briefcase, enTitle: 'User Guides', msTitle: 'Panduan Pengguna', enDesc: 'User Guides.', msDesc: 'Senarai Panduan Pengguna', href: '/modules/user-guides' },
      { icon: Briefcase, enTitle: 'Resources', msTitle: 'Lain-lain Capaian', enDesc: 'Access Links to Other Resources.', msDesc: 'Senarai Lain-lain Capaian', href: '/modules/resources' },
    ]
  }
];
