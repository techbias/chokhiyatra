export function HeroSliderSkeleton() {
  return (
    <section className="banner-two-area position-relative p-0">
      <div className="hero-slider" style={{ height: '700px', background: '#f5f5f5' }}>
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="spinner-border text-main-600" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton() {
  return (
    <div className="py-140">
      <div className="container">
        <div className="text-center">
          <div className="spinner-border text-main-600" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
