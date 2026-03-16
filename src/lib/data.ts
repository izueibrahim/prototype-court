import {
  Search, Calendar, Globe, Key, Bell, UploadCloud,
  FilePlus, Briefcase, Users, Monitor, BarChart, Settings,
  MessageSquare, FileText, BookOpen, Video
} from 'lucide-react';
import React from 'react';

export const upcomingHearings = [
  { 
    id: '22/4-1318/24', 
    court: 'Court 22', 
    judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', 
    date: '15 January 2025',
    time: '09:00 AM', // Used briefly for hearing list
    claimant: 'Kailash a/l Ganeshan',
    respondent: 'TNT Consultancy Sdn Bhd',
    keywords: ['Dismissal', 'Active', 'Final award'],
    summary: 'The claimant alleges unfair dismissal. Case is currently at the Final Award stage after a complete cycle of mentions, hearings, and document filings.',
    status: 'Active',
    stage: 'Final award',
    mentions: [
      { date: '25-11-2024 10:30:00', status: 'Completed' },
      { date: '20-01-2025 09:30:00', status: 'Completed' },
      { date: '20-02-2025 09:00:00', status: 'Postponed' },
      { date: '06-03-2025 10:00:00', status: 'Completed' },
      { date: '17-06-2025 09:01:00', status: 'Completed' }
    ],
    hearings: [
      { date: '14-07-2025 11:31:00', location: 'Local', status: 'Part-heard' },
      { date: '15-07-2025 09:00:00', location: 'Local', status: 'Postponed' },
      { date: '02-09-2025 10:00:30', location: 'Local', status: 'Part-heard' },
      { date: '03-09-2025 09:00:00', location: 'Local', status: 'Postponed' },
      { date: '21-10-2025 09:42:00', location: 'Local', status: 'Part-heard' },
      { date: '22-10-2025 10:00:00', location: 'Local', status: 'Completed' }
    ],
    filings: [
      { id: 1, document: 'Form A', date: '04-12-2024', party1: true, party2: false },
      { id: 2, document: 'Form B', date: '04-12-2024', party1: true, party2: false },
      { id: 3, document: 'Form A', date: '12-12-2024', party1: false, party2: true },
      { id: 4, document: 'Form B', date: '12-12-2024', party1: false, party2: true },
      { id: 5, document: 'Statement of Case', date: '06-01-2025', party1: true, party2: false },
      { id: 6, document: 'Statement in Reply', date: '21-02-2025', party1: false, party2: true },
      { id: 7, document: 'Bundle of Documents', date: '21-02-2025', party1: false, party2: true },
      { id: 8, document: 'Rejoinder', date: '06-03-2025', party1: true, party2: false },
      { id: 9, document: 'Supplementary Bundle', date: '07-07-2025', party1: false, party2: true },
      { id: 10, document: 'Witness Statements', date: '07-07-2025', party1: false, party2: true },
      { id: 14, document: 'Witness Statements', date: '09-07-2025', party1: true, party2: false },
      { id: 17, document: 'Written Submissions', date: '12-01-2026', party1: true, party2: false },
      { id: 19, document: 'Written Submissions', date: '13-01-2026', party1: false, party2: true },
      { id: 21, document: 'Reply/Further Written Submissions', date: '05-02-2026', party1: true, party2: false },
      { id: 22, document: 'Reply/Further Written Submissions', date: '09-03-2026', party1: false, party2: true },
      { id: 24, document: 'Ultimatum Date (Final)', date: '09-03-2026', party1: false, party2: true }
    ]
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

export const chYears = ['19', '20', '21', '22', '23', '24', '25', '26'];
export const ch1 = [{ rg: 820, rs: 745 }, { rg: 756, rs: 689 }, { rg: 912, rs: 801 }, { rg: 1034, rs: 912 }, { rg: 1148, rs: 1021 }, { rg: 1206, rs: 1102 }, { rg: 1278, rs: 1156 }, { rg: 1321, rs: 1188 }];
export const ch2 = [{ d: 412, c: 126, r: 109, t: 98 }, { d: 378, c: 118, r: 102, t: 91 }, { d: 451, c: 140, r: 110, t: 100 }, { d: 512, c: 162, r: 123, t: 115 }, { d: 548, c: 170, r: 138, t: 121 }, { d: 572, c: 184, r: 142, t: 129 }, { d: 603, c: 195, r: 150, t: 140 }, { d: 620, c: 201, r: 159, t: 152 }];
export const ch3 = [{ ud: 820, ca: 84, td: 63, ur: 22 }, { ud: 756, ca: 72, td: 58, ur: 19 }, { ud: 912, ca: 95, td: 71, ur: 24 }, { ud: 1034, ca: 108, td: 83, ur: 29 }, { ud: 1148, ca: 122, td: 95, ur: 31 }, { ud: 1206, ca: 131, td: 102, ur: 36 }, { ud: 1278, ca: 142, td: 114, ur: 40 }, { ud: 1321, ca: 148, td: 121, ur: 45 }];
export const ch4Vals = [10.8, 10.5, 10.2, 9.8, 9.5, 9.2, 9.1, 8.9];
export const ch4Pts = ch4Vals.map((v, i) => `${i * (100 / 7)},${50 - ((v - 8) / 3 * 50)}`).join(' ');
export const ch5 = [{ loc: 'Kuala Lumpur', val: 284 }, { loc: 'Selangor', val: 312 }, { loc: 'Johor', val: 176 }, { loc: 'Penang', val: 142 }, { loc: 'Perak', val: 118 }, { loc: 'Sabah', val: 95 }, { loc: 'Sarawak', val: 82 }];
export const ch7Sched = [1122, 1034, 1178, 1245, 1328, 1401, 1468, 1512];
export const ch7Comp = [1051, 970, 1112, 1191, 1267, 1344, 1420, 1468];
export const ch7SchedPts = ch7Sched.map((v, i) => `${i * (100 / 7)},${50 - ((v - 900) / 700 * 50)}`).join(' ');
export const ch7CompPts = ch7Comp.map((v, i) => `${i * (100 / 7)},${50 - ((v - 900) / 700 * 50)}`).join(' ');
export const ch8 = [{ s1: 720, s2: 694, s3: 412 }, { s1: 688, s2: 642, s3: 398 }, { s1: 821, s2: 788, s3: 456 }, { s1: 901, s2: 867, s3: 502 }, { s1: 982, s2: 942, s3: 540 }, { s1: 1041, s2: 998, s3: 590 }, { s1: 1102, s2: 1051, s3: 620 }, { s1: 1158, s2: 1108, s3: 648 }];
export const ch10 = [84, 91, 73, 61, 54, 48, 42, 39];
export const iconColors = [UploadCloud, Video, Calendar, Search, FileText, BookOpen];

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
  },
  { 
    items: [
      { icon: Key, enTitle: 'Access Management [M2]', enDesc: 'Centralized Login (SSO) & MyDigital ID.' }, 
      { icon: UploadCloud, enTitle: 'e-Filing & e-Service [M4]', enDesc: 'Online case document filing for parties.' }, 
      { icon: MessageSquare, enTitle: 'e-Mention [M5]', enDesc: 'Virtual case mention proceedings.' }, 
      { icon: Search, enTitle: 'Smart Award Search [M8]', enDesc: 'Semantic AI & Full-Text Search.' }, 
      { icon: Bell, enTitle: 'Notice Management [M3]', enDesc: 'Notifications, reminders, and schedules.' }
    ] 
  },
  { 
    items: [
      { icon: FilePlus, enTitle: 'Case Registration [M9]', enDesc: 'Registration and automated distribution.' }, 
      { icon: Briefcase, enTitle: 'Case Management [M10]', enDesc: 'Management of the entire trial process.' }, 
      { icon: Users, enTitle: 'Collective Agreement [M11]', enDesc: 'Registration and review of CA.' }, 
      { icon: BarChart, enTitle: 'Dashboard & Reports [M12]', enDesc: 'Automated statistics and analytics.' }, 
      { icon: Settings, enTitle: 'System Admin [M13]', enDesc: 'System configuration and audit logs.' }
    ] 
  }
];

