'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
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
                  <a className="tw-btn-circle tw-hover-btn-item tw-hover-btn" href="/contact">
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
                  </a>
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
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="footer-form-email position-absolute top-50 tw--translate-y-50 start-0 tw-ps-4 tw-text-sm"
                  >
                    <i className="ph ph-envelope"></i>
                  </button>
                </form>
                {success && (
                  <p className="text-success fw-medium tw-mb-4">
                    Successfully subscribed! Check your email.
                  </p>
                )}
                {error && (
                  <p className="text-danger fw-medium tw-mb-4">
                    {error}
                  </p>
                )}
                {!success && !error && (
                  <p className="text-main-600 fw-medium tw-mb-4">
                    By subscribing, you&apos;re accept Privacy Policy
                  </p>
                )}
                <ul className="d-flex justify-content-center tw-gap-2">
                  <li>
                    <a
                      href="https://www.facebook.com/chokhiyatra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-facebook-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/chokhiyatra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tw-w-10 tw-h-10 d-inline-flex align-items-center justify-content-center bg-white tw-rounded-lg text-main-600 tw-text-xl"
                    >
                      <i className="ph-bold ph-instagram-logo"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links & Policies Columns */}
            <div className="col-xl-5 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="footer-right d-flex tw-gap-8">
                {/* Quick Links Column */}
                <div className="footer-col-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <h4 className="cursor-big tw-text-2xl tw-mb-8">Quick Links</h4>
                  <ul className="d-flex flex-column tw-gap-4">
                    <li>
                      <a href="/about" className="footer-link hover-underline">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="footer-link hover-underline">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="footer-link hover-underline">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/web-checkin" className="footer-link hover-underline">
                        Web Check-in
                      </a>
                    </li>
                    <li className="mb-0">
                      <a href="https://wa.me/919413131000" target="_blank" rel="noopener noreferrer" className="footer-link hover-underline">
                        Support 24/7
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Policies Column */}
                <div className="footer-col-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <h4 className="cursor-big tw-text-2xl tw-mb-8">Policies</h4>
                  <ul className="d-flex flex-column tw-gap-4">
                    <li>
                      <a href="/privacy-policy" className="footer-link hover-underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-conditions" className="footer-link hover-underline">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/refund-policy" className="footer-link hover-underline">
                        Refund Policy
                      </a>
                    </li>
                    <li className="mb-0">
                      <a href="/cancellation-policy" className="footer-link hover-underline">
                        Cancellation Policy
                      </a>
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
                © 2025 - ChokhiYatra Private Limited<span className="fw-semibold"></span> • Design & Developed by <a href="https://www.techbias.in" target="_blank">TechBias</a></p>
              <div className="">
                <ul className="footer-copyright-social d-flex tw-gap-16">
                  <li>
                    <a
                      href="/"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/web-checkin"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      Web Check-in
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-main-600 text-uppercase fw-semibold tw-text-sm hover-underline hover-text-secondary"
                    >
                      faq
                    </a>
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