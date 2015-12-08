"use strict";

module.exports = {
    name: "attributes",
    processImage: function (image) {
        image.year = (new Date(image.exif.CreateDate * 1000)).getFullYear();
        return Promise.resolve(image);
    }
};
