define(["jquery"], function($) {

    $.fn.powerSlide = function(options) {

        'use strict';
        var settings = $.extend({
            auto: false,
            infinite: true
        }, options );

        var interval;

        var nextSlide = function () {
            var next = $(".slides .active").next(".slide");
            if(settings.infinite) {
                next = $(".slides .active").removeClass("active").next(".slide");
                if (!next.length) {
                    next = $(".slides .slide:first");
                }
                next.addClass("active");
            } else {
                if (next.is(':last-child')) {
                    console.log("last");
                    $(".slides .slide:last").addClass("active");
                } else {
                    next.removeClass("active");
                    if (!next.length) {
                        next = $(".slides .slide:first");
                    }
                    next.addClass("active");
                }
            }
        };



        function play() {
            if (settings.auto === true) {
                interval = setInterval(function(){
                    nextSlide();
                }, 4000);
            }
            console.log('play');
        }
        play();

        function pauseSlider() {
            window.clearInterval(interval);
            console.log('pause');
        }

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

        $('.next').on('mouseenter', pauseSlider);
        $('.prev').on('mouseenter', pauseSlider);

    };

});
