(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: false,
        },

        _create: function () {
            this._super();

            if (this.options.active) {
                console.log('its menu extend');


                $( ".sub-menu" ).addClass("menu-extend");

                $(".menu-extend").removeClass("sub-menu ui-menu ui-widget ui-widget-content ui-front menu-extend");

                const subMenu = $("#sub-menu1");

                $(".ui-menu-item-wrapper").hover(function(){
                    subMenu.css({
                        "display": "flex",
                        "flex-direction": "column",
                        "position": "absolute",
                        "left": "440px",
                        "top": "-80px",
                        "margin": "7px",
                        "align-text": "center"
                    });
                },
                    function(){
                    subMenu.mouseout(function(){
                        subMenu.css("display","none");
                    });
                    toggle();
                }
                );

                let toggle = function(){
                    if($(".ui-menu-item-wrapper").hasClass('ui-state-active')){
                        subMenu.css("display","none");
                    }
                }

                $("#sub-menu1 li").css({
                    "margin": "2px",
                    "width": "50px",
                });

                // $(".menu-extend").hover.css({
                //     "display": "flex",
                //     "flex-direction": "column",
                //     "left": "440px",
                //     "top": "-135px",
                //     "align-items": "center",
                // });
            }
        },


    });

})(jQuery);