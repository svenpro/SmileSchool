define(["jquery"], function($) {
    console.log('File works');
    $.fn.backToTop = function(options) {

        var settings = $.extend({
            speed: 200,
            showClass: 'show',
            scrollTriggerHeight: 200
        }, options );

        this.backToTop = function () {
            var scrollTop = $(window).scrollTop();

            if (scrollTop > settings.scrollTriggerHeight) {
                $(this.selector).addClass(settings.showClass);
            } else {
                $(this.selector).removeClass(settings.showClass);
            }
        };

        this.backToTop();

        $(window).on('scroll', function () {
            this.backToTop();
        }.bind(this));

        $(this.selector).on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, settings.speed);
        });

    };
});
