import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import {
  Calendar,
  BookOpen,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  Building,
  ChevronRight
} from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function ExamDetailPage({ params }: Props) {
  const exam = await db.exam.findUnique({
    where: { slug: params.slug }
  });

  if (!exam) {
    notFound();
  }

  // Find colleges offering courses that accept this exam
  const acceptingColleges = await db.college.findMany({
    where: {
      courses: {
        some: {
          examAccepted: { contains: exam.shortName }
        }
      }
    },
    take: 6,
    orderBy: { nirfRank: 'asc' },
    select: {
      id: true,
      slug: true,
      name: true,
      shortName: true,
      city: true,
      state: true,
      nirfRank: true,
      averagePackage: true,
      bannerUrl: true
    }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/exams" className="hover:text-brand-600">Entrance Exams</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{exam.name}</span>
        </div>

        {/* Header Hero */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-100">
                {exam.stream} Stream
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                {exam.level} Level
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-100">
                Conducting Body: {exam.conductingBody}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
              {exam.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {exam.overview}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={exam.officialWebsite}
              target="_blank"
              rel="noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow flex items-center space-x-2"
            >
              <span>Visit Official NTA / Exam Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2-Column Details: Left Content + Right Participating Colleges */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Key Schedule Dates */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-campus-950 flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-brand-600" />
                Important Dates & Schedule
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Registration Period</span>
                  <span className="font-extrabold text-sm text-slate-900 mt-1 block">{exam.applicationDate}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Examination Window</span>
                  <span className="font-extrabold text-sm text-brand-700 mt-1 block">{exam.examDate}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Result Declaration</span>
                  <span className="font-extrabold text-sm text-emerald-700 mt-1 block">{exam.resultDate}</span>
                </div>
              </div>
            </div>

            {/* Pattern & Marking Scheme */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-base font-bold text-campus-950 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-amber-500" />
                Exam Pattern & Test Structure
              </h2>
              <div className="space-y-2 text-xs text-slate-700">
                <p><strong>Test Mode:</strong> {exam.mode}</p>
                <p><strong>Duration:</strong> {exam.duration}</p>
                <p><strong>Frequency:</strong> {exam.frequency}</p>
                <p><strong>Pattern Details:</strong> {exam.pattern}</p>
              </div>
            </div>

            {/* Eligibility & Syllabus */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-campus-950 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
                Eligibility Criteria & Syllabus
              </h2>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <strong className="text-amber-900 block mb-1">Academic Eligibility:</strong>
                  <span>{exam.eligibility}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Syllabus Breakdown:</strong>
                  <span>{exam.syllabus}</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <strong className="text-emerald-900 block mb-1">Cutoff Benchmark & Historical Qualifying Marks:</strong>
                  <span>{exam.cutoffDetails}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Rail: Colleges Accepting this Exam */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-campus-950 uppercase tracking-wider border-b pb-2">
                Top Participating Colleges
              </h3>

              <div className="space-y-3">
                {acceptingColleges.length > 0 ? (
                  acceptingColleges.map((c) => (
                    <Link
                      key={c.id}
                      href={`/colleges/${c.slug}`}
                      className="group block p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-campus-900 group-hover:text-brand-600 truncate pr-2">
                          {c.shortName}
                        </span>
                        {c.nirfRank && (
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
                            #{c.nirfRank}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                        <span>{c.city}, {c.state}</span>
                        <span className="font-bold text-brand-600">Avg ₹{c.averagePackage || 'N/A'} LPA</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-xs text-slate-500">Explore directory for full participating college lists.</p>
                )}
              </div>

              <Link
                href="/colleges"
                className="block text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2 rounded-xl transition"
              >
                Browse All Institutes →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

