/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/ui',
    'mage/menu'
], function ($) {
    'use strict';

    /**
     * Menu Widget - this widget is a wrapper for the jQuery UI Menu
     */
    $.widget('smile.customMenu', $.mage.menu, {
        options: {
            someOpt: 'lalal'
        },

        _create: function () {
            this._super();
            // console.log('Lol1');
            this.options.someOpt;
            this._customMethod();

        },

        _customMethod: function() {
            // console.log($(this.element).next('.dsd'));
        },

        _toggleMobileMode: function () {
            var subMenus;

            $(this.element).off('mouseenter mouseleave');
            this._on({
                /**
                 * @param {jQuery.Event} event
                 */
                'click .ui-menu-item:has(a)': function (event) {
                    var target;

                    event.preventDefault();
                    target = $(event.target).closest('.ui-menu-item');

                    if (!target.hasClass('level-top') || !target.has('.ui-menu').length) {
                        window.location.href = target.find('> a').attr('href');
                    }
                },

                /**
                 * @param {jQuery.Event} event
                 */
                'click .ui-menu-item:has(.ui-state-active)': function (event) {
                    this.collapseAll(event, true);
                }
            });

            subMenus = this.element.find('.level-top');
            $.each(subMenus, $.proxy(function (index, item) {
                var category = $(item).find('> a span').not('.ui-menu-icon').text(),
                    categoryUrl = $(item).find('> a').attr('href'),
                    menu = $(item).find('> .ui-menu');

                this.categoryLink = $('<a>')
                    .attr('href', categoryUrl)
                    .text($.mage.__('All ') + category);

                this.categoryParent = $('<li>')
                    .addClass('ui-menu-item all-category')
                    .html(this.categoryLink);

                if (menu.find('.all-category').length === 0) {
                    menu.prepend(this.categoryParent);
                }

            }, this));
        },
    });

    $.widget('smile.customNavigation', $.mage.navigation, {
        _create: function () {
            this._super();
            // console.log('Lol2');
        }
    });

    return {
        customMenu: $.smile.customMenu,
        customNavigation: $.smile.customNavigation
    };
});
