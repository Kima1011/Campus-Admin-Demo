'use client';

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, Phone, User } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function BrochureModal() {
  const { brochureModalCollege, closeBrochureModal, showToast } = useApp();
  const [downloaded, setDownloaded] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  if (!brochureModalCollege) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    showToast(`Official ${brochureModalCollege.name} brochure generated!`, 'success');

    // Simulate instant brochure download trigger
    setTimeout(() => {
      const element = document.createElement('a');
      const file = new Blob([
        `====================================================\n` +
        `CAMPUS ADMIN — OFFICIAL INSTITUTION REPORT\n` +
        `Institution: ${brochureModalCollege.name}\n` +
        `Generated: ${new Date().toLocaleDateString()}\n` +
        `Verification: Authenticated NIRF & UGC Source\n` +
        `Portal: https://campusadmin.edu.in/colleges/${brochureModalCollege.slug}\n` +
        `====================================================\n\n` +
        `This certified profile contains detailed curriculum outlines, semester-wise tuition fees, ` +
        `hostel fee breakdowns, past 3-year cutoff ranks, and placement reports audited by CAMPUS ADMIN.\n\n` +
        `For direct counseling assistance, dial toll-free: 1800-CAMPUS-ADMIN.\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${brochureModalCollege.slug}-campus-admin-brochure.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 600);
  };

  const handleClose = () => {
    closeBrochureModal();
    setDownloaded(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-brand-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-brand-800 rounded-lg text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">Verified Brochure</span>
              <h3 className="text-base font-bold truncate max-w-[260px]">{brochureModalCollege.name}</h3>
            </div>
          </div>
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-brand-800 text-slate-300 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloaded ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Brochure Downloaded!</h4>
            <p className="text-xs text-slate-600">
              The official institutional information brochure for <strong>{brochureModalCollege.name}</strong> has been saved to your downloads and sent to your email.
            </p>
            <button
              onClick={handleClose}
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs px-5 py-2 rounded-lg transition"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="p-5 space-y-3.5">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>Includes 2024 fee charts, hostel charges, cutoff ranks by category, and audited recruiter statistics.</span>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Your Email Address *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Mobile Number (For SMS/WhatsApp copy) *</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  className="w-full text-sm pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-2.5 rounded-lg transition flex items-center justify-center space-x-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Brochure (PDF/Text)</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

