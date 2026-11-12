'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  Building,
  BookOpen,
  Calendar,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Compass,
  ArrowRight
} from 'lucide-react';

interface HomeSearchHeroProps {
  totalCount: number;
}

export default function HomeSearchHero({ totalCount }: HomeSearchHeroProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'colleges' | 'courses' | 'exams' | 'universities'>('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [streamFilter, setStreamFilter] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'exams') {
      router.push(`/exams${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`);
    } else if (activeTab === 'courses') {
      router.push(`/courses${searchQuery.trim() ? `?q=${encodeURIComponent(searchQuery.trim())}` : ''}`);
    } else {
      router.push(`/colleges?q=${encodeURIComponent(searchQuery.trim())}${streamFilter !== 'All' ? `&stream=${encodeURIComponent(streamFilter)}` : ''}`);
    }
  };

  const trendingTags = [
    { label: 'IIT Madras', query: 'IIT Madras' },
    { label: 'IIM Ahmedabad', query: 'IIM Ahmedabad' },
    { label: 'AIIMS New Delhi', query: 'AIIMS' },
    { label: 'JEE Main 2025', isExam: true },
    { label: 'BITS Pilani', query: 'BITS Pilani' },
    { label: 'NLSIU Law', query: 'NLSIU' },
    { label: 'NEET UG 2025', isExam: true }
  ];

  return (
    <div className="relative bg-gradient-to-b from-campus-900 via-slate-900 to-campus-950 text-white pt-12 pb-16 px-4 sm:px-8 border-b border-campus-800 overflow-hidden">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        {/* Top verified badge pill */}
        <div className="inline-flex items-center space-x-2 bg-campus-800/80 border border-campus-700 px-3.5 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Verified Higher Education Discovery Network</span>
          <span className="text-slate-500">•</span>
          <span className="text-amber-400 font-bold">NIRF 2024 Authenticated</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Find Your Dream College, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300">
              Cutoffs, Fees & Placements
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore {totalCount}+ premier institutions, official NIRF rankings, verified course fees, and accurate cutoff trends across India.
          </p>
        </div>

        {/* Omnisearch Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-3 sm:p-4 text-slate-900 shadow-2xl border border-slate-200">
          {/* Search Category Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 border-b border-slate-200 pb-2.5 mb-3 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('colleges')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'colleges'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Colleges & Institutes</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('courses')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'courses'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Courses & Specializations</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exams')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'exams'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Entrance Exams 2025</span>
            </button>
          </div>

          {/* Search Input Row */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2">
            {activeTab === 'colleges' && (
              <div className="w-full sm:w-auto flex-shrink-0">
                <select
                  value={streamFilter}
                  onChange={(e) => setStreamFilter(e.target.value)}
                  className="w-full sm:w-auto bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
                >
                  <option value="All">All Streams</option>
                  <option value="Engineering">Engineering (B.Tech)</option>
                  <option value="Management">Management (MBA)</option>
                  <option value="Medical">Medical (MBBS)</option>
                  <option value="Design">Design & Fashion</option>
                  <option value="Law">Law & Legal</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Humanities</option>
                  <option value="Hospitality">Hospitality</option>
                </select>
              </div>
            )}

            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  activeTab === 'colleges'
                    ? 'Search by college name, city (e.g. IIT Madras, IIM Bangalore, Delhi)...'
                    : activeTab === 'courses'
                    ? 'Search courses (e.g. B.Tech Computer Science, MBA Finance, MBBS)...'
                    : 'Search entrance exams (e.g. JEE Main, NEET UG, CAT, GATE)...'
                }
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100 text-slate-900 font-medium placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm px-7 py-2.5 rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center space-x-1.5 flex-shrink-0"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Trending Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-medium flex items-center">
            <TrendingUp className="w-3.5 h-3.5 mr-1 text-amber-400" /> Trending:
          </span>
          {trendingTags.map((tag, i) => (
            <Link
              key={i}
              href={tag.isExam ? '/exams' : `/colleges?q=${encodeURIComponent(tag.query || tag.label)}`}
              className="bg-campus-800/80 hover:bg-campus-700 text-slate-200 hover:text-white px-2.5 py-1 rounded-lg border border-campus-700 transition"
            >
              {tag.label}
            </Link>
          ))}
        </div>

        {/* Key Metrics Strip */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-campus-800/80 text-center">
          <div>
            <span className="text-xl sm:text-2xl font-black text-white">{totalCount}+</span>
            <span className="text-[11px] text-slate-400 block font-medium">Verified Institutions</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-amber-400">100%</span>
            <span className="text-[11px] text-slate-400 block font-medium">Official Data Sources</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-emerald-400">₹2.6 Cr</span>
            <span className="text-[11px] text-slate-400 block font-medium">Highest Tracked CTC</span>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-black text-sky-400">Free</span>
            <span className="text-[11px] text-slate-400 block font-medium">Student Counseling</span>
          </div>
        </div>
      </div>
    </div>
  );
}

