'use client';
import React, { useState, useMemo } from 'react';

// Fully Inlined, Turbopack Crash-Proof Icon System
const Icon = ({ name, className = "w-4 h-4" }: { name: string; className?: string }) => {
  switch (name) {
    case 'pie-chart':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>;
    case 'users':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>;
    case 'graduation-cap':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"/></svg>;
    case 'dollar-sign':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-12a8 8 0 100 16 8 8 0 000-16z"/></svg>;
    case 'wallet':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>;
    case 'video':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>;
    case 'arrow-up-right':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>;
    case 'plus':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>;
    case 'trending-down':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/></svg>;
    case 'trending-up':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
    case 'pin':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>;
    case 'menu':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case 'x':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>;
    case 'building':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>;
    case 'search':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>;
    case 'clock':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'settings':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'camera':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
    case 'check':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
    case 'book':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>;
    case 'bell':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>;
    case 'upload':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>;
    case 'file-text':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>;
    case 'download':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>;
    case 'play':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>;
    case 'send':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>;
    case 'calendar':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
    case 'printer':
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>;
    default:
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>;
  }
};

export default function EduFlowEnterpriseSuite() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'students' | 'leads' | 'staff' | 'timetable' | 'lms' | 'expenses' | 'finance' | 'settings'>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // LMS Portal Sub-Tab State
  const [lmsRole, setLmsRole] = useState<'student' | 'teacher'>('student');
  const [activeLmsSubTab, setActiveLmsSubTab] = useState<'dashboard' | 'program' | 'assignments' | 'lectures' | 'results'>('dashboard');

  // Modals & Popups
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showDirectorModal, setShowDirectorModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [showTeacherUploadModal, setShowTeacherUploadModal] = useState(false);

  // New Feature: Fee Challan Modal
  const [showChallanModal, setShowChallanModal] = useState(false);
  const [selectedChallanStudent, setSelectedChallanStudent] = useState<any | null>(null);

  // LMS Interactive Popups
  const [showAnnouncementsModal, setShowAnnouncementsModal] = useState(false);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Assignment Upload States
  const [assignmentTitle, setAssignmentTitle] = useState('IELTS Task 2 Essay');
  const [assignmentCourse, setAssignmentCourse] = useState('IELTS Academic 7.5+ Masterclass');
  const [assignmentFileName, setAssignmentFileName] = useState('');
  const [assignmentFileType, setAssignmentFileType] = useState('');
  const [assignmentSuccess, setAssignmentSuccess] = useState(false);

  // Inspection Drawers
  const [inspectedStudent, setInspectedStudent] = useState<any | null>(null);
  const [inspectedExpense, setInspectedExpense] = useState<any | null>(null);
  const [inspectedLedgerItem, setInspectedLedgerItem] = useState<{ title: string; category: string; amount: number; notes: string; vouchers: string[] } | null>(null);

  // Search & Filters
  const [studentSearchQuery, setStudentSearchQuery] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [expenseDateFilter, setExpenseDateFilter] = useState<'all' | 'today' | 'yesterday'>('all');

  // Director / Owner Profile
  const [directorProfile, setDirectorProfile] = useState({
    name: 'Director / Executive Office',
    email: 'director@britishinstitute.pk',
    phone: '+92 51 11122233',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'
  });
  const [tempDirectorPhoto, setTempDirectorPhoto] = useState('');

  // Pinned Notice
  const [showReminder, setShowReminder] = useState(true);
  const [reminderText, setReminderText] = useState(
    'Director Reminder: British Institute Fall 2026 Orientation starts at 5:00 PM today in Main Hall. Ensure evening faculty (Sir Saif & Ms. Rabia) are briefed.'
  );

  const institute = {
    name: "British Institute for Spoken English & Training Centre",
    campus: "Islamabad Main Campus",
    regNo: "ED-ISB-2026-9942",
    accountingCycle: "Quarter ending Q4 2026"
  };

  const courseCatalog = [
    { id: 'c1', name: 'IELTS Academic 7.5+ Masterclass', fee: 28000, duration: '2 Months', color: '#10B981' },
    { id: 'c2', name: 'Spoken English Fluency & Accent', fee: 18000, duration: '2.5 Months', color: '#3B82F6' },
    { id: 'c3', name: 'PTE Academic Intensive', fee: 25000, duration: '1.5 Months', color: '#F59E0B' },
    { id: 'c4', name: 'Business English & Public Speaking', fee: 32000, duration: '1 Month', color: '#8B5CF6' },
    { id: 'c5', name: 'German Language A1/A2 Certification', fee: 30000, duration: '3 Months', color: '#EC4899' }
  ];

  // 1. STUDENTS ROSTER
  const [studentsRoster, setStudentsRoster] = useState([
    { id: 'STU-101', name: 'Usman Ali', guardian: 'Muhammad Tariq', cnic: '37405-1234567-1', phone: '+92 301 2345678', courses: ['IELTS Academic 7.5+', 'Spoken English Fluency & Accent'], shift: 'Evening Shift', timing: '06:00 PM - 08:00 PM', feePaid: 46000, feeStatus: 'Paid', attendancePct: '94%', trainer: 'Sir Saif', date: 'Today', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120' },
    { id: 'STU-102', name: 'Sana Fatima', guardian: 'Rashid Khan', cnic: '61101-9876543-2', phone: '+92 322 9876543', courses: ['Spoken English Fluency & Accent'], shift: 'Morning Shift', timing: '10:00 AM - 11:30 AM', feePaid: 18000, feeStatus: 'Paid', attendancePct: '88%', trainer: 'Ms. Rabia Zafar', date: 'Today', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120' },
    { id: 'STU-103', name: 'Muhammad Waqas', guardian: 'Abdul Ghafoor', cnic: '35202-3344556-3', phone: '+92 334 1122334', courses: ['PTE Academic Intensive'], shift: 'Noon Shift', timing: '03:00 PM - 04:30 PM', feePaid: 10000, feeStatus: 'Pending (15k due)', attendancePct: '91%', trainer: 'Sir Bilal Tariq', date: 'Yesterday', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120' },
    { id: 'STU-104', name: 'Maryam Noor', guardian: 'Noor Alam', cnic: '37405-5566778-4', phone: '+92 315 5566778', courses: ['Business English & Public Speaking'], shift: 'Weekend VIP', timing: '11:00 AM - 02:00 PM', feePaid: 32000, feeStatus: 'Paid', attendancePct: '100%', trainer: 'Sir Saif', date: 'Oct 20, 2026', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120' },
    { id: 'STU-105', name: 'Hamza Tariq', guardian: 'Tariq Mehmood', cnic: '37405-9928172-5', phone: '+92 345 9928172', courses: ['IELTS Academic 7.5+ Masterclass'], shift: 'Evening Shift', timing: '06:00 PM - 08:00 PM', feePaid: 14000, feeStatus: 'Pending (14k due)', attendancePct: '96%', trainer: 'Sir Saif', date: 'Oct 19, 2026', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120' },
  ]);

  // 2. FACULTY & STAFF ROSTER
  const [staffRoster, setStaffRoster] = useState([
    { id: 1, name: 'Sir Saif', role: 'Head IELTS Trainer', dept: 'Faculty', email: 'saif@britishinstitute.pk', phone: '+92 300 1112233', shift: 'Evening & Weekend', classroom: 'Lab A - Audio Hall', salary: 85000, status: 'present', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120' },
    { id: 2, name: 'Ms. Rabia Zafar', role: 'Spoken English Trainer', dept: 'Faculty', email: 'rabia@britishinstitute.pk', phone: '+92 321 4445566', shift: 'Morning Shift', classroom: 'Room 2 - Fluency Desk', salary: 65000, status: 'present', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120' },
    { id: 3, name: 'Sir Bilal Tariq', role: 'PTE Specialist Trainer', dept: 'Faculty', email: 'bilal@britishinstitute.pk', phone: '+92 333 7778899', shift: 'Noon Shift', classroom: 'Room 4', salary: 60000, status: 'on_leave', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120' },
    { id: 4, name: 'Frau Nadia', role: 'German Language Faculty', dept: 'Faculty', email: 'nadia@britishinstitute.pk', phone: '+92 300 8899001', shift: 'Weekend Shift', classroom: 'Room 3', salary: 55000, status: 'present', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120' },
    { id: 5, name: 'Zeeshan Malik', role: 'Admissions Counselor', dept: 'Administration', email: 'counselor@britishinstitute.pk', phone: '+92 333 5556677', shift: 'Full Day (9AM-6PM)', classroom: 'Front Desk', salary: 45000, status: 'present', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120' },
  ]);

  // 3. EXPENSES LEDGER
  const [expensesList, setExpensesList] = useState([
    { id: 'EXP-401', title: 'Meta Lead Ads Campaign (Facebook & Instagram)', category: 'Marketing', amount: 45000, paidTo: 'Meta Platforms Inc', date: 'Today', method: 'Direct Card', reference: 'META-OCT-8812', receiptPhoto: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=120' },
    { id: 'EXP-402', title: 'Trainer Honoraria (Sir Saif - Head IELTS)', category: 'Payroll', amount: 85000, paidTo: 'Sir Saif', date: 'Yesterday', method: 'Meezan Bank Transfer', reference: 'TRF-PK-99120', receiptPhoto: '' },
    { id: 'EXP-403', title: 'Campus High-Speed Fiber Internet & Backup Line', category: 'Utilities', amount: 12000, paidTo: 'Nayatel Islamabad', date: 'Yesterday', method: 'Online Banking', reference: 'NYT-81923', receiptPhoto: '' },
  ]);

  // 4. RETARGETING LEADS
  const [retargetLeads] = useState([
    { id: 'RET-301', name: 'Bilal Hassan', phone: '+92 302 4455667', visitedDate: '3 Days Ago', interest: 'IELTS Academic', reason: 'Said fee was high / needed time to decide', stage: 'Follow-Up Due', suggestedOffer: 'PKR 3,000 Early Bird Voucher' },
    { id: 'RET-302', name: 'Zunaira Aslam', phone: '+92 321 9988771', visitedDate: '5 Days Ago', interest: 'Spoken English Fluency', reason: 'Attended free trial session, then did not return', stage: 'Trial Done (Cold)', suggestedOffer: 'Free Speaking Mock Test Access' },
    { id: 'RET-303', name: 'Fahad Mehmood', phone: '+92 333 1122998', visitedDate: '1 Week Ago', interest: 'PTE Academic Intensive', reason: 'Walked in with parent, took brochure', stage: 'Dormant Walk-In', suggestedOffer: 'Weekend Morning Batch Slot' },
  ]);

  // 5. LMS COURSE MODULES
  const [courseModules, setCourseModules] = useState([
    { id: 1, title: 'IELTS Academic Speaking Task 2 Masterclass', faculty: 'Sir Saif', type: 'Video Masterclass', tag: 'Band 8.0 Prep', duration: '48 Mins' },
    { id: 2, title: 'Oxford Pronunciation & Vowel Accent Drills', faculty: 'Ms. Rabia Zafar', type: 'PDF & Audio', tag: 'Spoken English', duration: '18 Pages' },
    { id: 3, title: 'PTE Academic AI Machine Evaluation Strategies', faculty: 'Sir Bilal Tariq', type: 'Full Mock Test', tag: 'PTE Intensive', duration: '2.5 Hours' },
  ]);

  // 6. STUDENT ASSIGNMENT SUBMISSIONS
  const [studentAssignments, setStudentAssignments] = useState([
    { id: 'SUB-901', student: 'Usman Ali', course: 'IELTS Academic 7.5+', file: 'Task2_Opinion_Essay.docx', format: 'DOCX (Word)', status: 'Graded (Band 7.5)', date: 'Oct 23, 2026', teacher: 'Sir Saif' },
    { id: 'SUB-902', student: 'Sana Fatima', course: 'Spoken English Fluency', file: 'Week2_Vocabulary_Drill.pdf', format: 'PDF', status: 'Submitted (Pending Review)', date: 'Oct 24, 2026', teacher: 'Ms. Rabia Zafar' },
    { id: 'SUB-903', student: 'Muhammad Waqas', course: 'PTE Academic Intensive', file: 'PTE_Pronunciation_Test.pptx', format: 'PPTX (PowerPoint)', status: 'Needs Revision', date: 'Oct 22, 2026', teacher: 'Sir Bilal Tariq' },
  ]);

  // 7. STUDENT RESULT SCORECARD
  const studentResultReport = {
    examTitle: 'IELTS Academic Diagnostic Mock #04',
    candidate: 'Usman Ali (STU-101)',
    date: 'Oct 20, 2026',
    overallBand: 7.5,
    listening: 8.0,
    reading: 7.5,
    writing: 7.0,
    speaking: 8.0,
    remarks: 'Candidate demonstrates strong lexical resource and clear phonetic control. Task 2 coherence meets Band 8.0 standard.',
    evaluator: 'Sir Saif (Official IELTS Trainer)'
  };

  // Form Inputs
  const [admFullName, setAdmFullName] = useState('');
  const [admGuardian, setAdmGuardian] = useState('');
  const [admCNIC, setAdmCNIC] = useState('');
  const [admPhone, setAdmPhone] = useState('');
  const [admSelectedCourses, setAdmSelectedCourses] = useState<string[]>(['Spoken English Fluency & Accent']);
  const [admShift, setAdmShift] = useState('Evening Shift');
  const [admTiming, setAdmTiming] = useState('06:00 PM - 08:00 PM');
  const [admTrainer, setAdmTrainer] = useState('Sir Saif');
  const [admDiscount, setAdmDiscount] = useState('0');
  const [admPhotoPreview, setAdmPhotoPreview] = useState<string>('');
  const [admPhotoUploaded, setAdmPhotoUploaded] = useState(false);

  const [staffName, setStaffName] = useState('');
  const [staffRole, setStaffRole] = useState('Senior Faculty Trainer');
  const [staffDept, setStaffDept] = useState('Faculty');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffPhone, setStaffPhone] = useState('');
  const [staffShift, setStaffShift] = useState('Evening Shift');
  const [staffSalary, setStaffSalary] = useState('');
  const [staffPhotoPreview, setStaffPhotoPreview] = useState<string>('');
  const [staffPhotoUploaded, setStaffPhotoUploaded] = useState(false);

  const [expTitle, setExpTitle] = useState('');
  const [expCategory, setExpCategory] = useState('Marketing');
  const [expAmount, setExpAmount] = useState('');
  const [expPaidTo, setExpPaidTo] = useState('');
  const [expMethod, setExpMethod] = useState('Meezan Bank Transfer');
  const [expPhotoPreview, setExpPhotoPreview] = useState<string>('');

  const [newLectureTitle, setNewLectureTitle] = useState('');
  const [newLectureCourse, setNewLectureCourse] = useState('IELTS Academic 7.5+ Masterclass');
  const [newLectureVideoUrl, setNewLectureVideoUrl] = useState('');

  // Financial Calculations
  const totalTuitionRevenue = useMemo(() => studentsRoster.reduce((sum, s) => sum + s.feePaid, 771000), [studentsRoster]);
  const totalExpenses = useMemo(() => expensesList.reduce((sum, e) => sum + e.amount, 0), [expensesList]);
  const netOperatingProfit = totalTuitionRevenue - totalExpenses;
  const netProfitMargin = ((netOperatingProfit / totalTuitionRevenue) * 100).toFixed(1);

  // Search Filter
  const filteredStudents = useMemo(() => {
    return studentsRoster.filter(stu => {
      const matchSearch = stu.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
                          stu.phone.includes(studentSearchQuery) ||
                          stu.id.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
                          stu.cnic.includes(studentSearchQuery);
      const matchCourse = selectedCourseFilter === 'All' || stu.courses.some(c => c.toLowerCase().includes(selectedCourseFilter.toLowerCase()));
      return matchSearch && matchCourse;
    });
  }, [studentsRoster, studentSearchQuery, selectedCourseFilter]);

  const filteredExpenses = useMemo(() => {
    if (expenseDateFilter === 'today') return expensesList.filter(e => e.date === 'Today');
    if (expenseDateFilter === 'yesterday') return expensesList.filter(e => e.date === 'Yesterday');
    return expensesList;
  }, [expensesList, expenseDateFilter]);

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

  const handleAssignmentFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAssignmentFileName(file.name);
      const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';
      setAssignmentFileType(ext);
      setAssignmentSuccess(true);
    }
  };

  const handleAssignmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignmentFileName) return;

    const newSub = {
      id: `SUB-${Math.floor(900 + Math.random() * 99)}`,
      student: 'Usman Ali (You)',
      course: assignmentCourse,
      file: assignmentFileName,
      format: `${assignmentFileType} Document`,
      status: 'Submitted (Pending Review)',
      date: 'Just Now',
      teacher: assignmentCourse.includes('IELTS') ? 'Sir Saif' : 'Ms. Rabia Zafar'
    };

    setStudentAssignments([newSub, ...studentAssignments]);
    setShowAssignmentModal(false);
    setAssignmentSuccess(false);
    setAssignmentFileName('');
    alert('Assignment file successfully uploaded to British Institute LMS portal!');
  };

  const handleEnrollStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admFullName || !admPhone) return;

    const newStudent = {
      id: `STU-${100 + studentsRoster.length + 1}`,
      name: admFullName,
      guardian: admGuardian || 'Guardian Record',
      cnic: admCNIC || '37405-XXXXXXX-X',
      phone: admPhone,
      courses: admSelectedCourses,
      shift: admShift,
      timing: admTiming,
      feePaid: 25000,
      feeStatus: 'Paid',
      attendancePct: '100%',
      trainer: admTrainer,
      date: 'Today',
      photo: admPhotoPreview || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120'
    };

    setStudentsRoster([newStudent, ...studentsRoster]);
    setShowAddStudentModal(false);
  };

  const handleAddStaffMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!staffName || !staffEmail) return;

    const newStaff = {
      id: staffRoster.length + 1,
      name: staffName,
      role: staffRole,
      dept: staffDept,
      email: staffEmail,
      phone: staffPhone || '+92 300 0000000',
      shift: staffShift,
      classroom: 'Campus Floor 2',
      salary: parseFloat(staffSalary || '55000'),
      status: 'present',
      photo: staffPhotoPreview || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120'
    };

    setStaffRoster([...staffRoster, newStaff]);
    setShowAddStaffModal(false);
  };

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expTitle || !expAmount) return;

    const newExpense = {
      id: `EXP-${400 + expensesList.length + 1}`,
      title: expTitle,
      category: expCategory,
      amount: parseFloat(expAmount),
      paidTo: expPaidTo || 'Institute Vendor',
      date: 'Today',
      method: expMethod,
      reference: `MANUAL-${Math.floor(1000 + Math.random() * 9000)}`,
      receiptPhoto: expPhotoPreview
    };

    setExpensesList([newExpense, ...expensesList]);
    setShowAddExpenseModal(false);
  };

  const handleTeacherUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLectureTitle) return;

    const newMod = {
      id: courseModules.length + 1,
      title: newLectureTitle,
      faculty: 'Sir Saif (You)',
      type: newLectureVideoUrl ? 'Video Masterclass' : 'PDF Worksheet',
      tag: newLectureCourse.split(' ')[0],
      duration: '45 Mins'
    };

    setCourseModules([newMod, ...courseModules]);
    setShowTeacherUploadModal(false);
    setNewLectureTitle('');
    setNewLectureVideoUrl('');
    alert('Lecture published successfully to enrolled student dashboards!');
  };

  const toggleAdmCourse = (courseName: string) => {
    if (admSelectedCourses.includes(courseName)) {
      if (admSelectedCourses.length > 1) {
        setAdmSelectedCourses(admSelectedCourses.filter(c => c !== courseName));
      }
    } else {
      setAdmSelectedCourses([...admSelectedCourses, courseName]);
    }
  };

  const openWhatsApp = (phone: string, name: string, courses: string[]) => {
    const cleanNumber = phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Assalam-o-Alaikum ${name}! Welcome to ${institute.name}. Your assessment slot for ${courses.join(' & ')} is confirmed. Reply 1 to confirm timing.`
    );
    window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${text}`, '_blank');
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800 antialiased overflow-hidden">
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0A1128] text-slate-200 transform transition-transform duration-200 ease-in-out md:static md:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } flex flex-col justify-between shadow-2xl shrink-0`}>
        <div>
          {/* Logo Header */}
          <div className="p-4 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center font-black text-slate-950 text-sm shadow-md">
                EF
              </div>
              <div>
                <h1 className="font-extrabold text-xs tracking-wider text-white">EDU-FLOW ERP</h1>
                <p className="text-[10px] text-emerald-400 font-medium">Academy Operating Suite</p>
              </div>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400">
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>

          {/* Active Tenant */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <img src={directorProfile.photo} alt="Director" className="w-8 h-8 rounded-full object-cover border-2 border-emerald-400 shrink-0" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-amber-300 truncate">{institute.name}</p>
                <p className="text-[10px] text-slate-400">{institute.campus}</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
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
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg transition ${
                  activeTab === item.id ? 'bg-emerald-600 text-white font-semibold shadow-sm' : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon name={item.icon} className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-emerald-300 font-bold">{item.badge}</span>}
              </button>
            ))}

            <p className="px-3 pt-4 py-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Financials & Accounts</p>
            {[
              { id: 'finance', name: 'SOPL & SOFP Statements', icon: 'dollar-sign', badge: 'Audited' },
              { id: 'expenses', name: 'Expense Outflow Ledger', icon: 'wallet', badge: `PKR ${(totalExpenses / 1000).toFixed(0)}K` },
              { id: 'settings', name: 'Administration & Settings', icon: 'settings' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id as any); setMobileMenuOpen(false); }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg transition ${
                  activeTab === item.id ? 'bg-emerald-600 text-white font-semibold shadow-sm' : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon name={item.icon} className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">{item.badge}</span>}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-950/60 text-[11px] text-slate-400">
          <p className="text-white font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Supabase RLS Active
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5 font-mono">{institute.regNo}</p>
        </div>
      </aside>

      {/* 2. MAIN ACTIVE CANVAS */}
      <main className="flex-1 flex flex-col overflow-y-auto">

        {/* HIDE TOP CRM HEADER IN PURE LMS VIEW */}
        {activeTab !== 'lms' && (
          <>
            {showReminder && (
              <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-slate-950 px-4 md:px-8 py-2 flex items-center justify-between shadow-sm text-xs font-semibold">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="flex items-center gap-1 bg-slate-950 text-amber-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider shrink-0">
                    <Icon name="pin" className="w-3 h-3" /> Pin
                  </span>
                  <p className="truncate text-slate-950">{reminderText}</p>
                </div>
                <button onClick={() => setShowReminder(false)} className="text-slate-950"><Icon name="x" className="w-4 h-4" /></button>
              </div>
            )}

            <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-600 p-1">
                  <Icon name="menu" className="w-6 h-6" />
                </button>
                <div>
                  <h2 className="text-sm md:text-base font-extrabold text-slate-800 capitalize">
                    {activeTab === 'dashboard' ? 'Executive Overview' : activeTab.replace('-', ' ')}
                  </h2>
                  <p className="text-[11px] text-slate-500">Official British Institute Enterprise Admissions & Faculty ERP</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => setShowAddExpenseModal(true)} className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white border border-rose-200 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 transition">
                  <Icon name="trending-down" className="w-3.5 h-3.5" /> + Log Expense
                </button>
                <button onClick={() => setShowAddStudentModal(true)} className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition">
                  <Icon name="plus" className="w-3.5 h-3.5" /> + Student Admission
                </button>
              </div>
            </header>

            {/* 4 Overview Metric Cards - CLICKABLE TO REDIRECT */}
            <div className="p-4 md:p-8 pb-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {[
                  { id: 'students', label: 'ENROLLED STUDENTS', val: studentsRoster.length, change: '100% Verified', sub: 'Click to open Student Roster', tag: 'Live Photo Dossiers', color: 'border-l-4 border-l-emerald-500' },
                  { id: 'staff', label: 'FACULTY & STAFF', val: `${staffRoster.filter(s => s.status === 'present').length} On Duty`, change: 'Sir Saif Active', sub: 'Click to view Staff Roster', tag: 'Rooms & Shifts', color: 'border-l-4 border-l-blue-500' },
                  { id: 'lms', label: 'LMS ACADEMIC HUB', val: '3 Modules', change: 'Online Academy', sub: 'Click to launch LMS Hub', tag: 'Pure Student Interface', color: 'border-l-4 border-l-amber-500' },
                  { id: 'finance', label: 'NET PROFIT (PKR)', val: `PKR ${netOperatingProfit.toLocaleString()}`, change: `${netProfitMargin}% Net`, sub: 'Click to view SOPL/SOFP', tag: 'Full Audit Trail', color: 'border-l-4 border-l-purple-500' },
                ].map((kpi, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveTab(kpi.id as any)}
                    className={`bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:shadow-md cursor-pointer transition transform hover:-translate-y-0.5 ${kpi.color}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider">{kpi.label}</span>
                      <Icon name="arrow-up-right" className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="mt-2 flex items-baseline justify-between">
                      <h3 className="text-lg md:text-2xl font-black text-slate-900">{kpi.val}</h3>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {kpi.change}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-semibold text-emerald-600">{kpi.sub}</span>
                      <span className="font-mono text-slate-500">{kpi.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ======================================================== */}
        {/* VIEW: EXECUTIVE DASHBOARD (RESTORED COMPLETELY)          */}
        {/* ======================================================== */}
        {activeTab === 'dashboard' && (
          <div className="p-4 md:p-8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Donut Chart */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800 text-sm">Course Revenue Breakdown</h3>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">Q4 Actual</span>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-44 h-44">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#10B981" strokeWidth="4" strokeDasharray="38 62" strokeDashoffset="0" />
                      <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#3B82F6" strokeWidth="4" strokeDasharray="26 74" strokeDashoffset="-38" />
                      <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#F59E0B" strokeWidth="4" strokeDasharray="16 84" strokeDashoffset="-64" />
                      <circle cx="18" cy="18" r="15.9155" fill="transparent" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-80" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase">Total Rev</span>
                      <span className="text-sm font-black text-slate-900">PKR {(totalTuitionRevenue / 1000).toFixed(0)}K</span>
                      <span className="text-[9px] text-emerald-600 font-bold">{netProfitMargin}% Margin</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 p-1 text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> IELTS (38%)</div>
                  <div className="flex items-center gap-1.5 p-1 text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Spoken (26%)</div>
                  <div className="flex items-center gap-1.5 p-1 text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> PTE (16%)</div>
                  <div className="flex items-center gap-1.5 p-1 text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Corp/VIP (20%)</div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Revenue vs Operating Expenditures</h3>
                    <p className="text-xs text-slate-400">Tuition collected against faculty payroll and advertising</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold"><span className="w-3 h-3 bg-emerald-500 rounded"></span> Invoiced Revenue</span>
                    <span className="flex items-center gap-1 text-rose-600 font-semibold"><span className="w-3 h-3 bg-rose-400 rounded"></span> Expenses</span>
                  </div>
                </div>
                <div className="h-44 w-full flex items-end justify-between gap-3 px-4 pt-6 border-b border-slate-200">
                  {[
                    { month: 'May', rev: 55, exp: 20 },
                    { month: 'Jun', rev: 68, exp: 25 },
                    { month: 'Jul', rev: 80, exp: 32 },
                    { month: 'Aug', rev: 72, exp: 28 },
                    { month: 'Sep', rev: 88, exp: 30 },
                    { month: 'Oct (Current)', rev: 95, exp: 25 },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <div className="w-full flex justify-center items-end gap-1.5 h-full">
                        <div className="w-5 bg-emerald-500 hover:bg-emerald-600 rounded-t transition" style={{ height: `${b.rev}%` }}></div>
                        <div className="w-5 bg-rose-400 hover:bg-rose-500 rounded-t transition" style={{ height: `${b.exp}%` }}></div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium mt-1">{b.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 text-xs text-slate-500">
                  <span>Net Operating Margin: <strong className="text-slate-800">{netProfitMargin}%</strong></span>
                  <button onClick={() => setActiveTab('finance')} className="text-emerald-600 font-bold hover:underline">View Detailed SOPL / SOFP Statements →</button>
                </div>
              </div>
            </div>

            {/* Line Chart & Pipeline Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">30-Day Admissions Momentum</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Daily registered students trend</p>
                </div>
                <div className="py-4">
                  <svg className="w-full h-28" viewBox="0 0 300 100" fill="none">
                    <path d="M0,80 Q30,65 60,70 T120,45 T180,50 T240,25 T300,10" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M0,80 Q30,65 60,70 T120,45 T180,50 T240,25 T300,10 L300,100 L0,100 Z" fill="#3B82F6" opacity="0.12" />
                  </svg>
                </div>
                <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
                  <span className="text-emerald-600 font-bold flex items-center gap-1"><Icon name="trending-up" className="w-3.5 h-3.5" /> +28% vs Last Month</span>
                  <span className="text-slate-400">{studentsRoster.length} Total Enrolled</span>
                </div>
              </div>
              
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">Recent Admissions Stream</h3>
                    <p className="text-xs text-slate-400">Click a student to view their admission dossier</p>
                  </div>
                  <button onClick={() => setActiveTab('students')} className="text-xs text-emerald-600 font-bold hover:underline">View Full Directory →</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">Candidate</th>
                        <th className="p-2.5">Target Course</th>
                        <th className="p-2.5">Instructor</th>
                        <th className="p-2.5 text-right">Direct Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {studentsRoster.slice(0, 4).map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => setInspectedStudent(row)}>
                          <td className="p-2.5 font-semibold text-slate-900 flex items-center gap-2">
                            <img src={row.photo} alt={row.name} className="w-6 h-6 rounded-full object-cover border" />
                            <div>
                              {row.name}
                              <p className="text-[10px] text-slate-400 font-normal">{row.phone}</p>
                            </div>
                          </td>
                          <td className="p-2.5 text-slate-600">
                            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">{row.courses[0]}</span>
                          </td>
                          <td className="p-2.5 font-semibold text-slate-800">{row.trainer}</td>
                          <td className="p-2.5 text-right">
                            <button 
                              onClick={(e) => { e.stopPropagation(); openWhatsApp(row.phone, row.name, row.courses); }}
                              className="bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white px-2.5 py-1 rounded border border-emerald-300 transition text-[11px] font-semibold inline-flex items-center gap-1"
                            >
                              <Icon name="send" className="w-3 h-3" /> WhatsApp
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* NEW VIEW: GLOBAL TIMETABLE & ROOM ALLOCATION             */}
        {/* ======================================================== */}
        {activeTab === 'timetable' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Global Timetable & Room Matrix</h3>
                  <p className="text-xs text-slate-400">Master schedule to prevent classroom and faculty double-booking</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> IELTS</span>
                  <span className="flex items-center gap-1 font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Spoken</span>
                  <span className="flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-amber-500"></span> PTE</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-bold">
                    <tr>
                      <th className="p-3 border border-slate-200 w-32">Time Slot</th>
                      <th className="p-3 border border-slate-200">Lab A (Audio)</th>
                      <th className="p-3 border border-slate-200">Room 2 (Fluency)</th>
                      <th className="p-3 border border-slate-200">Room 3 (General)</th>
                      <th className="p-3 border border-slate-200">Room 4 (PTE Lab)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">10:00 AM - 11:30 AM</td>
                      <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Academic<br/><span className="font-normal text-emerald-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">03:00 PM - 04:30 PM</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td>
                      <td className="p-3 border border-slate-200 bg-purple-50 text-purple-900 font-bold text-[11px]">Business English<br/><span className="font-normal text-purple-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Intensive<br/><span className="font-normal text-amber-700">Sir Bilal</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">06:00 PM - 08:00 PM</td>
                      <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Masterclass<br/><span className="font-normal text-emerald-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Maintenance</td>
                      <td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Practice<br/><span className="font-normal text-amber-700">Sir Bilal</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PURE ISOLATED LMS ACADEMIC PORTAL                         */}
        {/* ======================================================== */}
        {activeTab === 'lms' && (
          <div className="flex-1 flex flex-col bg-[#F8FAFC]">
            {/* 1. LMS Top Header */}
            <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-xs sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-600 p-1">
                  <Icon name="menu" className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                    LMS
                  </div>
                  <div>
                    <h2 className="font-black text-slate-900 text-sm tracking-wide">LEARNING MANAGEMENT SYSTEM</h2>
                    <p className="text-[10px] text-slate-400">British Institute Student & Faculty Academic Desk</p>
                  </div>
                </div>
              </div>

              {/* Portal Role Switcher: Student vs Teacher */}
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-1 rounded-xl flex items-center border border-slate-200 text-xs font-bold">
                  <button 
                    onClick={() => setLmsRole('student')}
                    className={`px-3 py-1.5 rounded-lg transition ${lmsRole === 'student' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    🎓 Student Portal
                  </button>
                  <button 
                    onClick={() => setLmsRole('teacher')}
                    className={`px-3 py-1.5 rounded-lg transition ${lmsRole === 'teacher' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    👨‍🏫 Faculty / Teacher Portal
                  </button>
                </div>

                <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                  <img 
                    src={lmsRole === 'student' ? studentsRoster[0].photo : staffRoster[0].photo} 
                    alt="Active User" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500" 
                  />
                  <div className="hidden sm:block text-left text-xs">
                    <p className="font-bold text-slate-800 leading-tight">{lmsRole === 'student' ? studentsRoster[0].name : 'Sir Saif'}</p>
                    <p className="text-[10px] text-slate-400">{lmsRole === 'student' ? 'Roll: STU-101' : 'Head IELTS Trainer'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Interactive Clickable LMS Top Navigation Bar */}
            <div className="bg-[#0A1128] text-slate-300 px-6 py-2 flex items-center justify-between text-xs font-semibold overflow-x-auto border-b border-slate-800">
              <div className="flex items-center gap-2">
                {[
                  { id: 'dashboard', label: 'Dashboard' },
                  { id: 'program', label: 'My Program & Outline' },
                  { id: 'assignments', label: 'Assignments & Quizzes' },
                  { id: 'lectures', label: 'Lecture Notes & Videos' },
                  { id: 'results', label: 'Assessment Results' },
                ].map(tab => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveLmsSubTab(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg transition whitespace-nowrap ${
                      activeLmsSubTab === tab.id 
                        ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-[11px] text-slate-400 hidden lg:block font-mono">
                Academic Session: <strong className="text-amber-400">Fall 2026</strong>
              </div>
            </div>

            {/* 3. LMS Tab Content Router */}
            <div className="p-6 md:p-8 space-y-6">

              {/* SUB-VIEW 1: DASHBOARD (6 PRISMATIC BLOCKS & PLANNER) */}
              {activeLmsSubTab === 'dashboard' && lmsRole === 'student' && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div 
                      onClick={() => setShowAnnouncementsModal(true)}
                      className="bg-[#5B21B6] hover:bg-[#4C1D95] cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="bell" className="w-5 h-5 text-amber-300" />
                          <span className="text-3xl font-black">11</span>
                        </div>
                        <h4 className="font-bold text-sm">Announcements</h4>
                        <p className="text-[11px] text-purple-200">Mock speaking slots confirmed</p>
                      </div>
                      <span className="text-xs bg-purple-700/60 px-3 py-1 rounded-lg">View Board →</span>
                    </div>

                    <div 
                      onClick={() => setActiveLmsSubTab('program')}
                      className="bg-[#1E293B] hover:bg-slate-800 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="graduation-cap" className="w-5 h-5 text-emerald-400" />
                          <h4 className="font-extrabold text-lg">Program</h4>
                        </div>
                        <p className="text-xs text-slate-300">Course Outline & Syllabus</p>
                        <p className="text-[11px] text-emerald-400 font-semibold">IELTS Academic 7.5+ Masterclass</p>
                      </div>
                      <span className="text-xs bg-slate-800 px-3 py-1 rounded-lg">Outline →</span>
                    </div>

                    <div 
                      onClick={() => setActiveLmsSubTab('lectures')}
                      className="bg-[#0F172A] hover:bg-slate-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="book" className="w-5 h-5 text-blue-400" />
                          <h4 className="font-extrabold text-lg">Library</h4>
                        </div>
                        <p className="text-xs text-slate-300">Vocabulary & Audio Drills</p>
                        <p className="text-[11px] text-blue-300">18 PDF Handouts Ready</p>
                      </div>
                      <span className="text-xs bg-slate-800 px-3 py-1 rounded-lg">View List →</span>
                    </div>

                    <div 
                      onClick={() => setShowAttendanceModal(true)}
                      className="bg-[#1E3A8A] hover:bg-blue-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="clock" className="w-5 h-5 text-cyan-300" />
                          <span className="text-3xl font-black">94%</span>
                        </div>
                        <h4 className="font-bold text-sm">Attendance Ratio</h4>
                        <p className="text-[11px] text-blue-200">19 of 20 Sessions Attended</p>
                      </div>
                      <span className="text-xs bg-blue-900/60 px-3 py-1 rounded-lg text-emerald-300">Log Details →</span>
                    </div>

                    <div 
                      onClick={() => setShowProgressModal(true)}
                      className="bg-[#15803D] hover:bg-green-800 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="trending-up" className="w-5 h-5 text-amber-300" />
                          <h4 className="font-extrabold text-lg">Progress</h4>
                        </div>
                        <p className="text-xs text-green-100">Course Completion Tracker</p>
                        <p className="text-[11px] text-amber-200 font-bold">Current CEFR: Band 7.5 Est.</p>
                      </div>
                      <span className="text-xs bg-green-900/60 px-3 py-1 rounded-lg">View Matrix →</span>
                    </div>

                    <div 
                      onClick={() => setShowReceiptModal(true)}
                      className="bg-[#7F1D1D] hover:bg-rose-900 cursor-pointer text-white p-5 rounded-2xl shadow-sm flex items-center justify-between transition transform hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon name="wallet" className="w-5 h-5 text-emerald-300" />
                          <h4 className="font-extrabold text-lg">Tuition Status</h4>
                        </div>
                        <p className="text-xs text-rose-200">British Institute Fee Ledger</p>
                        <p className="text-[11px] text-emerald-300 font-bold">100% Cleared (Voucher Paid)</p>
                      </div>
                      <span className="text-xs bg-rose-950/60 px-3 py-1 rounded-lg">Receipt →</span>
                    </div>
                  </div>

                  {/* Weekly Lecture Schedule Planner */}
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                    <div className="bg-[#0A1128] text-white px-6 py-3.5 flex justify-between items-center text-xs">
                      <span className="font-extrabold uppercase tracking-wider">Weekly Lecture Planner</span>
                      <span className="text-amber-400 font-mono">Week-4 (24-10-2026 to 31-10-2026)</span>
                    </div>
                    <div className="p-6 divide-y divide-slate-100 text-xs">
                      {[
                        { day: 'Monday (06:00 PM)', subject: 'IELTS Academic Writing Task 2 - Essay Structure', instructor: 'Sir Saif', room: 'Lab A' },
                        { day: 'Wednesday (06:00 PM)', subject: 'Spoken English Accent Neutralization & Phonetics', instructor: 'Ms. Rabia Zafar', room: 'Room 2' },
                        { day: 'Friday (06:00 PM)', subject: 'Mock Speaking Diagnostic 1-on-1 Interviews', instructor: 'Sir Saif', room: 'Audio Booth 1' },
                      ].map((slot, i) => (
                        <div key={i} className="py-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                          <div>
                            <span className="font-extrabold text-slate-900 block">{slot.day}</span>
                            <span className="text-slate-600 font-medium">{slot.subject}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] text-slate-500 font-medium">Instructor: <strong>{slot.instructor}</strong> ({slot.room})</span>
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-md">Confirmed</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* SUB-VIEW 2: PROGRAM & OUTLINE */}
              {activeLmsSubTab === 'program' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2.5 py-0.5 rounded-full uppercase">Official Syllabus</span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">IELTS Academic 7.5+ Masterclass — Course Outline</h3>
                    <p className="text-xs text-slate-400">Head Instructor: Sir Saif | Duration: 8 Weeks (60 Total Contact Hours)</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    {[
                      { week: 'Week 1-2', title: 'Diagnostic Band Assessment & Listening Mastery', topics: 'Section 1 to 4 question variations, map labeling, distracted numbers, and accent decoding.' },
                      { week: 'Week 3-4', title: 'Academic Reading - Skimming & Scanning', topics: 'True/False/Not Given traps, heading matches, paragraph summaries, and time management strategies.' },
                      { week: 'Week 5-6', title: 'Writing Task 1 & Task 2 Argumentative Essays', topics: 'Complex grammatical structures, lexical resource, cohesive devices, and band 8.0 introduction hooks.' },
                      { week: 'Week 7-8', title: '1-on-1 Speaking Mock Tests & Final Diagnostics', topics: 'Part 1, 2, and 3 fluency drills, idioms usage, cue card speech flow, and examiner simulation tests.' },
                    ].map((w, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                        <span className="font-mono font-bold text-indigo-600 text-[11px]">{w.week}</span>
                        <h4 className="font-extrabold text-slate-900 text-sm">{w.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{w.topics}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUB-VIEW 3: ASSIGNMENTS & QUIZZES */}
              {activeLmsSubTab === 'assignments' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base">Coursework Submissions & Evaluation Vault</h3>
                      <p className="text-xs text-slate-400">Upload your coursework in Word (.docx), Excel (.xlsx), PDF (.pdf), or PowerPoint (.pptx)</p>
                    </div>
                    <button 
                      onClick={() => setShowAssignmentModal(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition"
                    >
                      <Icon name="upload" className="w-4 h-4" /> + Upload Assignment File
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3">Submission ID</th>
                          <th className="p-3">Assignment File</th>
                          <th className="p-3">Format</th>
                          <th className="p-3">Faculty Evaluator</th>
                          <th className="p-3">Date</th>
                          <th className="p-3 text-right">Grading Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {studentAssignments.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-50 transition">
                            <td className="p-3 font-mono font-bold text-slate-500">{sub.id}</td>
                            <td className="p-3 font-bold text-slate-900 flex items-center gap-2">
                              <Icon name="file-text" className="w-4 h-4 text-indigo-600" />
                              {sub.file}
                            </td>
                            <td className="p-3">
                              <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                                {sub.format}
                              </span>
                            </td>
                            <td className="p-3 font-semibold text-slate-800">{sub.teacher}</td>
                            <td className="p-3 font-mono text-slate-500">{sub.date}</td>
                            <td className="p-3 text-right">
                              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                                sub.status.includes('Graded') ? 'bg-emerald-100 text-emerald-800' :
                                sub.status.includes('Pending') ? 'bg-amber-100 text-amber-800' :
                                'bg-rose-100 text-rose-800'
                              }`}>
                                {sub.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SUB-VIEW 4: LECTURE NOTES & VIDEOS */}
              {activeLmsSubTab === 'lectures' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-950 to-indigo-900 text-white p-6 rounded-2xl flex justify-between items-center shadow-md">
                    <div>
                      <h3 className="text-xl font-black">Video Masterclasses & Downloadable Handouts</h3>
                      <p className="text-xs text-slate-300">Access high-definition recordings and printable worksheets</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {courseModules.map((item) => (
                      <div key={item.id} className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between">
                        <div className="p-5 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded">{item.type}</span>
                            <Icon name="play" className="w-4 h-4 text-emerald-600" />
                          </div>
                          <h4 className="font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>
                          <p className="text-xs text-slate-500">Instructor: <strong className="text-slate-700">{item.faculty}</strong></p>
                        </div>
                        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500">{item.duration}</span>
                          <button 
                            onClick={() => alert(`Accessing ${item.title} from Cloudflare R2 vault!`)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1 rounded text-[11px] flex items-center gap-1 shadow-xs transition"
                          >
                            <Icon name="download" className="w-3 h-3" /> Download PDF
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUB-VIEW 5: ASSESSMENT RESULTS */}
              {activeLmsSubTab === 'results' && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 md:p-8 max-w-2xl mx-auto space-y-6">
                  <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                    <div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded uppercase">Verified Report Card</span>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-1">{studentResultReport.examTitle}</h3>
                      <p className="text-xs text-slate-400">Candidate: {studentResultReport.candidate} | Date: {studentResultReport.date}</p>
                    </div>
                    <div className="text-center bg-[#0A1128] text-white p-3 rounded-xl min-w-[75px]">
                      <span className="text-[9px] uppercase tracking-wider text-emerald-400 font-bold block">Overall</span>
                      <span className="text-2xl font-black">{studentResultReport.overallBand}</span>
                    </div>
                  </div>

                  {/* 4 Skill Score Breakdown */}
                  <div className="grid grid-cols-4 gap-3 text-center text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-400 font-semibold">Listening</p>
                      <p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.listening}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-400 font-semibold">Reading</p>
                      <p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.reading}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-400 font-semibold">Writing</p>
                      <p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.writing}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <p className="text-slate-400 font-semibold">Speaking</p>
                      <p className="text-xl font-black text-slate-900 mt-1">{studentResultReport.speaking}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1.5 border border-slate-200">
                    <span className="font-extrabold text-slate-900 block">Evaluator Assessment Notes:</span>
                    <p className="text-slate-600 leading-relaxed italic">{studentResultReport.remarks}</p>
                    <p className="text-right text-[10px] text-slate-400 font-bold pt-1">— Verified by {studentResultReport.evaluator}</p>
                  </div>

                  <button 
                    onClick={() => window.print()}
                    className="w-full bg-[#0A1128] hover:bg-slate-900 text-white font-bold py-3 rounded-xl text-xs transition shadow-sm"
                  >
                    Print / Download Verified Scorecard (PDF)
                  </button>
                </div>
              )}

              {/* TEACHER ROLE VIEW */}
              {lmsRole === 'teacher' && (
                <div className="space-y-6">
                  <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Faculty Curriculum Management
                      </span>
                      <h3 className="text-xl font-black">Instructor Portal — Sir Saif (Head IELTS)</h3>
                      <p className="text-xs text-slate-300">Publish video masterclasses, distribute handouts, and evaluate student work.</p>
                    </div>

                    <button 
                      onClick={() => setShowTeacherUploadModal(true)}
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-xs flex items-center gap-2 transition shrink-0"
                    >
                      <Icon name="upload" className="w-4 h-4" /> + Publish Lecture / Notes
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
                    <h4 className="font-extrabold text-slate-900 text-sm">Published Lecture Materials</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {courseModules.map((mod) => (
                        <div key={mod.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                          <div className="flex justify-between items-start">
                            <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">{mod.type}</span>
                            <span className="text-[10px] font-mono font-bold text-slate-500">{mod.duration}</span>
                          </div>
                          <h5 className="font-bold text-xs text-slate-900 leading-snug">{mod.title}</h5>
                          <p className="text-[11px] text-slate-500">Instructor: <strong>{mod.faculty}</strong></p>
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
        {/* VIEW: STUDENTS ROSTER WITH MULTI-FIELD LIVE SEARCH       */}
        {/* ======================================================== */}
        {activeTab === 'students' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Students Academic Dossier Directory</h3>
                  <p className="text-xs text-slate-400">Click any student row to view full admission dossier and CNIC details</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <input 
                      type="text" 
                      placeholder="Search name, phone, CNIC, roll #..." 
                      value={studentSearchQuery}
                      onChange={(e) => setStudentSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-hidden"
                    />
                    <div className="absolute left-2.5 top-2.5 text-slate-400">
                      <Icon name="search" className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <select 
                    value={selectedCourseFilter}
                    onChange={(e) => setSelectedCourseFilter(e.target.value)}
                    className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="All">All Courses</option>
                    <option value="IELTS">IELTS Academic</option>
                    <option value="Spoken">Spoken English</option>
                    <option value="PTE">PTE Intensive</option>
                    <option value="German">German Language</option>
                    <option value="Business">Business English</option>
                  </select>

                  <button 
                    onClick={() => setShowAddStudentModal(true)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs"
                  >
                    <Icon name="plus" className="w-3.5 h-3.5" /> + New Admission
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Roll #</th>
                      <th className="p-3">Student Photo & Name</th>
                      <th className="p-3">Enrolled Program</th>
                      <th className="p-3">Shift & Timings</th>
                      <th className="p-3">Tuition Fee</th>
                      <th className="p-3">Fee Status</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredStudents.map((stu) => (
                      <tr 
                        key={stu.id} 
                        onClick={() => setInspectedStudent(stu)}
                        className="hover:bg-slate-50 cursor-pointer transition"
                      >
                        <td className="p-3 font-mono font-bold text-slate-500">{stu.id}</td>
                        <td className="p-3 font-bold text-slate-900 flex items-center gap-2.5">
                          <img 
                            src={stu.photo} 
                            alt={stu.name} 
                            className="w-9 h-9 rounded-full object-cover border-2 border-emerald-500 shrink-0 shadow-xs" 
                          />
                          <div>
                            {stu.name}
                            <p className="text-[10px] text-slate-400 font-mono font-normal">{stu.phone} • {stu.cnic}</p>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {stu.courses.map((c, i) => (
                              <span key={i} className="text-[10px] bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-semibold">
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-slate-800 block">{stu.shift}</span>
                          <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                            <Icon name="clock" className="w-2.5 h-2.5 text-emerald-600" /> {stu.timing}
                          </span>
                        </td>
                        <td className="p-3 font-semibold text-slate-800">PKR {stu.feePaid.toLocaleString()}</td>
                        <td className="p-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${stu.feeStatus.includes('Paid') ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                            {stu.feeStatus}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex justify-end gap-2">
                            {stu.feeStatus.includes('Pending') && (
                              <button 
                                onClick={(e) => { e.stopPropagation(); setSelectedChallanStudent(stu); setShowChallanModal(true); }}
                                className="bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white px-2.5 py-1 rounded border border-rose-200 transition text-[11px] font-bold"
                              >
                                Print Challan
                              </button>
                            )}
                            <span className="text-[11px] font-bold text-blue-600 hover:underline mt-1 block">
                              View Dossier →
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW: LEADS & RETARGETING HUB                            */}
        {/* ======================================================== */}
        {activeTab === 'leads' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Dormant Walk-Ins (Visited but did not enroll)</h3>
                  <p className="text-xs text-slate-400">Trigger WhatsApp recovery offers to convert offline walk-ins</p>
                </div>
                <button 
                  onClick={() => alert('Synced dropped candidate numbers to Meta Custom Audience!')}
                  className="bg-indigo-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg"
                >
                  Sync to Meta Ads
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Candidate</th>
                      <th className="p-3">Visited Date</th>
                      <th className="p-3">Course Inquired</th>
                      <th className="p-3">Drop-Off Reason</th>
                      <th className="p-3">Special Offer</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {retargetLeads.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-50 transition">
                        <td className="p-3 font-bold text-slate-900">{l.name}<p className="text-[10px] text-slate-400">{l.phone}</p></td>
                        <td className="p-3 text-slate-600 font-medium">{l.visitedDate}</td>
                        <td className="p-3 font-semibold text-slate-800">{l.interest}</td>
                        <td className="p-3 text-slate-500 italic">{l.reason}</td>
                        <td className="p-3"><span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">{l.suggestedOffer}</span></td>
                        <td className="p-3 text-right">
                          <button 
                            onClick={() => alert(`Retarget WhatsApp triggered for ${l.name}`)}
                            className="bg-emerald-600 text-white font-bold px-3 py-1 rounded text-[11px]"
                          >
                            Send Offer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW: FACULTY & STAFF ROSTER                            */}
        {/* ======================================================== */}
        {activeTab === 'staff' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Faculty & Administration Team Hub</h3>
                  <p className="text-xs text-slate-400">Classroom allocations, assigned shifts, duty status, and payroll transparency</p>
                </div>
                <button 
                  onClick={() => setShowAddStaffModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs transition"
                >
                  <Icon name="plus" className="w-3.5 h-3.5" /> + Add Faculty / Staff
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffRoster.map((staff) => (
                  <div key={staff.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={staff.photo} 
                        alt={staff.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shrink-0 shadow-xs" 
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{staff.name}</h4>
                        <p className="text-[11px] text-slate-500">{staff.role}</p>
                        <span className="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded-full">
                          {staff.dept}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs space-y-1 text-slate-600 pt-2 border-t border-slate-200">
                      <p><strong className="text-slate-800">Shift:</strong> {staff.shift}</p>
                      <p><strong className="text-slate-800">Location:</strong> {staff.classroom}</p>
                      <p><strong className="text-slate-800">Honorarium:</strong> PKR {staff.salary.toLocaleString()}/mo</p>
                      <p className="font-mono text-[10px] text-slate-400">{staff.email} • {staff.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW: FINANCIALS - AUDITED SOPL & SOFP STATEMENTS        */}
        {/* ======================================================== */}
        {activeTab === 'finance' && (
          <div className="p-4 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Operating Revenue</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">PKR {totalTuitionRevenue.toLocaleString()}</h3>
                <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Course Invoices & Diagnostic Fees</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-400 font-semibold uppercase">Total Operating Outflows</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">PKR {totalExpenses.toLocaleString()}</h3>
                <p className="text-[11px] text-rose-600 font-semibold mt-0.5">Payroll, Marketing & Campus Rent</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-emerald-300 shadow-xs bg-emerald-50/30">
                <span className="text-xs text-emerald-700 font-semibold uppercase">Net Operating Profit</span>
                <h3 className="text-2xl font-black text-emerald-700 mt-1">PKR {netOperatingProfit.toLocaleString()}</h3>
                <p className="text-[11px] text-emerald-800 font-semibold mt-0.5">Net Profit Margin: {netProfitMargin}%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* SOPL Statement */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900">Statement of Profit or Loss (SOPL)</h3>
                    <p className="text-[11px] text-slate-400">Click any row below to view itemized transaction vouchers</p>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-700 font-mono font-bold px-2 py-0.5 rounded">Quarterly</span>
                </div>

                <div className="text-xs space-y-2">
                  <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-1">Income Streams</p>
                  {[
                    { title: 'IELTS Academic & General Tuition', amount: 364000, category: 'Revenue', notes: 'Collected from IELTS cohorts under Sir Saif' },
                    { title: 'Spoken English Fluency & Accent Batches', amount: 252000, category: 'Revenue', notes: 'Morning and evening conversational cohorts' },
                    { title: 'PTE Academic Intensive Program', amount: 150000, category: 'Revenue', notes: 'Computer lab cohorts' },
                    { title: 'Corporate & VIP English Packages', amount: 140000, category: 'Revenue', notes: 'Executive weekend batches' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['INV-2026-01', 'INV-2026-02', 'INV-2026-03'] })}
                      className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100"
                    >
                      <span className="text-slate-700 font-medium hover:text-emerald-700">{item.title}</span>
                      <span className="font-bold text-slate-900">PKR {item.amount.toLocaleString()}</span>
                    </div>
                  ))}

                  <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-3">Operating Expenditures</p>
                  {[
                    { title: 'Faculty & Instructor Salaries (Sir Saif / Team)', amount: 185000, category: 'Payroll Outflow', notes: 'Disbursed via bank transfer on the 1st of the month' },
                    { title: 'Meta & TikTok Digital Advertising Campaigns', amount: 75000, category: 'Marketing Outflow', notes: 'Credit card payments to Meta and TikTok Ads' },
                    { title: 'Campus Facility Lease & High-Speed Utilities', amount: 80000, category: 'Utilities Outflow', notes: 'Nayatel fiber, electricity, and campus floor rent' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['EXP-401', 'EXP-402', 'EXP-403'] })}
                      className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100"
                    >
                      <span className="text-slate-700 font-medium hover:text-rose-700">{item.title}</span>
                      <span className="font-bold text-rose-600">- PKR {item.amount.toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="flex justify-between py-2 font-black text-slate-900 bg-emerald-50 text-emerald-900 px-3 rounded-lg mt-3">
                    <span>Net Operating Profit</span>
                    <span>PKR {netOperatingProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* SOFP Statement */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-5">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 mb-3">
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900">Statement of Financial Position (SOFP)</h3>
                    <p className="text-[11px] text-slate-400">Assets, liabilities, and retained capital reserves</p>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded">Balanced</span>
                </div>

                <div className="text-xs space-y-2">
                  <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-1">Current Assets</p>
                  {[
                    { title: 'Bank Account Balance (Meezan / HBL Hub)', amount: 540000, category: 'Asset', notes: 'Operational checking account' },
                    { title: 'Mobile Merchant Wallets (JazzCash / EasyPaisa)', amount: 160000, category: 'Asset', notes: 'Reception counter merchant wallets' },
                    { title: 'Outstanding Student Tuition Receivables', amount: 95000, category: 'Asset', notes: 'Partial fee installments due this week' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['BNK-STMT-99', 'MERCH-01'] })}
                      className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100"
                    >
                      <span className="text-slate-700 font-medium hover:text-emerald-700">{item.title}</span>
                      <span className="font-bold text-slate-900">PKR {item.amount.toLocaleString()}</span>
                    </div>
                  ))}

                  <p className="font-bold text-slate-700 uppercase text-[10px] tracking-wider pt-3">Non-Current Assets</p>
                  {[
                    { title: 'Language Lab Desktop Terminals & Sound Systems', amount: 350000, category: 'Asset', notes: 'Computer lab hardware for IELTS/PTE' },
                    { title: 'Classroom Whiteboards, Furniture & Interior', amount: 210000, category: 'Asset', notes: 'Fixtures and fittings across 4 classrooms' },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setInspectedLedgerItem({ ...item, vouchers: ['ASSET-REG-01', 'ASSET-REG-02'] })}
                      className="flex justify-between py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer transition border-b border-slate-100"
                    >
                      <span className="text-slate-700 font-medium hover:text-emerald-700">{item.title}</span>
                      <span className="font-bold text-slate-900">PKR {item.amount.toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="flex justify-between py-2 font-black text-slate-900 bg-slate-100 px-3 rounded-lg mt-3">
                    <span>Total Institute Net Worth</span>
                    <span>PKR 1,355,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW: EXPENSES LEDGER WITH DATE FILTER                   */}
        {/* ======================================================== */}
        {activeTab === 'expenses' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Expense Outflow & Voucher Ledger</h3>
                  <p className="text-xs text-slate-400">Click any voucher row to inspect approval reference and receipt status</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                    {(['all', 'today', 'yesterday'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setExpenseDateFilter(t)}
                        className={`px-3 py-1 rounded-md capitalize font-bold transition ${
                          expenseDateFilter === t ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={() => setShowAddExpenseModal(true)}
                    className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs transition"
                  >
                    <Icon name="plus" className="w-3.5 h-3.5" /> + Log Expense
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Voucher #</th>
                      <th className="p-3">Expense Title & Description</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Disbursed To</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Payment Method</th>
                      <th className="p-3 text-right">Amount (PKR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredExpenses.map((exp) => (
                      <tr 
                        key={exp.id} 
                        onClick={() => setInspectedExpense(exp)}
                        className="hover:bg-slate-50 cursor-pointer transition"
                      >
                        <td className="p-3 font-mono font-bold text-slate-500">{exp.id}</td>
                        <td className="p-3 font-bold text-slate-900 flex items-center gap-2">
                          {exp.receiptPhoto && (
                            <img src={exp.receiptPhoto} alt="Receipt" className="w-6 h-6 rounded object-cover border border-slate-300" />
                          )}
                          <div>
                            {exp.title}
                            <p className="text-[10px] text-slate-400 font-mono font-normal">Ref: {exp.reference}</p>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            exp.category === 'Marketing' ? 'bg-blue-100 text-blue-800' :
                            exp.category === 'Payroll' ? 'bg-purple-100 text-purple-800' :
                            'bg-slate-100 text-slate-800'
                          }`}>
                            {exp.category}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600 font-medium">{exp.paidTo}</td>
                        <td className="p-3 font-mono text-slate-500">{exp.date}</td>
                        <td className="p-3 text-slate-600">{exp.method}</td>
                        <td className="p-3 text-right font-black text-rose-600">- PKR {exp.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* VIEW: SETTINGS & ADMINISTRATION                          */}
        {/* ======================================================== */}
        {activeTab === 'settings' && (
          <div className="p-4 md:p-8 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Academy Administration & Faculty Roster Settings</h3>
                  <p className="text-xs text-slate-400">Add new teachers, instructors, counselors, and configure campus parameters</p>
                </div>
                <button 
                  onClick={() => setShowAddStaffModal(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2 rounded-lg flex items-center gap-1.5 shadow-sm transition"
                >
                  <Icon name="plus" className="w-3.5 h-3.5" /> + Add Faculty / Staff Member
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {staffRoster.map((staff) => (
                  <div key={staff.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={staff.photo} alt={staff.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{staff.name}</h4>
                        <p className="text-[11px] text-slate-500">{staff.role}</p>
                      </div>
                    </div>
                    <div className="text-xs space-y-1 text-slate-600 pt-2 border-t border-slate-200">
                      <p><strong className="text-slate-800">Shift:</strong> {staff.shift}</p>
                      <p><strong className="text-slate-800">Location:</strong> {staff.classroom}</p>
                      <p><strong className="text-slate-800">Salary:</strong> PKR {staff.salary.toLocaleString()}/mo</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* NEW VIEW: GLOBAL TIMETABLE & ROOM ALLOCATION             */}
        {/* ======================================================== */}
        {activeTab === 'timetable' && (
          <div className="p-4 md:p-8 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Global Timetable & Room Matrix</h3>
                  <p className="text-xs text-slate-400">Master schedule to prevent classroom and faculty double-booking</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> IELTS</span>
                  <span className="flex items-center gap-1 font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Spoken</span>
                  <span className="flex items-center gap-1 font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded"><span className="w-2 h-2 rounded-full bg-amber-500"></span> PTE</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-600 font-bold">
                    <tr>
                      <th className="p-3 border border-slate-200 w-32">Time Slot</th>
                      <th className="p-3 border border-slate-200">Lab A (Audio)</th>
                      <th className="p-3 border border-slate-200">Room 2 (Fluency)</th>
                      <th className="p-3 border border-slate-200">Room 3 (General)</th>
                      <th className="p-3 border border-slate-200">Room 4 (PTE Lab)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">10:00 AM - 11:30 AM</td>
                      <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Academic<br/><span className="font-normal text-emerald-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">03:00 PM - 04:30 PM</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 bg-blue-50 text-blue-900 font-bold text-[11px]">Spoken English<br/><span className="font-normal text-blue-700">Ms. Rabia</span></td>
                      <td className="p-3 border border-slate-200 bg-purple-50 text-purple-900 font-bold text-[11px]">Business English<br/><span className="font-normal text-purple-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Intensive<br/><span className="font-normal text-amber-700">Sir Bilal</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-mono font-bold bg-slate-50">06:00 PM - 08:00 PM</td>
                      <td className="p-3 border border-slate-200 bg-emerald-50 text-emerald-900 font-bold text-[11px]">IELTS Masterclass<br/><span className="font-normal text-emerald-700">Sir Saif</span></td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Empty Slot</td>
                      <td className="p-3 border border-slate-200 text-slate-400 italic">Maintenance</td>
                      <td className="p-3 border border-slate-200 bg-amber-50 text-amber-900 font-bold text-[11px]">PTE Practice<br/><span className="font-normal text-amber-700">Sir Bilal</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* INSPECTION DRAWER: STUDENT FULL DOSSIER WITH IMAGE      */}
        {/* ======================================================== */}
        {inspectedStudent && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={inspectedStudent.photo} 
                      alt={inspectedStudent.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm" 
                    />
                    <div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-mono font-bold px-2 py-0.5 rounded">
                        {inspectedStudent.id}
                      </span>
                      <h3 className="font-extrabold text-slate-900 text-lg mt-0.5">{inspectedStudent.name}</h3>
                      <p className="text-xs text-slate-400">CNIC: {inspectedStudent.cnic}</p>
                    </div>
                  </div>
                  <button onClick={() => setInspectedStudent(null)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                    <p><strong className="text-slate-700">Father / Guardian:</strong> {inspectedStudent.guardian}</p>
                    <p><strong className="text-slate-700">WhatsApp Contact:</strong> {inspectedStudent.phone}</p>
                    <p><strong className="text-slate-700">Enrolled Date:</strong> {inspectedStudent.date}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                    <p><strong className="text-emerald-900">Shift:</strong> {inspectedStudent.shift}</p>
                    <p><strong className="text-emerald-900">Class Timings:</strong> {inspectedStudent.timing}</p>
                    <p><strong className="text-emerald-900">Assigned Faculty:</strong> {inspectedStudent.trainer}</p>
                    <p><strong className="text-emerald-900">Attendance Ratio:</strong> {inspectedStudent.attendancePct}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-800">Enrolled Programs:</p>
                    <ul className="list-disc list-inside text-slate-600">
                      {inspectedStudent.courses.map((c: string, idx: number) => <li key={idx}>{c}</li>)}
                    </ul>
                    <p className="font-bold text-slate-900 pt-2">Tuition Invoiced: PKR {inspectedStudent.feePaid.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex gap-2">
                <button 
                  onClick={() => alert(`Printing verified student registration card for ${inspectedStudent.name}`)}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition"
                >
                  Print Verified Dossier
                </button>
                <button 
                  onClick={() => setInspectedStudent(null)}
                  className="px-4 py-2.5 border border-slate-300 rounded-lg text-slate-600 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* NEW FEATURE: PRINTABLE FEE CHALLAN / PAYMENT MODAL       */}
        {/* ======================================================== */}
        {showChallanModal && selectedChallanStudent && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-xs space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center gap-2">
                  <Icon name="printer" className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-extrabold text-slate-900 text-sm">Issue Fee Challan</h3>
                </div>
                <button onClick={() => { setShowChallanModal(false); setSelectedChallanStudent(null); }}><Icon name="x" className="w-4 h-4 text-slate-400" /></button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-slate-700">
                <h4 className="font-black text-slate-900 text-center text-sm border-b pb-2 mb-2">{institute.name}</h4>
                <div className="flex justify-between"><span>Candidate:</span> <span className="font-bold text-slate-900">{selectedChallanStudent.name}</span></div>
                <div className="flex justify-between"><span>Roll Number:</span> <span className="font-mono font-bold text-slate-900">{selectedChallanStudent.id}</span></div>
                <div className="flex justify-between"><span>Program:</span> <span className="font-bold text-slate-900">{selectedChallanStudent.courses[0]}</span></div>
                <div className="flex justify-between pt-2 border-t mt-2">
                  <span>Pending Fee Due:</span> 
                  <span className="font-black text-rose-600 text-sm">PKR {selectedChallanStudent.feeStatus.match(/\d+k/)?.[0]?.replace('k', ',000') || '15,000'}</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button onClick={() => { setShowChallanModal(false); setSelectedChallanStudent(null); }} className="px-4 py-2 border rounded-lg">Cancel</button>
                <button onClick={() => { alert('Fee Challan Generated & Sent to Printer!'); setShowChallanModal(false); }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center gap-1.5 shadow-sm">
                  <Icon name="printer" className="w-3 h-3" /> Print Voucher
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* INSPECTION DRAWER: EXPENSE VOUCHER DRILL-DOWN            */}
        {/* ======================================================== */}
        {inspectedExpense && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] bg-rose-100 text-rose-800 font-mono font-bold px-2 py-0.5 rounded">
                      {inspectedExpense.id}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base mt-1">{inspectedExpense.title}</h3>
                    <p className="text-xs text-slate-400">Ref: {inspectedExpense.reference}</p>
                  </div>
                  <button onClick={() => setInspectedExpense(null)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                    <p><strong className="text-slate-700">Disbursed To:</strong> {inspectedExpense.paidTo}</p>
                    <p><strong className="text-slate-700">Disbursement Category:</strong> {inspectedExpense.category}</p>
                    <p><strong className="text-slate-700">Payment Channel:</strong> {inspectedExpense.method}</p>
                    <p><strong className="text-slate-700">Disbursement Date:</strong> {inspectedExpense.date}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 flex justify-between items-center">
                    <span className="font-bold text-rose-900">Total Outflow Amount:</span>
                    <span className="text-lg font-black text-rose-700">PKR {inspectedExpense.amount.toLocaleString()}</span>
                  </div>

                  {inspectedExpense.receiptPhoto && (
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <p className="font-bold text-slate-800 mb-2">Scanned Receipt / Slip:</p>
                      <img src={inspectedExpense.receiptPhoto} alt="Receipt" className="w-full h-36 object-cover rounded-lg border border-slate-300" />
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button 
                  onClick={() => setInspectedExpense(null)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* INSPECTION DRAWER: SOPL / SOFP AUDIT SHEET               */}
        {/* ======================================================== */}
        {inspectedLedgerItem && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-end z-50">
            <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                  <div>
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-mono font-bold px-2 py-0.5 rounded">
                      Audited Ledger Line
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base mt-1">{inspectedLedgerItem.title}</h3>
                    <p className="text-xs text-slate-400">{inspectedLedgerItem.category}</p>
                  </div>
                  <button onClick={() => setInspectedLedgerItem(null)} className="text-slate-400 hover:text-slate-600">
                    <Icon name="x" className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-xs space-y-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                    <p><strong className="text-slate-700">Ledger Balance:</strong> PKR {inspectedLedgerItem.amount.toLocaleString()}</p>
                    <p><strong className="text-slate-700">Accounting Policy:</strong> Accrual basis (IFRS compliant)</p>
                    <p><strong className="text-slate-700">Auditor Notes:</strong> {inspectedLedgerItem.notes}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-50/60 border border-blue-200 space-y-1">
                    <p className="font-bold text-blue-900 mb-1">Supporting Vouchers Attached:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {inspectedLedgerItem.vouchers.map((v, i) => (
                        <span key={i} className="text-[10px] bg-white border border-blue-300 font-mono px-2 py-0.5 rounded font-bold text-blue-800">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button 
                  onClick={() => setInspectedLedgerItem(null)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2.5 rounded-lg transition"
                >
                  Close Audit Sheet
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODAL: STUDENT ADMISSION (LIVE PHOTO PREVIEW)            */}
        {/* ======================================================== */}
        {showAddStudentModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
              <div className="p-5 border-b border-slate-200 bg-white sticky top-0 flex justify-between items-center z-10">
                <h3 className="font-extrabold text-slate-900 text-base">Student Admission Form</h3>
                <button onClick={() => setShowAddStudentModal(false)}><Icon name="x" className="w-5 h-5 text-slate-400" /></button>
              </div>

              <form onSubmit={handleEnrollStudent} className="p-6 space-y-4 text-xs">
                {/* Photo Upload with Live Thumbnail */}
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
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setAdmPhotoPreview, setAdmPhotoUploaded)}
                      className="text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:bg-slate-800 file:text-white file:font-semibold cursor-pointer"
                    />
                    {admPhotoUploaded && (
                      <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1.5">
                        <Icon name="check" className="w-3.5 h-3.5" /> Photo uploaded successfully! Live preview active.
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Student Full Name *</label>
                    <input type="text" required placeholder="e.g. Asad Mehmood" value={admFullName} onChange={(e) => setAdmFullName(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Father / Guardian Name</label>
                    <input type="text" placeholder="e.g. Tariq Mehmood" value={admGuardian} onChange={(e) => setAdmGuardian(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">CNIC / B-Form Number *</label>
                    <input type="text" required placeholder="37405-XXXXXXX-X" value={admCNIC} onChange={(e) => setAdmCNIC(e.target.value)} className="w-full px-3 py-2 border rounded-lg font-mono" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">WhatsApp Number *</label>
                    <input type="text" required placeholder="+92 300 1234567" value={admPhone} onChange={(e) => setAdmPhone(e.target.value)} className="w-full px-3 py-2 border rounded-lg font-mono" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1.5">Enrolling Course</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 border p-3 rounded-lg bg-slate-50">
                    {courseCatalog.map((course) => (
                      <label key={course.id} className="flex items-center justify-between p-1.5 bg-white rounded border cursor-pointer">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={admSelectedCourses.includes(course.name)} onChange={() => toggleAdmCourse(course.name)} />
                          <span>{course.name}</span>
                        </div>
                        <span className="font-bold">PKR {course.fee.toLocaleString()}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Shift</label>
                    <select value={admShift} onChange={(e) => setAdmShift(e.target.value)} className="w-full p-2 border rounded-lg">
                      <option>Morning Shift</option>
                      <option>Noon Shift</option>
                      <option>Evening Shift</option>
                      <option>Weekend VIP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Timings</label>
                    <select value={admTiming} onChange={(e) => setAdmTiming(e.target.value)} className="w-full p-2 border rounded-lg font-mono">
                      <option>10:00 AM - 11:30 AM</option>
                      <option>03:00 PM - 04:30 PM</option>
                      <option>06:00 PM - 08:00 PM</option>
                      <option>02:00 PM - 05:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Faculty</label>
                    <select value={admTrainer} onChange={(e) => setAdmTrainer(e.target.value)} className="w-full p-2 border rounded-lg font-bold">
                      <option>Sir Saif (Head IELTS)</option>
                      <option>Ms. Rabia Zafar</option>
                      <option>Sir Bilal Tariq</option>
                      <option>Frau Nadia</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex justify-between items-center">
                  <span className="font-bold text-slate-800">Net Fee Due:</span>
                  <span className="text-base font-black text-emerald-800">PKR {finalTuitionFee.toLocaleString()}</span>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setShowAddStudentModal(false)} className="px-4 py-2 border rounded-lg">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg">Confirm Admission</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODAL: ADD FACULTY / STAFF (LIVE PHOTO PREVIEW)          */}
        {/* ======================================================== */}
        {showAddStaffModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-extrabold text-slate-900 text-base">Add Faculty / Staff Member</h3>
                <button onClick={() => setShowAddStaffModal(false)}><Icon name="x" className="w-5 h-5 text-slate-400" /></button>
              </div>

              <form onSubmit={handleAddStaffMember} className="space-y-4 text-xs">
                {/* Photo Upload with Live Thumbnail */}
                <div className="flex items-center gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  {staffPhotoPreview ? (
                    <img src={staffPhotoPreview} alt="Staff Preview" className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md shrink-0" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 border border-dashed border-slate-300 shrink-0">
                      <Icon name="camera" className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex-1">
                    <label className="block text-slate-800 font-bold mb-1">Faculty Profile Picture *</label>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setStaffPhotoPreview, setStaffPhotoUploaded)}
                      className="text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded file:border-0 file:bg-slate-800 file:text-white file:font-semibold cursor-pointer"
                    />
                    {staffPhotoUploaded && (
                      <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                        <Icon name="check" className="w-3.5 h-3.5" /> Photo verified successfully!
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                    <input type="text" required placeholder="e.g. Sir Naveed Qureshi" value={staffName} onChange={(e) => setStaffName(e.target.value)} className="w-full p-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Department</label>
                    <select value={staffDept} onChange={(e) => setStaffDept(e.target.value)} className="w-full p-2 border rounded-lg">
                      <option>Faculty</option>
                      <option>Administration</option>
                      <option>Support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Designation</label>
                    <input type="text" required placeholder="e.g. Spoken English Trainer" value={staffRole} onChange={(e) => setStaffRole(e.target.value)} className="w-full p-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Shift</label>
                    <select value={staffShift} onChange={(e) => setStaffShift(e.target.value)} className="w-full p-2 border rounded-lg">
                      <option>Morning Shift</option>
                      <option>Evening Shift</option>
                      <option>Weekend Shift</option>
                      <option>Full Day Duty</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Email</label>
                    <input type="email" required placeholder="faculty@britishinstitute.pk" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} className="w-full p-2 border rounded-lg font-mono" />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Monthly Salary (PKR)</label>
                    <input type="number" placeholder="60000" value={staffSalary} onChange={(e) => setStaffSalary(e.target.value)} className="w-full p-2 border rounded-lg font-bold" />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button type="button" onClick={() => setShowAddStaffModal(false)} className="px-3.5 py-1.5 border rounded-lg">Cancel</button>
                  <button type="submit" className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg">Save Faculty</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODAL: LOG EXPENSE (WITH LIVE RECEIPT SCAN PREVIEW)       */}
        {/* ======================================================== */}
        {showAddExpenseModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 border border-slate-200">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-slate-900 text-sm">Log Operational Outflow</h3>
                <button onClick={() => setShowAddExpenseModal(false)}><Icon name="x" className="w-4 h-4 text-slate-400" /></button>
              </div>

              <form onSubmit={handleAddExpense} className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Title</label>
                  <input type="text" required placeholder="e.g. Meta Ads or Internet Bill" value={expTitle} onChange={(e) => setExpTitle(e.target.value)} className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Category</label>
                  <select value={expCategory} onChange={(e) => setExpCategory(e.target.value)} className="w-full p-2 border rounded-lg">
                    <option>Marketing</option>
                    <option>Payroll</option>
                    <option>Utilities</option>
                    <option>Academics</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Amount (PKR)</label>
                  <input type="number" required placeholder="25000" value={expAmount} onChange={(e) => setExpAmount(e.target.value)} className="w-full p-2 border rounded-lg font-bold" />
                </div>

                {/* Receipt Upload with Live Thumbnail */}
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Attach Receipt / Slip (Photo)</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setExpPhotoPreview(reader.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="text-[11px] text-slate-500"
                  />
                  {expPhotoPreview && (
                    <div className="mt-2 flex items-center gap-2">
                      <img src={expPhotoPreview} alt="Receipt Preview" className="w-10 h-10 object-cover rounded border border-slate-300" />
                      <span className="text-[10px] text-emerald-600 font-bold">✓ Receipt attached!</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setShowAddExpenseModal(false)} className="px-3 py-1.5 border rounded-lg">Cancel</button>
                  <button type="submit" className="px-4 py-1.5 bg-rose-600 text-white font-bold rounded-lg">Log Outflow</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MODAL: DIRECTOR / OWNER PROFILE PICTURE UPDATE           */}
        {/* ======================================================== */}
        {showDirectorModal && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-slate-200 text-xs space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <h3 className="font-extrabold text-slate-900 text-sm">Director Profile Settings</h3>
                <button onClick={() => setShowDirectorModal(false)}><Icon name="x" className="w-4 h-4 text-slate-400" /></button>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img 
                  src={tempDirectorPhoto || directorProfile.photo} 
                  alt="Director Preview" 
                  className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 shadow-md" 
                />
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setTempDirectorPhoto(reader.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="text-[11px] text-slate-500" 
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setShowDirectorModal(false)} className="px-3 py-1.5 border rounded-lg">Cancel</button>
                <button 
                  type="button" 
                  onClick={() => {
                    if (tempDirectorPhoto) setDirectorProfile({ ...directorProfile, photo: tempDirectorPhoto });
                    setShowDirectorModal(false);
                  }} 
                  className="px-4 py-1.5 bg-emerald-600 text-white font-bold rounded-lg"
                >
                  Save Photo
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}