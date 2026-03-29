// import React, { useState } from 'react';
// import {
//   Search, Calendar, Scale, FileText, Globe, Menu, X,
//   ChevronRight, ChevronDown, ChevronLeft, Gavel, FileSignature, MessageSquare,
//   Building2, LogIn, MapPin, Clock, Key, Bell, UploadCloud,
//   FilePlus, Briefcase, Users, Monitor, BarChart, Settings,
//   Accessibility, ZoomIn, ZoomOut, RotateCcw, Landmark,
//   BookOpen, HandHeart, List, Grid, Phone, Mail, Shield,
//   ShieldAlert, FileWarning, MoveHorizontal, FoldHorizontal,
//   Contrast, Droplet, Underline, MousePointer2, AlignJustify,
//   Volume2, Mic, Download, ArrowUpRight, ArrowLeft, HelpCircle,
//   ShieldCheck, UserCircle, Video, Lock, Fingerprint, Filter,
//   SlidersHorizontal, FileSearch, LayoutDashboard, LogOut, Activity, Users2,
//   PieChart, ServerCrash, Smartphone, Wrench, RefreshCw, CheckCircle2, AlertCircle,
//   KanbanSquare, Tv, ArrowDown, Check, Upload, Trash2, File as FileIcon, MoreVertical,
//   Save, FileCheck, ClipboardList
// } from 'lucide-react';

// // ============================================================================
// // --- MOCK DATA ---
// // ============================================================================
// const upcomingHearings = [
//   { id: '1/1-1522/25', court: 'Mahkamah 1', judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', time: '09:00 AM', claimant: 'Tay Hwee Lan', respondent: 'Healthy Vision', keywords: ['Constructive Dismissal', 'Unpaid Wages'], summary: 'The claimant alleges constructive dismissal due to a significant, unilateral reduction in responsibilities.' },
//   { id: '1/1-1079/25', court: 'Mahkamah 1', judge: 'Y.A. Dato\' Wan Jeffry Bin Kassim', time: '11:00 AM', claimant: 'Azman Bin Isa', respondent: 'Technip Energies (M)', keywords: ['Retrenchment', 'Redundancy'], summary: 'A dispute regarding the company\'s retrenchment exercise without proper consultation.' },
//   { id: '4/4-2024/25', court: 'Mahkamah 4', judge: 'Y.A. Tuan Amrik Singh', time: '02:30 PM', claimant: 'Siti Nurhaliza', respondent: 'Syarikat ABC Sdn Bhd', keywords: ['Domestic Inquiry', 'Absenteeism'], summary: 'Mention for case management regarding severe absenteeism.' }
// ];

// const latestJudgements = [
//   { id: '2/2-3041/25', awardNo: 'Award 412/2026', court: 'Mahkamah 2', judge: 'Y.A. Puan Rusita Binti Md Lazim', date: '12 March 2026', claimant: 'Thangaraj a/l Narayanan', respondent: 'DHL Express (M) Sdn Bhd', keywords: ['Unfair Dismissal', 'Compensation'], summary: 'The court found the dismissal to be unfair due to procedural flaws. Compensation awarded.' },
//   { id: '5/5-1120/25', awardNo: 'Award 409/2026', court: 'Mahkamah 5', judge: 'Y.A. Tuan Zulhelmy Bin Hasan', date: '10 March 2026', claimant: 'On Siang Aik', respondent: 'Million Effective Sdn. Bhd.', keywords: ['Constructive Dismissal', 'Claim Dismissed'], summary: 'The claimant failed to prove fundamental breach of contract. Claim dismissed.' }
// ];

// const mockSearchResults = [
//   { type: 'Award', id: 'Award 412/2026', court: 'Mahkamah 2', date: '12 March 2026', title: 'Thangaraj a/l Narayanan v DHL Express (M) Sdn Bhd', summary: 'The court found the dismissal to be unfair due to procedural flaws, but reinstatement was deemed inappropriate. Compensation in lieu of reinstatement was awarded...', keywords: ['Unfair Dismissal', 'Reinstatement Denied', 'Compensation'] },
//   { type: 'Case', id: '1/1-1522/25', court: 'Mahkamah 1', date: '09 March 2026', title: 'Tay Hwee Lan v Healthy Vision', summary: 'The claimant alleges constructive dismissal due to a significant, unilateral reduction in responsibilities and non-payment of contractual allowances...', keywords: ['Constructive Dismissal', 'Unpaid Wages'] },
//   { type: 'Practice Note', id: 'PN No. 1/2026', court: 'Registry', date: '01 March 2026', title: 'Guidelines on Handling Constructive Dismissal Cases', summary: 'This practice note outlines the procedural requirements and evidential burdens placed upon claimants claiming constructive dismissal under Section 20 of the IRA 1967...', keywords: ['Constructive Dismissal', 'Procedure', 'Evidence'] },
//   { type: 'Award', id: 'Award 301/2025', court: 'Mahkamah 4', date: '15 December 2025', title: 'Johan Bin Aris v Mega Builders Sdn Bhd', summary: 'Dismissal was ruled justified. The claimant failed to establish constructive dismissal as the transfer order was deemed a lawful management prerogative...', keywords: ['Constructive Dismissal', 'Transfer', 'Claim Dismissed'] }
// ];

// const courtLocations = [
//   { region: "Kuala Lumpur", courts: ["Mahkamah 1", "Mahkamah 2", "Mahkamah 3", "Mahkamah 4", "Mahkamah 5", "Mahkamah 6", "Mahkamah 7", "Mahkamah 11"] },
//   { region: "Johor", courts: ["Mahkamah 16"] },
//   { region: "Pulau Pinang", courts: ["Mahkamah 9", "Mahkamah 18"] },
//   { region: "Perak", courts: ["Mahkamah 10"] }
// ];

// const caseTypeDistribution = [
//   { type: 'Unfair Dismissal', count: 64, color: 'bg-blue-500' },
//   { type: 'Constructive Dismissal', count: 21, color: 'bg-indigo-500' },
//   { type: 'Collective Agreement', count: 18, color: 'bg-purple-500' },
//   { type: 'Trade Dispute', count: 12, color: 'bg-emerald-500' },
//   { type: 'Termination', count: 12, color: 'bg-amber-500' }
// ];

// const filingQueue = [
//   { id: 'F1001', submittedBy: 'Tay Hwee Lan', type: 'Unfair Dismissal', date: '2026-03-05', status: 'Pending Review' },
//   { id: 'F1002', submittedBy: 'Azman Bin Isa', type: 'Unfair Dismissal', date: '2026-03-05', status: 'Pending Review' },
//   { id: 'F1003', submittedBy: 'Ravi Kumar', type: 'Constructive Dismissal', date: '2026-03-05', status: 'Pending Review' },
//   { id: 'F1004', submittedBy: 'Ahmad Faiz', type: 'Termination', date: '2026-03-05', status: 'Approved' }
// ];

// const chairmanCases = [
//   { id: '1/1-1522/25', title: 'Tay Hwee Lan v Healthy Vision', status: 'Hearing', date: '12 Mar 2026' },
//   { id: '1/1-1079/25', title: 'Azman Bin Isa v Technip Energies', status: 'Trial', date: '12 Mar 2026' },
//   { id: '4/4-2024/25', title: 'Siti Nurhaliza v ABC Sdn Bhd', status: 'Mention', date: '14 Mar 2026' },
//   { id: '2/2-3041/25', title: 'Kesatuan Sekerja v Kilang Automotif', status: 'Hearing', date: '15 Mar 2026' }
// ];

// const integrationLogs = [
//   { id: '13001', system: 'JPPM', type: 'Case Sync', status: 'Success', time: '842 ms' },
//   { id: '13002', system: 'JPPM', type: 'Case Sync', status: 'Success', time: '921 ms' },
//   { id: '13003', system: 'MyDigital ID', type: 'Authentication', status: 'Success', time: '530 ms' },
//   { id: '13004', system: 'MyDigital ID', type: 'Authentication', status: 'Failed', time: '2200 ms' },
//   { id: '13005', system: 'JPPM', type: 'Case Sync', status: 'Failed', time: '4100 ms' },
// ];

// const mockNotices = [
//   { id: 'N-001', type: 'Hearing Notice', caseNo: '1/1-1522/25', parties: 'Tay Hwee Lan v Healthy Vision', status: 'Pending Dispatch' },
//   { id: 'N-002', type: 'Mention Notice', caseNo: '4/4-2024/25', parties: 'Siti Nurhaliza v ABC Sdn Bhd', status: 'Dispatched' },
//   { id: 'N-003', type: 'Award Collection', caseNo: '2/2-3041/25', parties: 'Thangaraj v DHL Express', status: 'Delivered' }
// ];

// const mockCAs = [
//   { id: 'CA-2026-001', union: 'National Union of Bank Employees', company: 'Maybank Berhad', submitted: '01 Mar 2026', status: 'Under Review' },
//   { id: 'CA-2026-002', union: 'Kesatuan Sekerja Pembuatan', company: 'Kilang Automotif Jaya', submitted: '28 Feb 2026', status: 'Approved' },
//   { id: 'CA-2026-003', union: 'Medical Workers Union', company: 'Private Hospitals Group', submitted: '15 Feb 2026', status: 'Cognizance Granted' }
// ];

// const mockHearingsTypes = ['Trial (B)', 'Trial (B)', 'Mention (S)', 'Hearing (B)', 'Mention (S)', 'Decision (K)'];
// const iconColors = [UploadCloud, Video, Calendar, Search, FileText, BookOpen];

// // ============================================================================
// // --- MAIN APPLICATION ---
// // ============================================================================
// export default function App() {
//   // Navigation & Core State
//   const [currentView, setCurrentView] = useState('portal');
//   const [loginRole, setLoginRole] = useState(null);
//   const [lang, setLang] = useState('en');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   // Specific View States
//   const [homeListTab, setHomeListTab] = useState('hearings');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [expandedId, setExpandedId] = useState(null);
//   const [selectedRegion, setSelectedRegion] = useState("Kuala Lumpur");
//   const [selectedCourt, setSelectedCourt] = useState("Mahkamah 1");
//   const [loginMethod, setLoginMethod] = useState('standard');
//   const [demoRole, setDemoRole] = useState('efiling');

//   // Dashboard Specific State
//   const [dashActiveView, setDashActiveView] = useState('overview');
//   const [dashMobileMenuOpen, setDashMobileMenuOpen] = useState(false);
//   const [internalActionView, setInternalActionView] = useState(null); // 'review_filing', 'allocate_case', 'case_detail', 'hearing_notes'
//   const [selectedInternalItem, setSelectedInternalItem] = useState(null);

//   // Analytics Filter States
//   const [filterYear, setFilterYear] = useState('All Years');
//   const [filterLocation, setFilterLocation] = useState('All Locations');
//   const [filterCaseType, setFilterCaseType] = useState('All Types');
//   const [filterChairman, setFilterChairman] = useState('All Chairmen');
//   const [filterStatus, setFilterStatus] = useState('All Statuses');

//   // eFiling Specific State
//   const [eFilingActiveView, setEFilingActiveView] = useState('cases'); // 'cases', 'new_filing', 'case_details'
//   const [selectedEFilingCase, setSelectedEFilingCase] = useState(null);

//   // Calendar State
//   const [calendarMonth, setCalendarMonth] = useState(2);
//   const [calendarYear, setCalendarYear] = useState(2026);
//   const [selectedDate, setSelectedDate] = useState(12);

//   // A11y State
//   const [isWcagOpen, setIsWcagOpen] = useState(false);
//   const [textSize, setTextSize] = useState(100);
//   const [wcagStates, setWcagStates] = useState({ highContrast: false, textSpacing: false, invert: false, greyHues: false, underline: false, bigCursor: false, readingGuide: false, tts: false, stt: false });

//   // --- ACTIONS ---
//   const toggleWcag = (key: string) => setWcagStates(prev => ({ ...prev, [key]: !prev[key] }));
//   const handleZoomIn = () => setTextSize(prev => Math.min(prev + 10, 130));
//   const handleZoomOut = () => setTextSize(prev => Math.max(prev - 10, 90));
//   const handleZoomReset = () => {
//     setTextSize(100);
//     setWcagStates({ highContrast: false, textSpacing: false, invert: false, greyHues: false, underline: false, bigCursor: false, readingGuide: false, tts: false, stt: false });
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     setLoginRole(demoRole);
//     if (['ydp', 'registrar', 'officer', 'chairman', 'ca_unit', 'admin'].includes(demoRole)) {
//       setCurrentView('dashboard-internal');
//       if (demoRole === 'chairman') setDashActiveView('chairman');
//       else if (demoRole === 'admin') setDashActiveView('integration');
//       else if (demoRole === 'ca_unit') setDashActiveView('collective');
//       else setDashActiveView('overview');
//     }
//     else if (demoRole === 'efiling') {
//       setCurrentView('dashboard-efiling');
//       setEFilingActiveView('cases');
//     }
//     else if (demoRole === 'guest') setCurrentView('dashboard-guest');
//   };

//   const handleLogout = () => {
//     setLoginRole(null);
//     setDashActiveView('overview');
//     setDashMobileMenuOpen(false);
//     setCurrentView('portal');
//   };

//   const handleGlobalSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       setCurrentView('search');
//       setMobileMenuOpen(false);
//     }
//   };

//   const handleQuickLink = (title) => {
//     if (title.includes('File') || title.includes('Fail')) { setCurrentView('login'); setDemoRole('efiling'); }
//     else if (title.includes('Virtual') || title.includes('Maya')) { setCurrentView('login'); setDemoRole('guest'); }
//     else if (title.includes('Schedule') || title.includes('Jadual')) setCurrentView('schedule');
//     else if (title.includes('Search') || title.includes('Carian')) setCurrentView('search');
//     else if (title.includes('Practice') || title.includes('Amalan')) { setSearchQuery('Practice Note'); setCurrentView('search'); }
//   };

//   const handleModuleLink = (title) => {
//     if (title.includes('Portal')) setCurrentView('portal');
//     else if (title.includes('Schedule') || title.includes('Jadual')) setCurrentView('schedule');
//     else if (title.includes('Search') || title.includes('Carian')) setCurrentView('search');
//     else if (title.includes('Filing')) { setCurrentView('login'); setDemoRole('efiling'); }
//     else if (title.includes('Mention') || title.includes('Sebutan')) { setCurrentView('login'); setDemoRole('guest'); }
//     else { setCurrentView('login'); setDemoRole('officer'); }
//   };

//   const openCaseDetails = (caseInfo) => {
//     setSelectedEFilingCase(caseInfo);
//     setEFilingActiveView('case_details');
//   };

