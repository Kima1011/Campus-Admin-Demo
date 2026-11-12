'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  MapPin,
  Building,
  ArrowRight,
  Sliders
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface PredictorClientViewProps {
  colleges: any[];
  defaultExam: string;
}

export default function PredictorClientView({ colleges, defaultExam }: PredictorClientViewProps) {
  const { openEnquiryModal } = useApp();
  const [selectedExam, setSelectedExam] = useState<'jee' | 'neet' | 'cat'>(
    defaultExam === 'neet' ? 'neet' : defaultExam === 'cat' ? 'cat' : 'jee'
  );
  const [scoreType, setScoreType] = useState<'rank' | 'percentile'>('rank');
  const [scoreValue, setScoreValue] = useState<number>(3500);
  const [category, setCategory] = useState('General');
  const [homeState, setHomeState] = useState('Delhi');
  const [predictedResults, setPredictedResults] = useState<any[] | null>(null);

  const statesList = [
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
    'Odisha',
    'Assam',
    'Haryana'
  ];

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();

    let matching = colleges.filter((c) => {
      if (selectedExam === 'jee') {
        return c.courses?.some((crs: any) => crs.stream === 'Engineering');
      } else if (selectedExam === 'neet') {
        return c.courses?.some((crs: any) => crs.stream === 'Medical');
      } else {
        return c.courses?.some((crs: any) => crs.stream === 'Management');
      }
    });

    // Score calculation
    const scored = matching.map((college) => {
      let probability: 'High' | 'Moderate' | 'Reach' = 'Moderate';
      let cutoffRef = 5000;

      if (selectedExam === 'jee') {
        // Estimation logic
        if (college.nirfRank && college.nirfRank <= 5) {
          cutoffRef = 1500;
        } else if (college.nirfRank && college.nirfRank <= 15) {
          cutoffRef = 5000;
        } else {
          cutoffRef = 18000;
        }

        if (scoreValue <= cutoffRef) {
          probability = 'High';
        } else if (scoreValue <= cutoffRef * 1.4) {
          probability = 'Moderate';
        } else {
          probability = 'Reach';
        }
      } else if (selectedExam === 'neet') {
        if (college.shortName === 'AIIMS New Delhi') {
          cutoffRef = 60;
        } else if (college.nirfRank && college.nirfRank <= 10) {
          cutoffRef = 1500;
        } else {
          cutoffRef = 8000;
        }

        if (scoreValue <= cutoffRef) {
          probability = 'High';
        } else if (scoreValue <= cutoffRef * 1.5) {
          probability = 'Moderate';
        } else {
          probability = 'Reach';
        }
      } else {
        // CAT Percentile
        const percentile = scoreValue;
        if (percentile >= 99.0) {
          probability = 'High';
        } else if (percentile >= 95.0) {
          probability = 'Moderate';
        } else {
          probability = 'Reach';
        }
      }

      return {
        ...college,
        probability,
        closingRankRef: cutoffRef
      };
    });

    // Sort High first, then Moderate, then Reach
    const sorted = scored.sort((a, b) => {
      const order: Record<string, number> = { High: 1, Moderate: 2, Reach: 3 };
      return (order[a.probability] || 3) - (order[b.probability] || 3);
    });

    setPredictedResults(sorted);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Statistical Admissions Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-campus-950 tracking-tight">
            College & Seat Predictor 2025
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Estimate your admission probability into IITs, NITs, AIIMS, and IIMs based on your JEE, NEET, or CAT score and past 3 years of official counselling cutoffs.
          </p>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200 flex-shrink-0">
          <button
            onClick={() => { setSelectedExam('jee'); setScoreValue(3500); setScoreType('rank'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              selectedExam === 'jee' ? 'bg-brand-600 text-white shadow' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            JEE Main (B.Tech)
          </button>
          <button
            onClick={() => { setSelectedExam('neet'); setScoreValue(650); setScoreType('rank'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              selectedExam === 'neet' ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            NEET UG (Medical)
          </button>
          <button
            onClick={() => { setSelectedExam('cat'); setScoreValue(98.5); setScoreType('percentile'); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              selectedExam === 'cat' ? 'bg-amber-500 text-campus-950 shadow' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            CAT (MBA)
          </button>
        </div>
      </div>

      {/* Input Calculator Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <form onSubmit={handlePredict} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">
                {selectedExam === 'cat' ? 'CAT Percentile *' : 'All India Rank (AIR) *'}
              </label>
              <input
                type="number"
                step={selectedExam === 'cat' ? '0.01' : '1'}
                required
                value={scoreValue}
                onChange={(e) => setScoreValue(parseFloat(e.target.value) || 0)}
                placeholder={selectedExam === 'cat' ? 'e.g. 98.75' : 'e.g. 2450'}
                className="w-full text-sm p-3 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500 font-bold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">Reservation Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-sm p-3 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 bg-white font-medium"
              >
                <option value="General">General / OPEN</option>
                <option value="OBC-NCL">OBC-NCL (Non-Creamy)</option>
                <option value="EWS">GEN-EWS</option>
                <option value="SC">SC (Scheduled Caste)</option>
                <option value="ST">ST (Scheduled Tribe)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase">Home State Domicile</label>
              <select
                value={homeState}
                onChange={(e) => setHomeState(e.target.value)}
                className="w-full text-sm p-3 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 bg-white font-medium"
              >
                {statesList.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Chances</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Results View */}
      {predictedResults && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-campus-950">
              Predicted Admission Results ({predictedResults.length} Institutions Evaluated)
            </h3>
            <span className="text-xs text-slate-500">
              Evaluated with {category} category & {homeState} domicile
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {predictedResults.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">
                      NIRF #{item.nirfRank || 'Ranked'}
                    </span>
                    <span
                      className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                        item.probability === 'High'
                          ? 'bg-emerald-100 text-emerald-800'
                          : item.probability === 'Moderate'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.probability} Probability
                    </span>
                  </div>

                  <Link href={`/colleges/${item.slug}`} className="hover:text-brand-600 font-extrabold text-base text-campus-900 block leading-tight">
                    {item.name}
                  </Link>

                  <span className="text-xs text-slate-500 flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {item.city}, {item.state}
                  </span>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Average CTC:</span>
                      <span className="font-bold text-brand-600">₹{item.averagePackage || 'N/A'} LPA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Program Fee:</span>
                      <span className="font-semibold text-slate-800">{item.courses?.[0]?.totalTuitionFee || 'Check Profile'}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2 border-t border-slate-100">
                  <Link
                    href={`/colleges/${item.slug}`}
                    className="flex-1 text-center border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs py-2 rounded-xl transition"
                  >
                    View College
                  </Link>
                  <button
                    onClick={() => openEnquiryModal({ name: item.name, slug: item.slug })}
                    className="flex-1 text-center bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2 rounded-xl transition"
                  >
                    Enquire Seat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
