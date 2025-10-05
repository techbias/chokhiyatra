'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';

interface TourPackage {
  _id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: any;
}

export default function TourPackages() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "tourPackage" && featured == true] | order(_createdAt desc)[0...3]{
            _id,
            title,
            location,
            description,
            price,
            duration,
            rating,
            reviews,
            image
          }`
        );
        setPackages(data || []);
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <section className="pb-140 position-relative z-1">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (packages.length === 0) {
    return (
      <section className="pb-140 position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-wrapper text-center tw-mb-10">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">
                  advance tour plan
                </h6>
                <h2 className="section-title fw-normal tw-mb-7">
                  No tour packages available yet
                </h2>
                <p className="section-paragraph tw-text-lg fw-normal">
                  Please add tour packages in Sanity Studio to display them here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-140 position-relative z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div
              className="section-wrapper text-center tw-mb-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">
                advance tour plan
              </h6>
              <h2 className="section-title fw-normal tw-mb-7 char-animation">
                Shelter of Love, Compassion, and New Beginnings
              </h2>
              <p className="section-paragraph tw-text-lg fw-normal">
                communication and utilizes cutting edge logistic planning to get your shipment
                completed on time. itself founded of backgrounds, which simply.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="service-two-slider">
              <div className="service-two-active swiper-container">
                <div className="swiper-wrapper">
                  {packages.map((pkg, index) => {
                    const imageUrl = pkg.image?.asset
                      ? urlFor(pkg.image).width(400).height(300).url()
                      : '/assets/images/service/service-two-thumb1.jpg';

                    return (
                      <div
                        key={pkg._id}
                        className="service-two-wrapper bg-white tw-p-4 tw-rounded-xl tw-mb-8 swiper-slide"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={200 + index * 100}
                      >
                        <div className="service-two-thumb tw-mb-5">
                          <a href="package-details.html">
                            <img
                              className="tw-rounded-xl w-100"
                              src={imageUrl}
                              alt={pkg.title}
                            />
                          </a>
                        </div>
                        <div className="service-two-content tw-px-2 tw-mb-2">
                          <span className="service-two-location">
                            <i className="ph ph-map-pin"></i> {pkg.location}
                          </span>
                          <h4 className="tw-text-8 fw-normal text-capitalize tw-mb-2">
                            <a className="hover-text-secondary" href="package-details.html">
                              {pkg.title}
                            </a>
                          </h4>
                          <p className="service-two-paragraph tw-mb-5">{pkg.description}</p>
                          <div className="service-two-wrap tw-rounded-xl tw-py-4 tw-px-6">
                            <div className="service-two-star d-flex tw-gap-6 tw-pb-4 tw-mb-6">
                              <span className="text-main-600 fw-medium d-flex tw-gap-2">
                                <i className="ph ph-star"></i> {pkg.rating?.toFixed(2) || '5.00'} (
                                {pkg.reviews || 0})
                              </span>
                              <span className="text-main-600 fw-medium">{pkg.duration}</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                              <div className="service-two-price">
                                <h6>${pkg.price?.toFixed(2) || '0.00'}</h6>
                                <p>/ Per Person</p>
                              </div>
                              <div>
                                <a
                                  className="font-heading tw-text-sm text-uppercase text-main-600 fw-bold hover-text-secondary"
                                  href="package-details.html"
                                >
                                  EXPLORE MORE <i className="tw-text-base ph ph-arrow-up-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-two-plane-shape position-absolute top-50 start-0 translate-middle-y z-n1">
        <img src="assets/images/shapes/plane-shape.png" alt="plane" />
      </div>
    </section>
  );
}
