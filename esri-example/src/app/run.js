(function () {
    // let the loader know where to look for packages
    config = {
        baseUrl: './',
        packages: [
            'dojo',
            'dijit',
            'dojox',
            'app',
            'esri'
        ]
    };
    require(config, ['app']);
})();
