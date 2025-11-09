// 'use client';

// import React, { useEffect, useState } from 'react';
// import { sanityClient, urlFor } from '@/lib/sanity';

// interface TourPackage {
//   _id: string;
//   title: string;
//   location: string;
//   description: string;
//   price: number;
//   duration: string;
//   rating: number;
//   reviews: number;
//   image: any;
// }

// export default function TourPackages() {
//   const [packages, setPackages] = useState<TourPackage[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPackages = async () => {
//       try {
//         const data = await sanityClient.fetch(
//           `*[_type == "tourPackage" && featured == true] | order(_createdAt desc)[0...3]{
//             _id,
//             title,
//             location,
//             description,
//             price,
//             duration,
//             rating,
//             reviews,
//             image
//           }`
//         );
//         setPackages(data || []);
//       } catch (error) {
//         console.error('Error fetching tour packages:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackages();
//   }, []);

//   if (loading) {
//     return (

//     );
//   }

//   if (packages.length === 0) {
//     return (

//   );
// }



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
          `*[_type == "tourPackage" && featured == true] | order(_createdAt desc){
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
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Initialize Swiper and refresh ScrollTrigger after data loads
  useEffect(() => {
    if (!loading && packages.length > 0) {
      const timer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          // Initialize Swiper
          if ((window as any).Swiper) {
            const container = document.querySelector('.service-two-active');
            if (container && (container as any).swiper) {
              (container as any).swiper.destroy(true, true);
            }

            new (window as any).Swiper('.service-two-active', {
              slidesPerView: 'auto',
              spaceBetween: 30,
              loop: true,
              speed: 2500,
              autoplay: true,
              breakpoints: {
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 }
              }
            });
          }

          // Refresh ScrollTrigger to fix plane animation
          if ((window as any).ScrollTrigger) {
            (window as any).ScrollTrigger.refresh();
          }
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [loading, packages]);

  if (loading) {
    return (
      <section className="pb-140 position-relative z-1">
        <div className="container">
          <div className="text-center py-5">
            <div className="spinner-border text-main-600" role="status">
              <span className="visually-hidden">Loading...</span>
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
            <div className="section-wrapper text-center tw-mb-10" data-aos="fade-up"
              data-aos-duration="1000" data-aos-delay="200">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">advance tour
                plan</h6>
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
          <div className="col-xl-12">
            <div className="service-two-slider">
              <div className="service-two-active swiper-container">
                <div className="swiper-wrapper">

                  {/* THis is tour card  */}
                  {packages.map((pkg, index) => {
                    const imageUrl = pkg.image?.asset
                      ? urlFor(pkg.image).width(600).height(500).url()
                      : `assets/images/service/service-two-thumb${(index % 3) + 1}.jpg`;

                    return (
                      <div
                        key={pkg._id}
                        className="service-two-wrapper bg-white tw-p-4 tw-rounded-xl tw-mb-8 swiper-slide"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={200 + (index % 3) * 100}
                      >
                        <div className="service-two-thumb tw-mb-5">
                          <a href="package-details.html">
                            <img className="tw-rounded-xl w-100" src={imageUrl} alt="thumb" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
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
                                <i className="ph ph-star"></i> {pkg.rating?.toFixed(2) || '5.00'} ({pkg.reviews || 0})
                              </span>
                              <span className="text-main-600 fw-medium">{pkg.duration}</span>
                            </div>
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                              <div>
                                <a
                                  className="font-heading tw-text-sm text-uppercase text-main-600 fw-bold hover-text-secondary"
                                  href={`https://wa.me/919825003639?text=${encodeURIComponent(`Hi, I'm interested in the tour package:\n\n📍 ${pkg.title}\n🌍 Location: ${pkg.location}\n⏱️ Duration: ${pkg.duration}\n\nCould you please provide me with more details?`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Get More Details <i className="tw-text-base ph ph-arrow-up-right"></i>
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

      {/* dont touch this */}
      <div className="service-two-plane-shape position-absolute top-50 start-0 translate-middle-y z-n1">
        <div className="line_shape_2">
          <svg width="1920" height="287" viewBox="0 0 1920 287" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path id="line_path_2"
              d="M0 286C235.807 161.804 715.277 -31.6361 948 104C1192.5 246.5 1698.62 102.064 1920 1"
              stroke="#CEC7BE" stroke-dasharray="4 4" />
            <g id="paper-plane_2">
              <path d="M8.52862 0.643979C8.65472 0.654731 12.5944 5.1037 15.7327 8.66873C16.0616 8.64319 16.3357 8.62234 16.3357 8.62234L16.6797 8.10704L19.1766 7.91312L19.3247 9.82093L16.9109 10.0082C17.5051 10.6843 18.0375 11.2905 18.4682 11.7814C21.1362 11.6535 26.2869 11.419 27.1597 11.4798C28.3465 11.5623 30.0418 12.128 30.0368 12.5126C30.0318 12.8972 28.4581 13.7513 27.5404 14.0673C26.8454 14.3064 21.1236 14.8358 18.3473 15.0812C17.9672 15.7098 17.5181 16.4498 17.0277 17.2557L19.8851 17.0334L20.0333 18.9412L17.5364 19.1351L17.1173 18.6791C17.1173 18.6791 16.5828 18.7209 16.1125 18.7568C13.4463 23.1189 10.1742 28.3838 9.92358 28.3613C9.49623 28.3236 8.49302 27.2688 8.49302 27.2688L9.96254 22.7816C9.52126 22.7861 9.19671 22.7262 9.18859 22.6259C9.17946 22.5123 9.58103 22.3871 10.1098 22.3303L10.8472 20.079C10.5083 20.0669 10.2756 20.0104 10.2686 19.9261C10.2611 19.828 10.5617 19.7202 10.9855 19.6563L12.4419 15.2098L6.2911 15.3333L3.00246 20.403L1.50247 20.2363L2.61746 15.6496L4.02107 15.0837C4.02107 15.0837 2.47224 15.1697 2.47782 14.7758C2.4834 14.3819 3.85476 14.0784 3.85476 14.0784L2.61875 13.8202L0.562775 9.68354L2.55228 8.81392L6.31432 13.4946L12.3097 12.4928L10.3991 8.9086C9.84767 8.93961 9.41072 8.87701 9.4014 8.76046C9.39341 8.6582 9.71898 8.54567 10.1719 8.48324L9.06011 6.39696C9.04924 6.39738 9.03867 6.39894 9.02779 6.39936C8.42442 6.44647 7.92762 6.38376 7.91735 6.25891C7.90894 6.14578 8.30449 6.02093 8.82844 5.96421L6.75475 2.07323C6.75475 2.07323 8.31696 0.625839 8.5282 0.6447L8.52862 0.643979Z"
                fill="#113A75" />
            </g>
          </svg>
        </div>
      </div>
      <div>
        <img className="testimonial-bg-shape position-absolute start-0 z-n1"
          src="assets/images/testimonial/testimonial-bg-shape.png" alt="shape"/>
      </div>
    </section>
  )
}