//   // --- DICTIONARY ---
//   const t = {
//     en: {
//       govPortal: 'Official Portal of the Ministry of Human Resources', portal: 'Industrial Court of Malaysia', home: 'Home', about: 'About Us', modules: 'e-Services', schedule: 'Schedule', contact: 'Contact', login: 'SSO Login', a11yTitle: 'Accessibility Options', heroTitle: 'Seamless Digital Justice.', heroSub: 'Your unified gateway for case management, e-filing, and virtual court proceedings.', searchPlace: 'Search by case number, award, or keywords...', searchBtn: 'Search Portal', viewAll: 'Full Schedule', noticesTitle: 'Court Notices', viewAllNotices: 'View All Notices', architectureTitle: 'e-Services Directory', architectureSub: 'Explore our comprehensive suite of online judicial services based on your user role.', footerDesc: 'The official integrated gateway for Case Management at the Industrial Court of Malaysia.', quickLinksTitle: 'Quick Actions', resourcesTitle: 'Resources & Agencies', rights: 'All Rights Reserved. Industrial Court of Malaysia.', tabs: ["Public Access", "Secured e-Services", "Internal Operations"],
//       quickLinks: [{ title: 'File a Document' }, { title: 'Join Virtual Court' }, { title: 'Check Schedule' }, { title: 'Search Awards' }, { title: 'Practice Notes' }, { title: 'Selected Awards' }],
//       loginGateway: 'Unified Login Gateway', backToPortal: 'Back to Portal', selectAccess: 'Sign In to eMP v2.0', selectAccessSub: 'Access your dedicated digital workspace.', signIn: 'Sign In Securely',
//       roleOfficer: 'Court Officer', roleOfficerDesc: 'Internal users managing court cases, hearings, and administration.', roleEfiling: 'eFiling User', roleEfilingDesc: 'Employers, employees, and lawyers submitting legal documents.', roleGuest: 'Guest Access', roleGuestDesc: 'Temporary access for participating in online virtual hearings.',
//       userId: 'User ID / Email', password: 'Password', caseRef: 'Case Reference Number', accessCode: 'Temporary Access Code', joinHearing: 'Join Virtual Hearing', forgotPwd: 'Forgot password?', register: 'Register new account',
//       homeHearingsTitle: 'Hearings & Judgments', homeHearingsSub: 'Real-time daily proceeding schedules and latest published awards.', homeHearingsTab: 'Upcoming Hearings', homeJudgmentsTab: 'Latest Judgments', fullScheduleTitle: 'Full Court Schedule', fullScheduleSub: 'Search and view comprehensive proceeding schedules across all Industrial Courts.', filterSearch: 'Search parties or case no...', step1Region: '1. Region / State', step2Court: '2. Select Court', step3Date: '3. Select Date', months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//       notices: [{ date: '12 March 2026', title: 'Practice Note No. 1 of 2026: Implementation of eMP v2.0 System for all new filings.' }, { date: '08 March 2026', title: 'Guidelines for remote attendance via e-Sebutan during public holidays.' }],
//       searchResTitle: 'Search Results', searchResShowing: 'Showing results for', searchFilterCategory: 'Category', searchFilterYear: 'Year', searchApplyFilters: 'Apply Filters', searchClearFilters: 'Clear All', privacy: 'Privacy Policy', security: 'Security Policy', disclaimer: 'Disclaimer',
//       dashOverview: 'Overview & Reports', dashRegistration: 'Case Registration', dashCases: 'Case Management', dashSchedule: 'Court Schedule', dashNotice: 'Notice Management', dashCollective: 'Collective Agreement', dashDisplay: 'Digital Display', dashSearch: 'Smart Award Search', dashAdmin: 'System Admin', dashAnalytics: 'Award Analytics', dashIntegration: 'System Integration', dashUsage: 'Usage Reports', dashChairman: 'Chairman Workspace', logout: 'Sign Out', kpiActive: 'Total Active Cases', kpiNew: 'New Cases (Month)', kpiClosed: 'Cases Closed (Month)', kpiBacklog: 'Backlog Cases', kpiResolution: 'Resolution Rate', filingQueue: 'Recent Filing Queue', chartTypeDist: 'Case Type Distribution', chartMonthly: 'Monthly Case Trend', chartWorkload: 'Chairman Workload Overview', roleYDP: 'YDP / Executive', roleChairman: 'Chairman (Judge)', roleRegistrar: 'Registrar', roleAdmin: 'Admin',
//     },
//     ms: {
//       govPortal: 'Portal Rasmi Kementerian Sumber Manusia', portal: 'Mahkamah Perusahaan Malaysia', home: 'Utama', about: 'Mengenai Kami', modules: 'e-Perkhidmatan', schedule: 'Jadual', contact: 'Hubungi', login: 'Log Masuk SSO', a11yTitle: 'Pilihan Aksesibiliti', heroTitle: 'Keadilan Digital Tanpa Sempadan.', heroSub: 'Gerbang berpusat anda untuk pengurusan kes, e-pemfailan, dan prosiding mahkamah maya.', searchPlace: 'Cari nombor kes, award, atau kata kunci...', searchBtn: 'Cari Portal', viewAll: 'Jadual Penuh', noticesTitle: 'Notis Mahkamah', viewAllNotices: 'Lihat Semua Notis', architectureTitle: 'Direktori e-Perkhidmatan', architectureSub: 'Terokai rangkaian komprehensif perkhidmatan kehakiman dalam talian mengikut peranan anda.', footerDesc: 'Gerbang rasmi bersepadu bagi Pengurusan Kes Mahkamah Perusahaan Malaysia.', quickLinksTitle: 'Tindakan Pantas', resourcesTitle: 'Sumber & Agensi', rights: 'Hak Cipta Terpelihara. Mahkamah Perusahaan Malaysia.', tabs: ["Akses Awam", "e-Perkhidmatan Selamat", "Operasi Dalaman"],
//       quickLinks: [{ title: 'Failkan Dokumen' }, { title: 'Sertai Mahkamah Maya' }, { title: 'Semak Jadual' }, { title: 'Carian Award' }, { title: 'Notis Amalan' }, { title: 'Award Terpilih' }],
//       loginGateway: 'Gerbang Log Masuk Bersepadu', backToPortal: 'Kembali ke Portal', selectAccess: 'Pilih Akses Anda', selectAccessSub: 'Pilih peranan pengguna anda untuk mengakses sistem eMP v2.0 yang selamat.', signIn: 'Log Masuk Selamat',
//       roleOfficer: 'Pegawai Mahkamah', roleOfficerDesc: 'Pengguna dalaman yang menguruskan kes, perbicaraan, dan pentadbiran.', roleEfiling: 'Pengguna e-Filing', roleEfilingDesc: 'Majikan, pekerja, dan peguam yang memfailkan dokumen guaman.', roleGuest: 'Akses Tetamu', roleGuestDesc: 'Akses sementara untuk menyertai perbicaraan mahkamah maya.',
//       userId: 'ID Pengguna / E-mel', password: 'Kata Laluan', caseRef: 'Nombor Rujukan Kes', accessCode: 'Kod Akses Sementara', joinHearing: 'Sertai Perbicaraan Maya', forgotPwd: 'Lupa kata laluan?', register: 'Daftar akaun baharu',
//       homeHearingsTitle: 'Perbicaraan & Penghakiman', homeHearingsSub: 'Jadual prosiding harian masa nyata dan award terkini yang diterbitkan.', homeHearingsTab: 'Perbicaraan Terkini', homeJudgmentsTab: 'Penghakiman Baru', fullScheduleTitle: 'Jadual Penuh Mahkamah', fullScheduleSub: 'Cari dan lihat jadual prosiding komprehensif di seluruh Mahkamah Perusahaan.', filterSearch: 'Cari pihak atau no kes...', step1Region: '1. Wilayah / Negeri', step2Court: '2. Mahkamah', step3Date: '3. Pilih Tarikh', months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
//       notices: [{ date: '12 Mac 2026', title: 'Notis Amalan Bil. 1 Tahun 2026: Pelaksanaan Sistem eMP v2.0 untuk semua pemfailan baharu.' }, { date: '08 Mac 2026', title: 'Garis Panduan kehadiran maya melalui e-Sebutan semasa cuti umum.' }],
//       searchResTitle: 'Keputusan Carian', searchResShowing: 'Menunjukkan keputusan untuk', searchFilterCategory: 'Kategori', searchFilterYear: 'Tahun', searchApplyFilters: 'Gunakan Penapis', searchClearFilters: 'Kosongkan Semua', privacy: 'Dasar Privasi', security: 'Dasar Keselamatan', disclaimer: 'Penafian',
//       dashOverview: 'Ringkasan & Laporan', dashRegistration: 'Pendaftaran Kes', dashCases: 'Pengurusan Kes', dashSchedule: 'Jadual Mahkamah', dashNotice: 'Pengurusan Notis', dashCollective: 'Perjanjian Kolektif', dashDisplay: 'Paparan Digital', dashSearch: 'Carian Pintar Award', dashAdmin: 'Pentadbir Sistem', dashAnalytics: 'Analitik Award', dashIntegration: 'Integrasi Sistem', dashUsage: 'Statistik Penggunaan', dashChairman: 'Ruang Kerja Pengerusi', logout: 'Log Keluar', kpiActive: 'Jumlah Kes Aktif', kpiNew: 'Kes Baru (Bulan Ini)', kpiClosed: 'Kes Ditutup (Bulan Ini)', kpiBacklog: 'Kes Tertunggak', kpiResolution: 'Kadar Penyelesaian', filingQueue: 'Barisan Pemfailan Terkini', chartTypeDist: 'Taburan Jenis Kes', chartMonthly: 'Trend Kes Bulanan', chartWorkload: 'Beban Tugas Pengerusi', roleYDP: 'YDP / Eksekutif', roleChairman: 'Pengerusi (Hakim)', roleRegistrar: 'Pendaftar', roleAdmin: 'Pentadbir',
//     }
//   };

//   const currentLang = t[lang] || t.en;

//   const isHighContrast = wcagStates.highContrast;
//   const tBg = isHighContrast ? 'bg-black text-white' : 'bg-slate-50 text-slate-900';
//   const tTextSub = isHighContrast ? 'text-slate-300' : 'text-slate-500';
//   const a11yClasses = `${wcagStates.invert ? 'invert' : ''} ${wcagStates.greyHues ? 'grayscale' : ''} ${wcagStates.textSpacing ? 'tracking-widest' : ''} ${wcagStates.bigCursor ? 'cursor-[url(https://cdn-icons-png.flaticon.com/512/32/32543.png),_auto]' : ''}`;

//   const daysInMonthCount = new Date(calendarYear, calendarMonth + 1, 0).getDate();
//   const daysInMonthArray = Array.from({ length: daysInMonthCount }, (_, i) => i + 1);
//   const startDayOffset = new Date(calendarYear, calendarMonth, 1).getDay();
//   const blankDaysArray = Array.from({ length: startDayOffset }, (_, i) => i);
//   const daysWithHearings = [12, 14, 15, 22, 28]; // Mock data

//   const filteredSearchResults = mockSearchResults.filter(res => {
//     if (!searchQuery.trim()) return true;
//     const q = searchQuery.toLowerCase();
//     return res.title.toLowerCase().includes(q) || res.summary.toLowerCase().includes(q) || res.id.toLowerCase().includes(q) || res.court.toLowerCase().includes(q) || res.keywords.some(k => k.toLowerCase().includes(q));
//   });

//   const highlightText = (text, highlight) => {
//     if (!highlight || !highlight.trim()) return text;
//     const regex = new RegExp(`(${highlight})`, 'gi');
//     return text.split(regex).map((part, i) => regex.test(part) ? <mark key={i} className={`bg-transparent ${isHighContrast ? 'text-white font-bold bg-slate-800' : 'text-blue-800 font-bold bg-blue-100'} px-1 rounded`}>{part}</mark> : part);
//   };

//   const wcagOptions = [
//     { icon: ZoomIn, label: 'Increase Text Size', action: handleZoomIn, active: false },
//     { icon: ZoomOut, label: 'Decrease Text Size', action: handleZoomOut, active: false },
//     { icon: MoveHorizontal, label: 'Increase Text Spacing', action: () => toggleWcag('textSpacing'), active: wcagStates.textSpacing },
//     { icon: FoldHorizontal, label: 'Decrease Text Spacing', action: () => setWcagStates(prev => ({ ...prev, textSpacing: false })), active: !wcagStates.textSpacing && textSize === 100 },
//     { icon: Contrast, label: 'High Contrast Colours', action: () => toggleWcag('highContrast'), active: isHighContrast },
//     { icon: Contrast, label: 'Invert Colours', action: () => toggleWcag('invert'), active: wcagStates.invert },
//     { icon: Droplet, label: 'Grey Hues', action: () => toggleWcag('greyHues'), active: wcagStates.greyHues },
//     { icon: Underline, label: 'Underline Links', action: () => toggleWcag('underline'), active: wcagStates.underline },
//     { icon: MousePointer2, label: 'Big Cursor', action: () => toggleWcag('bigCursor'), active: wcagStates.bigCursor },
//     { icon: AlignJustify, label: 'Reading Guide', action: () => toggleWcag('readingGuide'), active: wcagStates.readingGuide },
//     { icon: Volume2, label: 'Text to Speech', action: () => toggleWcag('tts'), active: wcagStates.tts },
//     { icon: Mic, label: 'Speech to Text', action: () => toggleWcag('stt'), active: wcagStates.stt },
//   ];

//   const allModules = [
//     { items: [{ icon: Globe, enTitle: 'eMP Portal [M1]', enDesc: 'Official website for public information access.' }, { icon: Calendar, enTitle: 'Court Schedule [M6]', enDesc: 'Latest proceedings and trial schedules.' }, { icon: Monitor, enTitle: 'Digital Display [M7]', enDesc: 'Integration for LED screens outside courtrooms.' }] },
//     { items: [{ icon: Key, enTitle: 'Access Management [M2]', enDesc: 'Centralized Login (SSO) & MyDigital ID.' }, { icon: UploadCloud, enTitle: 'e-Filing & e-Service [M4]', enDesc: 'Online case document filing for parties.' }, { icon: MessageSquare, enTitle: 'e-Mention [M5]', enDesc: 'Virtual case mention proceedings.' }, { icon: Search, enTitle: 'Smart Award Search [M8]', enDesc: 'Semantic AI & Full-Text Search.' }, { icon: Bell, enTitle: 'Notice Management [M3]', enDesc: 'Notifications, reminders, and schedules.' }] },
//     { items: [{ icon: FilePlus, enTitle: 'Case Registration [M9]', enDesc: 'Registration and automated distribution.' }, { icon: Briefcase, enTitle: 'Case Management [M10]', enDesc: 'Management of the entire trial process.' }, { icon: Users, enTitle: 'Collective Agreement [M11]', enDesc: 'Registration and review of CA.' }, { icon: BarChart, enTitle: 'Dashboard & Reports [M12]', enDesc: 'Automated statistics and analytics.' }, { icon: Settings, enTitle: 'System Admin [M13]', enDesc: 'System configuration and audit logs.' }] }
//   ];

//   // --- MOCK ANALYTICS DATA (Derived from PDF) ---
//   const chYears = ['19', '20', '21', '22', '23', '24', '25', '26'];
//   const ch1 = [{ rg: 820, rs: 745 }, { rg: 756, rs: 689 }, { rg: 912, rs: 801 }, { rg: 1034, rs: 912 }, { rg: 1148, rs: 1021 }, { rg: 1206, rs: 1102 }, { rg: 1278, rs: 1156 }, { rg: 1321, rs: 1188 }];
//   const ch2 = [{ d: 412, c: 126, r: 109, t: 98 }, { d: 378, c: 118, r: 102, t: 91 }, { d: 451, c: 140, r: 110, t: 100 }, { d: 512, c: 162, r: 123, t: 115 }, { d: 548, c: 170, r: 138, t: 121 }, { d: 572, c: 184, r: 142, t: 129 }, { d: 603, c: 195, r: 150, t: 140 }, { d: 620, c: 201, r: 159, t: 152 }];
//   const ch3 = [{ ud: 820, ca: 84, td: 63, ur: 22 }, { ud: 756, ca: 72, td: 58, ur: 19 }, { ud: 912, ca: 95, td: 71, ur: 24 }, { ud: 1034, ca: 108, td: 83, ur: 29 }, { ud: 1148, ca: 122, td: 95, ur: 31 }, { ud: 1206, ca: 131, td: 102, ur: 36 }, { ud: 1278, ca: 142, td: 114, ur: 40 }, { ud: 1321, ca: 148, td: 121, ur: 45 }];
//   const ch4Vals = [10.8, 10.5, 10.2, 9.8, 9.5, 9.2, 9.1, 8.9];
//   const ch4Pts = ch4Vals.map((v, i) => `${i * (100 / 7)},${50 - ((v - 8) / 3 * 50)}`).join(' ');
//   const ch5 = [{ loc: 'Kuala Lumpur', val: 284 }, { loc: 'Selangor', val: 312 }, { loc: 'Johor', val: 176 }, { loc: 'Penang', val: 142 }, { loc: 'Perak', val: 118 }, { loc: 'Sabah', val: 95 }, { loc: 'Sarawak', val: 82 }];
//   const ch7Sched = [1122, 1034, 1178, 1245, 1328, 1401, 1468, 1512];
//   const ch7Comp = [1051, 970, 1112, 1191, 1267, 1344, 1420, 1468];
//   const ch7SchedPts = ch7Sched.map((v, i) => `${i * (100 / 7)},${50 - ((v - 900) / 700 * 50)}`).join(' ');
//   const ch7CompPts = ch7Comp.map((v, i) => `${i * (100 / 7)},${50 - ((v - 900) / 700 * 50)}`).join(' ');
//   const ch8 = [{ s1: 720, s2: 694, s3: 412 }, { s1: 688, s2: 642, s3: 398 }, { s1: 821, s2: 788, s3: 456 }, { s1: 901, s2: 867, s3: 502 }, { s1: 982, s2: 942, s3: 540 }, { s1: 1041, s2: 998, s3: 590 }, { s1: 1102, s2: 1051, s3: 620 }, { s1: 1158, s2: 1108, s3: 648 }];
//   const ch10 = [84, 91, 73, 61, 54, 48, 42, 39];

//   // --- REUSABLE UI ---
//   const renderNavbar = () => (
//     <>
//       <div className={`text-xs py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 transition-colors ${isHighContrast ? 'bg-black border-b border-white text-white' : 'bg-slate-900 text-slate-300'}`}>
//         <div className="font-medium tracking-wide uppercase text-[10px] sm:text-xs text-center sm:text-left">{currentLang.govPortal}</div>
//         <div className="flex items-center space-x-6"><button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="flex items-center hover:text-white transition-colors font-semibold"><Globe className="w-3.5 h-3.5 mr-1.5" />{lang === 'en' ? 'Bahasa Melayu' : 'English'}</button></div>
//       </div>
//       <nav className={`relative z-40 transition-colors ${isHighContrast ? 'bg-black border-b border-white' : 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 sm:h-24">
//             <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => setCurrentView('portal')}>
//               <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center ${isHighContrast ? 'border-2 border-white text-white' : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-900/20'}`}><Scale className="w-6 h-6 sm:w-7 sm:h-7" /></div>
//               <div className="flex flex-col justify-center">
//                 <span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.portal}</span>
//                 <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${isHighContrast ? 'text-white' : 'text-blue-600'}`}>eMP v2.0</span>
//               </div>
//             </div>
//             <div className="hidden lg:flex items-center space-x-8">
//               <button onClick={() => setCurrentView('portal')} className={`text-sm font-semibold transition-colors ${currentView === 'portal' ? 'text-blue-600' : isHighContrast ? 'text-white hover:underline' : 'text-slate-600 hover:text-slate-900'}`}>{currentLang.home}</button>
//               <button onClick={() => setCurrentView('about')} className={`text-sm font-semibold transition-colors ${currentView === 'about' ? 'text-blue-600' : isHighContrast ? 'text-white hover:underline' : 'text-slate-600 hover:text-slate-900'}`}>{currentLang.about}</button>
//               <button onClick={() => setCurrentView('modules')} className={`text-sm font-semibold transition-colors ${currentView === 'modules' ? 'text-blue-600' : isHighContrast ? 'text-white hover:underline' : 'text-slate-600 hover:text-slate-900'}`}>{currentLang.modules}</button>
//               <button onClick={() => setCurrentView('schedule')} className={`text-sm font-semibold transition-colors ${currentView === 'schedule' ? 'text-blue-600' : isHighContrast ? 'text-white hover:underline' : 'text-slate-600 hover:text-slate-900'}`}>{currentLang.schedule}</button>
//               <button onClick={() => setCurrentView('contact')} className={`text-sm font-semibold transition-colors ${currentView === 'contact' ? 'text-blue-600' : isHighContrast ? 'text-white hover:underline' : 'text-slate-600 hover:text-slate-900'}`}>{currentLang.contact}</button>
//               <div className={`pl-6 border-l h-8 flex items-center ${isHighContrast ? 'border-white' : 'border-slate-200'}`}>
//                 <button onClick={() => setCurrentView('login')} className={`flex items-center px-6 py-2.5 text-sm font-bold rounded-full transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 hover:bg-blue-600 text-white shadow hover:shadow-lg hover:shadow-blue-600/20'}`}><LogIn className="w-4 h-4 mr-2" />{currentLang.login}</button>
//               </div>
//             </div>
//             <div className="flex items-center lg:hidden">
//               <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${isHighContrast ? 'text-white border border-white' : 'text-slate-600 bg-slate-100'}`}>{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
//             </div>
//           </div>
//         </div>
//         {mobileMenuOpen && (
//           <div className={`lg:hidden absolute top-full left-0 w-full z-50 border-t ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-100 shadow-2xl'}`}>
//             <div className="px-4 py-6 space-y-4 flex flex-col">
//               <button onClick={() => { setMobileMenuOpen(false); setCurrentView('portal'); }} className={`text-left text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>{currentLang.home}</button>
//               <button onClick={() => { setMobileMenuOpen(false); setCurrentView('about'); }} className={`text-left text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>{currentLang.about}</button>
//               <button onClick={() => { setMobileMenuOpen(false); setCurrentView('modules'); }} className={`text-left text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>{currentLang.modules}</button>
//               <button onClick={() => { setMobileMenuOpen(false); setCurrentView('schedule'); }} className={`text-left text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>{currentLang.schedule}</button>
//               <button onClick={() => { setMobileMenuOpen(false); setCurrentView('contact'); }} className={`text-left text-base font-semibold px-4 py-2 rounded-lg ${isHighContrast ? 'text-white hover:bg-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>{currentLang.contact}</button>
//               <div className="pt-4 mt-2 border-t border-slate-100">
//                 <button onClick={() => { setMobileMenuOpen(false); setCurrentView('login'); }} className={`w-full flex justify-center items-center px-6 py-3 text-base font-bold rounded-xl transition-all ${isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white'}`}><LogIn className="w-5 h-5 mr-2" />{currentLang.login}</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );

