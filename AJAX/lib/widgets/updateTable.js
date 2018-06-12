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
        _create: function () {
            return this._super();
        }
    })
});
