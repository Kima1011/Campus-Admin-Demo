import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import { Star, ShieldCheck, MessageSquare, Plus, Search, Building } from 'lucide-react';
import ReviewsClientView from '@/components/ReviewsClientView';

export const revalidate = 30;

export default async function ReviewsPage() {
  const [reviews, colleges] = await Promise.all([
    db.review.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        college: {
          select: {
            id: true,
            name: true,
            shortName: true,
            slug: true,
            city: true,
            state: true,
            nirfRank: true
          }
        }
      }
    }),
    db.college.findMany({
      select: { slug: true, name: true, shortName: true },
      orderBy: { name: 'asc' }
    })
  ]);

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Student Reviews & Discussions</span>
        </div>

        <ReviewsClientView
          initialReviews={reviews}
          collegesList={colleges}
        />
      </div>
    </div>
  );
}

