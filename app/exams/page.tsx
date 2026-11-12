import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  Calendar,
  Search,
  BookOpen,
  Award,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';

interface Props {
  searchParams: {
    q?: string;
    stream?: string;
  };
}

export const revalidate = 60;

export default async function ExamsDirectoryPage({ searchParams }: Props) {
  const q = searchParams.q || '';
  const stream = searchParams.stream || 'All';

  const where: any = {};
  if (q) {
    where.OR = [
      { name: { contains: q } },
      { shortName: { contains: q } },
      { conductingBody: { contains: q } },
      { stream: { contains: q } }
    ];
  }

  if (stream && stream !== 'All') {
    where.stream = stream;
  }

  const exams = await db.exam.findMany({
    where,
    orderBy: { isPopular: 'desc' }
  });

  const streams = ['All', 'Engineering', 'Medical', 'Management', 'Law'];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Entrance Examinations Hub</span>
        </div>

        {/* Header Title */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>National & State Entrance Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
              Entrance Examinations 2025
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Track dates, application forms, eligibility criteria, exam patterns, and qualifying cutoffs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {streams.map((s) => (
              <Link
                key={s}
                href={`/exams?stream=${encodeURIComponent(s)}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                  stream === s ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {exam.stream}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {exam.level} Level
                  </span>
                </div>

                <Link href={`/exams/${exam.slug}`} className="hover:text-brand-600 font-extrabold text-lg text-campus-950 block leading-tight">
                  {exam.name}
                </Link>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {exam.overview}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Exam Date:</span>
                    <span className="font-bold text-slate-800">{exam.examDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Application:</span>
                    <span className="font-semibold text-slate-700">{exam.applicationDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Mode:</span>
                    <span className="font-semibold text-slate-800">{exam.mode}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/exams/${exam.slug}`}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center"
                >
                  <span>Syllabus & Details</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>

                <a
                  href={exam.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center"
                >
                  <span>Official Site</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

