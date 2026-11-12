import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
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
  Compass
} from 'lucide-react';
import CollegeProfileClientView from '@/components/CollegeProfileClientView';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateMetadata({ params }: Props) {
  const college = await db.college.findUnique({
    where: { slug: params.slug },
    select: { name: true, city: true, state: true, nirfRank: true }
  });

  if (!college) {
    return { title: 'College Not Found — Campus Admin' };
  }

  return {
    title: `${college.name} (${college.city}, ${college.state}) — NIRF #${college.nirfRank || 'Top'} Fees, Cutoff & Placements | Campus Admin`,
    description: `Explore authentic 2024 NIRF rankings, highest & average placement packages, course-wise tuition fees, category-wise cutoffs, and verified student reviews for ${college.name}.`
  };
}

export default async function CollegeProfilePage({ params }: Props) {
  const college = await db.college.findUnique({
    where: { slug: params.slug },
    include: {
      courses: true,
      placements: { orderBy: { year: 'desc' } },
      cutoffs: true,
      rankings: { orderBy: { year: 'desc' } },
      reviews: { orderBy: { createdAt: 'desc' } },
      faqs: true
    }
  });

  if (!college) {
    notFound();
  }

  // Related colleges in same state or same type
  const relatedColleges = await db.college.findMany({
    where: {
      id: { not: college.id },
      OR: [
        { state: college.state },
        { collegeType: college.collegeType }
      ]
    },
    take: 3,
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
      ratingOverall: true,
      bannerUrl: true
    }
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-xs text-slate-500 flex items-center space-x-1.5 overflow-x-auto">
          <Link href="/" className="hover:text-brand-600 flex-shrink-0">Home</Link>
          <span>/</span>
          <Link href="/colleges" className="hover:text-brand-600 flex-shrink-0">Colleges</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{college.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        <CollegeProfileClientView
          college={college}
          relatedColleges={relatedColleges}
        />
      </div>
    </div>
  );
}

