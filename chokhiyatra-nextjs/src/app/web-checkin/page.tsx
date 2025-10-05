'use client';

import PageLayout from '@/components/PageLayout';
import Breadcrumb from '@/components/Breadcrumb';

const airlines = [
  {
    name: 'IndiGo',
    logo: '/assets/images/airlines/indigo.png',
    url: 'https://www.goindigo.in/web-check-in.html',
    color: '#0f1f66'
  },
  {
    name: 'Air India',
    logo: '/assets/images/airlines/air-india.png',
    url: 'https://www.airindia.com/in/en/manage/web-check-in.html',
    color: '#D71920'
  },
  {
    name: 'SpiceJet',
    logo: '/assets/images/airlines/spicejet.png',
    url: 'https://book.spicejet.com/SearchWebCheckin.aspx',
    color: '#E31E24'
  },
  {
    name: 'Vistara',
    logo: '/assets/images/airlines/vistara.png',
    url: 'https://www.airvistara.com/in/en/travel-information/vistara-experience/web-check-in',
    color: '#7B3D8F'
  },
  {
    name: 'Air Asia India',
    logo: '/assets/images/airlines/airasia.png',
    url: 'https://www.airasia.com/check-in/en/gb',
    color: '#FF0000'
  },
  {
    name: 'GoFirst',
    logo: '/assets/images/airlines/gofirst.png',
    url: 'https://www.flygofirst.com/plan-my-trip/web-check-in/',
    color: '#FF6B35'
  },
  {
    name: 'Emirates',
    logo: '/assets/images/airlines/emirates.png',
    url: 'https://www.emirates.com/in/english/manage-booking/online-check-in/',
    color: '#D71921'
  },
  {
    name: 'Qatar Airways',
    logo: '/assets/images/airlines/qatar.png',
    url: 'https://www.qatarairways.com/en/manage/check-in.html',
    color: '#5C0632'
  },
  {
    name: 'Etihad Airways',
    logo: '/assets/images/airlines/etihad.png',
    url: 'https://www.etihad.com/en/manage/online-check-in',
    color: '#BF9039'
  },
  {
    name: 'Singapore Airlines',
    logo: '/assets/images/airlines/singapore.png',
    url: 'https://www.singaporeair.com/en_UK/sg/travel-info/online-check-in/',
    color: '#001E62'
  },
  {
    name: 'British Airways',
    logo: '/assets/images/airlines/british.png',
    url: 'https://www.britishairways.com/travel/olcilandingpageauthreq/public/en_in',
    color: '#075AAA'
  },
  {
    name: 'Lufthansa',
    logo: '/assets/images/airlines/lufthansa.png',
    url: 'https://www.lufthansa.com/in/en/online-check-in',
    color: '#F9B233'
  },
  {
    name: 'Thai Airways',
    logo: '/assets/images/airlines/thai.png',
    url: 'https://www.thaiairways.com/en/travel_information/check_in/online_check_in.page',
    color: '#502A7E'
  },
  {
    name: 'Turkish Airlines',
    logo: '/assets/images/airlines/turkish.png',
    url: 'https://www.turkishairlines.com/en-int/any-questions/online-check-in/',
    color: '#C70A14'
  },
  {
    name: 'Cathay Pacific',
    logo: '/assets/images/airlines/cathay.png',
    url: 'https://www.cathaypacific.com/cx/en_IN/travel-information/flying-with-us/at-the-airport/online-check-in.html',
    color: '#006564'
  },
  {
    name: 'Malaysia Airlines',
    logo: '/assets/images/airlines/malaysia.png',
    url: 'https://www.malaysiaairlines.com/in/en/online-check-in.html',
    color: '#EE2E24'
  },
  {
    name: 'Oman Air',
    logo: '/assets/images/airlines/oman.png',
    url: 'https://www.omanair.com/en/checkin',
    color: '#A22B2B'
  },
  {
    name: 'Saudia',
    logo: '/assets/images/airlines/saudia.png',
    url: 'https://www.saudia.com/before-flying/web-check-in',
    color: '#028C4F'
  },
];

