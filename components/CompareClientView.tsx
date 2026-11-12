'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Scale,
  Plus,
  X,
  Award,
  CheckCircle2,
  Building,
  MapPin,
  TrendingUp,
  Download,
  Printer,
  ChevronRight,
  Star
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface CompareClientViewProps {
  initialColleges: any[];
  allOptions: { id: string; slug: string; name: string; shortName: string; nirfRank: number | null; city: string }[];
}

export default function CompareClientView({
  initialColleges,
  allOptions
}: CompareClientViewProps) {
  const router = useRouter();
  const { openEnquiryModal, openBrochureModal, showToast } = useApp();
  const [selectedColleges, setSelectedColleges] = useState<any[]>(initialColleges);
  const [addingSlotIndex, setAddingSlotIndex] = useState<number | null>(null);

  const removeCollege = (slug: string) => {
    const updated = selectedColleges.filter((c) => c.slug !== slug);
    setSelectedColleges(updated);
    router.push(`/compare?colleges=${updated.map((c) => c.slug).join(',')}`);
    showToast('College removed from comparison', 'info');
  };

  const addCollege = (slug: string) => {
    if (selectedColleges.some((c) => c.slug === slug)) {
      showToast('College is already in the comparison table', 'info');
      return;
    }
    const updatedSlugs = [...selectedColleges.map((c) => c.slug), slug];
    router.push(`/compare?colleges=${updatedSlugs.join(',')}`);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">
            <Scale className="w-4 h-4" />
            <span>Side-by-Side Evaluation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-campus-950 tracking-tight">
            Institutional Comparison Matrix
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Compare fees, NIRF rankings, highest/average packages, exams accepted, and campus infrastructure.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition border border-slate-300"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            {/* Header Column: Colleges Header Cards */}
            <thead>
              <tr className="border-b border-slate-200">
                <th className="w-1/4 p-4 bg-slate-50 text-slate-500 font-bold uppercase text-[11px] align-top">
                  Comparison Parameter
                </th>
                {selectedColleges.map((college) => (
                  <th key={college.id} className="p-4 align-top w-1/4 relative border-l border-slate-200">
                    <button
                      onClick={() => removeCollege(college.slug)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 rounded-full hover:bg-slate-100"
                      title="Remove college"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="space-y-2 pr-6">
                      <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full inline-block">
                        NIRF #{college.nirfRank || 'Ranked'}
                      </span>
                      <Link href={`/colleges/${college.slug}`} className="hover:text-brand-600 font-extrabold text-sm text-campus-900 block leading-tight">
                        {college.name}
                      </Link>
                      <span className="text-[11px] text-slate-500 block">
                        {college.city}, {college.state}
                      </span>
                    </div>
                  </th>
                ))}

                {/* Blank Slot for adding more colleges if < 4 */}
                {selectedColleges.length < 4 && (
                  <th className="p-4 align-middle text-center w-1/4 border-l border-slate-200 bg-slate-50/50">
                    <div className="space-y-2 p-4">
                      <span className="text-xs text-slate-500 block font-semibold">Add another institution</span>
                      <select
                        onChange={(e) => {
                          if (e.target.value) addCollege(e.target.value);
                        }}
                        defaultValue=""
                        className="text-xs p-2 border border-slate-300 rounded-lg w-full bg-white focus:outline-none focus:border-brand-600 font-medium"
                      >
                        <option value="" disabled>Select college to compare...</option>
                        {allOptions
                          .filter((opt) => !selectedColleges.some((sc) => sc.slug === opt.slug))
                          .map((opt) => (
                            <option key={opt.slug} value={opt.slug}>
                              {opt.shortName} (NIRF #{opt.nirfRank || 'N/A'}) - {opt.city}
                            </option>
                          ))}
                      </select>
                    </div>
                  </th>
                )}
              </tr>
            </thead>

            {/* Matrix Rows */}
            <tbody className="divide-y divide-slate-100">
              {/* SECTION 1: BASIC INSTITUTIONAL DETAILS */}
              <tr className="bg-slate-100 font-bold text-slate-700 uppercase text-[10px]">
                <td colSpan={selectedColleges.length + 2} className="p-2.5 px-4">
                  Institutional Classification
                </td>
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Ownership Type</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-semibold text-slate-800">{c.ownership}</td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Institute Category</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-bold text-brand-700">{c.collegeType}</td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Established Year</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-semibold text-slate-800">{c.established}</td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">NAAC Accreditation</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-semibold text-slate-800">{c.naacGrade || 'A++'}</td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>

              {/* SECTION 2: PLACEMENTS & PACKAGES */}
              <tr className="bg-slate-100 font-bold text-slate-700 uppercase text-[10px]">
                <td colSpan={selectedColleges.length + 2} className="p-2.5 px-4">
                  Placement Statistics & Compensation
                </td>
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Average CTC Package</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-black text-brand-700 text-sm">
                    {c.averagePackage ? `₹${c.averagePackage} LPA` : 'Check Profile'}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Highest Recorded CTC</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-black text-emerald-600 text-sm">
                    {c.highestPackage ? `₹${c.highestPackage} LPA` : 'N/A'}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Prominent Recruiters</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 text-slate-700 line-clamp-3 leading-relaxed">
                    {c.topRecruiters}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>

              {/* SECTION 3: POPULAR PROGRAM FEES */}
              <tr className="bg-slate-100 font-bold text-slate-700 uppercase text-[10px]">
                <td colSpan={selectedColleges.length + 2} className="p-2.5 px-4">
                  Course Fees & Academic Programs
                </td>
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Flagship Degree</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-bold text-slate-900">
                    {c.courses?.[0]?.courseName || 'Undergraduate'}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Total Program Tuition</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-extrabold text-amber-700">
                    {c.courses?.[0]?.totalTuitionFee || 'Refer Details'}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Exams Accepted</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-bold text-slate-800">
                    {c.courses?.[0]?.examAccepted || 'National Entrance'}
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>

              {/* SECTION 4: STUDENT RATING & ACTION */}
              <tr className="bg-slate-100 font-bold text-slate-700 uppercase text-[10px]">
                <td colSpan={selectedColleges.length + 2} className="p-2.5 px-4">
                  Student Sentiment & Counselling
                </td>
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Verified Student Rating</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 font-extrabold text-slate-900">
                    <span className="flex items-center text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 mr-1" />
                      {c.ratingOverall.toFixed(1)} / 5 ({c.reviewCount} Reviews)
                    </span>
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
              <tr>
                <td className="p-3.5 px-4 font-semibold text-slate-600 bg-slate-50/40">Direct Actions</td>
                {selectedColleges.map((c) => (
                  <td key={c.id} className="p-3.5 px-4 border-l border-slate-100 space-y-2">
                    <button
                      onClick={() => openEnquiryModal({ name: c.name, slug: c.slug })}
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2 rounded-lg transition"
                    >
                      Enquire Admission
                    </button>
                    <Link
                      href={`/colleges/${c.slug}`}
                      className="block text-center border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs py-1.5 rounded-lg transition"
                    >
                      View Full Profile
                    </Link>
                  </td>
                ))}
                {selectedColleges.length < 4 && <td className="border-l border-slate-100" />}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

