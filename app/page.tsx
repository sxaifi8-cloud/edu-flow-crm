'use client';
import React, { useState, useMemo } from 'react';

// Fully Inlined, Turbopack Crash-Proof Icon System
const Icon = ({ name, className = "w-4 h-4" }: { name: string; className?: string }) => {
  switch (name) {
    case 'pie-chart': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>;
    case 'users': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>;
    case 'graduation-cap': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"/></svg>;
    case 'dollar-sign': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-12a8 8 0 100 16 8 8 0 000-16z"/></svg>;
    case 'wallet': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>;
    case 'video': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>;
    case 'arrow-up-right': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>;
    case 'plus': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>;
    case 'trending-down': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>;
    case 'trending-up': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
    case 'pin': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>;
    case 'menu': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case 'x': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>;
    case 'building': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>;
    case 'search': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>;
    case 'clock': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'settings': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'camera': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'check': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
    case 'book': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>;
    case 'bell': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>;
    case 'upload': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>;
    case 'file-text': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>;
    case 'download': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>;
    case 'play': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'send': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>;
    case 'calendar': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'printer': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>;
    case 'trash': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;
    case 'edit': return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path strokeLinecap="round" strokeLinejoin="round" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
    default: return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
  }
};

export default function EduFlowEnterpriseSuite() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'students' | 'leads' | 'staff' | 'timetable' | 'lms' | 'expenses' | 'finance' | 'settings'>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // LMS Portal State
  const [lmsRole, setLmsRole] = useState<'student' | 'teacher'>('student');
  const [activeLmsSubTab, setActiveLmsSubTab] = useState<'dashboard' | 'program' | 'assignments' | 'lectures' | 'results'>('dashboard');

  // Modals
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [showFinanceModal, setShowFinanceModal] = useState(false);
  const [showDirectorModal, setShowDirectorModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showTeacherUploadModal, setShowTeacherUploadModal] = useState(false);
  const [showChallanModal, setShowChallanModal] = useState(false);

  // LMS Interactive Popups
  const [showAnnouncementsModal, setShowAnnouncementsModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Active Audit Drawers
  const [inspectedStudent, setInspectedStudent] = useState<any | null>(null);
  const [inspectedExpense, setInspectedExpense] = useState<any | null>(null);
  const [inspectedLedgerItem, setInspectedLedgerItem] = useState<{ title: string; category: string; amount: number; notes: string; vouchers: string[] } | null>(null);
  const [selectedChallanStudent, setSelectedChallanStudent] = useState<any | null>(null);

  // Search & Filters
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [ledgerTabFilter, setLedgerTabFilter] = useState<'expenses' | 'assets' | 'liabilities'>('expenses');
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');
  const [leadSearchQuery, setLeadSearchQuery] = useState('');

  // Director / Owner Profile (Transparency & Audit Logging)
  const [directorProfile, setDirectorProfile] = useState({
    name: 'Director Office (Admin)',
    email: 'director@britishinstitute.pk',
    phone: '+92 51 11122233',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  });
  const [tempDirectorPhoto, setTempDirectorPhoto] = useState('');
  const [showReminder, setShowReminder] = useState(true);
  const [reminderText, setReminderText] = useState('Director Reminder: Fall 2026 Orientation starts at 5:00 PM today in Main Hall.');

  const institute = { name: "British Institute for Spoken English", campus: "Islamabad Main Campus", regNo: "ED-ISB-2026", accountingCycle: "Quarter ending Q4 2026" };

  const courseCatalog = [
    { id: 'c1', name: 'IELTS Academic 7.5+ Masterclass', fee: 28000, duration: '2 Months', color: '#10B981' },
    { id: 'c2', name: 'Spoken English Fluency & Accent', fee: 18000, duration: '2.5 Months', color: '#3B82F6' },
    { id: 'c3', name: 'PTE Academic Intensive', fee: 25000, duration: '1.5 Months', color: '#F59E0B' },
    { id: 'c4', name: 'Business English & Public Speaking', fee: 32000, duration: '1 Month', color: '#8B5CF6' },
  ];

  // ========================================================
  // CORE DATA STATE
  // ========================================================
  const [studentsRoster, setStudentsRoster] = useState<any[]>([]);
  
  // Enhanced Staff Roster with professional institutional attributes
  const [staffRoster, setStaffRoster] = useState<any[]>([
    { id: 1, empId: 'EMP-101', name: 'Sir Saif', role: 'Head IELTS Trainer', dept: 'Faculty', qualification: 'MA English, CELTA Certified', specialization: 'IELTS & Phonetic Drills', joiningDate: '2023-01-15', emergencyContact: '+92 300 9988776', email: 'saif@britishinstitute.pk', phone: '+92 300 1112233', shift: 'Evening', classroom: 'Lab A - Audio Hall', salary: 85000, status: 'present', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120' },
    { id: 2, empId: 'EMP-102', name: 'Ms. Rabia Zafar', role: 'Spoken English Trainer', dept: 'Faculty', qualification: 'BA Honors, TEFL', specialization: 'Conversational Fluency', joiningDate: '2023-06-10', emergencyContact: '+92 321 5544332', email: 'rabia@britishinstitute.pk', phone: '+92 321 4445566', shift: 'Morning', classroom: 'Room 2 - Fluency Desk', salary: 65000, status: 'present', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120' },
  ]);

  // Modern Professional Leads Data
  const [retargetLeads, setRetargetLeads] = useState<any[]>([
    { id: 'RET-301', name: 'Bilal Hassan', phone: '+92 302 4455667', email: 'bilal.h@gmail.com', visitedDate: '3 Days Ago', interest: 'IELTS Academic', reason: 'Fee installment requested', stage: 'Follow-Up Due', rating: 'Warm Lead', assignedTo: 'Zeeshan Malik' },
    { id: 'RET-302', name: 'Zunaira Aslam', phone: '+92 321 9988771', email: 'zunaira.a@yahoo.com', visitedDate: '5 Days Ago', interest: 'Spoken English Fluency', reason: 'Attended trial, undecided', stage: 'Trial Done', rating: 'Hot Lead', assignedTo: 'Ms. Rabia Zafar' },
    { id: 'RET-303', name: 'Fahad Mehmood', phone: '+92 333 1122998', email: 'fahad.m@outlook.com', visitedDate: '1 Week Ago', interest: 'PTE Academic Intensive', reason: 'Comparing with competitor', stage: 'Dormant Walk-In', rating: 'Cold Lead', assignedTo: 'Zeeshan Malik' },
  ]);

  const [courseModules, setCourseModules] = useState<any[]>([
    { id: 1, title: 'IELTS Academic Speaking Task 2 Masterclass', faculty: 'Sir Saif', type: 'Video Masterclass', tag: 'Band 8.0 Prep', duration: '48 Mins' },
    { id: 2, title: 'Oxford Pronunciation & Vowel Accent Drills', faculty: 'Ms. Rabia Zafar', type: 'PDF & Audio', tag: 'Spoken English', duration: '18 Pages' },
  ]);

  const [studentAssignments, setStudentAssignments] = useState<any[]>([
    { id: 'SUB-901', student: 'Usman Ali', course: 'IELTS Academic 7.5+', file: 'Task2_Opinion_Essay.docx', format: 'DOCX (Word)', status: 'Graded (Band 7.5)', date: 'Oct 23, 2026', teacher: 'Sir Saif' }
  ]);

  const studentResultReport = {
    examTitle: 'IELTS Academic Diagnostic Mock #04', candidate: 'Usman Ali (STU-101)', date: 'Oct 20, 2026',
    overallBand: 7.5, listening: 8.0, reading: 7.5, writing: 7.0, speaking: 8.0,
    remarks: 'Candidate demonstrates strong lexical resource and clear phonetic control. Task 2 coherence meets Band 8.0 standard.',
    evaluator: 'Sir Saif (Official IELTS Trainer)'
  };

  // Form Inputs: Students
  const [admFullName, setAdmFullName] = useState('');
  const [admGuardian, setAdmGuardian] = useState('');
  const [admCNIC, setAdmCNIC] = useState('');
  const [admPhone, setAdmPhone] = useState('');
  const [admSelectedCourses, setAdmSelectedCourses] = useState<string[]>(['Spoken English Fluency & Accent']);
  const [admShift, setAdmShift] = useState('Evening');
  const [admTiming, setAdmTiming] = useState('06:00 PM - 08:00 PM');
  const [admTrainer, setAdmTrainer] = useState('Sir Saif');
  const [admDiscount, setAdmDiscount] = useState('0');
  const [admAmountPaid, setAdmAmountPaid] = useState('');
  const [admPhotoPreview, setAdmPhotoPreview] = useState('');
  const [admPhotoUploaded, setAdmPhotoUploaded] = useState(false);

  // Form Inputs: Staff (With Edit state tracking)
  const [editingStaffId, setEditingStaffId] = useState<number | null>(null);
  const [staffEmpId, setStaffEmpId] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffRole, setStaffRole] = useState('Trainer');
  const [staffDept, setStaffDept] = useState('Faculty');
  const [staffQualification, setStaffQualification] = useState('');
  const [staffSpecialization, setStaffSpecialization] = useState('');
  const [staffJoiningDate, setStaffJoiningDate] = useState('');
  const [staffEmergency, setStaffEmergency] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffPhone, setStaffPhone] = useState('');
  const [staffShift, setStaffShift] = useState('Morning');
  const [staffSalary, setStaffSalary] = useState('');
  const [staffStatus, setStaffStatus] = useState('present');
  const [staffPhotoPreview, setStaffPhotoPreview] = useState('');
  const [staffPhotoUploaded, setStaffPhotoUploaded] = useState(false);

  // Form Inputs: Financial Ledger Entry
  const [financeType, setFinanceType] = useState<'Expense' | 'Asset' | 'Liability'>('Expense');
  const [finTitle, setFinTitle] = useState('');
  const [finCategory, setFinCategory] = useState('Marketing');
  const [finAmount, setFinAmount] = useState('');
  const [finPaidTo, setFinPaidTo] = useState('');
  const [finMethod, setFinMethod] = useState('Cash / Direct');
  const [finPhotoPreview, setFinPhotoPreview] = useState('');

  const [assignmentTitle, setAssignmentTitle] = useState('IELTS Task 2 Essay');
  const [assignmentCourse, setAssignmentCourse] = useState('IELTS Academic 7.5+ Masterclass');
  const [assignmentFileName, setAssignmentFileName] = useState('');
  const [assignmentFileType, setAssignmentFileType] = useState('');
  const [assignmentSuccess, setAssignmentSuccess] = useState(false);

  const [newLectureTitle, setNewLectureTitle] = useState('');
  const [newLectureCourse, setNewLectureCourse] = useState('IELTS Academic 7.5+ Masterclass');
  const [newLectureVideoUrl, setNewLectureVideoUrl] = useState('');

  // Financial Engine Arrays
  const [expensesList, setExpensesList] = useState<any[]>([]);
  const [assetsList, setAssetsList] = useState<any[]>([]);
  const [liabilitiesList, setLiabilitiesList] = useState<any[]>([]);

  // ========================================================
  // LIVE DOUBLE-ENTRY FINANCIAL ENGINE (SOPL / SOFP SYNC)
  // ========================================================

  const totalReceivables = useMemo(() => studentsRoster.reduce((sum, s) => {
    const due = s.totalFee - s.feePaid;
    return sum + (due > 0 ? due : 0);
  }, 0), [studentsRoster]);

  const accrualRevenue = useMemo(() => studentsRoster.reduce((sum, s) => sum + s.totalFee, 0), [studentsRoster]);
  
  const revenueByCourse = useMemo(() => studentsRoster.reduce((acc: any, student) => {
    const course = student.courses[0] || 'General';
    acc[course] = (acc[course] || 0) + student.totalFee;
    return acc;
  }, {}), [studentsRoster]);

  const totalExpenses = useMemo(() => expensesList.reduce((sum, e) => sum + e.amount, 0), [expensesList]);
  const expenseByCategory = useMemo(() => expensesList.reduce((acc: any, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {}), [expensesList]);

  const totalAssetsPurchased = useMemo(() => assetsList.reduce((sum, a) => sum + a.amount, 0), [assetsList]);
  const totalLiabilitiesAdded = useMemo(() => liabilitiesList.reduce((sum, l) => sum + l.amount, 0), [liabilitiesList]);

  const netOperatingProfit = accrualRevenue - totalExpenses;
  const netProfitMargin = accrualRevenue > 0 ? ((netOperatingProfit / accrualRevenue) * 100).toFixed(1) : '0.0';

  const cashCollected = useMemo(() => studentsRoster.reduce((sum, s) => sum + s.feePaid, 0), [studentsRoster]);
  const liquidCash = cashCollected + totalLiabilitiesAdded - totalExpenses - totalAssetsPurchased;
  const totalAssets = liquidCash + totalReceivables + totalAssetsPurchased;
  const totalEquity = netOperatingProfit;

  const soplIncomeStreams = Object.entries(revenueByCourse).map(([course, amount]) => ({
    title: course, amount: amount as number, category: 'Tuition Inflow', notes: 'Accrual tuition revenue billed to enrolled students.'
  }));

  const soplExpenseStreams = Object.entries(expenseByCategory).map(([cat, amount]) => ({
    title: `${cat} Disbursed`, amount: amount as number, category: 'Operational Outflow', notes: 'Aggregated operational expenses for this period.'
  }));

  const sofpAssets = [
    { title: 'Liquid Cash at Bank & Wallets', amount: liquidCash, category: 'Current Asset', notes: 'Cash collected + Loans - Expenses - Assets Purchased' },
    { title: 'Outstanding Tuition Receivables', amount: totalReceivables, category: 'Current Asset', notes: 'Pending fee installments from enrolled students' },
    ...assetsList.map(a => ({ title: a.title, amount: a.amount, category: 'Non-Current Asset', notes: `Logged by: ${a.loggedBy} on ${a.date}` }))
  ];

  const sofpLiabilities = [
    ...liabilitiesList.map(l => ({ title: l.title, amount: l.amount, category: 'Liability / Debt', notes: `Logged by: ${l.loggedBy} on ${l.date}` }))
  ];

  // Admission Calculation
  const calculatedBaseFee = admSelectedCourses.reduce((sum, cName) => {
    const item = courseCatalog.find(c => c.name === cName);
    return sum + (item ? item.fee : 0);
  }, 0);
  const finalTuitionFee = Math.max(0, calculatedBaseFee - (parseFloat(admDiscount) || 0));

  // Filters
  const filteredStudents = useMemo(() => studentsRoster.filter(stu => 
    (selectedCourseFilter === 'All' || stu.courses.some((c: string) => c.toLowerCase().includes(selectedCourseFilter.toLowerCase()))) &&
    (stu.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) || stu.cnic.includes(studentSearchQuery) || stu.id.toLowerCase().includes(studentSearchQuery.toLowerCase()))
  ), [studentsRoster, studentSearchQuery, selectedCourseFilter]);

  const filteredLeads = useMemo(() => retargetLeads.filter(lead =>
    (leadStatusFilter === 'All' || lead.stage === leadStatusFilter) &&
    (lead.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) || lead.phone.includes(leadSearchQuery) || lead.interest.toLowerCase().includes(leadSearchQuery.toLowerCase()))
  ), [retargetLeads, leadStatusFilter, leadSearchQuery]);

  const activeLedgerData = useMemo(() => {
    if (ledgerTabFilter === 'expenses') return expensesList;
    if (ledgerTabFilter === 'assets') return assetsList;
    return liabilitiesList;
  }, [ledgerTabFilter, expensesList, assetsList, liabilitiesList]);

  // Handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, setPreview: (url: string) => void, setSuccess: (val: boolean) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setSuccess(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleAdmCourse = (courseName: string) => {
    if (admSelectedCourses.includes(courseName)) {
      if (admSelectedCourses.length > 1) setAdmSelectedCourses(admSelectedCourses.filter(c => c !== courseName));
    } else {
      setAdmSelectedCourses([...admSelectedCourses, courseName]);
    }
  };

  const handleEnrollStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admFullName || !admPhone) return;

    const paidAmount = admAmountPaid ? parseFloat(admAmountPaid) : finalTuitionFee;
    const isPending = paidAmount < finalTuitionFee;
    const due = finalTuitionFee - paidAmount;

    const newStudent = {
      id: `STU-${100 + studentsRoster.length + 1}`, 
      name: admFullName, 
      guardian: admGuardian || 'Guardian Record', 
      cnic: admCNIC, 
      phone: admPhone, 
      courses: admSelectedCourses, 
      shift: admShift, 
      timing: admTiming, 
      totalFee: finalTuitionFee,
      feePaid: paidAmount, 
      feeStatus: isPending ? `Pending (${due/1000}k due)` : 'Paid', 
      attendancePct: '100%', 
      trainer: admTrainer, 
      date: new Date().toLocaleDateString(), 
      loggedBy: directorProfile.name,
      photo: admPhotoPreview || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120'
    };

    setStudentsRoster([newStudent, ...studentsRoster]);
    setShowAddStudentModal(false);
    setAdmPhotoUploaded(false);
    setAdmAmountPaid('');
    setAdmFullName('');
    setAdmPhone('');
    setAdmCNIC('');
  };

  // Staff Save / Edit Handler
  const handleSaveStaffMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName || !staffEmail) return;

    if (editingStaffId !== null) {
      // Edit existing staff
      setStaffRoster(staffRoster.map(s => s.id === editingStaffId ? {
        ...s,
        empId: staffEmpId || s.empId,
        name: staffName,
        role: staffRole,
        dept: staffDept,
        qualification: staffQualification,
        specialization: staffSpecialization,
        joiningDate: staffJoiningDate || s.joiningDate,
        emergencyContact: staffEmergency,
        email: staffEmail,
        phone: staffPhone,
        shift: staffShift,
        salary: parseFloat(staffSalary || '55000'),
        status: staffStatus,
        photo: staffPhotoPreview || s.photo
      } : s));
      setEditingStaffId(null);
    } else {
      // Add new staff
      const newStaff = {
        id: staffRoster.length + 1,
        empId: staffEmpId || `EMP-10${staffRoster.length + 1}`,
        name: staffName,
        role: staffRole,
        dept: staffDept,
        qualification: staffQualification || 'Bachelor Degree',
        specialization: staffSpecialization || 'General Training',
        joiningDate: staffJoiningDate || new Date().toISOString().split('T')[0],
        emergencyContact: staffEmergency || '+92 300 0000000',
        email: staffEmail,
        phone: staffPhone || '+92 300 0000000',
        shift: staffShift,
        classroom: 'Campus Floor 2',
        salary: parseFloat(staffSalary || '55000'),
        status: staffStatus,
        photo: staffPhotoPreview || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120'
      };
      setStaffRoster([...staffRoster, newStaff]);
    }

    // Reset Staff Form
    setStaffName('');
    setStaffEmail('');
    setStaffPhone('');
    setStaffSalary('');
    setStaffQualification('');
    setStaffSpecialization('');
    setStaffEmergency('');
    setStaffEmpId('');
    setStaffPhotoPreview('');
    setStaffPhotoUploaded(false);
    setShowAddStaffModal(false);
  };

  const handleEditStaffClick = (staff: any) => {
    setEditingStaffId(staff.id);
    setStaffEmpId(staff.empId);
    setStaffName(staff.name);
    setStaffRole(staff.role);
    setStaffDept(staff.dept);
    setStaffQualification(staff.qualification);
    setStaffSpecialization(staff.specialization);
    setStaffJoiningDate(staff.joiningDate);
    setStaffEmergency(staff.emergencyContact);
    setStaffEmail(staff.email);
    setStaffPhone(staff.phone);
    setStaffShift(staff.shift);
    setStaffSalary(staff.salary.toString());
    setStaffStatus(staff.status);
    setStaffPhotoPreview(staff.photo);
    setShowAddStaffModal(true);
  };

  const handleDeleteStaff = (id: number) => {
    if (confirm('Are you sure you want to remove this staff member from the institutional record?')) {
      setStaffRoster(staffRoster.filter(s => s.id !== id));
    }
  };

  const handleFinanceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finTitle || !finAmount) return;

    const entry = {
      id: `FIN-${Math.floor(1000 + Math.random() * 9000)}`, 
      title: finTitle, 
      category: finCategory, 
      amount: parseFloat(finAmount), 
      paidTo: finPaidTo || 'Internal/Vendor', 
      date: new Date().toLocaleDateString(), 
      method: finMethod, 
      loggedBy: directorProfile.name,
      receiptPhoto: finPhotoPreview
    };

    if (financeType === 'Expense') setExpensesList([entry, ...expensesList]);
    else if (financeType === 'Asset') setAssetsList([entry, ...assetsList]);
    else if (financeType === 'Liability') setLiabilitiesList([entry, ...liabilitiesList]);

    setFinTitle('');
    setFinAmount('');
    setFinPaidTo('');
    setFinPhotoPreview('');
    setShowFinanceModal(false);
  };

  const handleAssignmentFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAssignmentFileName(file.name);
      setAssignmentFileType(file.name.split('.').pop()?.toUpperCase() || 'FILE');
      setAssignmentSuccess(true);
    }
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignmentFileName) return;
    const newSub = {
      id: `SUB-${Math.floor(900 + Math.random() * 99)}`, student: 'Usman Ali (You)', course: assignmentCourse, file: assignmentFileName, format: `${assignmentFileType} Document`, status: 'Submitted (Pending Review)', date: 'Just Now', teacher: assignmentCourse.includes('IELTS') ? 'Sir Saif' : 'Ms. Rabia Zafar'
    };
    setStudentAssignments([newSub, ...studentAssignments]);
    setShowAssignmentModal(false);
    setAssignmentSuccess(false);
    setAssignmentFileName('');
    alert('Assignment file successfully uploaded to British Institute LMS portal!');
  };

  const handleTeacherUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLectureTitle) return;
    const newMod = {
      id: courseModules.length + 1, title: newLectureTitle, faculty: 'Sir Saif (You)', type: newLectureVideoUrl ? 'Video Masterclass' : 'PDF Worksheet', tag: newLectureCourse.split(' ')[0], duration: '45 Mins'
    };
    setCourseModules([newMod, ...courseModules]);
    setShowTeacherUploadModal(false);
    setNewLectureTitle('');
    setNewLectureVideoUrl('');
    alert('Lecture published successfully to enrolled student dashboards!');
  };

  const openWhatsApp = (phone: string, name: string, courses: string[]) => {
    const text = encodeURIComponent(`Assalam-o-Alaikum ${name}! Welcome to ${institute.name}. Your assessment slot for ${courses.join(' & ')} is confirmed.`);
    window.open(`https://api.whatsapp.com/send?phone=${phone.replace(/[^0-9]/g, '')}&text=${text}`, '_blank');
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 antialiased overflow-hidden">
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0A1128] text-slate-200 transform transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col justify-between shadow-2xl shrink-0`}>
        <div>
          <div className="p-4 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center font-black text-slate-950 text-sm shadow-md">EF</div>
              <div><h1 className="font-extrabold text-xs tracking-wider text-white">EDU-FLOW ERP</h1><p className="text-[10px] text-emerald-400 font-medium">Academy Operating Suite</p></div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400"><Icon name="x" className="w-5 h-5" /></button>
          </div>

          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <img src={directorProfile.photo} alt="Director" className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400 shrink-0" />
              <div className="overflow-hidden"><p className="text-xs font-bold text-amber-300 truncate">{institute.name}</p><p className="text-[10px] text-slate-400">{institute.campus}</p></div>
            </div>
          </div>

          <nav className="p-3 space-y-1 text-xs">
            <p className="px-3 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Main Operations</p>
            {[
              { id: 'dashboard', name: 'Executive Overview', icon: 'pie-chart' },
              { id: 'students', name: 'Students Directory & Intake', icon: 'graduation-cap', badge: studentsRoster.length },
              { id: 'leads', name: 'Leads & Retargeting Hub', icon: 'users', badge: retargetLeads.length },
              { id: 'staff', name: 'Faculty & Staff Roster', icon: 'users', badge: `${staffRoster.filter(s => s.status === 'present').length} Active` },
              { id: 'timetable', name: 'Global Class Timetable', icon: 'calendar', badge: 'Rooms' },
              { id: 'lms', name: 'LMS Academic Portal', icon: 'video', badge: 'Online Hub' },
            ].map((item) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); }} className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg transition ${activeTab === item.id ? 'bg-emerald-600 text-white font-semibold shadow-sm' : 'text-slate-300 hover:bg-slate-800/80'}`}>
                <div className="flex items-center gap-2.5"><Icon name={item.icon} className="w-4 h-4" /><span>{item.name}</span></div>
                {item.badge !== 0 && <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-emerald-300 font-bold">{item.badge}</span>}
              </button>
            ))}

            <p className="px-3 pt-4 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Financials & Accounts</p>
            {[
              { id: 'finance', name: 'SOPL & SOFP Statements', icon: 'dollar-sign', badge: 'Live Synced' },
              { id: 'expenses', name: 'Financial Entry Ledger', icon: 'wallet', badge: 'Audit' },
              { id: 'settings', name: 'Administration & Settings', icon: 'settings' },
            ].map((item) => (
              <button key={item.id} onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); }} className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg transition ${activeTab === item.id ? 'bg-emerald-600 text-white font-semibold shadow-sm' : 'text-slate-300 hover:bg-slate-800/80'}`}>
                <div className="flex items-center gap-2.5"><Icon name={item.icon} className="w-4 h-4" /><span>{item.name}</span></div>
                {item.badge && <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">{item.badge}</span>}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* 2. MAIN ACTIVE CANVAS */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {activeTab !== 'lms' && (
          <>
            {showReminder && (
              <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-slate-950 px-4 md:px-8 py-2 flex items-center justify-between shadow-sm text-xs font-semibold">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="flex items-center gap-1 bg-slate-950 text-amber-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider shrink-0"><Icon name="pin" className="w-3 h-3" /> Pin</span>
                  <p className="truncate text-slate-950">{reminderText}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <button onClick={() => setShowReminder(false)} className="text-slate-950 hover:text-white"><Icon name="x" className="w-4 h-4" /></button>
                </div>
              </div>
            )}

            <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-600 p-1"><Icon name="menu" className="w-6 h-6" /></button>
                <div>
                  <h2 className="text-sm md:text-base font-extrabold text-slate-800 capitalize">
                    {activeTab === 'dashboard' ? 'Executive Overview' : activeTab === 'expenses' ? 'Financial Entry Ledger' : activeTab === 'staff' ? 'Faculty & Staff Roster' : activeTab === 'leads' ? 'Leads & Retargeting Hub' : activeTab.replace('-', ' ')}
                  </h2>
                  <p className="text-[11px] text-slate-500">Official British Institute Enterprise ERP</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {activeTab !== 'dashboard' && (
                  <button onClick={() => setActiveTab('dashboard')} className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition">
                    <Icon name="pie-chart" className="w-3.5 h-3.5" /> Dashboard
                  </button>
                )}
                {activeTab === 'expenses' && (
                  <button onClick={() => setShowFinanceModal(true)} className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white border border-rose-200 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition">
                    <Icon name="trending-down" className="w-3.5 h-3.5" /> + Log Financial Entry
                  </button>
                )}
                {activeTab === 'staff' && (
                  <button onClick={() => { setEditingStaffId(null); setStaffName(''); setStaffEmail(''); setStaffPhone(''); setStaffSalary(''); setStaffQualification(''); setStaffSpecialization(''); setStaffEmergency(''); setStaffEmpId(''); setStaffPhotoPreview(''); setShowAddStaffModal(true); }} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition">
                    <Icon name="plus" className="w-3.5 h-3.5" /> + Add Faculty Member
                  </button>
                )}
                {(activeTab === 'dashboard' || activeTab === 'students') && (
                  <button onClick={() => setShowAddStudentModal(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition">
                    <Icon name="plus" className="w-3.5 h-3.5" /> + Student Admission
                  </button>
                )}
                <div onClick={() => setShowDirectorModal(true)} className="flex items-center gap-2 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50 border border-slate-200 transition">
                  <img src={directorProfile.photo} alt="Director" className="w-7 h-7 rounded-full object-cover border border-emerald-500" />
                  <span className="text-xs font-bold text-slate-800 hidden sm:inline">{directorProfile.name.split(' ')[0]}</span>
                </div>
              </div>
            </header>
          </>
        )}

        {/* CONTENT ROUTER */}
        <div className="p-4 md:p-8 pb-0">
          
          {/* DASHBOARD CONTEXT CARDS */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
              {[
                { id: 'students', label: 'ENROLLED STUDENTS', val: studentsRoster.length, change: '100% Verified', sub: 'Click to open Student Roster', tag: 'Live Photo Dossiers', color: 'border-l-4 border-l-emerald-500' },
                { id: 'staff', label: 'FACULTY & STAFF', val: `${staffRoster.filter(s => s.status === 'present').length} On Duty`, change: 'Live Roster', sub: 'Click to view Staff', tag: 'Rooms & Shifts', color: 'border-l-4 border-l-blue-500' },
                { id: 'lms', label: 'LMS ACADEMIC HUB', val: `${courseModules.length} Modules`, change: 'Online Academy', sub: 'Click to launch LMS Hub', tag: 'Pure Student Interface', color: 'border-l-4 border-l-amber-500' },
                { id: 'finance', label: 'NET PROFIT (PKR)', val: `PKR ${netOperatingProfit.toLocaleString()}`, change: `${netProfitMargin}% Net`, sub: 'Click to view SOPL/SOFP', tag: 'Full Audit Trail', color: 'border-l-4 border-l-purple-500' },
              ].map((kpi, i) => (
                <div key={i} onClick={() => setActiveTab(kpi.id as any)} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 ${kpi.color}`}>
                  <div className="flex justify-between items-start"><span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span><Icon name="arrow-up-right" className="w-3.5 h-3.5 text-slate-400" /></div>
                  <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">{kpi.change}</span></div>
                  <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400"><span className="font-semibold text-emerald-600">{kpi.sub}</span><span className="font-mono text-slate-500">{kpi.tag}</span></div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-800 text-sm">Course Revenue Breakdown</h3><span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Live Synced</span></div>
                  <div className="flex items-center justify-center py-4">
                    <div className="relative w-44 h-44">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10B981" strokeWidth="4" strokeDasharray="38 62" strokeDashoffset="0" />
                        <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3B82F6" strokeWidth="4" strokeDasharray="26 74" strokeDashoffset="-38" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center"><span className="text-[10px] text-slate-400 font-semibold uppercase">Total Rev</span><span className="text-sm font-black text-slate-900">PKR {(accrualRevenue / 1000).toFixed(0)}K</span><span className="text-[9px] text-emerald-600 font-bold">{netProfitMargin}% Margin</span></div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div><h3 className="font-bold text-slate-800 text-sm">Revenue vs Operating Expenditures</h3><p className="text-xs text-slate-400">Live dual-entry accounting synchronization</p></div>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-emerald-700 font-semibold"><span className="w-3 h-3 bg-emerald-500 rounded"></span> Invoices</span>
                      <span className="flex items-center gap-1 text-rose-600 font-semibold"><span className="w-3 h-3 bg-rose-400 rounded"></span> Expenses</span>
                    </div>
                  </div>
                  <div className="h-44 w-full flex items-end justify-between gap-3 px-4 pt-6 border-b border-slate-200">
                    {[{ month: 'Cycle Start', rev: accrualRevenue/1000 || 1, exp: totalExpenses/1000 || 1 }].map((b, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div className="w-full flex justify-center items-end gap-1.5 h-full">
                          <div className="w-5 bg-emerald-500 rounded-t transition" style={{ height: `80%` }}></div>
                          <div className="w-5 bg-rose-400 rounded-t transition" style={{ height: `40%` }}></div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium mt-1">{b.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 text-xs text-slate-500">
                    <span>Net Margin: <strong className="text-slate-800">{netProfitMargin}%</strong></span>
                    <button onClick={() => setActiveTab('finance')} className="text-emerald-600 font-bold hover:underline">View Live SOPL / SOFP Statements →</button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                <div className="flex items-center justify-between mb-3">
                  <div><h3 className="font-bold text-slate-800 text-sm">Recent Admissions Stream</h3><p className="text-xs text-slate-400">Click a student to view their verified dossier</p></div>
                  <button onClick={() => setActiveTab('students')} className="text-xs text-emerald-600 font-bold hover:underline">View Full Directory →</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                      <tr><th className="p-2.5">Candidate</th><th className="p-2.5">Target Course</th><th className="p-2.5">Instructor</th><th className="p-2.5 text-right">Direct Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {studentsRoster.length === 0 && <tr><td colSpan={4} className="p-4 text-center text-slate-400">No admissions logged yet. Use "+ Student Admission" above.</td></tr>}
                      {studentsRoster.slice(0, 4).map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => setInspectedStudent(row)}>
                          <td className="p-2.5 font-semibold text-slate-900 flex items-center gap-2"><img src={row.photo} alt={row.name} className="w-6 h-6 rounded-full object-cover border" /><div>{row.name}<p className="text-[10px] text-slate-400 font-normal">{row.phone}</p></div></td>
                          <td className="p-2.5 text-slate-600"><span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">{row.courses[0]}</span></td>
                          <td className="p-2.5 font-semibold text-slate-800">{row.trainer}</td>
                          <td className="p-2.5 text-right"><button onClick={(e) => { e.stopPropagation(); openWhatsApp(row.phone, row.name, row.courses); }} className="bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-2.5 py-1 rounded border border-emerald-300 transition text-[11px] font-semibold inline-flex items-center gap-1"><Icon name="send" className="w-3 h-3" /> WhatsApp</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'TOTAL STUDENTS', val: studentsRoster.length, change: 'Active Roster', color: 'border-l-4 border-l-blue-500' },
                  { label: 'FULLY PAID', val: studentsRoster.filter(s=>s.feeStatus.includes('Paid')).length, change: 'Cleared', color: 'border-l-4 border-l-emerald-500' },
                  { label: 'PENDING DUES', val: studentsRoster.filter(s=>s.feeStatus.includes('Pending')).length, change: 'Follow-up needed', color: 'border-l-4 border-l-rose-500' },
                  { label: 'CAMPUS CAPACITY', val: '65%', change: 'Slots Available', color: 'border-l-4 border-l-amber-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <div><h3 className="font-extrabold text-slate-900 text-base">Students Academic Dossier Directory</h3><p className="text-xs text-slate-400">Click any student row to view full admission dossier and CNIC details</p></div>
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64"><input type="text" placeholder="Search name, phone, CNIC, roll #..." value={studentSearchQuery} onChange={(e) => setStudentSearchQuery(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-hidden" /><div className="absolute left-2.5 top-2.5 text-slate-400"><Icon name="search" className="w-3.5 h-3.5" /></div></div>
                    <select value={selectedCourseFilter} onChange={(e) => setSelectedCourseFilter(e.target.value)} className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium focus:ring-2 focus:ring-emerald-500"><option value="All">All Courses</option><option value="IELTS">IELTS Academic</option><option value="Spoken">Spoken English</option><option value="PTE">PTE Intensive</option><option value="Business">Business English</option></select>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                      <tr><th className="p-3">Roll #</th><th className="p-3">Student Photo & Name</th><th className="p-3">Enrolled Program</th><th className="p-3">Shift & Timings</th><th className="p-3">Tuition Billed</th><th className="p-3">Fee Status</th><th className="p-3 text-right">Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredStudents.length === 0 && <tr><td colSpan={7} className="p-4 text-center text-slate-400">No students found.</td></tr>}
                      {filteredStudents.map((stu) => (
                        <tr key={stu.id} onClick={() => setInspectedStudent(stu)} className="hover:bg-slate-50 cursor-pointer transition">
                          <td className="p-3 font-mono font-bold text-slate-500">{stu.id}</td>
                          <td className="p-3 font-bold text-slate-900 flex items-center gap-2.5"><img src={stu.photo} alt={stu.name} className="w-9 h-9 rounded-full object-cover border-2 border-emerald-500 shrink-0 shadow-xs" /><div>{stu.name}<p className="text-[10px] text-slate-400 font-mono font-normal">{stu.phone} • {stu.cnic}</p></div></td>
                          <td className="p-3"><div className="flex flex-wrap gap-1">{stu.courses.map((c: string, i: number) => (<span key={i} className="text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-semibold">{c}</span>))}</div></td>
                          <td className="p-3"><span className="font-bold text-slate-800 block">{stu.shift}</span><span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-0.5"><Icon name="clock" className="w-2.5 h-2.5 text-emerald-600" /> {stu.timing}</span></td>
                          <td className="p-3 font-semibold text-slate-800">PKR {stu.totalFee.toLocaleString()}</td>
                          <td className="p-3"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${stu.feeStatus.includes('Paid') ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>{stu.feeStatus}</span></td>
                          <td className="p-3 text-right">
                            <div className="flex justify-end gap-2">
                              {stu.feeStatus.includes('Pending') && (
                                <button onClick={(e) => { e.stopPropagation(); setSelectedChallanStudent(stu); setShowChallanModal(true); }} className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white px-2.5 py-1 rounded border border-rose-200 transition text-[11px] font-bold">Print Challan</button>
                              )}
                              <span className="text-[11px] font-bold text-blue-600 hover:underline mt-1 block">View Dossier →</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'timetable' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'ACTIVE ROOMS', val: '4', change: 'Operational', color: 'border-l-4 border-l-blue-500' },
                  { label: 'TEACHERS SCHEDULED', val: '3', change: 'This Week', color: 'border-l-4 border-l-emerald-500' },
                  { label: 'ACTIVE MODULES', val: '4', change: 'Ongoing', color: 'border-l-4 border-l-purple-500' },
                  { label: 'AVAILABLE SLOTS', val: '5', change: 'Free / Maintenance', color: 'border-l-4 border-l-amber-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                  <div><h3 className="font-extrabold text-slate-900 text-base">Global Timetable & Room Matrix</h3><p className="text-xs text-slate-400">Master schedule to prevent classroom and faculty double-booking</p></div>
                  <div className="flex gap-2 text-xs">
                    <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> IELTS</span>
                    <span className="flex items-center gap-1 font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Spoken</span>
                    <span className="flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-amber-500"></span> PTE</span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs border-collapse">
                    <thead className="bg-slate-50 text-slate-600 font-bold">
                      <tr><th className="p-3 border border-slate-200 w-32">Time Slot</th><th className="p-3 border border-slate-200">Lab A (Audio)</th><th className="p-3 border border-slate-200">Room 2 (Fluency)</th><th className="p-3 border border-slate-200">Room 3 (General)</th><th className="p-3 border border-slate-200">Room 4 (PTE Lab)</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">10:00 AM - 11:30 AM</td><td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Academic<br/><span className="font-normal text-emerald-700">Sir Saif</span></td><td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td><td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td><td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td></tr>
                      <tr><td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">03:00 PM - 04:30 PM</td><td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td><td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td><td className="p-3 border border-slate-200 bg-purple-50 text-purple-900 font-bold text-[11px]">Business English<br/><span className="font-normal text-purple-700">Sir Saif</span></td><td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Intensive<br/><span className="font-normal text-amber-700">Sir Bilal</span></td></tr>
                      <tr><td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">06:00 PM - 08:00 PM</td><td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Masterclass<br/><span className="font-normal text-emerald-700">Sir Saif</span></td><td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td><td className="p-3 border border-slate-200 text-slate-400 italic">Maintenance</td><td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Practice<br/><span className="font-normal text-amber-700">Sir Bilal</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'finance' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'TOTAL ASSETS', val: `PKR ${totalAssets.toLocaleString()}`, change: 'Current + Non-Current', color: 'border-l-4 border-l-blue-500' },
                  { label: 'TOTAL LIABILITIES', val: `PKR ${totalLiabilitiesAdded.toLocaleString()}`, change: 'Debt & Payables', color: 'border-l-4 border-l-rose-500' },
                  { label: 'CAPITAL / EQUITY', val: `PKR ${totalEquity.toLocaleString()}`, change: 'Net Retained Earnings', color: 'border-l-4 border-l-purple-500' },
                  { label: 'LIQUID CASH', val: `PKR ${liquidCash.toLocaleString()}`, change: 'Banks & Wallets', color: 'border-l-4 border-l-emerald-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs"><span className="text-xs text-slate-400 font-semibold uppercase">Total Operating Revenue</span><h3 className="text-2xl font-black text-slate-900 mt-1">PKR {accrualRevenue.toLocaleString()}</h3><p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Accrual tuition billed to students</p></div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs"><span className="text-xs text-slate-400 font-semibold uppercase">Total Operating Outflows</span><h3 className="text-2xl font-black text-slate-900 mt-1">PKR {totalExpenses.toLocaleString()}</h3><p className="text-[11px] text-rose-600 font-semibold mt-0.5">Payroll, Marketing & Campus Rent</p></div>
                  <div className="bg-white p-4 rounded-xl border border-emerald-300 shadow-xs bg-emerald-50/30"><span className="text-xs text-emerald-700 font-semibold uppercase">Net Operating Profit</span><h3 className="text-2xl font-black text-emerald-700 mt-1">PKR {netOperatingProfit.toLocaleString()}</h3><p className="text-[11px] text-emerald-800 font-semibold mt-0.5">Net Profit Margin: {netProfitMargin}%</p></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 text-xs space-y-2">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-3">
                      <div><h3 className="font-extrabold text-sm text-slate-900">Statement of Profit or Loss (SOPL)</h3><p className="text-[11px] text-slate-400">Click any row below to inspect transaction logs</p></div>
                      <span className="text-[10px] bg-blue-50 text-blue-700 font-mono font-bold px-2 py-0.5 rounded">Live Synced</span>
                    </div>
                    <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-1">Income Streams</p>
                    {soplIncomeStreams.length === 0 && <p className="text-slate-400 italic py-1">No tuition revenue logged yet.</p>}
                    {soplIncomeStreams.map((item, idx) => (
                      <div key={idx} onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['SYS-ACC-01'] })} className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100">
                        <span className="text-slate-700 font-medium hover:text-emerald-700">{item.title}</span><span className="font-bold text-slate-900">PKR {item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-3">Operating Expenditures</p>
                    {soplExpenseStreams.length === 0 && <p className="text-slate-400 italic py-1">No expenses logged yet.</p>}
                    {soplExpenseStreams.map((item, idx) => (
                      <div key={idx} onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['SYS-EXP-01'] })} className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100">
                        <span className="text-slate-700 font-medium hover:text-rose-700">{item.title}</span><span className="font-bold text-rose-600">- PKR {item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-2 font-black text-slate-900 bg-emerald-50 text-emerald-900 px-3 rounded-lg mt-3"><span>Net Operating Profit</span><span>PKR {netOperatingProfit.toLocaleString()}</span></div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 text-xs space-y-2">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-3">
                      <div><h3 className="font-extrabold text-sm text-slate-900">Statement of Financial Position (SOFP)</h3><p className="text-[11px] text-slate-400">Assets = Liabilities + Equity (Double-Entry Aligned)</p></div>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">Balanced</span>
                    </div>
                    <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-1">Assets (Current & Fixed)</p>
                    {sofpAssets.map((item, idx) => (
                      <div key={idx} onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['SYS-AST-01'] })} className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100">
                        <span className="text-slate-700 font-medium hover:text-emerald-700">{item.title}</span><span className="font-bold text-slate-900">PKR {item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-3">Liabilities & Equity</p>
                    {sofpLiabilities.map((item, idx) => (
                      <div key={idx} onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['SYS-LIA-01'] })} className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100">
                        <span className="text-slate-700 font-medium hover:text-rose-700">{item.title}</span><span className="font-bold text-rose-600">PKR {item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                    {sofpLiabilities.length === 0 && <div className="flex justify-between py-1.5 px-2 border-b border-slate-100"><span className="text-slate-700 font-medium">Total Liabilities (Loans/Payables)</span><span className="font-bold text-slate-900">PKR 0</span></div>}
                    <div className="flex justify-between py-1.5 px-2 border-b border-slate-100"><span className="text-slate-700 font-medium">Retained Earnings (Net Profit)</span><span className="font-bold text-emerald-600">PKR {totalEquity.toLocaleString()}</span></div>
                    <div className="flex justify-between py-2 font-black text-slate-900 bg-slate-100 px-3 rounded-lg mt-3"><span>Total Institute Equity & Liabilities</span><span>PKR {(totalLiabilitiesAdded + totalEquity).toLocaleString()}</span></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'expenses' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'TOTAL EXPENSES', val: `PKR ${(totalExpenses / 1000).toFixed(0)}K`, change: 'Current Cycle', color: 'border-l-4 border-l-rose-500' },
                  { label: 'MARKETING SPEND', val: `PKR ${(expensesList.filter(e=>e.category==='Marketing').reduce((s,e)=>s+e.amount,0) / 1000).toFixed(0)}K`, change: 'Ads & Campaigns', color: 'border-l-4 border-l-blue-500' },
                  { label: 'PAYROLL SPEND', val: `PKR ${(expensesList.filter(e=>e.category==='Payroll').reduce((s,e)=>s+e.amount,0) / 1000).toFixed(0)}K`, change: 'Honoraria', color: 'border-l-4 border-l-purple-500' },
                  { label: 'UTILITIES', val: `PKR ${(expensesList.filter(e=>e.category==='Utilities').reduce((s,e)=>s+e.amount,0) / 1000).toFixed(0)}K`, change: 'Internet & Power', color: 'border-l-4 border-l-amber-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div><h3 className="font-extrabold text-slate-900 text-base">Financial Transaction Ledger</h3><p className="text-xs text-slate-400">View and log Expenses, Assets, or Liabilities. Click any row to inspect.</p></div>
                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                      {(['expenses', 'assets', 'liabilities'] as const).map((t) => (
                        <button key={t} onClick={() => setLedgerTabFilter(t)} className={`px-3 py-1 rounded-md capitalize font-bold transition ${ledgerTabFilter === t ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'}`}>{t}</button>
                      ))}
                    </div>
                    <button onClick={() => setShowFinanceModal(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1 shadow-xs transition">
                      <Icon name="plus" className="w-3.5 h-3.5" /> + Log Financial Entry
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                      <tr><th className="p-3">Ref ID</th><th className="p-3">Title & Details</th><th className="p-3">Category</th><th className="p-3">Logged By</th><th className="p-3">Date</th><th className="p-3 text-right">Amount (PKR)</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {activeLedgerData.length === 0 && <tr><td colSpan={6} className="p-4 text-center text-slate-400">No records found. Use "+ Log Financial Entry" above.</td></tr>}
                      {activeLedgerData.map((exp) => (
                        <tr key={exp.id} onClick={() => setInspectedExpense(exp)} className="hover:bg-slate-50 cursor-pointer transition">
                          <td className="p-3 font-mono font-bold text-slate-500">{exp.id}</td>
                          <td className="p-3 font-bold text-slate-900 flex items-center gap-2">{exp.receiptPhoto && (<img src={exp.receiptPhoto} alt="Receipt" className="w-6 h-6 rounded object-cover border border-slate-300" />)}<div>{exp.title}<p className="text-[10px] text-slate-400 font-mono font-normal">Method: {exp.method}</p></div></td>
                          <td className="p-3"><span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${ledgerTabFilter === 'expenses' ? 'bg-rose-100 text-rose-800' : ledgerTabFilter === 'assets' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-purple-800'}`}>{exp.category || ledgerTabFilter}</span></td>
                          <td className="p-3 text-slate-600 font-medium">{exp.loggedBy || directorProfile.name}</td>
                          <td className="p-3 font-mono text-slate-500">{exp.date}</td>
                          <td className={`p-3 text-right font-black ${ledgerTabFilter === 'expenses' ? 'text-rose-600' : 'text-slate-800'}`}>{ledgerTabFilter === 'expenses' ? '-' : ''} PKR {exp.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ======================================================== */}
          {/* MODERN & PROFESSIONAL LEADS & RETARGETING HUB            */}
          {/* ======================================================== */}
          {activeTab === 'leads' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'TOTAL WALK-INS', val: retargetLeads.length + 12, change: 'This Month', color: 'border-l-4 border-l-blue-500' },
                  { label: 'FOLLOW-UPS DUE', val: retargetLeads.filter(l=>l.stage==='Follow-Up Due').length, change: 'Action Required', color: 'border-l-4 border-l-amber-500' },
                  { label: 'TRIAL DONE', val: retargetLeads.filter(l=>l.stage==='Trial Done').length, change: 'Pending Conversion', color: 'border-l-4 border-l-purple-500' },
                  { label: 'CONVERTED / ENROLLED', val: '18', change: 'This Cycle', color: 'border-l-4 border-l-emerald-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Admissions Lead Pipeline & Retargeting Hub</h3>
                    <p className="text-xs text-slate-400">Modern conversion desk for prospective walk-ins and inquiries</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-56">
                      <input type="text" placeholder="Search lead name, phone..." value={leadSearchQuery} onChange={(e) => setLeadSearchQuery(e.target.value)} className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border rounded-lg" />
                      <div className="absolute left-2.5 top-2.5 text-slate-400"><Icon name="search" className="w-3.5 h-3.5" /></div>
                    </div>
                    <select value={leadStatusFilter} onChange={(e) => setLeadStatusFilter(e.target.value)} className="bg-slate-50 border rounded-lg px-2.5 py-1.5 text-xs font-medium">
                      <option value="All">All Stages</option>
                      <option value="Follow-Up Due">Follow-Up Due</option>
                      <option value="Trial Done">Trial Done</option>
                      <option value="Dormant Walk-In">Dormant Walk-In</option>
                    </select>
                    <button onClick={() => alert('Synced dropped candidate numbers to Meta Custom Audience!')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                      Sync Meta Ads
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                      <tr><th className="p-3">Lead Details</th><th className="p-3">Inquired Course</th><th className="p-3">Pipeline Stage</th><th className="p-3">Lead Rating</th><th className="p-3">Assigned Counselor</th><th className="p-3 text-right">Instant Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredLeads.length === 0 && <tr><td colSpan={6} className="p-6 text-center text-slate-400">No leads found matching your filter criteria.</td></tr>}
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50 transition">
                          <td className="p-3 font-bold text-slate-900">{lead.name}<p className="text-[10px] text-slate-400 font-normal">{lead.phone} • {lead.email}</p></td>
                          <td className="p-3 font-semibold text-slate-800">{lead.interest}</td>
                          <td className="p-3">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${lead.stage === 'Follow-Up Due' ? 'bg-amber-100 text-amber-800' : lead.stage === 'Trial Done' ? 'bg-purple-100 text-purple-800' : 'bg-rose-100 text-rose-800'}`}>
                              {lead.stage}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-bold text-slate-600">{lead.rating}</td>
                          <td className="p-3 text-slate-700 font-medium">{lead.assignedTo}</td>
                          <td className="p-3 text-right space-x-2">
                            <button onClick={() => openWhatsApp(lead.phone, lead.name, [lead.interest])} className="bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-2.5 py-1 rounded border border-emerald-300 font-bold transition text-[11px] inline-flex items-center gap-1">
                              <Icon name="send" className="w-3 h-3" /> WhatsApp
                            </button>
                            <button onClick={() => { setAdmFullName(lead.name); setAdmPhone(lead.phone); setShowAddStudentModal(true); }} className="bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white px-2.5 py-1 rounded border border-indigo-200 font-bold transition text-[11px]">
                              Convert
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ======================================================== */}
          {/* FACULTY & STAFF ROSTER WITH EDIT/DELETE & QUALIFICATIONS */}
          {/* ======================================================== */}
          {activeTab === 'staff' && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { label: 'TOTAL STAFF', val: staffRoster.length, change: 'Registered', color: 'border-l-4 border-l-blue-500' },
                  { label: 'ON DUTY', val: staffRoster.filter(s=>s.status==='present').length, change: 'Checked In', color: 'border-l-4 border-l-emerald-500' },
                  { label: 'OFF DUTY / LEAVE', val: staffRoster.filter(s=>s.status!=='present').length, change: 'Absent', color: 'border-l-4 border-l-rose-500' },
                  { label: 'FREE IN CAMPUS', val: '0', change: 'Available', color: 'border-l-4 border-l-amber-500' },
                ].map((kpi, i) => (
                  <div key={i} className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs ${kpi.color}`}>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                    <div className="mt-2 flex items-baseline justify-between"><h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3><span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">{kpi.change}</span></div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Faculty & Administration Institutional Roster</h3>
                    <p className="text-xs text-slate-400">Complete staff dossiers with qualifications, emergency contacts, and payroll</p>
                  </div>
                  <button onClick={() => { setEditingStaffId(null); setStaffName(''); setStaffEmail(''); setStaffPhone(''); setStaffSalary(''); setStaffQualification(''); setStaffSpecialization(''); setStaffEmergency(''); setStaffEmpId(''); setStaffPhotoPreview(''); setShowAddStaffModal(true); }} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-xs transition">
                    <Icon name="plus" className="w-3.5 h-3.5" /> + Add Faculty Member
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {staffRoster.length === 0 && <p className="text-slate-400 p-4">No staff members enrolled.</p>}
                  {staffRoster.map((staff) => (
                    <div key={staff.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3 relative group">
                      <div className="absolute top-4 right-4 flex gap-1.5 opacity-80 group-hover:opacity-100 transition">
                        <button onClick={() => handleEditStaffClick(staff)} className="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg transition" title="Edit Staff Record">
                          <Icon name="edit" className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleDeleteStaff(staff.id)} className="p-1.5 bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 rounded-lg transition" title="Delete Staff Record">
                          <Icon name="trash" className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <img src={staff.photo} alt={staff.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-sm shrink-0" />
                        <div>
                          <span className="text-[10px] font-mono font-bold text-slate-400 block">{staff.empId}</span>
                          <h4 className="font-extrabold text-slate-900 text-sm leading-tight">{staff.name}</h4>
                          <p className="text-[11px] text-indigo-600 font-semibold">{staff.role}</p>
                          <span className={`text-[9px] font-bold px-2 py-0.2 rounded-full ${staff.status === 'present' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {staff.status === 'present' ? 'On Duty' : 'Off Duty'}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs space-y-1.5 text-slate-600 pt-3 border-t border-slate-100">
                        <p><strong className="text-slate-700">Qualification:</strong> {staff.qualification}</p>
                        <p><strong className="text-slate-700">Specialization:</strong> {staff.specialization}</p>
                        <p><strong className="text-slate-700">Shift & Room:</strong> {staff.shift} ({staff.classroom})</p>
                        <p><strong className="text-slate-700">Emergency Contact:</strong> {staff.emergencyContact}</p>
                        <p><strong className="text-slate-700">Monthly Honorarium:</strong> PKR {staff.salary.toLocaleString()}</p>
                        <p className="font-mono text-[10px] text-slate-400 pt-1 border-t">{staff.email} • {staff.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div><h3 className="font-extrabold text-slate-900 text-base">Academy Administration & Faculty Roster Settings</h3><p className="text-xs text-slate-400">Add new teachers, instructors, counselors, and configure campus parameters</p></div>
                <button onClick={() => { setEditingStaffId(null); setStaffName(''); setStaffEmail(''); setStaffPhone(''); setStaffSalary(''); setStaffQualification(''); setStaffSpecialization(''); setStaffEmergency(''); setStaffEmpId(''); setStaffPhotoPreview(''); setShowAddStaffModal(true); }} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition">
                  <Icon name="plus" className="w-3.5 h-3.5" /> + Add Faculty / Staff Member
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffRoster.map((staff) => (
                  <div key={staff.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={staff.photo} alt={staff.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shrink-0" />
                        <div><h4 className="font-bold text-slate-900 text-sm">{staff.name}</h4><p className="text-[11px] text-slate-500">{staff.role}</p></div>
                      </div>
                      <button onClick={() => handleEditStaffClick(staff)} className="text-xs text-blue-600 font-bold hover:underline">Edit</button>
                    </div>
                    <div className="text-xs space-y-1 text-slate-600 pt-2 border-t border-slate-200">
                      <p><strong className="text-slate-800">Shift:</strong> {staff.shift}</p><p><strong className="text-slate-800">Location:</strong> {staff.classroom}</p><p><strong className="text-slate-800">Salary:</strong> PKR {staff.salary.toLocaleString()}/mo</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* LMS FULL VIEW */}
        {activeTab === 'lms' && (
          <div className="flex-1 flex flex-col bg-[#F8FAFC]">
            <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-xs sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-600 p-1"><Icon name="menu" className="w-6 h-6" /></button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">LMS</div>
                  <div><h2 className="font-black text-slate-900 text-sm tracking-wide">LEARNING MANAGEMENT SYSTEM</h2><p className="text-[10px] text-slate-400">British Institute Student & Faculty Academic Desk</p></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 text-xs font-bold">
                  <button onClick={() => setLmsRole('student')} className={`px-3 py-1.5 rounded-lg transition ${lmsRole === 'student' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>🎓 Student Portal</button>
                  <button onClick={() => setLmsRole('teacher')} className={`px-3 py-1.5 rounded-lg transition ${lmsRole === 'teacher' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}>👨‍🏫 Faculty / Teacher Portal</button>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                  <img src={lmsRole === 'student' && studentsRoster.length > 0 ? studentsRoster[0].photo : staffRoster.length > 0 ? staffRoster[0].photo : directorProfile.photo} alt="Active User" className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500" />
                  <div className="hidden sm:block text-left text-xs">
                    <p className="font-bold text-slate-800 leading-tight">{lmsRole === 'student' ? (studentsRoster[0]?.name || 'Student') : (staffRoster[0]?.name || 'Sir Saif')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A1128] text-slate-300 px-6 py-2 flex items-center justify-between text-xs font-semibold overflow-x-auto border-b border-slate-800">
              <div className="flex items-center gap-2">
                {[{ id: 'dashboard', label: 'Dashboard' }, { id: 'program', label: 'My Program & Outline' }, { id: 'assignments', label: 'Assignments & Quizzes' }, { id: 'lectures', label: 'Lecture Notes & Videos' }, { id: 'results', label: 'Assessment Results' }].map(tab => (
                  <button key={tab.id} onClick={() => setActiveLmsSubTab(tab.id as any)} className={`px-3.5 py-1.5 rounded-lg transition whitespace-nowrap ${activeLmsSubTab === tab.id ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}>{tab.label}</button>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 hidden lg:block font-mono">Academic Session: <strong className="text-amber-400">Fall 2026</strong></div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {activeLmsSubTab === 'dashboard' && lmsRole === 'student' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div onClick={() => setShowAnnouncementsModal(true)} className="bg-[#5B21B6] hover:bg-[#4C1D95] cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="bell" className="w-5 h-5 text-amber-300" /><span className="text-3xl font-black">11</span></div><h4 className="font-bold text-sm">Announcements</h4><p className="text-[11px] text-purple-200">Mock speaking slots confirmed</p></div><span className="text-xs bg-purple-700/60 px-3 py-1 rounded-lg">View Board →</span></div>
                    <div onClick={() => setActiveLmsSubTab('program')} className="bg-[#1E293B] hover:bg-slate-800 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="graduation-cap" className="w-5 h-5 text-emerald-400" /><h4 className="font-extrabold text-lg">Program</h4></div><p className="text-xs text-slate-300">Course Outline & Syllabus</p><p className="text-[11px] text-emerald-400 font-semibold">IELTS Academic 7.5+ Masterclass</p></div><span className="text-xs bg-slate-800 px-3 py-1 rounded-lg">Outline →</span></div>
                    <div onClick={() => setActiveLmsSubTab('lectures')} className="bg-[#0F172A] hover:bg-slate-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="book" className="w-5 h-5 text-blue-400" /><h4 className="font-extrabold text-lg">Library</h4></div><p className="text-xs text-slate-300">Vocabulary & Audio Drills</p><p className="text-[11px] text-blue-300">18 PDF Handouts Ready</p></div><span className="text-xs bg-slate-800 px-3 py-1 rounded-lg">View List →</span></div>
                    <div onClick={() => setShowAttendanceModal(true)} className="bg-[#1E3A8A] hover:bg-blue-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="clock" className="w-5 h-5 text-cyan-300" /><span className="text-3xl font-black">94%</span></div><h4 className="font-bold text-sm">Attendance Ratio</h4><p className="text-[11px] text-blue-200">19 of 20 Sessions Attended</p></div><span className="text-xs bg-blue-900/60 px-3 py-1 rounded-lg text-emerald-300">Log Details →</span></div>
                    <div onClick={() => setShowProgressModal(true)} className="bg-[#15803D] hover:bg-green-800 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="trending-up" className="w-5 h-5 text-amber-300" /><h4 className="font-extrabold text-lg">Progress</h4></div><p className="text-xs text-green-100">Course Completion Tracker</p><p className="text-[11px] text-amber-200 font-bold">Current CEFR: Band 7.5 Est.</p></div><span className="text-xs bg-green-900/60 px-3 py-1 rounded-lg">View Matrix →</span></div>
                    <div onClick={() => setShowReceiptModal(true)} className="bg-[#7F1D1D] hover:bg-rose-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"><div className="space-y-1"><div className="flex items-center gap-2"><Icon name="wallet" className="w-5 h-5 text-emerald-300" /><h4 className="font-extrabold text-lg">Tuition Status</h4></div><p className="text-xs text-rose-200">British Institute Fee Ledger</p><p className="text-[11px] text-emerald-300 font-bold">100% Cleared (Voucher Paid)</p></div><span className="text-xs bg-rose-950/60 px-3 py-1 rounded-lg">Receipt →</span></div>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-[#0A1128] text-white px-6 py-3.5 flex justify-between items-center text-xs"><span className="font-extrabold uppercase tracking-wider">Weekly Lecture Planner</span><span className="text-amber-400 font-mono">Week-4 (24-10-2026 to 31-10-2026)</span></div>
                    <div className="p-6 divide-y divide-slate-100 text-xs">
                      {[{ day: 'Monday (06:00 PM)', subject: 'IELTS Academic Writing Task 2 - Essay Structure', instructor: 'Sir Saif', room: 'Lab A' }, { day: 'Wednesday (06:00 PM)', subject: 'Spoken English Accent Neutralization & Phonetics', instructor: 'Ms. Rabia Zafar', room: 'Room 2' }, { day: 'Friday (06:00 PM)', subject: 'Mock Speaking Diagnostic 1-on-1 Interviews', instructor: 'Sir Saif', room: 'Audio Booth 1' }].map((slot, i) => (
                        <div key={i} className="py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div><span className="font-extrabold text-slate-900 block">{slot.day}</span><span className="text-slate-600 font-medium">{slot.subject}</span></div>
                          <div className="flex items-center gap-3"><span className="text-[11px] text-slate-500 font-medium">Instructor: <strong>{slot.instructor}</strong> ({slot.room})</span><span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-md">Confirmed</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeLmsSubTab === 'program' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
                  <div className="border-b border-slate-200 pb-4"><span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2.5 py-0.5 rounded-full uppercase">Official Syllabus</span><h3 className="text-xl font-extrabold text-slate-900 mt-1">IELTS Academic 7.5+ Masterclass — Course Outline</h3><p className="text-xs text-slate-400">Head Instructor: Sir Saif | Duration: 8 Weeks (60 Total Contact Hours)</p></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[{ week: 'Week 1-2', title: 'Diagnostic Band Assessment & Listening Mastery', topics: 'Section 1 to 4 question variations, map labeling, distracted numbers, and accent decoding.' }, { week: 'Week 3-4', title: 'Academic Reading - Skimming & Scanning', topics: 'True/False/Not Given traps, heading matches, paragraph summaries, and time management strategies.' }, { week: 'Week 5-6', title: 'Writing Task 1 & Task 2 Argumentative Essays', topics: 'Complex grammatical structures, lexical resource, cohesive devices, and band 8.0 introduction hooks.' }, { week: 'Week 7-8', title: '1-on-1 Speaking Mock Tests & Final Diagnostics', topics: 'Part 1, 2, and 3 fluency drills, idioms usage, cue card speech flow, and examiner simulation tests.' }].map((w, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5"><span className="font-mono font-bold text-indigo-600 text-[11px]">{w.week}</span><h4 className="font-extrabold text-slate-900 text-sm">{w.title}</h4><p className="text-slate-600 leading-relaxed">{w.topics}</p></div>
                    ))}
                  </div>
                </div>
              )}

              {activeLmsSubTab === 'assignments' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
                    <div><h3 className="font-extrabold text-slate-900 text-base">Coursework Submissions & Evaluation Vault</h3><p className="text-xs text-slate-400">Upload your coursework in Word (.docx), Excel (.xlsx), PDF (.pdf), or PowerPoint (.pptx)</p></div>
                    <button onClick={() => setShowAssignmentModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition"><Icon name="upload" className="w-4 h-4" /> + Upload Assignment File</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                        <tr><th className="p-3">Submission ID</th><th className="p-3">Assignment File</th><th className="p-3">Format</th><th className="p-3">Faculty Evaluator</th><th className="p-3">Date</th><th className="p-3 text-right">Grading Status</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {studentAssignments.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-50 transition">
                            <td className="p-3 font-mono font-bold text-slate-500">{sub.id}</td>
                            <td className="p-3 font-bold text-slate-900 flex items-center gap-2"><Icon name="file-text" className="w-4 h-4 text-indigo-600" />{sub.file}</td>
                            <td className="p-3"><span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">{sub.format}</span></td>
                            <td className="p-3 font-semibold text-slate-800">{sub.teacher}</td><td className="p-3 font-mono text-slate-500">{sub.date}</td>
                            <td className="p-3 text-right"><span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${sub.status.includes('Graded') ? 'bg-emerald-100 text-emerald-800' : sub.status.includes('Pending') ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>{sub.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeLmsSubTab === 'lectures' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-6 rounded-2xl flex justify-between items-center shadow-md">
                    <div><h3 className="text-xl font-black">Video Masterclasses & Downloadable Handouts</h3><p className="text-xs text-slate-300">Access high-definition recordings and printable worksheets</p></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {courseModules.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between">
                        <div className="p-5 space-y-3">
                          <div className="flex justify-between items-center"><span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{item.type}</span><Icon name="play" className="w-4 h-4 text-emerald-600" /></div>
                          <h4 className="font-bold text-sm text-slate-900 leading-snug">{item.title}</h4><p className="text-xs text-slate-500">Instructor: <strong className="text-slate-700">{item.faculty}</strong></p>
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500">{item.duration}</span>
                          <button onClick={() => alert(`Accessing ${item.title} from Cloudflare R2 vault!`)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1 rounded text-[11px] flex items-center gap-1 shadow-xs transition"><Icon name="download" className="w-3 h-3" /> Download PDF</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeLmsSubTab === 'results' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8 max-w-2xl mx-auto space-y-6">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                    <div><span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase">Verified Report Card</span><h3 className="text-xl font-extrabold text-slate-900 mt-1">{studentResultReport.examTitle}</h3><p className="text-xs text-slate-400">Candidate: {studentResultReport.candidate} | Date: {studentResultReport.date}</p></div>
                    <div className="text-center bg-[#0A1128] text-white p-3 rounded-xl min-w-[75px]"><span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">Overall</span><span className="text-2xl font-black">{studentResultReport.overallBand}</span></div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-center text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-slate-400 font-semibold">Listening</p><p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.listening}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-slate-400 font-semibold">Reading</p><p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.reading}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-slate-400 font-semibold">Writing</p><p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.writing}</p></div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200"><p className="text-slate-400 font-semibold">Speaking</p><p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.speaking}</p></div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5 border border-slate-200">
                    <span className="font-extrabold text-slate-900 block">Evaluator Assessment Notes:</span><p className="text-slate-600 leading-relaxed italic">{studentResultReport.remarks}</p><p className="text-right text-[10px] text-slate-400 font-bold pt-1">— Verified by {studentResultReport.evaluator}</p>
                  </div>
                  <button onClick={() => window.print()} className="w-full bg-[#0A1128] hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm">Print / Download Verified Scorecard (PDF)</button>
                </div>
              )}

              {/* TEACHER ROLE VIEW */}
              {lmsRole === 'teacher' && (
                <div className="space-y-6">
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1"><span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">Faculty Curriculum Management</span><h3 className="text-xl font-black">Instructor Portal — Sir Saif (Head IELTS)</h3><p className="text-xs text-slate-300">Publish video masterclasses, distribute handouts, and evaluate student work.</p></div>
                    <button onClick={() => setShowTeacherUploadModal(true)} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition shrink-0"><Icon name="upload" className="w-4 h-4" /> + Publish Lecture / Notes</button>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                    <h4 className="font-extrabold text-slate-900 text-sm">Published Lecture Materials</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {courseModules.map((mod) => (
                        <div key={mod.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                          <div className="flex justify-between items-start"><span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">{mod.type}</span><span className="text-[10px] font-mono font-bold text-slate-500">{mod.duration}</span></div>
                          <h5 className="font-bold text-xs text-slate-900 leading-snug">{mod.title}</h5><p className="text-[11px] text-slate-500">Instructor: <strong>{mod.faculty}</strong></p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODALS AND DRAWERS                                       */}
        {/* ======================================================== */}
        
        {showChallanModal && selectedChallanStudent && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2"><Icon name="printer" className="w-5 h-5 text-emerald-600" /><h3 className="font-extrabold text-slate-900 text-sm">Issue Fee Challan</h3></div>
                <button onClick={() => { setShowChallanModal(false); setSelectedChallanStudent(null); }}><Icon name="x" className="w-4 h-4 text-slate-400" /></button>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-slate-700">
                <h4 className="font-black text-slate-900 text-center text-sm border-b pb-2 mb-2">{institute.name}</h4>
                <div className="flex justify-between"><span>Candidate:</span> <span className="font-bold text-slate-900">{selectedChallanStudent.name}</span></div>
                <div className="flex justify-between"><span>Roll Number:</span> <span className="font-mono font-bold text-slate-900">{selectedChallanStudent.id}</span></div>
                <div className="flex justify-between"><span>Program:</span> <span className="font-bold text-slate-900">{selectedChallanStudent.courses[0]}</span></div>
                <div className="flex justify-between pt-2 border-t mt-2"><span>Pending Fee Due:</span> <span className="font-black text-rose-600 text-sm">PKR {(selectedChallanStudent.totalFee - selectedChallanStudent.feePaid).toLocaleString()}</span></div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button onClick={() => { setShowChallanModal(false); setSelectedChallanStudent(null); }} className="px-4 py-2 border rounded-lg">Cancel</button>
                <button onClick={() => { alert('Fee Challan Generated & Sent to Printer!'); setShowChallanModal(false); }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm"><Icon name="printer" className="w-3 h-3" /> Print Voucher</button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: LOG FINANCIAL ENTRY */}
        {showFinanceModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-extrabold text-slate-900 text-base">Log Financial Transaction</h3>
                <button onClick={() => setShowFinanceModal(false)}><Icon name="x" className="w-5 h-5 text-slate-400" /></button>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
                {(['Expense', 'Asset', 'Liability'] as const).map(type => (
                  <button 
                    key={type} 
                    type="button"
                    onClick={() => setFinanceType(type)}
                    className={`flex-1 py-1.5 rounded-lg font-bold transition ${financeType === type ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <form onSubmit={handleFinanceSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Transaction Title *</label>
                    <input type="text" required placeholder="e.g. Meta Ads or Bank Loan" value={finTitle} onChange={(e) => setFinTitle(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Category</label>
                    <input type="text" placeholder="e.g. Marketing, Equipment" value={finCategory} onChange={(e) => setFinCategory(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Amount (PKR) *</label>
                    <input type="number" required placeholder="50000" value={finAmount} onChange={(e) => setFinAmount(e.target.value)} className="w-full px-3 py-2 border rounded-lg font-bold" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Paid To / Received From</label>
                    <input type="text" placeholder="e.g. Meta, HBL Bank" value={finPaidTo} onChange={(e) => setFinPaidTo(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Attach Receipt / Document</label>
                  <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if(f){ const r = new FileReader(); r.onloadend = () => setFinPhotoPreview(r.result as string); r.readAsDataURL(f); } }} className="text-[11px] text-slate-500" />
                  {finPhotoPreview && <div className="mt-2 flex items-center gap-2"><img src={finPhotoPreview} alt="Receipt" className="w-10 h-10 object-cover rounded border border-slate-300" /><span className="text-[10px] text-emerald-600 font-bold">✓ Document attached!</span></div>}
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                  <button type="button" onClick={() => setShowFinanceModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                  <button type="submit" className={`px-4 py-2 text-white font-bold rounded-lg ${financeType === 'Expense' ? 'bg-rose-600' : financeType === 'Asset' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                    Record {financeType}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showAddStudentModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
              <div className="p-5 border-b border-slate-200 bg-white sticky top-0 flex justify-between items-center z-10">
                <h3 className="font-extrabold text-slate-900 text-base">Student Admission Form</h3>
                <button onClick={() => setShowAddStudentModal(false)}><Icon name="x" className="w-5 h-5 text-slate-400" /></button>
              </div>

              <form onSubmit={handleEnrollStudent} className="p-6 space-y-4 text-xs">
                <div className="flex items-center gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  {admPhotoPreview ? (
                    <img src={admPhotoPreview} alt="Preview" className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500 shadow-md shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 border border-dashed border-slate-300 shrink-0">
                      <Icon name="camera" className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <label className="block text-slate-800 font-bold mb-1">Student Photograph *</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setAdmPhotoPreview, setAdmPhotoUploaded)} className="text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:bg-slate-800 file:text-white file:font-semibold cursor-pointer" />
                    {admPhotoUploaded && <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1.5"><Icon name="check" className="w-3.5 h-3.5" /> Photo uploaded successfully!</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="block text-slate-700 font-semibold mb-1">Student Full Name *</label><input type="text" required placeholder="e.g. Asad Mehmood" value={admFullName} onChange={(e) => setAdmFullName(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Father / Guardian Name</label><input type="text" placeholder="e.g. Tariq Mehmood" value={admGuardian} onChange={(e) => setAdmGuardian(e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">CNIC / B-Form Number *</label><input type="text" required placeholder="37405-XXXXXXX-X" value={admCNIC} onChange={(e) => setAdmCNIC(e.target.value)} className="w-full px-3 py-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">WhatsApp Number *</label><input type="text" required placeholder="+92 300 1234567" value={admPhone} onChange={(e) => setAdmPhone(e.target.value)} className="w-full px-3 py-2 border rounded-lg font-mono" /></div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">Enrolling Course</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-3 rounded-lg bg-slate-50">
                    {courseCatalog.map((course) => (
                      <label key={course.id} className="flex items-center justify-between p-1.5 bg-white rounded border cursor-pointer">
                        <div className="flex items-center gap-2"><input type="checkbox" checked={admSelectedCourses.includes(course.name)} onChange={() => toggleAdmCourse(course.name)} /><span>{course.name}</span></div><span className="font-bold">PKR {course.fee.toLocaleString()}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div><label className="block text-slate-700 font-semibold mb-1">Shift</label><select value={admShift} onChange={(e) => setAdmShift(e.target.value)} className="w-full p-2 border rounded-lg"><option>Morning Shift</option><option>Noon Shift</option><option>Evening Shift</option><option>Weekend VIP</option></select></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Timings</label><select value={admTiming} onChange={(e) => setAdmTiming(e.target.value)} className="w-full p-2 border rounded-lg font-mono"><option>10:00 AM - 11:30 AM</option><option>03:00 PM - 04:30 PM</option><option>06:00 PM - 08:00 PM</option><option>02:00 PM - 05:00 PM</option></select></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Faculty</label><select value={admTrainer} onChange={(e) => setAdmTrainer(e.target.value)} className="w-full p-2 border rounded-lg font-bold"><option>Sir Saif (Head IELTS)</option><option>Ms. Rabia Zafar</option><option>Sir Bilal Tariq</option><option>Frau Nadia</option></select></div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div><label className="block text-slate-700 font-semibold mb-1">Gross Program Fee</label><input type="text" disabled value={`PKR ${calculatedBaseFee.toLocaleString()}`} className="w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg font-bold text-slate-700" /></div>
                    <div><label className="block text-slate-700 font-semibold mb-1">Discount (PKR)</label><input type="number" value={admDiscount} onChange={(e) => setAdmDiscount(e.target.value)} placeholder="0" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-bold text-emerald-700" /></div>
                    <div><label className="block text-slate-700 font-semibold mb-1">Amount Paying Today</label><input type="number" value={admAmountPaid} onChange={(e) => setAdmAmountPaid(e.target.value)} placeholder="Leave blank if full" className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg font-bold text-blue-700" /></div>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-emerald-200"><span className="font-extrabold text-slate-800 text-sm">Net Tuition Billed:</span><span className="text-base font-black text-emerald-800">PKR {finalTuitionFee.toLocaleString()}</span></div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setShowAddStudentModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg">Confirm Admission</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: ADD / EDIT STAFF */}
        {showAddStaffModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
              <div className="p-5 border-b border-slate-200 bg-white sticky top-0 flex justify-between items-center z-10">
                <h3 className="font-extrabold text-slate-900 text-base">{editingStaffId !== null ? 'Edit Staff / Faculty Dossier' : 'Add Faculty / Staff Member'}</h3>
                <button onClick={() => setShowAddStaffModal(false)}><Icon name="x" className="w-5 h-5 text-slate-400" /></button>
              </div>

              <form onSubmit={handleSaveStaffMember} className="p-6 space-y-4 text-xs">
                <div className="flex items-center gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  {staffPhotoPreview ? (
                    <img src={staffPhotoPreview} alt="Staff Preview" className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md shrink-0" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 border border-dashed border-slate-300 shrink-0">
                      <Icon name="camera" className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <label className="block text-slate-800 font-bold mb-1">Faculty Profile Picture *</label>
                    <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setStaffPhotoPreview, setStaffPhotoUploaded)} className="text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:bg-slate-800 file:text-white file:font-semibold cursor-pointer" />
                    {staffPhotoUploaded && <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1"><Icon name="check" className="w-3.5 h-3.5" /> Photo verified successfully!</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><label className="block text-slate-700 font-semibold mb-1">Employee ID *</label><input type="text" placeholder="e.g. EMP-103" value={staffEmpId} onChange={(e) => setStaffEmpId(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Full Name *</label><input type="text" required placeholder="e.g. Sir Naveed Qureshi" value={staffName} onChange={(e) => setStaffName(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Department</label><select value={staffDept} onChange={(e) => setStaffDept(e.target.value)} className="w-full p-2 border rounded-lg"><option>Faculty</option><option>Administration</option><option>Support</option></select></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Designation</label><input type="text" required placeholder="e.g. Spoken English Trainer" value={staffRole} onChange={(e) => setStaffRole(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Academic Qualification</label><input type="text" placeholder="e.g. MA English, CELTA" value={staffQualification} onChange={(e) => setStaffQualification(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Specialization</label><input type="text" placeholder="e.g. IELTS & Phonetics" value={staffSpecialization} onChange={(e) => setStaffSpecialization(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Joining Date</label><input type="date" value={staffJoiningDate} onChange={(e) => setStaffJoiningDate(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Emergency Contact</label><input type="text" placeholder="+92 300 0000000" value={staffEmergency} onChange={(e) => setStaffEmergency(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Email</label><input type="email" required placeholder="faculty@britishinstitute.pk" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Phone</label><input type="text" placeholder="+92 300 0000000" value={staffPhone} onChange={(e) => setStaffPhone(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Shift</label><select value={staffShift} onChange={(e) => setStaffShift(e.target.value)} className="w-full p-2 border rounded-lg"><option>Morning</option><option>Evening</option><option>Weekend</option><option>Full Day</option></select></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Monthly Salary (PKR)</label><input type="number" placeholder="60000" value={staffSalary} onChange={(e) => setStaffSalary(e.target.value)} className="w-full p-2 border rounded-lg font-bold" /></div>
                  <div><label className="block text-slate-700 font-semibold mb-1">Duty Status</label><select value={staffStatus} onChange={(e) => setStaffStatus(e.target.value)} className="w-full p-2 border rounded-lg"><option value="present">On Duty</option><option value="on_leave">Off Duty / Leave</option></select></div>
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
                  <button type="button" onClick={() => setShowAddStaffModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm">Save Staff Record</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDirectorModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-slate-200 text-xs space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900 text-sm">Director Profile Settings</h3>
                <button onClick={() => setShowDirectorModal(false)}><Icon name="x" className="w-4 h-4 text-slate-400" /></button>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src={tempDirectorPhoto || directorProfile.photo} alt="Director Preview" className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 shadow-md" />
                <input type="file" accept="image/*" onChange={(e) => { const f = e.target.files?.[0]; if(f){ const r = new FileReader(); r.onloadend = () => setTempDirectorPhoto(r.result as string); r.readAsDataURL(f); } }} className="text-[11px] text-slate-500" />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowDirectorModal(false)} className="px-3 py-1.5 border rounded-lg">Cancel</button>
                <button type="button" onClick={() => { if (tempDirectorPhoto) setDirectorProfile({ ...directorProfile, photo: tempDirectorPhoto }); setShowDirectorModal(false); }} className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg">Save Photo</button>
              </div>
            </div>
          </div>
        )}

        {showAssignmentModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><div className="flex items-center gap-2"><Icon name="upload" className="w-5 h-5 text-indigo-600" /><h3 className="font-extrabold text-slate-900 text-sm">Upload Student Assignment / Test</h3></div><button onClick={() => setShowAssignmentModal(false)}><Icon name="x" className="w-4 h-4 text-slate-400" /></button></div>
              <form onSubmit={handleAssignmentSubmit} className="space-y-4">
                <div><label className="block text-slate-700 font-bold mb-1">Select Course / Subject</label><select value={assignmentCourse} onChange={(e) => setAssignmentCourse(e.target.value)} className="w-full p-2 border rounded-lg"><option>IELTS Academic 7.5+ Masterclass</option><option>Spoken English Fluency & Accent</option></select></div>
                <div><label className="block text-slate-700 font-bold mb-1">Assignment Title</label><input type="text" required value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                <div className="p-4 border-2 border-dashed border-indigo-200 rounded-xl bg-indigo-50/50 text-center space-y-2">
                  <input type="file" required accept=".doc,.docx,.xls,.xlsx,.pdf,.ppt,.pptx" onChange={handleAssignmentFilePick} className="w-full text-slate-500" />
                  {assignmentSuccess && <div className="text-[11px] text-emerald-700 font-bold">✓ File Selected: {assignmentFileName}</div>}
                </div>
                <div className="flex justify-end gap-2 pt-2"><button type="button" onClick={() => setShowAssignmentModal(false)} className="px-3.5 py-1.5 border rounded-lg">Cancel</button><button type="submit" className="px-4 py-1.5 bg-indigo-600 text-white font-bold rounded-lg">Submit File</button></div>
              </form>
            </div>
          </div>
        )}

        {showTeacherUploadModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><h3 className="font-extrabold text-slate-900 text-sm">Publish New Lecture / Worksheet (Faculty)</h3><button onClick={() => setShowTeacherUploadModal(false)}><Icon name="x" className="w-4 h-4 text-slate-400" /></button></div>
              <form onSubmit={handleTeacherUpload} className="space-y-3">
                <div><label className="block text-slate-700 font-bold mb-1">Target Course</label><select value={newLectureCourse} onChange={(e) => setNewLectureCourse(e.target.value)} className="w-full p-2 border rounded-lg"><option>IELTS Academic 7.5+ Masterclass</option><option>Spoken English Fluency & Accent</option></select></div>
                <div><label className="block text-slate-700 font-bold mb-1">Lecture Topic / Worksheet Title</label><input type="text" required placeholder="e.g. Band 8.0 Speaking Cue Cards Replay" value={newLectureTitle} onChange={(e) => setNewLectureTitle(e.target.value)} className="w-full p-2 border rounded-lg" /></div>
                <div><label className="block text-slate-700 font-bold mb-1">Video Stream Embed URL</label><input type="url" placeholder="https://www.youtube.com/embed/..." value={newLectureVideoUrl} onChange={(e) => setNewLectureVideoUrl(e.target.value)} className="w-full p-2 border rounded-lg font-mono" /></div>
                <div className="flex justify-end gap-2 pt-2"><button type="button" onClick={() => setShowTeacherUploadModal(false)} className="px-3.5 py-1.5 border rounded-lg">Cancel</button><button type="submit" className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg">Publish to Students</button></div>
              </form>
            </div>
          </div>
        )}

        {/* LMS POPUPS */}
        {showAnnouncementsModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><h3 className="font-extrabold text-slate-900 text-sm">Official Institute Announcements</h3><button onClick={() => setShowAnnouncementsModal(false)}><Icon name="x" className="w-4 h-4" /></button></div>
              <div className="space-y-3"><div className="p-3 bg-purple-50 rounded-xl border border-purple-200"><p className="font-bold text-purple-900">Mock Speaking Interview Slot</p><p className="text-purple-800 mt-0.5">Your 1-on-1 interview slot with Sir Saif is confirmed for Friday at 6:30 PM in Audio Booth 1.</p></div></div>
              <button onClick={() => setShowAnnouncementsModal(false)} className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg">Close</button>
            </div>
          </div>
        )}

        {showAttendanceModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><h3 className="font-extrabold text-slate-900 text-sm">Attendance Log</h3><button onClick={() => setShowAttendanceModal(false)}><Icon name="x" className="w-4 h-4" /></button></div>
              <div className="p-3 bg-blue-50 rounded-xl text-blue-900 flex justify-between font-bold"><span>Present Ratio: 94%</span><span>19 of 20 Attended</span></div>
              <p className="text-slate-600">Candidate meets minimum 85% attendance criteria required for exam registration.</p>
              <button onClick={() => setShowAttendanceModal(false)} className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg">Close</button>
            </div>
          </div>
        )}

        {showProgressModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><h3 className="font-extrabold text-slate-900 text-sm">CEFR Band Matrix</h3><button onClick={() => setShowProgressModal(false)}><Icon name="x" className="w-4 h-4" /></button></div>
              <div className="space-y-2"><div className="flex justify-between font-bold"><span>Listening: Band 8.0</span><span className="text-emerald-600">Advanced</span></div><div className="flex justify-between font-bold"><span>Reading: Band 7.5</span><span className="text-emerald-600">Advanced</span></div><div className="flex justify-between font-bold"><span>Writing: Band 7.0</span><span className="text-blue-600">Upper Int.</span></div><div className="flex justify-between font-bold"><span>Speaking: Band 8.0</span><span className="text-emerald-600">Advanced</span></div></div>
              <button onClick={() => setShowProgressModal(false)} className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg">Close</button>
            </div>
          </div>
        )}

        {showReceiptModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3"><h3 className="font-extrabold text-slate-900 text-sm">Official Tuition Receipt</h3><button onClick={() => setShowReceiptModal(false)}><Icon name="x" className="w-4 h-4" /></button></div>
              <div className="space-y-2 text-slate-700"><p><strong>Status:</strong> Cleared (Voucher Paid)</p></div>
              <button onClick={() => setShowReceiptModal(false)} className="w-full py-2 bg-slate-900 text-white font-bold rounded-lg">Close</button>
            </div>
          </div>
        )}

        {/* INSPECTION DRAWERS */}
        {inspectedStudent && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <img src={inspectedStudent.photo} alt={inspectedStudent.name} className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm" />
                    <div><span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">{inspectedStudent.id}</span><h3 className="font-extrabold text-slate-900 text-lg mt-0.5">{inspectedStudent.name}</h3><p className="text-xs text-slate-400">CNIC: {inspectedStudent.cnic}</p></div>
                  </div>
                  <button onClick={() => setInspectedStudent(null)} className="text-slate-400 hover:text-slate-600"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border space-y-1.5"><p><strong>Guardian:</strong> {inspectedStudent.guardian}</p><p><strong>WhatsApp:</strong> {inspectedStudent.phone}</p><p><strong>Shift:</strong> {inspectedStudent.shift} ({inspectedStudent.timing})</p><p><strong>Faculty:</strong> {inspectedStudent.trainer}</p><p><strong>Logged By:</strong> {inspectedStudent.loggedBy}</p></div>
                  <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1.5"><p><strong>Status:</strong> {inspectedStudent.feeStatus}</p><p><strong>Attendance:</strong> {inspectedStudent.attendancePct}</p></div>
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1"><p className="font-bold text-slate-800">Enrolled Programs:</p><ul className="list-disc list-inside text-slate-600">{inspectedStudent.courses.map((c: string, idx: number) => <li key={idx}>{c}</li>)}</ul><p className="font-bold text-slate-900 pt-2">Tuition Billed: PKR {inspectedStudent.totalFee.toLocaleString()}</p></div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 flex gap-2">
                <button onClick={() => alert(`Printing verified student registration card for ${inspectedStudent.name}`)} className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition">Print Verified Dossier</button>
                <button onClick={() => setInspectedStudent(null)} className="px-4 py-2.5 border border-slate-300 rounded-lg text-slate-600 text-xs font-semibold">Close</button>
              </div>
            </div>
          </div>
        )}

        {inspectedExpense && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div><span className="text-[10px] bg-rose-100 text-rose-800 font-mono font-bold px-2 py-0.5 rounded">{inspectedExpense.id}</span><h3 className="font-extrabold text-slate-900 text-base mt-1">{inspectedExpense.title}</h3><p className="text-xs text-slate-400">Ref: {inspectedExpense.reference}</p></div>
                  <button onClick={() => setInspectedExpense(null)} className="text-slate-400 hover:text-slate-600"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                    <p><strong className="text-slate-700">Disbursed To:</strong> {inspectedExpense.paidTo}</p>
                    <p><strong className="text-slate-700">Category:</strong> {inspectedExpense.category}</p>
                    <p><strong className="text-slate-700">Payment Channel:</strong> {inspectedExpense.method}</p>
                    <p><strong className="text-slate-700">Transaction Date:</strong> {inspectedExpense.date}</p>
                    <p><strong className="text-slate-700">Logged By (Staff / Owner):</strong> {inspectedExpense.loggedBy || directorProfile.name}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 flex justify-between items-center"><span className="font-bold text-rose-900">Total Amount:</span><span className="text-lg font-black text-rose-700">PKR {inspectedExpense.amount.toLocaleString()}</span></div>
                  {inspectedExpense.receiptPhoto && (<div className="p-3 rounded-lg bg-slate-50 border border-slate-200"><p className="font-bold text-slate-800 mb-2">Scanned Receipt / Document:</p><img src={inspectedExpense.receiptPhoto} alt="Receipt" className="w-full h-36 object-cover rounded-lg border border-slate-300" /></div>)}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200"><button onClick={() => setInspectedExpense(null)} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition">Close Inspection</button></div>
            </div>
          </div>
        )}

        {inspectedLedgerItem && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div><span className="text-[10px] bg-purple-100 text-purple-800 font-mono font-bold px-2 py-0.5 rounded">Audited Ledger Line</span><h3 className="font-extrabold text-slate-900 text-base mt-1">{inspectedLedgerItem.title}</h3><p className="text-xs text-slate-400">{inspectedLedgerItem.category}</p></div>
                  <button onClick={() => setInspectedLedgerItem(null)} className="text-slate-400 hover:text-slate-600"><Icon name="x" className="w-5 h-5" /></button>
                </div>
                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5"><p><strong className="text-slate-700">Ledger Balance:</strong> PKR {inspectedLedgerItem.amount.toLocaleString()}</p><p><strong className="text-slate-700">Accounting Policy:</strong> Accrual basis (IFRS compliant)</p><p><strong className="text-slate-700">Auditor Notes:</strong> {inspectedLedgerItem.notes}</p></div>
                  <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 space-y-1"><p className="font-bold text-blue-900 mb-1">Supporting Reference IDs:</p><div className="flex flex-wrap gap-1.5">{inspectedLedgerItem.vouchers.map((v: string, i: number) => (<span key={i} className="text-[10px] bg-white border border-blue-300 font-mono px-2 py-0.5 rounded font-bold text-blue-800">{v}</span>))}</div></div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200"><button onClick={() => setInspectedLedgerItem(null)} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition">Close Audit Sheet</button></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}