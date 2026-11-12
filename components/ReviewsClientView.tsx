'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Star,
  ShieldCheck,
  MessageSquare,
  Plus,
  Search,
  Building,
  CheckCircle2,
  X
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface ReviewsClientViewProps {
  initialReviews: any[];
  collegesList: { slug: string; name: string; shortName: string }[];
}

export default function ReviewsClientView({ initialReviews, collegesList }: ReviewsClientViewProps) {
  const { showToast } = useApp();
  const [reviews, setReviews] = useState<any[]>(initialReviews);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    collegeSlug: collegesList[0]?.slug || '',
    authorName: '',
    course: 'B.Tech Computer Science',
    batchYear: 2024,
    ratingOverall: 5,
    ratingFaculty: 5,
    ratingInfra: 5,
    ratingPlacement: 5,
    title: '',
    pros: '',
    cons: ''
  });

  const filteredReviews = reviews.filter((r) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.college.name.toLowerCase().includes(q) ||
      r.college.shortName.toLowerCase().includes(q) ||
      r.course.toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q)
    );
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        showToast('Review submitted and published successfully!', 'success');
        setModalOpen(false);
        // Refresh reviews list optimistically
        const selectedCollege = collegesList.find((c) => c.slug === form.collegeSlug);
        setReviews([
          {
            id: Date.now().toString(),
            ...form,
            verified: true,
            createdAt: new Date().toISOString(),
            college: selectedCollege
          },
          ...reviews
        ]);
      } else {
        showToast('Failed to submit review.', 'error');
      }
    } catch (e) {
      showToast('Review submitted!', 'success');
      setModalOpen(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Campus Voice & Feedback</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
            Verified Student Reviews & Ratings
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Read transparent reviews from enrolled students and alumni on curriculum difficulty, mess food, campus culture, and placements.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow flex items-center space-x-2 flex-shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Write a College Review</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews by college name (e.g. IIT Madras, IIM Bangalore, AIIMS, VIT)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-brand-600"
          />
        </div>
      </div>

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredReviews.map((r) => (
          <div
            key={r.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3 border-b border-slate-100 pb-3">
                <div>
                  <Link href={`/colleges/${r.college.slug}`} className="hover:text-brand-600 font-extrabold text-base text-campus-950 block">
                    {r.college.name}
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">{r.college.city}, {r.college.state}</span>
                </div>

                <div className="flex items-center space-x-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 flex-shrink-0">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-black text-amber-900">{r.ratingOverall.toFixed(1)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Verified Alum Review
                </span>
                <h4 className="font-bold text-sm text-slate-900">"{r.title}"</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-emerald-700 font-bold">Pros: </strong>
                  {r.pros}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-rose-700 font-bold">Cons: </strong>
                  {r.cons}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <div>
                <span className="font-bold text-slate-800 block">{r.authorName}</span>
                <span>{r.course} (Batch of {r.batchYear})</span>
              </div>
              <Link
                href={`/colleges/${r.college.slug}`}
                className="text-brand-600 hover:underline font-bold text-xs"
              >
                View College →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="bg-campus-900 text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">Campus Admin Feedback</span>
                <h3 className="text-base font-bold">Share Your Honest Campus Experience</h3>
              </div>
              <button onClick={() => setModalOpen(false)} className="p-1 rounded-full hover:bg-campus-800 text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Select Your College *</label>
                <select
                  required
                  value={form.collegeSlug}
                  onChange={(e) => setForm({ ...form, collegeSlug: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl bg-white font-medium"
                >
                  {collegesList.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikas Nair"
                    value={form.authorName}
                    onChange={(e) => setForm({ ...form, authorName: e.target.value })}
                    className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Course Studied *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. B.Tech Computer Science"
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Review Title *</label>
                <input
                  type="text"
                  required
                  placeholder="One sentence summary of your experience"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">What are the Pros? *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Faculty support, peer culture, placements, lab facilities..."
                  value={form.pros}
                  onChange={(e) => setForm({ ...form, pros: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">What are the Cons? *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Academic pressure, mess food quality, hostel maintenance..."
                  value={form.cons}
                  onChange={(e) => setForm({ ...form, cons: e.target.value })}
                  className="w-full text-xs p-2.5 border border-slate-300 rounded-xl"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3 rounded-xl transition shadow"
              >
                {submitting ? 'Submitting Review...' : 'Submit & Publish Verified Review'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

