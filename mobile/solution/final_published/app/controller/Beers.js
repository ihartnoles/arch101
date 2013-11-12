/*
 * File: app/controller/Beers.js
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

Ext.define('FriendsWithBeer.controller.Beers', {
    extend: 'Ext.app.Controller',

    config: {
        models: [
            'Beer'
        ],
        stores: [
            'Beers'
        ],
        views: [
            'beer.Beer',
            'beer.List',
            'beer.FriendsList'
        ],

        refs: {
            searchByBeerView: 'beer'
        },

        control: {
            "beer > beerlist": {
                itemtap: 'onBeerListItemTap'
            },
            "searchByBeerView": {
                pop: 'onNavigationviewPop'
            },
            "beerfriendslist": {
                itemtap: 'onBeerFriendsListItemTap'
            }
        }
    },

    onBeerListItemTap: function(dataview, index, target, record, e, options) {
        if (!this.filteredStore) 
        this.filteredStore = Ext.create('FriendsWithBeer.store.Friends');

        this.filteredStore.clearFilter();
        this.filteredStore.filter('favoriteBeer',record.get('name'));
        this.filteredStore.load();

        dataview.up('navigationview').push({
            xtype:  'beerfriendslist',
            title: 'Friends with ' + record.get('name'),
            store: this.filteredStore
        });
    },

    onNavigationviewPop: function(navigationView, view, options) {

        if (view.getXTypes().indexOf('beerfriendslist')) {
            // debugger;
        }
        view.destroy();
    },

    onBeerFriendsListItemTap: function(dataview, index, target, record, e, options) {
        var store = Ext.getStore('Excuses');
        var itemNumber = Math.floor(Math.random() * (store.getCount()))

        dataview.up('navigationview').push({
            xtype: 'friendsdetail',
            title: record.get('firstName') + ' ' + record.get('lastName'),
            rec: record,
            excuse: store.getAt(itemNumber).get("EXCUSE")
        });
    }

});