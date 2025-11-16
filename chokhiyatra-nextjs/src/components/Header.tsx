'use client';

import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header header-two transition-all">
      <div className="container-fluid">
        <nav className="d-flex align-items-center justify-content-between">
          {/* Logo Start */}
          <div className="logo">
            <a href="/" className="link">
              <Image
                src="/assets/images/logo/logo.png"
                alt="Logo"
                width={200}
                height={60}
                className="max-w-200-px"
                priority
              />
            </a>
          </div>
          {/* Logo End  */}

          {/* Menu Start  */}
          <div className="header-menu header-two-menu d-lg-block d-none">
            {/* Nav menu Start */}
            <ul className="nav-menu d-lg-flex align-items-center tw-gap-6">
              <li className="nav-menu__item position-relative activePage">
                <a
                  href="/"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Home
                </a>
              </li>
              <li className="nav-menu__item position-relative">
                <a
                  href="/about"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  About Us
                </a>
              </li>
              <li className="nav-menu__item position-relative">
                <a
                  href="/contact"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Contact
                </a>
              </li>
              <li className="nav-menu__item position-relative">
                <a
                  href="/web-checkin"
                  className="nav-menu__link tw-pe-5 text-main-600 tw-py-3 fw-medium w-100 font-dmsans fw-medium"
                >
                  Web Check-in
                </a>
              </li>
              <li className="nav-menu__item">
                <a
                  href="/faq"
                  className="nav-menu__link text-main-600 tw-py-3 fw-medium w-100 font-dmsans"
                >
                  FAQs
                </a>
              </li>
            </ul>
            {/* Nav menu End  */}
          </div>
          {/* Menu End  */}

          {/* Header Right start */}
          <div className="">
            <div className="d-flex align-items-center tw-gap-29">
              <div className="header-button">
                <a
                  className="primary-btn bg-white text-main-600 tw-py-3 tw-px-8 fs-15 text-uppercase fw-bold tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="https://b2b.chokhiyatra.com/" target='_blank'
                >
                  B2B Login <i className="ph ph-arrow-up-right"></i>
                </a>
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