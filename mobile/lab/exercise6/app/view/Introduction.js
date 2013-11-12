/*
 * File: app/view/Introduction.js
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

Ext.define('FriendsWithBeer.view.Introduction', {
    extend: 'Ext.Container',
    alias: 'widget.intro',

    requires: [
        'Ext.TitleBar',
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'About Friends with Beer'
            },
            {
                xtype: 'container',
                html: '<div id="beerintro"> <img src="../../resources/images/beer.jpg"> <p>In these uncertain economic times you need to keep your friends close, and your beer even closer. </p><p>This app quickly identifies your pals who are most likely to have your favorite brew on ice. Then it auto-generates a bogus excuse for you coming to visit, dials your friend, and lets the good times roll!</p>  <p>No friends? No problem! Our app contains a video of "virtual" friends drinking, so you\'ll never need to drink alone again!</p>     </div>',
                itemId: 'content',
                styleHtmlContent: true
            },
            {
                xtype: 'button',
                itemId: 'noShow',
                margin: '5 10 5 10',
                text: 'Do Not Show Again'
            }
        ]
    }

});