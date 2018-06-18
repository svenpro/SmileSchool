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
                console.log(value.id);
                // element.find('td:last').html("<button class='address"+value.id+"'>Address</button>");
                $(".address"+value.id).on('click', function() {
                    console.log(value);
                    dialog.dialog( "open" );

                    var tableTR = $('<tr>');
                    $.each(value, function (key, row) {
                        var tableTd = '';
                        tableTd = $('<td>').text(row);
                        tableTR.append(tableTd);
                    });
                    var addrTable = "";
                    $(".tableDialog").append(tableTR);
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


            //
            // $.each(self.ajaxData, function(key, value) {
            //     element.find('td:last').html("<button class='address"+value.id+"'>Address</button>");
            //
            //     $(".address"+value.id).on('click', function() {
            //         console.log(row);
            //     });
            // });

        }


})
});
