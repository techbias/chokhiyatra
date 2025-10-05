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
      <section className="flight-partners-area py-140 bg-light">
        <div className="container">
          <div className="text-center">
            <div className="section-wrapper tw-mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">flight partner</h6>
              <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Flight Partners</h2>
              <p className="section-paragraph tw-text-lg fw-normal">
                Add flight partners in Sanity Studio to display them here.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flight-partners-area py-140 bg-light">
      <div className="container">
        <div className="text-center">
          <div className="section-wrapper tw-mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">flight partner</h6>
            <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Flight Partners</h2>
            <p className="section-paragraph tw-text-lg fw-normal">
              Book flights with our trusted airline partners for the best travel experience.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {partners.map((partner, index) => {
            const logoUrl = partner.logo?.asset
              ? urlFor(partner.logo).width(180).height(90).url()
              : 'assets/images/brand/brand-thumb1.png';

            const PartnerElement = partner.webCheckinUrl ? 'a' : 'div';
            const elementProps = partner.webCheckinUrl
              ? { href: partner.webCheckinUrl, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <div key={partner._id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <PartnerElement
                  {...elementProps}
                  className="flight-partner-card d-flex flex-column align-items-center justify-content-center tw-mb-8 bg-white tw-p-6 tw-rounded-xl position-relative transition-all"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flight-partner-logo tw-mb-3">
                    <img src={logoUrl} alt={partner.name} className="w-100" />
                  </div>
                  <h6 className="flight-partner-name tw-text-sm fw-medium text-center tw-mb-0">
                    {partner.name}
                  </h6>
                  {partner.webCheckinUrl && (
                    <span className="tw-text-xs text-main-600 tw-mt-2">
                      <i className="ph ph-arrow-up-right"></i> Web Check-in
                    </span>
                  )}
                </PartnerElement>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .flight-partners-area {
          background-color: #f8f9fa;
        }

        .flight-partner-card {
          min-height: 180px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: flex;
          border: 1px solid transparent;
        }

        .flight-partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: var(--main-600);
        }

        .flight-partner-logo {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flight-partner-logo img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
