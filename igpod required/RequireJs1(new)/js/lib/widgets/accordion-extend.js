define(["jquery", "jqueryUI"], function($) {
    $.widget("ui.accordionExtend", $.ui.menu, {
       _create: function () {
            this._super();



            $('.burger_menu').click(function () {
                // $(this).hide();
                $('#menu_container').removeClass().addClass('custom_menu');

                $('#menu').removeClass().addClass('custom_menu');
                $('.sub-menu').removeClass('sub-menu ui-menu ui-widget ui-widget-content ui-front').css('display', 'block').addClass('li_custom');
            });

            $('.menu_item').on('click', function (){
                $(this).children().slideToggle(500);
            })

            $(window).resize(function() {
                if (  $(window).width() > 1024 ) {
                    $('#menu').removeAttr('style');
                }
            });

        }

    });
});