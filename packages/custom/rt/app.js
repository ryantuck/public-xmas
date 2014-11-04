'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Rt = new Module('rt');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Rt.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Rt.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Rt.menus.add({
    title: 'rt example page',
    link: 'rt example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Rt.aggregateAsset('css', 'rt.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Rt.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Rt.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Rt.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Rt;
});
