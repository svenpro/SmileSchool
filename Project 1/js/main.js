define([
    "jquery",
    "menuExtend",
    "powerSlide",
    "slick"
], function($, menuExtend, powerSlide, slick) {

    let position = {my: "center", at: "center"};

    const menu = $(".menu");

    // menu.menu({
    //     // position: position,
    //     delegate: "footer"
    // });

    $('.slider').powerSlide();

    $('document').ready(function () {

        menu.menuExtend({
            active: true,
            menus: "nav",
            items: ".custom-item"
        });

        $(".center").slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 21,
            slidesToScroll: 1,
            //respondTo: 'div',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 10,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });

});

// (function($){
//
//     let position = {my: "center", at: "center"};
//
//     const menu = $(".menu");
//
//     menu.menu({
//         // position: position,
//         delegate: "footer"
//     });
//
//     $('.slider').powerSlide();
//
//
//
//     $('document').ready(function () {
//
//         menu.menuExtend({
//             active: true,
//             menus: "nav",
//             items: ".custom-item"
//         });
//
//         $(".center").slick({
//             infinite: true,
//             centerMode: true,
//             slidesToShow: 21,
//             slidesToScroll: 1,
//             //respondTo: 'div',
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 10,
//                         slidesToScroll: 1,
//                         infinite: true,
//                         dots: true
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });
//
//
//     });
//
//
//
//
//
// })(jQuery);

