// Fix for footer scroll animation glitching

(function() {
  'use strict';

  function fixFooterAnimations() {
    console.log('🔧 Fixing footer scroll animations and overlap...');

    const footer = document.querySelector('footer');
    if (!footer) {
      console.log('⚠️ Footer not found');
      return;
    }

    // Fix 1: Remove transform-style from footer to prevent glitching with ScrollSmoother
    footer.style.transformStyle = 'flat';
    footer.style.transform = 'translateZ(0)';
    footer.style.backfaceVisibility = 'hidden';

    // Fix: Ensure footer flows naturally after content - NEVER fixed/absolute
    footer.style.position = 'static';
    footer.style.marginTop = '0';
    footer.style.top = 'auto';
    footer.style.bottom = 'auto';
    footer.style.left = 'auto';
    footer.style.right = 'auto';

    // Clear any ScrollTrigger pinning that might affect footer area
    const scrollContainer = document.getElementById('scrollSmoother-container');
    if (scrollContainer) {
      // Add padding to bottom of scroll container to separate from footer
      scrollContainer.style.paddingBottom = '2rem';

      // Ensure last section in container has proper spacing
      const lastSection = scrollContainer.querySelector('section:last-child');
      if (lastSection) {
        lastSection.style.marginBottom = '0';
        lastSection.style.paddingBottom = '3rem';
      }
    }

    // Fix 2: Ensure AOS animations in footer don't conflict with ScrollSmoother
    const footerAosElements = footer.querySelectorAll('[data-aos]');

    footerAosElements.forEach((element) => {
      // Keep AOS but reduce complexity
      const aosAttr = element.getAttribute('data-aos');

      // If it's a complex animation, simplify it
      if (aosAttr && aosAttr.includes('zoom')) {
        element.setAttribute('data-aos', 'fade-up');
      }

      // Reduce duration for smoother performance
      element.setAttribute('data-aos-duration', '600');

      // Remove easing that might conflict
      element.removeAttribute('data-aos-easing');
    });

    // Fix 3: Prevent ScrollSmoother from affecting footer too much
    if (typeof ScrollTrigger !== 'undefined') {
      // Refresh ScrollTrigger after modifications
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }

    console.log('✅ Footer animations fixed');
  }

  // Wait for page to load and AOS to initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(fixFooterAnimations, 3000);
    });
  } else {
    setTimeout(fixFooterAnimations, 3000);
  }

  // Also run on window load
  window.addEventListener('load', () => {
    setTimeout(fixFooterAnimations, 3500);
  });

})();
