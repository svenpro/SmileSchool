
define([
    "jquery",
    "backToTop",
    "accordionExtend"
], function($, backToTop, accordionExtend) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    var accordion =  $('[data-role=accordion]');

    $('.back-to-top').backToTop({
        'speed': 900,
        'scrollTriggerHeight': 50
    });

    accordion.accordionExtend({
        active: 0,
        header: ".accordion-title",
        titleColor: '#cdcdcd',
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

});
