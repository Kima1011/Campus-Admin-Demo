'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ShieldCheck,
  Award,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-campus-950 text-slate-400 pt-16 pb-8 border-t border-campus-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Brand & Value Proposition Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-campus-800">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-black text-xl tracking-tight text-white">CAMPUS</span>
                <span className="font-black text-xl tracking-tight text-brand-400">ADMIN</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's comprehensive, data-verified higher education discovery portal. Empowering students with authenticated NIRF rankings, audited placement figures, course fees, cutoffs, and counseling support.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> 100% Verified Institutional Data
              </div>
              <div className="flex items-center text-amber-400 font-medium">
                <Award className="w-4 h-4 mr-1.5" /> NIRF 2024 & UGC Aligned Records
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Top Academic Streams</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/colleges?stream=Engineering" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Engineering & Technology (B.Tech)</Link></li>
              <li><Link href="/colleges?stream=Management" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Management & Business (MBA/PGDM)</Link></li>
              <li><Link href="/colleges?stream=Medical" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Medical & Healthcare (MBBS/BDS)</Link></li>
              <li><Link href="/colleges?stream=Law" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Law & Legal Studies (BA LL.B)</Link></li>
              <li><Link href="/colleges?stream=Design" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Design & Fashion (B.Des/NIFT)</Link></li>
              <li><Link href="/colleges?stream=Commerce" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Accounting & Commerce (B.Com)</Link></li>
              <li><Link href="/colleges?stream=Arts" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Humanities & Social Sciences</Link></li>
              <li><Link href="/colleges?stream=Hospitality" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Hotel Management & Tourism</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Examinations & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/exams/jee-main-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> JEE Main 2025 Dates & Syllabus</Link></li>
              <li><Link href="/exams/jee-advanced-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> JEE Advanced 2025 (IIT Kanpur)</Link></li>
              <li><Link href="/exams/neet-ug-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> NEET UG 2025 Registration</Link></li>
              <li><Link href="/exams/cat-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> CAT 2025 IIM Admission</Link></li>
              <li><Link href="/exams/gate-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> GATE 2025 IIT Roorkee</Link></li>
              <li><Link href="/exams/clat-2025" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> CLAT 2025 NLU Cutoffs</Link></li>
              <li><Link href="/predictor" className="hover:text-amber-400 transition font-medium flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-amber-500" /> College & Rank Predictors</Link></li>
              <li><Link href="/compare" className="hover:text-amber-400 transition font-medium flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-amber-500" /> 4-Way College Comparison Tool</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Study Abroad & Support</h4>
            <ul className="space-y-2 text-xs mb-4">
              <li><Link href="/study-abroad" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Study in USA: STEM OPT & Universities</Link></li>
              <li><Link href="/study-abroad" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Study in Germany: Tuition-Free Universities</Link></li>
              <li><Link href="/study-abroad" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Study in UK & Canada Guidelines</Link></li>
              <li><Link href="/study-abroad" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> GRE, GMAT, IELTS & TOEFL Prep</Link></li>
              <li><Link href="/news" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Educational News & Alerts</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition flex items-center"><ChevronRight className="w-3 h-3 mr-1 text-slate-600" /> Student Discussion & Reviews</Link></li>
            </ul>

            <div className="bg-campus-900 p-3 rounded-lg border border-campus-800 text-xs">
              <span className="font-semibold text-white block mb-1">Student Helpline Desk</span>
              <p className="text-slate-400 text-[11px] mb-2">Speak directly with an education counselor.</p>
              <div className="font-bold text-amber-400 flex items-center">
                <Phone className="w-3.5 h-3.5 mr-1.5" /> 1800-CAMPUS-ADMIN
              </div>
            </div>
          </div>
        </div>

        {/* Directory Links Matrix */}
        <div className="py-8 border-b border-campus-800 text-[11px] text-slate-500">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Engineering</span>
              <p>IIT Madras, IIT Delhi, IIT Bombay, IIT Kanpur, NIT Trichy, BITS Pilani, IIIT Hyderabad</p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Management</span>
              <p>IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, XLRI Jamshedpur, FMS Delhi</p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Medical</span>
              <p>AIIMS New Delhi, CMC Vellore, PGIMER Chandigarh, KGMU Lucknow, KMC Manipal</p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Law Schools</span>
              <p>NLSIU Bangalore, NLU Delhi, NALSAR Hyderabad, WBNUJS Kolkata, Symbiosis Law</p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Design</span>
              <p>NID Ahmedabad, NIFT New Delhi, IDC IIT Bombay, Dept of Design IIT Guwahati</p>
            </div>
            <div>
              <span className="font-semibold text-slate-300 block mb-1">Top Universities</span>
              <p>University of Delhi (DU), JNU New Delhi, BHU Varanasi, Anna University, Jadavpur</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} CAMPUS ADMIN. All rights reserved. India's Verified Higher Education Discovery Platform.
          </div>
          <div className="flex flex-wrap items-center space-x-4">
            <Link href="/news" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="/news" className="hover:text-slate-300">Terms of Service</Link>
            <span>•</span>
            <Link href="/news" className="hover:text-slate-300">Data Verification Methodology</Link>
            <span>•</span>
            <Link href="/admin" className="text-amber-400 font-semibold hover:underline">Admin Portal</Link>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-slate-600 text-center leading-relaxed">
          Disclaimer: CAMPUS ADMIN references official institutional websites, National Institutional Ranking Framework (NIRF), University Grants Commission (UGC), All India Council for Technical Education (AICTE), and National Testing Agency (NTA) for informational purposes. All logos and registered trademarks belong to their respective statutory and academic institutions.
        </div>
      </div>
    </footer>
  );
}

