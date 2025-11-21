// BACKUP - Original Banner Section from Homepage
// This is the static banner that was replaced with HeroSlider

export default function BannerBackup() {
  return (
    <section className="banner-two-area tw-pt-29">
      <div className="banner-two-bg background-img position-absolute w-100 top-0 start-0 z-n1"
        data-background-image="assets/images/banner/banner-two-bg.jpg"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="text-center">
              <h6 className="section-subtitle font-sofia tw-text-2xl fw-normal tw-mb-12">Explore the
                world as much possible</h6>
              <h1 className="banner-two-title text-uppercase tw-mb-19 char-animation">Explore <span
                className="fw-normal fst-italic">the World</span></h1>
              <div className="banner-two-button">
                <a className="primary-btn bg-main-two-600 text-white tw-py-5 tw-px-18 fs-15 text-capitalize fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl"
                  href="/contact">See all destination <i
                    className="ph ph-arrow-up-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
