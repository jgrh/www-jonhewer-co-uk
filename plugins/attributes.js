"use strict";

const Promise = require("bluebird");

let gm = require("gm");
Promise.promisifyAll(gm.prototype);

module.exports = {
    name: "attributes",
    processImage: async function(image) {
        image.year = (new Date(image.exif.CreateDate * 1000)).getFullYear();

        const size = await gm(image.path).sizeAsync();
        if (size.width > size.height) {
            image.orientation = "landscape";
        } else {
            image.orientation = "portrait";
        }

        return Promise.resolve(image);
    }
};
