'use client';

import React from 'react';
import Link from 'next/link';
import {
  Heart,
  Scale,
  Compass,
  Building,
  GraduationCap,
  MapPin,
  Trash2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface DashboardClientViewProps {
  allColleges: any[];
}

export default function DashboardClientView({ allColleges }: DashboardClientViewProps) {
  const { user, savedColleges, toggleSaveCollege, openEnquiryModal } = useApp();

  const savedList = allColleges.filter((c) => savedColleges.includes(c.slug));

  return (
    <div className="space-y-6">
      {/* Student Welcome Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block">Student Discovery Dashboard</span>
          <h1 className="text-2xl sm:text-3xl font-black text-campus-950">
            Welcome, {user ? user.name : 'Candidate'}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Track your shortlisted institutions, application enquiries, and personalized cutoff predictors.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href="/predictor"
            className="bg-amber-500 hover:bg-amber-400 text-campus-950 font-black text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center space-x-1.5"
          >
            <Compass className="w-4 h-4" />
            <span>Launch Predictor</span>
          </Link>
          <Link
            href="/compare"
            className="bg-campus-900 hover:bg-campus-950 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center space-x-1.5"
          >
            <Scale className="w-4 h-4" />
            <span>Compare Deck</span>
          </Link>
        </div>
      </div>

      {/* Shortlisted Colleges Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="text-lg font-bold text-campus-950">
              Shortlisted Colleges ({savedList.length})
            </h2>
          </div>
          <Link href="/colleges" className="text-xs font-bold text-brand-600 hover:underline">
            + Discover More Colleges
          </Link>
        </div>

        {savedList.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm text-slate-800">No colleges shortlisted yet</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Click the heart icon on any college profile or card to save institutions to your shortlist for quick comparison and tracking.
            </p>
            <Link
              href="/colleges"
              className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-5 py-2 rounded-xl transition shadow"
            >
              Browse Top 40+ Colleges
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {savedList.map((col) => (
              <div
                key={col.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      NIRF #{col.nirfRank || 'Ranked'}
                    </span>
                    <button
                      onClick={() => toggleSaveCollege(col.slug)}
                      className="p-1 text-slate-400 hover:text-red-500 transition"
                      title="Remove from shortlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <Link href={`/colleges/${col.slug}`} className="hover:text-brand-600 font-extrabold text-sm text-campus-950 block mt-2 line-clamp-1">
                    {col.name}
                  </Link>

                  <span className="text-xs text-slate-500 flex items-center mt-0.5">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                    {col.city}, {col.state}
                  </span>

                  <div className="mt-2 text-xs font-semibold text-emerald-700">
                    Avg Package: ₹{col.averagePackage || 'N/A'} LPA
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-slate-200/60">
                  <Link
                    href={`/colleges/${col.slug}`}
                    className="flex-1 text-center bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-xs py-1.5 rounded-lg transition"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => openEnquiryModal({ name: col.name, slug: col.slug })}
                    className="flex-1 text-center bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-1.5 rounded-lg transition"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Counselling Lead Status */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-campus-950 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-brand-600" />
          Active Counseling Inquiries
        </h2>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-amber-950 block">National Engineering & MBA Counseling Desk</span>
            <span className="text-amber-800">Status: <strong className="text-emerald-700">Counselor Assigned</strong></span>
          </div>
          <button
            onClick={() => openEnquiryModal()}
            className="bg-amber-500 hover:bg-amber-600 text-campus-950 font-bold px-4 py-2 rounded-xl transition"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    </div>
  );
}

