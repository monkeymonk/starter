/**
 * Starter - v0.0.0-1 - 2014-10-17
 * https://github.com/monkeymonk/starter
 * Copyright (c) 2014 Stéphan Zych
 */
!function(){"use strict";var a=function(){$("<link/>",{rel:"stylesheet",type:"text/css",href:"css/plugins.css"}).appendTo("head"),console.log("# initialized")};requirejs.config({baseUrl:"js",paths:{jquery:"vendor/jquery.min"}}),requirejs(["jquery","plugins","utils"],function(b){b(document).ready(a)})}(window);