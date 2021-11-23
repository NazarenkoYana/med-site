sliderPrpducts = tns({
    container: '.info-preparation__mobile',
    items: 1,
    mouseDrag: true,
    swipeAngle: false,
    center: true,
    edgePadding: 0,
    fixedWidth: 270,
    gutter: 30,
    nav: true,
    controls: false,
    responsive: {
       375: {
            gutter: 320,
            items: 1
        },
    }

});