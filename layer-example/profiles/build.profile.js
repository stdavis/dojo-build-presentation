var profile = {
    // This needs to be set so that the build system knows where to find the packages
    // relative to this file
    basePath: '../src/',
    
    action: 'release',

    // optimizer engine for layer files
    layerOptimize: 'closure',

    // optimizer engine for all non-layer modules
    optimize: 'closure',

    // force to acme for now since that's what ESRI uses
    selectorEngine: 'acme',

    // build everything into one file
    layers: {
        'dojo/dojo': {
            include: [
                'dojo/i18n', // this prevents a bunch of extra requests trying to get localization
                'app/run'
            ],
            customBase: true, // don't include all of the globals in dojo/main
            boot: true // include AMD loader
        }
    },
    // This helps prevents extra requests for the widget templates even though they
    // are interned into the layer file. Ref: https://gist.github.com/stdavis/9347356
    userConfig: {
        packages: ['app', 'dojo', 'dijit']
    }
};