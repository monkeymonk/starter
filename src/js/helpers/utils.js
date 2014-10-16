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
    // prototype extends
    Array.prototype.compare = function (arr) {
        if (this.length != arr.length) {
            return false;
        }

        for (var i = 0; i < arr.length; i++) {
            if (this[i].compare) {
                if (!this[i].compare(arr[i])) {
                    return false;
                }
            }

            if (this[i] !== arr[i]) {
                return false;
            }
        }

        return true;
    }; // Arr.compare(Arr2);

    Array.prototype.clear = function () {
        this.length = 0;

        return this;
    }; // Arr.clear();

    Array.prototype.remove = function (from, to) {
        var t = this.slice((to || from) + 1 || this.length);

        this.length = from < 0 ? this.length + from : from;

        return this.push.apply(this, t);
    }; // Arr.remove(1[, 3]);

    Array.prototype.shuffle = function () {
        var c = this.slice(0);

        for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);

        if (this.compare(c)) {
            this.shuffle();
        }

        return this;
    }; // Arr.shuffle();


    String.prototype.camelize = function () {
        return this.replace(/^-ms-/, 'ms-').replace(/-([a-z]|[0-9])/ig, function (a, l) {
            return (l + '').toUpperCase();
        });
    }; // Str.camelize();

    String.prototype.capitalize = function () {
        return this.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
            return p1 + p2.toUpperCase();
        });
    }; // Str.capitalize();

    String.prototype.escapeHTML = function () {
        return ('' + this).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    }; // Str.escapeHTML();

    String.prototype.getUrlVars = function () {
        var arr = new Array();

        var parts = this.replace(/[?&]+([^=&]+)(=[^&]*)?/gi, function (m, key, value) {
            arr[key] = (value === undefined) ? true : value.substring(1);
        });

        return arr;
    }; // var Arr = Str.getUrlVars();

    String.prototype.getAnchor = function () {
        return this.slice(this.lastIndexOf('#') + 1);
    }; // Var Str2 = Str.getAnchor();


    $.utils = {};
}));
