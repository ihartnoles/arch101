/*
 * File: app/controller/Sponsors.js
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

Ext.define('SpendingPortal.controller.Sponsors', {
    extend: 'Ext.app.Controller',

    models: [
        'Sponsor'
    ],
    stores: [
        'Sponsors'
    ],

    refs: [
        {
            ref: 'earmarksViewer',
            selector: 'earmarks'
        }
    ],

    onStateFilterChange: function(field, newValue, oldValue, eOpts) {

        var store = Ext.getStore('Sponsors');

        if (typeof newValue === 'string') {
            store.clearFilter(true);   
        } else {
            store.filterBy(function(rec) {

                if (Ext.Array.indexOf(newValue,rec.get('STATE')) >= 0)
                return true;
                else
                return false;
            });
        }
    },

    onSponsorsgridSelectionChange: function(model, selected, eOpts) {
        var aSponsorIds = [];
        var lastNames = [];
        for (var i=0; i<selected.length; i++) {
            lastNames.push(selected[i].get("LASTNAME"));
            aSponsorIds.push(selected[i].get('IDSPONSOR'));
        }

        this.getEarmarksViewer().setTitle('Earmarks for ' +   lastNames.join(','));


        Ext.getStore('Earmarks').clearFilter(true);
        Ext.getStore('Earmarks').filter([
        {property: 'IDSPONSOR', value: aSponsorIds.join(',')}
        ]);

        Ext.getStore('ChartData').clearFilter(true);
        Ext.getStore('ChartData').filter([
        {property: 'IDSPONSOR', value: aSponsorIds.join(',')}
        ]);
    },

    init: function(application) {
        this.control({
            "#stateFilter": {
                change: this.onStateFilterChange
            },
            "#sponsorsgrid": {
                selectionchange: this.onSponsorsgridSelectionChange
            }
        });
    }

});
