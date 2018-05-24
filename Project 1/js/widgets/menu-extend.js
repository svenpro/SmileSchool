(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: true
        },

        _create: function () {
            this._super();

            $('.sub-menu').removeClass('ui-menu ui-widget ui-widget-content ui-front');

            // TODO Create toggle between mobile and desktop mods!
        },

        _desctopMenu: function() {
            if (this.options.active) {
                var subMenu = $(".sub-menu");

                $(".ui-menu-item-wrapper").on('mouseenter', function(){
                    var submenu =  $(this).next('.sub-menu'),
                        elementHeight = 20,
                        submenuHeight = submenu.height() + elementHeight;

                    submenu.addClass('submenu-custom');
                    submenu.css('top', '-' +  submenuHeight + 'px');
                });
            }
        },

        _mobileMenu: function() {
            // TODO Create mobile menu logic!
        }

    });

})(jQuery);