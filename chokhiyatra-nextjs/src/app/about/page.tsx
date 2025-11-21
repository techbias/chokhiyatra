import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';
import AdvanceGallery from '@/components/AdvanceGallery';
import CounterStats from '@/components/CounterStats';
import TourPackages from '@/components/TourPackages';
import { getServices } from '@/lib/sanity-queries';

export const metadata: Metadata = createMetadata({
  title: 'About Us - ChokhiYatra',
  description: 'Learn about ChokhiYatra - your trusted travel partner since 2009. Explore the world with expert guidance and discover our mission to make every journey memorable.',
  keywords: ['about', 'travel agency', 'company', 'ChokhiYatra', 'travel expert', 'tour guide'],
  url: '/about',
});

export default async function AboutPage() {
  const services = await getServices();

  return (
    <PageLayout>
      <Breadcrumb title="About Us" />

      {/* About Section */}
      <section className="about-area py-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <h6 className="about-subtitle fw-normal font-sofia tw-text-2xl">about us</h6>
            </div>
            <div className="col-xl-6">
              <div className="tw-ps-9 tw-mb-14">
                <h2 className="about-title fw-normal char-animation">Explore the <br /> world with expert guidance
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-xl-8">
              <div className="about-thumb d-flex tw-gap-8" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <div className="image">
                  <img className="wow tw-animation-img-left" src="assets/images/about/about-thumb1.jpg"
                    alt="thumb" />
                </div>
                <div className="image">
                  <img className="wow tw-animation-img-left" src="assets/images/about/about-thumb2.jpg"
                    alt="thumb" />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="about-wrapper" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <p className="about-paragraph tw-text-lg fw-medium tw-mb-6">ChokhiYatra has been your trusted travel partner since 2009, creating unforgettable journeys across the globe. We specialize in customized tour packages, hotel bookings, and comprehensive travel services.</p>
                <div className="about-button">
                  <a className="primary-btn bg-main-two-600 text-white tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                    href="/contact">explore more <i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Believe Section */}
      <section className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="text-center">
                <div className="ChokhiYatra-content tw-pb-35 tp-cursor-point-area">
                  <h6 className="ChokhiYatra-text fw-normal">we <span className="fw-bold">believe</span> that every journey should be <span className="fw-bold">memorable</span>. Founded in <span className="fw-bold">2009</span>, our mission is to make travel simple, affordable & truly special.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-bg ChokhiYatra-bg">
          <img src="assets/images/project/project-bg.jpg" alt="bg" />
        </div>
      </section>

      {/* Popular Destination / Core Features Section */}
      <div className="position-relative z-1">
        <section className="destination-area pt-140">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-6 col-lg-7">
                <div className="section-wrapper tw-mb-14" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="200">
                  <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Why Choose Us</h6>
                  <h2 className="section-title fw-normal tw-mb-7 char-animation">What Makes Us Special</h2>
                  <p className="tw-text-lg fw-normal">We provide comprehensive travel services with expert guidance, best pricing guarantee, and 24/7 support to ensure your journey is seamless and memorable.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="destination-button common-hover-yellow d-flex justify-content-end flex-wrap"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <a className="primary-btn bg-main-600 text-white tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                    href="/contact">Contact Us <i className="ph ph-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="destination-panel-area" data-aos="fade-up" data-aos-duration="1000"
                  data-aos-delay="200">
                  <div className="panels position-relative overflow-hidden">
                    <div className="panels-container d-flex tw-gap-7">
                      {/* item 1 */}
                      <div className="panel">
                        <div className="destination-wrap-frist-chile">
                          <span className="destination-text text-uppercase tw-text-lg fw-medium">(Core features)</span>
                        </div>
                      </div>
                      {/* item 2 */}
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon2.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Best Pricing <br /> Guarantee</h6>
                          </div>
                        </div>
                      </div>
                      {/* item 3 */}
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon3.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">24/7 <br /> Support</h6>
                          </div>
                        </div>
                      </div>
                      {/* item 4 */}
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon4.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Safety & <br /> Privacy</h6>
                          </div>
                        </div>
                      </div>
                      {/* item 5 */}
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon5.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Quality <br /> Service</h6>
                          </div>
                        </div>
                      </div>
                      {/* Repeat for scrolling effect */}
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon2.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Best Pricing <br /> Guarantee</h6>
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon3.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">24/7 <br /> Support</h6>
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon4.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Safety & <br /> Privacy</h6>
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon5.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">Quality <br /> Service</h6>
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="destination-wrap">
                          <div className="destination-icon">
                            <span><img src="assets/images/icon/destination-icon3.svg" alt="icon" /></span>
                          </div>
                          <div className="destination-content">
                            <h6 className="tw-text-2xl fw-normal">24/7 <br /> Support</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <img className="ChokhiYatra-bg-shape position-absolute start-0 z-n1"
            src="assets/images/testimonial/testimonial-bg-shape.png" alt="shape" />
        </div>
      </div>

      {/* Gallery Section */}
      <AdvanceGallery />

      {/* Counter Section */}
      <CounterStats />

      {/* FAQ Section */}
      <section className="faq-area py-140 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section-wrapper tw-mb-14 faq-sticky">
                <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Have Questions?</h6>
                <h2 className="section-title fw-normal tw-mb-7 char-animation">Frequently Asked Questions</h2>
                <p className="section-paragraph tw-text-lg fw-normal">Find answers to common questions about our travel services, booking process, and tour packages.</p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="faq-wrapper">
                <div className="accordion" id="general_faqaccordion">
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_one">
                      <button className="accordion-button faq-accordion-button collapsed" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_one"
                        aria-expanded="true" aria-controls="order__collapse_one">
                        What services does ChokhiYatra offer?
                      </button>
                    </h2>
                    <div id="order__collapse_one" className="accordion-collapse collapse"
                      aria-labelledby="order_one" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>ChokhiYatra offers comprehensive travel services including customized tour packages, hotel bookings, flight reservations, private transfers, visa assistance, and 24/7 travel support. We specialize in creating memorable travel experiences tailored to your preferences and budget.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_two">
                      <button className="accordion-button faq-accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_two"
                        aria-expanded="false" aria-controls="order__collapse_two">
                        How do I book a tour package with ChokhiYatra?
                      </button>
                    </h2>
                    <div id="order__collapse_two" className="accordion-collapse collapse show"
                      aria-labelledby="order_two" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>Booking with us is simple! Browse our tour packages, select your preferred destination and dates, fill out the inquiry form, and our travel experts will get in touch with you within 24 hours to customize your perfect journey. You can also contact us directly via phone or WhatsApp for immediate assistance.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_three">
                      <button className="accordion-button collapsed faq-accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_three"
                        aria-expanded="false" aria-controls="order__collapse_three">
                        Can I customize my tour package?
                      </button>
                    </h2>
                    <div id="order__collapse_three" className="accordion-collapse collapse"
                      aria-labelledby="order_three" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>Absolutely! We understand that every traveler is unique. Our team specializes in creating customized itineraries based on your interests, budget, and travel style. Whether you want to add extra destinations, upgrade accommodations, or include special activities, we'll work with you to design your perfect trip.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_four">
                      <button className="accordion-button collapsed faq-accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_four"
                        aria-expanded="false" aria-controls="order__collapse_four">
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div id="order__collapse_four" className="accordion-collapse collapse"
                      aria-labelledby="order_four" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>We accept various payment methods including bank transfers, credit/debit cards, UPI, and digital wallets. A booking confirmation requires an advance payment, with the balance due before departure. Detailed payment terms will be provided with your customized tour quotation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_five">
                      <button className="accordion-button collapsed faq-accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_five"
                        aria-expanded="false" aria-controls="order__collapse_five">
                        What is your cancellation policy?
                      </button>
                    </h2>
                    <div id="order__collapse_five" className="accordion-collapse collapse"
                      aria-labelledby="order_five" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>Our cancellation policy varies depending on the tour package and booking conditions. Generally, cancellations made 30+ days before departure receive a higher refund percentage. Specific terms are outlined in your booking confirmation. We recommend purchasing travel insurance for added protection.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item faq-accordion-item">
                    <h2 className="accordion-header" id="order_six">
                      <button className="accordion-button collapsed faq-accordion-button" type="button"
                        data-bs-toggle="collapse" data-bs-target="#order__collapse_six"
                        aria-expanded="false" aria-controls="order__collapse_six">
                        Do you provide travel insurance?
                      </button>
                    </h2>
                    <div id="order__collapse_six" className="accordion-collapse collapse"
                      aria-labelledby="order_six" data-bs-parent="#general_faqaccordion">
                      <div className="accordion-body faq-accordion-body">
                        <p>Yes, we can assist you with comprehensive travel insurance that covers medical emergencies, trip cancellations, lost baggage, and more. We highly recommend all travelers purchase travel insurance for peace of mind during their journey. Our team can help you choose the right coverage for your trip.</p>
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
            <svg width="1920" height="287" viewBox="0 0 1920 287" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path id="line_path_3"
                d="M0 286C235.807 161.804 715.277 -31.6361 948 104C1192.5 246.5 1698.62 102.064 1920 1"
                stroke="#CEC7BE" strokeDasharray="4 4" />
              <g id="paper-plane_3">
                <path
                  d="M8.52862 0.643979C8.65472 0.654731 12.5944 5.1037 15.7327 8.66873C16.0616 8.64319 16.3357 8.62234 16.3357 8.62234L16.6797 8.10704L19.1766 7.91312L19.3247 9.82093L16.9109 10.0082C17.5051 10.6843 18.0375 11.2905 18.4682 11.7814C21.1362 11.6535 26.2869 11.419 27.1597 11.4798C28.3465 11.5623 30.0418 12.128 30.0368 12.5126C30.0318 12.8972 28.4581 13.7513 27.5404 14.0673C26.8454 14.3064 21.1236 14.8358 18.3473 15.0812C17.9672 15.7098 17.5181 16.4498 17.0277 17.2557L19.8851 17.0334L20.0333 18.9412L17.5364 19.1351L17.1173 18.6791C17.1173 18.6791 16.5828 18.7209 16.1125 18.7568C13.4463 23.1189 10.1742 28.3838 9.92358 28.3613C9.49623 28.3236 8.49302 27.2688 8.49302 27.2688L9.96254 22.7816C9.52126 22.7861 9.19671 22.7262 9.18859 22.6259C9.17946 22.5123 9.58103 22.3871 10.1098 22.3303L10.8472 20.079C10.5083 20.0669 10.2756 20.0104 10.2686 19.9261C10.2611 19.828 10.5617 19.7202 10.9855 19.6563L12.4419 15.2098L6.2911 15.3333L3.00246 20.403L1.50247 20.2363L2.61746 15.6496L4.02107 15.0837C4.02107 15.0837 2.47224 15.1697 2.47782 14.7758C2.4834 14.3819 3.85476 14.0784 3.85476 14.0784L2.61875 13.8202L0.562775 9.68354L2.55228 8.81392L6.31432 13.4946L12.3097 12.4928L10.3991 8.9086C9.84767 8.93961 9.41072 8.87701 9.4014 8.76046C9.39341 8.6582 9.71898 8.54567 10.1719 8.48324L9.06011 6.39696C9.04924 6.39738 9.03867 6.39894 9.02779 6.39936C8.42442 6.44647 7.92762 6.38376 7.91735 6.25891C7.90894 6.14578 8.30449 6.02093 8.82844 5.96421L6.75475 2.07323C6.75475 2.07323 8.31696 0.625839 8.5282 0.6447L8.52862 0.643979Z"
                  fill="#113A75" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Popular Package Section */}
      <TourPackages />

      {/* CTA Section */}
      <section className="cta-area py-140 background-img position-relative z-1"
        data-background-image="assets/images/cta/cta-bg.jpg">
        <div className="container">
          <div className="row justify-content-center tw-pb-20">
            <div className="col-xl-10">
              <div className="section-wrapper text-center position-relative z-1" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="200">
                <h2 className="section-title fw-normal tw-mb-7 char-animation text-white char-animation"> <span
                  className="text-main-600">Let's Capture</span> Beauty of the World</h2>
                <div className="gallery-button d-flex justify-content-center">
                  <a className="primary-btn bg-main-two-600 text-white tw-py-4 tw-px-8 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                    href="/contact">Book Today <i className="ph ph-arrow-up-right"></i></a>
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
    </PageLayout>
  );
}
