/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget('smile.qtyAddWidget',  {
        options: {
            buttonClass: '.button-circle',
            elemnetName: 'input[name=\'qty\']',
            minus: 'but-minus',
            plus: 'but-plus',
        },

        _create: function () {

            console.log('init qty');
            this._clickButtonFunc();

        },

        _clickButtonFunc: function () {
            var elName = this.options.elemnetName;
            var minus = this.options.minus;
            var plus = this.options.plus;

            $(this.options.buttonClass).on("click", function (e) {
                e.preventDefault();

                var self = this;
                var currentVal = parseInt($(elName).val());


                if (self.classList[1] === minus) {
                    if (currentVal === 0) {
                        $(elName).val(0);
                    } else if (!isNaN(currentVal)) {
                        $(elName).val(currentVal - 1);
                    } else {
                        $(elName).val(0);
                    }
                } else if (self.classList[1] === plus) {
                    if (!isNaN(currentVal)) {
                        $(elName).val(currentVal + 1);
                    } else {
                        $(elName).val(0);
                    }
                }
            });
        }


    });

    return $.smile.qtyAddWidget;
});
