(function(){
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

    var position = {my: "left top", at: "left bottom+8"};

    $( ".menu" ).menu({
        position: position,
        blur: function() {
            $(this).menu("option", "position", position);
        },
    });

})();