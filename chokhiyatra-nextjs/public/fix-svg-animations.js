// Fix for SVG animation errors on pages without SVG paths

(function() {
  'use strict';

  // Override the plane animations to add null checks
  function fixSVGAnimations() {
    // Only run if custom-gsap.js has loaded
    if (typeof $ === 'undefined') {
      setTimeout(fixSVGAnimations, 100);
      return;
    }

    // Wrap the original animations with safety checks
    const originalGetTotalLength = SVGPathElement.prototype.getTotalLength;
    SVGPathElement.prototype.getTotalLength = function() {
      try {
        if (this && this.isConnected) {
          return originalGetTotalLength.call(this);
        }
        return 0;
      } catch (e) {
        console.warn('SVG path error caught:', e.message);
        return 0;
      }
    };

    // Also add global error handler for these specific errors
    const originalError = window.onerror;
    window.onerror = function(msg, url, lineNo, columnNo, error) {
      if (msg && msg.includes('getTotalLength')) {
        console.warn('SVG animation error suppressed:', msg);
        return true; // Prevent error from showing
      }
      if (originalError) {
        return originalError(msg, url, lineNo, columnNo, error);
      }
      return false;
    };

    console.log('✅ SVG animation errors fixed');
  }

  // Run early
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixSVGAnimations);
  } else {
    fixSVGAnimations();
  }

})();
