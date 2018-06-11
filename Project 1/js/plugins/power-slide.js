define(["jquery"], function($) {

    $.fn.powerSlide = function(options) {

        'use strict';
        var settings = $.extend({
            auto: true,
            infinite: true
        }, options );


        // var interval = setInterval(function() {
        //     if (settings.auto === true) {
        //         $('.slideshow > div:first')
        //             .fadeOut(1000)
        //             .next()
        //             .fadeIn(1000)
        //             .end()
        //             .appendTo('.slideshow');
        //     };
        // },  5000);

        var interval;

        var nextSlide = function () {
            var next = $(".slides .active").removeClass("active").next(".slide");
            if (!next.length) {
                next = $(".slides .slide:first");
            }
            next.addClass("active");
        }

        function pauseSlider() {
            clearInterval(interval);
        }

        function play() {
            if (settings.auto === true) {
                interval = setInterval(function(){
                    nextSlide();
                }, 4000);
            }
        }
        play();

        $('.next').on('click', function() {
            pauseSlider();
            nextSlide();
        });

        $('.prev').on('click', function() {
            pauseSlider();

            var prev = $(".slides .active").removeClass("active").prev(".slide");
            if (!prev.length) {
                prev = $(".slides .slide:last");
            }
            prev.addClass("active");
        });



        $('.next').on('mouseleave', play);
        $('.prev').on('mouseleave', play);

        // $('.next').on('mouseenter', pauseSlider);
        // $('.prev').on('mouseenter', pauseSlider);

    };

});
