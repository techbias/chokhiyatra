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
                    <h4 className="tw-text-lg text-main-600">Booking & Services</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">Payment & Pricing</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">Cancellation & Refund</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                  <div
                    className="faq-ip-two-item bg-white d-flex align-items-center justify-content-between tw-px-5 tw-py-4 cursor-pointer tw-mb-7 tw-rounded-md">
                    <h4 className="tw-text-lg text-main-600">Travel Support</h4>
                    <a className="tw-text-lg text-main-600" href="#"><i className="ph ph-arrow-down"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="faq-wrapper">
                  <div className="section-wrapper tw-mb-14">
                    <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-4">Have Questions?</h6>
                    <h2 className="section-title fw-normal tw-mb-7 char-animation">Frequently Asked Questions</h2>
                  </div>
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
                          <p>ChokhiYatra offers comprehensive travel services including customized tour packages, hotel bookings, flight reservations, private transfers, visa assistance, and 24/7 travel support. We specialize in creating memorable travel experiences tailored to your preferences and budget, ensuring every journey is hassle-free and enjoyable.</p>
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
                          <p>Booking with us is simple! Browse our tour packages on the website, select your preferred destination and dates, and fill out the inquiry form with your travel details. Our travel experts will get in touch with you within 24 hours to customize your perfect journey. You can also contact us directly via phone or WhatsApp for immediate assistance.</p>
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
                          <p>Absolutely! We understand that every traveler is unique. Our team specializes in creating customized itineraries based on your interests, budget, and travel style. Whether you want to add extra destinations, upgrade accommodations, include special activities, or adjust the duration, we'll work with you to design your perfect trip.</p>
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
                          <p>We accept various payment methods including bank transfers, credit/debit cards, UPI, and digital wallets for your convenience. A booking confirmation requires an advance payment, with the balance typically due before departure. Detailed payment terms and schedule will be provided with your customized tour quotation.</p>
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
                          <p>Our cancellation policy varies depending on the tour package and booking conditions. Generally, cancellations made 30+ days before departure receive a higher refund percentage. Cancellations within 15-30 days may receive partial refunds, while last-minute cancellations may be non-refundable. Specific terms are outlined in your booking confirmation. We strongly recommend purchasing travel insurance for added protection.</p>
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
                          <p>Yes, we can assist you with comprehensive travel insurance that covers medical emergencies, trip cancellations, lost baggage, flight delays, and more. We highly recommend all travelers purchase travel insurance for peace of mind during their journey. Our team can help you choose the right coverage based on your destination and travel needs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_seven">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_seven"
                          aria-expanded="false" aria-controls="order__collapse_seven">
                          How far in advance should I book my trip?
                        </button>
                      </h2>
                      <div id="order__collapse_seven" className="accordion-collapse collapse"
                        aria-labelledby="order_seven" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>We recommend booking at least 3-4 weeks in advance for domestic trips and 6-8 weeks for international travel to secure the best rates and availability. For peak seasons, festivals, or special events, booking 2-3 months ahead is advisable. However, we can also accommodate last-minute bookings based on availability.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2 className="accordion-header" id="order_eight">
                        <button className="accordion-button collapsed faq-accordion-button" type="button"
                          data-bs-toggle="collapse" data-bs-target="#order__collapse_eight"
                          aria-expanded="false" aria-controls="order__collapse_eight">
                          What happens if my flight gets delayed or cancelled?
                        </button>
                      </h2>
                      <div id="order__collapse_eight" className="accordion-collapse collapse"
                        aria-labelledby="order_eight" data-bs-parent="#general_faqaccordion">
                        <div className="accordion-body faq-accordion-body">
                          <p>Our 24/7 support team is available to assist you in case of flight delays or cancellations. We'll help you with rebooking, alternative arrangements, and coordinating with hotels and other service providers. This is another reason why we recommend comprehensive travel insurance, which typically covers expenses related to flight disruptions.</p>
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