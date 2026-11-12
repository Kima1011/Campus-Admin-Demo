import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  BookOpen,
  TrendingUp,
  Clock,
  DollarSign,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Search
} from 'lucide-react';

export const revalidate = 60;

export default async function CoursesDirectoryPage() {
  const coursesCatalog = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      stream: 'Engineering',
      degreeLevel: 'UG',
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry & Mathematics (min 75% for IITs/NITs)',
      exams: 'JEE Main, JEE Advanced, BITSAT, VITEEE, WBJEE',
      avgFees: '₹1.5 Lakhs - ₹9.0 Lakhs Total',
      avgSalary: '₹12.0 - ₹26.0 LPA',
      roles: 'Software Engineer, AI/ML Specialist, Systems Architect, Full Stack Developer',
      topInstitutes: 'IIT Madras, IIT Delhi, IIT Bombay, NIT Trichy, IIIT Hyderabad, BITS Pilani'
    },
    {
      title: 'MBA / PGDM in Management',
      stream: 'Management',
      degreeLevel: 'PG',
      duration: '2 Years',
      eligibility: "Bachelor's degree in any discipline with minimum 50% aggregate",
      exams: 'CAT, XAT, GMAT, CMAT, MAT, NMAT',
      avgFees: '₹2.0 Lakhs - ₹26.0 Lakhs Total',
      avgSalary: '₹24.0 - ₹35.0 LPA',
      roles: 'Investment Banker, Management Consultant, Product Manager, Brand Strategist',
      topInstitutes: 'IIM Ahmedabad, IIM Bangalore, IIM Calcutta, XLRI Jamshedpur, FMS Delhi, SPJIMR'
    },
    {
      title: 'MBBS (Bachelor of Medicine and Bachelor of Surgery)',
      stream: 'Medical',
      degreeLevel: 'UG',
      duration: '5.5 Years (incl. 1 Yr Internship)',
      eligibility: '10+2 with Physics, Chemistry, Biology & English (min 50% in PCB)',
      exams: 'NEET UG',
      avgFees: '₹7,000 (AIIMS) - ₹15.0 Lakhs (Private/Deemed)',
      avgSalary: '₹12.0 - ₹18.0 LPA',
      roles: 'Physician, Surgeon, Medical Officer, Clinical Specialist',
      topInstitutes: 'AIIMS New Delhi, CMC Vellore, PGIMER, KGMU Lucknow, KMC Manipal'
    },
    {
      title: 'B.A. LL.B. (Hons.) 5-Year Integrated Law',
      stream: 'Law',
      degreeLevel: 'UG',
      duration: '5 Years',
      eligibility: '10+2 in any stream from recognized board with 45% aggregate',
      exams: 'CLAT UG, AILET, LSAT India, SLAT',
      avgFees: '₹10.0 Lakhs - ₹15.0 Lakhs Total',
      avgSalary: '₹14.0 - ₹22.0 LPA',
      roles: 'Corporate Lawyer, Litigation Advocate, Legal Analyst, Judiciary Officer',
      topInstitutes: 'NLSIU Bangalore, NLU Delhi, NALSAR Hyderabad, WBNUJS Kolkata'
    },
    {
      title: 'B.Des (Bachelor of Design) & Fashion',
      stream: 'Design',
      degreeLevel: 'UG',
      duration: '4 Years',
      eligibility: '10+2 pass in any stream (Science, Commerce, Arts)',
      exams: 'UCEED, NID DAT, NIFT Entrance Examination',
      avgFees: '₹8.0 Lakhs - ₹15.0 Lakhs Total',
      avgSalary: '₹8.0 - ₹16.0 LPA',
      roles: 'UI/UX Designer, Product Industrial Designer, Fashion Designer, Art Director',
      topInstitutes: 'NID Ahmedabad, NIFT New Delhi, IDC IIT Bombay, Dept of Design IIT Guwahati'
    },
    {
      title: 'B.Com (Hons.) & Finance',
      stream: 'Commerce',
      degreeLevel: 'UG',
      duration: '3-4 Years',
      eligibility: '10+2 with Mathematics / Accountancy from recognized board',
      exams: 'CUET UG',
      avgFees: '₹90,000 - ₹3.0 Lakhs Total',
      avgSalary: '₹7.0 - ₹12.0 LPA',
      roles: 'Chartered Accountant, Financial Analyst, Auditor, Investment Specialist',
      topInstitutes: 'SRCC Delhi, St. Xavier’s College, Loyola College, Hindu College'
    },
    {
      title: 'B.Sc. in Hospitality & Hotel Administration',
      stream: 'Hospitality',
      degreeLevel: 'UG',
      duration: '3 Years',
      eligibility: '10+2 pass with English as a compulsory subject',
      exams: 'NCHMCT JEE',
      avgFees: '₹3.5 Lakhs - ₹5.0 Lakhs Total',
      avgSalary: '₹5.0 - ₹9.0 LPA',
      roles: 'Hotel General Manager, Executive Chef, Food & Beverage Director',
      topInstitutes: 'IHM Pusa New Delhi, IHM Mumbai, Welcomgroup Manipal'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Courses Directory</span>
        </div>

        {/* Header Title */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Higher Education Course Catalog</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
              Degree Programs & Career Paths
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore duration, eligibility requirements, entrance exams, tuition fee ranges, and salary packages.
            </p>
          </div>

          <Link
            href="/colleges"
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow flex items-center space-x-1.5"
          >
            <span>Explore All Colleges</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Courses Listing Cards */}
        <div className="space-y-4">
          {coursesCatalog.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {course.stream} • {course.degreeLevel} Degree
                  </span>
                  <h3 className="text-lg font-black text-campus-950">{course.title}</h3>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Average Salary</span>
                  <span className="text-base font-extrabold text-emerald-700">{course.avgSalary}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">Program Duration</span>
                  <span>{course.duration}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">Estimated Tuition Fee</span>
                  <span className="text-amber-800 font-semibold">{course.avgFees}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 block mb-0.5">Entrance Examinations</span>
                  <span className="text-brand-700 font-semibold">{course.exams}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs space-y-1">
                <div>
                  <strong className="text-slate-800">Eligibility Criteria: </strong>
                  <span className="text-slate-600">{course.eligibility}</span>
                </div>
                <div>
                  <strong className="text-slate-800">Career Trajectories: </strong>
                  <span className="text-slate-600">{course.roles}</span>
                </div>
                <div>
                  <strong className="text-slate-800">Top Institutes: </strong>
                  <span className="text-slate-600">{course.topInstitutes}</span>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 pt-1">
                <Link
                  href={`/colleges?stream=${encodeURIComponent(course.stream)}`}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition"
                >
                  View Colleges Offering This Degree →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

