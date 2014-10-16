/**
 * Starter
 *
 * JS Document - ~/js/helpers/utils.js - Utils scripts
 *
 * @author Stéphan Zych <stephan@monkeymonk.be>
 * started at 2014-10-16
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.utils = {
        test: function () {
            console.log("---- test");
        } // test
    };
}));
