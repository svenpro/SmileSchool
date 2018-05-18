(function ($) {
    var accordion =  $('[data-role=accordion]');

    accordion.accordion({
        active: 0,
        header: ".accordion-title",
        classes: {
            "ui-accordion-header": "accordion-title-olol",
            "ui-accordion-content": "accordion-content"
        }
    });

    $('.destroy').on('click', function () {
        accordion.accordion( "destroy" );
    });

    $('.enable').on('click', function () {
        accordion.accordion( "enable" );
    });

    $('.disable').on('click', function () {
        accordion.accordion( "disable" );
    });
})(jQuery)