'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  Search,
  MapPin,
  ChevronDown,
  Menu,
  X,
  User,
  Heart,
  Scale,
  Sparkles,
  BookOpen,
  Globe2,
  Award,
  Layers,
  HelpCircle,
  FileText,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const router = useRouter();
  const { user, logout, savedColleges, comparedColleges, openEnquiryModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStream, setSelectedStream] = useState('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      router.push('/colleges');
    } else {
      router.push(`/colleges?q=${encodeURIComponent(searchQuery.trim())}${selectedStream !== 'All' ? `&stream=${encodeURIComponent(selectedStream)}` : ''}`);
    }
  };

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top utility row */}
      <div className="bg-campus-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-campus-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> India's Verified Higher Education Discovery Network
            </span>
            <span className="hidden md:inline-flex items-center text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" /> NIRF 2024 & UGC Authenticated Data
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/predictor" className="hover:text-white transition flex items-center">
              <Compass className="w-3 h-3 mr-1 text-brand-400" /> College Predictor
            </Link>
            <Link href="/compare" className="hover:text-white transition flex items-center relative">
              <Scale className="w-3 h-3 mr-1 text-amber-400" /> Compare
              {comparedColleges.length > 0 && (
                <span className="ml-1 bg-amber-500 text-slate-900 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {comparedColleges.length}
                </span>
              )}
            </Link>
            <Link href="/reviews" className="hidden sm:inline hover:text-white transition">
              Write a Review
            </Link>
            <Link href="/study-abroad" className="hidden lg:inline hover:text-white transition">
              Study Abroad
            </Link>
            <span className="text-slate-600">|</span>
            {user ? (
              <div className="flex items-center space-x-2">
                <Link href={user.role === 'ADMIN' ? '/admin' : '/dashboard'} className="font-semibold text-white hover:text-amber-400 transition flex items-center">
                  <User className="w-3 h-3 mr-1" /> {user.name} ({user.role})
                </Link>
                <button onClick={logout} className="text-slate-400 hover:text-red-400 ml-2">Logout</button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/auth/login" className="hover:text-white transition font-medium">
                  Login
                </Link>
                <Link href="/auth/register" className="bg-brand-600 hover:bg-brand-500 text-white font-medium px-2.5 py-0.5 rounded transition">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header / Brand Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-black text-xl tracking-tight text-campus-900 leading-none">CAMPUS</span>
              <span className="font-black text-xl tracking-tight text-brand-600 leading-none">ADMIN</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block mt-0.5">Education Discovery</span>
          </div>
        </Link>

        {/* Global Omnisearch Bar */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-2xl items-center relative rounded-full border border-slate-300 bg-slate-50 hover:bg-white focus-within:bg-white focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-100 transition shadow-inner">
          <div className="relative pl-3 pr-1 py-1">
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer pr-4 border-r border-slate-200"
            >
              <option value="All">All Streams</option>
              <option value="Engineering">Engineering</option>
              <option value="Management">Management (MBA)</option>
              <option value="Medical">Medical (MBBS)</option>
              <option value="Design">Design</option>
              <option value="Law">Law</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Humanities</option>
              <option value="Hospitality">Hospitality</option>
            </select>
          </div>

          <div className="flex-1 flex items-center px-3 py-2">
            <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 1,200+ Colleges, Courses (e.g. B.Tech, MBA), Exams (JEE, NEET, CAT)..."
              className="w-full text-sm bg-transparent border-none focus:outline-none placeholder:text-slate-400 text-slate-800"
            />
          </div>

          <button
            type="submit"
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs px-5 py-2 mr-1 rounded-full transition shadow-sm flex items-center"
          >
            Search
          </button>
        </form>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
          <Link
            href="/dashboard"
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Shortlist ({savedColleges.length})</span>
          </Link>

          <button
            onClick={() => openEnquiryModal()}
            className="bg-amber-500 hover:bg-amber-600 text-campus-950 font-bold text-xs px-4 py-2 rounded-lg transition shadow-sm hover:shadow"
          >
            Get Counselling Free
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Main Mega-Menu Bar */}
      <nav className="bg-campus-900 border-t border-campus-800 text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm font-medium">
            {/* Mega menu triggers */}
            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('management')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Management</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('engineering')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Engineering</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('medical')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Medical</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('design')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Design & Media</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('law')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Law & Humanities</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <div
              className="relative group py-2.5 px-3 cursor-pointer hover:bg-campus-800 rounded-t transition"
              onMouseEnter={() => setActiveMegaMenu('exams')}
            >
              <span className="flex items-center space-x-1 text-slate-100 group-hover:text-amber-400">
                <span>Govt & Exams</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </span>
            </div>

            <Link href="/study-abroad" className="py-2.5 px-3 hover:bg-campus-800 text-slate-100 hover:text-amber-400 rounded-t transition flex items-center space-x-1">
              <Globe2 className="w-3.5 h-3.5 mr-1 text-sky-400" />
              <span>Study Abroad</span>
            </Link>

            <Link href="/predictor" className="py-2.5 px-3 hover:bg-campus-800 text-slate-100 hover:text-amber-400 rounded-t transition flex items-center space-x-1">
              <Compass className="w-3.5 h-3.5 mr-1 text-amber-400" />
              <span>Predictors</span>
            </Link>

            <Link href="/news" className="py-2.5 px-3 hover:bg-campus-800 text-slate-100 hover:text-amber-400 rounded-t transition">
              News & Circulars
            </Link>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold">
            <Link href="/colleges" className="text-amber-400 hover:underline flex items-center">
              Browse 40+ Top Institutions →
            </Link>
          </div>
        </div>

        {/* Dynamic Mega Menu Dropdowns */}
        {activeMegaMenu && (
          <div
            className="absolute left-0 w-full bg-white text-slate-800 shadow-2xl border-t border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-8">
              {activeMegaMenu === 'management' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top MBA Degrees</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges?stream=Management" className="hover:text-brand-600 hover:underline">MBA / PGDM Full Time</Link></li>
                      <li><Link href="/colleges?stream=Management" className="hover:text-brand-600 hover:underline">Executive MBA (1-Year)</Link></li>
                      <li><Link href="/colleges?stream=Management" className="hover:text-brand-600 hover:underline">Online & Distance MBA</Link></li>
                      <li><Link href="/colleges?stream=Management" className="hover:text-brand-600 hover:underline">BBA / BBM Undergraduate</Link></li>
                      <li><Link href="/colleges?stream=Management" className="hover:text-brand-600 hover:underline">Business Analytics & Data MBA</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top Business Schools</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges/iim-ahmedabad" className="hover:text-brand-600 font-medium">IIM Ahmedabad (Rank 1)</Link></li>
                      <li><Link href="/colleges/iim-bangalore" className="hover:text-brand-600 font-medium">IIM Bangalore (Rank 2)</Link></li>
                      <li><Link href="/colleges/iim-calcutta" className="hover:text-brand-600 font-medium">IIM Calcutta (Rank 3)</Link></li>
                      <li><Link href="/colleges/xlri-jamshedpur" className="hover:text-brand-600 font-medium">XLRI Jamshedpur (Top Private)</Link></li>
                      <li><Link href="/colleges/fms-delhi" className="hover:text-brand-600 font-medium text-emerald-700">FMS Delhi (Best ROI)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Entrance Exams</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams/cat-2025" className="hover:text-brand-600 font-medium">CAT 2025 (Nov 2025)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">XAT 2025 (XLRI Entrance)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">CMAT 2025 (NTA National)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">MAT & NMAT by GMAC</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">SNAP 2025 (Symbiosis)</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">MBA Tools & Predictors</h4>
                    <p className="text-xs text-slate-600 mb-3">Calculate your IIM call probability and matching percentile cutoffs.</p>
                    <Link href="/predictor" className="block text-center bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 rounded-lg transition mb-2">
                      CAT College Predictor
                    </Link>
                    <Link href="/compare" className="block text-center border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-1.5 rounded-lg transition">
                      Compare B-Schools Side-by-Side
                    </Link>
                  </div>
                </>
              )}

              {activeMegaMenu === 'engineering' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Engineering Disciplines</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges?stream=Engineering" className="hover:text-brand-600">Computer Science (CSE)</Link></li>
                      <li><Link href="/colleges?stream=Engineering" className="hover:text-brand-600">Artificial Intelligence & Data Science</Link></li>
                      <li><Link href="/colleges?stream=Engineering" className="hover:text-brand-600">Electronics & Communication (ECE)</Link></li>
                      <li><Link href="/colleges?stream=Engineering" className="hover:text-brand-600">Mechanical Engineering</Link></li>
                      <li><Link href="/colleges?stream=Engineering" className="hover:text-brand-600">Civil & Aerospace Engineering</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top Tech Institutes</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges/iit-madras" className="hover:text-brand-600 font-medium">IIT Madras (NIRF #1)</Link></li>
                      <li><Link href="/colleges/iit-delhi" className="hover:text-brand-600 font-medium">IIT Delhi (NIRF #2)</Link></li>
                      <li><Link href="/colleges/iit-bombay" className="hover:text-brand-600 font-medium">IIT Bombay (NIRF #3)</Link></li>
                      <li><Link href="/colleges/nit-trichy" className="hover:text-brand-600 font-medium">NIT Trichy (Top NIT)</Link></li>
                      <li><Link href="/colleges/bits-pilani" className="hover:text-brand-600 font-medium">BITS Pilani (Top Private)</Link></li>
                      <li><Link href="/colleges/iiit-hyderabad" className="hover:text-brand-600 font-medium">IIIT Hyderabad (Top CSE)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Engineering Exams</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams/jee-main-2025" className="hover:text-brand-600 font-medium text-brand-700">JEE Main 2025 (Jan 22-31)</Link></li>
                      <li><Link href="/exams/jee-advanced-2025" className="hover:text-brand-600 font-medium">JEE Advanced 2025 (May 18)</Link></li>
                      <li><Link href="/exams/gate-2025" className="hover:text-brand-600 font-medium">GATE 2025 (Feb 2025)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">BITSAT 2025</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">State CETs (MHT CET, WBJEE)</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">JEE Rank Predictor</h4>
                    <p className="text-xs text-slate-600 mb-3">Check which IITs, NITs, and IIITs you can get with your JEE rank & home state quota.</p>
                    <Link href="/predictor" className="block text-center bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 rounded-lg transition mb-2">
                      Predict Engineering Colleges
                    </Link>
                    <Link href="/colleges?stream=Engineering" className="block text-center border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-1.5 rounded-lg transition">
                      Explore All Engineering Colleges
                    </Link>
                  </div>
                </>
              )}

              {activeMegaMenu === 'medical' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Medical Degrees</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges?stream=Medical" className="hover:text-brand-600">MBBS (Medicine & Surgery)</Link></li>
                      <li><Link href="/colleges?stream=Medical" className="hover:text-brand-600">BDS (Dental Surgery)</Link></li>
                      <li><Link href="/colleges?stream=Medical" className="hover:text-brand-600">MD / MS Post Graduate</Link></li>
                      <li><Link href="/colleges?stream=Medical" className="hover:text-brand-600">B.Pharm & Pharm.D</Link></li>
                      <li><Link href="/colleges?stream=Medical" className="hover:text-brand-600">B.Sc Nursing & Paramedical</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top Medical Colleges</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges/aiims-new-delhi" className="hover:text-brand-600 font-medium">AIIMS New Delhi (NIRF #1)</Link></li>
                      <li><Link href="/colleges/pgimer-chandigarh" className="hover:text-brand-600 font-medium">PGIMER Chandigarh (NIRF #2)</Link></li>
                      <li><Link href="/colleges/cmc-vellore" className="hover:text-brand-600 font-medium">CMC Vellore (NIRF #3)</Link></li>
                      <li><Link href="/colleges/kgmu-lucknow" className="hover:text-brand-600 font-medium">KGMU Lucknow (Heritage Govt)</Link></li>
                      <li><Link href="/colleges/manipal-university" className="hover:text-brand-600 font-medium">KMC Manipal (Top Deemed)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Medical Exams</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams/neet-ug-2025" className="hover:text-brand-600 font-medium text-emerald-700">NEET UG 2025 (May 4, 2025)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600 font-medium">NEET PG 2025</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600 font-medium">INI CET 2025 (AIIMS, PGI, JIPMER)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">MCC All India Counselling</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">NEET UG Predictor</h4>
                    <p className="text-xs text-slate-600 mb-3">Input your NEET marks / expected score to find AIQ and State Quota medical college seats.</p>
                    <Link href="/predictor" className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg transition mb-2">
                      NEET College Predictor
                    </Link>
                  </div>
                </>
              )}

              {activeMegaMenu === 'design' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Design & Creative Fields</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges?stream=Design" className="hover:text-brand-600">Fashion Design & Apparel</Link></li>
                      <li><Link href="/colleges?stream=Design" className="hover:text-brand-600">Product & Industrial Design</Link></li>
                      <li><Link href="/colleges?stream=Design" className="hover:text-brand-600">Graphic & Visual Communication</Link></li>
                      <li><Link href="/colleges?stream=Design" className="hover:text-brand-600">UI/UX Interaction Design</Link></li>
                      <li><Link href="/colleges?stream=Design" className="hover:text-brand-600">Animation & VFX</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top Institutes</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges/nid-ahmedabad" className="hover:text-brand-600 font-medium">NID Ahmedabad (National Design)</Link></li>
                      <li><Link href="/colleges/nift-new-delhi" className="hover:text-brand-600 font-medium">NIFT New Delhi (Top Fashion)</Link></li>
                      <li><Link href="/colleges/iit-bombay" className="hover:text-brand-600 font-medium">IDC School of Design, IIT Bombay</Link></li>
                      <li><Link href="/colleges/iit-guwahati" className="hover:text-brand-600 font-medium">Dept of Design, IIT Guwahati</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Design Entrance Tests</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams" className="hover:text-brand-600">UCEED 2025 (IIT B.Des)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">CEED 2025 (IIT M.Des)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">NID DAT Prelims & Mains</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">NIFT Entrance CAT/GAT</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">Design Portfolios</h4>
                    <p className="text-xs text-slate-600 mb-3">Discover creative career opportunities and portfolio submission requirements for NID & NIFT.</p>
                    <Link href="/colleges?stream=Design" className="block text-center bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-2 rounded-lg transition">
                      View Design Colleges
                    </Link>
                  </div>
                </>
              )}

              {activeMegaMenu === 'law' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Law & Humanities</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges?stream=Law" className="hover:text-brand-600">BA LL.B (Hons.) 5-Year</Link></li>
                      <li><Link href="/colleges?stream=Law" className="hover:text-brand-600">BBA LL.B Corporate Law</Link></li>
                      <li><Link href="/colleges?stream=Law" className="hover:text-brand-600">LL.M Master of Laws</Link></li>
                      <li><Link href="/colleges?stream=Arts" className="hover:text-brand-600">B.A. Economics / Political Science</Link></li>
                      <li><Link href="/colleges?stream=Arts" className="hover:text-brand-600">Liberal Arts & Social Sciences</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Top NLUs & Central Universities</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/colleges/nlsiu-bangalore" className="hover:text-brand-600 font-medium">NLSIU Bangalore (NIRF #1 Law)</Link></li>
                      <li><Link href="/colleges/nlu-delhi" className="hover:text-brand-600 font-medium">NLU Delhi (NIRF #2 Law)</Link></li>
                      <li><Link href="/colleges/nalsar-hyderabad" className="hover:text-brand-600 font-medium">NALSAR Hyderabad (NIRF #3 Law)</Link></li>
                      <li><Link href="/colleges/du-delhi-university" className="hover:text-brand-600 font-medium">Delhi University (DU North Campus)</Link></li>
                      <li><Link href="/colleges/jnu-new-delhi" className="hover:text-brand-600 font-medium">JNU New Delhi (NIRF #2 Univ)</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Law & Central Exams</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams/clat-2025" className="hover:text-brand-600 font-medium">CLAT 2025 (Consortium of NLUs)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600 font-medium">AILET 2025 (NLU Delhi)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600 font-medium">CUET UG 2025 (Central Universities)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">CUET PG 2025</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">CLAT Cutoff Finder</h4>
                    <p className="text-xs text-slate-600 mb-3">Compare opening and closing ranks for all 24 National Law Universities.</p>
                    <Link href="/colleges?stream=Law" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2 rounded-lg transition">
                      Explore All Law Schools
                    </Link>
                  </div>
                </>
              )}

              {activeMegaMenu === 'exams' && (
                <>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">National Exams</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams/jee-main-2025" className="hover:text-brand-600 font-medium">JEE Main 2025</Link></li>
                      <li><Link href="/exams/jee-advanced-2025" className="hover:text-brand-600 font-medium">JEE Advanced 2025</Link></li>
                      <li><Link href="/exams/neet-ug-2025" className="hover:text-brand-600 font-medium">NEET UG 2025</Link></li>
                      <li><Link href="/exams/cat-2025" className="hover:text-brand-600 font-medium">CAT 2025</Link></li>
                      <li><Link href="/exams/gate-2025" className="hover:text-brand-600 font-medium">GATE 2025</Link></li>
                      <li><Link href="/exams/clat-2025" className="hover:text-brand-600 font-medium">CLAT 2025</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Govt Recruitment</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/exams" className="hover:text-brand-600">UPSC Civil Services (IAS/IPS)</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">SSC CGL & CHSL</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">IBPS PO / Clerk Banking</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">SBI PO & Specialist Officer</Link></li>
                      <li><Link href="/exams" className="hover:text-brand-600">RRB NTPC & Railway Recruitment</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3 border-b pb-1">Exam Resources</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li><Link href="/news" className="hover:text-brand-600">Official Exam Dates Calendar</Link></li>
                      <li><Link href="/news" className="hover:text-brand-600">Admit Card Release Alerts</Link></li>
                      <li><Link href="/news" className="hover:text-brand-600">Answer Keys & Result Portals</Link></li>
                      <li><Link href="/news" className="hover:text-brand-600">Previous Year Papers & Analysis</Link></li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">Exam Hub 2025</h4>
                    <p className="text-xs text-slate-600 mb-3">Track all application dates, eligibility checklists, and syllabus changes.</p>
                    <Link href="/exams" className="block text-center bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 rounded-lg transition">
                      View All 50+ Exams
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} className="flex items-center rounded-lg border border-slate-300 bg-slate-50 px-3 py-2">
            <Search className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search colleges, courses, exams..."
              className="w-full text-sm bg-transparent border-none focus:outline-none"
            />
            <button type="submit" className="bg-brand-600 text-white text-xs px-3 py-1 rounded">
              Go
            </button>
          </form>

          {/* Navigation links */}
          <div className="space-y-2 text-sm font-semibold text-slate-800">
            <Link
              href="/colleges"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Explore All Colleges</span>
              <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-bold">40+</span>
            </Link>
            <Link
              href="/colleges?stream=Engineering"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Engineering & IITs
            </Link>
            <Link
              href="/colleges?stream=Management"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Management & IIMs
            </Link>
            <Link
              href="/colleges?stream=Medical"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Medical & AIIMS
            </Link>
            <Link
              href="/colleges?stream=Law"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Law & NLUs
            </Link>
            <Link
              href="/exams"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Entrance Exams Hub
            </Link>
            <Link
              href="/predictor"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100 text-brand-600 font-bold"
            >
              College & Rank Predictors
            </Link>
            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100 text-amber-600 font-bold"
            >
              Compare Colleges ({comparedColleges.length})
            </Link>
            <Link
              href="/study-abroad"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Study Abroad
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Student Reviews
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-2 rounded hover:bg-slate-100"
            >
              Latest News & Circulars
            </Link>
          </div>

          <div className="pt-2 border-t border-slate-200">
            {user ? (
              <div className="space-y-2">
                <Link
                  href={user.role === 'ADMIN' ? '/admin' : '/dashboard'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-campus-900 text-white py-2 rounded-lg font-bold text-sm"
                >
                  My Dashboard ({user.role})
                </Link>
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="w-full text-center text-red-600 text-sm font-medium py-1"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center border border-slate-300 py-2 rounded-lg text-sm font-semibold text-slate-700"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center bg-brand-600 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

