/*
 * File: app/view/SponsorChart.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SpendingPortal.view.SponsorChart', {
    extend: 'Ext.window.Window',
    alias: 'widget.sponsorchart',

    autoShow: true,
    height: 320,
    width: 500,
    constrain: true,
    layout: {
        type: 'fit'
    },
    closable: false,
    title: 'Compare Expenditures',
    maximizable: true,
    minimizable: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'chart',
                    height: 250,
                    width: 400,
                    animate: true,
                    insetPadding: 20,
                    store: 'ChartData',
                    axes: [
                        {
                            type: 'Category',
                            fields: [
                                'label'
                            ],
                            label: {
                                rotate: {
                                    degrees: 45
                                },
                                renderer: function(s) {
                               return Ext.String.ellipsis(s,10);    
                             }
                            },
                            title: 'Representative',
                            position: 'bottom'
                        },
                        {
                            type: 'Numeric',
                            fields: [
                                'value'
                            ],
                            label: {
                                renderer: function(v) {
                                    return Ext.util.Format.currency(v,null,0);
                                }
                            },
                            title: 'Expenditures ($000)',
                            decimals: 0,
                            minimum: 0,
                            position: 'left'
                        }
                    ],
                    series: [
                        {
                            type: 'column',
                            label: {
                                display: 'insideEnd',
                                field: 'value',
                                color: '#333',
                                'text-anchor': 'middle'
                            },
                            xField: 'label',
                            yField: 'value'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});