//   const renderFooter = () => (
//     <footer className={`${isHighContrast ? 'bg-black border-t-2 border-white' : 'bg-slate-900 text-slate-400'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8 sm:pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
//           <div className="lg:col-span-5 pr-0 lg:pr-8">
//             <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
//               <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${isHighContrast ? 'border-2 border-white text-white' : 'bg-blue-600 text-white shadow-lg'}`}><Scale className="w-5 h-5 sm:w-6 sm:h-6" /></div>
//               <div>
//                 <h3 className={`text-lg sm:text-xl font-extrabold leading-tight ${isHighContrast ? 'text-white' : 'text-white'}`}>{currentLang.portal}</h3>
//                 <p className="text-[10px] sm:text-xs tracking-widest text-blue-500 font-bold uppercase mt-1">eMP v2.0</p>
//               </div>
//             </div>
//             <p className={`text-sm sm:text-base leading-relaxed mb-8 ${isHighContrast ? 'text-white' : 'text-slate-400'}`}>{currentLang.footerDesc}</p>
//             <ul className="space-y-4 sm:space-y-5 text-sm font-medium">
//               <li className="flex items-start group"><MapPin className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 transition-colors ${isHighContrast ? 'text-white' : 'text-slate-500 group-hover:text-blue-500'}`} /><span className={`${isHighContrast ? 'text-white' : 'text-slate-300'}`}>Mahkamah Perusahaan Malaysia,<br />Wisma Perkeso, Jalan Tun Razak,<br />50400 Kuala Lumpur</span></li>
//             </ul>
//           </div>
//           <div className="lg:col-span-3 lg:col-start-7">
//             <h4 className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 ${isHighContrast ? 'text-white' : 'text-slate-100'}`}>{currentLang.quickLinksTitle}</h4>
//             <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
//               {currentLang.quickLinks.slice(0, 5).map((link, idx) => (<li key={idx}><button onClick={() => handleQuickLink(link.title)} className="hover:text-blue-400 transition-colors flex items-center group outline-none"><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> {link.title.replace('\n', ' ')}</button></li>))}
//             </ul>
//           </div>
//           <div className="lg:col-span-3">
//             <h4 className={`text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 sm:mb-8 ${isHighContrast ? 'text-white' : 'text-slate-100'}`}>{currentLang.resourcesTitle}</h4>
//             <ul className="space-y-3 sm:space-y-4 text-sm font-medium">
//               <li><button className="hover:text-blue-400 transition-colors flex items-center group outline-none"><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> Ministry of Human Resources</button></li>
//               <li><button className="hover:text-blue-400 transition-colors flex items-center group outline-none"><ChevronRight className="w-4 h-4 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" /> Labour Department</button></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className={`border-t ${isHighContrast ? 'border-white' : 'border-slate-800'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
//           <p className={isHighContrast ? 'text-white' : 'text-slate-500'}>&copy; 2026 {currentLang.rights}</p>
//           <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium">
//             <button className="hover:text-white transition-colors flex items-center"><Shield className="w-4 h-4 mr-1.5 opacity-60" /> {currentLang.privacy}</button>
//             <button className="hover:text-white transition-colors flex items-center"><ShieldAlert className="w-4 h-4 mr-1.5 opacity-60" /> {currentLang.security}</button>
//             <button className="hover:text-white transition-colors flex items-center"><FileWarning className="w-4 h-4 mr-1.5 opacity-60" /> {currentLang.disclaimer}</button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );

//   // --- RENDER ---
//   return (
//     <div className={`min-h-screen font-sans transition-all duration-300 overflow-x-hidden ${tBg} ${a11yClasses}`} style={{ fontSize: `${textSize}%` }}>
//       <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } ${wcagStates.underline ? 'button, a { text-decoration: underline !important; text-underline-offset: 4px; }' : ''} ${wcagStates.readingGuide ? 'body::after { content: ""; position: fixed; top: 50%; left: 0; width: 100%; height: 4px; background: rgba(59, 130, 246, 0.5); z-index: 9999; pointer-events: none; }' : ''}`}</style>

//       {/* WCAG Floating Button & Panel */}
//       <button onClick={() => setIsWcagOpen(true)} className={`fixed right-0 top-1/4 sm:top-1/3 z-[90] py-3 px-1.5 sm:py-4 sm:px-2 rounded-l-xl shadow-2xl transition-transform duration-300 hover:-translate-x-1 flex flex-col items-center gap-2 sm:gap-3 border border-r-0 ${isHighContrast ? 'bg-black border-white text-white' : 'bg-blue-600 border-blue-500 text-white'}`} aria-label="Accessibility Tools"><Accessibility className="w-4 h-4 sm:w-5 sm:h-5 text-white" /><span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>A11y</span></button>
//       <div className={`fixed inset-0 z-[95] bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${isWcagOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsWcagOpen(false)} />
//       <div className={`fixed top-0 right-0 z-[100] h-full w-full sm:w-[400px] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isWcagOpen ? 'translate-x-0' : 'translate-x-full'} ${isHighContrast ? 'bg-black border-l-2 border-white text-white' : 'bg-white text-slate-900'}`}>
//         <div className={`flex justify-between items-center p-6 border-b ${isHighContrast ? 'border-white' : 'border-slate-100'}`}><h2 className="text-xl font-bold flex items-center gap-3"><Accessibility className={`w-6 h-6 ${isHighContrast ? 'text-white' : 'text-blue-600'}`} /> {currentLang.a11yTitle}</h2><div className="flex items-center gap-2"><button onClick={handleZoomReset} className={`p-2 rounded-full transition-colors ${isHighContrast ? 'hover:bg-slate-800' : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50'}`}><RotateCcw className="w-5 h-5" /></button><button onClick={() => setIsWcagOpen(false)} className={`p-2 rounded-full transition-colors ${isHighContrast ? 'hover:bg-slate-800 text-red-400' : 'text-slate-500 hover:text-red-500 hover:bg-red-50'}`}><X className="w-6 h-6" /></button></div></div>
//         <div className={`flex-1 overflow-y-auto p-6 space-y-3 hide-scrollbar ${isHighContrast ? 'bg-black' : 'bg-white'}`}>
//           {wcagOptions.map((opt, i) => (<button key={i} onClick={opt.action} className={`w-full flex items-center px-5 py-3.5 border rounded-[16px] transition-all duration-200 ${opt.active ? (isHighContrast ? 'bg-white text-black border-white' : 'bg-blue-600 text-white border-blue-600 shadow-sm') : (isHighContrast ? 'bg-black text-white border-slate-700 hover:border-white' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50')}`}><opt.icon className={`w-5 h-5 mr-4 flex-shrink-0 transition-colors ${opt.active ? (isHighContrast ? 'text-black' : 'text-white') : 'text-slate-400'}`} strokeWidth={1.5} /><span className="text-[1.05rem] font-medium">{opt.label}</span></button>))}
//         </div>
//       </div>

