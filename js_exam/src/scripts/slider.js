import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        dotsClass: 'slider__dots',
    });
});
