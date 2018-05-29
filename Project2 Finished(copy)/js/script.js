$(document).ready(function () {
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

    $('.burger_icon').on('click', function(){

        $('.menu_cont').toggle(500);



    });
    $(window).resize(function() {
        if (  $(window).width() > 1024 ) {
            $('.menu_cont').removeAttr('style');
        }
    });

    $('.menu_item').on('click', function (){

        $(this).children().slideToggle(500);
    })




    /* PASTED PART
    var menu = $('#menu');
    menu.menuExtend();
    $('.burger_icon').hide();
    if ($('body').width() < 1024){
        menu.menuExtend().hide();
        $('.burger_icon').show();
    };


    $('.burger_icon').click(function(){
        menu.menu().toggle().animate({ paddingLeft: "40%"} , 800);
        $(this).hide();
    });

    $('document').ready(function () {
        menu.menuExtend();
    });


*/
});