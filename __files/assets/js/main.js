// detect ie
// Get IE or Edge browser version
var version = detectIE();

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

if (version){
    document.getElementById('wrapper').classList.add('ie');
}

// device js
/*! device.js 0.2.7 */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);

// svg-use
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();

// touch-or-mouse
/*! Touch Or Mouse - v0.2 - 2014-10-10
 * Shared at https://gist.github.com/lmeurs/e5db12f0b3ef43f9cd65
 * Demonstrated at http://jsfiddle.net/lmeurs/uo4069nh
 * Discussed at http://stackoverflow.com/a/26145343/328272
 * Copyright (c) 2014 Laurens Meurs, wiedes.nl; Licensed MIT */
(function(e){"use strict";var t={ghostEventDelay:1e3};var n={init:function(n){var r=this;if(!r.data("touchOrMouse")){r.on("touchstart.touchOrMouse touchend.touchOrMouse",function(t){e(this).data("touchOrMouse").touchEventInProgress=t.type==="touchstart";e(this).data("touchOrMouse").lastTouchEventTimestamp=Date.now()}).data("touchOrMouse",{options:e.extend(t,n||{}),touchEventInProgress:false,lastTouchEventTimestamp:0})}return r},get:function(t){var n=this,r=n.data("touchOrMouse"),i=e(t.delegateTarget).data("touchOrMouse");if(!i){e(t.delegateTarget).data("touchOrMouse",i={})}var s=r.touchEventInProgress||r.lastTouchEventTimestamp>Date.now()-r.options.ghostEventDelay||t.type==="mouseleave"&&i.lastMouseEnterEventWasInvokedByTouch;if(t.type==="mouseenter"){i.lastMouseEnterEventWasInvokedByTouch=s}return s?"touch":"mouse"}};e.fn.touchOrMouse=function(e,t){return n[e].call(this,t)}})(jQuery);

// functions
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

// scripts
$(document).ready(function () {

    /* ----------------------------------- variables ----------------------------------- */

    $header = $('#header');

    /* ----------------------------------- functions ----------------------------------- */


    /*
     ============= document click events
    */

    function documentClick() {
        $(document).click(function(e){
            // var targ = $(e.target);
            // if(targ.parents('#searchForm').length == 0){
            //     if(targ.parents('#search_btn').length == 0){
            //         search.removeClass('active');
            //         nav.removeClass('hidden');
            //     }
            // }
            //
            // if(targ.parents('.language').length == 0){
            //     lang.removeClass('show')
            // }
        })
    }




    /* --------------------------------- document load --------------------------------- */

    documentClick();
    project.headerFixed();

    if($('[data-owl="blog"]').length > 0){
        project.carousel();
    }

    /* --------------------------------- document resize --------------------------------- */

    $(window).resize(function () {

    });

    /* --------------------------------- document scroll --------------------------------- */

    $(window).scroll(function (e) {
        project.headerFixed();
    });

});