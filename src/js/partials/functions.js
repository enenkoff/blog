var project = {},
    scrollTop,
    winWidth,
    $html,
    $header;

/* ----------------------------------- functions ----------------------------------- */

    /*
     ============= header fixed
    */

project.headerFixed = function(){
    scrollTop = $(window).scrollTop();
    if(scrollTop > scrollVar){
        $header.addClass('minimized');
        scrollVar = scrollTop;
    }
    else {
        $header.removeClass('minimized');
        scrollVar = scrollTop;
    }
};


/* ----------------------------------- plugins ----------------------------------- */

project.carousel = function() {
    var $carouselBox = $('[data-owl="blog"]'),
        $carousel = $carouselBox.find('.owl-carousel');

    $carousel.owlCarousel({
        loop: true,
        nav: true,
        navText: ['',''],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20
            },
            1201: {
                items: 3,
                margin: 30
            },
            1367: {
                items: 3,
                margin: 50
            }
        }
    })
};
