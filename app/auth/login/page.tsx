'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap, Lock, Mail, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const router = useRouter();
  const { login, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (email.toLowerCase().includes('admin')) {
        login({
          id: 'admin-1',
          name: 'Campus Admin Officer',
          email: email || 'admin@campusadmin.com',
          role: 'ADMIN'
        });
        router.push('/admin');
      } else {
        login({
          id: 'student-1',
          name: 'Aakash Sharma',
          email: email || 'student@example.com',
          role: 'STUDENT'
        });
        router.push('/dashboard');
      }
      setLoading(false);
    }, 400);
  };

  const handleQuickDemo = (role: 'STUDENT' | 'ADMIN') => {
    if (role === 'ADMIN') {
      setEmail('admin@campusadmin.com');
      setPassword('campusadmin@2025');
      login({
        id: 'admin-1',
        name: 'Campus Admin Officer',
        email: 'admin@campusadmin.com',
        role: 'ADMIN'
      });
      router.push('/admin');
    } else {
      setEmail('student@example.com');
      setPassword('student@2025');
      login({
        id: 'student-1',
        name: 'Aakash Sharma',
        email: 'student@example.com',
        role: 'STUDENT'
      });
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white mx-auto shadow-md">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-campus-950">Welcome to Campus Admin</h1>
          <p className="text-xs text-slate-500">Sign in to manage your shortlisted colleges and applications</p>
        </div>

        {/* Quick Demo Login Buttons */}
        <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl space-y-2">
          <span className="text-[11px] font-bold text-amber-900 block flex items-center">
            <UserCheck className="w-3.5 h-3.5 mr-1" /> Quick Demo Sign In
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('STUDENT')}
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs py-2 px-3 rounded-xl border border-amber-300 transition shadow-sm text-center"
            >
              Demo Student
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('ADMIN')}
              className="bg-campus-900 hover:bg-campus-950 text-amber-400 font-bold text-xs py-2 px-3 rounded-xl transition shadow text-center"
            >
              Demo Admin Portal
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 uppercase">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="student@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 uppercase">Password</label>
              <span className="text-[11px] text-brand-600 hover:underline cursor-pointer">Forgot?</span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3 rounded-xl transition shadow flex items-center justify-center space-x-1.5"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Campus Admin'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Don't have an account yet?{' '}
          <Link href="/auth/register" className="font-bold text-brand-600 hover:underline">
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}

