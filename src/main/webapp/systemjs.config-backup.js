(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        '@angular':                   'node_modules/@angular',
        'rxjs':                       'node_modules/rxjs',
        'ag-grid-angular':                'node_modules/ag-grid-angular',
        'ag-grid':                    'node_modules/ag-grid',
        'filesaver':                  'node_modules/filesaver.js',
        'angular2-google-maps':       'node_modules/angular2-google-maps'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'ag-grid-angular':                { defaultExtension: "js" },
        'ag-grid':                    { defaultExtension: "js" },
        'filesaver':                  { defaultExtension: 'js', main: 'FileSaver.js', format: 'cjs'},
        'angular2-google-maps':       { defaultExtension: 'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'upgrade'

    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        if(pkgName === 'router') {
            packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
        } else {
            packages['@angular/' + pkgName] = {main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
        }
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
