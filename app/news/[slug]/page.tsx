import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { FileText, Calendar, Clock, ChevronRight, User, Share2 } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export default async function ArticleDetailPage({ params }: Props) {
  const article = await db.article.findUnique({
    where: { slug: params.slug }
  });

  if (!article) {
    notFound();
  }

  const moreArticles = await db.article.findMany({
    where: { id: { not: article.id } },
    take: 3,
    orderBy: { publishedAt: 'desc' }
  });

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center space-x-1.5">
          <Link href="/" className="hover:text-brand-600">Home</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-brand-600">News & Guides</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{article.title}</span>
        </div>

        {/* Article Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="bg-brand-50 text-brand-700 text-xs font-bold px-3 py-1 rounded-full border border-brand-100 uppercase tracking-wider inline-block">
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1 border-b border-slate-100 pb-4">
              <span>By <strong>{article.author}</strong></span>
              <span>•</span>
              <span>Published on {article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {article.imageUrl && (
            <div className="rounded-2xl overflow-hidden h-64 sm:h-96 w-full bg-slate-900">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            <p className="font-semibold text-slate-900 text-base sm:text-lg">
              {article.summary}
            </p>
            <p className="whitespace-pre-line leading-relaxed">
              {article.content}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link href="/news" className="text-xs font-bold text-brand-600 hover:underline">
              ← Back to All Educational News
            </Link>
            <Link href="/colleges" className="bg-brand-600 text-white font-bold text-xs px-4 py-2 rounded-xl">
              Explore Colleges Mentioned
            </Link>
          </div>
        </article>

        {/* Related Articles */}
        <div className="space-y-4 pt-4">
          <h3 className="font-bold text-base text-campus-950">Related Editorial Analyses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {moreArticles.map((ma) => (
              <Link
                key={ma.id}
                href={`/news/${ma.slug}`}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-md transition block space-y-1"
              >
                <span className="text-[10px] text-slate-400 block">{ma.publishedAt}</span>
                <h4 className="font-bold text-xs text-slate-900 hover:text-brand-600 line-clamp-2">{ma.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