export default function WebCheckinPage() {
  return (
    <PageLayout>
      {/* <Breadcrumb
        title="Web Check-in"
        subtitle="Quick access to online check-in for all major airlines"
        size='small'
      /> */}

          {/* Web Check-in Section */}
          <section className="py-140">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="text-center tw-mb-14">
                    <h6 className="section-subtitle fw-normal font-sofia tw-text-2xl">Fast & Easy</h6>
                    <h2 className="section-title fw-normal char-animation tw-mt-4">
                      Online Flight <br />Check-in Links
                    </h2>
                    <p className="tw-mt-6 tw-text-lg text-neutral-500">
                      Save time at the airport by checking in online. Select your airline below and complete your web check-in.
                    </p>
                  </div>
                </div>
              </div>

              {/* Airlines Grid */}
              <div className="row g-4">
                {airlines.map((airline, index) => (
                  <div key={airline.name} className="col-lg-3 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 50}>
                    <a
                      href={airline.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="airline-card d-block text-center tw-p-8 tw-rounded-3xl tw-border tw-border-neutral-200 hover:tw-border-main-600 tw-transition-all tw-duration-300 hover:tw-shadow-xl position-relative overflow-hidden"
                      style={{
                        '--airline-color': airline.color
                      } as React.CSSProperties}
                    >
                      <div className="airline-logo-wrapper tw-mb-4 d-flex align-items-center justify-content-center" style={{ minHeight: '80px' }}>
                        <div className="airline-logo tw-text-6xl fw-bold" style={{ color: airline.color }}>
                          {airline.name.charAt(0)}
                        </div>
                      </div>
                      <h5 className="airline-name fw-semibold tw-mb-3">{airline.name}</h5>
                      <span className="checkin-btn d-inline-flex align-items-center tw-gap-2 text-main-600 fw-medium">
                        Web Check-in <i className="ph ph-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Info Section */}
              <div className="row justify-content-center tw-mt-20">
                <div className="col-lg-10">
                  <div className="checkin-info tw-p-10 tw-rounded-3xl bg-main-25">
                    <h4 className="fw-semibold tw-mb-6 text-center">Web Check-in Guidelines</h4>
                    <div className="row g-4">
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="info-item text-center">
                          <div className="icon tw-mb-4">
                            <i className="ph-fill ph-clock tw-text-5xl text-main-600"></i>
                          </div>
                          <h6 className="fw-semibold tw-mb-2">Timing</h6>
                          <p className="text-neutral-500">Check-in opens 48 hours before departure for most airlines</p>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="info-item text-center">
                          <div className="icon tw-mb-4">
                            <i className="ph-fill ph-identification-card tw-text-5xl text-main-600"></i>
                          </div>
                          <h6 className="fw-semibold tw-mb-2">Requirements</h6>
                          <p className="text-neutral-500">Keep your PNR/Booking reference and ID ready</p>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="info-item text-center">
                          <div className="icon tw-mb-4">
                            <i className="ph-fill ph-printer tw-text-5xl text-main-600"></i>
                          </div>
                          <h6 className="fw-semibold tw-mb-2">Boarding Pass</h6>
                          <p className="text-neutral-500">Print or save digital boarding pass on your phone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="row justify-content-center tw-mt-16">
                <div className="col-lg-8">
                  <div className="benefits-section text-center">
                    <h4 className="fw-semibold tw-mb-8">Benefits of Web Check-in</h4>
                    <div className="row g-4">
                      <div className="col-md-6" data-aos="fade-right">
                        <div className="benefit-item d-flex align-items-start tw-gap-4 text-start">
                          <div className="benefit-icon">
                            <i className="ph-fill ph-check-circle tw-text-3xl text-main-600"></i>
                          </div>
                          <div>
                            <h6 className="fw-semibold tw-mb-2">Save Time</h6>
                            <p className="text-neutral-500">Skip long queues at the airport check-in counter</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" data-aos="fade-left">
                        <div className="benefit-item d-flex align-items-start tw-gap-4 text-start">
                          <div className="benefit-icon">
                            <i className="ph-fill ph-check-circle tw-text-3xl text-main-600"></i>
                          </div>
                          <div>
                            <h6 className="fw-semibold tw-mb-2">Choose Seats</h6>
                            <p className="text-neutral-500">Select your preferred seat in advance</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
                        <div className="benefit-item d-flex align-items-start tw-gap-4 text-start">
                          <div className="benefit-icon">
                            <i className="ph-fill ph-check-circle tw-text-3xl text-main-600"></i>
                          </div>
                          <div>
                            <h6 className="fw-semibold tw-mb-2">Digital Convenience</h6>
                            <p className="text-neutral-500">Get your boarding pass on mobile or print at home</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6" data-aos="fade-left" data-aos-delay="100">
                        <div className="benefit-item d-flex align-items-start tw-gap-4 text-start">
                          <div className="benefit-icon">
                            <i className="ph-fill ph-check-circle tw-text-3xl text-main-600"></i>
                          </div>
                          <div>
                            <h6 className="fw-semibold tw-mb-2">Stress-Free Travel</h6>
                            <p className="text-neutral-500">Arrive at airport relaxed and prepared</p>
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
          <section className="cta-area tw-py-20 bg-main-600">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3 className="text-white fw-semibold tw-mb-4">Need Help with Your Booking?</h3>
                  <p className="text-white opacity-90">Our travel experts are here to assist you with flight bookings and check-in process.</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                  <a href="/contact" className="primary-btn bg-white text-main-600 tw-py-4 tw-px-8 fs-15 text-uppercase fw-bold font-heading tw-gap-2 d-inline-flex align-items-center tw-rounded-4xl">
                    Contact Us <i className="ph ph-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>

      <style jsx>{`
        .airline-card {
          text-decoration: none;
          color: inherit;
        }

        .airline-card:hover .airline-logo {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }

        .airline-card:hover .checkin-btn {
          color: var(--airline-color);
        }

        .airline-logo {
          transition: transform 0.3s ease;
        }
      `}</style>
    </PageLayout>
  );
}
