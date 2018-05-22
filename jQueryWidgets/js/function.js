(function ($) {
    var accordion =  $('[data-role=accordion]');

    accordion.accordionExtend({
        active: 0,
        header: ".accordion-title",
        titleColor: 'green',
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

    $('document').ready(function () {
        accordion.newWidget();
    })
})(jQuery);
