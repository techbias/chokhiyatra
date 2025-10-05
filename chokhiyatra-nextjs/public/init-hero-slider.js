// Initialize Hero Slider with Swiper

(function() {
  'use strict';

  function initHeroSlider() {
    // Wait for Swiper to be available
    if (typeof Swiper === 'undefined') {
      setTimeout(initHeroSlider, 100);
      return;
    }

    // Check if hero slider exists
    const heroSlider = document.querySelector('.hero-slider-active');
    if (!heroSlider) {
      return;
    }

    // Initialize Swiper
    const swiper = new Swiper('.hero-slider-active', {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.hero-slider-button-next',
        prevEl: '.hero-slider-button-prev',
      },
      pagination: {
        el: '.hero-slider-pagination',
        clickable: true,
      },
    });

    console.log('✅ Hero slider initialized');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initHeroSlider, 500);
    });
  } else {
    setTimeout(initHeroSlider, 500);
  }

})();
