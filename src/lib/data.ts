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
    claimant: 'Tay Hwee Lan',
    respondent: 'Healthy Vision',
    keywords: ['Constructive Dismissal', 'Unpaid Wages', 'Breach of Contract'],
    summary: 'The claimant alleges constructive dismissal due to a significant, unilateral reduction in responsibilities and non-payment of contractual allowances over a period of 3 months.'
  },
  { 
    id: '1/1-1079/25', 
    court: 'Mahkamah 1', 
    judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', 
    time: '11:00 AM',
    claimant: 'Azman Bin Isa',
    respondent: 'Technip Energies (M)',
    keywords: ['Retrenchment', 'Redundancy', 'LIFO Principle'],
    summary: 'A dispute regarding the company\'s retrenchment exercise. The union claims the company failed to follow the Last-In-First-Out (LIFO) principle and did not consult prior to the termination.'
  },
  { 
    id: '4/4-2024/25', 
    court: 'Mahkamah 4', 
    judge: 'Y.A. Tuan Amrik Singh', 
    time: '02:30 PM',
    claimant: 'Siti Nurhaliza',
    respondent: 'Syarikat ABC Sdn Bhd',
    keywords: ['Domestic Inquiry', 'Misconduct', 'Absenteeism'],
    summary: 'Mention for case management. The respondent asserts the dismissal was lawful following a properly conducted Domestic Inquiry regarding severe absenteeism.'
  },
  { 
    id: '2/2-3041/25', 
    court: 'Mahkamah 2', 
    judge: 'Y.A. Puan Rusita Binti Md Lazim', 
    time: '09:30 AM',
    claimant: 'Kesatuan Sekerja Pembuatan',
    respondent: 'Kilang Automotif Jaya',
    keywords: ['Trade Union', 'Collective Agreement', 'Non-Compliance'],
    summary: 'Complaint of non-compliance with Article 14 of the Collective Agreement regarding annual bonus payouts.'
  },
  { 
    id: '5/5-1120/25', 
    court: 'Mahkamah 5', 
    judge: 'Y.A. Tuan Zulhelmy Bin Hasan', 
    time: '10:00 AM',
    claimant: 'Ahmad Faiz',
    respondent: 'Global Tech Solutions',
    keywords: ['Sexual Harassment', 'Unfair Dismissal'],
    summary: 'Claimant disputes termination which was allegedly based on unproven sexual harassment allegations without a proper domestic inquiry.'
  },
  { 
    id: '3/3-0899/25', 
    court: 'Mahkamah 3', 
    judge: 'Y.A. Dato\' Syed Noh Bin Said', 
    time: '03:00 PM',
    claimant: 'Sarah Lee',
    respondent: 'Bintang Retail Group',
    keywords: ['Fixed Term Contract', 'Legitimate Expectation'],
    summary: 'Dispute over the non-renewal of a 5th consecutive fixed-term contract. Claimant argues there was a legitimate expectation of permanent employment.'
  }
];

export const latestJudgments = [
  { 
    id: '2/2-3041/25', 
    awardNo: 'Award 412/2026',
    court: 'Mahkamah 2', 
    judge: 'Y.A. Puan Rusita Binti Md Lazim', 
    date: '12 March 2026',
    claimant: 'Thangaraj a/l Narayanan',
    respondent: 'DHL Express (M) Sdn Bhd',
    keywords: ['Unfair Dismissal', 'Reinstatement Denied', 'Compensation'],
    summary: 'The court found the dismissal to be unfair due to procedural flaws, but reinstatement was deemed inappropriate. Compensation in lieu of reinstatement was awarded.'
  },
  { 
    id: '5/5-1120/25', 
    awardNo: 'Award 409/2026',
    court: 'Mahkamah 5', 
    judge: 'Y.A. Tuan Zulhelmy Bin Hasan', 
    date: '10 March 2026',
    claimant: 'On Siang Aik',
    respondent: 'Million Effective Sdn. Bhd.',
    keywords: ['Constructive Dismissal', 'Claim Dismissed'],
    summary: 'The claimant failed to prove that the transfer order was a fundamental breach of contract. The claim for constructive dismissal is dismissed.'
  }
];

