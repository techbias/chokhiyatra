'use client';

import Script from 'next/script';

export default function Scripts() {
  return (
    <>
      {/* DOM conflict prevention - load FIRST to catch errors early */}
      <Script
        src="/fix-dom-conflicts.js"
        strategy="beforeInteractive"
      />

      {/* jQuery */}
      <Script
        src="/assets/js/jquery-3.7.1.min.js"
        strategy="beforeInteractive"
      />

      {/* Bootstrap */}
      <Script
        src="/assets/js/boostrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* GSAP and plugins */}
      <Script
        src="/assets/js/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/SplitText.min.js"
        strategy="afterInteractive"
      />

      {/* Other libraries */}
      <Script
        src="/assets/js/swiper-bundle.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/slick.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/nice-select.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/counterup.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/purecounter.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/wow.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/aos.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/appear.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/phosphor-icon.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/isotope.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/imagesloaded.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/range-slider.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery-knob.js"
        strategy="afterInteractive"
      />

      {/* SVG animation error fix - load before GSAP */}
      <Script
        src="/fix-svg-animations.js"
        strategy="beforeInteractive"
      />

      {/* Initialize GSAP for Next.js before custom-gsap */}
      <Script
        src="/init-gsap-nextjs.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/custom-gsap.js"
        strategy="afterInteractive"
      />

      {/* Main JavaScript - load last */}
      <Script
        src="/assets/js/main.js"
        strategy="lazyOnload"
      />

      {/* Animation fixes - load after everything */}
      <Script
        src="/fix-animations.js"
        strategy="lazyOnload"
      />

      {/* Category hover fix */}
      <Script
        src="/fix-category-hover.js"
        strategy="lazyOnload"
      />

      {/* Hero slider initialization */}
      <Script
        src="/init-hero-slider.js"
        strategy="lazyOnload"
      />

      {/* Footer animation glitch fix */}
      {/* <Script
        src="/fix-footer-animations.js"
        strategy="lazyOnload"
      /> */}
    </>
  );
}