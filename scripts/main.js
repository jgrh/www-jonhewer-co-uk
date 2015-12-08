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
    baseUrl: '/scripts'
});

requirejs( [
    'jquery',
    'imagesloaded'
], function ($, imagesLoaded) {
    $('a.disabled').click(function(event){
        event.preventDefault();
    });

    imagesLoaded('#photo', function (instance, image) {
        if (instance.images.length != 1) return;

        var container = $('#photo-container');
        var img = $(instance.images[0].img);

        var resized = resize(img.width(),
                             img.height(),
                             container.width(),
                             container.height()); 

        var offset = centre(resized.width,
                            resized.height,
                            container.width(),
                            container.height());

        img.css('position', 'absolute');
        img.css('top', offset.top);
        img.css('left', offset.left);
        img.css('width', resized.width);
        img.css('height', resized.height);

        img.fadeIn(1000);
    });
});
