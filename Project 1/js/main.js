(function($){
    $( "#dialog" ).dialog({
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        width: 600
    });

    let position = {my: "center", at: "center"};

    const menu = $(".menu");

    menu.menu({
        // position: position,
    });



    $('document').ready(function () {
        menu.menuExtend({
            active: true,
        });
    });

    var toggleMenu = $('.toggle-menu');


    $('.burger-menu').bind('click', function() {

        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            toggleMenu.css('overflow', 'hidden');
        } else {
            $(this).attr('data-click-state', 1)
            toggleMenu.css('overflow', 'visible');
        }
    });


})(jQuery);