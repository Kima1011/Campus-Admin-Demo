import React from 'react';
import { db } from '@/lib/db';
import DashboardClientView from '@/components/DashboardClientView';

export const revalidate = 10;

export default async function DashboardPage() {
  const colleges = await db.college.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      shortName: true,
      city: true,
      state: true,
      nirfRank: true,
      averagePackage: true,
      highestPackage: true,
      bannerUrl: true,
      ratingOverall: true
    }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <DashboardClientView allColleges={colleges} />
      </div>
    </div>
  );
}

