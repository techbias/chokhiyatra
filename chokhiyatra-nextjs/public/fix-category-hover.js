// Fix for category hover effect not working

(function() {
  'use strict';

  function initCategoryHover() {
    console.log('🎯 Initializing category hover effects...');

    // Check dependencies
    if (typeof $ === 'undefined') {
      console.log('jQuery not loaded yet for category hover, waiting...');
      setTimeout(initCategoryHover, 500);
      return;
    }

    // 1. Set background images for all elements with data-background-image
    $(".background-img").each(function() {
      const bgImage = $(this).data("background-image");
      if (bgImage) {
        $(this).css('background-image', 'url(' + bgImage + ')');
        $(this).css('background-size', 'cover');
        $(this).css('background-position', 'center');
      }
    });

    // 2. Initialize hover reveal effect for category items
    const hoverItems = document.querySelectorAll(".wt-hover__reveal-item");

    if (hoverItems.length === 0) {
      console.log('⚠️ No hover items found');
      return;
    }

    console.log(`Found ${hoverItems.length} category hover items`);

    function moveImage(e, hoverItem) {
      const item = hoverItem.getBoundingClientRect();
      const x = e.clientX - item.x;
      const y = e.clientY - item.y;

      // Find the background reveal element (should be second child)
      const revealBg = hoverItem.querySelector('.wt-hover__reveal-bg');
      if (revealBg) {
        revealBg.style.transform = `translate(${x}px, ${y}px)`;
      }
    }

    hoverItems.forEach((item, index) => {
      // Remove any existing listeners to avoid duplicates
      const newItem = item.cloneNode(true);
      item.parentNode.replaceChild(newItem, item);

      // Add new listener
      newItem.addEventListener("mousemove", (e) => {
        moveImage(e, newItem);
      });

      // Add hover class on mouse enter
      newItem.addEventListener("mouseenter", function() {
        // Remove current class from all items
        hoverItems.forEach(i => i.classList.remove('current'));
        // Add current class to this item
        newItem.classList.add('current');
      });
    });

    // 3. Set first item as active by default
    if (hoverItems[0]) {
      hoverItems[0].classList.add('current');
    }

    console.log('✅ Category hover effects initialized');
  }

  // Initialize after all scripts load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initCategoryHover, 2000);
    });
  } else {
    setTimeout(initCategoryHover, 2000);
  }

  // Also try on window load as fallback
  window.addEventListener('load', () => {
    setTimeout(initCategoryHover, 2500);
  });

})();
