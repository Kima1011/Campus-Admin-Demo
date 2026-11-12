import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import BrochureModal from '@/components/BrochureModal';
import CompareFloatingBar from '@/components/CompareFloatingBar';
import ToastProvider from '@/components/ToastProvider';

export const metadata: Metadata = {
  title: 'CAMPUS ADMIN — India’s Premier Higher Education & Career Discovery Platform',
  description: 'Explore 1,200+ verified Indian colleges, official NIRF rankings, authenticated placement statistics, course fee structures, entrance exams, and compare top institutions.',
  keywords: 'colleges in India, engineering colleges, IITs, IIMs, medical colleges, NEET UG, JEE Main, CAT 2025, college predictor, college compare, MBA, B.Tech',
  authors: [{ name: 'Campus Admin Editorial Board' }],
  openGraph: {
    title: 'CAMPUS ADMIN — Discover Your Future in Higher Education',
    description: 'Explore verified Indian colleges, official NIRF rankings, and authentic placement packages.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
        <AppProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <EnquiryModal />
          <BrochureModal />
          <CompareFloatingBar />
          <ToastProvider />
        </AppProvider>
      </body>
    </html>
  );
}

