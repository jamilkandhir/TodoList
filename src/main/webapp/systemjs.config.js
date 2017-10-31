"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'app'                       : 'app',
    "@angular"                  : "node_modules/@angular",
    "rxjs"                      : "node_modules/rxjs",
    'moment'                    : 'node_modules/moment',
    'ngx-bootstrap'             : 'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.js',
    
};
/** User packages configuration. */
var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'moment': { main: './moment.js', defaultExtension: 'js' },
    'ngx-bootstrap':                {},
    "@angular/core": {
        main: "bundles/core.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/common": {
        main: "bundles/common.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/compiler": {
        main: "bundles/compiler.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/forms": {
        main: "bundles/forms.umd.js"
    },
    "@angular/http": {
        main: "bundles/http.umd.js"
    },
    "@angular/platform-browser": {
        main: "bundles/platform-browser.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/platform-browser-dynamic": {
        main: "bundles/platform-browser-dynamic.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/router": {
        main: "bundles/router.umd.js" //use the ESM entry point for bundling tools
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    "@angular/core",
    "@angular/common",
    "@angular/compiler",
    "@angular/forms",
    "@angular/http",
    "@angular/router",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    // Thirdparty barrels.
    "rxjs",
    // App specific barrels.
    "app"
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: "index" };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        "@angular": "node_modules/@angular",
        "rxjs": "node_modules/rxjs",
        "main": "main.js"
    },
    packages: cliSystemConfigPackages
});
// Apply the user"s configuration.
System.config({ map: map, packages: packages });
