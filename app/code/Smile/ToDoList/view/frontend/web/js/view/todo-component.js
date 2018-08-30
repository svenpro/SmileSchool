/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({

        todos: ko.observableArray([]),

        task: ko.observable(""),

        ToDo: function (stuff) {
            this.task = stuff;
        },

        addNewToDo: function () {


            this.todos.push(new this.ToDo($('.txt').val()));
            $('.txt').val('');
           
        },

        removeToDo: function (event) {
            console.log(event);
            // this.todos.remove(event);
        },

        initialize: function () {
            this._super();
                       
        }


    });
});
