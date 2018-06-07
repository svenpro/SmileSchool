$(document).ready(function () {
    $('.sl').slick({

        arrows:false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 21,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },

        ]
    });
});