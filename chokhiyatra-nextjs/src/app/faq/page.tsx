import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about ChokhiYatra travel services, booking process, refund policy, and support. Get help with your travel planning queries.',
  keywords: ['FAQ', 'frequently asked questions', 'travel help', 'booking questions', 'refund policy', 'customer support', 'travel queries', 'ChokhiYatra help'],
});

export default function FaqPage() {
  return (
    <PageLayout>
      <Breadcrumb title="Faq" />

        {/* FAQ Section */}
        <section className="faq-ip-two-area pt-140">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="faq-ip-two-wrap faq-ip-sticky">
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md active">
                    <h4 className="tw-text-lg text-main-600">About Services</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">How to company work</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">Refund Policy</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">Support</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="faq-wrapper">
                  <div className="section-wrapper tw-mb-14">
                    <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">frequetly ask
                      questions</h6>
                    <h2 className="section-title fw-normal tw-mb-7 char-animation">Frequently ask question</h2>
                  </div>
                  <div className="accordion" id="general_faqaccordion">
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_one">
                        <button className="accordion-button faq-accordion-button collapsed" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_one"
                          aria-expanded="true" aria-controls="order__collapse_one">
                          How does GoDaddy help small business owners succeed?
                        </button>
                      </h2>
                      <div id="order__collapse_one" className="accordion-collapse collapse"
                        aria-labelledby="order_one" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>A G.xber has its own IP address, which is made public instead. While a
                            rather seemingly insignificant change, the G.xber IP address can be used
                            for a number of vital business to everything from security to customer
                            experience.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_two">
                        <button className="accordion-button faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_two"
                          aria-expanded="false" aria-controls="order__collapse_two">
                          Why do I need a website for my business?
                        </button>
                      </h2>
                      <div id="order__collapse_two" className="accordion-collapse collapse show"
                        aria-labelledby="order_two" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>GoDaddy offers more than just a platform to build your website, we offer
                            everything you need to create an
                            effective, memorable online presence. Already have a site? We offer
                            hosting
                            plans that will keep it fast, secure and online. Our professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_three">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_three"
                          aria-expanded="false" aria-controls="order__collapse_three">
                          Why do I need a professional email?
                        </button>
                      </h2>
                      <div id="order__collapse_three" className="accordion-collapse collapse"
                        aria-labelledby="order_three" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>GoDaddy offers more than just a platform to build your website, we offer
                            everything you need to create an
                            effective, memorable online presence. Already have a site? We offer
                            hosting
                            plans that will keep it fast, secure and online. Our professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_four">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_four"
                          aria-expanded="false" aria-controls="order__collapse_four">
                          What makes GoDaddy Web Hosting the world leader?
                        </button>
                      </h2>
                      <div id="order__collapse_four" className="accordion-collapse collapse"
                        aria-labelledby="order_four" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>GoDaddy offers more than just a platform to build your website, we offer
                            everything you need to create an
                            effective, memorable online presence. Already have a site? We offer
                            hosting
                            plans that will keep it fast, secure and online. Our professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_five">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_five"
                          aria-expanded="false" aria-controls="order__collapse_five">
                          Why choose GoDaddy for WordPress?
                        </button>
                      </h2>
                      <div id="order__collapse_five" className="accordion-collapse collapse"
                        aria-labelledby="order_five" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>GoDaddy offers more than just a platform to build your website, we offer
                            everything you need to create an
                            effective, memorable online presence. Already have a site? We offer
                            hosting
                            plans that will keep it fast, secure and online. Our professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_six">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_six"
                          aria-expanded="false" aria-controls="order__collapse_six">
                          What Are the Basic Doctrines of the Church?
                        </button>
                      </h2>
                      <div id="order__collapse_six" className="accordion-collapse collapse"
                        aria-labelledby="order_six" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>GoDaddy offers more than just a platform to build your website, we offer
                            everything you need to create an
                            effective, memorable online presence. Already have a site? We offer
                            hosting
                            plans that will keep it fast, secure and online. Our professional</p>
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
                  <h2 className="section-title fw-normal tw-mb-7 char-animation text-white char-animation"> <span
                    className="text-main-600">Let'sCapture</span> BeautyoftheWorld</h2>
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
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
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
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
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
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
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
                <div className="instagram-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
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