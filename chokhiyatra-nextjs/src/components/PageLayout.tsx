'use client';

import React from 'react';
import Preloader from './Preloader';
import SearchPopup from './SearchPopup';
import Header from './Header';
import Footer from './Footer';
import Scripts from './Scripts';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Preloader />
      <SearchPopup />
      <Header />
      <main>
        <div id="scrollSmoother-container">
          {children}
          <Footer />
        </div>
      </main>
      <Scripts />
    </>
  );
}