//       {currentView === 'login' ? (
//         <div className={`min-h-screen flex flex-col ${isHighContrast ? 'bg-black' : 'bg-slate-50'}`}>
//           <header className={`h-20 sm:h-24 px-4 sm:px-8 flex justify-between items-center border-b ${isHighContrast ? 'border-white' : 'border-slate-200 bg-white'}`}>
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center ${isHighContrast ? 'border-2 border-white text-white' : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg'}`}><Scale className="w-6 h-6 sm:w-7 sm:h-7" /></div>
//               <div className="flex flex-col"><span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none mb-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.portal}</span><span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-600">{currentLang.loginGateway}</span></div>
//             </div>
//             <div className="flex items-center gap-4">
//               <button onClick={() => setCurrentView('portal')} className={`flex items-center px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-bold rounded-full transition-all ${isHighContrast ? 'border border-white text-white hover:bg-white hover:text-black' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'}`}><ArrowLeft className="w-4 h-4 mr-2" /><span className="hidden sm:inline">{currentLang.backToPortal}</span></button>
//             </div>
//           </header>
//           <main className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
//             <div className={`w-full max-w-xl relative z-10 p-8 rounded-[32px] shadow-xl transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-slate-200'}`}>
//               <div className="text-center mb-8"><h2 className={`text-3xl font-extrabold mb-2 tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.selectAccess}</h2><p className={tTextSub}>{currentLang.selectAccessSub}</p></div>
//               <div className={`flex p-1.5 rounded-[20px] mb-8 ${isHighContrast ? 'border border-white' : 'bg-slate-100'}`}>
//                 <button onClick={() => setLoginMethod('standard')} className={`flex-1 py-3 text-sm font-bold rounded-[14px] transition-all ${loginMethod === 'standard' ? (isHighContrast ? 'bg-white text-black' : 'bg-white text-blue-600 shadow-sm') : 'text-slate-500 hover:text-slate-700'}`}>Single Entry Point</button>
//                 <button onClick={() => setLoginMethod('sso')} className={`flex-1 py-3 text-sm font-bold rounded-[14px] transition-all ${loginMethod === 'sso' ? (isHighContrast ? 'bg-white text-black' : 'bg-white text-blue-600 shadow-sm') : 'text-slate-500 hover:text-slate-700'}`}>MyDigital ID / SSO</button>
//               </div>
//               <form className="space-y-5" onSubmit={handleLoginSubmit}>
//                 {loginMethod === 'standard' ? (
//                   <>
//                     <div className="p-4 mb-6 rounded-2xl border border-blue-200 bg-blue-50 text-blue-800 text-sm"><span className="font-bold flex items-center mb-2"><Globe className="w-4 h-4 mr-2" /> Prototype Demo Access</span>Select a role below to simulate the end-to-end dashboard experiences required by the brief.</div>
//                     <div>
//                       <label className={`block text-sm font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-slate-700'}`}>Simulate Login As (Role)</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><UserCircle className="h-5 w-5 text-slate-400" /></div>
//                         <select value={demoRole} onChange={(e) => setDemoRole(e.target.value)} className={`block w-full appearance-none rounded-[16px] py-3.5 pl-12 pr-10 focus:ring-2 focus:outline-none transition-all font-semibold text-sm ${isHighContrast ? 'bg-black text-white border-2 border-white focus:ring-white' : 'bg-white border border-slate-200 text-slate-900 focus:ring-blue-500 focus:border-transparent'}`}>
//                           <option value="ydp">YDP / Executive Management</option>
//                           <option value="registrar">Registrar / Court Officer</option>
//                           <option value="chairman">Chairman (Judge)</option>
//                           <option value="admin">System Administrator</option>
//                           <option value="efiling">eFiling User (Lawyer / Claimant)</option>
//                           <option value="guest">Guest User (e-Sebutan Attendee)</option>
//                         </select>
//                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                       </div>
//                     </div>
//                     <div>
//                       <label className={`block text-sm font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-slate-700'}`}>Password / Pin</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Lock className="h-5 w-5 text-slate-400" /></div>
//                         <input type="password" value="••••••••" readOnly className={`block w-full rounded-[16px] py-3.5 pl-12 pr-4 focus:outline-none transition-all font-bold ${isHighContrast ? 'bg-black text-white border-2 border-white focus:ring-white' : 'bg-slate-50 border border-slate-200 text-slate-900'}`} />
//                       </div>
//                     </div>
//                     <div className="pt-4">
//                       <button type="submit" className={`w-full flex justify-center items-center py-4 rounded-[16px] font-bold text-base transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'}`}>
//                         Sign In & Enter Dashboard <ArrowUpRight className="w-5 h-5 ml-2" />
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center py-8 text-center">
//                     <div className={`w-28 h-28 rounded-3xl flex items-center justify-center mb-6 shadow-lg ${isHighContrast ? 'border-2 border-white' : 'bg-white border border-slate-200 text-blue-600'}`}>
//                       <Fingerprint className="w-14 h-14" />
//                     </div>
//                     <h3 className={`text-xl font-extrabold mb-2 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>MyDigital ID</h3>
//                     <p className={`text-sm mb-8 max-w-sm ${tTextSub}`}>Click below to authenticate securely using the National Digital Identity platform.</p>
//                     <button type="button" onClick={() => { setDemoRole('ydp'); setCurrentView('dashboard-internal'); setDashActiveView('overview'); }} className={`w-full flex justify-center items-center py-4 rounded-[16px] font-bold text-base transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'}`}>
//                       Authenticate via MyDigital ID <ArrowUpRight className="w-5 h-5 ml-2" />
//                     </button>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </main>
//         </div>

//       ) : currentView === 'search' ? (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}
//           <main className="flex-1 flex flex-col relative z-10">
//             <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 relative overflow-hidden'}`}>
//               <div className="max-w-7xl mx-auto relative z-10">
//                 <nav className="flex items-center text-sm font-bold text-blue-600 mb-6">
//                   <button onClick={() => setCurrentView('portal')} className="hover:underline transition-colors flex items-center"><ArrowLeft className="w-4 h-4 mr-1.5" /> {currentLang.home}</button>
//                   <ChevronRight className="w-4 h-4 mx-2 text-slate-400" /><span className="text-slate-500">{currentLang.searchResTitle}</span>
//                 </nav>
//                 <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.searchResTitle}</h1>
//                 <form onSubmit={handleGlobalSearch} className="flex items-center gap-4 max-w-2xl mt-6">
//                   <div className="relative flex-1">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Search className="h-5 w-5 text-slate-400" /></div>
//                     <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`w-full pl-12 pr-4 py-3.5 rounded-[20px] border text-base font-medium transition-all ${isHighContrast ? 'bg-black border-white text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm'}`} placeholder={currentLang.searchPlace} />
//                   </div>
//                   <button type="submit" className={`px-8 py-3.5 rounded-[20px] font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20'}`}>Search</button>
//                 </form>
//               </div>
//             </div>
//             <div className={`flex-1 py-8 sm:py-12 ${isHighContrast ? 'bg-black' : 'bg-slate-50'}`}>
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row gap-8 items-start">
//                   <aside className="w-full lg:w-1/4 space-y-6 flex-shrink-0 hidden lg:block">
//                     <div className={`p-6 rounded-[24px] shadow-sm ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-slate-200'}`}>
//                       <h3 className={`text-lg font-bold mb-6 flex items-center ${isHighContrast ? 'text-white' : 'text-slate-900'}`}><SlidersHorizontal className="w-5 h-5 mr-2 text-blue-600" /> Filters</h3>
//                       <div className="space-y-6">
//                         <div>
//                           <label className={`text-[10px] font-bold uppercase tracking-wider mb-3 block ${isHighContrast ? 'text-slate-300' : 'text-slate-500'}`}>{currentLang.searchFilterCategory}</label>
//                           <div className="space-y-3">
//                             {['All Categories', 'Award', 'Case / Hearing', 'Practice Note'].map(cat => (
//                               <label key={cat} className="flex items-center gap-3 cursor-pointer group">
//                                 <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${cat === 'All Categories' ? (isHighContrast ? 'bg-white border-white' : 'bg-blue-600 border-blue-600') : (isHighContrast ? 'border-slate-500 group-hover:border-white' : 'border-slate-300 group-hover:border-blue-400')}`}>
//                                   {cat === 'All Categories' && <div className={`w-2.5 h-2.5 rounded-sm ${isHighContrast ? 'bg-black' : 'bg-white'}`} />}
//                                 </div>
//                                 <span className={`text-sm font-semibold transition-colors ${isHighContrast ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>{cat}</span>
//                               </label>
//                             ))}
//                           </div>
//                         </div>
//                         <div className={`w-full h-px ${isHighContrast ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
//                         <div>
//                           <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-slate-300' : 'text-slate-500'}`}>{currentLang.searchFilterYear}</label>
//                           <div className="relative">
//                             <select className={`w-full pl-4 pr-10 py-2.5 rounded-xl border text-sm font-semibold appearance-none transition-all ${isHighContrast ? 'bg-black border-white text-white' : 'bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500'}`}>
//                               <option>All Years</option><option>2026</option><option>2025</option><option>2024</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </aside>
//                   <div className="w-full lg:w-3/4 flex flex-col">
//                     <div className="mb-6">
//                       <p className={`text-sm sm:text-base font-semibold ${tTextSub}`}>
//                         {currentLang.searchResShowing} <span className={isHighContrast ? 'text-white' : 'text-slate-900 font-extrabold'}>{filteredSearchResults.length} items</span> {searchQuery ? `for "${searchQuery}"` : ''}
//                       </p>
//                     </div>
//                     <div className="space-y-4 sm:space-y-6">
//                       {filteredSearchResults.length === 0 ? (
//                         <div className={`p-16 text-center rounded-[24px] border-2 border-dashed flex flex-col items-center justify-center ${isHighContrast ? 'border-slate-800 bg-black' : 'border-slate-200 bg-white'}`}>
//                           <FileSearch className={`w-16 h-16 mb-4 ${isHighContrast ? 'text-slate-600' : 'text-slate-300'}`} />
//                           <h3 className={`text-xl font-bold mb-2 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>No results found</h3>
//                           <p className={`text-sm ${isHighContrast ? 'text-slate-400' : 'text-slate-500'}`}>We couldn't find any matches for "{searchQuery}".</p>
//                         </div>
//                       ) : (
//                         filteredSearchResults.map((res, idx) => {
//                           const isAward = res.type === 'Award';
//                           const isCase = res.type === 'Case';
//                           return (
//                             <div key={idx} className={`p-6 sm:p-8 rounded-[24px] border transition-all duration-300 group ${isHighContrast ? 'bg-black border-white hover:ring-2 hover:ring-white' : 'bg-white border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:border-blue-300'}`}>
//                               <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
//                                 <div className="flex-1 pr-0 sm:pr-8">
//                                   <div className="flex items-center gap-3 mb-3">
//                                     <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isHighContrast ? 'border border-white text-white' : isAward ? 'bg-emerald-100 text-emerald-800' : isCase ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
//                                       {res.type}
//                                     </span>
//                                     <span className={`text-xs sm:text-sm font-mono font-bold ${isHighContrast ? 'text-slate-400' : 'text-slate-500'}`}>{highlightText(res.id, searchQuery)}</span>
//                                   </div>
//                                   <h4 className={`text-lg sm:text-xl font-extrabold leading-tight mb-3 ${isHighContrast ? 'text-white' : 'text-blue-700 group-hover:text-blue-800'}`}>{highlightText(res.title, searchQuery)}</h4>
//                                 </div>
//                                 <button className={`hidden sm:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-xl transition-all ${isHighContrast ? 'border border-white text-white hover:bg-white hover:text-black' : 'bg-slate-50 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm'}`}><ArrowUpRight className="w-5 h-5" /></button>
//                               </div>
//                               <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>{highlightText(res.summary, searchQuery)}</p>
//                             </div>
//                           );
//                         })
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//           {renderFooter()}
//         </div>

//       ) : currentView === 'schedule' ? (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}
//           <main className="flex-1 flex flex-col relative z-10">
//             <div className={`pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 relative overflow-hidden'}`}>
//               <div className="max-w-7xl mx-auto relative z-10">
//                 <nav className="flex items-center text-sm font-bold text-blue-600 mb-6">
//                   <button onClick={() => setCurrentView('portal')} className="hover:underline transition-colors flex items-center"><ArrowLeft className="w-4 h-4 mr-1.5" />{currentLang.home}</button>
//                   <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
//                   <span className="text-slate-500">{currentLang.schedule}</span>
//                 </nav>
//                 <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{currentLang.fullScheduleTitle}</h1>
//               </div>
//             </div>

//             <div className={`flex-1 py-6 sm:py-10 ${isHighContrast ? 'bg-black' : 'bg-slate-50'}`}>
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row gap-8 items-start">

//                   <aside className="w-full lg:w-1/3 xl:w-1/4 space-y-6 flex-shrink-0">
//                     <div className={`p-6 rounded-[24px] shadow-sm ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border border-slate-200'}`}>
//                       <div className="mb-6">
//                         <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-slate-300' : 'text-slate-500'}`}>{currentLang.step1Region}</label>
//                         <select className={`w-full py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${isHighContrast ? 'bg-black text-white border-white' : 'bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20'}`} value={selectedRegion} onChange={(e) => { setSelectedRegion(e.target.value); setSelectedCourt(courtLocations.find(l => l.region === e.target.value)?.courts?.[0] || ""); }}>
//                           {courtLocations.map(loc => <option key={loc.region} value={loc.region}>{loc.region}</option>)}
//                         </select>
//                       </div>
//                       <div className="mb-8">
//                         <label className={`text-[10px] font-bold uppercase tracking-wider mb-2 block ${isHighContrast ? 'text-slate-300' : 'text-slate-500'}`}>{currentLang.step2Court}</label>
//                         <select className={`w-full py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${isHighContrast ? 'bg-black text-white border-white' : 'bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20'}`} value={selectedCourt} onChange={(e) => setSelectedCourt(e.target.value)}>
//                           {(courtLocations.find(l => l.region === selectedRegion)?.courts || []).map(court => <option key={court} value={court}>{court}</option>)}
//                         </select>
//                       </div>
//                       <div className={`w-full h-px mb-8 ${isHighContrast ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

//                       <div>
//                         <div className="flex justify-between items-center mb-4">
//                           <h2 className="font-extrabold text-lg">{currentLang.months[calendarMonth]} {calendarYear}</h2>
//                         </div>
//                         <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold mb-2 text-slate-500"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
//                         <div className="grid grid-cols-7 gap-1">
//                           {blankDaysArray.map(d => <div key={`blank-${d}`} className="h-8 sm:h-10"></div>)}
//                           {daysInMonthArray.map(day => {
//                             const hasHearing = daysWithHearings.includes(day);
//                             const isSelected = selectedDate === day;
//                             return (
//                               <button key={day} onClick={() => setSelectedDate(day)} className={`relative h-8 sm:h-10 w-full rounded-[10px] text-sm font-bold ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 text-slate-700'}`}>
//                                 <span className="relative z-10">{day}</span>
//                                 {hasHearing && <span className={`absolute bottom-1 w-1 h-1 rounded-full left-1/2 -translate-x-1/2 ${isSelected ? 'bg-white' : 'bg-blue-500'}`}></span>}
//                               </button>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   </aside>

//                   <div className="w-full lg:flex-1">
//                     <div className="flex justify-between items-center mb-6">
//                       <div>
//                         <h2 className="text-2xl font-extrabold">{selectedDate} {currentLang.months[calendarMonth]} {calendarYear}</h2>
//                         <p className="text-blue-600 font-bold text-sm flex items-center mt-1"><MapPin className="w-4 h-4 mr-1" /> {selectedCourt}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       {upcomingHearings.map((hearing, idx) => (
//                         <div key={idx} className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow">
//                           <div className="flex justify-between items-center mb-4">
//                             <div className="flex items-center gap-3">
//                               <span className="font-black text-2xl text-slate-900">{hearing.time}</span>
//                               <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-lg">{mockHearingsTypes[idx]}</span>
//                             </div>
//                           </div>
//                           <h4 className="text-lg font-extrabold text-slate-900">{hearing.claimant} <span className="text-slate-400 mx-1">v</span> {hearing.respondent}</h4>
//                           <p className="font-mono text-xs font-bold text-blue-600 mt-1 mb-4">{hearing.id}</p>
//                           <p className="text-sm text-slate-600 leading-relaxed font-medium">{hearing.summary}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </main>
//           {renderFooter()}
//         </div>

//       ) : currentView === 'dashboard-internal' ? (
//         <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">

//           {/* DASHBOARD MOBILE OVERLAY */}
//           {dashMobileMenuOpen && (
//             <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setDashMobileMenuOpen(false)} />
//           )}

//           {/* DASHBOARD SIDEBAR */}
//           <aside className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-[#0B1120] text-slate-400 flex flex-col flex-shrink-0 border-r border-[#1E293B] transform transition-transform duration-300 md:relative md:translate-x-0 ${dashMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//             <div className="h-20 flex items-center justify-between px-6 border-b border-[#1E293B]">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-3 shadow-lg shadow-blue-900/20">
//                   <Scale className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="text-white font-extrabold text-base leading-none mb-1">eMP v2.0</span>
//                   <span className="text-[9px] uppercase tracking-widest text-blue-400 font-bold">
//                     {t.en[demoRole === 'ydp' ? 'roleYDP' : demoRole === 'chairman' ? 'roleChairman' : demoRole === 'admin' ? 'roleAdmin' : 'roleRegistrar']}
//                   </span>
//                 </div>
//               </div>
//               <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setDashMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4 hide-scrollbar">
//               <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Dashboards</div>

//               <button onClick={() => { setDashActiveView('overview'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'overview' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <LayoutDashboard className={`w-5 h-5 mr-3 ${dashActiveView === 'overview' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashOverview}
//               </button>
//               <button onClick={() => { setDashActiveView('chairman'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'chairman' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Gavel className={`w-5 h-5 mr-3 ${dashActiveView === 'chairman' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashChairman}
//               </button>
//               <button onClick={() => { setDashActiveView('analytics'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'analytics' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <PieChart className={`w-5 h-5 mr-3 ${dashActiveView === 'analytics' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashAnalytics}
//               </button>

//               <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-6">Teras (Core)</div>

//               <button onClick={() => { setDashActiveView('registration'); setInternalActionView(null); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'registration' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <FilePlus className={`w-5 h-5 mr-3 ${dashActiveView === 'registration' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashRegistration}
//               </button>
//               <button onClick={() => { setDashActiveView('cases'); setInternalActionView(null); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'cases' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Briefcase className={`w-5 h-5 mr-3 ${dashActiveView === 'cases' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashCases}
//               </button>
//               <button onClick={() => { setDashActiveView('schedule_int'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'schedule_int' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Calendar className={`w-5 h-5 mr-3 ${dashActiveView === 'schedule_int' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashSchedule}
//               </button>
//               <button onClick={() => { setDashActiveView('notice'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'notice' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Bell className={`w-5 h-5 mr-3 ${dashActiveView === 'notice' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashNotice}
//               </button>
//               <button onClick={() => { setDashActiveView('collective'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'collective' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Users className={`w-5 h-5 mr-3 ${dashActiveView === 'collective' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashCollective}
//               </button>
//               <button onClick={() => { setDashActiveView('display'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'display' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Monitor className={`w-5 h-5 mr-3 ${dashActiveView === 'display' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashDisplay}
//               </button>

//               <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-6">System Admin</div>

//               <button onClick={() => { setDashActiveView('integration'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'integration' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <ServerCrash className={`w-5 h-5 mr-3 ${dashActiveView === 'integration' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashIntegration}
//               </button>
//               <button onClick={() => { setDashActiveView('usage'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'usage' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Smartphone className={`w-5 h-5 mr-3 ${dashActiveView === 'usage' ? 'text-blue-500' : 'text-slate-500'}`} /> {currentLang.dashUsage}
//               </button>
//               <button onClick={() => { setDashActiveView('settings'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] transition-all font-bold text-sm ${dashActiveView === 'settings' ? 'bg-[#1E293B] text-white shadow-sm' : 'hover:bg-[#1E293B]/50 hover:text-white'}`}>
//                 <Settings className={`w-5 h-5 mr-3 ${dashActiveView === 'settings' ? 'text-blue-500' : 'text-slate-500'}`} /> System Admin
//               </button>
//             </div>

//             <div className="p-6 border-t border-[#1E293B]">
//               <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors text-xs font-bold text-slate-300">
//                 <LogOut className="w-4 h-4 mr-2" /> {currentLang.logout}
//               </button>
//             </div>
//           </aside>

//           {/* DASHBOARD MAIN CONTENT */}
//           <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
//             <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 flex-shrink-0">
//               <div className="flex items-center gap-3">
//                 <button className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100" onClick={() => setDashMobileMenuOpen(true)}>
//                   <Menu className="w-6 h-6" />
//                 </button>
//                 <h1 className="text-lg md:text-2xl font-extrabold text-slate-900 tracking-tight line-clamp-1">
//                   {dashActiveView === 'overview' ? currentLang.dashOverview
//                     : dashActiveView === 'chairman' ? currentLang.dashChairman
//                       : dashActiveView === 'analytics' ? currentLang.dashAnalytics
//                         : dashActiveView === 'registration' ? currentLang.dashRegistration
//                           : dashActiveView === 'cases' ? currentLang.dashCases
//                             : dashActiveView === 'schedule_int' ? currentLang.dashSchedule
//                               : dashActiveView === 'notice' ? currentLang.dashNotice
//                                 : dashActiveView === 'collective' ? currentLang.dashCollective
//                                   : dashActiveView === 'display' ? currentLang.dashDisplay
//                                     : dashActiveView === 'integration' ? currentLang.dashIntegration
//                                       : dashActiveView === 'usage' ? currentLang.dashUsage
//                                         : 'System Administration'}
//                 </h1>
//               </div>
//               <div className="flex items-center gap-3 md:gap-5">
//                 <button onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} className="hidden sm:block text-xs font-extrabold text-slate-400 hover:text-blue-600 transition-colors uppercase">{lang === 'en' ? 'MS' : 'EN'}</button>
//                 <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
//                 <button className="text-slate-400 hover:text-blue-600 transition-colors"><Bell className="w-5 h-5" /></button>
//                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-extrabold text-xs md:text-sm border-2 border-white shadow-sm">
//                   {demoRole === 'ydp' ? 'YP' : demoRole === 'chairman' ? 'CH' : demoRole === 'admin' ? 'AD' : 'RO'}
//                 </div>
//               </div>
//             </header>

//             <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 hide-scrollbar">
//               <div className="max-w-7xl mx-auto space-y-6">

//                 {/* ---------------- OVERVIEW ---------------- */}
//                 {dashActiveView === 'overview' && (
//                   <>
//                     <div className="bg-white p-4 mb-6 rounded-[20px] border border-slate-200 shadow-sm flex flex-wrap gap-3 items-center relative z-20">
//                       <div className="flex items-center gap-2 text-slate-600 font-bold text-sm px-2"><Filter className="w-4 h-4" /> Advanced Reporting Filters:</div>
//                       <select value={filterYear} onChange={e => setFilterYear(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Years (2019-2026)</option><option>2026</option><option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option><option>2020</option><option>2019</option></select>
//                       <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Court Locations</option><option>Kuala Lumpur</option><option>Selangor</option><option>Johor</option><option>Penang</option><option>Perak</option></select>
//                       <select value={filterCaseType} onChange={e => setFilterCaseType(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Case Types</option><option>Unfair Dismissal</option><option>Constructive Dismissal</option><option>Collective Agreement</option><option>Trade Dispute</option></select>
//                       <select value={filterChairman} onChange={e => setFilterChairman(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Chairmen</option><option>Y.A. Dato' Wan Jeffry</option><option>Y.A. Tuan Amrik Singh</option><option>Y.A. Tuan Zulhelmy</option></select>
//                       <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"><option>All Statuses</option><option>Registered</option><option>Mention</option><option>Hearing</option><option>Award Pending</option><option>Closed</option></select>
//                       <button className="ml-auto px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 shadow-md transition-colors">Apply Filters</button>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
//                         <div className="flex justify-between items-start mb-4">
//                           <div><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">{currentLang.kpiActive}</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">127</h3></div>
//                           <div className="p-2.5 bg-blue-50 rounded-[14px] text-blue-600"><Briefcase className="w-5 h-5 md:w-6 md:h-6" /></div>
//                         </div>
//                         <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md"><Activity className="w-3 h-3 mr-1" /> Trending up 5%</div>
//                       </div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
//                         <div className="flex justify-between items-start mb-4">
//                           <div><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Avg Resolution Time</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">68 <span className="text-lg md:text-xl text-slate-400">days</span></h3></div>
//                           <div className="p-2.5 bg-indigo-50 rounded-[14px] text-indigo-600"><Clock className="w-5 h-5 md:w-6 md:h-6" /></div>
//                         </div>
//                         <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md"><ArrowDown className="w-3 h-3 mr-1" /> 5 days faster</div>
//                       </div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] col-span-1 md:col-span-2 flex items-center justify-between overflow-hidden relative">
//                         <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-50 to-transparent z-0"></div>
//                         <div className="relative z-10">
//                           <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">{currentLang.kpiResolution}</p>
//                           <div className="flex items-baseline gap-3"><h3 className="text-3xl md:text-4xl font-black text-slate-900">67%</h3><span className="text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-0.5 rounded-md">+3% YoY</span></div>
//                           <p className="text-xs font-bold text-slate-400 mt-2 md:mt-3">Target: 80% resolution within 90 days</p>
//                         </div>
//                         <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center z-10">
//                           <svg className="w-full h-full transform -rotate-90">
//                             <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10%" fill="transparent" className="text-slate-100" />
//                             <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10%" fill="transparent" strokeDasharray="250%" strokeDashoffset="82.5%" className="text-blue-600 transition-all duration-1000 ease-out" strokeLinecap="round" />
//                           </svg>
//                           <span className="absolute text-base md:text-lg font-black text-slate-800">67%</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between mt-4">
//                       <h2 className="text-xl font-extrabold text-slate-900 flex items-center"><PieChart className="w-5 h-5 mr-2 text-blue-600" /> Advanced Analytics & Reporting</h2>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//                       {/* 1. Reg vs Resolved */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">1. Reg vs Resolved (Unfair Dismissal)</h3>
//                         <div className="relative h-48 mt-auto border-b border-slate-200">
//                           <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0"><div className="border-b border-slate-100 w-full h-0"></div><div className="border-b border-slate-100 w-full h-0"></div><div className="border-b border-slate-100 w-full h-0"></div></div>
//                           <div className="relative z-10 flex items-end gap-2 h-full justify-between px-2 pb-0">
//                             {ch1.map((d, i) => (
//                               <div key={i} className="flex-1 flex justify-center gap-1 items-end h-full">
//                                 <div className="w-full max-w-[12px] bg-blue-200 rounded-t-sm relative group" style={{ height: `${(d.rg / 1400) * 100}%` }}><div className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{d.rg}</div></div>
//                                 <div className="w-full max-w-[12px] bg-blue-600 rounded-t-sm relative group" style={{ height: `${(d.rs / 1400) * 100}%` }}><div className="hidden group-hover:block absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{d.rs}</div></div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-blue-200 mr-1.5"></span> Registered</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-blue-600 mr-1.5"></span> Resolved</div>
//                         </div>
//                       </div>

//                       {/* 2. Types of UD Resolved */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">2. Types of UD Resolved</h3>
//                         <div className="relative h-48 mt-auto border-b border-slate-200">
//                           <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
//                             {ch2.map((d, i) => (
//                               <div key={i} className="flex-1 flex flex-col justify-end gap-[1px] items-center h-full group relative">
//                                 <div className="hidden group-hover:flex absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20 w-max">{d.d + d.c + d.r + d.t} Cases</div>
//                                 <div className="w-full max-w-[16px] bg-indigo-200" style={{ height: `${(d.t / 1200) * 100}%` }}></div>
//                                 <div className="w-full max-w-[16px] bg-indigo-400" style={{ height: `${(d.r / 1200) * 100}%` }}></div>
//                                 <div className="w-full max-w-[16px] bg-indigo-600" style={{ height: `${(d.c / 1200) * 100}%` }}></div>
//                                 <div className="w-full max-w-[16px] bg-indigo-800 rounded-t-sm" style={{ height: `${(d.d / 1200) * 100}%` }}></div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex flex-wrap items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-indigo-800 mr-1"></span> Direct</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-indigo-600 mr-1"></span> Constructive</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-indigo-400 mr-1"></span> Retrenchment</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-indigo-200 mr-1"></span> Termination</div>
//                         </div>
//                       </div>

//                       {/* 3. Reg by Category */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">3. Reg. Categories (Other than UD)</h3>
//                         <div className="relative h-48 mt-auto border-b border-slate-200">
//                           <div className="relative z-10 flex items-end gap-2 h-full justify-between px-2 pb-0">
//                             {ch3.map((d, i) => (
//                               <div key={i} className="flex-1 flex justify-center gap-[2px] items-end h-full">
//                                 <div className="w-full max-w-[8px] bg-purple-400 rounded-t-sm" style={{ height: `${(d.ca / 200) * 100}%` }}></div>
//                                 <div className="w-full max-w-[8px] bg-emerald-400 rounded-t-sm" style={{ height: `${(d.td / 200) * 100}%` }}></div>
//                                 <div className="w-full max-w-[8px] bg-amber-400 rounded-t-sm" style={{ height: `${(d.ur / 200) * 100}%` }}></div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-purple-400 mr-1"></span> CA</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-emerald-400 mr-1"></span> Trade Dispute</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-amber-400 mr-1"></span> Union Rec.</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//                       {/* 4. Avg Case Duration */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">4. Avg Duration (Months)</h3>
//                         <div className="relative h-48 mt-auto">
//                           <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0 text-[9px] text-slate-300 font-bold items-start">
//                             <span>11m</span><span>10m</span><span>9m</span><span>8m</span>
//                           </div>
//                           <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible ml-4">
//                             <polyline fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={ch4Pts} />
//                             {ch4Vals.map((v, i) => <circle key={i} cx={i * (100 / 7)} cy={50 - ((v - 8) / 3 * 50)} r="1.5" fill="#0ea5e9" />)}
//                           </svg>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2 ml-4">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                       </div>

//                       {/* 5. Location Dist */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">5. Case Dist by Location</h3>
//                         <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar my-auto py-2">
//                           {ch5.map((c, i) => (
//                             <div key={i}>
//                               <div className="flex justify-between text-[10px] font-bold mb-1">
//                                 <span className="text-slate-700">{c.loc}</span><span className="text-slate-500">{c.val}</span>
//                               </div>
//                               <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-blue-500 h-full rounded-full" style={{ width: `${(c.val / 350) * 100}%` }}></div></div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* 7. Hearing Utilisation */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">7. Hearing Utilisation</h3>
//                         <div className="relative h-48 mt-auto">
//                           <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0 text-[9px] text-slate-300 font-bold items-start">
//                             <span>1.6k</span><span>1.2k</span><span>.9k</span>
//                           </div>
//                           <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible ml-4">
//                             <polyline fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="2,2" points={ch7SchedPts} />
//                             <polyline fill="none" stroke="#2563eb" strokeWidth="2" points={ch7CompPts} />
//                             {ch7Comp.map((v, i) => <circle key={i} cx={i * (100 / 7)} cy={50 - ((v - 900) / 700 * 50)} r="1.5" fill="#2563eb" />)}
//                           </svg>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2 ml-4">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-4 border-b-2 border-dashed border-slate-400 mr-1.5"></span> Scheduled</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded mr-1.5"></span> Completed</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//                       {/* 8. Pleading Filing */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">8. Pleading Filing Performance</h3>
//                         <div className="relative h-48 mt-auto border-b border-slate-200">
//                           <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
//                             {ch8.map((d, i) => (
//                               <div key={i} className="flex-1 flex flex-col justify-end gap-[1px] items-center h-full group relative">
//                                 <div className="hidden group-hover:flex absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20 w-max">{d.s1 + d.s2 + d.s3} Docs</div>
//                                 <div className="w-full max-w-[16px] bg-rose-200" style={{ height: `${(d.s3 / 3000) * 100}%` }}></div>
//                                 <div className="w-full max-w-[16px] bg-rose-400" style={{ height: `${(d.s2 / 3000) * 100}%` }}></div>
//                                 <div className="w-full max-w-[16px] bg-rose-600 rounded-t-sm" style={{ height: `${(d.s1 / 3000) * 100}%` }}></div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex flex-wrap items-center gap-3 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-rose-600 mr-1"></span> SOC</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-rose-400 mr-1"></span> SIR</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-rose-200 mr-1"></span> Rejoinder</div>
//                         </div>
//                       </div>

//                       {/* 9. Award Outcome */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col items-center">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4 w-full">9. Award Decision Outcome</h3>
//                         <svg viewBox="0 0 32 32" className="w-40 h-40 transform -rotate-90 rounded-full mt-2">
//                           <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#ef4444" strokeWidth="32" strokeDasharray="32.8 100" />
//                           <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#3b82f6" strokeWidth="32" strokeDasharray="29.7 100" strokeDashoffset="-32.8" />
//                           <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#10b981" strokeWidth="32" strokeDasharray="25 100" strokeDashoffset="-62.5" />
//                           <circle r="15.915" cx="16" cy="16" fill="transparent" stroke="#f59e0b" strokeWidth="32" strokeDasharray="12.5 100" strokeDashoffset="-87.5" />
//                         </svg>
//                         <div className="grid grid-cols-2 gap-2 mt-auto w-full text-[9px] font-bold text-slate-600">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-red-500 mr-2"></span> Dismissed (21)</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-blue-500 mr-2"></span> Reinstatement (19)</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-emerald-500 mr-2"></span> Compensation (16)</div>
//                           <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 mr-2"></span> Settlement (8)</div>
//                         </div>
//                       </div>

//                       {/* 10. Backlog Case Monitoring */}
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col">
//                         <h3 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mb-4">10. Backlog Monitoring</h3>
//                         <div className="relative h-48 mt-auto border-b border-slate-200">
//                           <div className="relative z-10 flex items-end gap-3 h-full justify-between px-2 pb-0">
//                             {ch10.map((v, i) => (
//                               <div key={i} className="flex-1 flex justify-center items-end h-full group relative">
//                                 <div className="hidden group-hover:block absolute -top-6 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded z-20">{v}</div>
//                                 <div className="w-full max-w-[16px] bg-amber-500 rounded-t-sm" style={{ height: `${(v / 100) * 100}%` }}></div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 px-2">{chYears.map(y => <span key={y} className="text-[10px] font-bold text-slate-400">{y}</span>)}</div>
//                         <div className="flex items-center gap-4 mt-4 justify-center text-[9px] font-bold text-slate-500">
//                           <div className="flex items-center"><span className="w-2 h-2 bg-amber-500 mr-1.5"></span> Backlogged Cases</div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
//                       <div className="flex items-center justify-between mb-6 md:mb-8"><h3 className="text-base md:text-lg font-extrabold text-slate-900">{currentLang.filingQueue}</h3><button className="text-xs font-bold text-blue-600 hover:underline px-3 md:px-4 py-2 bg-blue-50 rounded-xl">View All</button></div>
//                       <div className="overflow-x-auto">
//                         <table className="w-full text-left min-w-[600px]">
//                           <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Filing ID</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Submitted By</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case Type</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Date</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Status</th></tr></thead>
//                           <tbody className="divide-y divide-slate-50">
//                             {filingQueue.map((item, idx) => (
//                               <tr key={idx} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-slate-900">{item.id}</td><td className="py-4 px-4 text-xs font-bold text-slate-700">{item.submittedBy}</td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{item.type}</td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{item.date}</td><td className="py-4 px-4"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${item.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{item.status}</span></td></tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {/* ---------------- M9 REGISTRATION ---------------- */}
//                 {dashActiveView === 'registration' && !internalActionView && (
//                   <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
//                       <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Registration Queue</h3>
//                       <button className="flex justify-center items-center px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 shadow-md"><RefreshCw className="w-4 h-4 mr-2" /> Sync JPPM</button>
//                     </div>
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-left min-w-[600px]">
//                         <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Source</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Parties</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Received Date</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Action</th></tr></thead>
//                         <tbody className="divide-y divide-slate-50">
//                           {filingQueue.map((item, idx) => (
//                             <tr key={idx} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4"><span className="px-3 py-1 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-lg uppercase">eFiling</span></td><td className="py-4 px-4 text-xs md:text-sm font-extrabold text-slate-900">{item.submittedBy} <span className="text-slate-400 mx-1">v</span> Company XYZ</td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{item.date}</td><td className="py-4 px-4 text-right"><button onClick={() => { setSelectedInternalItem(item); setInternalActionView('review_filing'); }} className="px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-sm">Review & Register</button></td></tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 {dashActiveView === 'registration' && internalActionView === 'review_filing' && selectedInternalItem && (
//                   <div className="max-w-5xl mx-auto">
//                     <div className="flex items-center gap-4 mb-6">
//                       <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Filing Review: {selectedInternalItem.id}</h2>
//                         <p className="text-sm font-semibold text-slate-500">Validate documents and assign official case number.</p>
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm space-y-6">
//                         <div>
//                           <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Submitted By</h4>
//                           <p className="text-base font-extrabold text-slate-900">{selectedInternalItem.submittedBy}</p>
//                         </div>
//                         <div>
//                           <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Dispute Type</h4>
//                           <p className="text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg inline-flex">{selectedInternalItem.type}</p>
//                         </div>
//                         <div>
//                           <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Attached Documents</h4>
//                           <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
//                             <div className="flex items-center gap-3">
//                               <FileText className="w-6 h-6 text-blue-600" />
//                               <div><p className="text-sm font-bold text-slate-900">JPPM_Referral.pdf</p><p className="text-[10px] font-semibold text-slate-500">2.4 MB</p></div>
//                             </div>
//                             <button className="text-blue-600 text-sm font-bold hover:underline">View</button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm flex flex-col justify-between">
//                         <div>
//                           <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center"><FileCheck className="w-5 h-5 mr-2 text-emerald-500" /> Registrar Validation</h3>
//                           <div className="space-y-4 mb-6">
//                             <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">Parties information is complete</span></label>
//                             <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">JPPM reference is valid</span></label>
//                             <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" /><span className="text-sm font-bold text-slate-700">No duplicate cases found</span></label>
//                           </div>
//                           <div>
//                             <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Assign Case Number</label>
//                             <input type="text" defaultValue="1/1-1555/26" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-mono font-bold focus:ring-2 focus:ring-blue-500 outline-none" />
//                           </div>
//                         </div>
//                         <div className="pt-6">
//                           <button onClick={() => setInternalActionView(null)} className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-md">Register & Forward for Allocation</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M10 CASE MANAGEMENT ---------------- */}
//                 {dashActiveView === 'cases' && !internalActionView && (
//                   <div className="flex flex-col h-[calc(100vh-12rem)] min-h-[500px]">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//                       <div className="flex items-center gap-4">
//                         <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Active Cases Kanban</h3>
//                         {demoRole === 'ydp' && (
//                           <button onClick={() => setInternalActionView('allocate_case')} className="px-4 py-2 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg hover:bg-amber-200 flex items-center border border-amber-200 shadow-sm animate-pulse">
//                             <ClipboardList className="w-4 h-4 mr-2" /> 3 Pending Allocation
//                           </button>
//                         )}
//                       </div>
//                       <div className="flex gap-2 md:gap-3">
//                         <div className="relative flex-1">
//                           <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
//                           <input type="text" placeholder="Search case..." className="text-sm font-semibold pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-64" />
//                         </div>
//                         <button className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 flex items-center flex-shrink-0"><Filter className="w-4 h-4 md:mr-2" /><span className="hidden md:inline">Filter</span></button>
//                       </div>
//                     </div>
//                     <div className="flex-1 flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
//                       {['Registered', 'Allocation', 'Mention/Hearing', 'Award Pending'].map((stage, i) => (
//                         <div key={i} className="w-72 md:w-80 flex-shrink-0 flex flex-col bg-slate-100/50 rounded-[24px] border border-slate-200 p-3 md:p-4 snap-center">
//                           <div className="mb-4 font-extrabold text-xs md:text-sm text-slate-800 flex justify-between items-center px-2">
//                             {stage} <span className="bg-slate-200 text-slate-600 px-2.5 py-1 rounded-lg text-[10px] md:text-xs">{i === 3 ? 1 : 3}</span>
//                           </div>
//                           <div className="flex-1 space-y-3 md:space-y-4 overflow-y-auto hide-scrollbar">
//                             {chairmanCases.slice(0, i === 3 ? 1 : 3).map((c, j) => (
//                               <div key={j} onClick={() => { setSelectedInternalItem(c); setInternalActionView('case_detail'); }} className="bg-white p-4 md:p-5 rounded-[16px] border border-slate-200 shadow-sm cursor-pointer hover:border-blue-500 hover:shadow-md transition-all group">
//                                 <div className="flex justify-between items-start mb-3">
//                                   <p className="text-[10px] md:text-xs font-mono font-bold text-slate-500 group-hover:text-blue-600 transition-colors">{c.id}</p>
//                                   <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase">{c.status}</span>
//                                 </div>
//                                 <p className="text-xs md:text-sm font-extrabold text-slate-900 leading-tight mb-4">{c.title}</p>
//                                 <div className="flex justify-between items-center">
//                                   <span className="text-[9px] md:text-[10px] font-bold text-slate-400 flex items-center"><Calendar className="w-3 h-3 mr-1" /> {c.date}</span>
//                                   <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px] md:text-[10px] font-bold ring-2 ring-white">CH</span>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {dashActiveView === 'cases' && internalActionView === 'allocate_case' && (
//                   <div className="max-w-6xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
//                     <div className="flex items-center gap-4 mb-6 flex-shrink-0">
//                       <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">YDP Case Allocation Panel</h2>
//                         <p className="text-sm font-semibold text-slate-500">Review system recommendations and assign to Chairmen.</p>
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
//                       {/* Pending List */}
//                       <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm flex flex-col overflow-hidden">
//                         <div className="p-5 border-b border-slate-100 bg-slate-50">
//                           <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">Pending Allocation (3)</h3>
//                         </div>
//                         <div className="flex-1 overflow-y-auto p-3 space-y-3">
//                           {['1/1-1555/26', '2/2-1556/26', '4/4-1557/26'].map((id, idx) => (
//                             <div key={idx} onClick={() => setSelectedInternalItem({ id, title: 'New Registration Dispute', type: 'Unfair Dismissal' })} className={`p-4 rounded-xl border cursor-pointer transition-colors ${selectedInternalItem?.id === id ? 'bg-blue-50 border-blue-300 shadow-sm' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
//                               <p className="text-xs font-mono font-bold text-blue-600 mb-1">{id}</p>
//                               <p className="text-sm font-extrabold text-slate-900 line-clamp-1">New Registration Dispute</p>
//                               <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Unfair Dismissal</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Details & Assignment */}
//                       <div className="lg:col-span-2 bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col overflow-y-auto">
//                         {selectedInternalItem?.type ? (
//                           <>
//                             <h3 className="text-xl font-extrabold text-slate-900 mb-2">{selectedInternalItem.id}</h3>
//                             <p className="text-sm font-bold text-slate-500 mb-8">{selectedInternalItem.title} &bull; {selectedInternalItem.type}</p>

//                             <div className="bg-emerald-50 border border-emerald-200 rounded-[20px] p-6 mb-8 relative overflow-hidden">
//                               <div className="absolute right-0 top-0 opacity-10"><Activity className="w-32 h-32" /></div>
//                               <h4 className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">System Recommendation</h4>
//                               <p className="text-lg font-black text-emerald-900">Y.A. Dato' Wan Jeffry Bin Kassim</p>
//                               <p className="text-sm font-semibold text-emerald-700 mt-1">Mahkamah 1 &bull; Lowest active workload (28 cases) &bull; Specializes in Unfair Dismissal</p>
//                             </div>

//                             <h4 className="text-sm font-extrabold text-slate-900 mb-4">Current Chairman Workloads</h4>
//                             <div className="space-y-4 mb-8">
//                               {[
//                                 { name: "Y.A. Dato' Wan Jeffry Kassim", cases: 28, color: "bg-emerald-500" },
//                                 { name: "Y.A. Puan Rusita Md Lazim", cases: 35, color: "bg-blue-500" },
//                                 { name: "Y.A. Tuan Amrik Singh", cases: 41, color: "bg-amber-500" }
//                               ].map((ch, i) => (
//                                 <div key={i}>
//                                   <div className="flex justify-between text-xs font-bold mb-1"><span className="text-slate-700">{ch.name}</span><span className="text-slate-500">{ch.cases} cases</span></div>
//                                   <div className="w-full bg-slate-100 rounded-full h-2"><div className={`${ch.color} h-full rounded-full`} style={{ width: `${(ch.cases / 50) * 100}%` }}></div></div>
//                                 </div>
//                               ))}
//                             </div>

//                             <div className="mt-auto border-t border-slate-100 pt-6">
//                               <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Manual Assignment</label>
//                               <div className="flex gap-4">
//                                 <select className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none">
//                                   <option>Y.A. Dato' Wan Jeffry Bin Kassim (Recommended)</option>
//                                   <option>Y.A. Puan Rusita Binti Md Lazim</option>
//                                   <option>Y.A. Tuan Amrik Singh</option>
//                                 </select>
//                                 <button onClick={() => setInternalActionView(null)} className="px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-md">Confirm Allocation</button>
//                               </div>
//                             </div>
//                           </>
//                         ) : (
//                           <div className="flex flex-col items-center justify-center h-full text-slate-400">
//                             <ClipboardList className="w-16 h-16 mb-4 opacity-50" />
//                             <p className="text-base font-semibold">Select a case from the queue to allocate.</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {dashActiveView === 'cases' && internalActionView === 'case_detail' && selectedInternalItem && (
//                   <div className="max-w-5xl mx-auto space-y-6">
//                     <div className="flex items-center justify-between bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
//                       <div className="flex items-center gap-4">
//                         <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
//                         <div>
//                           <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">{selectedInternalItem.title}</h2>
//                           <div className="flex items-center gap-3 mt-1">
//                             <span className="text-sm font-mono font-bold text-blue-600">{selectedInternalItem.id}</span>
//                             <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">{selectedInternalItem.status}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="hidden sm:flex items-center gap-3">
//                         <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200">Court Schedule</button>
//                         <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-sm">Issue Notice</button>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                       <div className="lg:col-span-2 space-y-6">
//                         <div className="bg-white p-6 md:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-6 border-b border-slate-100 pb-4">Case History & Timeline</h3>
//                           <div className="relative pl-4 border-l-2 border-blue-100 space-y-8">
//                             <div className="relative">
//                               <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
//                               <h4 className="text-sm font-extrabold text-slate-900">Registered</h4>
//                               <p className="text-xs font-semibold text-slate-500 mt-1">10 Jan 2026</p>
//                             </div>
//                             <div className="relative">
//                               <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
//                               <h4 className="text-sm font-extrabold text-slate-900">Allocated to YA Dato' Wan Jeffry</h4>
//                               <p className="text-xs font-semibold text-slate-500 mt-1">12 Jan 2026</p>
//                             </div>
//                             <div className="relative">
//                               <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-500 flex items-center justify-center ring-4 ring-white"><div className="w-2 h-2 rounded-full bg-amber-500"></div></div>
//                               <h4 className="text-sm font-extrabold text-amber-600">Active Stage: {selectedInternalItem.status}</h4>
//                               <p className="text-xs font-semibold text-slate-500 mt-1">Pending next scheduled event</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="space-y-6">
//                         <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4">Parties</h3>
//                           <div className="space-y-4">
//                             <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
//                               <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Claimant</p>
//                               <p className="text-sm font-bold text-slate-900">Tay Hwee Lan</p>
//                             </div>
//                             <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
//                               <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Respondent</p>
//                               <p className="text-sm font-bold text-slate-900">Healthy Vision Sdn Bhd</p>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="bg-white p-6 rounded-[24px] border border-slate-200 shadow-sm">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4">Case Documents</h3>
//                           <div className="space-y-2">
//                             <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
//                               <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Statement of Case</div>
//                               <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
//                             </button>
//                             <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
//                               <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Statement in Reply</div>
//                               <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M6 SCHEDULE INTERNAL ---------------- */}
//                 {dashActiveView === 'schedule_int' && (
//                   <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
//                       <h3 className="text-lg md:text-xl font-extrabold text-slate-900">Master Court Calendar</h3>
//                       <button className="text-xs md:text-sm font-bold bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 shadow-md flex items-center justify-center"><Calendar className="w-4 h-4 mr-2" /> Schedule</button>
//                     </div>
//                     <div className="border border-slate-200 rounded-[20px] overflow-hidden bg-slate-50 overflow-x-auto">
//                       <div className="min-w-[600px]">
//                         <div className="grid grid-cols-5 bg-slate-100 border-b border-slate-200 text-[10px] font-extrabold text-slate-500 uppercase tracking-widest divide-x divide-slate-200">
//                           {['Mon 9', 'Tue 10', 'Wed 11', 'Thu 12', 'Fri 13'].map(d => <div key={d} className="p-3 md:p-4 text-center">{d}</div>)}
//                         </div>
//                         <div className="grid grid-cols-5 min-h-[400px] divide-x divide-slate-200 bg-white">
//                           <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
//                           <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
//                           <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
//                           <div className="p-2 md:p-3 space-y-2 md:space-y-3 bg-blue-50/30">
//                             {chairmanCases.slice(0, 2).map((c, i) => (
//                               <div key={i} className="p-2 md:p-3 bg-white border border-blue-200 shadow-sm rounded-xl cursor-pointer hover:border-blue-500 transition-colors relative overflow-hidden">
//                                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
//                                 <span className="text-[10px] md:text-xs font-black text-slate-900 block mb-1">{c.time || '09:00 AM'}</span>
//                                 <span className="text-[9px] md:text-[10px] font-bold text-slate-500 block leading-tight">{c.id}</span>
//                                 <span className="text-[9px] md:text-[10px] font-bold text-blue-700 bg-blue-50 mt-2 inline-block px-1.5 rounded">{c.status}</span>
//                               </div>
//                             ))}
//                           </div>
//                           <div className="p-2 md:p-3 space-y-2 md:space-y-3"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M3 NOTICE ---------------- */}
//                 {dashActiveView === 'notice' && (
//                   <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8"><h3 className="text-lg md:text-xl font-extrabold text-slate-900">Dispatch Notices</h3><button className="text-xs md:text-sm font-bold bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl shadow-md">Generate Notice</button></div>
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-left min-w-[600px]">
//                         <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Notice ID</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Notice Type</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Related Case</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Status</th></tr></thead>
//                         <tbody className="divide-y divide-slate-50">
//                           {mockNotices.map((n, i) => (
//                             <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-slate-900">{n.id}</td><td className="py-4 px-4 text-xs font-bold text-slate-700">{n.type}</td><td className="py-4 px-4"><span className="text-xs font-bold text-blue-600 block">{n.caseNo}</span><span className="text-[10px] font-semibold text-slate-500">{n.parties}</span></td><td className="py-4 px-4 text-right"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${n.status === 'Delivered' || n.status === 'Dispatched' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>{n.status}</span></td></tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M11 COLLECTIVE ---------------- */}
//                 {dashActiveView === 'collective' && (
//                   <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8"><h3 className="text-lg md:text-xl font-extrabold text-slate-900">Collective Agreements</h3><button className="text-xs md:text-sm font-bold bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl shadow-md">Register CA</button></div>
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-left min-w-[600px]">
//                         <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">CA Number</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Parties</th><th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">Submitted</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Status</th></tr></thead>
//                         <tbody className="divide-y divide-slate-50">
//                           {mockCAs.map((ca, i) => (
//                             <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-blue-600">{ca.id}</td><td className="py-4 px-4"><span className="text-xs font-bold text-slate-800 block">{ca.union}</span><span className="text-[10px] font-semibold text-slate-500 block mt-0.5">v {ca.company}</span></td><td className="py-4 px-4 text-xs font-semibold text-slate-500">{ca.submitted}</td><td className="py-4 px-4 text-right"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${ca.status.includes('Approved') || ca.status.includes('Granted') ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>{ca.status}</span></td></tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M7 DIGITAL DISPLAY ---------------- */}
//                 {dashActiveView === 'display' && (
//                   <div className="flex flex-col items-center">
//                     <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">Live Preview: Mahkamah 1 External Display</p>
//                     <div className="w-full max-w-4xl aspect-video bg-[#0B1120] rounded-[24px] md:rounded-[32px] border-[8px] md:border-[12px] border-slate-900 shadow-2xl p-6 md:p-10 flex flex-col justify-between text-white relative overflow-hidden">
//                       <div className="absolute -top-10 -right-10 md:-top-20 md:-right-20 p-4 opacity-10"><Scale className="w-48 h-48 md:w-96 md:h-96" /></div>
//                       <div className="relative z-10">
//                         <h2 className="text-xl md:text-3xl font-bold text-slate-400 tracking-widest uppercase">Mahkamah 1</h2>
//                         <h3 className="text-2xl md:text-4xl font-black mt-2 md:mt-3 text-blue-400">Y.A. Dato' Wan Jeffry Bin Kassim</h3>
//                       </div>
//                       <div className="bg-slate-900/80 p-4 md:p-8 rounded-[16px] md:rounded-[24px] border border-slate-700 backdrop-blur-xl relative z-10">
//                         <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6"><span className="px-3 py-1 md:px-4 md:py-1.5 bg-rose-500 text-white font-black text-xs md:text-sm uppercase tracking-widest rounded-lg animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.5)]">Now Hearing</span> <span className="font-mono text-lg md:text-2xl font-bold text-slate-300">1/1-1522/25</span></div>
//                         <h4 className="text-2xl md:text-4xl font-black mb-1 md:mb-2">Tay Hwee Lan</h4>
//                         <p className="text-sm md:text-2xl font-bold text-slate-400">Lawan: Healthy Vision Sdn Bhd</p>
//                       </div>
//                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end relative z-10 gap-4 mt-4 md:mt-0">
//                         <div><p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Next Case</p><p className="font-bold text-sm md:text-xl text-slate-300">11:00 AM - Azman Bin Isa</p></div>
//                         <div className="text-3xl md:text-5xl font-black font-mono tracking-tighter text-blue-400">09:14 AM</div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- CHAIRMAN WORKSPACE ---------------- */}
//                 {dashActiveView === 'chairman' && !internalActionView && (
//                   <>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Assigned Cases</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">28</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Hearings This Week</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">6</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Mentions This Week</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">4</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-rose-200 bg-rose-50/30 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"><p className="text-[10px] font-extrabold uppercase tracking-widest text-rose-500 mb-2">Awards Pending</p><h3 className="text-3xl md:text-4xl font-black text-rose-600">3</h3></div>
//                     </div>
//                     <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
//                       <h3 className="text-lg font-extrabold text-slate-900 mb-6 md:mb-8">Assigned Case Roster</h3>
//                       <div className="overflow-x-auto">
//                         <table className="w-full text-left min-w-[600px]">
//                           <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case Number</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case Title</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">Status</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Hearing Date</th></tr></thead>
//                           <tbody className="divide-y divide-slate-50">
//                             {chairmanCases.map((c, i) => (
//                               <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-blue-600 cursor-pointer hover:underline">{c.id}</td><td className="py-4 px-4 text-xs md:text-sm font-bold text-slate-900">{c.title}</td><td className="py-4 px-4 text-center"><span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">{c.status}</span></td><td className="py-4 px-4 text-xs font-bold text-slate-500 text-right"><button onClick={() => { setSelectedInternalItem(c); setInternalActionView('hearing_notes'); }} className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg text-xs font-bold transition-colors">Workspace</button></td></tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {dashActiveView === 'chairman' && internalActionView === 'hearing_notes' && selectedInternalItem && (
//                   <div className="max-w-7xl mx-auto h-[calc(100vh-10rem)] flex flex-col">
//                     <div className="flex items-center justify-between mb-6 flex-shrink-0">
//                       <div className="flex items-center gap-4">
//                         <button onClick={() => setInternalActionView(null)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
//                         <div>
//                           <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">Chairman Workspace</h2>
//                           <div className="flex items-center gap-3 mt-1">
//                             <span className="text-sm font-mono font-bold text-blue-600">{selectedInternalItem.id}</span>
//                             <span className="w-1 h-1 rounded-full bg-slate-300"></span>
//                             <span className="text-sm font-bold text-slate-500">{selectedInternalItem.title}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
//                       {/* Left: Hearing Notes */}
//                       <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 flex flex-col">
//                         <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4 flex items-center"><FileSignature className="w-4 h-4 mr-2 text-blue-600" /> Electronic Hearing Notes (e-Notes)</h3>
//                         <textarea className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none leading-relaxed" placeholder="Type official hearing minutes and notes here... Auto-saves every 60 seconds."></textarea>
//                         <div className="mt-4 flex justify-between items-center border-t border-slate-100 pt-4">
//                           <span className="text-[10px] font-bold text-slate-400 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" /> Saved 2 mins ago</span>
//                           <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-black shadow-sm flex items-center"><Save className="w-4 h-4 mr-2" /> Save Draft</button>
//                         </div>
//                       </div>

//                       {/* Right: Documents & Award Upload */}
//                       <div className="flex flex-col gap-6">
//                         <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4 flex items-center"><BookOpen className="w-4 h-4 mr-2 text-blue-600" /> Pleadings Reference</h3>
//                           <div className="space-y-2">
//                             <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
//                               <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Statement of Case</div><Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
//                             </button>
//                             <button className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 border border-slate-100 rounded-xl transition-colors group">
//                               <div className="flex items-center text-sm font-bold text-slate-700 group-hover:text-blue-700"><FileText className="w-4 h-4 mr-2" /> Bundle of Documents</div><Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6 flex-1 flex flex-col">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-4 flex items-center"><UploadCloud className="w-4 h-4 mr-2 text-emerald-600" /> Final Decision / Award</h3>
//                           <div className="mb-4">
//                             <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Award Outcome</label>
//                             <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none">
//                               <option>Pending Decision</option>
//                               <option>Claim Dismissed</option>
//                               <option>Reinstatement Awarded</option>
//                               <option>Compensation Awarded</option>
//                               <option>Settlement Recorded</option>
//                             </select>
//                           </div>
//                           <div className="border-2 border-dashed border-slate-300 rounded-[16px] bg-slate-50 flex-1 flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors mb-4">
//                             <Upload className="w-8 h-8 text-slate-400 mb-2" />
//                             <p className="text-sm font-bold text-slate-700">Upload Award Document (PDF)</p>
//                           </div>
//                           <button onClick={() => setInternalActionView(null)} className="w-full py-3.5 bg-emerald-600 text-white font-bold text-sm rounded-xl hover:bg-emerald-700 shadow-md">Publish Award</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* ---------------- M8 ANALYTICS ---------------- */}
//                 {dashActiveView === 'analytics' && (
//                   <>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Total Awards</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">8,421</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Searches Today</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">924</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Success Rate</p><h3 className="text-3xl md:text-4xl font-black text-emerald-600">92%</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Published (2026)</p><h3 className="text-3xl md:text-4xl font-black text-blue-600">312</h3></div>
//                     </div>
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                       <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
//                         <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-6 md:mb-8">Search Volume (30 Days)</h3>
//                         <div className="relative h-48 mt-4 border-b border-slate-200">
//                           <div className="absolute inset-0 flex flex-col justify-between pb-1 z-0">
//                             <div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div><div className="border-b border-dashed border-slate-200 w-full h-0"></div>
//                           </div>
//                           <div className="relative z-10 flex items-end gap-1 md:gap-2 h-full justify-between px-2 pb-0">
//                             {Array.from({ length: 15 }).map((_, i) => (
//                               <div key={i} className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors rounded-t-md" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col">
//                         <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-6">Top Search Keywords</h3>
//                         <div className="space-y-4 flex-1">
//                           {[{ k: 'unfair dismissal', s: 412, w: 100 }, { k: 'constructive dismissal', s: 238, w: 60 }, { k: 'collective agreement', s: 179, w: 45 }, { k: 'trade dispute', s: 95, w: 25 }].map((kw, i) => (
//                             <div key={i} className="relative py-2">
//                               <div className="flex justify-between items-center relative z-10"><span className="text-xs md:text-sm font-bold text-slate-800">{kw.k}</span><span className="font-mono text-xs font-bold text-slate-500">{kw.s}</span></div>
//                               <div className="absolute left-0 bottom-0 h-1.5 bg-blue-100 rounded-full w-full mt-1"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${kw.w}%` }}></div></div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {/* ---------------- SYSTEM M13 ---------------- */}
//                 {dashActiveView === 'integration' && (
//                   <>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">API Success Rate</p><h3 className="text-3xl md:text-4xl font-black text-emerald-600">97.2%</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Failed Txn</p><h3 className="text-3xl md:text-4xl font-black text-rose-600">14</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Auth Success</p><h3 className="text-3xl md:text-4xl font-black text-emerald-600">99.1%</h3></div>
//                       <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Avg Response</p><h3 className="text-3xl md:text-4xl font-black text-amber-600">820<span className="text-base md:text-lg text-amber-500">ms</span></h3></div>
//                     </div>
//                     <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
//                       <h3 className="text-base md:text-lg font-extrabold text-slate-900 mb-6 md:mb-8">Integration Logs (Live)</h3>
//                       <div className="overflow-x-auto">
//                         <table className="w-full text-left min-w-[600px]">
//                           <thead><tr className="border-b-2 border-slate-100"><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Txn ID</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">System</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Type</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">Status</th><th className="py-3 px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Response Time</th></tr></thead>
//                           <tbody className="divide-y divide-slate-50">
//                             {integrationLogs.map((log, i) => (
//                               <tr key={i} className="hover:bg-slate-50 transition-colors"><td className="py-4 px-4 text-xs font-mono font-bold text-slate-500">{log.id}</td><td className="py-4 px-4 text-xs md:text-sm font-extrabold text-slate-900">{log.system}</td><td className="py-4 px-4 text-xs font-bold text-slate-600">{log.type}</td><td className="py-4 px-4 text-center"><span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${log.status === 'Success' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{log.status}</span></td><td className="py-4 px-4 text-xs font-mono font-bold text-right text-slate-500">{log.time}</td></tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 {dashActiveView === 'usage' && (
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
//                     <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Daily Active Users</p><h3 className="text-3xl md:text-4xl font-black text-blue-600">376</h3></div>
//                     <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Monthly Active</p><h3 className="text-3xl md:text-4xl font-black text-indigo-600">1,242</h3></div>
//                     <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Logins Today</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">182</h3></div>
//                     <div className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-200 shadow-sm"><p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-2">Avg Session</p><h3 className="text-3xl md:text-4xl font-black text-slate-900">18m</h3></div>
//                   </div>
//                 )}

//                 {dashActiveView === 'settings' && (
//                   <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-center justify-center py-24 text-center">
//                     <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-slate-300 mb-6" />
//                     <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">System Administration</h2>
//                     <p className="text-sm md:text-base text-slate-500 max-w-md font-medium">Admin privileges are verified. System configurations and user permission matrices map to the centralized authentication gateway.</p>
//                   </div>
//                 )}

//               </div>
//             </div>
//           </div>
//         </div>

//       ) : currentView === 'dashboard-efiling' ? (
//         <div className="flex h-screen overflow-hidden bg-slate-50">
//           {/* DASHBOARD MOBILE OVERLAY */}
//           {dashMobileMenuOpen && (
//             <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setDashMobileMenuOpen(false)} />
//           )}

//           <aside className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-[#1e1b4b] text-indigo-100 flex flex-col flex-shrink-0 border-r border-[#312e81] transform transition-transform duration-300 md:relative md:translate-x-0 ${dashMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//             <div className="h-20 flex items-center justify-between px-6 border-b border-[#312e81]">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center mr-3"><Scale className="w-5 h-5 text-white" /></div>
//                 <div className="flex flex-col"><span className="text-white font-extrabold text-base leading-none mb-1">eMP v2.0</span><span className="text-[9px] uppercase tracking-widest text-indigo-300 font-bold">e-Filing Portal</span></div>
//               </div>
//               <button className="md:hidden text-indigo-400 hover:text-white" onClick={() => setDashMobileMenuOpen(false)}>
//                 <X className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="flex-1 overflow-y-auto py-6 space-y-1.5 px-4">
//               <button onClick={() => { setEFilingActiveView('cases'); setDashMobileMenuOpen(false); }} className={`w-full flex items-center px-4 py-3 rounded-[14px] font-bold text-sm transition-all ${eFilingActiveView === 'cases' ? 'bg-[#312e81] text-white shadow-sm' : 'hover:bg-[#312e81]/50'}`}><Briefcase className="w-5 h-5 mr-3" /> My Cases</button>
//             </div>
//             <div className="p-6 border-t border-[#312e81]">
//               <button onClick={handleLogout} className="w-full flex items-center justify-center px-4 py-3 rounded-xl border border-indigo-800 hover:bg-indigo-800 hover:text-white transition-colors text-xs font-bold"><LogOut className="w-4 h-4 mr-2" /> Sign Out</button>
//             </div>
//           </aside>

//           <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#f8fafc]">
//             <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 flex-shrink-0">
//               <div className="flex items-center gap-3">
//                 <button className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100" onClick={() => setDashMobileMenuOpen(true)}>
//                   <Menu className="w-6 h-6" />
//                 </button>
//                 <h1 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">External User Workspace</h1>
//               </div>
//               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs md:text-sm border-2 border-white shadow-sm">EU</div>
//             </header>

//             <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">

//               {/* --- eFILING VIEW: CASES LIST --- */}
//               {eFilingActiveView === 'cases' && (
//                 <div className="max-w-6xl mx-auto">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
//                     <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">My Active Cases</h2>
//                     <button onClick={() => setEFilingActiveView('new_filing')} className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 flex justify-center items-center transition-all transform hover:-translate-y-0.5"><FilePlus className="w-4 h-4 mr-2" /> File New Dispute</button>
//                   </div>
//                   <div className="bg-white rounded-[24px] md:rounded-[32px] border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden p-1 md:p-2">
//                     <div className="overflow-x-auto">
//                       <table className="w-full text-left min-w-[600px]">
//                         <thead className="border-b-2 border-slate-100">
//                           <tr><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Case No.</th><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Title</th><th className="py-3 md:py-4 px-4 md:px-6 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Next Action</th></tr>
//                         </thead>
//                         <tbody className="divide-y divide-slate-50">
//                           <tr onClick={() => openCaseDetails({ id: '1/1-1522/25', title: 'Tay Hwee Lan v Healthy Vision', status: 'mention' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-indigo-600 font-bold group-hover:underline">1/1-1522/25</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Tay Hwee Lan v Healthy Vision</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Upload Documents</span></td>
//                           </tr>
//                           <tr onClick={() => openCaseDetails({ id: '1/1-1079/25', title: 'Azman Bin Isa v Technip Energies', status: 'hearing' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-indigo-600 font-bold group-hover:underline">1/1-1079/25</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Azman Bin Isa v Technip Energies</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider rounded-lg">Attend Hearing (12 Mar)</span></td>
//                           </tr>
//                           <tr onClick={() => openCaseDetails({ id: 'F1003', title: 'Ravi Kumar v Synergy Corp', status: 'review' })} className="hover:bg-indigo-50/50 transition-colors cursor-pointer group">
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-mono text-slate-400 font-bold">Pending Registration</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-xs md:text-sm font-extrabold text-slate-900">Ravi Kumar v Synergy Corp</td>
//                             <td className="py-4 md:py-5 px-4 md:px-6 text-right"><span className="inline-flex px-3 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg">Pending Review</span></td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* --- eFILING VIEW: NEW FILING FORM --- */}
//               {eFilingActiveView === 'new_filing' && (
//                 <div className="max-w-4xl mx-auto pb-12">
//                   <div className="flex items-center gap-4 mb-8">
//                     <button onClick={() => setEFilingActiveView('cases')} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors"><ArrowLeft className="w-5 h-5" /></button>
//                     <div>
//                       <h2 className="text-2xl font-extrabold text-slate-900">File New Dispute</h2>
//                       <p className="text-sm font-semibold text-slate-500">Borang Pendaftaran Kes (e-Filing)</p>
//                     </div>
//                   </div>

//                   <form onSubmit={(e) => { e.preventDefault(); setEFilingActiveView('cases'); }} className="space-y-6">

//                     {/* Section 1: Claimant */}
//                     <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                       <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><UserCircle className="w-5 h-5 mr-2 text-indigo-600" /> 1. Claimant Details (Pihak Menuntut)</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="md:col-span-2">
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
//                           <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="Enter full name as per NRIC" />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">NRIC / Passport</label>
//                           <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="e.g., 900101-14-5555" />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Phone Number</label>
//                           <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="+60 12-345 6789" />
//                         </div>
//                         <div className="md:col-span-2">
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Mailing Address</label>
//                           <textarea required rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none resize-none" placeholder="Full residential or mailing address"></textarea>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Section 2: Respondent */}
//                     <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                       <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><Building2 className="w-5 h-5 mr-2 text-indigo-600" /> 2. Respondent Details (Pihak Penentang)</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="md:col-span-2">
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Employer Name</label>
//                           <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="Registered company name" />
//                         </div>
//                         <div className="md:col-span-2">
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company Address</label>
//                           <textarea required rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none resize-none" placeholder="Registered office or business address"></textarea>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Section 3: Dispute Details */}
//                     <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                       <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><FileSignature className="w-5 h-5 mr-2 text-indigo-600" /> 3. Dispute Details (Butiran Kes)</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="md:col-span-2">
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nature of Dispute</label>
//                           <div className="relative">
//                             <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none appearance-none">
//                               <option value="">Select case category</option>
//                               <option value="unfair">Unfair Dismissal (Sec 20 IRA 1967)</option>
//                               <option value="constructive">Constructive Dismissal</option>
//                               <option value="trade">Trade Dispute</option>
//                               <option value="ca">Collective Agreement</option>
//                             </select>
//                             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                           </div>
//                         </div>
//                         <div>
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Date of Dismissal / Dispute</label>
//                           <input type="date" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" />
//                         </div>
//                         <div>
//                           <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Last Drawn Salary (RM)</label>
//                           <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-colors outline-none" placeholder="e.g. 3500" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Section 4: Initial Documents */}
//                     <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                       <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center"><UploadCloud className="w-5 h-5 mr-2 text-indigo-600" /> 4. Supporting Documents</h3>
//                       <p className="text-sm text-slate-500 mb-4 font-medium">Please upload the Representation Letter or JPPM referral document if available. PDF format only (Max 10MB).</p>
//                       <div className="border-2 border-dashed border-slate-300 rounded-[20px] bg-slate-50 p-8 flex flex-col items-center justify-center text-center hover:bg-indigo-50/50 hover:border-indigo-300 transition-colors cursor-pointer">
//                         <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4"><Upload className="w-6 h-6" /></div>
//                         <p className="text-sm font-bold text-slate-700 mb-1">Click to browse or drag and drop</p>
//                         <p className="text-xs font-semibold text-slate-500">JPPM_Referral.pdf</p>
//                       </div>
//                     </div>

//                     <div className="flex gap-4 pt-4 justify-end">
//                       <button type="button" onClick={() => setEFilingActiveView('cases')} className="px-6 py-3.5 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">Cancel</button>
//                       <button type="submit" className="px-8 py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5">Submit Filing</button>
//                     </div>
//                   </form>
//                 </div>
//               )}

//               {/* --- eFILING VIEW: CASE DETAILS & TRACKING --- */}
//               {eFilingActiveView === 'case_details' && selectedEFilingCase && (
//                 <div className="max-w-6xl mx-auto pb-12">

//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//                     <div className="flex items-center gap-4">
//                       <button onClick={() => setEFilingActiveView('cases')} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors flex-shrink-0"><ArrowLeft className="w-5 h-5" /></button>
//                       <div>
//                         <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">{selectedEFilingCase.title}</h2>
//                         <div className="flex items-center gap-3 mt-1">
//                           <span className="text-sm font-mono font-bold text-indigo-600">{selectedEFilingCase.id}</span>
//                           <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
//                           <span className="text-sm font-bold text-slate-500">Unfair Dismissal</span>
//                         </div>
//                       </div>
//                     </div>
//                     <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 shadow-sm flex items-center justify-center flex-shrink-0"><Download className="w-4 h-4 mr-2" /> Download Summary</button>
//                   </div>

//                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

//                     {/* LEFT COLUMN: TIMELINE */}
//                     <div className="lg:col-span-1 space-y-6">
//                       <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                         <h3 className="text-base font-extrabold text-slate-900 mb-6 uppercase tracking-wider text-xs">Case Timeline</h3>

//                         <div className="relative pl-4 border-l-2 border-indigo-100 space-y-8">
//                           {/* Step 1: Filing */}
//                           <div className="relative">
//                             <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-4 ring-white"><Check className="w-3.5 h-3.5" /></div>
//                             <h4 className="text-sm font-extrabold text-slate-900">Case Filed</h4>
//                             <p className="text-xs font-semibold text-slate-500 mt-1">05 Mar 2026, 10:30 AM</p>
//                           </div>

//                           {/* Step 2: Registration */}
//                           <div className="relative">
//                             <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status !== 'review' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
//                               {selectedEFilingCase.status !== 'review' && <Check className="w-3.5 h-3.5" />}
//                             </div>
//                             <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status !== 'review' ? 'text-slate-900' : 'text-slate-500'}`}>Registered by Court</h4>
//                             {selectedEFilingCase.status !== 'review' && <p className="text-xs font-semibold text-slate-500 mt-1">Assigned ID: {selectedEFilingCase.id}</p>}
//                           </div>

//                           {/* Step 3: Mention */}
//                           <div className="relative">
//                             <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status === 'hearing' ? 'bg-indigo-600 text-white' : selectedEFilingCase.status === 'mention' ? 'bg-amber-100 text-amber-600 border-2 border-amber-500' : 'bg-slate-200 text-slate-400'}`}>
//                               {selectedEFilingCase.status === 'hearing' && <Check className="w-3.5 h-3.5" />}
//                               {selectedEFilingCase.status === 'mention' && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
//                             </div>
//                             <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status === 'hearing' ? 'text-slate-900' : selectedEFilingCase.status === 'mention' ? 'text-amber-600' : 'text-slate-400'}`}>First Mention</h4>
//                             {selectedEFilingCase.status === 'mention' && (
//                               <div className="mt-2 p-3 bg-amber-50 rounded-xl border border-amber-100">
//                                 <p className="text-xs font-bold text-amber-800 mb-1">Action Required</p>
//                                 <p className="text-[10px] font-semibold text-amber-700">Please upload your Statement of Case (SOC) before the next mention date.</p>
//                               </div>
//                             )}
//                           </div>

//                           {/* Step 4: Hearing */}
//                           <div className="relative">
//                             <div className={`absolute -left-[25px] top-0 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-white ${selectedEFilingCase.status === 'hearing' ? 'bg-indigo-100 text-indigo-600 border-2 border-indigo-600' : 'bg-slate-200 text-slate-400'}`}>
//                               {selectedEFilingCase.status === 'hearing' && <div className="w-2 h-2 rounded-full bg-indigo-600"></div>}
//                             </div>
//                             <h4 className={`text-sm font-extrabold ${selectedEFilingCase.status === 'hearing' ? 'text-indigo-600' : 'text-slate-400'}`}>Trial / Hearing</h4>
//                             {selectedEFilingCase.status === 'hearing' && (
//                               <div className="mt-2 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
//                                 <p className="text-xs font-bold text-indigo-800 flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> Scheduled: 12 Mar 2026</p>
//                               </div>
//                             )}
//                           </div>

//                           {/* Step 5: Award */}
//                           <div className="relative">
//                             <div className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center ring-4 ring-white"></div>
//                             <h4 className="text-sm font-extrabold text-slate-400">Award / Decision</h4>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* RIGHT COLUMN: DOCUMENT MANAGEMENT */}
//                     <div className="lg:col-span-2 space-y-6">

//                       {/* Upload Interface */}
//                       <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                         <div className="flex justify-between items-center mb-6">
//                           <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider text-xs">Pleadings & Document Upload</h3>
//                           <button className="text-xs font-bold text-indigo-600 hover:underline">Guidelines</button>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                           <div className="relative">
//                             <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 outline-none appearance-none">
//                               <option>Statement of Case (SOC)</option>
//                               <option>Statement in Reply (SIR)</option>
//                               <option>Rejoinder</option>
//                               <option>Bundle of Documents</option>
//                               <option>Witness Statement</option>
//                             </select>
//                             <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//                           </div>
//                           <button className="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-colors flex justify-center items-center"><Upload className="w-4 h-4 mr-2" /> Browse File</button>
//                         </div>

//                         {/* Dropzone visual */}
//                         <div className="border-2 border-dashed border-slate-300 rounded-[20px] bg-slate-50 p-6 flex flex-col items-center justify-center text-center">
//                           <FileIcon className="w-8 h-8 text-slate-400 mb-2" />
//                           <p className="text-sm font-semibold text-slate-600">Drag & drop your PDF document here</p>
//                           <p className="text-[10px] font-semibold text-slate-400 mt-1">Max file size: 20MB. Format: PDF only.</p>
//                         </div>
//                       </div>

//                       {/* Uploaded Documents List */}
//                       <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-slate-200 shadow-sm">
//                         <h3 className="text-base font-extrabold text-slate-900 mb-6 uppercase tracking-wider text-xs">Case File Repository</h3>

//                         {selectedEFilingCase.status === 'review' ? (
//                           <div className="text-center py-8">
//                             <FileText className="w-12 h-12 text-slate-200 mx-auto mb-3" />
//                             <p className="text-sm font-semibold text-slate-500">No official documents registered yet.</p>
//                           </div>
//                         ) : (
//                           <div className="space-y-3">
//                             <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
//                               <div className="flex items-center gap-4">
//                                 <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
//                                 <div>
//                                   <p className="text-sm font-extrabold text-slate-900">Representation Letter (JPPM)</p>
//                                   <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 05 Mar 2026 • 2.4 MB</p>
//                                 </div>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
//                               </div>
//                             </div>

//                             {selectedEFilingCase.status === 'hearing' && (
//                               <>
//                                 <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
//                                   <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
//                                     <div>
//                                       <p className="text-sm font-extrabold text-slate-900">Statement of Case (SOC)</p>
//                                       <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 10 Mar 2026 • 5.1 MB • Claimant</p>
//                                     </div>
//                                   </div>
//                                   <div className="flex items-center gap-2">
//                                     <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
//                                     <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
//                                   </div>
//                                 </div>
//                                 <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-[16px] group hover:border-indigo-200 transition-colors">
//                                   <div className="flex items-center gap-4">
//                                     <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0"><FileText className="w-5 h-5" /></div>
//                                     <div>
//                                       <p className="text-sm font-extrabold text-slate-900">Statement in Reply (SIR)</p>
//                                       <p className="text-[10px] font-bold text-slate-500 mt-0.5">Uploaded: 11 Mar 2026 • 4.8 MB • Respondent</p>
//                                     </div>
//                                   </div>
//                                   <div className="flex items-center gap-2">
//                                     <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
//                                   </div>
//                                 </div>
//                               </>
//                             )}
//                           </div>
//                         )}
//                       </div>

//                     </div>
//                   </div>

//                 </div>
//               )}

//             </div>
//           </div>
//         </div>

//       ) : currentView === 'dashboard-guest' ? (
//         <div className="flex h-screen overflow-hidden bg-[#050505] text-white">
//           <div className="flex-1 flex flex-col p-4 md:p-6">
//             <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 bg-zinc-900/50 p-4 rounded-2xl border border-zinc-800 backdrop-blur-md gap-4">
//               <div className="flex items-center gap-3 md:gap-4">
//                 <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-[14px] flex items-center justify-center shadow-lg shadow-blue-900/50"><Video className="w-5 h-5 md:w-6 md:h-6 text-white" /></div>
//                 <div><h1 className="font-extrabold text-lg md:text-xl leading-none">e-Sebutan Virtual Mention</h1><p className="text-[10px] md:text-xs text-zinc-400 font-mono mt-1 font-bold">Case: 1/1-1522/25</p></div>
//               </div>
//               <button onClick={handleLogout} className="w-full sm:w-auto px-6 py-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white rounded-xl text-sm font-bold transition-all">Leave Session</button>
//             </header>

//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8 min-h-0">
//               <div className="bg-zinc-900/80 rounded-[24px] md:rounded-[32px] border border-zinc-800 flex flex-col items-center justify-center relative overflow-hidden group backdrop-blur-xl h-full">
//                 <UserCircle className="w-16 h-16 md:w-24 md:h-24 text-zinc-700 mb-4 md:mb-6" />
//                 <p className="font-bold text-sm md:text-base text-zinc-400">YA Chairman (Host)</p>
//                 <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-zinc-800 p-2 rounded-full"><Mic className="w-4 h-4 text-zinc-500" /></div>
//               </div>
//               <div className="bg-zinc-800/80 rounded-[24px] md:rounded-[32px] border border-zinc-700 flex flex-col items-center justify-center relative shadow-2xl ring-4 ring-emerald-500/30 backdrop-blur-xl overflow-hidden h-full">
//                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
//                 <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-700 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 md:mb-6 relative z-10 shadow-xl">Me</div>
//                 <p className="font-bold text-sm md:text-base text-white relative z-10">Claimant Representative</p>
//                 <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-emerald-500/20 p-2 rounded-full border border-emerald-500/50"><Mic className="w-4 h-4 text-emerald-400" /></div>
//               </div>
//             </div>
//             <div className="h-20 md:h-24 bg-zinc-900/80 rounded-[20px] md:rounded-[24px] flex items-center justify-center gap-4 md:gap-6 border border-zinc-800 backdrop-blur-xl shadow-2xl flex-shrink-0">
//               <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-all hover:scale-105"><Mic className="w-5 h-5 md:w-6 md:h-6" /></button>
//               <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-700 transition-all hover:scale-105"><Video className="w-5 h-5 md:w-6 md:h-6" /></button>
//               <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-900/50"><Monitor className="w-5 h-5 md:w-6 md:h-6" /></button>
//             </div>
//           </div>
//         </div>

//       ) : currentView === 'portal' ? (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}

//           <div className={`relative ${isHighContrast ? 'bg-black border-b border-white' : 'bg-slate-950 overflow-hidden'}`}>
//             {!isHighContrast && (
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]"></div>
//                 <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px]"></div>
//               </div>
//             )}

