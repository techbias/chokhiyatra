'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="footer position-relative z-1 mt-auto">
      <div className="container container-two">
        <div className="footer-wrapper border-top border-dashed border-0 tw-pt-20 tw-pb-20 position-relative z-1">
          <div className="row gy-5">
            {/* Say Hello Column */}
            <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-6">
              <div className="footer-col-one" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h4 className="cursor-big tw-text-2xl tw-mb-8">Say Hello</h4>
                <div className="d-flex flex-column">
                  <a
                    href="mailto:info@chokhiyatra.com"
                    className="font-heading fw-normal tw-text-sm text-main-600 tw-mb-3 d-inline-block hover-text-secondary"
                  >
                    info@chokhiyatra.com
                  </a>
                  <a
                    href="tel:+91-94131-31000"
                    className="font-heading fw-bold tw-text-xl text-main-600 tw-mb-5 d-inline-block hover-text-secondary"
                  >
                    +91-94131-31000
                  </a>
                </div>
                <div className="tw-hover-btn-wrapper d-inline-block">
                  <Link className="tw-btn-circle tw-hover-btn-item tw-hover-btn" href="/contact">
                    <span className="d-flex flex-column justify-content-center">
                      <span className="tw-btn-circle-icon">
                        <Image
                          src="/assets/images/icon/footer-arrow.svg"
                          alt="arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="text-white fw-bold">Connect Now</span>
                    </span>
                    <i className="tw-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Newsletter Column */}
            <div className="col-xl-4 col-lg-6 col-sm-6 col-xs-6">
              <div className="footer-col-two text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <h4 className="cursor-big tw-text-2xl tw-mb-8">Subscribe newsletter</h4>
                <form onSubmit={handleSubmit} className="tw-mt-6 position-relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control footer-form-input tw-ps-9 tw-pe-13 tw-h-12 focus-tw-placeholder-text-hidden tw-placeholder-transition-2 tw-mb-4 focus-border-main-600 tw-placeholder-text-neutral-300 focus-tw-placeholder-text-hidden"
                    placeholder="Email..."
                    required
                  />
                  <button
                    type="submit"
                    className="footer-form-email position-absolute top-50 tw--translate-y-50 start-0 tw-ps-4 tw-text-sm"
                  >
                    <i className="ph ph-envelope"></i>
                  </button>
                </form>
                <p className="text-main-600 fw-medium tw-mb-4">
                  By subscribing, you&apos;re accept Privacy Policy
                </p>
                <ul className="d-flex justify-content-center tw-gap-2">
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-facebook-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-twitter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-pinterest-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* My Account & Service Columns */}
            <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="footer-right d-flex tw-gap-8">
                {/* My Account Column */}
                <div className="footer-col-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h4 className="cursor-big tw-text-2xl tw-mb-8">My account</h4>
                  <ul className="d-flex flex-column tw-gap-4">
                    <li>
                      <Link href="/contact" className="footer-link hover-underline">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="footer-link hover-underline">
                        FAQ Page
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="footer-link hover-underline">
                        Get In Touch
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Global Network
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link href="#" className="footer-link hover-underline">
                        Suport 24/7
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Service Column */}
                <div className="footer-col-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <h4 className="cursor-big tw-text-2xl tw-mb-8">Service</h4>
                  <ul className="d-flex flex-column tw-gap-4">
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Historical & Cultural Tours
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Adventure & Outdoor Tours
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Wildlife & Safari Tours
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Luxury & Relaxation Tours
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="footer-link hover-underline">
                        Photography & Scenic Tours
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container">
        <div className="border-top border-dashed border-0 tw-py-8">
          <div className="container container-two">
            <div className="footer-copyright-wrap d-flex align-items-center justify-content-between flex-wrap">
              <p className="text-line-1 fw-normal text-main-600">
                Copyright - ChokhiYatra<span className="fw-semibold"></span> Design & • Developed with love by <a href="https://www.techbias.in" target="_blank">TechBias</a></p>
              <div className="">
                <ul className="footer-copyright-social d-flex tw-gap-16">
                  <li>
                    <Link
                      href="/"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      faq
                    </Link>
                  </li>
                  <li className="mb-0">
                    <Link
                      href="/blog"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;