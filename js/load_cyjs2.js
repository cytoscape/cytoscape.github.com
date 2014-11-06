/**
 * Created by kono on 2014/11/06.
 */

$(function () {
    'use strict';

    var NETWORK_FILE = 'data/gal.cyjs';
    var KEGG_FILE = 'data/kegg.cyjs';
    var VISUAL_STYLE_FILE = 'data/new_style.json';

    var STYLE_NAME = 'yeast_style';
    var KEGG_STYLE_NAME = 'KEGG Style';

    console.log('Network rendering start...');

    var options = {

        showOverlay: false,
        minZoom: 0.01,
        maxZoom: 200,

        layout: {
            name: 'preset'
        },

        ready: function () {
            var cy = this;
            cy.load(networkData.elements);
            applyVisualStyle(cy, STYLE_NAME);
        }
    };

    var kegg_options = {

        showOverlay: false,
        minZoom: 0.01,
        maxZoom: 200,

        layout: {
            name: 'preset'
        },

        ready: function () {
            var cy = this;
            cy.load(keggData.elements);
            applyVisualStyle(cy, KEGG_STYLE_NAME);
        }
    };

    function applyVisualStyle(cy, styleName) {
        var visualStyle;
        var visualStyles = {};
        for (var i = 0; i < vs.length; i++) {
            visualStyle = vs[i];
            var title = visualStyle.title;
            visualStyles[title] = visualStyle;
        }
        cy.style().fromJson(visualStyles[styleName].style).update();

    }

    var networkData = {};
    var keggData = {};
    var vs = {};

    // Load data files.
    $.getJSON(VISUAL_STYLE_FILE, function (visualStyle) {
        vs = visualStyle;
        $.getJSON(NETWORK_FILE, function (network) {
            networkData = network;
            $('.cyjs2').cytoscape(options);
        });

        $.getJSON(KEGG_FILE, function (network) {
            keggData = network;
            $('.cyjs3').cytoscape(kegg_options);
        });
    });

});