export const mockAnalyticsStats = [
  { metric: "Settlement Rate", value: "72%", trend: "+5%", color: "text-emerald-500", bg: "bg-emerald-50" },
  { metric: "Average Duration", value: "145 Days", trend: "-12 Days", color: "text-blue-500", bg: "bg-blue-50" },
  { metric: "Awards Appealed", value: "18", trend: "-2", color: "text-amber-500", bg: "bg-amber-50" },
  { metric: "Hearings/Month", value: "312", trend: "+24", color: "text-indigo-500", bg: "bg-indigo-50" }
];

export const mockUsageLogs = [
  { id: "UL-001", user: "azman.isa@mpm.gov.my", role: "Officer", action: "Case Registration (Manual)", time: "10 mins ago" },
  { id: "UL-002", user: "system_admin", role: "Admin", action: "Database Backup Completed", time: "1 hour ago" },
  { id: "UL-003", user: "tay.hl@firm.my", role: "e-Filing", action: "Submitted Document: Bundle of Pleadings", time: "2 hours ago" },
  { id: "UL-004", user: "judge.jeffry@mpm.gov.my", role: "Chairman", action: "Updated Hearing Result: Case 1/1-1522/25", time: "3 hours ago" }
];

export const mockSystemSettings = [
  { name: "Public E-Filing Gateway", status: "Online", lastDowntime: "None (99.9% Uptime)" },
  { name: "Global CMS Sync", status: "Active", lastDowntime: "14 Feb 2026 02:00 AM" },
  { name: "AI Award Semantic Search", status: "Online", lastDowntime: "10 Mar 2026 03:20 AM" },
  { name: "Automated Notice Dispatch", status: "Online", lastDowntime: "None" }
];

export const caseTypeDistribution = [
  { type: 'Unfair Dismissal', count: 64, color: 'bg-blue-500' },
  { type: 'Constructive Dismissal', count: 21, color: 'bg-indigo-500' },
  { type: 'Collective Agreement', count: 18, color: 'bg-purple-500' },
  { type: 'Trade Dispute', count: 12, color: 'bg-emerald-500' },
  { type: 'Termination', count: 12, color: 'bg-amber-500' }
];

export const chairmanWorkload = [
  { name: "Y.A. Dato' Wan Jeffry Kassim", cases: 28, color: "bg-emerald-500" },
  { name: "Y.A. Puan Rusita Md Lazim", cases: 35, color: "bg-blue-500" },
  { name: "Y.A. Tuan Amrik Singh", cases: 41, color: "bg-amber-500" }
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

