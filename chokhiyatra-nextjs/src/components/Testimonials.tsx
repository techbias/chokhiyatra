'use client';

import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '@/lib/sanity';

interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  company: string;
  testimonial: string;
  rating: string;
  logo: any;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "testimonial" && featured == true]{
            _id,
            name,
            designation,
            company,
            testimonial,
            rating,
            logo
          }`
        );

        if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          // Fallback to default testimonials
          setTestimonials([
            {
              _id: '1',
              name: 'William Camel',
              designation: 'Head of Design',
              company: 'Zazoo',
              testimonial: 'From luxury hotels to private transfers and curated experiences, everything was flawless. This is what five-star travel should feel like.',
              rating: 'great experience',
              logo: null,
            },
            {
              _id: '2',
              name: 'William Camel',
              designation: 'Head of Design',
              company: 'Zazoo',
              testimonial: 'From luxury hotels to private transfers and curated experiences, everything was flawless. This is what five-star travel should feel like.',
              rating: 'great experience',
              logo: null,
            },
            {
              _id: '3',
              name: 'William Camel',
              designation: 'Head of Design',
              company: 'Zazoo',
              testimonial: 'From luxury hotels to private transfers and curated experiences, everything was flawless. This is what five-star travel should feel like.',
              rating: 'great experience',
              logo: null,
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setTestimonials([
          {
            _id: '1',
            name: 'William Camel',
            designation: 'Head of Design',
            company: 'Zazoo',
            testimonial: 'From luxury hotels to private transfers and curated experiences, everything was flawless. This is what five-star travel should feel like.',
            rating: 'great experience',
            logo: null,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Initialize Swiper and refresh ScrollTrigger after testimonials load
  useEffect(() => {
    if (!loading && testimonials.length > 0) {
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          // Initialize Swiper
          if ((window as any).Swiper) {
            const container = document.querySelector('.testimonial-two-active');
            if (container && (container as any).swiper) {
              (container as any).swiper.destroy(true, true);
            }

            new (window as any).Swiper('.testimonial-two-active', {
              slidesPerView: 'auto',
              spaceBetween: 30,
              loop: true,
              speed: 3000,
              autoplay: true,
              breakpoints: {
                1200: { slidesPerView: 2 },
                992: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 }
              },
              pagination: {
                el: '.testimonial-two-dot',
                clickable: true
              }
            });
          }

          // Refresh ScrollTrigger
          if ((window as any).ScrollTrigger) {
            (window as any).ScrollTrigger.refresh();
          }
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [loading, testimonials]);

  if (loading) {
    return (
      <section className="testimonial-two-area pb-140">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading testimonials...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonial-two-area pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-wrapper text-center tw-mb-19" data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="200">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Clients
                testimonial</h6>
              <h2 className="section-title fw-normal tw-mb-7 char-animation"> Shelter of Love,
                Compassion,
                and New Beginnings</h2>
              <p className="section-paragraph tw-text-lg fw-normal">communication and utilizes cutting
                edge logistic planning to get your shipment completed
                on time. itself founded of backgrounds, which simply.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="testimonial-two-slider position-relative z-1">
            <div className="testimonial-two-active swiper-container">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => {
                  const logoUrl = testimonial.logo?.asset
                    ? urlFor(testimonial.logo).url()
                    : 'assets/images/testimonial/testimonial-two-logo.png';

                  // Alternate colors: main-two-600 and main-600
                  const isEven = index % 2 === 0;
                  const bgClass = isEven ? 'bg-main-two-600' : 'bg-main-600';
                  const textClass = isEven ? 'text-main-600' : 'text-white';
                  const nameClass = isEven ? '' : 'text-white';

                  return (
                    <div
                      key={testimonial._id}
                      className="testimonial-two-wrapper tw-rounded-xl d-flex justify-content-between position-relative z-1 background-img overflow-hidden swiper-slide"
                      data-background-image="assets/images/testimonial/testimonial-two-bg.png"
                    >
                      <div
                        className={`testimonial-two-left ${bgClass} tw-rounded-xl tw-pt-15 tw-pb-9 tw-ps-9 tw-pe-7`}
                      >
                        <p
                          className={`testimonial-two-paragraph fw-medium ${textClass} tw-pb-9 tw-mb-6`}
                        >
                          {testimonial.testimonial}
                        </p>
                        <div>
                          <h6 className={`tw-text-xl text-capitalize tw-mb-2 ${nameClass}`}>
                            {testimonial.name}
                          </h6>
                          <p className={`${textClass} fw-medium`}>
                            {testimonial.designation} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div
                        className="testimonial-two-right d-flex justify-content-between flex-column tw-pt-16 tw-pb-12 tw-pe-15"
                      >
                        <div className="icon">
                          <span>
                            <img src="assets/images/icon/testimonial-two-quote1.svg" alt="quote" />
                          </span>
                        </div>
                        <div>
                          <div className="tw-mb-4">
                            <img src={logoUrl} alt="logo" />
                          </div>
                          <div className="d-flex tw-gap-1">
                            {[...Array(5)].map((_, i) => {
                              const ratingValue = parseInt(testimonial.rating) || 5;
                              return (
                                <svg
                                  key={i}
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill={i < ratingValue ? '#FDB022' : '#E5E7EB'}
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
                                </svg>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="testimonial-two-dot text-center tw-mt-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
