/*
 * File: app/view/Feedback.js
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

Ext.define('SpendingPortal.view.Feedback', {
    extend: 'Ext.window.Window',
    alias: 'widget.feedback',

    autoShow: true,
    height: 388,
    width: 436,
    layout: {
        type: 'fit'
    },
    title: 'Feedback',
    constrain: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    itemId: 'feedbackForm',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            height: 27,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            fieldLabel: 'Name',
                            items: [
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    name: 'firstname',
                                    fieldLabel: '',
                                    hideLabel: true,
                                    allowBlank: false,
                                    emptyText: 'First Name'
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    name: 'lastname',
                                    fieldLabel: 'Label',
                                    hideEmptyLabel: false,
                                    hideLabel: true,
                                    allowBlank: false,
                                    emptyText: 'Last Name'
                                }
                            ]
                        },
                        {
                            xtype: 'datefield',
                            anchor: '100%',
                            name: 'date',
                            fieldLabel: 'Date'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'email',
                            fieldLabel: 'Email',
                            allowBlank: false,
                            vtype: 'email'
                        },
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            name: 'chapter',
                            fieldLabel: 'Chapter',
                            displayField: 'label',
                            queryMode: 'local',
                            store: 'BookChapters',
                            valueField: 'id'
                        },
                        {
                            xtype: 'slider',
                            anchor: '100%',
                            name: 'rating',
                            value: 5,
                            fieldLabel: 'Rating<br />1=poor,10=great',
                            maxValue: 10,
                            minValue: 1
                        },
                        {
                            xtype: 'htmleditor',
                            anchor: '100% -175',
                            height: 150,
                            style: 'background-color: white;',
                            enableColors: false,
                            enableFont: false,
                            enableFontSize: false,
                            enableSourceEdit: false,
                            name: 'feedback',
                            fieldLabel: 'Feedback',
                            labelAlign: 'top'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var form = button.up('form');

                                form.submit({
                                    url: 'http://webapps.figleaf.com/arch101/dataservices/desktop/feedback.cfc?method=submitfeedback',
                                    success: function() {
                                        Ext.Msg.alert("Feedback Received","Thank you for your feedback!");
                                    },
                                    failure: function() {
                                        Ext.Msg.alert("Feedback failed","An error occurred while processing the request.");
                                    }
                                });
                            },
                            anchor: '100%',
                            formBind: true,
                            itemId: 'btnFeedbackSubmit',
                            margin: '5 0 0 0',
                            text: 'Submit'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});