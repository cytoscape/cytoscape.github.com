/**
 * Created by kono on 2014/02/18.
 */
$(function () {
    'use strict';

    var NETWORK_FILE = 'data/sample1.cyjs';
    var VISUAL_STYLE_FILE = 'data/sample1_vs.json';

    var DEFAULT_VISUAL_STYLE = 'Flat2';

    console.log('Network rendering start...');
    var cy;

    var options = {

        showOverlay: false,
        minZoom: 0.01,
        maxZoom: 200,

        layout: {
            name: 'preset'
        },

        ready: function () {
            cy = this;
            cy.load(networkData.elements);
            applyVisualStyle(cy);
        }
    };

    function applyVisualStyle(cy) {
        var visualStyle;
        var visualStyles = {};
        for(var i=0; i<vs.length; i++) {
            visualStyle = vs[i];
            var title = visualStyle.title;
            visualStyles[title] = visualStyle;
        }
        cy.style().fromJson(visualStyles[DEFAULT_VISUAL_STYLE].style).update();

    }

    var networkData = {};
    var vs = {};

    // Load data files.
    $.getJSON(VISUAL_STYLE_FILE, function(visualStyle) {
        vs = visualStyle;
        $.getJSON(NETWORK_FILE, function(network) {
            networkData = network;
            $('.cyjs').cytoscape(options);
        });
    });

    $('#js-section').one('mouseenter ontouchstart ontouch', function() {
        var selected = cy.$('#187, #196');
        $(".cyjs").animate({
            opacity: 1.0
        }, 900, function() {
            // Animation complete.
            cy.animate({

                fit: {
                    eles: selected,
                    padding: 20
                }
            }, {
                duration: 1000
            });
        });

    });

});