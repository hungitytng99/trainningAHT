"use strict";

//  Scroll: make attribute data-scroll in html element to css
var debounce = function debounce(fn) {
  var frame;
  return function () {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    if (frame) {
      cancelAnimationFrame(frame);
    }

    frame = requestAnimationFrame(function () {
      fn.apply(void 0, params);
    });
  };
};

var storeScroll = function storeScroll() {
  document.documentElement.dataset.scroll = window.scrollY;
};

document.addEventListener('scroll', debounce(storeScroll), {
  passive: true
});
storeScroll(); //Code for Carousel

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    dotsEach: 1,
    center: true,
    margin: 30,
    startPosition: 1,
    autoPlay: true,
    responsive: {
      0: {
        items: 1
      },
      568: {
        items: 2
      },
      992: {
        items: 3,
        dots: true
      }
    }
  });
});