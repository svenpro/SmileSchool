(function ($) {
    $.widget( "ui.accordionExtend", $.ui.accordion, {
        options: {
            event: 'mouseenter',
            titleColor: 'red'
        },

        _create: function () {
            this._super();
            console.log('Cu!');
            this.setTitleColor(this.options.titleColor);
        },

        setTitleColor: function (color) {
            $(this.options.header).css('background', color);
        },

        _refresh: function(  ) {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive( options.active );
            this._addClass( this.active, "trolo", "ui-state-active" )
                ._removeClass( this.active, "ui-accordion-header-collapsed" );
            this._addClass( this.active.next(), "ui-accordion-content-active" );
            this.active.next().show();

            this.headers
                .attr( "role", "tab" )
                .each( function() {
                    var header = $( this ),
                        headerId = header.uniqueId().attr( "id" ),
                        panel = header.next(),
                        panelId = panel.uniqueId().attr( "id" );
                    header.attr( "aria-controls", panelId );
                    panel.attr( "aria-labelledby", headerId );
                } )
                .next()
                .attr( "role", "tabpanel" );

            this.headers
                .not( this.active )
                .attr( {
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                } )
                .next()
                .attr( {
                    "aria-hidden": "true"
                } )
                .hide();

            // Make sure at least one header is in the tab order
            if ( !this.active.length ) {
                this.headers.eq( 0 ).attr( "tabIndex", 0 );
            } else {
                this.active.attr( {
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                } )
                    .next()
                    .attr( {
                        "aria-hidden": "false"
                    } );
            }

            this._createIcons();

            this._setupEvents( options.event );

            if ( heightStyle === "fill" ) {
                maxHeight = parent.height();
                this.element.siblings( ":visible" ).each( function() {
                    var elem = $( this ),
                        position = elem.css( "position" );

                    if ( position === "absolute" || position === "fixed" ) {
                        return;
                    }
                    maxHeight -= elem.outerHeight( true );
                } );

                this.headers.each( function() {
                    maxHeight -= $( this ).outerHeight( true );
                } );

                this.headers.next()
                    .each( function() {
                        $( this ).height( Math.max( 0, maxHeight -
                            $( this ).innerHeight() + $( this ).height() ) );
                    } )
                    .css( "overflow", "auto" );
            } else if ( heightStyle === "auto" ) {
                maxHeight = 0;
                this.headers.next()
                    .each( function() {
                        var isVisible = $( this ).is( ":visible" );
                        if ( !isVisible ) {
                            $( this ).show();
                        }
                        maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
                        if ( !isVisible ) {
                            $( this ).hide();
                        }
                    } )
                    .height( maxHeight );
            }
           console.log('Hi _refresh');
        },

    });
})(jQuery);