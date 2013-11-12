/*
 * File: app/view/Earmarks.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SpendingPortal.view.Earmarks', {
    extend: 'Ext.window.Window',
    alias: 'widget.earmarks',

    autoShow: true,
    height: 250,
    width: 500,
    layout: {
        type: 'border'
    },
    closable: false,
    title: 'Please Select Sponsor(s)',
    constrain: true,
    maximizable: true,
    minimizable: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    itemId: 'earmarkGrid',
                    frameHeader: false,
                    columnLines: true,
                    store: 'Earmarks',
                    columns: [
                        {
                            xtype: 'numbercolumn',
                            width: 50,
                            dataIndex: 'ENACTED_YEAR',
                            text: 'Year',
                            format: '0000'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'AGENCY_TITLE',
                            flex: 1,
                            text: 'Agency'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'BUREAU_TITLE',
                            flex: 1,
                            text: 'Bureau'
                        },
                        {
                            xtype: 'templatecolumn',
                            tpl: [
                                '{[Ext.util.Format.usMoney(values.AMT_CONF * 1000)]}'
                            ],
                            width: 100,
                            align: 'right',
                            dataIndex: 'bool',
                            text: 'Amt'
                        }
                    ],
                    viewConfig: {

                    },
                    features: [
                        {
                            ftype: 'grouping',
                            groupHeaderTpl: [
                                'Sponsor: {name}'
                            ]
                        }
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {
                        listeners: {
                            selectionchange: {
                                fn: me.onRowselectionmodelSelectionChange,
                                scope: me
                            }
                        }
                    })
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    region: 'south',
                    split: true,
                    height: 150,
                    itemId: 'earmarkdetail',
                    styleHtmlContent: true,
                    tpl: [
                        'Sponsor: {SPONSOR.HONORIFIC} {SPONSOR.FIRSTNAME} {SPONSOR.LASTNAME} {SPONSOR.STATE}<br />',
                        '<p>{EARMARK_DESCRIPTION}</p>'
                    ],
                    autoScroll: true,
                    collapseDirection: 'bottom',
                    collapsed: true,
                    collapsible: true,
                    title: 'Details'
                }
            ]
        });

        me.callParent(arguments);
    },

    onRowselectionmodelSelectionChange: function(model, selected, options) {
        var detailView = Ext.ComponentQuery.query('#earmarkdetail')[0];
        detailView.update(selected[0].data);
    }

});