export const mockSearchResults = [
  {
    type: 'Award',
    id: 'Award 412/2026',
    court: 'Mahkamah 2',
    date: '12 March 2026',
    title: 'Thangaraj a/l Narayanan v DHL Express (M) Sdn Bhd',
    summary: 'The court found the dismissal to be unfair due to procedural flaws, but reinstatement was deemed inappropriate. Compensation in lieu of reinstatement was awarded...',
    keywords: ['Unfair Dismissal', 'Reinstatement Denied', 'Compensation']
  },
  {
    type: 'Case',
    id: '1/1-1522/25',
    court: 'Mahkamah 1',
    date: '09 March 2026',
    title: 'Tay Hwee Lan v Healthy Vision',
    summary: 'The claimant alleges constructive dismissal due to a significant, unilateral reduction in responsibilities and non-payment of contractual allowances...',
    keywords: ['Constructive Dismissal', 'Unpaid Wages']
  },
  {
    type: 'Practice Note',
    id: 'PN No. 1/2026',
    court: 'Registry',
    date: '01 March 2026',
    title: 'Guidelines on Handling Constructive Dismissal Cases',
    summary: 'This practice note outlines the procedural requirements and evidential burdens placed upon claimants claiming constructive dismissal under Section 20 of the IRA 1967...',
    keywords: ['Constructive Dismissal', 'Procedure', 'Evidence']
  },
  {
    type: 'Award',
    id: 'Award 409/2026',
    court: 'Mahkamah 5',
    date: '10 March 2026',
    title: 'On Siang Aik v Million Effective Sdn. Bhd.',
    summary: 'The claimant failed to prove that the transfer order was a fundamental breach of contract. The claim for constructive dismissal is dismissed.',
    keywords: ['Constructive Dismissal', 'Claim Dismissed']
  },
  {
    type: 'Award',
    id: 'Award 301/2025',
    court: 'Mahkamah 4',
    date: '15 December 2025',
    title: 'Johan Bin Aris v Mega Builders Sdn Bhd',
    summary: 'Dismissal was ruled justified. The claimant failed to establish constructive dismissal as the transfer order was deemed a lawful management prerogative...',
    keywords: ['Constructive Dismissal', 'Transfer', 'Claim Dismissed']
  },
  {
    type: 'Case',
    id: '2/2-3041/25',
    court: 'Mahkamah 2',
    date: '08 March 2026',
    title: 'Kesatuan Sekerja Pembuatan v Kilang Automotif Jaya',
    summary: 'Complaint of non-compliance with Article 14 of the Collective Agreement regarding annual bonus payouts.',
    keywords: ['Trade Union', 'Collective Agreement', 'Non-Compliance']
  }
];

export const courtLocations = [
  { region: "Kuala Lumpur", courts: ["Mahkamah 1", "Mahkamah 2", "Mahkamah 3", "Mahkamah 4", "Mahkamah 5", "Mahkamah 6", "Mahkamah 7", "Mahkamah 11", "Mahkamah 12", "Mahkamah 13", "Mahkamah 14", "Mahkamah 15", "Mahkamah 19", "Mahkamah 20", "Mahkamah 21", "Mahkamah 22"] },
  { region: "Johor", courts: ["Mahkamah 16"] },
  { region: "Pulau Pinang", courts: ["Mahkamah 9", "Mahkamah 18"] },
  { region: "Perak", courts: ["Mahkamah 10"] },
  { region: "Sabah", courts: ["Mahkamah 17"] },
  { region: "Sarawak", courts: ["Mahkamah 8"] }
];