//             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-32 flex flex-col items-center text-center">
//               <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold mb-8 border tracking-wider uppercase ${isHighContrast ? 'border-white text-white' : 'border-blue-500/30 bg-blue-500/10 text-blue-300'}`}>
//                 <span className="flex w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
//                 Version 2.0 Live
//               </div>

//               <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
//                 {currentLang.heroTitle.split(' ').map((word, i, arr) => (
//                   <span key={i} className={i === arr.length - 1 && !isHighContrast ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300' : ''}>
//                     {word}{' '}
//                   </span>
//                 ))}
//               </h1>
//               <p className="text-base sm:text-xl text-slate-400 mb-10 sm:mb-14 max-w-2xl font-medium leading-relaxed px-4">
//                 {currentLang.heroSub}
//               </p>

//               <form onSubmit={handleGlobalSearch} className={`w-full max-w-3xl p-1.5 sm:p-2 rounded-[24px] flex flex-col sm:flex-row items-center shadow-2xl transition-all focus-within:ring-4 ${isHighContrast ? 'bg-black border border-white focus-within:ring-white/50' : 'bg-white/10 backdrop-blur-xl border border-white/20 focus-within:bg-white/15 focus-within:border-white/40 focus-within:ring-blue-500/30'}`}>
//                 <div className="pl-0 sm:pl-5 pt-4 sm:pt-0 pb-2 sm:pb-0 text-slate-400 w-full sm:w-auto flex justify-center sm:block hidden sm:flex">
//                   <Search className="w-6 h-6" />
//                 </div>
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder={currentLang.searchPlace}
//                   className="w-full px-4 py-3 sm:py-4 text-white placeholder:text-slate-400 bg-transparent border-none focus:ring-0 text-base sm:text-lg outline-none font-semibold text-center sm:text-left"
//                 />
//                 <button type="submit" className={`w-full sm:w-auto px-8 py-3 sm:py-4 rounded-[16px] font-bold text-base sm:text-lg transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap mt-2 sm:mt-0 ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'}`}>
//                   {currentLang.searchBtn}
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className={`border-b py-8 sm:py-10 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200 shadow-sm relative z-10'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex overflow-x-auto hide-scrollbar gap-8 sm:gap-12 pb-2 pt-2 snap-x items-center justify-start lg:justify-center">
//                 {currentLang.quickLinks.map((link, idx) => {
//                   const Icon = iconColors[idx % iconColors.length];
//                   return (
//                     <button key={idx} onClick={() => handleQuickLink(link.title)} className={`group flex items-center gap-3 sm:gap-4 transition-all duration-300 snap-center text-left flex-shrink-0 outline-none`}>
//                       <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${isHighContrast ? 'border-2 border-white text-white group-hover:bg-white group-hover:text-black' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-blue-600/30'}`}>
//                         <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
//                       </div>
//                       <span className={`text-sm sm:text-base font-extrabold whitespace-pre-line leading-tight tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}`}>
//                         {link.title.replace('\n', ' ')}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div id="modules" className={`py-16 sm:py-24 ${isHighContrast ? '' : 'bg-slate-50/50'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center mb-10 sm:mb-16 px-4">
//                 <h2 className={`text-3xl sm:text-4xl font-black mb-4 tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
//                   {currentLang.architectureTitle}
//                 </h2>
//                 <p className={`text-base sm:text-lg max-w-2xl mx-auto font-medium ${tTextSub}`}>
//                   {currentLang.architectureSub}
//                 </p>
//               </div>

