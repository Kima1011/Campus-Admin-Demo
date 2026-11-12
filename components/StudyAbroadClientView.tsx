'use client';

import React, { useState } from 'react';
import {
  Globe2,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Send,
  Building
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface StudyAbroadClientViewProps {
  destinations: any[];
}

export default function StudyAbroadClientView({ destinations }: StudyAbroadClientViewProps) {
  const { openEnquiryModal } = useApp();
  const [selectedCountry, setSelectedCountry] = useState(destinations[0]);

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-campus-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
            <Globe2 className="w-3.5 h-3.5" />
            <span>International Education Admissions Desk</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
            Study Abroad: Guides, Visas & Scholarships
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Compare tuition costs, living budgets, post-study work permits (OPT & PGWP), and scholarship options for Indian students planning higher studies overseas.
          </p>
        </div>

        <button
          onClick={() => openEnquiryModal({ name: 'Study Abroad Master Counseling', slug: 'study-abroad' })}
          className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition shadow-lg flex-shrink-0"
        >
          Book Free Study Abroad Counseling
        </button>
      </div>

      {/* Destination Countries Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {destinations.map((dest) => (
          <button
            key={dest.country}
            onClick={() => setSelectedCountry(dest)}
            className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between h-24 ${
              selectedCountry.country === dest.country
                ? 'bg-brand-600 text-white border-brand-600 shadow-md'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span className="text-2xl">{dest.flag}</span>
            <span className="font-extrabold text-xs block line-clamp-1">{dest.country.split(' (')[0]}</span>
          </button>
        ))}
      </div>

      {/* Selected Country In-Depth Panel */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">{selectedCountry.flag}</span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-campus-950">{selectedCountry.country}</h2>
              <span className="text-xs text-slate-500 font-medium">International Student Guide 2025</span>
            </div>
          </div>

          <button
            onClick={() => openEnquiryModal({ name: `Study in ${selectedCountry.country}`, slug: 'study-abroad' })}
            className="bg-amber-500 hover:bg-amber-400 text-campus-950 font-black text-xs px-5 py-2.5 rounded-xl transition shadow"
          >
            Apply for {selectedCountry.country.split(' (')[0]} Universities
          </button>
        </div>

        {/* 4 Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Average Tuition</span>
            <span className="text-sm font-black text-slate-900 mt-1 block">{selectedCountry.avgTuition}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Living Expenses</span>
            <span className="text-sm font-black text-slate-900 mt-1 block">{selectedCountry.livingCost}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Post-Study Work Visa</span>
            <span className="text-sm font-black text-emerald-700 mt-1 block">{selectedCountry.postStudyVisa}</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Standardized Tests</span>
            <span className="text-sm font-black text-brand-700 mt-1 block">{selectedCountry.exams}</span>
          </div>
        </div>

        {/* Highlights & Top Universities */}
        <div className="space-y-4 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <strong className="text-slate-900 block text-xs">Destination Advantage:</strong>
            <p className="leading-relaxed">{selectedCountry.highlights}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <strong className="text-slate-900 block text-xs">Popular Specializations:</strong>
            <p className="leading-relaxed">{selectedCountry.popularCourses}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <strong className="text-slate-900 block text-xs">Apex Ranked Universities:</strong>
            <p className="leading-relaxed font-semibold text-brand-800">{selectedCountry.topUniversities}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

