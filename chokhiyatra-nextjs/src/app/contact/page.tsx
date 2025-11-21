'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <Breadcrumb title="CONTACT" />

        {/* Contact Info & Form Section */}
        <section className="contact-ip-area pt-140">
          <div className="container">
            <div className="row tw-mb-20">
              <div className="col-xl-4 col-lg-6">
                <div className="contact-ip-wrapper tw-py-18 tw-px-30 tw-mb-7 text-center" data-aos="fade-up"
                  data-aos-duration="1000" data-aos-delay="200">
                  <div className="contact-ip-icon tw-h-25 tw-mb-2">
                    <span><img src="assets/images/icon/contact-ip-icon1.svg" alt="icon" /></span>
                  </div>
                  <div>
                    <h4 className="tw-text-2xl fw-semibold tw-mb-4">address line</h4>
                    <span className="text-center fw-medium tw-text-lg tw-mb-2">G-27, Bhairav Plaza, Shri
                      Dungargarh, Rajasthan 331803</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="contact-ip-wrapper tw-py-18 tw-px-30 tw-mb-7 text-center" data-aos="fade-up"
                  data-aos-duration="1000" data-aos-delay="300">
                  <div className="contact-ip-icon tw-h-25 tw-mb-2">
                    <span><img src="assets/images/icon/contact-ip-icon2.svg" alt="icon" /></span>
                  </div>
                  <div>
                    <h4 className="tw-text-2xl fw-semibold tw-mb-4">Phone Number</h4>
                    <a className="text-body fw-medium tw-text-lg tw-mb-2"
                      href="tel:+91-94131-31000">+91-94131-31000</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="contact-ip-wrapper tw-py-18 tw-px-30 tw-mb-7 text-center" data-aos="fade-up"
                  data-aos-duration="1000" data-aos-delay="300">
                  <div className="contact-ip-icon tw-h-25 tw-mb-2">
                    <span><img src="assets/images/icon/contact-ip-icon3.svg" alt="icon" /></span>
                  </div>
                  <div>
                    <h4 className="tw-text-2xl fw-semibold tw-mb-4">Mail Adress</h4>
                    <a className="text-body fw-medium tw-text-lg"
                      href="mailto:info@chokhiyatra.com">info@chokhiyatra.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6">
                <div className="contact-ip-left" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="section-wrapper tw-mb-10" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="200">
                    <h2 className="section-title fw-normal tw-mb-7 char-animation">Get in touch</h2>
                    <p className="section-paragraph tw-text-lg fw-normal">Lorem ipsum dolor sit amet consectetur
                      adipiscing elit mattis <br />
                      faucibus odio feugiat arc dolor.</p>
                  </div>
                  <div className="contact-ip-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.60619018188!2d74.0058105760243!3d28.097552908172503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391517b5bf3625c9%3A0x4df596f7635a3a2d!2sChokhi%20Yatra%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1759405677809!5m2!1sen!2sin"
                      width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="package-details-contact bg-white tw-py-14 tw-px-12 tw-rounded-2xl"
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <h2 className="tw-text-10 tw-mb-4">Fill Up The Form</h2>
                  <p className="tw-mb-10">Your email address will not be published. Required fields are <br />
                    marked *</p>
                  <form onSubmit={handleSubmit} className="tw-mt-70-px d-flex flex-column tw-gap-64-px">
                    {success && (
                      <div className="alert alert-success">
                        Thank you! Your message has been sent successfully.
                      </div>
                    )}
                    {error && (
                      <div className="alert alert-danger">
                        {error}
                      </div>
                    )}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-10">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="cursor-small focus-outline-0 bg-transparent tw-py-3 tw-ps-9 w-100 border border-neutral-200 focus-border-main-600"
                            placeholder="Your Name*"
                            required
                          />
                          <span
                            className="tw-text-xl d-flex text-main-600 position-absolute top-50 translate-middle-y tw-start-4">
                            <i className="ph-bold ph-user"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-10">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="cursor-small focus-outline-0 bg-transparent tw-py-3 tw-ps-9 w-100 border border-neutral-200 focus-border-main-600"
                            placeholder="Email Address*"
                            required
                          />
                          <span
                            className="tw-text-xl d-flex text-main-600 position-absolute top-50 translate-middle-y tw-start-4">
                            <i className="ph-bold ph-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="position-relative tw-mb-3">
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="cursor-small focus-outline-0 bg-transparent tw-py-3 tw-px-13 w-100 border border-neutral-200 focus-border-main-600 tw-h-224-px"
                            placeholder="Enter Your Message here"
                            required
                          ></textarea>
                          <span
                            className="textarea-icon tw-text-xl d-flex text-main-600 position-absolute top-0">
                            <i className="ph-bold ph-note-pencil"></i>
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div>
                          <div className="package-details-contact-checkbox tw-mb-10">
                            <div
                              className="custom-control custom-checkbox d-flex align-items-center tw-gap-3">
                              <input type="checkbox" className="custom-control-input"
                                id="customCheck1" required />
                              <label className="custom-control-label fw-medium text-main-600"
                                htmlFor="customCheck1">I agree to Terms & Conditions, Refund Policy
                                and Privacy Policy of ChokhiYatra.</label>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <button
                            type="submit"
                            disabled={loading}
                            className="bg-main-600 text-white text-uppercase fw-bold w-100 tw-py-5"
                            data-block="button">
                            <span className="button__flair"></span>
                            <span className="button__label">{loading ? 'Sending...' : 'Send Message'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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
