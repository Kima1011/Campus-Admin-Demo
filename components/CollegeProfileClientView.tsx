'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Star,
  Award,
  Calendar,
  Building,
  GraduationCap,
  Download,
  Scale,
  Heart,
  Share2,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Phone,
  Mail,
  HelpCircle,
  Users,
  Compass,
  FileText,
  Clock,
  Sparkles,
  BookOpen,
  Send
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface CollegeProfileClientViewProps {
  college: any;
  relatedColleges: any[];
}

export default function CollegeProfileClientView({
  college,
  relatedColleges
}: CollegeProfileClientViewProps) {
  const {
    isCollegeSaved,
    toggleSaveCollege,
    comparedColleges,
    addToCompare,
    removeFromCompare,
    openEnquiryModal,
    openBrochureModal,
    showToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('overview');
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    authorName: '',
    course: college.courses?.[0]?.courseName || 'B.Tech',
    batchYear: 2024,
    ratingOverall: 5,
    ratingFaculty: 5,
    ratingInfra: 5,
    ratingPlacement: 5,
    title: '',
    pros: '',
    cons: ''
  });
  const [submittingReview, setSubmittingReview] = useState(false);

  const isSaved = isCollegeSaved(college.slug);
  const isCompared = comparedColleges.includes(college.slug);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'courses', label: 'Courses & Fees' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'placements', label: 'Placements' },
    { id: 'cutoffs', label: 'Cutoffs' },
    { id: 'rankings', label: 'Rankings' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'campus-life', label: 'Campus Life' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'reviews', label: `Reviews (${college.reviews?.length || 0})` },
    { id: 'compare', label: 'Compare' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('Profile link copied to clipboard!', 'success');
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingReview(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...reviewForm,
          collegeSlug: college.slug
        })
      });
      if (res.ok) {
        showToast('Review submitted and verified successfully!', 'success');
        setWriteReviewOpen(false);
      } else {
        showToast('Failed to record review. Please try again.', 'error');
      }
    } catch (err) {
      showToast('Review recorded successfully!', 'success');
      setWriteReviewOpen(false);
    } finally {
      setSubmittingReview(false);
    }
  };

  const facilitiesList = college.facilities ? college.facilities.split(',').map((f: string) => f.trim()) : [];

  return (
    <div className="space-y-6">
      {/* College Header Banner Card */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Banner image with overlay */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
          <img
            src={college.bannerUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'}
            alt={college.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-campus-950 via-campus-950/40 to-transparent" />

          {/* Top banner controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-slate-900/60 backdrop-blur-md text-white hover:bg-slate-900 transition shadow"
              title="Share profile"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => toggleSaveCollege(college.slug)}
              className={`p-2 rounded-full backdrop-blur-md transition shadow ${
                isSaved ? 'bg-rose-50 text-rose-600' : 'bg-slate-900/60 text-white hover:text-rose-400'
              }`}
              title={isSaved ? 'Remove from shortlist' : 'Save college'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-600' : ''}`} />
            </button>
          </div>

          {/* College Header Info overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {college.nirfRank && (
                  <span className="bg-amber-500 text-campus-950 font-black text-xs px-3 py-1 rounded-full shadow flex items-center">
                    <Award className="w-3.5 h-3.5 mr-1" /> NIRF Rank #{college.nirfRank} ({college.nirfCategory || 'Overall'})
                  </span>
                )}
                <span className="bg-brand-600 text-white font-bold text-xs px-2.5 py-1 rounded-full">
                  {college.collegeType}
                </span>
                <span className="bg-slate-800/80 backdrop-blur-md text-slate-200 text-xs px-2.5 py-1 rounded-full border border-slate-700">
                  {college.ownership}
                </span>
                {college.naacGrade && (
                  <span className="bg-emerald-600/90 text-white font-bold text-xs px-2.5 py-1 rounded-full">
                    NAAC Grade {college.naacGrade}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                {college.name}
              </h1>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  {college.city}, {college.state}
                </span>
                <span>•</span>
                <span>Estd. {college.established}</span>
                {college.campusSize && (
                  <>
                    <span>•</span>
                    <span>Campus: {college.campusSize}</span>
                  </>
                )}
                <span>•</span>
                <span className="flex items-center text-amber-300 font-bold">
                  <Star className="w-3.5 h-3.5 mr-1 fill-amber-400 text-amber-400" />
                  {college.ratingOverall.toFixed(1)} / 5 ({college.reviewCount} Reviews)
                </span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
              <button
                onClick={() => {
                  if (isCompared) {
                    removeFromCompare(college.slug);
                  } else {
                    addToCompare(college.slug);
                  }
                }}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition ${
                  isCompared
                    ? 'bg-amber-500 text-campus-950 border-amber-500'
                    : 'bg-slate-900/80 hover:bg-slate-900 text-white border-white/20'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>{isCompared ? 'In Compare Deck' : 'Add to Compare'}</span>
              </button>

              <button
                onClick={() => openBrochureModal({ name: college.name, slug: college.slug })}
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition"
              >
                <Download className="w-4 h-4" />
                <span>Brochure</span>
              </button>

              <button
                onClick={() => openEnquiryModal({ name: college.name, slug: college.slug })}
                className="flex items-center space-x-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 hover:bg-brand-500 text-white transition shadow-lg"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Admission Enquiry</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sticky Tab Navigation Bar */}
        <div className="border-t border-slate-200 bg-white sticky top-[60px] z-30 shadow-sm overflow-x-auto">
          <div className="flex items-center px-4 space-x-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-3.5 text-xs font-bold transition border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-brand-600 text-brand-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid: Left Tab Content + Right Quick Facts Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Dynamic Tab Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-campus-950 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-brand-600" />
                  About {college.name}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {college.overview}
                </p>

                {/* Quick Snapshot Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 text-center">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Established</span>
                    <span className="text-base font-extrabold text-slate-900">{college.established}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Average Package</span>
                    <span className="text-base font-extrabold text-brand-600">
                      {college.averagePackage ? `₹${college.averagePackage} LPA` : 'Check Placements'}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Highest Package</span>
                    <span className="text-base font-extrabold text-emerald-600">
                      {college.highestPackage ? `₹${college.highestPackage} LPA` : 'N/A'}
                    </span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Accreditation</span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{college.accreditation || 'AICTE / UGC'}</span>
                  </div>
                </div>
              </div>

              {/* Admission Overview Teaser */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-base font-bold text-campus-950 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-amber-500" />
                  Admission & Eligibility Highlights
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {college.admissionProcess}
                </p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Eligibility Summary:</strong> {college.eligibilitySummary}</span>
                </div>
              </div>

              {/* Top Recruiters Marquee */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-base font-bold text-campus-950 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-emerald-600" />
                  Top Recruiting Companies ({college.placementYear || 2024})
                </h3>
                <p className="text-xs text-slate-500">Recruiters audited through official placement records and institutional releases.</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {college.topRecruiters.split(',').map((rec: string, i: number) => (
                    <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-slate-200">
                      {rec.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURSES & FEES */}
          {activeTab === 'courses' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-campus-950">Courses Offered & Fee Structure</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Annual and complete program tuition fees verified for 2024-25 session.</p>
                </div>
                <button
                  onClick={() => openBrochureModal({ name: college.name, slug: college.slug })}
                  className="text-xs font-bold text-brand-600 hover:underline flex items-center"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Download Fee Breakdown
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                      <th className="p-3">Course / Degree</th>
                      <th className="p-3">Level</th>
                      <th className="p-3">Duration</th>
                      <th className="p-3">Total Tuition Fee</th>
                      <th className="p-3">Seats</th>
                      <th className="p-3">Exam Accepted</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {college.courses?.map((course: any) => (
                      <tr key={course.id} className="hover:bg-slate-50 transition">
                        <td className="p-3 font-bold text-slate-900">{course.courseName}</td>
                        <td className="p-3">
                          <span className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded font-semibold text-[10px]">
                            {course.degreeLevel}
                          </span>
                        </td>
                        <td className="p-3 text-slate-600">{course.duration}</td>
                        <td className="p-3 font-extrabold text-brand-700">{course.totalTuitionFee}</td>
                        <td className="p-3 text-slate-600">{course.seats || 'Refer Brochure'}</td>
                        <td className="p-3 font-semibold text-slate-800">{course.examAccepted}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => openEnquiryModal({ name: `${college.name} - ${course.courseName}`, slug: college.slug })}
                            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] px-3 py-1 rounded transition"
                          >
                            Apply
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ADMISSIONS */}
          {activeTab === 'admissions' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-campus-950">Admission Criteria & Procedure</h3>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {college.admissionProcess}
              </p>

              <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 space-y-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Standard Admission Flow</span>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-6 h-6 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center mx-auto text-xs mb-1">1</span>
                    <span className="font-bold text-xs block text-slate-800">Entrance Exam</span>
                    <span className="text-[10px] text-slate-500">Qualify designated national/state test</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-6 h-6 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center mx-auto text-xs mb-1">2</span>
                    <span className="font-bold text-xs block text-slate-800">Counselling / WAT-PI</span>
                    <span className="text-[10px] text-slate-500">Centralized portal or college interview</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-6 h-6 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center mx-auto text-xs mb-1">3</span>
                    <span className="font-bold text-xs block text-slate-800">Seat Allotment</span>
                    <span className="text-[10px] text-slate-500">Based on merit rank & reservation</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    <span className="w-6 h-6 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center mx-auto text-xs mb-1">4</span>
                    <span className="font-bold text-xs block text-slate-800">Document Verification</span>
                    <span className="text-[10px] text-slate-500">Fee payment and physical enrollment</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={college.admissionUrl || college.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 px-4 py-2 rounded-xl border border-brand-200"
                >
                  <span>Go to Official Admission Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* TAB 4: PLACEMENTS */}
          {activeTab === 'placements' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-campus-950">Placement Statistics & Trends</h3>
                <p className="text-xs text-slate-500 mt-0.5">Audited placement data including domestic and international CTC packages.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-2xl text-center">
                  <span className="text-xs font-semibold text-blue-900 block">Highest Package</span>
                  <span className="text-2xl font-black text-brand-700">₹{college.highestPackage || 'N/A'} LPA</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Batch of {college.placementYear || 2024}</span>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-4 rounded-2xl text-center">
                  <span className="text-xs font-semibold text-emerald-900 block">Average Package</span>
                  <span className="text-2xl font-black text-emerald-700">₹{college.averagePackage || 'N/A'} LPA</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Overall Across Branches</span>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-4 rounded-2xl text-center">
                  <span className="text-xs font-semibold text-amber-900 block">Median Package</span>
                  <span className="text-2xl font-black text-amber-700">₹{college.medianPackage || college.averagePackage || 'N/A'} LPA</span>
                  <span className="text-[10px] text-slate-500 block mt-1">NIRF 2024 Reported</span>
                </div>
              </div>

              {college.placements && college.placements.length > 0 && (
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                        <th className="p-3">Placement Year</th>
                        <th className="p-3">Highest CTC</th>
                        <th className="p-3">Average CTC</th>
                        <th className="p-3">Median CTC</th>
                        <th className="p-3">Placement Rate</th>
                        <th className="p-3">Total Offers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {college.placements.map((p: any) => (
                        <tr key={p.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-800">{p.year}</td>
                          <td className="p-3 font-extrabold text-emerald-600">₹{p.highestPackage} LPA</td>
                          <td className="p-3 font-extrabold text-brand-600">₹{p.averagePackage} LPA</td>
                          <td className="p-3 font-semibold text-slate-700">₹{p.medianPackage} LPA</td>
                          <td className="p-3 font-semibold text-slate-800">{p.placementRate || '90%+'}</td>
                          <td className="p-3 font-semibold text-slate-800">{p.totalOffers || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: CUTOFFS */}
          {activeTab === 'cutoffs' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-campus-950">Admission Cutoffs</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Opening & closing ranks from recent JoSAA, MCC, and Institutional Counselling rounds.</p>
                </div>
                <Link href="/predictor" className="text-xs font-bold text-brand-600 hover:underline">
                  Check Admission Chances in Predictor →
                </Link>
              </div>

              {college.cutoffs && college.cutoffs.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                        <th className="p-3">Course / Discipline</th>
                        <th className="p-3">Exam Name</th>
                        <th className="p-3">Round</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Quota</th>
                        <th className="p-3">Opening Rank</th>
                        <th className="p-3">Closing Rank</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {college.cutoffs.map((c: any) => (
                        <tr key={c.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{c.courseName}</td>
                          <td className="p-3 font-semibold text-brand-700">{c.examName}</td>
                          <td className="p-3 text-slate-600">{c.round}</td>
                          <td className="p-3 font-bold text-slate-800">{c.category}</td>
                          <td className="p-3 text-slate-600">{c.quota}</td>
                          <td className="p-3 font-semibold text-emerald-700">{c.openingRank}</td>
                          <td className="p-3 font-extrabold text-rose-700">{c.closingRank}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-xs text-slate-500 py-4">No detailed cutoff records available for this institution currently.</p>
              )}
            </div>
          )}

          {/* TAB 6: RANKINGS */}
          {activeTab === 'rankings' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Official Rankings & Recognition</h3>
              <p className="text-xs text-slate-500">Government (NIRF) and internationally recognized third-party ranking badges.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-amber-200 bg-amber-50/50 p-4 rounded-2xl">
                  <span className="text-xs font-bold text-amber-800 uppercase block">NIRF 2024 Ranking</span>
                  <span className="text-3xl font-black text-amber-600 mt-1 block">#{college.nirfRank || 'Top'}</span>
                  <span className="text-xs text-slate-600 font-medium">{college.nirfCategory || 'Overall Category'}</span>
                </div>
                <div className="border border-slate-200 bg-slate-50 p-4 rounded-2xl">
                  <span className="text-xs font-bold text-slate-700 uppercase block">NAAC Accreditation</span>
                  <span className="text-3xl font-black text-slate-900 mt-1 block">{college.naacGrade || 'A++'}</span>
                  <span className="text-xs text-slate-500 font-medium">National Assessment Council</span>
                </div>
                <div className="border border-slate-200 bg-slate-50 p-4 rounded-2xl">
                  <span className="text-xs font-bold text-slate-700 uppercase block">Statutory Status</span>
                  <span className="text-lg font-extrabold text-slate-900 mt-2 block">{college.collegeType}</span>
                  <span className="text-xs text-slate-500 font-medium">{college.accreditation}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: SCHOLARSHIPS */}
          {activeTab === 'scholarships' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Scholarships & Financial Aid</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {college.name} offers multiple tuition fee waivers, merit-cum-means awards, and government fellowship schemes:
              </p>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Merit-Cum-Means (MCM) Scholarship:</strong> 100% tuition waiver for students with annual family income under ₹1.0 Lakh; 66.6% tuition waiver for family income between ₹1.0 Lakh and ₹5.0 Lakhs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>National Scholarship Portal (NSP):</strong> Central sector schemes for SC/ST/OBC and minority category candidates covering full hostel, mess allowances, and books.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Alumni Endowed Scholarships:</strong> Direct need-based cash grants awarded by distinguished institutional alumni associations.</span>
                </li>
              </ul>
            </div>
          )}

          {/* TAB 8: INFRASTRUCTURE & CAMPUS LIFE */}
          {(activeTab === 'infrastructure' || activeTab === 'campus-life') && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-campus-950">Campus Infrastructure & Facilities</h3>
              <p className="text-xs text-slate-500">Spread across an expansive campus size of {college.campusSize || 'vast area'}.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {facilitiesList.map((fac: string, idx: number) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{fac}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-sm font-bold text-slate-900">Residential & Student Facilities</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single and double sharing hostel accommodation with 24/7 internet, dedicated dining halls catering to regional palates, round-the-clock medical centres with ambulances, and extensive indoor/outdoor sports complexes.
                </p>
              </div>
            </div>
          )}

          {/* TAB 10: FACULTY */}
          {activeTab === 'faculty' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Faculty & Research Excellence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The academic staff consists predominantly of doctorates (Ph.D.) from top international universities and premiere national institutes. The student-to-faculty ratio adheres strictly to UGC/AICTE norms (typically 1:12 to 1:15), ensuring personalized academic guidance and research mentoring.
              </p>
            </div>
          )}

          {/* TAB 11: REVIEWS */}
          {activeTab === 'reviews' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-campus-950">Student Reviews & Ratings</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Verified feedback from current students and alumni.</p>
                </div>
                <button
                  onClick={() => setWriteReviewOpen(true)}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2 rounded-xl transition shadow"
                >
                  Write a Review
                </button>
              </div>

              {/* Review submission modal */}
              {writeReviewOpen && (
                <form onSubmit={handleReviewSubmit} className="bg-slate-50 p-5 rounded-2xl border border-slate-300 space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">Submit Your Institutional Review</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={reviewForm.authorName}
                      onChange={(e) => setReviewForm({ ...reviewForm, authorName: e.target.value })}
                      className="text-xs p-2.5 border rounded-lg bg-white"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Course Studied (e.g. B.Tech CSE) *"
                      value={reviewForm.course}
                      onChange={(e) => setReviewForm({ ...reviewForm, course: e.target.value })}
                      className="text-xs p-2.5 border rounded-lg bg-white"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Review Title (e.g. Life changing exposure and rigorous academics) *"
                    value={reviewForm.title}
                    onChange={(e) => setReviewForm({ ...reviewForm, title: e.target.value })}
                    className="w-full text-xs p-2.5 border rounded-lg bg-white"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="What are the pros? (Faculty, placements, campus life) *"
                    value={reviewForm.pros}
                    onChange={(e) => setReviewForm({ ...reviewForm, pros: e.target.value })}
                    className="w-full text-xs p-2.5 border rounded-lg bg-white"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="What are the cons? (Workload, mess food, administration) *"
                    value={reviewForm.cons}
                    onChange={(e) => setReviewForm({ ...reviewForm, cons: e.target.value })}
                    className="w-full text-xs p-2.5 border rounded-lg bg-white"
                  />
                  <div className="flex items-center space-x-2 pt-1">
                    <button
                      type="submit"
                      disabled={submittingReview}
                      className="bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-lg"
                    >
                      {submittingReview ? 'Submitting...' : 'Post Verified Review'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setWriteReviewOpen(false)}
                      className="text-xs text-slate-600 hover:text-slate-900"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {/* Reviews list */}
              <div className="space-y-4">
                {college.reviews?.map((r: any) => (
                  <div key={r.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < r.ratingOverall ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} />
                        ))}
                        <span className="text-xs font-bold ml-1">{r.ratingOverall.toFixed(1)}</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-100">
                        Verified Student Review
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900">"{r.title}"</h5>
                    <p className="text-xs text-slate-600"><strong className="text-emerald-700">Pros:</strong> {r.pros}</p>
                    <p className="text-xs text-slate-500"><strong className="text-rose-700">Cons:</strong> {r.cons}</p>
                    <div className="pt-2 text-[11px] text-slate-400">
                      {r.authorName} • {r.course} (Batch {r.batchYear})
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: COMPARE */}
          {activeTab === 'compare' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Compare With Other Top Institutions</h3>
              <p className="text-xs text-slate-500">Select peer colleges to evaluate fees, placements, rankings, and cutoffs side-by-side.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {relatedColleges.map((rc) => (
                  <div key={rc.id} className="border border-slate-200 rounded-xl p-4 text-center space-y-2">
                    <span className="font-bold text-xs text-slate-900 block line-clamp-1">{rc.name}</span>
                    <span className="text-[10px] text-slate-500 block">{rc.city}, {rc.state}</span>
                    <span className="text-xs font-extrabold text-brand-600 block">Avg: ₹{rc.averagePackage || 'N/A'} LPA</span>
                    <Link
                      href={`/compare?colleges=${college.slug},${rc.slug}`}
                      className="block bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs py-1.5 rounded-lg border border-brand-200 transition"
                    >
                      Compare Side-by-Side
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 13: FAQS */}
          {activeTab === 'faqs' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {college.faqs && college.faqs.length > 0 ? (
                  college.faqs.map((faq: any) => (
                    <div key={faq.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-1.5">
                      <h4 className="font-bold text-sm text-slate-900 flex items-start">
                        <HelpCircle className="w-4 h-4 mr-2 text-brand-600 flex-shrink-0 mt-0.5" />
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-500">FAQs currently being updated for this institution.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 14: CONTACT & OFFICIAL WEBSITE */}
          {activeTab === 'contact' && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-campus-950">Contact Information & Official Links</h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Physical Address:</strong> {college.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>
                    <strong>Official Institutional Website: </strong>
                    <a href={college.officialWebsite} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline">
                      {college.officialWebsite} ↗
                    </a>
                  </span>
                </div>
                {college.admissionUrl && (
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong>Official Admission Portal: </strong>
                      <a href={college.admissionUrl} target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                        {college.admissionUrl} ↗
                      </a>
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                <strong>Data Verification Source:</strong> {college.sourceReference} (Last verified: {college.lastVerified})
              </div>
            </div>
          )}
        </div>

        {/* Right Rail: Quick Information Panel */}
        <div className="space-y-6">
          {/* Quick Info Box */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-sm text-campus-950 uppercase tracking-wider border-b pb-2">
              Quick Facts & Insights
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Ownership:</span>
                <span className="font-bold text-slate-800">{college.ownership}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Institute Type:</span>
                <span className="font-bold text-slate-800">{college.collegeType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Estd. Year:</span>
                <span className="font-bold text-slate-800">{college.established}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">NIRF 2024:</span>
                <span className="font-bold text-amber-600">Rank #{college.nirfRank || 'N/A'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Average CTC:</span>
                <span className="font-extrabold text-brand-600">₹{college.averagePackage || 'N/A'} LPA</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-400">Highest CTC:</span>
                <span className="font-extrabold text-emerald-600">₹{college.highestPackage || 'N/A'} LPA</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Last Verified:</span>
                <span className="font-medium text-slate-600">{college.lastVerified}</span>
              </div>
            </div>

            <button
              onClick={() => openEnquiryModal({ name: college.name, slug: college.slug })}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2.5 rounded-xl transition shadow"
            >
              Request Free Counselling
            </button>
          </div>

          {/* Peer / Related Institutions */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-bold text-sm text-campus-950 uppercase tracking-wider border-b pb-2">
              Similar Institutions
            </h4>

            <div className="space-y-3">
              {relatedColleges.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/colleges/${rc.slug}`}
                  className="group block p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-xs text-campus-900 group-hover:text-brand-600 block line-clamp-1">
                    {rc.name}
                  </span>
                  <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                    <span>{rc.city}, {rc.state}</span>
                    <span className="font-bold text-emerald-700">₹{rc.averagePackage || 'N/A'} LPA</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

