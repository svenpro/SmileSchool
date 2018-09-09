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
            role: ''
        },

        _create: function () {

            var role = this.options.role;

            if (role === "minus") {
                console.log("minus");
            } else if (role === "plus") {
                console.log("plus");
            }

            this._clickButtonFunc();

            // $('[data-role="plus"]').click(function(e){
            //     e.preventDefault();
            //
            //     var currentVal = parseInt($("input[name='qty']").val());
            //     if (!isNaN(currentVal)) {
            //         $("input[name='qty']").val(currentVal + 1);
            //     } else {
            //         $("input[name='qty']").val(0);
            //     }
            // });
            //
            // $('[data-role="minus"]').click(function(e){
            //     e.preventDefault();
            //
            //     var currentVal = parseInt($("input[name='qty']").val());
            //
            //     if (currentVal === 0) {
            //         $("input[name='qty']").val(0);
            //     } else if (!isNaN(currentVal)) {
            //         $("input[name='qty']").val(currentVal - 1);
            //     } else {
            //         $("input[name='qty']").val(0);
            //     }
            // });


        },

        _clickButtonFunc: function () {
            var role = this.options.role;
            var currentVal;

            $('.button-circle').click(function (e) {
                e.preventDefault();

                if (this.dataset.role === "minus") {
                    currentVal = parseInt($("input[name='qty']").val());

                    if (currentVal === 0) {
                        $("input[name='qty']").val(0);
                    } else if (!isNaN(currentVal)) {
                        $("input[name='qty']").val(currentVal - 1);
                    } else {
                        $("input[name='qty']").val(0);
                    }
                } else if (this.dataset.role === "plus") {
                    currentVal = parseInt($("input[name='qty']").val());

                    if (!isNaN(currentVal)) {
                        $("input[name='qty']").val(currentVal + 1);
                    } else {
                        $("input[name='qty']").val(0);
                    }
                }
            });
        }


    });

    return $.smile.qtyAddWidget;
});
