// Fix for footer overlap - minimal approach
// Do NOT duplicate GSAP animations (custom-gsap.js handles them)

(function() {
  'use strict';

  function applyFixes() {
    console.log('Applying layout fixes only (no animation duplication)...');

    // Fix 1: Ensure footer doesn't overlap content
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.position = 'relative';
      footer.style.zIndex = '10';
    }

    const scrollContainer = document.getElementById('scrollSmoother-container');
    if (scrollContainer) {
      scrollContainer.style.marginBottom = '0';
    }

    // Fix 2: Refresh ScrollTrigger after a delay (let custom-gsap.js initialize first)
    if (typeof ScrollTrigger !== 'undefined') {
      setTimeout(() => {
        console.log('Refreshing ScrollTrigger...');
        ScrollTrigger.refresh();
      }, 2000);
    }

    // Fix 3: Refresh AOS if available
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        console.log('Refreshing AOS...');
        AOS.refresh();
      }, 2000);
    }

    console.log('✅ Layout fixes applied (animations handled by custom-gsap.js)');
  }

  // Apply fixes once after page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(applyFixes, 2500);
    });
  } else {
    setTimeout(applyFixes, 2500);
  }

})();
