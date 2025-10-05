'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';

interface FlightPartner {
  _id: string;
  name: string;
  logo: any;
  webCheckinUrl?: string;
  order: number;
}

export default function FlightPartners() {
  const [partners, setPartners] = useState<FlightPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "flightPartner" && featured == true] | order(order asc){
            _id,
            name,
            logo,
            webCheckinUrl,
            order
          }`
        );

        if (data && data.length > 0) {
          setPartners(data);
        } else {
          setPartners([]);
        }
      } catch (error) {
        console.error('Error fetching flight partners:', error);
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <section className="flight-partners-area py-140 bg-light">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading flight partners...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return (
      <section className="brand-area py-140 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section-wrapper tw-mb-19" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">flight partner</h6>
                <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Flight Partners</h2>
                <p className="section-paragraph tw-text-lg fw-normal">
                  Add flight partners in Sanity Studio to display them here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="brand-area py-140 bg-light">
      <div className="container">
        <div className="row">
          {/* Content on left */}
          <div className="col-xl-4">
            <div className="section-wrapper tw-mb-19" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">flight partner</h6>
              <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Flight Partners</h2>
              <p className="section-paragraph tw-text-lg fw-normal">
                Book flights with our trusted airline partners for the best travel experience.
              </p>
            </div>
          </div>

          {/* Logos on right */}
          <div className="col-xl-8">
            <div className="row">
              {partners.map((partner, index) => {
                const logoUrl = partner.logo?.asset
                  ? urlFor(partner.logo).url()
                  : 'assets/images/brand/brand-thumb1.png';

                const PartnerElement = partner.webCheckinUrl ? 'a' : 'div';
                const elementProps = partner.webCheckinUrl
                  ? { href: partner.webCheckinUrl, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <div key={partner._id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <PartnerElement
                      {...elementProps}
                      className="brand-wrapper flight-partner-wrapper d-flex align-items-center justify-content-center cursor-pointer tw-mb-8 bg-white tw-py-10 tw-rounded-xl position-relative"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={200 + index * 100}
                    >
                      <span className="brand-active-media">
                        <img src={logoUrl} alt={partner.name} />
                      </span>
                    </PartnerElement>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-light {
          background-color: #f8f9fa;
        }

        .flight-partner-wrapper {
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          min-height: 100px;
          padding: 12px;
        }

        .flight-partner-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .flight-partner-wrapper:hover .brand-active-media {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }

        @media (max-width: 1199px) {
          .order-xl-1 {
            order: 1;
          }
          .order-xl-2 {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
