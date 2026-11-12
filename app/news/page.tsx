import React from 'react';
import Link from 'next/link';
import { db } from '@/lib/db';
import { FileText, Calendar, Clock, ChevronRight, User, Sparkles } from 'lucide-react';

export const revalidate = 60;

export default async function NewsArticlesPage() {
  const articles = await db.article.findMany({
    orderBy: { publishedAt: 'desc' }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Educational News & Circulars</span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Campus Admin Editorial Bureau</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
              Educational News, Circulars & Guides
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Authoritative updates on entrance examination dates, counselling timelines, and career strategies.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art) => (
            <Link
              key={art.id}
              href={`/news/${art.slug}`}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto bg-slate-900 relative overflow-hidden flex-shrink-0">
                <img
                  src={art.imageUrl || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80'}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-campus-950/90 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  {art.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span>{art.publishedAt}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="font-extrabold text-base text-campus-950 group-hover:text-brand-600 transition leading-snug">
                    {art.title}
                  </h2>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{art.author}</span>
                  <span className="font-bold text-brand-600 flex items-center">
                    Read Story <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

