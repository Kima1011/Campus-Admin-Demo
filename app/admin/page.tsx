import React from 'react';
import { db } from '@/lib/db';
import AdminDashboardClientView from '@/components/AdminDashboardClientView';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const [
    colleges,
    enquiries,
    reviews,
    examsCount,
    articlesCount
  ] = await Promise.all([
    db.college.findMany({
      orderBy: { nirfRank: 'asc' },
      include: {
        courses: true,
        reviews: true
      }
    }),
    db.enquiry.findMany({
      orderBy: { createdAt: 'desc' },
      include: { college: { select: { name: true, slug: true } } }
    }),
    db.review.findMany({
      orderBy: { createdAt: 'desc' },
      include: { college: { select: { name: true, slug: true } } }
    }),
    db.exam.count(),
    db.article.count()
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <AdminDashboardClientView
          colleges={colleges}
          enquiries={enquiries}
          reviews={reviews}
          examsCount={examsCount}
          articlesCount={articlesCount}
        />
      </div>
    </div>
  );
}

