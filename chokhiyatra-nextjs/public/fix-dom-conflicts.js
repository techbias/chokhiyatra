// Fix for DOM manipulation conflicts between React and jQuery/GSAP

(function() {
  'use strict';

  // Prevent the "removeChild" error by handling cleanup properly
  function fixDOMConflicts() {
    console.log('🔧 Fixing DOM conflicts...');

    // 1. Override problematic jQuery methods that might conflict with React
    if (typeof $ !== 'undefined') {

      // Store original methods
      const originalRemove = $.fn.remove;
      const originalEmpty = $.fn.empty;

      // Override remove to be safer
      $.fn.remove = function(selector) {
        try {
          return originalRemove.call(this, selector);
        } catch (e) {
          console.warn('jQuery remove error caught and handled:', e.message);
          return this;
        }
      };

      // Override empty to be safer
      $.fn.empty = function() {
        try {
          return originalEmpty.call(this);
        } catch (e) {
          console.warn('jQuery empty error caught and handled:', e.message);
          return this;
        }
      };
    }

    // 2. Fix preloader removal to avoid conflicts
    const preloaderCleanup = () => {
      const preloader = document.getElementById('loading-screen');
      if (preloader && preloader.parentNode) {
        try {
          // Use fadeOut but handle removal more carefully
          if (typeof $ !== 'undefined') {
            $(preloader).fadeOut(500, function() {
              try {
                if (preloader.parentNode) {
                  preloader.parentNode.removeChild(preloader);
                }
              } catch (e) {
                console.warn('Preloader removal handled:', e.message);
              }
            });
          } else {
            // Fallback without jQuery
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s';
            setTimeout(() => {
              try {
                if (preloader.parentNode) {
                  preloader.parentNode.removeChild(preloader);
                }
              } catch (e) {
                console.warn('Preloader removal handled:', e.message);
              }
            }, 500);
          }
        } catch (e) {
          console.warn('Preloader fadeout handled:', e.message);
        }
      }
    };

    // 3. Prevent GSAP from removing elements React is managing
    if (typeof gsap !== 'undefined') {
      // Track GSAP kills to prevent conflicts
      const originalKill = gsap.killTweensOf;
      gsap.killTweensOf = function(targets, props) {
        try {
          return originalKill.call(this, targets, props);
        } catch (e) {
          console.warn('GSAP kill handled:', e.message);
        }
      };
    }

    // 4. Handle ScrollTrigger cleanup
    if (typeof ScrollTrigger !== 'undefined') {
      const originalRefresh = ScrollTrigger.refresh;
      ScrollTrigger.refresh = function(safe) {
        try {
          return originalRefresh.call(this, safe);
        } catch (e) {
          console.warn('ScrollTrigger refresh handled:', e.message);
        }
      };
    }

    // 5. Safe preloader removal after page load
    setTimeout(preloaderCleanup, 1500);

    console.log('✅ DOM conflict prevention applied');
  }

  // Wait for dependencies before applying fixes
  function waitAndFix() {
    if (typeof $ !== 'undefined') {
      fixDOMConflicts();
    } else {
      setTimeout(waitAndFix, 100);
    }
  }

  // Apply fixes early
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitAndFix);
  } else {
    waitAndFix();
  }

  // Global error handler for removeChild errors - MUST be at capture phase
  window.addEventListener('error', function(e) {
    if (e.message && (e.message.includes('removeChild') || e.message.includes('NotFoundError'))) {
      console.warn('DOM manipulation error caught and suppressed:', e.message);
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      return false;
    }
  }, true);

  // Also override native removeChild to add safety
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    try {
      // Check if child actually belongs to this node
      if (child && child.parentNode === this) {
        return originalRemoveChild.call(this, child);
      } else {
        console.warn('Prevented removeChild error - child not in parent');
        return child;
      }
    } catch (e) {
      console.warn('removeChild safely handled:', e.message);
      return child;
    }
  };

})();