//               <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-4 sm:px-0 pb-2 snap-x w-full">
//                 {currentLang.tabs.map((tabLabel, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => setActiveTab(idx)}
//                     className={`px-6 sm:px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap snap-center transition-all duration-300 ${activeTab === idx
//                       ? (isHighContrast ? 'bg-white text-black' : 'bg-slate-900 text-white shadow-md')
//                       : (isHighContrast ? 'border border-white text-white hover:bg-slate-800' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm')
//                       }`}
//                   >
//                     {tabLabel}
//                   </button>
//                 ))}
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
//                 {allModules[activeTab].items.map((mod, idx) => (
//                   <div key={idx} onClick={() => handleModuleLink(mod.enTitle)} className={`p-5 sm:p-6 rounded-[24px] flex items-center gap-5 transition-all duration-300 group ${isHighContrast ? 'bg-black border border-white hover:bg-slate-900' : 'bg-white border border-slate-200 hover:border-blue-400 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] cursor-pointer shadow-sm'}`}>
//                     <div className={`w-14 h-14 rounded-[16px] flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105 ${isHighContrast ? 'border border-white text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
//                       <mod.icon className="w-6 h-6" />
//                     </div>
//                     <div className="flex-1 min-w-0 pr-2">
//                       <h4 className={`text-lg font-extrabold truncate mb-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
//                         {mod.enTitle}
//                       </h4>
//                       <p className={`text-sm font-medium truncate ${tTextSub}`}>
//                         {mod.enDesc}
//                       </p>
//                     </div>
//                     <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isHighContrast ? 'text-white group-hover:bg-white group-hover:text-black' : 'text-slate-300 group-hover:text-blue-600 group-hover:bg-blue-50'}`}>
//                       <ChevronRight className="w-6 h-6" />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className={`border-y py-16 sm:py-32 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//               <div className="mb-8 sm:mb-12 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
//                 <div>
//                   <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mb-3 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
//                     {currentLang.homeHearingsTitle}
//                   </h2>
//                   <p className={`text-sm sm:text-lg font-medium ${tTextSub}`}>
//                     {currentLang.homeHearingsSub}
//                   </p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
//                   <div className={`inline-flex p-1.5 rounded-[20px] ${isHighContrast ? 'bg-black border border-white' : 'bg-slate-100 shadow-inner w-full sm:w-auto'}`}>
//                     <button
//                       onClick={() => setHomeListTab('hearings')}
//                       className={`flex-1 sm:flex-none px-5 sm:px-6 py-3 rounded-[14px] font-bold text-sm sm:text-base transition-all ${homeListTab === 'hearings' ? (isHighContrast ? 'bg-white text-black' : 'bg-white text-blue-600 shadow-sm') : 'text-slate-500 hover:text-slate-700'}`}
//                     >
//                       {currentLang.homeHearingsTab}
//                     </button>
//                     <button
//                       onClick={() => setHomeListTab('judgments')}
//                       className={`flex-1 sm:flex-none px-5 sm:px-6 py-3 rounded-[14px] font-bold text-sm sm:text-base transition-all ${homeListTab === 'judgments' ? (isHighContrast ? 'bg-white text-black' : 'bg-white text-blue-600 shadow-sm') : 'text-slate-500 hover:text-slate-700'}`}
//                     >
//                       {currentLang.homeJudgmentsTab}
//                     </button>
//                   </div>

