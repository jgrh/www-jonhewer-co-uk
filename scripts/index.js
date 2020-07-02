"use strict";

/*global document*/

var domReady = require("domready");

domReady(function() {
    document.getElementById("nav-toggle").addEventListener("click", function() {
        document.getElementById("nav-menu").classList.toggle("expand");
    });
});
