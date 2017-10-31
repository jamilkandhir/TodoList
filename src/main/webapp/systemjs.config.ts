"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */

const map: any = {
    'app'                       :               'app', // 'dist',
    "@angular"                  :               "node_modules/@angular",
    "rxjs"                      :               "node_modules/rxjs",
    'ag-grid-angular'           :               "node_modules/ag-grid-angular",
    'ag-grid'                   :               "node_modules/ag-grid",
    'filesaver'                 :               "node_modules/filesaver.js",
    'angular2-google-maps/core' :               'node_modules/angular2-google-maps/core/core.umd.js',
    'moment'                    :               'node_modules/moment',
    'ngx-bootstrap'             :               'node_modules/ngx-bootstrap/bundles/ngx-bootstrap.umd.js',
    'angular2-highcharts'       :               'node_modules/angular2-highcharts',

      // This mapping is for loading Highcharts static API and Highcharts modules
    'highcharts'                :               'node_modules/highcharts',

};
/** User packages configuration. */
const packages: any = {
    'app'                           :                { main: 'main.js',  defaultExtension: 'js' },
    'ag-grid-angular'               :                { defaultExtension: "js" },
    'ag-grid'                       :                { defaultExtension: "js" },
    'filesaver'                     :                { defaultExtension: 'js', main: 'FileSaver.js', format: 'cjs'},
    'angular2-google-maps'          :                { defaultExtension: 'js'},
    'moment'                        :                { main: './moment.js', defaultExtension: 'js' },
    'angular2-highcharts'           :                { main: './index.js', defaultExtension: 'js'},
    'highcharts'                    :                { main: './highcharts.src.js'},
    'ngx-bootstrap'                 :                {},
    "@angular/core"                 :                { 
                                                        main: "bundles/core.umd.js" //use the ESM entry point for bundling tools
                                                     },
    "@angular/common"               :                {
                                                        main: "bundles/common.umd.js" //use the ESM entry point for bundling tools
                                                     },
    "@angular/compiler"             : {
        main: "bundles/compiler.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/forms"                : {
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
    },
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
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
    /** @cli-barrel */
];
const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
    cliSystemConfigPackages[barrelName] = { main: "index" };
});

/** Type declaration for ambient System. */
declare var System: any;

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
System.config({ map, packages });
