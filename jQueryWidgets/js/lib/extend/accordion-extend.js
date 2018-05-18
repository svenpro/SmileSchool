(function ($) {
    $.widget("custom.accordionExtend", $.ui.accordion, {
        options: {
            delay: 500,
            prefix: "",
            headerColor: 'red'
        },

        _create: function () {
            this._super();
            this._newFitures();
            this._newHaderColor(this.options.headerColor);
        },

        _newFitures: function () {
            console.log('Extend widget!!!');
        },

        _newHaderColor: function(color) {
            $(this.options.header).css('background', color);
        },

        _destroy: function() {
            this._super();
            console.log('this is destroy');
        }

    });
})(jQuery);
