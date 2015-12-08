"use strict";

const _ = require("lodash");

module.exports = {
    name: "urls",
    processSite: function (site) {
        site.url = "/";
        _.each(site.albums, album => {
            album.url = "/" + album.id;
            _.each(album.images, image => {
                image.url = album.url + "/" + image.id;
            });
        });
        return Promise.resolve(site);
    }
};
