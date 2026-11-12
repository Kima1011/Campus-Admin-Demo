import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import CollegeCard from '@/components/CollegeCard';
import CollegesFilterView from '@/components/CollegesFilterView';

interface SearchProps {
  searchParams: {
    q?: string;
    stream?: string;
    state?: string;
    type?: string;
    sort?: string;
  };
}

export const revalidate = 30;

export default async function CollegesDirectoryPage({ searchParams }: SearchProps) {
  const q = searchParams.q || '';
  const stream = searchParams.stream || 'All';
  const state = searchParams.state || 'All';
  const collegeType = searchParams.type || 'All';
  const sort = searchParams.sort || 'nirf';

  // Build Prisma where query
  const where: any = {};

  if (q) {
    where.OR = [
      { name: { contains: q } },
      { shortName: { contains: q } },
      { city: { contains: q } },
      { state: { contains: q } },
      { collegeType: { contains: q } },
      { topRecruiters: { contains: q } }
    ];
  }

  if (stream && stream !== 'All') {
    where.courses = {
      some: {
        stream: { contains: stream }
      }
    };
  }

  if (state && state !== 'All') {
    where.state = state;
  }

  if (collegeType && collegeType !== 'All') {
    where.collegeType = collegeType;
  }

  // Sort
  let orderBy: any = { nirfRank: 'asc' };
  if (sort === 'package') {
    orderBy = { averagePackage: 'desc' };
  } else if (sort === 'rating') {
    orderBy = { ratingOverall: 'desc' };
  } else if (sort === 'name') {
    orderBy = { name: 'asc' };
  }

  const colleges = await db.college.findMany({
    where,
    orderBy,
    include: {
      courses: true,
      rankings: true,
      placements: true
    }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Colleges & Universities Directory</span>
        </div>

        {/* Header Title Banner */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              {stream !== 'All' ? `${stream} Colleges in India` : 'Top Colleges & Universities in India'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing <strong className="text-slate-800">{colleges.length}</strong> verified institutions with authentic NIRF 2024 data, placement records, and course fees.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
            Source: <strong className="text-emerald-700">Official Institutional Annual Reports & NIRF 2024</strong>
          </div>
        </div>

        {/* Client Interactive Filter & Grid System */}
        <CollegesFilterView
          initialColleges={colleges}
          initialQuery={q}
          initialStream={stream}
          initialState={state}
          initialType={collegeType}
          initialSort={sort}
        />
      </div>
    </div>
  );
}

