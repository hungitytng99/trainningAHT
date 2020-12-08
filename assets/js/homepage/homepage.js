//  Scroll: make attribute data-scroll in html element to css
const debounce = (fn) => {
    let frame;
    return (...params) => {
        if (frame) {
            cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};
const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();

//Code for Carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        dotsEach: 1,
        center: true,
        margin: 30,
        autoPlay: true,
        startPosition: 1,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            568: {
                items: 2,
            },
            992: {
                items: 3,
                dots: true,
            }
        }
    })
});

//Prevent scroll when modal is opening
var test = document.querySelector("#category-menu-status");
console.log(test);