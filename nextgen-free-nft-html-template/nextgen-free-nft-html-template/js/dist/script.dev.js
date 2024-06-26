"use strict";

(function ($) {
  "use strict"; // Tab Section

  var initTabs = function initTabs() {
    var tabs = document.querySelectorAll('[data-tab-target]');
    var tabContents = document.querySelectorAll('[data-tab-content]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(function (tabContent) {
          tabContent.classList.remove('active');
        });
        tabs.forEach(function (tab) {
          tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
      });
    });
  };

  var swiper = new Swiper(".product-swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      699: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  }); // document ready

  $(document).ready(function () {
    initTabs();
    window.addEventListener("load", function (event) {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry'
      }); // Initialize Isotope

      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry'
      });
      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      }); // Filter items on button click

      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');

        if (filterValue === '*') {
          // Show all items
          $container.isotope({
            filter: '*'
          });
        } else {
          // Show filtered items
          $container.isotope({
            filter: filterValue
          });
        }
      });
    });
  });
})(jQuery);