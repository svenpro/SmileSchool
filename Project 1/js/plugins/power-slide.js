define(["jquery"], function($) {

    $.fn.powerSlide = function(options) {

        'use strict';
        var settings = $.extend({
            auto: true,
            infinite: true
        }, options );


        setInterval(function() {
            if (settings.auto === true) {
                $('.slideshow > div:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('.slideshow');
            };
        },  5000);

        //settings for slider
        // var width = 720;
        // var animationSpeed = 1000;
        // var pause = 3000;
        // var currentSlide = 1;
        //
        // var $slider = $('.slideshow');
        // var $slideContainer = $('.slides', $slider);
        // var $slides = $('.slide', $slider);
        //
        // var interval;

        // this.powerSlide = function () {
        //     interval = setInterval(function() {
        //         $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        //             if (++currentSlide === $slides.length) {
        //                 currentSlide = 1;
        //                 $slideContainer.css('margin-left', 0);
        //             }
        //         });
        //     }, pause);
        //
        // };

        //this.powerSlide();
    };

});

// (function($){
//     $.fn.powerSlide = function(options) {
//
//         'use strict';
//         var settings = $.extend({
//             auto: true,
//             infinite: true
//         }, options );
//
//
//         setInterval(function() {
//             if (settings.auto === true) {
//                 $('.slideshow > div:first')
//                     .fadeOut(1000)
//                     .next()
//                     .fadeIn(1000)
//                     .end()
//                     .appendTo('.slideshow');
//             };
//         },  5000);
//
//         //settings for slider
//         // var width = 720;
//         // var animationSpeed = 1000;
//         // var pause = 3000;
//         // var currentSlide = 1;
//         //
//         // var $slider = $('.slideshow');
//         // var $slideContainer = $('.slides', $slider);
//         // var $slides = $('.slide', $slider);
//         //
//         // var interval;
//
//         // this.powerSlide = function () {
//         //     interval = setInterval(function() {
//         //         $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
//         //             if (++currentSlide === $slides.length) {
//         //                 currentSlide = 1;
//         //                 $slideContainer.css('margin-left', 0);
//         //             }
//         //         });
//         //     }, pause);
//         //
//         // };
//
//         //this.powerSlide();
//     };
// })(jQuery);