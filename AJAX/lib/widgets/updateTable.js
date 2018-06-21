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

        },

        callToAjax: function () {
            var self = this;

            if (self.ajaxRequest.init.length) {
                $.ajax({
                    url: self.ajaxRequest.init,
                    method: 'GET',
                    cache: false,
                    success: function (data) {
                        if (typeof(data) == 'object') {
                            self.ajaxRequest.response = data;
                            self.onLoadAfter();
                            self._refresh();
                            self.ajaxData = data;
                            self.newAddress();
                        }
                    },
                    statusCode: {
                        403: function() {
                            alert( "page forbidden" );
                        }
                    }
                });
            }
        },

        _refresh: function () {
            var element = this.element;
            var self = this;
            if (this.columnName.length != 0) {
                $.each(this.columnName, function(key, row) {
                    var tableTR = $('<tr>');
                    $.each(row, function(key, value){
                        var tableTD = '';
                        if ($.inArray(key, self.allowedColumn) >= 0) {
                            tableTD = $('<td>').text(value);
                            tableTR.append(tableTD);
                        }
                    });
                    element.find('tbody').append(tableTR);
                    element.find('td:last').html("<button class='address"+row.id+"'>Address</button><button class='delete"+row.id+"'>Delete</button>");
                });
            }

        },

        newAddress: function () {
            var self = this;
            var dialog = $("#dialog");
            $.each(self.ajaxData, function(key, value) {
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

            $("#dialog").dialog({
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
