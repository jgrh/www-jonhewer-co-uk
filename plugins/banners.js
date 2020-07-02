"use strict";

const _ = require("lodash");

module.exports = {
    name: "banners",
    processSite: async function(site) {
        site.banner_image = _.find(_.flatMap(site.albums, album => album.images), image => _.get(image, "banner", "") == "site");
        return Promise.resolve(site);
    },
    processAlbum: async function(album) {
        album.banner_image = _.find(album.images, image => _.get(image, "banner", "") == "album");
        return Promise.resolve(album);
    }
};
