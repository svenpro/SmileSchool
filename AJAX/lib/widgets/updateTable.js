define([
    'jquery',
    'jqueryUI',
    'updateTable'
],function($) {
    $.widget('smile.updateTable', $.smile.tableSmile, {

        /**
         * add dialog window to body
         *
         * @returns {*}
         * @private
         */
        ajaxData: [],

        _create: function () {

            this._super();
            this.callAjax();

        },

        callAjax: function () {
            var self = this;
            var element = this.element;

            $.ajax({
                url: element.data('ajax').length ? element.data('ajax') : '',
                method: 'GET',
                cache: false,
                success: function (data) {
                    if (typeof(data) == 'object') {
                        self.ajaxData = data;
                        self.newAddress();
                    }
                },
                statusCode: {
                    403: function () {
                        alert("page forbidden");
                    }
                }
            });
        },

        newAddress: function () {
            var self = this;
            var element = this.element;
            var dialog = $("#dialog");

            $.each(self.ajaxData, function(key, value) {
                // element.find('td:last').html("<button class='address"+value.id+"'>Address</button>");
                $(".address"+value.id).on('click', function() {
                    dialog.find('tbody').html("");
                    dialog.dialog( "open" );
                    var tabTR = $('<tr>');
                    $.each(value.address, function (key, value) {
                        var content = '';
                        content += '<tr><td>'+ key +'</td><td>'+ value +'</td></tr>';
                        tabTR.append('<td>'+ key +'</td><td>'+ value +'</td>' );

                        dialog.find('tbody').append(content);
                    });
                    dialog.find('tr:last').html("");
                    $.each(value.address.geo, function (key, value) {
                        dialog.find('tbody').append('<tr><td>'+key+'</td><td>'+value+'</td></tr>');
                    });
                });

                $(".delete"+value.id).on('click', function() {
                    $(this).closest('tr').html("");
                });
            });



            dialog.dialog({
                autoOpen: false,
                show: {
                    effect: "blind",
                    duration: 500
                },
                hide: {
                    effect: "explode",
                    duration: 500
                }
            });
        }

})
});
