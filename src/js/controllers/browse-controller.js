/*global define*/
define([
    'controllers/base/controller',
    'views/browse-view'
], function (Controller, View) {

    'use strict';

    var BrowseController = Controller.extend({

        show: function (params) {

            this.view = new View({
                region: 'main'
            });
        }
    });

    return BrowseController;
});
