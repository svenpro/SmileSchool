(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: false,
            screenPoint: 1024
        },

        _create: function () {
            this._super();

            var self = this;

            /// Function DEBOUNCE
            function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }


            var windowsize = $(window).width();
            function checkWidth(windowsize) {
                if (windowsize >= self.options.screenPoint) {
                    self._desktopMenu();
                } else if (windowsize < self.options.screenPoint - 1){
                    self._mobileMenu();

                }
            }
            // Execute on load
            checkWidth(windowsize);
            // Bind event listener
            $(window).on('resize', debounce(function () {
                checkWidth($(window).width());
            }, 250));
        },

        _desktopMenu: function() {
            console.log('desktop');
            $('footer').removeClass();
            $('footer').addClass('main-footer');
            // $( ".menu" ).menu( "disable" );
            $( ".menu" ).menu();
            $( ".menu" ).menu( "enable" );

        },

        _mobileMenu: function() {
            console.log('mobile');

            // $( ".menu" ).menu( "disable" );
            $( ".menu" ).menu();
            $( ".menu" ).menu( "enable" );

            $('footer').removeClass().addClass('footer-mobile');

            $('.sub-menu').removeAttr('style');

            $('.ui-menu-item-wrapper.ui-state-active').next('.sub-menu').css('color', 'red');

            var toggleMenu = $('.menu');

            $('.burger-menu').bind('click', function() {

                if($(this).attr('data-click-state') == 1) {
                    $(this).attr('data-click-state', 0);
                    toggleMenu.css('display', 'none');
                    $('.btn-close').css('display', 'none');
                    $('body').css('margin-left', '');
                } else {
                    $(this).attr('data-click-state', 1);
                    toggleMenu.css('display', 'block');
                    $('.btn-close').css('display', 'block');
                    $('body').css('margin-left', '40%');
                }
            });


            $('.btn-close').on('click', function(){
                $('.menu').css('display', 'none');
                $(this).css('display', 'none');
                $('.burger-menu').attr('data-click-state', 0);
                $('body').css('margin-left', '');
            });

            $('.ui-menu-icon').on('click', function(){
                console.log('button click');
                $('.sub-menu').toggle(500, function() {
                    $(this).css('display', 'block')
                });

            });

        }

    });

})(jQuery);