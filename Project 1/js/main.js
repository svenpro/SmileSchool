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
    })

})(jQuery);