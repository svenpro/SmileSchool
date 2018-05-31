$(document).ready(function () {
    var menu =  $('.menu');

    menu.menuExtend();

    $('.burger_menu').click(function () {
        $('#menu_container').toggle(500);
    });



    var position = {my: "left bottom", at: "left top+1"};

    $( ".menu" ).menu({
        position: position,
        blur: function() {
            $(this).menu("option", "position", position);
        },
    });

    $( "#dialog" ).dialog({
        resizable: false,
        width: 300,
        dialogClass: "no-close",
        draggable: false,
        modal: true,
        show: {
            effect: 'fade',
            duration: 800
        },
        hide: {
            effect: 'fade',
            duration: 800
        },
          buttons: [
            {
                text: "OK",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });


});