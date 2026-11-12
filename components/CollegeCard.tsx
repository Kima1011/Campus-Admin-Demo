'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Award,
  Heart,
  Scale,
  Download,
  ShieldCheck,
  Building,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface CollegeCardProps {
  college: {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    collegeType: string;
    ownership: string;
    established: number;
    city: string;
    state: string;
    bannerUrl?: string | null;
    logoUrl?: string | null;
    naacGrade?: string | null;
    nirfRank?: number | null;
    nirfCategory?: string | null;
    highestPackage?: number | null;
    averagePackage?: number | null;
    ratingOverall: number;
    reviewCount: number;
    courses?: { id: string; courseName: string; totalTuitionFee: string }[];
  };
}

export default function CollegeCard({ college }: CollegeCardProps) {
  const {
    isCollegeSaved,
    toggleSaveCollege,
    comparedColleges,
    addToCompare,
    removeFromCompare,
    openEnquiryModal,
    openBrochureModal
  } = useApp();

  const isSaved = isCollegeSaved(college.slug);
  const isCompared = comparedColleges.includes(college.slug);

  const fallbackBanner = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Banner with badges */}
        <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
          <img
            src={college.bannerUrl || fallbackBanner}
            alt={college.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-campus-950/90 via-campus-950/30 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
            <div className="flex flex-wrap gap-1.5">
              {college.nirfRank && (
                <span className="bg-amber-500 text-campus-950 font-black text-[11px] px-2.5 py-0.5 rounded-full shadow flex items-center">
                  <Award className="w-3 h-3 mr-1" /> NIRF #{college.nirfRank}
                </span>
              )}
              {college.naacGrade && (
                <span className="bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] px-2 py-0.5 rounded-full border border-white/20">
                  NAAC {college.naacGrade}
                </span>
              )}
            </div>

            <button
              onClick={() => toggleSaveCollege(college.slug)}
              className={`p-1.5 rounded-full backdrop-blur-md transition shadow ${
                isSaved ? 'bg-rose-50 text-rose-600' : 'bg-slate-900/60 text-white hover:text-rose-400'
              }`}
              title={isSaved ? 'Remove from shortlist' : 'Save college'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`} />
            </button>
          </div>

          {/* Bottom Banner Info */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                {college.collegeType} • {college.ownership}
              </span>
              <span className="text-xs font-semibold text-white flex items-center mt-0.5">
                <MapPin className="w-3 h-3 mr-1 text-slate-300" />
                {college.city}, {college.state}
              </span>
            </div>

            <div className="flex items-center space-x-1 bg-slate-900/90 text-white text-xs font-bold px-2 py-0.5 rounded-lg border border-slate-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{college.ratingOverall.toFixed(1)}</span>
              <span className="text-[10px] text-slate-400">({college.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3">
          <div>
            <Link href={`/colleges/${college.slug}`} className="group-hover:text-brand-600 transition">
              <h3 className="font-bold text-base text-campus-900 leading-snug line-clamp-1">
                {college.name}
              </h3>
            </Link>
            <span className="text-xs font-medium text-slate-500 block mt-0.5">
              Estd. {college.established} • Verified Institutional Source
            </span>
          </div>

          {/* Stats Matrix */}
          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase block">Average CTC</span>
              <span className="font-extrabold text-campus-950 text-sm">
                {college.averagePackage ? `₹${college.averagePackage.toFixed(1)} LPA` : 'Check Profile'}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase block">Highest CTC</span>
              <span className="font-extrabold text-emerald-600 text-sm">
                {college.highestPackage ? `₹${college.highestPackage.toFixed(1)} LPA` : 'N/A'}
              </span>
            </div>
          </div>

          {/* Sample Course Offering */}
          {college.courses && college.courses.length > 0 && (
            <div className="text-xs text-slate-600 pt-1">
              <span className="text-[11px] font-bold text-slate-400 block mb-1 uppercase">Popular Degree</span>
              <div className="flex items-center justify-between font-medium">
                <span className="truncate pr-2 text-slate-800">{college.courses[0].courseName}</span>
                <span className="text-brand-700 font-bold whitespace-nowrap">{college.courses[0].totalTuitionFee}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-4 pt-2 border-t border-slate-100 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              if (isCompared) {
                removeFromCompare(college.slug);
              } else {
                addToCompare(college.slug);
              }
            }}
            className={`flex items-center justify-center space-x-1 py-1.5 px-3 rounded-lg text-xs font-semibold border transition ${
              isCompared
                ? 'bg-amber-500 text-campus-950 border-amber-500 font-bold'
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{isCompared ? 'In Compare' : 'Compare'}</span>
          </button>

          <button
            onClick={() => openBrochureModal({ name: college.name, slug: college.slug })}
            className="flex items-center justify-center space-x-1 py-1.5 px-3 rounded-lg text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Brochure</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href={`/colleges/${college.slug}`}
            className="flex-1 text-center bg-slate-900 hover:bg-campus-800 text-white font-bold text-xs py-2 rounded-xl transition"
          >
            View Details
          </Link>
          <button
            onClick={() => openEnquiryModal({ name: college.name, slug: college.slug })}
            className="flex-1 text-center bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2 rounded-xl transition shadow-sm"
          >
            Apply / Enquire
          </button>
        </div>
      </div>
    </div>
  );
}