//                   <button
//                     onClick={() => setCurrentView('schedule')}
//                     className={`w-full sm:w-auto flex justify-center items-center px-6 py-4 sm:py-3.5 border rounded-[16px] text-sm font-bold transition-all ${isHighContrast ? 'border-white text-white hover:bg-white hover:text-black' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'}`}
//                   >
//                     <Calendar className="w-4 h-4 mr-2 text-slate-500" />
//                     Full Schedule
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//                 <div className={`lg:col-span-8 space-y-4 sm:space-y-6`}>
//                   {homeListTab === 'hearings' ? (
//                     upcomingHearings.map((hearing, idx) => {
//                       const isExpanded = expandedId === hearing.id;
//                       const hType = mockHearingsTypes[idx];

//                       return (
//                         <div
//                           key={idx}
//                           className={`flex flex-col rounded-[24px] sm:rounded-[32px] overflow-hidden transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-blue-500 shadow-lg ring-4 ring-blue-500/10') : 'border-slate-200 hover:shadow-md hover:border-blue-300'}`}
//                         >
//                           <div
//                             onClick={() => setExpandedId(isExpanded ? null : hearing.id)}
//                             className={`flex flex-col sm:flex-row cursor-pointer group`}
//                           >
//                             <div className={`sm:w-56 p-6 sm:p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-slate-50/50 border-slate-100 group-hover:bg-blue-50/30 transition-colors'}`}>
//                               <span className={`text-xl sm:text-3xl font-black tracking-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{hearing.time}</span>
//                               <span className={`mt-0 sm:mt-3 inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isHighContrast ? 'border border-white text-white' : 'bg-slate-200 text-slate-700'}`}>
//                                 {hType}
//                               </span>
//                             </div>
//                             <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center relative pr-12 sm:pr-14">
//                               <h4 className={`text-lg sm:text-2xl font-extrabold mb-2 leading-tight ${isHighContrast ? 'text-white' : 'text-slate-900 group-hover:text-blue-700 transition-colors'}`}>
//                                 <span className={isHighContrast ? 'text-white' : ''}>{hearing.claimant}</span>
//                                 <span className="text-slate-400 font-medium mx-2 text-sm italic">v</span>
//                                 <span className={isHighContrast ? 'text-white' : ''}>{hearing.respondent}</span>
//                               </h4>
//                               <p className={`text-xs sm:text-sm mb-5 font-mono font-bold ${isHighContrast ? 'text-slate-300' : 'text-blue-600'}`}>{hearing.id}</p>
//                               <div className={`flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm font-semibold`}>
//                                 <div className={`flex items-center ${tTextSub}`}>
//                                   <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 opacity-60 flex-shrink-0" /> {hearing.court}
//                                 </div>
//                                 <div className={`flex items-center ${tTextSub}`}>
//                                   <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 opacity-60 flex-shrink-0" /> {hearing.judge}
//                                 </div>
//                               </div>
//                               <div className={`absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isHighContrast ? 'text-white' : 'text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-blue-600 text-white rotate-180') : ''}`}>
//                                 <ChevronDown className="w-6 h-6" />
//                               </div>
//                             </div>
//                           </div>

