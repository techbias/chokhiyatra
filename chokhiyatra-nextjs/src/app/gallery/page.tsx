import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Gallery',
  description: 'Explore our travel photo gallery and memories',
  keywords: ['gallery', 'photos', 'travel images', 'memories'],
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <PageLayout>
      <Breadcrumb title="Gallary" />

        {/* Gallery Grid Section */}
        <section className="gallary-ip-area pt-140">
          <div className="container">
            <div className="row align-items-center masonry">
              <div className="col-xl-3 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb1.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="gallary-ip-thumb-height w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb2.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb3.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb4.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="gallary-ip-thumb-height w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb5.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 tw-mb-7">
                <div className="gallary-ip-thumb position-relative z-1 overflow-hidden">
                  <img className="w-100 object-fit-cover tw-rounded-lg"
                    src="assets/images/gallery/gallary-ip-thumb6.jpg" alt="thumb" />
                  <div className="gallary-ip-button position-absolute start-50 translate-middle">
                    <a className="gallary-ip-btn tw-w-25 tw-h-25 lh-1 d-inline-flex align-items-center justify-content-center bg-main-600 rounded-circle"
                      href="#"><span><img src="assets/images/icon/gallery-ip-button.svg"
                        alt="button" /></span></a>
                  </div>
                  <div className="gallary-ip-content position-absolute">
                    <h4 className="tw-text-2xl tw-mb-2 text-white">Discovery Island</h4>
                    <p className="gallary-ip-paragraph fw-medium">tour & travell</p>
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
                      href="contact.html">Book Today <i className="ph ph-arrow-up-right"></i></a>
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
