'use client';

import React from 'react';
import Preloader from './Preloader';
import SearchPopup from './SearchPopup';
import Header from './Header';
import Footer from './Footer';
import Scripts from './Scripts';

interface Service {
  _id: string;
  title: string;
  description: string;
  image: any;
  order: number;
  imagePosition: string;
}

interface PageLayoutProps {
  children: React.ReactNode;
  services?: Service[];
}

export default function PageLayout({ children, services }: PageLayoutProps) {
  return (
    <>
      <Preloader />
      <SearchPopup />
      <Header />
      <main>
        <div id="scrollSmoother-container">
          {children}
          <Footer services={services} />
        </div>
      </main>
      <Scripts />
    </>
  );
}
