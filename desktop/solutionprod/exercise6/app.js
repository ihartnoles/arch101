/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    requires: [
        'Ext.window.MessageBox'
    ],
    models: [
        'Earmark',
        'ChartDatum'
    ],
    stores: [
        'Earmarks',
        'States',
        'ChartData'
    ],
    views: [
        'Main',
        'Sponsors',
        'Earmarks',
        'SponsorChart'
    ],
    autoCreateViewport: true,
    name: 'SpendingPortal',
    controllers: [
        'Sponsors'
    ],

    launch: function() {
        Ext.ComponentQuery.query('#centerpanel')[0].add(
        { xtype: 'sponsors', x:5, y:20  },
        { xtype: 'earmarks', x: 500, y: 20},
        { xtype: 'sponsorchart', x:500, y: 300}
        );
    }

});