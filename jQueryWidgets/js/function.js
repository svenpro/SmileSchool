(function ($) {
    var accordion =  $('[data-role=accordion]');

    accordion.accordionExtend({
        active: 0,
        headerColor: 'black',
        header: ".accordion-title",
        classes: {
            "ui-accordion-header": "accordion-title-olol",
            "ui-accordion-content": "accordion-content"
        }
    });

    $('.destroy').on('click', function () {
        accordion.accordionExtend( "destroy" );
    });

    $('.enable').on('click', function () {
        accordion.accordionExtend( "enable" );
    });

    $('.disable').on('click', function () {
        accordion.accordionExtend( "disable" );
    });
})(jQuery);
