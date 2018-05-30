(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: false,
            screenPoint: 1024
        },

        _create: function () {
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

            var $window = $(window);
            var windowsize = $window.width();

            $(document).ready(function() {
                // Optimalisation: Store the references outside the event handler:
                var windowsize = $(window).width();
                function checkWidth(windowsize) {
                    var windowsize = $window.width();
                    if (windowsize >= 1024) {
                        self._desktopMenu();


                    } else if (windowsize < 1023){
                        self._mobileMenu();

                    }
                }
                // Execute on load
                checkWidth(windowsize);
                // Bind event listener
                $(window).on('resize', debounce(function () {
                    checkWidth($window.width());
                }, 250));
            });
        },

        _desktopMenu: function() {
            console.log('desktop');

        },

        _mobileMenu: function() {
            console.log('mobile');

        }

    });

})(jQuery);