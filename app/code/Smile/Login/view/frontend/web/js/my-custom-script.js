define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    // return function(config, element) {
    //     console.log('my custom scr', $(element));
    // };

    console.log('my custom scr');

    return function(config, element) {

        var backToTop = function () {

            var scrollTop = $(window).scrollTop();

            if (scrollTop > config.scrollTriggerHeight) {
                $(element).addClass(config.showClass);
            } else {
                $(element).removeClass(config.showClass);
            }
        };

        backToTop();

        console.log(config);

        $(window).on('scroll', function () {
            backToTop();
        });

        $(element).on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, config.speed);
        });

    };

});