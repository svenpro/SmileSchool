(function ($) {

    $.widget( "ui.menuExtend", $.ui.menu, {

        options: {
            active: true,
        },

        _create: function () {
            this._super();

            if (this.options.active) {
                console.log('its menu extend');


                $( ".sub-menu" ).addClass("menu-extend");

                $(".menu-extend").removeClass("sub-menu ui-menu ui-widget ui-widget-content ui-front menu-extend");

                $(".ui-menu-item-wrapper").hover(function(){
                    $("#sub-menu1").css({
                        "display": "flex",
                        "flex-direction": "column",
                        "position": "absolute",
                        "left": "440px",
                        "top": "-80px",
                        "margin": "5px",
                        "align-text": "center"
                    });
                },
                    function(){
                    $("#sub-menu1").mouseout(function(){
                        $("#sub-menu1").css("display","none");
                    });
                    toggle();
                }
                );

                let toggle = function(){
                    if($(".ui-menu-item-wrapper").hasClass('ui-state-active')){
                        $("#sub-menu1").css("display","none");
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