(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: false
        },

        _create: function () {
            this._super();

            var subMenu = $(".sub-menu");

            subMenu.removeClass('ui-menu ui-widget ui-widget-content ui-front');

            // subMenu.css.removeAttr('style');

            this._desktopMenu();
            // TODO Create toggle between mobile and desktop mods!
        },

        _desktopMenu: function() {
            if (this.options.active) {


                $(".ui-menu-item-wrapper").on('mouseenter', function(){
                    var submenu =  $(this).next('.sub-menu'),
                        elementHeight = 20,
                        submenuHeight = submenu.height() + elementHeight;

                    submenu.addClass('submenu-custom');
                    submenu.css('top', '-' +  submenuHeight + 'px');
                });

                $(".ui-menu-item-wrapper").on('mouseleave', function(){
                    $(".sub-menu").css("display","none");
                });
            }
        },

        _mobileMenu: function() {
            $('.menu').addClass('toggle-menu');
        }

    });

})(jQuery);