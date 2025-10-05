'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';

interface HotelPartner {
  _id: string;
  name: string;
  logo: any;
  hoverLogo: any;
  order: number;
}

export default function HotelPartners() {
  const [partners, setPartners] = useState<HotelPartner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "brand"] | order(order asc){
            _id,
            name,
            logo,
            hoverLogo,
            order
          }`
        );

        if (data && data.length > 0) {
          setPartners(data);
        } else {
          setPartners([]);
        }
      } catch (error) {
        console.error('Error fetching hotel partners:', error);
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return (
      <section className="brand-area py-140">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading hotel partners...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (partners.length === 0) {
    return (
      <section className="brand-area py-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="section-wrapper tw-mb-19" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">hotel partner</h6>
                <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Hotel Partners</h2>
                <p className="section-paragraph tw-text-lg fw-normal">
                  Add hotel partners in Sanity Studio to display them here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="brand-area py-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="section-wrapper tw-mb-19" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">hotel partner</h6>
              <h2 className="section-title fw-normal tw-mb-5 char-animation">Our Hotel Partners</h2>
              <p className="section-paragraph tw-text-lg fw-normal">
                communication and utilizes cutting edge logistic on time. itself founded of backgrounds, which.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              {partners.map((partner, index) => {
                const logoUrl = partner.logo?.asset
                  ? urlFor(partner.logo).width(200).height(100).url()
                  : 'assets/images/brand/brand-thumb1.png';

                const hoverLogoUrl = partner.hoverLogo?.asset
                  ? urlFor(partner.hoverLogo).width(200).height(100).url()
                  : logoUrl;

                return (
                  <div key={partner._id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div
                      className="brand-wrapper d-flex align-items-center justify-content-center cursor-pointer tw-mb-8 bg-white tw-py-10 tw-rounded-xl position-relative"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={200 + index * 100}
                    >
                      <span className="brand-active-media">
                        <img src={logoUrl} alt={partner.name} />
                      </span>
                      <span className="brand-hover-media">
                        <img src={hoverLogoUrl} alt={partner.name} />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
