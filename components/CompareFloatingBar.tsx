'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, X, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function CompareFloatingBar() {
  const { comparedColleges, removeFromCompare, clearCompare } = useApp();

  if (comparedColleges.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-campus-900 text-white rounded-2xl shadow-2xl border border-campus-700 p-3 sm:p-4 max-w-md w-full animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-campus-800">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-amber-500 text-slate-900 rounded-lg font-bold">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Compare Deck</span>
            <span className="text-[10px] text-slate-400">{comparedColleges.length} of 4 colleges selected</span>
          </div>
        </div>
        <button
          onClick={clearCompare}
          className="text-[11px] text-slate-400 hover:text-white transition"
        >
          Clear all
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {comparedColleges.map((slug) => (
          <span
            key={slug}
            className="inline-flex items-center text-xs bg-campus-800 text-slate-200 px-2.5 py-1 rounded-full border border-campus-700 font-medium"
          >
            <span className="capitalize">{slug.replace(/-/g, ' ')}</span>
            <button
              onClick={() => removeFromCompare(slug)}
              className="ml-1.5 text-slate-400 hover:text-red-400"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <Link
          href={`/compare?colleges=${comparedColleges.join(',')}`}
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-campus-950 font-bold text-xs py-2 px-4 rounded-xl text-center transition flex items-center justify-center space-x-1 shadow"
        >
          <span>Compare Institutions Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

