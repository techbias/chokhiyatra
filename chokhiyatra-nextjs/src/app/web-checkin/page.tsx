'use client';

import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';
import { sanityClient, urlFor } from '@/lib/sanity';

interface Airline {
  _id: string;
  name: string;
  logo: any;
  webCheckinUrl: string;
}

export default function WebCheckinPage() {
  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "flightPartner"] | order(name asc){
            _id,
            name,
            logo,
            webCheckinUrl
          }`
        );

        if (data && data.length > 0) {
          setAirlines(data);
        } else {
          setAirlines([]);
        }
      } catch (error) {
        console.error('Error fetching airlines:', error);
        setAirlines([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAirlines();
  }, []);

  return (
    <PageLayout>
      <section className="web-checkin-area py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section-wrapper text-center tw-mb-12">
                <h2 className="section-title fw-normal tw-mb-5">
                  Airline Web Check-in
                </h2>
                <p className="section-paragraph tw-text-lg fw-normal">
                  Save time at the airport by checking in online. Select your airline below to access their web check-in portal.
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-main-600" role="status">
                <span className="visually-hidden">Loading airlines...</span>
              </div>
            </div>
          ) : airlines.length === 0 ? (
            <div className="text-center py-5">
              <p className="tw-text-lg">No airlines available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              {airlines.map((airline) => {
                const logoUrl = airline.logo?.asset
                  ? urlFor(airline.logo).url()
                  : '/assets/images/brand/brand-thumb1.png';

                return (
                  <div key={airline._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tw-mb-6">
                    <a
                      href={airline.webCheckinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="airline-card d-flex flex-column align-items-center justify-content-center bg-white tw-p-6 tw-rounded-xl text-decoration-none position-relative overflow-hidden"
                    >
                      <div className="airline-logo tw-mb-3 d-flex align-items-center justify-content-center" style={{ height: '90px', width: '100%' }}>
                        <img
                          src={logoUrl}
                          alt={airline.name}
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      <h6 className="airline-name tw-text-base fw-semibold text-center tw-mb-2 text-dark">
                        {airline.name}
                      </h6>
                      <span className="checkin-btn tw-text-sm text-main-600 fw-medium">
                        <i className="ph ph-arrow-up-right"></i> Web Check-in
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .airline-card {
          min-height: 160px;
          transition: all 0.3s ease;
          border: 1px solid #e5e7eb;
        }

        .airline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--main-600);
        }

        .airline-card:hover .checkin-btn {
          color: var(--main-600);
        }

        .airline-logo {
          padding: 10px;
        }
      `}</style>
    </PageLayout>
  );
}
