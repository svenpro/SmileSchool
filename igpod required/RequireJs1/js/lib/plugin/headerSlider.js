define(["jquery"], function($) {

       $.fn.headerSlider = function() {

       var settings = $.extend({
               slideNow: 1,
               slideCount:  $('#slidewrapper').children().length,
               slideInterval: 3000,
               translateWidth: 0,
            }, options );

        var switchInterval = setInterval(settings.nextSlide, settings.slideInterval);

        $('#viewport').hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(settings.nextSlide, settings.slideInterval);
        });

        $('#next-btn').click(function() {
            nextSlide();
        });

        $('#prev-btn').click(function() {
            prevSlide();
        });
    };


    function nextSlide() {
        if (settings.slideNow == settings.slideCount || settings.slideNow <= 0 || settings.slideNow > settings.slideCount) {
            $('#slidewrapper').addClass('.slider_scustom');
            settings.slideNow = 1;
        } else {
            settings.translateWidth = -$('#viewport').width() * (settings.slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + settings.translateWidth + 'px, 0)',
            });
            settings.slideNow++;
        }
    }

    function prevSlide() {
        if (settings.slideNow == 1 || settings.slideNow <= 0 || settings.slideNow > settings.slideCount) {
            settings.translateWidth = -$('#viewport').width() * (settings.slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + settings.translateWidth + 'px, 0)',
            });
            settings.slideNow = settings.slideCount;
        } else {
            translateWidth = -$('#viewport').width() * (settings.slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + settings.translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + settings.translateWidth + 'px, 0)',
            });
            settings.slideNow--;
        }


    }
};
