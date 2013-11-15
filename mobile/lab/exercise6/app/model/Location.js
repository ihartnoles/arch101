/*
 * File: app/model/Location.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('FriendsWithBeer.model.Location', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.JsonP'
    ],

    config: {
        fields: [
            {
                name: 'idlocation'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            }
        ],
        proxy: {
            type: 'jsonp',
            url: 'http://localhost/cfjqm/walksolution/final/data/subgenius.cfc?method=getlocations',
            reader: {
                type: 'json'
            }
        }
    }
});