import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Destinations',
  description: 'Explore amazing travel destinations with ChokhiYatra',
  keywords: ['destinations', 'travel', 'tourism', 'places'],
  url: '/destination',
});

export default function DestinationPage() {
  return (
    <PageLayout>
      <Breadcrumb title="Destination" />

        {/* Popular Destination Section */}
        <section className="pt-140 position-relative z-1">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-7">
                <div className="section-wrapper tw-mb-14" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4 text-main-two-600">Populer Destination</h6>
                  <h2 className="section-title fw-normal tw-mb-7 char-animation">Populer destination</h2>
                  <p className="tw-text-lg fw-normal">communication and utilizes cutting edge logistic planning to get your shipment completed
                    on time. itself founded of backgrounds, which simply.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="counter-button project-two-button d-flex justify-content-end flex-wrap" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <a className="primary-btn bg-main-two-600 text-main-600 tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl home-three-btn" href="#">explore more <i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb1.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 01</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">Australia</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb2.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 02</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">Belgium</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb3.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 03</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">Switerland</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb4.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 04</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">Finland</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb5.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 05</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">england</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="project-two-wrapper project-three-wrapper d-flex align-items-center tw-gap-10 tw-mb-8 tw-rounded-xl tw-py-11 tw-px-7 position-relative z-1 overflow-hidden flex-wrap row-gap-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="project-two-thumb">
                    <a href="destination-details.html"><img src="assets/images/project/project-two-thumb2.jpg" alt="thumb" /></a>
                  </div>
                  <div>
                    <p className="project-two-paragraph fw-medium mb-0">Destination 06</p>
                    <h4 className="project-two-title tw-text-10 fw-normal"><a className="hover-text-secondary" href="destination-details.html">california</a></h4>
                  </div>
                  <div className="project-two-text bg-main-two-600 text-main-600 position-absolute">06 Listing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Package Section */}
        <div className="feature-ip-area">
          <section className="feature-area py-140 position-relative z-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-7">
                  <div className="section-wrapper text-center tw-mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Populer package</h6>
                    <h2 className="section-title fw-normal tw-mb-7 char-animation">Explore Our Popular Picks Trusted  by Thousands</h2>
                    <p className="section-paragraph tw-text-lg fw-normal">communication and utilizes cutting edge logistic planning to get your shipment completed
                      on time. itself founded of backgrounds, which simply.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="feature-slider">
                    <div className="feature-active swiper-container">
                      <div className="swiper-wrapper">
                        {/* slide 1 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden  swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb1.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 2 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb2.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 3 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb3.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 5 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb4.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 1 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden  swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb1.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 2 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb2.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 3 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb3.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* slide 5 */}
                        <div className="feature-wrapper tw-mb-8 tw-rounded-xl overflow-hidden swiper-slide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                          <div className="feature-thumb position-relative z-1 tw-rounded-xl">
                            <img className="w-100 tw-rounded-2xl" src="assets/images/feature/feature-thumb4.jpg" alt="thumb" />
                            <div className="feature-wrap position-absolute start-0 bottom-0 z-1 w-100 tw-px-5 tw-mb-10">
                              <div className="feature-top tw-pb-4 tw-mb-3">
                                <h6 className="text-white font-body fw-medium tw-text-xs d-inline-flex tw-gap-2 tw-mb-3"><span><img src="assets/images/icon/feature-location.svg" alt="" /></span> Lombok, Indonesia</h6>
                                <h4 className="text-white text-capitalize tw-text-xl">Weekend Wanderer</h4>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <span className="text-white fw-medium tw-text-sm">7 Days . 6 Nights</span>
                                <span className="text-white tw-text-base fw-bold">$799</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="feature-button common-hover-yellow text-center tw-mt-3">
                  <a className="primary-btn bg-main-600 text-white tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl" href="contact.html">explore packge <i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
            <div className="feature-bg-shape position-absolute start-0 z-n1">
              <div className="line_shape">
                <svg width="1920" height="287" viewBox="0 0 1920 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="line_path" d="M0 286C235.807 161.804 715.277 -31.6361 948 104C1192.5 246.5 1698.62 102.064 1920 1" stroke="#CEC7BE" strokeDasharray="4 4" />
                  <g id="paper-plane">
                    <path d="M8.52862 0.643979C8.65472 0.654731 12.5944 5.1037 15.7327 8.66873C16.0616 8.64319 16.3357 8.62234 16.3357 8.62234L16.6797 8.10704L19.1766 7.91312L19.3247 9.82093L16.9109 10.0082C17.5051 10.6843 18.0375 11.2905 18.4682 11.7814C21.1362 11.6535 26.2869 11.419 27.1597 11.4798C28.3465 11.5623 30.0418 12.128 30.0368 12.5126C30.0318 12.8972 28.4581 13.7513 27.5404 14.0673C26.8454 14.3064 21.1236 14.8358 18.3473 15.0812C17.9672 15.7098 17.5181 16.4498 17.0277 17.2557L19.8851 17.0334L20.0333 18.9412L17.5364 19.1351L17.1173 18.6791C17.1173 18.6791 16.5828 18.7209 16.1125 18.7568C13.4463 23.1189 10.1742 28.3838 9.92358 28.3613C9.49623 28.3236 8.49302 27.2688 8.49302 27.2688L9.96254 22.7816C9.52126 22.7861 9.19671 22.7262 9.18859 22.6259C9.17946 22.5123 9.58103 22.3871 10.1098 22.3303L10.8472 20.079C10.5083 20.0669 10.2756 20.0104 10.2686 19.9261C10.2611 19.828 10.5617 19.7202 10.9855 19.6563L12.4419 15.2098L6.2911 15.3333L3.00246 20.403L1.50247 20.2363L2.61746 15.6496L4.02107 15.0837C4.02107 15.0837 2.47224 15.1697 2.47782 14.7758C2.4834 14.3819 3.85476 14.0784 3.85476 14.0784L2.61875 13.8202L0.562775 9.68354L2.55228 8.81392L6.31432 13.4946L12.3097 12.4928L10.3991 8.9086C9.84767 8.93961 9.41072 8.87701 9.4014 8.76046C9.39341 8.6582 9.71898 8.54567 10.1719 8.48324L9.06011 6.39696C9.04924 6.39738 9.03867 6.39894 9.02779 6.39936C8.42442 6.44647 7.92762 6.38376 7.91735 6.25891C7.90894 6.14578 8.30449 6.02093 8.82844 5.96421L6.75475 2.07323C6.75475 2.07323 8.31696 0.625839 8.5282 0.6447L8.52862 0.643979Z" fill="#113A75" />
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <div className="faq-ip-area">
          <section className="faq-area py-140 position-relative z-1">
            <div className="container">
              <div className="row">
                <div className="col-xl-5">
                  <div className="section-wrapper tw-mb-14 faq-sticky">
                    <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Populer Destination</h6>
                    <h2 className="section-title fw-normal tw-mb-7 char-animation"> Frequently
                      ask Questions</h2>
                    <p className="section-paragraph tw-text-lg fw-normal">communication and utilizes cutting edge logistic planning
                      to get your shipment completed on time. itself founded</p>
                  </div>
                </div>
                <div className="col-xl-7">
                  <div className="faq-wrapper">
                    <div className="accordion" id="general_faqaccordion">
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_one">
                          <button className="accordion-button faq-accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_one" aria-expanded="true" aria-controls="order__collapse_one">
                            How does GoDaddy help small business owners succeed?
                          </button>
                        </h2>
                        <div id="order__collapse_one" className="accordion-collapse collapse" aria-labelledby="order_one" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_two">
                          <button className="accordion-button faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_two" aria-expanded="false" aria-controls="order__collapse_two">
                            Why do I need a website for my business?
                          </button>
                        </h2>
                        <div id="order__collapse_two" className="accordion-collapse collapse show" aria-labelledby="order_two" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_three">
                          <button className="accordion-button collapsed faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_three" aria-expanded="false" aria-controls="order__collapse_three">
                            Why do I need a professional email?
                          </button>
                        </h2>
                        <div id="order__collapse_three" className="accordion-collapse collapse" aria-labelledby="order_three" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_four">
                          <button className="accordion-button collapsed faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_four" aria-expanded="false" aria-controls="order__collapse_four">
                            What makes GoDaddy Web Hosting the world leader?
                          </button>
                        </h2>
                        <div id="order__collapse_four" className="accordion-collapse collapse" aria-labelledby="order_four" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_five">
                          <button className="accordion-button collapsed faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_five" aria-expanded="false" aria-controls="order__collapse_five">
                            Why choose GoDaddy for WordPress?
                          </button>
                        </h2>
                        <div id="order__collapse_five" className="accordion-collapse collapse" aria-labelledby="order_five" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header" id="order_six">
                          <button className="accordion-button collapsed faq-accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order__collapse_six" aria-expanded="false" aria-controls="order__collapse_six">
                            What Are the Basic Doctrines of the Church?
                          </button>
                        </h2>
                        <div id="order__collapse_six" className="accordion-collapse collapse" aria-labelledby="order_six" data-bs-parent="#general_faqaccordion">
                          <div className="accordion-body faq-accordion-body">
                            <p>GoDaddy offers more than just a platform to build your website, we offer everything you need to create an
                              effective, memorable online presence. Already have a site? We offer hosting
                              plans that will keep it fast, secure and online. Our professional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-bg-shape position-absolute start-0 z-n1">
              <div className="line_shape_3">
                <svg width="1920" height="287" viewBox="0 0 1920 287" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="line_path_3" d="M0 286C235.807 161.804 715.277 -31.6361 948 104C1192.5 246.5 1698.62 102.064 1920 1" stroke="#CEC7BE" strokeDasharray="4 4" />
                  <g id="paper-plane_3">
                    <path d="M8.52862 0.643979C8.65472 0.654731 12.5944 5.1037 15.7327 8.66873C16.0616 8.64319 16.3357 8.62234 16.3357 8.62234L16.6797 8.10704L19.1766 7.91312L19.3247 9.82093L16.9109 10.0082C17.5051 10.6843 18.0375 11.2905 18.4682 11.7814C21.1362 11.6535 26.2869 11.419 27.1597 11.4798C28.3465 11.5623 30.0418 12.128 30.0368 12.5126C30.0318 12.8972 28.4581 13.7513 27.5404 14.0673C26.8454 14.3064 21.1236 14.8358 18.3473 15.0812C17.9672 15.7098 17.5181 16.4498 17.0277 17.2557L19.8851 17.0334L20.0333 18.9412L17.5364 19.1351L17.1173 18.6791C17.1173 18.6791 16.5828 18.7209 16.1125 18.7568C13.4463 23.1189 10.1742 28.3838 9.92358 28.3613C9.49623 28.3236 8.49302 27.2688 8.49302 27.2688L9.96254 22.7816C9.52126 22.7861 9.19671 22.7262 9.18859 22.6259C9.17946 22.5123 9.58103 22.3871 10.1098 22.3303L10.8472 20.079C10.5083 20.0669 10.2756 20.0104 10.2686 19.9261C10.2611 19.828 10.5617 19.7202 10.9855 19.6563L12.4419 15.2098L6.2911 15.3333L3.00246 20.403L1.50247 20.2363L2.61746 15.6496L4.02107 15.0837C4.02107 15.0837 2.47224 15.1697 2.47782 14.7758C2.4834 14.3819 3.85476 14.0784 3.85476 14.0784L2.61875 13.8202L0.562775 9.68354L2.55228 8.81392L6.31432 13.4946L12.3097 12.4928L10.3991 8.9086C9.84767 8.93961 9.41072 8.87701 9.4014 8.76046C9.39341 8.6582 9.71898 8.54567 10.1719 8.48324L9.06011 6.39696C9.04924 6.39738 9.03867 6.39894 9.02779 6.39936C8.42442 6.44647 7.92762 6.38376 7.91735 6.25891C7.90894 6.14578 8.30449 6.02093 8.82844 5.96421L6.75475 2.07323C6.75475 2.07323 8.31696 0.625839 8.5282 0.6447L8.52862 0.643979Z" fill="#113A75" />
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="cta-area py-140 background-img position-relative z-1" data-background-image="assets/images/cta/cta-bg.jpg">
          <div className="container">
            <div className="row justify-content-center tw-pb-20">
              <div className="col-xl-10">
                <div className="section-wrapper text-center position-relative z-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <h2 className="section-title fw-normal tw-mb-7 char-animation text-white char-animation"> <span className="text-main-600">Let'sCapture</span> BeautyoftheWorld</h2>
                  <div className="gallery-button d-flex justify-content-center">
                    <a className="primary-btn bg-main-two-600 text-main-600 tw-py-4 tw-px-8 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl" href="contact.html">Booking Today <i className="ph ph-arrow-up-right"></i></a>
                  </div>
                  <div className="gallery-shape">
                    <img className="gallery-shape-1 position-absolute start-0 z-n1" src="assets/images/gallery/gallery-shape1.png" alt="shape" />
                    <img className="gallery-shape-2 position-absolute end-0 z-n1" src="assets/images/gallery/gallery-shape2.png" alt="shape" />
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
                  <h6 className="instagram-title tw-text-2xl fw-normal text-capitalize">...want to become a dontation partner & contribution...</h6>
                </div>
              </div>
            </div>
            <div className="row row-cols-xl-6 row-cols-md-3 row-cols-sm-3 row-cols-1">
              <div className="col">
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb1.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb2.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb3.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb4.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb5.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instagram-wrapper">
                  <div className="instagram-thumb position-relative z-1 overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                    <img className="tw-rounded-lg" src="assets/images/instagram/instagram-thumb6.jpg" alt="thumb" />
                    <div className="instagram-btn position-absolute z-1">
                      <a href="#"><span><img src="assets/images/icon/instagram.svg" alt="instagram" /></span></a>
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
