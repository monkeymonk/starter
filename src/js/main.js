/**
 * Starter
 *
 * JS Document - ~/js/main.js - Main script
 *
 * @author Stéphan Zych <stephan@monkeymonk.be>
 * started at 2014-10-16
 */

(function (window) {
    'use strict';

    /**
     * Initialize scripts
     * @return {void}
     */
    var initialize = function () {
        // load plugins.css dependency
        $('<link/>', {
           rel: 'stylesheet',
           type: 'text/css',
           href: 'css/plugins.css'
        }).appendTo('head');

        console.log('# initialized');
    }; // initialize


    requirejs.config({
        baseUrl: 'js',
        paths: {
            'jquery': 'vendor/jquery.min'
        }
    });

    requirejs(['jquery', 'plugins', 'utils'], function ($) {
        $(document).ready(initialize);
    });

}) (window);
