(function($){
    // $( "#dialog" ).dialog({
    //     show: {
    //         effect: "blind",
    //         duration: 500
    //     },
    //     hide: {
    //         effect: "explode",
    //         duration: 1000
    //     },
    //     width: 600
    // });

    let position = {my: "center", at: "center"};

    const menu = $(".menu");

    menu.menu({
        // position: position,
        delegate: "footer"
    });



    $('document').ready(function () {
        menu.menuExtend({
            active: true,
            menus: "nav",
            items: ".custom-item"
        });

        $(".center").slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            respondTo: 'div',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


    });





})(jQuery);

