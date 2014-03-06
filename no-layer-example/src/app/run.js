(function () {
    config = {
        baseUrl: './',
        packages: [
            'dojo',
            'dijit',
            'dojox',
            'app'
        ]
    };
    require(config, ['app']);
})();
