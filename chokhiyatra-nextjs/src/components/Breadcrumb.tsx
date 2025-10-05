import React from 'react';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  size?: 'default' | 'small';
}

export default function Breadcrumb({
  title,
  subtitle,
  backgroundImage = '/assets/images/breadcrumb/breadcrumb-bg.jpg',
  size = 'default'
}: BreadcrumbProps) {
  return (
    <>
      <style jsx>{`
          .breadcrumb-small {
            padding: 120px 0 100px !important;
          }
          .breadcrumb-small .breadcrumb-title {
            font-size: 4rem !important;
          }
          .breadcrumb-small .breadcrumb-subtitle {
            font-size: 1rem !important;
          }

          @media (max-width: 991px) {
            .breadcrumb-small {
              padding: 80px 0 60px !important;
            }
            .breadcrumb-small .breadcrumb-title {
              font-size: 2.5rem !important;
            }
          }

          @media (max-width: 767px) {
            .breadcrumb-small {
              padding: 60px 0 40px !important;
            }
            .breadcrumb-small .breadcrumb-title {
              font-size: 2rem !important;
            }
            .breadcrumb-small .breadcrumb-subtitle {
              font-size: 0.875rem !important;
            }
          }
        `}</style>

      <section className={`breadcrumb-area background-img ${size === 'small' ? 'breadcrumb-small' : ''}`}
        data-background-image={backgroundImage}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div>
                <h2 className="breadcrumb-title text-center tw-mb-6 char-animation">
                  {title}
                </h2>
                {subtitle && (
                  <p className="breadcrumb-subtitle text-center text-white tw-text-lg">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
