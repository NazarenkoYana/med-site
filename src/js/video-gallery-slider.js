sliderPrpducts = tns({
    container: '.video-gallery__container-content-mobile',
    items: 1,
    mouseDrag: true,
    swipeAngle: false,
    center: true,
    edgePadding: 0,
    // fixedWidth: 270,
    gutter: 0,
    nav: true,
    navPosition: "bottom",
    controls: false,
    responsive: {
        375: {
            gutter: 60,
            items: 1
        },
    }

});