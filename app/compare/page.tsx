import React from 'react';
import { db } from '@/lib/db';
import CompareClientView from '@/components/CompareClientView';

interface Props {
  searchParams: {
    colleges?: string;
  };
}

export const revalidate = 30;

export default async function ComparePage({ searchParams }: Props) {
  const collegeSlugs = (searchParams.colleges || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  // If no colleges requested, default to top 2 premier institutions (IIT Madras and IIT Delhi) for immediate demonstration
  const targetSlugs = collegeSlugs.length > 0 ? collegeSlugs : ['iit-madras', 'iit-delhi'];

  const [colleges, allCollegeOptions] = await Promise.all([
    db.college.findMany({
      where: { slug: { in: targetSlugs } },
      include: {
        courses: true,
        placements: { take: 1, orderBy: { year: 'desc' } },
        cutoffs: true,
        rankings: true
      }
    }),
    db.college.findMany({
      select: { id: true, slug: true, name: true, shortName: true, nirfRank: true, city: true },
      orderBy: { nirfRank: 'asc' }
    })
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <CompareClientView
          initialColleges={colleges}
          allOptions={allCollegeOptions}
        />
      </div>
    </div>
  );
}