//                           {isExpanded && (
//                             <div className={`p-6 sm:p-8 border-t ${isHighContrast ? 'border-white bg-slate-900' : 'border-slate-100 bg-slate-50/50'}`}>
//                               <div className="mb-6">
//                                 <h5 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-3 text-slate-500">Keywords</h5>
//                                 <div className="flex flex-wrap gap-2">
//                                   {hearing.keywords.map(kw => (
//                                     <span key={kw} className={`px-3 py-1.5 text-[10px] sm:text-xs font-bold rounded-lg border ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 text-slate-600 shadow-sm'}`}>{kw}</span>
//                                   ))}
//                                 </div>
//                               </div>
//                               <div className="mb-8">
//                                 <h5 className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest mb-3 text-slate-500">Summary</h5>
//                                 <p className={`text-sm sm:text-base leading-relaxed font-medium ${isHighContrast ? 'text-white' : 'text-slate-700'}`}>{hearing.summary}</p>
//                               </div>
//                               <div className="flex flex-col sm:flex-row gap-4">
//                                 <button className={`w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-blue-600 shadow-md'}`}>
//                                   View Details
//                                 </button>
//                                 <button className={`w-full sm:w-auto flex justify-center items-center px-6 py-3 rounded-xl text-sm font-bold border transition-all ${isHighContrast ? 'border-white text-white hover:bg-slate-800' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-sm'}`}>
//                                   <Download className="w-4 h-4 mr-2" /> Download PDF
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })
//                   ) : (
//                     latestJudgements.map((judgment, idx) => {
//                       const isExpanded = expandedId === judgment.id;

//                       return (
//                         <div
//                           key={idx}
//                           className={`flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ${isHighContrast ? 'bg-black border-2 border-white' : 'bg-white border shadow-sm'} ${isExpanded ? (isHighContrast ? 'ring-2 ring-white' : 'border-emerald-500 shadow-xl ring-4 ring-emerald-500/10') : 'border-slate-200 hover:shadow-lg hover:border-emerald-300'}`}
//                         >
//                           <div
//                             onClick={() => setExpandedId(isExpanded ? null : judgment.id)}
//                             className={`flex flex-col sm:flex-row cursor-pointer group`}
//                           >
//                             <div className={`sm:w-56 p-5 sm:p-8 sm:border-r flex flex-row sm:flex-col justify-between sm:justify-center items-center ${isHighContrast ? 'border-white' : 'bg-slate-50/50 border-slate-100 group-hover:bg-emerald-50/30 transition-colors'}`}>
//                               <span className={`text-base sm:text-lg font-black text-center ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>{judgment.awardNo}</span>
//                               <span className={`mt-0 sm:mt-3 text-[10px] sm:text-xs font-bold text-slate-500`}>
//                                 {judgment.date}
//                               </span>
//                             </div>
//                             <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center relative pr-12 sm:pr-14">
//                               <h4 className={`text-base sm:text-xl font-bold mb-1.5 leading-tight ${isHighContrast ? 'text-white' : 'text-slate-900 group-hover:text-emerald-700 transition-colors'}`}>
//                                 <span className={isHighContrast ? 'text-white' : ''}>{judgment.claimant}</span>
//                                 <span className="text-slate-400 font-medium mx-1.5 text-xs italic">v</span>
//                                 <span className={isHighContrast ? 'text-white' : ''}>{judgment.respondent}</span>
//                               </h4>
//                               <p className={`text-xs sm:text-sm mb-4 font-mono font-semibold ${isHighContrast ? 'text-slate-300' : 'text-emerald-600'}`}>{judgment.id}</p>
//                               <div className={`flex flex-col sm:flex-row gap-2 sm:gap-5 text-xs sm:text-sm font-medium`}>
//                                 <div className={`flex items-center ${tTextSub}`}>
//                                   <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 opacity-60 flex-shrink-0" /> {judgment.court}
//                                 </div>
//                                 <div className={`flex items-center ${tTextSub}`}>
//                                   <Gavel className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 opacity-60 flex-shrink-0" /> {judgment.judge}
//                                 </div>
//                               </div>
//                               <div className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isHighContrast ? 'text-white' : 'text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50'} ${isExpanded ? (isHighContrast ? 'bg-white text-black' : 'bg-emerald-600 text-white rotate-180') : ''}`}>
//                                 <ChevronDown className="w-5 h-5" />
//                               </div>
//                             </div>
//                           </div>

//                           {isExpanded && (
//                             <div className={`p-5 sm:p-8 border-t ${isHighContrast ? 'border-white bg-slate-900' : 'border-slate-100 bg-slate-50/50'}`}>
//                               <div className="mb-5">
//                                 <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 text-slate-500">Keywords</h5>
//                                 <div className="flex flex-wrap gap-2">
//                                   {judgment.keywords.map(kw => (
//                                     <span key={kw} className={`px-2.5 py-1 text-[10px] sm:text-xs font-semibold rounded-md border ${isHighContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200 text-slate-600'}`}>{kw}</span>
//                                   ))}
//                                 </div>
//                               </div>
//                               <div className="mb-6 sm:mb-8">
//                                 <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Award Summary</h5>
//                                 <p className={`text-xs sm:text-sm leading-relaxed ${isHighContrast ? 'text-white' : 'text-slate-700'}`}>{judgment.summary}</p>
//                               </div>
//                               <div className="flex flex-col sm:flex-row gap-3">
//                                 <button className={`w-full sm:w-auto flex justify-center items-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${isHighContrast ? 'bg-white text-black hover:bg-slate-200' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md'}`}>
//                                   <Download className="w-4 h-4 mr-2" /> Download Full Award
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })
//                   )}
//                 </div>

//                 <div className={`lg:col-span-4 rounded-[32px] p-6 sm:p-8 h-fit flex flex-col ${isHighContrast ? 'border-2 border-white' : 'bg-slate-900 text-white shadow-2xl'}`}>
//                   <h3 className="text-xl font-extrabold mb-6 sm:mb-8 flex items-center border-b border-slate-800 pb-4">
//                     <Clock className={`w-6 h-6 mr-3 ${isHighContrast ? 'text-white' : 'text-blue-400'}`} />
//                     {currentLang.noticesTitle}
//                   </h3>
//                   <ul className="space-y-6 flex-grow">
//                     {currentLang.notices.map((notice, idx) => (
//                       <li key={idx} className={`pb-6 ${idx !== currentLang.notices.length - 1 ? 'border-b border-slate-800' : ''}`}>
//                         <span className={`text-[10px] sm:text-xs block mb-2 font-mono font-bold tracking-widest ${isHighContrast ? 'text-white' : 'text-blue-400'}`}>
//                           {notice.date}
//                         </span>
//                         <a href="#" className={`text-sm sm:text-base font-bold leading-snug transition-colors line-clamp-3 ${isHighContrast ? 'underline' : 'hover:text-blue-300 text-slate-100'}`}>
//                           {notice.title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                   <button className={`w-full mt-4 py-3 sm:py-4 rounded-xl font-bold text-sm transition-colors ${isHighContrast ? 'bg-white text-black' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
//                     {currentLang.viewAllNotices}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {renderFooter()}
//         </div>
//       ) : currentView === 'about' ? (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}
//           <main className="flex-1 relative z-10 py-12 sm:py-16 bg-slate-50">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
//                 {currentLang.about}
//               </h1>
//               <div className={`p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}>
//                 <p className={`text-lg sm:text-xl leading-relaxed font-medium mb-6 ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
//                   The Industrial Court of Malaysia was established under the Industrial Relations Act 1967. Our primary objective is to arbitrate and resolve trade disputes, unfair dismissal claims, and cases related to collective agreements securely, efficiently, and equitably.
//                 </p>
//                 <div className={`h-px w-full my-8 ${isHighContrast ? 'bg-slate-800' : 'bg-slate-100'}`} />
//                 <h3 className={`text-2xl font-extrabold mb-4 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>Our Mission</h3>
//                 <p className={`text-base sm:text-lg leading-relaxed font-medium ${isHighContrast ? 'text-slate-300' : 'text-slate-600'}`}>
//                   To uphold industrial harmony through swift, fair, and transparent adjudication of employment disputes, ensuring justice for both employers and employees across Malaysia via continuous digital modernization.
//                 </p>
//               </div>
//             </div>
//           </main>
//           {renderFooter()}
//         </div>
//       ) : currentView === 'contact' ? (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}
//           <main className="flex-1 relative z-10 py-12 sm:py-16 bg-slate-50">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-8 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>
//                 {currentLang.contact}
//               </h1>
//               <div className={`p-8 sm:p-12 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border flex flex-col md:flex-row gap-12 ${isHighContrast ? 'bg-black border-white' : 'bg-white border-slate-200'}`}>
//                 <div className="flex-1 space-y-8">
//                   <div>
//                     <h3 className={`text-sm font-extrabold uppercase tracking-widest mb-2 ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>Headquarters Address</h3>
//                     <p className={`text-lg sm:text-xl font-bold leading-tight ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>Mahkamah Perusahaan Malaysia,<br />Wisma Perkeso, Jalan Tun Razak,<br />50400 Kuala Lumpur</p>
//                   </div>
//                   <div>
//                     <h3 className={`text-sm font-extrabold uppercase tracking-widest mb-2 ${isHighContrast ? 'text-slate-400' : 'text-slate-400'}`}>General Enquiries</h3>
//                     <p className={`text-lg font-bold text-blue-600`}>eicsupport@mohr.gov.my</p>
//                     <p className={`text-lg font-bold mt-1 ${isHighContrast ? 'text-white' : 'text-slate-900'}`}>+603-9236 5056</p>
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className={`w-full h-full min-h-[250px] rounded-2xl flex flex-col items-center justify-center border-2 border-dashed ${isHighContrast ? 'border-slate-800 bg-slate-900/50 text-slate-500' : 'border-slate-200 bg-slate-50 text-slate-400'}`}>
//                     <MapPin className="w-12 h-12 mb-4 opacity-50" />
//                     <span className="font-bold text-sm">Interactive Map</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//           {renderFooter()}
//         </div>
//       ) : (
//         <div className="flex flex-col w-full min-h-screen">
//           {renderNavbar()}
//           <div className="flex-1 flex items-center justify-center bg-slate-50 flex-col">
//             <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Page Not Found</h2>
//             <button onClick={() => setCurrentView('portal')} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">Return Home</button>
//           </div>
//           {renderFooter()}
//         </div>
//       )}
//     </div>
//   );
// }