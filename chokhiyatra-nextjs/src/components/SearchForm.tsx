'use client';

import React, { useEffect, useState } from 'react';

interface Destination {
  _id: string;
  name: string;
  country: string;
  region?: string;
}

interface SearchFormProps {
  destinations: Destination[];
}

export default function SearchForm({ destinations }: SearchFormProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="checkout-two-area">
        <div className="checkout-area position-relative z-3">
          <div className="container">
            <div className="checkout-bg bg-white tw-pt-11 tw-px-14 tw-pb-11 tw-rounded-md">
              <div className="row">
                <div className="col-xl-12">
                  <div className="checkout-main-wrapper">
                    <div className="checkout-wrapper d-flex flex-column">
                      <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                        <span><img src="assets/images/icon/checkout-icon1.svg" alt="icon" /></span> Destination
                      </label>
                      <div className="nice-select">
                        <span className="current">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-two-area">
      <div className="checkout-area position-relative z-3">
        <div className="container">
          <div className="checkout-bg bg-white tw-pt-11 tw-px-14 tw-pb-11 tw-rounded-md">
            <div className="row">
              <div className="col-xl-12">
                <div className="checkout-main-wrapper">
                  <div className="checkout-wrapper d-flex flex-column">
                    <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                      <span><img src="assets/images/icon/checkout-icon1.svg" alt="icon" /></span> Destination
                    </label>
                    <div className="nice-select">
                      <span className="current">
                        {destinations.length > 0 ? 'Your city or Region' : 'No destinations available'}
                      </span>
                      <ul className="list">
                        <li className="option">Your city or Region</li>
                        {destinations.map((dest) => (
                          <li key={dest._id} className="option">
                            {dest.region ? `${dest.region}, ${dest.country}` : `${dest.name}, ${dest.country}`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="checkout-wrapper d-flex flex-column">
                    <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                      <span><img src="assets/images/icon/checkout-icon2.svg" alt="icon" /></span> All Activity
                    </label>
                    <div className="nice-select">
                      <span className="current">Choose Activity</span>
                      <ul className="list">
                        <li className="option">Choose Activity</li>
                        <li className="option">Sightseeing</li>
                        <li className="option">Adventure Sports</li>
                        <li className="option">Cultural Tours</li>
                        <li className="option">Beach & Relaxation</li>
                        <li className="option">Wildlife Safari</li>
                      </ul>
                    </div>
                  </div>
                  <div className="checkout-wrapper d-flex flex-column">
                    <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                      <span><img src="assets/images/icon/checkout-icon3.svg" alt="icon" /></span> Departure Date
                    </label>
                    <div className="nice-select">
                      <span className="current">Date Form</span>
                      <ul className="list">
                        <li className="option">Date Form</li>
                        <li className="option">This Week</li>
                        <li className="option">Next Week</li>
                        <li className="option">This Month</li>
                        <li className="option">Next Month</li>
                      </ul>
                    </div>
                  </div>
                  <div className="checkout-wrapper d-flex flex-column">
                    <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                      <span><img src="assets/images/icon/checkout-icon4.svg" alt="icon" /></span> Guest
                    </label>
                    <div className="nice-select">
                      <span className="current">Your Guest</span>
                      <ul className="list">
                        <li className="option">Your Guest</li>
                        <li className="option">1</li>
                        <li className="option">2</li>
                        <li className="option">3</li>
                        <li className="option">4</li>
                        <li className="option">5</li>
                        <li className="option">6</li>
                      </ul>
                    </div>
                  </div>
                  <div className="checkout-wrapper">
                    <div className="checkout-button common-hover-yellow">
                      <button className="primary-btn bg-main-600 text-white tw-py-4 tw-px-10 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl">
                        Search
                        <span><img src="assets/images/icon/search-btn.svg" alt="search" /></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
