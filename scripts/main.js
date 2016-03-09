function resize(width, height, maxWidth, maxHeight) {
    if ((width / height) >= (maxWidth / maxHeight)) {
        return { width: maxWidth, height: height * (maxWidth / width) };
    }
    else {
        return { width: width * (maxHeight / height), height: maxHeight };
    }
}

function centre(width, height, parentWidth, parentHeight) {
    return { top: (parentHeight - height) / 2, left: (parentWidth - width) / 2 };
}

require.config({
    baseUrl: "/scripts"
});

requirejs( [
    "imagesloaded"
], function (imagesLoaded) {
    imagesLoaded("#photo", function (instance) {
        if (instance.images.length != 1) return;

        var container = document.getElementById("photo-container");
        var image = document.getElementById("photo");

        var resized = resize(image.clientWidth, image.clientHeight, container.clientWidth, container.clientHeight);
        var offset = centre(resized.width, resized.height, container.clientWidth, container.clientHeight);

        image.style.position = "absolute";
        image.style.top = offset.top + "px";
        image.style.left = offset.left + "px";
        image.style.width = resized.width + "px";
        image.style.height = resized.height + "px";

        image.className = "visible";
    });
});
