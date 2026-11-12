import React from 'react';
import Link from 'next/link';
import {
  Globe2,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import StudyAbroadClientView from '@/components/StudyAbroadClientView';

export const revalidate = 60;

export default function StudyAbroadPage() {
  const destinations = [
    {
      country: 'United States of America (USA)',
      flag: '🇺🇸',
      popularCourses: 'MS in Computer Science, Data Science, MBA, Biotechnology',
      avgTuition: '$25,000 - $55,000 / year',
      livingCost: '$12,000 - $18,000 / year',
      postStudyVisa: '3 Years (STEM OPT) / 1 Year (Non-STEM)',
      exams: 'GRE, TOEFL / IELTS, GMAT, SAT',
      highlights: 'World-leading research funding, Silicon Valley tech ecosystems, global corporate headquarters.',
      topUniversities: 'MIT, Stanford, UC Berkeley, Carnegie Mellon, Harvard, Columbia'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      popularCourses: 'Automotive Engineering, Mechanical, Informatics, Renewable Energy',
      avgTuition: '€0 - €3,000 / year (Tuition-Free Public Unis)',
      livingCost: '€11,208 / year (Blocked Account requirement)',
      postStudyVisa: '18 Months Post-Study Work Permit',
      exams: 'IELTS / TOEFL, GRE (optional in many)',
      highlights: 'Practically tuition-free high quality public universities, strong industrial powerhouse economy.',
      topUniversities: 'Technical University of Munich (TUM), RWTH Aachen, Heidelberg University, TU Berlin'
    },
    {
      country: 'United Kingdom (UK)',
      flag: '🇬🇧',
      popularCourses: 'MSc Business Analytics, Law (LLM), Finance, Computer Science',
      avgTuition: '£16,000 - £35,000 / year',
      livingCost: '£12,000 - £15,000 / year',
      postStudyVisa: '2 Years Graduate Route Visa',
      exams: 'IELTS, PTE Academic, GMAT',
      highlights: '1-Year intensive Master’s degrees saving one full year of living expenses, historic prestige.',
      topUniversities: 'Oxford, Cambridge, Imperial College London, UCL, London Business School'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      popularCourses: 'Computer Science, Artificial Intelligence, Supply Chain, Healthcare',
      avgTuition: 'CAD $20,000 - $40,000 / year',
      livingCost: 'CAD $15,000 - $20,000 / year',
      postStudyVisa: 'Up to 3 Years Post-Graduation Work Permit (PGWP)',
      exams: 'IELTS Academic, PTE, TOEFL',
      highlights: 'Clear permanent residency (Express Entry) pathways, multicultural welcoming society.',
      topUniversities: 'University of Toronto, UBC, McGill, Waterloo'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      popularCourses: 'Information Technology, Mining, Public Health, Environmental Engineering',
      avgTuition: 'AUD $30,000 - $48,000 / year',
      livingCost: 'AUD $24,505 / year (Immigration threshold)',
      postStudyVisa: '2 to 4 Years Temporary Graduate Visa',
      exams: 'IELTS, PTE Academic, TOEFL',
      highlights: 'High minimum wages, beautiful climate, Group of Eight (Go8) research universities.',
      topUniversities: 'University of Melbourne, Sydney University, ANU, UNSW'
    },
    {
      country: 'Ireland',
      flag: '🇮🇪',
      popularCourses: 'Data Analytics, Cloud Computing, Pharmaceutical Sciences, FinTech',
      avgTuition: '€12,000 - €25,000 / year',
      livingCost: '€10,000 - €14,000 / year',
      postStudyVisa: '2 Years Third Level Graduate Scheme',
      exams: 'IELTS, TOEFL, Duolingo English Test',
      highlights: 'European headquarters of Google, Meta, Apple, Pfizer, and LinkedIn.',
      topUniversities: 'Trinity College Dublin (TCD), University College Dublin (UCD)'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Study Abroad Portal</span>
        </div>

        {/* Client Interactive Study Abroad Component */}
        <StudyAbroadClientView destinations={destinations} />
      </div>
    </div>
  );
}

