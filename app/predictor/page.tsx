import React from 'react';
import { db } from '@/lib/db';
import PredictorClientView from '@/components/PredictorClientView';

interface Props {
  searchParams: {
    exam?: string;
  };
}

export const revalidate = 60;

export default async function PredictorPage({ searchParams }: Props) {
  const defaultExam = searchParams.exam || 'jee';

  const collegesWithCutoffs = await db.college.findMany({
    include: {
      cutoffs: true,
      courses: true
    },
    orderBy: { nirfRank: 'asc' }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <PredictorClientView
          colleges={collegesWithCutoffs}
          defaultExam={defaultExam}
        />
      </div>
    </div>
  );
}

