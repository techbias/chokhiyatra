'use client';

import React, { useState } from 'react';

interface Destination {
  _id: string;
  name: string;
  country: string;
  region?: string;
}

interface SearchFormProps {
  destinations: Destination[];
}

const activities = [
  'Adventure',
  'Cultural',
  'Nature & Wildlife',
  'Historical',
  'Religious',
  'Beach & Relaxation',
  'Food & Culinary',
  'Shopping'
];

export default function SearchForm({ destinations }: SearchFormProps) {
  const [formData, setFormData] = useState({
    destination: '',
    activity: '',
    date: '',
    guests: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/search-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit inquiry');

      setSuccess(true);
      setFormData({ destination: '', activity: '', date: '', guests: '', email: '', phone: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-two-area">
      <div className="checkout-area position-relative z-3">
        <div className="container">
          <div className="checkout-bg bg-white tw-pt-11 tw-pb-11 tw-rounded-md px-3 px-md-5 px-lg-14">
            <div>
              <div>
                <form onSubmit={handleSearch}>
                  {/* First Row: Destination, Activity, Date */}
                  <div className="d-flex flex-wrap tw-mb-4">
                    <div className="search-field-bg" style={{ flex: '1 1 calc(33.333% - 1rem)', minWidth: '250px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon1.svg" alt="icon" /></span> Destination
                        </label>
                        <select
                          className="form-select tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        >
                          <option value="">Select Destination</option>
                          {destinations.map((dest) => (
                            <option key={dest._id} value={dest.name}>
                              {dest.region ? `${dest.region}, ${dest.country}` : `${dest.name}, ${dest.country}`}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="search-field-bg" style={{ flex: '1 1 calc(33.333% - 1rem)', minWidth: '250px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon2.svg" alt="icon" /></span> Activity
                        </label>
                        <select
                          className="form-select tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.activity}
                          onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                        >
                          <option value="">Choose Activity</option>
                          {activities.map((activity) => (
                            <option key={activity} value={activity}>
                              {activity}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="search-field-bg" style={{ flex: '1 1 calc(33.333% - 1rem)', minWidth: '250px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon3.svg" alt="icon" /></span> Departure Date
                        </label>
                        <input
                          type="date"
                          className="form-control tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Row: Guests, Email, Phone, Submit */}
                  <div className="d-flex flex-wrap">
                    <div className="search-field-bg" style={{ flex: '1 1 calc(25% - 1rem)', minWidth: '200px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon4.svg" alt="icon" /></span> Guests
                        </label>
                        <select
                          className="form-select tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        >
                          <option value="">Select Guests</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="search-field-bg" style={{ flex: '1 1 calc(25% - 1rem)', minWidth: '200px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon1.svg" alt="icon" /></span> Email
                        </label>
                        <input
                          type="email"
                          className="form-control tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div className="search-field-bg" style={{ flex: '1 1 calc(25% - 1rem)', minWidth: '200px' }}>
                      <div className="checkout-wrapper d-flex flex-column">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2">
                          <span><img src="assets/images/icon/checkout-icon2.svg" alt="icon" /></span> Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control tw-py-3 tw-px-0 tw-rounded-md tw-border-0"
                          style={{ border: 'none', paddingLeft: 0, paddingRight: 0, outline: 'none', boxShadow: 'none' }}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="search-field-bg" style={{ flex: '1 1 calc(25% - 1rem)', minWidth: '200px' }}>
                      <div className="checkout-wrapper">
                        <label className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2" style={{ visibility: 'hidden' }}>
                          Submit
                        </label>
                        <div className="checkout-button common-hover-yellow">
                          <button
                            type="submit"
                            disabled={loading}
                            className="primary-btn bg-main-600 text-white tw-py-4 tw-px-10 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-flex align-items-center tw-rounded-4xl w-100 justify-content-center"
                          >
                            {loading ? 'Submitting...' : 'Submit'}
                            <span><img src="assets/images/icon/search-btn.svg" alt="search" /></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success/Error Messages */}
                  {success && (
                    <div className="alert alert-success tw-mt-4">
                      Thank you! Your inquiry has been submitted successfully.
                    </div>
                  )}
                  {error && (
                    <div className="alert alert-danger tw-mt-4">
                      {error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
