import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import {
  GraduationCap,
  Search,
  MapPin,
  TrendingUp,
  Award,
  BookOpen,
  Calendar,
  Star,
  ShieldCheck,
  Compass,
  Scale,
  ArrowRight,
  Globe2,
  Users,
  CheckCircle2,
  HelpCircle,
  FileText,
  DollarSign,
  ChevronRight,
  Sparkles,
  Building,
  Heart
} from 'lucide-react';
import CollegeCard from '@/components/CollegeCard';
import HomeSearchHero from '@/components/HomeSearchHero';

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  // Fetch real data from Prisma
  const [
    featuredColleges,
    engineeringColleges,
    managementColleges,
    medicalColleges,
    upcomingExams,
    latestArticles,
    recentReviews,
    totalCollegesCount
  ] = await Promise.all([
    db.college.findMany({
      where: { isFeatured: true },
      take: 6,
      orderBy: { nirfRank: 'asc' },
      include: { courses: true, rankings: true }
    }),
    db.college.findMany({
      where: {
        courses: { some: { stream: 'Engineering' } }
      },
      take: 4,
      orderBy: { nirfRank: 'asc' },
      include: { courses: true, rankings: true }
    }),
    db.college.findMany({
      where: {
        courses: { some: { stream: 'Management' } }
      },
      take: 4,
      orderBy: { nirfRank: 'asc' },
      include: { courses: true, rankings: true }
    }),
    db.college.findMany({
      where: {
        courses: { some: { stream: 'Medical' } }
      },
      take: 4,
      orderBy: { nirfRank: 'asc' },
      include: { courses: true, rankings: true }
    }),
    db.exam.findMany({
      take: 6,
      orderBy: { isPopular: 'desc' }
    }),
    db.article.findMany({
      take: 4,
      orderBy: { publishedAt: 'desc' }
    }),
    db.review.findMany({
      take: 3,
      include: { college: { select: { name: true, shortName: true, slug: true, city: true } } }
    }),
    db.college.count()
  ]);

  return (
    <div className="space-y-14 pb-16">
      {/* 1, 2, 3, 4: Hero Section with Universal Omnisearch & Stream Tabs */}
      <HomeSearchHero totalCount={totalCollegesCount} />

      {/* 5: Popular Academic Streams Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Explore Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Popular Academic Streams
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Choose from verified degrees across India's leading higher education faculties.
            </p>
          </div>
          <Link
            href="/courses"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
          >
            <span>View All Academic Degrees</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {[
            { name: 'Engineering', code: 'B.Tech / M.Tech', icon: '💻', count: '18+ Top IITs/NITs', stream: 'Engineering', color: 'border-blue-200 hover:border-blue-500 bg-blue-50/50' },
            { name: 'Management', code: 'MBA / PGDM', icon: '📈', count: '12+ Top IIMs', stream: 'Management', color: 'border-amber-200 hover:border-amber-500 bg-amber-50/50' },
            { name: 'Medical', code: 'MBBS / BDS', icon: '🩺', count: 'AIIMS & Top Med', stream: 'Medical', color: 'border-emerald-200 hover:border-emerald-500 bg-emerald-50/50' },
            { name: 'Design', code: 'B.Des / NIFT', icon: '🎨', count: 'NID & Fashion', stream: 'Design', color: 'border-purple-200 hover:border-purple-500 bg-purple-50/50' },
            { name: 'Law', code: 'BA LL.B / LLM', icon: '⚖️', count: 'NLUs & Apex Law', stream: 'Law', color: 'border-indigo-200 hover:border-indigo-500 bg-indigo-50/50' },
            { name: 'Commerce', code: 'B.Com / Finance', icon: '📊', count: 'SRCC & Top DU', stream: 'Commerce', color: 'border-cyan-200 hover:border-cyan-500 bg-cyan-50/50' },
            { name: 'Humanities', code: 'BA / Social Sci', icon: '📚', count: 'JNU & Premier', stream: 'Arts', color: 'border-rose-200 hover:border-rose-500 bg-rose-50/50' },
            { name: 'Hospitality', code: 'B.Sc Hotel Admin', icon: '🏨', count: 'IHM Pusa & More', stream: 'Hospitality', color: 'border-orange-200 hover:border-orange-500 bg-orange-50/50' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={`/colleges?stream=${encodeURIComponent(item.stream)}`}
              className={`group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${item.color}`}
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition">{item.icon}</span>
              <span className="font-bold text-xs sm:text-sm text-campus-900 group-hover:text-brand-600 block line-clamp-1">{item.name}</span>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5">{item.code}</span>
              <span className="text-[9px] font-bold text-slate-400 mt-2 px-1.5 py-0.5 rounded-full bg-white border border-slate-200">
                {item.count}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6 & 7: Featured & Top Ranked Institutions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <Award className="w-4 h-4" />
              <span>NIRF 2024 Authenticated</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Featured Premier Institutions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Verified admission processes, audited placement statistics, and official fees.
            </p>
          </div>
          <Link
            href="/colleges"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
          >
            <span>Browse All {totalCollegesCount} Verified Colleges</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>

      {/* 11, 12, 13: College & Rank Predictor Interactive Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-campus-900 via-brand-900 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-campus-800">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
            <Compass className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI & Statistical Cutoff Engine</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Predict Your College Admission Chances
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Enter your percentile, rank, or expected score in JEE Main, NEET UG, or CAT to find matching IITs, NITs, AIIMS, and IIMs based on past 3 years of official JoSAA, MCC, and CAT cutoff trends.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/predictor?exam=jee"
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-md flex items-center space-x-1.5"
              >
                <span>JEE Main Predictor</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/predictor?exam=neet"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-md flex items-center space-x-1.5"
              >
                <span>NEET Medical Predictor</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/predictor?exam=cat"
                className="bg-amber-500 hover:bg-amber-400 text-campus-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-md flex items-center space-x-1.5"
              >
                <span>CAT IIM Predictor</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8: College Discovery by State & City */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4" />
              <span>Geographic Hubs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Explore Colleges by Location
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Discover top-tier educational institutions across prominent educational hubs in India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {[
            { city: 'Delhi NCR', state: 'Delhi', count: '10+ Premier', bg: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80' },
            { city: 'Bengaluru', state: 'Karnataka', count: '8+ Tech & Law', bg: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80' },
            { city: 'Mumbai', state: 'Maharashtra', count: '6+ Top B-Schools', bg: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80' },
            { city: 'Chennai', state: 'Tamil Nadu', count: '7+ Engineering', bg: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80' },
            { city: 'Hyderabad', state: 'Telangana', count: '5+ Research Hubs', bg: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=400&q=80' },
            { city: 'Kolkata', state: 'West Bengal', count: '6+ Heritage Inst', bg: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=400&q=80' }
          ].map((loc, idx) => (
            <Link
              key={idx}
              href={`/colleges?state=${encodeURIComponent(loc.state)}`}
              className="group relative h-40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200"
            >
              <img
                src={loc.bg}
                alt={loc.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-campus-950/90 via-campus-950/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-bold text-sm block group-hover:text-amber-400 transition">{loc.city}</span>
                <span className="text-[11px] text-slate-300 font-medium">{loc.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10: Upcoming & Popular Entrance Examinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Exam Alerts 2025</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Major Entrance Examinations
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Track registration dates, exam schedules, eligibility, and syllabus patterns.
            </p>
          </div>
          <Link
            href="/exams"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
          >
            <span>View All Entrance Examinations</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                    {exam.stream}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {exam.level} Level
                  </span>
                </div>

                <Link href={`/exams/${exam.slug}`} className="hover:text-brand-600 transition">
                  <h3 className="font-bold text-base text-campus-900 line-clamp-1">{exam.name}</h3>
                </Link>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{exam.overview}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Exam Dates</span>
                    <span className="font-semibold text-slate-800 line-clamp-1">{exam.examDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Conducting Body</span>
                    <span className="font-semibold text-slate-800 line-clamp-1">{exam.conductingBody}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between">
                <Link
                  href={`/exams/${exam.slug}`}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center"
                >
                  <span>Syllabus & Pattern</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
                <a
                  href={exam.officialWebsite}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-800"
                >
                  Official Portal ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9: Trending High ROI Courses Section */}
      <section className="bg-slate-100 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Career ROI Focus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
                Trending High ROI Degrees
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Compare typical duration, average course investment, and entry-level packages.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'B.Tech in Computer Science', stream: 'Engineering', duration: '4 Years', avgFee: '₹2.5L - ₹9L Total', avgSalary: '₹14 - ₹26 LPA', topColleges: 'IIT Madras, IIT Bombay, NIT Trichy, IIIT-H' },
              { title: 'MBA / PGDM in Management', stream: 'Management', duration: '2 Years', avgFee: '₹2L - ₹25L Total', avgSalary: '₹28 - ₹35 LPA', topColleges: 'IIM Ahmedabad, IIM-B, XLRI, FMS Delhi' },
              { title: 'MBBS (Medicine & Surgery)', stream: 'Medical', duration: '5.5 Years', avgFee: '₹7K - ₹15L Total', avgSalary: '₹12 - ₹18 LPA', topColleges: 'AIIMS New Delhi, CMC Vellore, KGMU' },
              { title: 'B.A. LL.B. (Hons.) Law', stream: 'Law', duration: '5 Years', avgFee: '₹10L - ₹14L Total', avgSalary: '₹15 - ₹20 LPA', topColleges: 'NLSIU Bangalore, NALSAR, NLU Delhi' }
            ].map((course, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {course.stream}
                  </span>
                  <h3 className="font-bold text-base text-campus-950 mt-2">{course.title}</h3>
                  <div className="space-y-1.5 mt-3 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Fee Range:</span>
                      <span className="font-semibold text-slate-800">{course.avgFee}</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Avg Package:</span>
                      <span>{course.avgSalary}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Top Institutes: </span>
                    {course.topColleges}
                  </div>
                </div>
                <Link
                  href={`/colleges?stream=${encodeURIComponent(course.stream)}`}
                  className="mt-4 block text-center bg-slate-50 hover:bg-brand-50 hover:text-brand-600 text-slate-700 font-bold text-xs py-2 rounded-xl transition border border-slate-200"
                >
                  Find Colleges Offering This →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14: Verified Student Reviews & Ratings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Real Campus Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Verified Student Reviews & Feedback
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Unfiltered feedback on academics, infrastructure, faculty quality, and placement packages.
            </p>
          </div>
          <Link
            href="/reviews"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
          >
            <span>Read All Verified Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(rev.ratingOverall) ? 'text-amber-500 fill-amber-500' : 'text-slate-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-800 ml-1">{rev.ratingOverall.toFixed(1)}</span>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <ShieldCheck className="w-3 h-3 mr-0.5" /> Verified Alum
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 mb-2">"{rev.title}"</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-3">
                  <strong className="text-emerald-700 font-semibold">Pros: </strong>{rev.pros}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  <strong className="text-rose-700 font-semibold">Cons: </strong>{rev.cons}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <div>
                  <span className="font-bold text-slate-800 block">{rev.authorName}</span>
                  <span>{rev.course} (Batch of {rev.batchYear})</span>
                </div>
                <Link href={`/colleges/${rev.college.slug}`} className="font-semibold text-brand-600 hover:underline">
                  {rev.college.shortName}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 18 & 19: Study Abroad & Global Degree Discovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Higher Education Hub</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Plan Your International Education
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Explore popular study abroad destinations including the United States, Germany, the United Kingdom, Canada, and Australia. Learn about STEM OPT work visas, tuition-free public universities in Germany, and scholarship opportunities.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['USA (3-Yr STEM OPT)', 'Germany (Free Tuition)', 'United Kingdom', 'Canada', 'Australia', 'Ireland'].map((country, i) => (
                  <span key={i} className="text-xs bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-lg text-slate-300">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
              <Link
                href="/study-abroad"
                className="bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition text-center shadow-md"
              >
                Explore Study Abroad Hub
              </Link>
              <Link
                href="/colleges"
                className="border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl transition text-center"
              >
                Compare with Indian Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 16 & 17: Latest News & Educational Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
              <FileText className="w-4 h-4" />
              <span>Campus Admin Editorial</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
              Latest Education News & Circulars
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Curated analysis of entrance notifications, cutoffs, and admissions.
            </p>
          </div>
          <Link
            href="/news"
            className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center mt-2 md:mt-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {latestArticles.map((art) => (
            <Link
              key={art.id}
              href={`/news/${art.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                {art.imageUrl && (
                  <img
                    src={art.imageUrl}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                )}
                <span className="absolute top-2.5 left-2.5 bg-campus-900/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {art.category}
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">{art.publishedAt} • {art.readTime}</span>
                  <h3 className="font-bold text-xs sm:text-sm text-campus-900 group-hover:text-brand-600 transition line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{art.summary}</p>
                </div>
                <span className="text-xs font-bold text-brand-600 flex items-center mt-3">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 23: Counselling & Support CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-3xl p-8 sm:p-12 text-campus-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider bg-campus-950 text-amber-400 px-3 py-1 rounded-full inline-block">
              100% Free Service
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Confused About College Choice or Cutoffs?
            </h2>
            <p className="text-sm font-medium text-campus-900 max-w-xl">
              Talk directly with certified career counselors who will analyze your score, budget, preferred state, and branch interests.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/predictor"
              className="bg-campus-950 hover:bg-campus-900 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition inline-block text-center"
            >
              Get Free Counselling Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

