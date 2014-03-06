define([
    'dojo/_base/declare',

    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',

    'dojo/text!./templates/App.html',

    'esri/map',


    './Widget'
], function (
    declare,

    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,

    template,

    Map
    ) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        widgetsInTemplate: true,

        postCreate: function () {
            // summary:
            //      widget dom is ready but not appended to document body yet
            //      sets up map
            console.log('app/App:postCreate', arguments);
        
            map = new Map(this.mapDiv, {
                basemap: 'gray',
                zoom: 11,
                center: [-111.9, 40.7]
            });
        }
    });
});