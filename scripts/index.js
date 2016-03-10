"use strict";

/*global document*/

var domready = require("domready");
var imagesloaded = require("imagesloaded");

function resizeAndShow(image) {
    function px(value) {
        return value + "px";
    }

    var container = document.getElementById("photo-container");

    if ((image.clientWidth / image.clientHeight) >= (container.clientWidth / container.clientHeight)) {
        image.style.width = px(container.clientWidth);
        image.style.height = px(image.clientHeight * (container.clientWidth / image.clientWidth));
    }
    else {
        image.style.width = px(image.clientWidth * (container.clientHeight / image.clientHeight));
        image.style.height = px(container.clientHeight);
    }

    image.style.position = "absolute";
    image.style.top = px((container.clientHeight - image.clientHeight) / 2);
    image.style.left = px((container.clientWidth - image.clientWidth) / 2);

    image.className = "visible";
}

domready(function () {
    imagesloaded("#photo", function (instance) {
        if (instance.images.length === 1) {
            return resizeAndShow(instance.images[0].img);
        }
    });
});
