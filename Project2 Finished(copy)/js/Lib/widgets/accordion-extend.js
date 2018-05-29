(function ($) {
    $.widget( "ui.menuExtend", $.ui.menu, {
      



 _create: function() {
     this._super();
            if ($('body').width() <= 1024){

                $('.burger_icon').show();

                this.element.addClass('custom_menu');             
                }

         
            }
       

       

       
      

    });
})(jQuery);