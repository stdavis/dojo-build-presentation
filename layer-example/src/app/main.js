define([
    'app/App',

    'dojo/dom',


    'dojo/domReady!'
], function(
    App,

    dom
    ) {
    var app = new App({}, dom.byId('appDiv'));
    app.startup();
});