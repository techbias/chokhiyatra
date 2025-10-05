import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import HeroSlider from '@/components/HeroSlider';
import TourPackages from '@/components/TourPackages';
import AdvanceGallery from '@/components/AdvanceGallery';
import CounterStats from '@/components/CounterStats';
import HotelPartners from '@/components/HotelPartners';
import FlightPartners from '@/components/FlightPartners';
import BannerBackup from '@/components/backup/BannerBackup';

export const metadata: Metadata = createMetadata({
  title: 'Home - Explore the World with ChokhiYatra',
  description: 'Discover amazing travel destinations and tour packages with ChokhiYatra. From luxury hotels to private transfers and curated experiences, plan your perfect journey today.',
  keywords: ['travel', 'tourism', 'destinations', 'tour packages', 'travel agency', 'vacation planning', 'world travel', 'adventure tours'],
});

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Slider Section */}
      <HeroSlider />
      {/* <BannerBackup/> */}

      {/* Search/Checkout Form Section */}
      <div className="checkout-two-area">
        <div className="checkout-area position-relative z-3">
          <div className="container">
            <div className="checkout-bg bg-white tw-pt-11 tw-px-14 tw-pb-11 tw-rounded-md">
              <div className="row">
                <div className="col-xl-12">
                  <div className="checkout-main-wrapper">
                    <div className="checkout-wrapper d-flex flex-column">
                      <label
                        className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2"><span><img
                          src="assets/images/icon/checkout-icon1.svg"
                          alt="icon" /></span> Destination</label>
                      <div className="nice-select"><span className="current">Your city or
                        Region</span>
                        <ul className="list">
                          <li className="option">Your city or Region</li>
                          <li className="option">Berlin Germany</li>
                          <li className="option">Paris France</li>
                          <li className="option">Tokiyo Japan</li>
                        </ul>
                      </div>
                    </div>
                    <div className="checkout-wrapper d-flex flex-column">
                      <label
                        className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2"><span><img
                          src="assets/images/icon/checkout-icon2.svg"
                          alt="icon" /></span> All Activity</label>
                      <div className="nice-select"><span className="current">Choose Activity</span>
                        <ul className="list">
                          <li className="option">Choose Activity</li>
                          <li className="option">Berlin Germany</li>
                          <li className="option">Paris France</li>
                          <li className="option">Tokiyo Japan</li>
                        </ul>
                      </div>
                    </div>
                    <div className="checkout-wrapper d-flex flex-column">
                      <label
                        className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2"><span><img
                          src="assets/images/icon/checkout-icon3.svg"
                          alt="icon" /></span> Departure Date</label>
                      <div className="nice-select"><span className="current">Date Form</span>
                        <ul className="list">
                          <li className="option">Date Form</li>
                          <li className="option">Berlin Germany</li>
                          <li className="option">Paris France</li>
                          <li className="option">Tokiyo Japan</li>
                        </ul>
                      </div>
                    </div>
                    <div className="checkout-wrapper d-flex flex-column">
                      <label
                        className="tw-text-sm fw-normal font-body d-flex align-content-center tw-gap-4 tw-mb-2"><span><img
                          src="assets/images/icon/checkout-icon4.svg"
                          alt="icon" /></span> Guest</label>
                      <div className="nice-select"><span className="current">Your Guest</span>
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
                        <button
                          className="primary-btn bg-main-600 text-white tw-py-4 tw-px-10 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl">Search
                          <span><img src="assets/images/icon/search-btn.svg"
                            alt="search" /></span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advance Gallery Section */}
      <AdvanceGallery />

      {/* ChokhiYatra Intro Section */}
      <section className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center">
                <h2 className="ChokhiYatra-title fw-normal tw-mb-5">ChokhiYatra</h2>
                <div className="ChokhiYatra-content tp-cursor-point-area">
                  <h6 className="ChokhiYatra-text fw-normal">Your <span className="fw-bold">trusted travel partner</span> since <span
                      className="fw-bold">2009</span>, making every journey simple, affordable, and truly memorable. Travel with us, because every trip deserves to be special.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ChokhiYatra-plane-shape position-absolute start-0 translate-middle-y z-n1">
          <div className="line_shape">
            <svg width="1920" height="287" viewBox="0 0 1920 287" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path id="line_path"
                d="M0 286C235.807 161.804 715.277 -31.6361 948 104C1192.5 246.5 1698.62 102.064 1920 1"
                stroke="#CEC7BE" strokeDasharray="4 4" />
              <g id="paper-plane">
                <path d="M8.52862 0.643979C8.65472 0.654731 12.5944 5.1037 15.7327 8.66873C16.0616 8.64319 16.3357 8.62234 16.3357 8.62234L16.6797 8.10704L19.1766 7.91312L19.3247 9.82093L16.9109 10.0082C17.5051 10.6843 18.0375 11.2905 18.4682 11.7814C21.1362 11.6535 26.2869 11.419 27.1597 11.4798C28.3465 11.5623 30.0418 12.128 30.0368 12.5126C30.0318 12.8972 28.4581 13.7513 27.5404 14.0673C26.8454 14.3064 21.1236 14.8358 18.3473 15.0812C17.9672 15.7098 17.5181 16.4498 17.0277 17.2557L19.8851 17.0334L20.0333 18.9412L17.5364 19.1351L17.1173 18.6791C17.1173 18.6791 16.5828 18.7209 16.1125 18.7568C13.4463 23.1189 10.1742 28.3838 9.92358 28.3613C9.49623 28.3236 8.49302 27.2688 8.49302 27.2688L9.96254 22.7816C9.52126 22.7861 9.19671 22.7262 9.18859 22.6259C9.17946 22.5123 9.58103 22.3871 10.1098 22.3303L10.8472 20.079C10.5083 20.0669 10.2756 20.0104 10.2686 19.9261C10.2611 19.828 10.5617 19.7202 10.9855 19.6563L12.4419 15.2098L6.2911 15.3333L3.00246 20.403L1.50247 20.2363L2.61746 15.6496L4.02107 15.0837C4.02107 15.0837 2.47224 15.1697 2.47782 14.7758C2.4834 14.3819 3.85476 14.0784 3.85476 14.0784L2.61875 13.8202L0.562775 9.68354L2.55228 8.81392L6.31432 13.4946L12.3097 12.4928L10.3991 8.9086C9.84767 8.93961 9.41072 8.87701 9.4014 8.76046C9.39341 8.6582 9.71898 8.54567 10.1719 8.48324L9.06011 6.39696C9.04924 6.39738 9.03867 6.39894 9.02779 6.39936C8.42442 6.44647 7.92762 6.38376 7.91735 6.25891C7.90894 6.14578 8.30449 6.02093 8.82844 5.96421L6.75475 2.07323C6.75475 2.07323 8.31696 0.625839 8.5282 0.6447L8.52862 0.643979Z"
                  fill="#113A75" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-140 position-relative z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div className="section-wrapper tw-mb-14" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Populer
                  Destination</h6>
                <h2 className="section-title fw-normal tw-mb-7 char-animation">Populer destination</h2>
                <p className="tw-text-lg fw-normal">communication and utilizes cutting edge logistic
                  planning to get your shipment completed
                  on time. itself founded of backgrounds, which simply.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="counter-button project-two-button d-flex justify-content-end flex-wrap"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <a className="primary-btn bg-main-two-600 text-main-600 tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="destination-details.html">explore more <i
                    className="ph ph-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row">
            <div className="project-two-slider">
              <div className="project-two-active swiper-container">
                <div className="swiper-wrapper">
                  <div
                    className="project-two-wrapper d-flex align-items-center tw-gap-10 bg-white tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5 swiper-slide">
                    <div className="project-two-thumb">
                      <a href="destination-details.html"><img
                        src="assets/images/project/project-two-thumb1.jpg"
                        alt="thumb" /></a>
                    </div>
                    <div>
                      <p className="project-two-paragraph fw-medium mb-0">Destination 01</p>
                      <h4 className="project-two-title tw-text-10 fw-normal"><a
                        className="hover-text-secondary"
                        href="destination-details.html">Australia</a></h4>
                    </div>
                    <div
                      className="project-two-text bg-main-two-600 text-main-600 position-absolute">
                      06 Listing</div>
                  </div>
                  <div
                    className="project-two-wrapper d-flex align-items-center tw-gap-10 bg-white tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5 swiper-slide">
                    <div className="project-two-thumb">
                      <a href="destination-details.html"><img
                        src="assets/images/project/project-two-thumb2.jpg"
                        alt="thumb" /></a>
                    </div>
                    <div>
                      <p className="project-two-paragraph fw-medium mb-0">Destination 02</p>
                      <h4 className="project-two-title tw-text-10 fw-normal"><a
                        className="hover-text-secondary"
                        href="destination-details.html">Belgium</a></h4>
                    </div>
                    <div
                      className="project-two-text bg-main-two-600 text-main-600 position-absolute">
                      06 Listing</div>
                  </div>
                  <div
                    className="project-two-wrapper d-flex align-items-center tw-gap-10 bg-white tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5 swiper-slide">
                    <div className="project-two-thumb">
                      <a href="destination-details.html"><img
                        src="assets/images/project/project-two-thumb3.jpg"
                        alt="thumb" /></a>
                    </div>
                    <div>
                      <p className="project-two-paragraph fw-medium mb-0">Destination 03</p>
                      <h4 className="project-two-title tw-text-10 fw-normal"><a
                        className="hover-text-secondary"
                        href="destination-details.html">Switzerland</a></h4>
                    </div>
                    <div
                      className="project-two-text bg-main-two-600 text-main-600 position-absolute">
                      06 Listing</div>
                  </div>
                  <div
                    className="project-two-wrapper d-flex align-items-center tw-gap-10 bg-white tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5 swiper-slide">
                    <div className="project-two-thumb">
                      <a href="destination-details.html"><img
                        src="assets/images/project/project-two-thumb4.jpg"
                        alt="thumb" /></a>
                    </div>
                    <div>
                      <p className="project-two-paragraph fw-medium mb-0">Destination 01</p>
                      <h4 className="project-two-title tw-text-10 fw-normal"><a
                        className="hover-text-secondary"
                        href="destination-details.html">England</a></h4>
                    </div>
                    <div
                      className="project-two-text bg-main-two-600 text-main-600 position-absolute">
                      06 Listing</div>
                  </div>
                  <div
                    className="project-two-wrapper d-flex align-items-center tw-gap-10 bg-white tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5 swiper-slide">
                    <div className="project-two-thumb">
                      <a href="destination-details.html"><img
                        src="assets/images/project/project-two-thumb5.jpg"
                        alt="thumb" /></a>
                    </div>
                    <div>
                      <p className="project-two-paragraph fw-medium mb-0">Destination 02</p>
                      <h4 className="project-two-title tw-text-10 fw-normal"><a
                        className="hover-text-secondary"
                        href="destination-details.html">Argentina</a></h4>
                    </div>
                    <div
                      className="project-two-text bg-main-two-600 text-main-600 position-absolute">
                      06 Listing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-bg">
          <img src="assets/images/project/project-bg.jpg" alt="bg" />
        </div>
        <div className="project-bg-shape">
          <img className="project-bg-shape-3 position-absolute start-0 z-1"
            src="assets/images/project/project-bg-shape3.png" alt="shape" />
        </div>
      </section>


      {/* Tour Packages Section */}
      <TourPackages />

      {/* Tour Categories Section */}
      <section className="catagori-area py-140 position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-wrapper text-center tw-pt-20 tw-mb-19" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="200">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">tour
                  catagorires</h6>
                <h2 className="section-title fw-normal tw-mb-7 char-animation text-white"> Shelter of
                  Love, Compassion,
                  and New Beginnings</h2>
                <p className="section-paragraph tw-text-lg fw-normal text-white">communication and
                  utilizes cutting edge logistic planning to get your shipment completed
                  on time. itself founded of backgrounds, which simply.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div
                className="catagori-widgets one wt-hover__widget d-flex justify-content-between tw-mb-10">
                <div className="catagori-item current wt-widget__item wt-hover__reveal-item">
                  <a href="#">
                    <div className="catagori-content">
                      <h3
                        className="catagori-title text-white tw-text-18 fw-normal text-decoration-underline hover-text-secondary">
                        Cultural</h3>
                    </div>
                  </a>
                  <div className="wt-hover__reveal-bg background-img"
                    data-background-image="assets/images/catagori/catagori-thumb1.jpg"></div>
                </div>
                <div className="catagori-item wt-widget__item wt-hover__reveal-item">
                  <a href="#">
                    <div className="catagori-content d-flex tw-gap-4 align-items-center">
                      <span><img src="assets/images/icon/catagori-plant.svg"
                        alt="plant" /></span>
                      <h3
                        className="catagori-title text-white tw-text-18 fw-normal text-decoration-underline hover-text-secondary">
                        Adventure</h3>
                    </div>
                  </a>
                  <div className="wt-hover__reveal-bg background-img"
                    data-background-image="assets/images/catagori/catagori-thumb2.jpg"></div>
                </div>
                <div className="catagori-item wt-widget__item wt-hover__reveal-item">
                  <a href="#">
                    <div className="catagori-content d-flex tw-gap-4 align-items-center">
                      <span><img src="assets/images/icon/catagori-plant.svg"
                        alt="plant" /></span>
                      <h3
                        className="catagori-title text-white tw-text-18 fw-normal text-decoration-underline hover-text-secondary">
                        Nature & wildlife</h3>
                    </div>
                  </a>
                  <div className="wt-hover__reveal-bg background-img"
                    data-background-image="assets/images/catagori/catagori-thumb3.jpg"></div>
                </div>
                <span className="active-bg"></span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="catagori-widgets two wt-hover__widget d-flex justify-content-between">
                <div className="catagori-item current wt-widget__item wt-hover__reveal-item">
                  <a href="#">
                    <div className="catagori-content">
                      <h3
                        className="catagori-title text-white tw-text-18 fw-normal text-decoration-underline hover-text-secondary">
                        Histtorical</h3>
                    </div>
                  </a>
                  <div className="wt-hover__reveal-bg background-img"
                    data-background-image="assets/images/catagori/catagori-thumb4.jpg"></div>
                </div>
                <div className="catagori-item wt-widget__item wt-hover__reveal-item">
                  <a href="#">
                    <div className="catagori-content d-flex tw-gap-4 align-items-center">
                      <span><img src="assets/images/icon/catagori-plant.svg"
                        alt="plant" /></span>
                      <h3
                        className="catagori-title text-white tw-text-18 fw-normal text-decoration-underline hover-text-secondary">
                        Religious</h3>
                    </div>
                  </a>
                  <div className="wt-hover__reveal-bg background-img"
                    data-background-image="assets/images/catagori/catagori-thumb5.jpg"></div>
                </div>
                <span className="active-bg"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="catagori-button common-hover-yellow text-center tw-mt-18">
                <a className="primary-btn bg-white text-main-600 tw-py-5 tw-px-13 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="contact.html">explore more <i className="ph ph-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="catagori-shape position-absolute start-0 z-n1 w-100">
          <img src="assets/images/catagori/catagori-shape.png" alt="shape" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="ChokhiYatra-content tp-cursor-point-area text-center tw-mb-14">
                <h6 className="ChokhiYatra-text fw-normal">we <span className="fw-bold">believe</span> that a
                  clean space is happy space. Founded in <span className="fw-bold">1998</span>, our
                  mission is to make homes & businesses sparkle while...</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid gx-0">
          <div className="row align-items-center">
            <div className="gallery-two-slider">
              <div className="gallery-two-active swiper-container">
                <div className="swiper-wrapper d-flex align-items-center">
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb1.jpg" alt="thumb" />
                    </div>
                  </div>
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb2.jpg" alt="thumb" />
                    </div>
                  </div>
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb3.jpg" alt="thumb" />
                    </div>
                  </div>
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb4.jpg" alt="thumb" />
                    </div>
                  </div>
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb5.jpg" alt="thumb" />
                    </div>
                  </div>
                  <div className="gallery-two-wrapper swiper-slide">
                    <div className="gallery-two-thumb">
                      <img className="tw-rounded-xl"
                        src="assets/images/gallery/gallery-two-thumb2.jpg" alt="thumb" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterStats />

      {/* Hotel Partners Section */}
      <HotelPartners />

      {/* Flight Partners Section */}
      <FlightPartners />

      {/* Testimonials Section */}
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
                  <div className="testimonial-two-wrapper tw-rounded-xl d-flex justify-content-between position-relative z-1 background-img overflow-hidden swiper-slide"
                    data-background-image="assets/images/testimonial/testimonial-two-bg.png">
                    <div
                      className="testimonial-two-left bg-main-two-600 tw-rounded-xl tw-pt-15 tw-pb-9 tw-ps-9 tw-pe-7">
                      <p
                        className="testimonial-two-paragraph fw-medium text-main-600 tw-pb-9 tw-mb-6">
                        From luxury hotels to private transfers
                        and curated experiences, everything
                        was flawless. This is what five-star travel
                        should feel like.&quot; how affordable the..</p>
                      <div>
                        <h6 className="tw-text-xl text-capitalize tw-mb-2">william camel</h6>
                        <p className="text-main-600 fw-medium">Head of Design at Zazoo</p>
                      </div>
                    </div>
                    <div
                      className="testimonial-two-right d-flex justify-content-between flex-column tw-pt-16 tw-pb-12 tw-pe-15">
                      <div className="icon">
                        <span><img src="assets/images/icon/testimonial-two-quote1.svg"
                          alt="quote" /></span>
                      </div>
                      <div>
                        <div className="tw-mb-4">
                          <img src="assets/images/testimonial/testimonial-two-logo.png"
                            alt="logo" />
                        </div>
                        <h6 className="tw-text-xl">great experience</h6>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-two-wrapper tw-rounded-xl d-flex justify-content-between position-relative z-1 background-img overflow-hidden swiper-slide"
                    data-background-image="assets/images/testimonial/testimonial-two-bg.png">
                    <div
                      className="testimonial-two-left bg-main-600 tw-rounded-xl tw-pt-15 tw-pb-9 tw-ps-9 tw-pe-7">
                      <p
                        className="testimonial-two-paragraph two fw-medium text-white tw-pb-9 tw-mb-6">
                        From luxury hotels to private transfers
                        and curated experiences, everything
                        was flawless. This is what five-star travel
                        should feel like.&quot; how affordable the..</p>
                      <div>
                        <h6 className="tw-text-xl text-capitalize tw-mb-2 text-white">william
                          camel</h6>
                        <p className="text-main-600 fw-medium text-white">Head of Design at
                          Zazoo</p>
                      </div>
                    </div>
                    <div
                      className="testimonial-two-right d-flex justify-content-between flex-column tw-pt-16 tw-pb-12 tw-pe-15">
                      <div className="icon">
                        <span><img src="assets/images/icon/testimonial-two-quote1.svg"
                          alt="quote" /></span>
                      </div>
                      <div>
                        <div className="tw-mb-4">
                          <img src="assets/images/testimonial/testimonial-two-logo.png"
                            alt="logo" />
                        </div>
                        <h6 className="tw-text-xl">great experience</h6>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-two-wrapper tw-rounded-xl d-flex justify-content-between position-relative z-1 background-img overflow-hidden swiper-slide"
                    data-background-image="assets/images/testimonial/testimonial-two-bg.png">
                    <div
                      className="testimonial-two-left bg-main-two-600 tw-rounded-xl tw-pt-15 tw-pb-9 tw-ps-9 tw-pe-7">
                      <p
                        className="testimonial-two-paragraph fw-medium text-main-600 tw-pb-9 tw-mb-6">
                        From luxury hotels to private transfers
                        and curated experiences, everything
                        was flawless. This is what five-star travel
                        should feel like.&quot; how affordable the..</p>
                      <div>
                        <h6 className="tw-text-xl text-capitalize tw-mb-2">william camel</h6>
                        <p className="text-main-600 fw-medium">Head of Design at Zazoo</p>
                      </div>
                    </div>
                    <div
                      className="testimonial-two-right d-flex justify-content-between flex-column tw-pt-16 tw-pb-12 tw-pe-15">
                      <div className="icon">
                        <span><img src="assets/images/icon/testimonial-two-quote1.svg"
                          alt="quote" /></span>
                      </div>
                      <div>
                        <div className="tw-mb-4">
                          <img src="assets/images/testimonial/testimonial-two-logo.png"
                            alt="logo" />
                        </div>
                        <h6 className="tw-text-xl">great experience</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-two-dot text-center tw-mt-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-area blog-panel-area py-140">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div className="section-wrapper tw-mb-14" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Our Services
                </h6>
                <h2 className="section-title fw-normal tw-mb-7 char-animation">What We Offer</h2>
                <p className="tw-text-lg fw-normal">Discover our comprehensive travel services designed to make your journey seamless and unforgettable.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="counter-button project-two-button d-flex justify-content-end flex-wrap"
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <a className="primary-btn bg-main-two-600 text-main-600 tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="/contact">explore more <i className="ph ph-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {/* Service 1 - Image Left */}
              <div className="row blog-panel tw-mb-8 tw-mt-8">
                <div className="col-xl-12">
                  <div
                    className="blog-two-wrapper tw-rounded-xl d-flex align-items-center justify-content-between tw-p-2">
                    <div className="blog-two-thumb order-1">
                      <img src="assets/images/blog/blog-two-thumb1.png" alt="service" />
                    </div>
                    <div className="blog-two-content order-2">
                      <h4 className="blog-two-title tw-text-9 text-capitalize fw-normal tw-mb-6 tw-ms-4">
                        Flight Booking & Reservations
                      </h4>
                      <p className="tw-text-lg tw-ms-4 tw-mb-6">
                        Book domestic and international flights with ease. We offer competitive rates and seamless booking experience for all major airlines.
                      </p>
                      <div className="blog-two-button tw-ms-4">
                        <a className="text-black fw-medium d-inline-flex tw-gap-4" href="/contact">
                          Learn More <span><img src="assets/images/icon/blog-two-arrow.svg" alt="arrow" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Image Right */}
              <div className="row blog-panel tw-mb-8 tw-mt-8">
                <div className="col-xl-12">
                  <div
                    className="blog-two-wrapper tw-rounded-xl d-flex align-items-center justify-content-between tw-p-2">
                    <div className="blog-two-content order-1">
                      <h4 className="blog-two-title tw-text-9 text-capitalize fw-normal tw-mb-6 tw-ms-4">
                        Hotel & Accommodation
                      </h4>
                      <p className="tw-text-lg tw-ms-4 tw-mb-6">
                        Find the perfect stay for your journey. From luxury resorts to budget-friendly hotels, we have options for every traveler.
                      </p>
                      <div className="blog-two-button tw-ms-4">
                        <a className="text-black fw-medium d-inline-flex tw-gap-4" href="/contact">
                          Learn More <span><img src="assets/images/icon/blog-two-arrow.svg" alt="arrow" /></span>
                        </a>
                      </div>
                    </div>
                    <div className="blog-two-thumb order-2">
                      <img src="assets/images/blog/blog-two-thumb2.png" alt="service" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 - Image Left */}
              <div className="row blog-panel tw-mb-8 tw-mt-8">
                <div className="col-xl-12">
                  <div
                    className="blog-two-wrapper tw-rounded-xl d-flex align-items-center justify-content-between tw-p-2">
                    <div className="blog-two-thumb order-1">
                      <img src="assets/images/blog/blog-two-thumb3.png" alt="service" />
                    </div>
                    <div className="blog-two-content order-2">
                      <h4 className="blog-two-title tw-text-9 text-capitalize fw-normal tw-mb-6 tw-ms-4">
                        Tour Packages & Experiences
                      </h4>
                      <p className="tw-text-lg tw-ms-4 tw-mb-6">
                        Explore curated tour packages for destinations worldwide. Enjoy hassle-free travel with our expertly planned itineraries.
                      </p>
                      <div className="blog-two-button tw-ms-4">
                        <a className="text-black fw-medium d-inline-flex tw-gap-4" href="/contact">
                          Learn More <span><img src="assets/images/icon/blog-two-arrow.svg" alt="arrow" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-area py-140 background-img position-relative z-1"
        data-background-image="assets/images/cta/cta-bg.jpg">
        <div className="container">
          <div className="row justify-content-center tw-pb-20">
            <div className="col-xl-10">
              <div className="section-wrapper text-center position-relative z-1" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="200">
                <h2 className="section-title fw-normal tw-mb-7 char-animation text-white char-animation">
                  <span className="text-main-600">Let&apos;sCapture</span> BeautyoftheWorld
                </h2>
                <div className="gallery-button d-flex justify-content-center">
                  <a className="primary-btn bg-main-two-600 text-main-600 tw-py-4 tw-px-8 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                    href="contact.html">Booking Today <i className="ph ph-arrow-up-right"></i></a>
                </div>
                <div className="gallery-shape">
                  <img className="gallery-shape-1 position-absolute start-0 z-n1"
                    src="assets/images/gallery/gallery-shape1.png" alt="shape" />
                  <img className="gallery-shape-2 position-absolute end-0 z-n1"
                    src="assets/images/gallery/gallery-shape2.png" alt="shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-bg-shape position-absolute start-0 z-n1">
          <img src="assets/images/cta/cta-bg-shape.png" alt="shape" />
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="text-center tw-mb-6">
                <h6 className="instagram-title tw-text-2xl fw-normal text-capitalize">...want to become a
                  dontation partner & contribution...</h6>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-6 row-cols-md-3 row-cols-sm-3 row-cols-1">
            <div className="col">
              <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <div className="instagram-thumb position-relative z-1 overflow-hidden">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb1.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="300">
                <div className="instagram-thumb position-relative z-1 overflow-hidden">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb2.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="400">
                <div className="instagram-thumb position-relative z-1 overflow-hidden">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb3.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="500">
                <div className="instagram-thumb position-relative z-1 overflow-hidden">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb4.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="600">
                <div className="instagram-thumb position-relative z-1 overflow-hidden">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb5.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="instagram-wrapper">
                <div className="instagram-thumb position-relative z-1 overflow-hidden" data-aos="fade-up"
                  data-aos-duration="1000" data-aos-delay="700">
                  <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb6.jpg"
                    alt="thumb" />
                  <div className="instagram-btn position-absolute z-1">
                    <a href="#"><span><img src="assets/images/icon/instagram.svg"
                      alt="instagram" /></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}