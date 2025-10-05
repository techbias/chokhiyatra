'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header header-two transition-all">
      <div className="container-fluid">
        <nav className="d-flex align-items-center justify-content-between">
          {/* Logo Start */}
          <div className="logo">
            <Link href="/" className="link">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Logo"
                width={200}
                height={60}
                className="max-w-200-px"
                priority
              />
            </Link>
          </div>
          {/* Logo End  */}

          {/* Menu Start  */}
          <div className="header-menu header-two-menu d-lg-block d-none">
            {/* Nav menu Start */}
            <ul className="nav-menu d-lg-flex align-items-center tw-gap-6">
              <li className="nav-menu__item position-relative activePage">
                <Link
                  href="/"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Home
                </Link>
              </li>
              <li className="nav-menu__item position-relative">
                <Link
                  href="/about"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-menu__item position-relative">
                <Link
                  href="/contact"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-menu__item position-relative">
                <Link
                  href="/web-checkin"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Web Check-in
                </Link>
              </li>
              <li className="nav-menu__item">
                <Link
                  href="/faq"
                  className="nav-menu__link text-main-600 tw-py-3 fw-medium w-100 font-dmsans"
                >
                  FAQs
                </Link>
              </li>
            </ul>
            {/* Nav menu End  */}
          </div>
          {/* Menu End  */}

          {/* Header Right start */}
          <div className="">
            <div className="d-flex align-items-center tw-gap-29">
              <div className="header-button">
                <Link
                  className="primary-btn bg-white text-main-600 tw-py-5 tw-px-10 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="/contact"
                >
                  B2B Login <i className="ph ph-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="toggle-mobileMenu leading-none d-lg-none ms-3 text-neutral-800 tw-text-9"
            onClick={() => {
              const mobileMenu = document.querySelector('.mobile-menu');
              if (mobileMenu) {
                mobileMenu.classList.toggle('tw--translate-x-full');
              }
            }}
          >
            <i className="ph ph-list"></i>
          </button>
          {/* Header Right End  */}
        </nav>
      </div>
    </header>
  );
};

export default Header;