// Initialize GSAP custom animations for Next.js
// This script ensures custom-gsap.js animations work properly in Next.js

(function() {
  'use strict';

  let gsapInitialized = false;

  function waitForDependencies() {
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (
          typeof window.gsap !== 'undefined' &&
          typeof window.ScrollTrigger !== 'undefined' &&
          typeof window.SplitText !== 'undefined' &&
          typeof window.ScrollSmoother !== 'undefined' &&
          typeof window.$ !== 'undefined'
        ) {
          clearInterval(checkInterval);
          console.log('✅ All GSAP dependencies loaded');
          resolve();
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        console.warn('⚠️ GSAP dependencies timeout');
        resolve();
      }, 10000);
    });
  }

  async function initializeGSAP() {
    if (gsapInitialized) {
      console.log('GSAP already initialized, skipping...');
      return;
    }

    console.log('Waiting for GSAP dependencies...');
    await waitForDependencies();

    if (typeof gsap === 'undefined') {
      console.error('❌ GSAP not loaded');
      return;
    }

    gsapInitialized = true;
    console.log('🚀 Initializing GSAP custom animations...');

    try {
      // Ensure ScrollTrigger is registered
      gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

      // Refresh ScrollTrigger to recalculate all positions
      ScrollTrigger.refresh();

      // Trigger DOMContentLoaded event for custom-gsap.js ONCE
      if (!window.gsapInitEventFired) {
        window.gsapInitEventFired = true;
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
        console.log('📢 Triggered DOMContentLoaded for custom-gsap.js');
      }

      console.log('✅ GSAP animations initialized');

      // Fix footer positioning
      setTimeout(() => {
        const footer = document.querySelector('footer');
        if (footer) {
          footer.style.position = 'relative';
          footer.style.zIndex = '10';
        }
      }, 500);

      // Refresh AOS if available
      if (typeof AOS !== 'undefined') {
        setTimeout(() => {
          AOS.refresh();
        }, 1000);
      }

    } catch (error) {
      console.error('❌ Error initializing GSAP:', error);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initializeGSAP, 500);
    });
  } else {
    setTimeout(initializeGSAP, 500);
  }

  // Also initialize on window load as fallback
  window.addEventListener('load', () => {
    setTimeout(initializeGSAP, 1000);
  });

  // Debug: Log when each library loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('=== Library Status ===');
      console.log('jQuery:', typeof $ !== 'undefined' ? '✅' : '❌');
      console.log('GSAP:', typeof gsap !== 'undefined' ? '✅' : '❌');
      console.log('ScrollTrigger:', typeof ScrollTrigger !== 'undefined' ? '✅' : '❌');
      console.log('SplitText:', typeof SplitText !== 'undefined' ? '✅' : '❌');
      console.log('ScrollSmoother:', typeof ScrollSmoother !== 'undefined' ? '✅' : '❌');
      console.log('AOS:', typeof AOS !== 'undefined' ? '✅' : '❌');
      console.log('====================');
    }, 2000);
  });

})();
