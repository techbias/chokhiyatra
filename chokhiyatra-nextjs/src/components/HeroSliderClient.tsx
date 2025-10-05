'use client';

import React from 'react';

interface Slide {
  _key: string;
  imageUrl: string;
  alt: string;
}

interface HeroSliderClientProps {
  slides: Slide[];
}

export default function HeroSliderClient({ slides }: HeroSliderClientProps) {
  return (
    <section className="banner-two-area position-relative p-0">
      <div className="hero-slider">
        <div className="swiper-container hero-slider-active">
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <div key={slide._key} className="swiper-slide">
                <div
                  className="hero-slide-image background-img w-100 h-100"
                  data-background-image={slide.imageUrl}
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="hero-slider-nav">
          <div className="hero-slider-button-prev">
            <i className="ph ph-arrow-left"></i>
          </div>
          <div className="hero-slider-button-next">
            <i className="ph ph-arrow-right"></i>
          </div>
        </div>

        {/* Pagination */}
        <div className="hero-slider-pagination"></div>
      </div>

      <style jsx>{`
        .hero-slider {
          position: relative;
          width: 100%;
        }

        .hero-slider-active {
          width: 100%;
          height: 700px;
        }

        .swiper-slide {
          position: relative;
          width: 100%;
          height: 700px;
        }

        .hero-slide-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-slider-nav {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 1rem;
        }

        .hero-slider-button-prev,
        .hero-slider-button-next {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--main-600);
          font-size: 20px;
        }

        .hero-slider-button-prev:hover,
        .hero-slider-button-next:hover {
          background: var(--main-600);
          color: white;
          transform: scale(1.1);
        }

        .hero-slider-pagination {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          gap: 0.5rem;
        }

        :global(.hero-slider-pagination .swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.hero-slider-pagination .swiper-pagination-bullet-active) {
          background: var(--main-600);
          width: 30px;
          border-radius: 6px;
        }

        @media (max-width: 991px) {
          .hero-slider-active,
          .swiper-slide {
            height: 500px;
          }

          .hero-slider-nav {
            bottom: 30px;
          }
        }

        @media (max-width: 767px) {
          .hero-slider-active,
          .swiper-slide {
            height: 400px;
          }

          .hero-slider-button-prev,
          .hero-slider-button-next {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
