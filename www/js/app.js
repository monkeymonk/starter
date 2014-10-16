/**
 * Starter - v0.0.0-1 - 2014-10-17
 * https://github.com/monkeymonk/starter
 * Copyright (c) 2014 Stéphan Zych
 */
!function(a){"use strict";var b=function(){$("<link/>",{rel:"stylesheet",type:"text/css",href:"css/plugins.css"}).appendTo("head"),console.log("# initialized",a.location.href.getUrlVars())};requirejs.config({baseUrl:"js",paths:{jquery:"vendor/jquery.min"}}),requirejs(["jquery","plugins","utils"],function(a){a(document).ready(b)})}(window);