export const caseTypeDistribution = [
  { type: 'Unfair Dismissal', count: 64, color: 'bg-blue-500' },
  { type: 'Constructive Dismissal', count: 21, color: 'bg-indigo-500' },
  { type: 'Collective Agreement', count: 18, color: 'bg-purple-500' },
  { type: 'Trade Dispute', count: 12, color: 'bg-emerald-500' },
  { type: 'Termination', count: 12, color: 'bg-amber-500' }
];

export const chairmanWorkload = [
  { name: 'YA Dato Wan Jeffry Kassim', cases: 32 },
  { name: 'YA Tuan Amrik Singh', cases: 24 },
  { name: 'YA Puan Rusita Md Lazim', cases: 21 },
  { name: 'YA Tuan Zulhelmy Hasan', cases: 18 },
  { name: 'YA Dato Syed Noh Said', cases: 17 }
];

export const filingQueue = [
  { id: 'F1001', submittedBy: 'Tay Hwee Lan', type: 'Unfair Dismissal', date: '2026-03-05', status: 'Pending Review' },
  { id: 'F1002', submittedBy: 'Azman Bin Isa', type: 'Unfair Dismissal', date: '2026-03-05', status: 'Pending Review' },
  { id: 'F1003', submittedBy: 'Ravi Kumar', type: 'Constructive Dismissal', date: '2026-03-05', status: 'Pending Review' },
  { id: 'F1004', submittedBy: 'Ahmad Faiz', type: 'Termination', date: '2026-03-05', status: 'Approved' }
];

export const chairmanCases = [
  { id: '1/1-1522/25', title: 'Tay Hwee Lan v Healthy Vision', status: 'Hearing', date: '12 Mar 2026', time: '09:00 AM' },
  { id: '1/1-1079/25', title: 'Azman Bin Isa v Technip Energies', status: 'Trial', date: '12 Mar 2026', time: '11:00 AM' },
  { id: '4/4-2024/25', title: 'Siti Nurhaliza v ABC Sdn Bhd', status: 'Mention', date: '14 Mar 2026', time: '02:30 PM' },
  { id: '2/2-3041/25', title: 'Kesatuan Sekerja v Kilang Automotif', status: 'Hearing', date: '15 Mar 2026', time: '09:30 AM' }
];

export const integrationLogs = [
  { id: '13001', system: 'JPPM', type: 'Case Sync', status: 'Success', time: '842 ms' },
  { id: '13002', system: 'JPPM', type: 'Case Sync', status: 'Success', time: '921 ms' },
  { id: '13003', system: 'MyDigital ID', type: 'Authentication', status: 'Success', time: '530 ms' },
  { id: '13004', system: 'MyDigital ID', type: 'Authentication', status: 'Failed', time: '2200 ms' },
  { id: '13005', system: 'JPPM', type: 'Case Sync', status: 'Failed', time: '4100 ms' },
];

export const mockNotices = [
  { id: 'N-001', type: 'Hearing Notice', caseNo: '1/1-1522/25', parties: 'Tay Hwee Lan v Healthy Vision', status: 'Pending Dispatch' },
  { id: 'N-002', type: 'Mention Notice', caseNo: '4/4-2024/25', parties: 'Siti Nurhaliza v ABC Sdn Bhd', status: 'Dispatched' },
  { id: 'N-003', type: 'Award Collection', caseNo: '2/2-3041/25', parties: 'Thangaraj v DHL Express', status: 'Delivered' }
];

export const mockCAs = [
  { id: 'CA-2026-001', union: 'National Union of Bank Employees', company: 'Maybank Berhad', submitted: '01 Mar 2026', status: 'Under Review' },
  { id: 'CA-2026-002', union: 'Kesatuan Sekerja Pembuatan', company: 'Kilang Automotif Jaya', submitted: '28 Feb 2026', status: 'Approved' },
  { id: 'CA-2026-003', union: 'Medical Workers Union', company: 'Private Hospitals Group', submitted: '15 Feb 2026', status: 'Cognizance Granted' }
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
