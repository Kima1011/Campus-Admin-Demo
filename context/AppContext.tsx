'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT' | 'ADMIN' | 'COUNSELOR';
}

interface AppContextType {
  user: UserSession | null;
  login: (userData: UserSession) => void;
  logout: () => void;
  savedColleges: string[];
  toggleSaveCollege: (slug: string) => void;
  isCollegeSaved: (slug: string) => boolean;
  comparedColleges: string[];
  addToCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  enquiryModalOpen: boolean;
  setEnquiryModalOpen: (open: boolean) => void;
  selectedCollegeForEnquiry: { name: string; slug: string } | null;
  openEnquiryModal: (college?: { name: string; slug: string }) => void;
  brochureModalCollege: { name: string; slug: string } | null;
  openBrochureModal: (college: { name: string; slug: string }) => void;
  closeBrochureModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [savedColleges, setSavedColleges] = useState<string[]>([]);
  const [comparedColleges, setComparedColleges] = useState<string[]>([]);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCollegeForEnquiry, setSelectedCollegeForEnquiry] = useState<{ name: string; slug: string } | null>(null);
  const [brochureModalCollege, setBrochureModalCollege] = useState<{ name: string; slug: string } | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('ca_user');
      if (storedUser) setUser(JSON.parse(storedUser));

      const storedSaved = localStorage.getItem('ca_saved');
      if (storedSaved) setSavedColleges(JSON.parse(storedSaved));

      const storedCompare = localStorage.getItem('ca_compare');
      if (storedCompare) setComparedColleges(JSON.parse(storedCompare));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const login = (userData: UserSession) => {
    setUser(userData);
    localStorage.setItem('ca_user', JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ca_user');
    showToast('Signed out successfully.', 'info');
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const toggleSaveCollege = (slug: string) => {
    setSavedColleges((prev) => {
      const updated = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      localStorage.setItem('ca_saved', JSON.stringify(updated));
      showToast(prev.includes(slug) ? 'Removed from saved colleges' : 'College saved to shortlist!', 'success');
      return updated;
    });
  };

  const isCollegeSaved = (slug: string) => savedColleges.includes(slug);

  const addToCompare = (slug: string) => {
    if (comparedColleges.includes(slug)) {
      showToast('College already in comparison list', 'info');
      return;
    }
    if (comparedColleges.length >= 4) {
      showToast('You can compare a maximum of 4 colleges at a time', 'error');
      return;
    }
    const updated = [...comparedColleges, slug];
    setComparedColleges(updated);
    localStorage.setItem('ca_compare', JSON.stringify(updated));
    showToast('Added to comparison deck!', 'success');
  };

  const removeFromCompare = (slug: string) => {
    const updated = comparedColleges.filter((s) => s !== slug);
    setComparedColleges(updated);
    localStorage.setItem('ca_compare', JSON.stringify(updated));
    showToast('Removed from comparison', 'info');
  };

  const clearCompare = () => {
    setComparedColleges([]);
    localStorage.removeItem('ca_compare');
  };

  const openEnquiryModal = (college?: { name: string; slug: string }) => {
    setSelectedCollegeForEnquiry(college || null);
    setEnquiryModalOpen(true);
  };

  const openBrochureModal = (college: { name: string; slug: string }) => {
    setBrochureModalCollege(college);
  };

  const closeBrochureModal = () => {
    setBrochureModalCollege(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        savedColleges,
        toggleSaveCollege,
        isCollegeSaved,
        comparedColleges,
        addToCompare,
        removeFromCompare,
        clearCompare,
        toast,
        showToast,
        enquiryModalOpen,
        setEnquiryModalOpen,
        selectedCollegeForEnquiry,
        openEnquiryModal,
        brochureModalCollege,
        openBrochureModal,
        closeBrochureModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}

