"use strict";

const _ = require("lodash");

function hasNext(image, album) {
    return album.images.length - _.findIndex(album.images, { 'id' : image.id }) > 1;
}

function next(image, album) {
    if (hasNext(image, album)) {
        return album.images[_.findIndex(album.images, { 'id' : image.id }) + 1];
    }
}

function hasPrevious(image, album) {
    return _.findIndex(album.images, { 'id' : image.id }) > 0;
}

function previous(image, album) {
    if (hasPrevious(image, album)) {
        return album.images[_.findIndex(album.images, { 'id' : image.id }) - 1];
    }
}

module.exports.hasPrevious = hasPrevious;
module.exports.previous = previous;
module.exports.hasNext = hasNext;
module.exports.next = next;
