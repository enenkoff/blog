var project = {},
    scrollTop,
    winWidth,
    $html,
    $header,
    scrollVar = 0;

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


