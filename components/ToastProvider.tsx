'use client';

import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ToastProvider() {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-sky-400 flex-shrink-0" />
  };

  const bgStyles = {
    success: 'bg-campus-900 border-emerald-500/30 text-white',
    error: 'bg-campus-900 border-rose-500/30 text-white',
    info: 'bg-campus-900 border-sky-500/30 text-white'
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center shadow-2xl rounded-full px-5 py-3 border text-xs font-semibold backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-150 space-x-2.5 max-w-sm sm:max-w-md w-auto">
      <div className={`flex items-center space-x-2.5 rounded-full px-4 py-2 border shadow-lg ${bgStyles[toast.type]}`}>
        {icons[toast.type]}
        <span>{toast.message}</span>
      </div>
    </div>
  );
}

