(function ($) {
    $.widget( "ui.newWidget", {
        _create: function() {
            console.log('first widget');
            console.log(this.getElementHeight(this.element));

        },

        getElementHeight: function (element) {
            return $(element).height();
        }
    });
})(jQuery);