/*
 * File: app/model/Friend.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('FriendsWithBeer.model.Friend', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        fields: [
            {
                name: 'firstName'
            },
            {
                name: 'lastName'
            },
            {
                name: 'address'
            },
            {
                name: 'zip'
            },
            {
                name: 'email'
            },
            {
                name: 'phone'
            },
            {
                name: 'favoriteBeer'
            },
            {
                name: 'lat'
            },
            {
                name: 'lng'
            },
            {
                name: 'distance'
            }
        ],
        proxy: {
            type: 'localstorage',
            id: 'FriendsWithBeerContacts'
        },
        validations: [
            {
                type: 'presence',
                field: 'firstName'
            },
            {
                type: 'presence',
                field: 'lastName'
            },
            {
                type: 'presence',
                field: 'address'
            },
            {
                type: 'presence',
                field: 'zip'
            },
            {
                type: 'presence',
                field: 'email'
            },
            {
                type: 'presence',
                field: 'phone'
            },
            {
                type: 'email',
                field: 'email'
            }
        ]
    }
});