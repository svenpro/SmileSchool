/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({

        renderData: function() {
            return this.data;
        },

        initialize: function () {
            this._super();
            console.log('inited!');
            console.log(this);
        }


    });
});
