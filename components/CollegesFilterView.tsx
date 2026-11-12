'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  RotateCcw,
  Building,
  GraduationCap,
  MapPin,
  TrendingUp,
  LayoutGrid,
  List
} from 'lucide-react';
import CollegeCard from './CollegeCard';

interface CollegesFilterViewProps {
  initialColleges: any[];
  initialQuery: string;
  initialStream: string;
  initialState: string;
  initialType: string;
  initialSort: string;
}

export default function CollegesFilterView({
  initialColleges,
  initialQuery,
  initialStream,
  initialState,
  initialType,
  initialSort
}: CollegesFilterViewProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [q, setQ] = useState(initialQuery);
  const [stream, setStream] = useState(initialStream);
  const [state, setState] = useState(initialState);
  const [collegeType, setCollegeType] = useState(initialType);
  const [sort, setSort] = useState(initialSort);

  const applyFilters = (newOverrides: Partial<{ q: string; stream: string; state: string; type: string; sort: string }>) => {
    const params = new URLSearchParams();
    const finalQ = newOverrides.q !== undefined ? newOverrides.q : q;
    const finalStream = newOverrides.stream !== undefined ? newOverrides.stream : stream;
    const finalState = newOverrides.state !== undefined ? newOverrides.state : state;
    const finalType = newOverrides.type !== undefined ? newOverrides.type : collegeType;
    const finalSort = newOverrides.sort !== undefined ? newOverrides.sort : sort;

    if (finalQ) params.set('q', finalQ);
    if (finalStream && finalStream !== 'All') params.set('stream', finalStream);
    if (finalState && finalState !== 'All') params.set('state', finalState);
    if (finalType && finalType !== 'All') params.set('type', finalType);
    if (finalSort && finalSort !== 'nirf') params.set('sort', finalSort);

    startTransition(() => {
      router.push(`/colleges?${params.toString()}`);
    });
  };

  const resetAll = () => {
    setQ('');
    setStream('All');
    setState('All');
    setCollegeType('All');
    setSort('nirf');
    startTransition(() => {
      router.push('/colleges');
    });
  };

  const streams = [
    'All',
    'Engineering',
    'Management',
    'Medical',
    'Design',
    'Law',
    'Commerce',
    'Arts',
    'Hospitality'
  ];

  const states = [
    'All',
    'Delhi',
    'Tamil Nadu',
    'Karnataka',
    'Maharashtra',
    'Telangana',
    'West Bengal',
    'Uttar Pradesh',
    'Rajasthan',
    'Gujarat',
    'Punjab',
    'Chandigarh',
    'Assam',
    'Odisha',
    'Jharkhand',
    'Haryana',
    'Uttarakhand',
    'Kerala'
  ];

  const types = [
    'All',
    'IIT',
    'NIT',
    'IIIT',
    'IIM',
    'AIIMS',
    'Central University',
    'National Law University',
    'Deemed University',
    'State University',
    'Private University',
    'Private Autonomous'
  ];

  return (
    <div className="space-y-6">
      {/* Top Filter & Omnisearch Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-4">
        {/* Stream Pills Bar */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {streams.map((s) => (
            <button
              key={s}
              onClick={() => {
                setStream(s);
                applyFilters({ stream: s });
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap ${
                stream === s
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {s === 'All' ? 'All Disciplines' : s}
            </button>
          ))}
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search college name, city..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && applyFilters({ q })}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500"
            />
          </div>

          {/* State Selector */}
          <div>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                applyFilters({ state: e.target.value });
              }}
              className="w-full py-2 px-3 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500 bg-white"
            >
              <option value="All">All States in India</option>
              {states.filter((st) => st !== 'All').map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Institution Type Selector */}
          <div>
            <select
              value={collegeType}
              onChange={(e) => {
                setCollegeType(e.target.value);
                applyFilters({ type: e.target.value });
              }}
              className="w-full py-2 px-3 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500 bg-white"
            >
              <option value="All">All Institution Types (IIT, NIT, IIM...)</option>
              {types.filter((t) => t !== 'All').map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-2">
            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                applyFilters({ sort: e.target.value });
              }}
              className="flex-1 py-2 px-3 text-xs border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500 bg-white font-semibold text-slate-800"
            >
              <option value="nirf">Sort: NIRF Ranking (Best First)</option>
              <option value="package">Sort: Average Package (High to Low)</option>
              <option value="rating">Sort: Student Rating</option>
              <option value="name">Sort: Alphabetical (A-Z)</option>
            </select>

            {(q || stream !== 'All' || state !== 'All' || collegeType !== 'All' || sort !== 'nirf') && (
              <button
                onClick={resetAll}
                className="p-2 border border-slate-300 rounded-xl hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition flex-shrink-0"
                title="Reset filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {(q || stream !== 'All' || state !== 'All' || collegeType !== 'All') && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-600">
            <span className="font-bold text-slate-400">Active filters:</span>
            {q && (
              <span className="bg-slate-100 px-2 py-0.5 rounded-md flex items-center">
                Search: "{q}"
                <button onClick={() => { setQ(''); applyFilters({ q: '' }); }} className="ml-1 text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
            {stream !== 'All' && (
              <span className="bg-slate-100 px-2 py-0.5 rounded-md flex items-center">
                Stream: {stream}
                <button onClick={() => { setStream('All'); applyFilters({ stream: 'All' }); }} className="ml-1 text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
            {state !== 'All' && (
              <span className="bg-slate-100 px-2 py-0.5 rounded-md flex items-center">
                State: {state}
                <button onClick={() => { setState('All'); applyFilters({ state: 'All' }); }} className="ml-1 text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
            {collegeType !== 'All' && (
              <span className="bg-slate-100 px-2 py-0.5 rounded-md flex items-center">
                Type: {collegeType}
                <button onClick={() => { setCollegeType('All'); applyFilters({ type: 'All' }); }} className="ml-1 text-slate-400 hover:text-red-500"><X className="w-3 h-3" /></button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Colleges Results Grid */}
      {initialColleges.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
            <Building className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No matching institutions found</h3>
          <p className="text-sm text-slate-500">
            We couldn't find colleges matching your current filter criteria. Try resetting the filters or searching with a broader keyword.
          </p>
          <button
            onClick={resetAll}
            className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition shadow"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      )}
    </div>
  );
}

