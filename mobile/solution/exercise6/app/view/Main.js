/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('FriendsWithBeer.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',

    requires: [
        'FriendsWithBeer.view.Introduction',
        'FriendsWithBeer.view.beer.List'
    ],

    config: {
        items: [
            {
                xtype: 'intro',
                title: 'About',
                iconCls: 'info'
            },
            {
                xtype: 'container',
                title: 'Friends',
                iconCls: 'user_list',
                layout: {
                    animation: 'fade',
                    type: 'card'
                },
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        itemId: 'friendstoolbar',
                        title: 'Friends with Beer',
                        items: [
                            {
                                xtype: 'button',
                                align: 'right',
                                itemId: 'btnAddFriend',
                                iconCls: 'user_add',
                                iconMask: true
                            },
                            {
                                xtype: 'button',
                                hidden: true,
                                itemId: 'btnBackToFriendList',
                                ui: 'back',
                                text: 'Back'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        itemId: 'friendsList',
                        emptyText: 'No Records Found',
                        itemTpl: [
                            '{lastName}, {firstName}<br />{favoriteBeer}'
                        ],
                        store: 'Friends',
                        grouped: true,
                        onItemDisclosure: true,
                        indexBar: true
                    }
                ]
            },
            {
                xtype: 'beerlist',
                title: 'Beers',
                iconCls: 'search'
            }
        ],
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center',
                type: 'hbox'
            }
        }
    }

});