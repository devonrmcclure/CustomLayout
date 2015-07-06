(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */

(function($) {
    var speed = 2000;
    var container =  $('.display-animation');
    container.each(function() {
        var elements = $(this).children();
        elements.each(function() {
            var elementOffset = $(this).offset();
            var offset = elementOffset.left*0.8 + elementOffset.top;
            var delay = parseFloat(offset/speed).toFixed(2);
            $(this)
                .css("-webkit-animation-delay", delay+'s')
                .css("-o-animation-delay", delay+'s')
                .css("animation-delay", delay+'s')
                .addClass('animated');
        });
    });
})(jQuery);

/**
 * Created by Kupletsky Sergey on 04.09.14.
 *
 * Ripple-effect animation
 * Tested and working in: ?IE9+, Chrome (Mobile + Desktop), ?Safari, ?Opera, ?Firefox.
 * JQuery plugin add .ink span in element with class .ripple-effect
 * Animation work on CSS3 by add/remove class .animate to .ink span
*/

(function($) {
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
            top: y+'px',
            left:x+'px'
        }).addClass("animate");
    })
})(jQuery);


// For floating action button
$(function () {
    materialRipple();
});

function materialRipple() {
    $(".fab:not(.disabled)").on("mousedown", function (e) {
        recycler();
        var offset = $(this).offset();
        var XCoord = (e.pageX - offset.left);
        var YCoord = (e.pageY - offset.top);

        if ($(this).outerWidth() < 199) {
            $(this).children().append($("<div class='ripple ripple-active'></div>").css({
                left: XCoord - 4.5,
                top: YCoord - 2,
                height: $(this).width() * .20,
                width: $(this).width() * .20
            })).on("mouseup", function () {
                $(this).children('div').removeClass('ripple-active');
            });
        } else {
            $(this).children().append($("<div class='ripple ripple-active'></div>").css({
                left: XCoord - 4.5,
                top: YCoord - 2,
                height: $(this).width() * .05,
                width: $(this).width() * .05
            })).on("mouseup", function () {
                $(this).children('div').removeClass('ripple-active');
            });
        }
    });
}

function recycler() {
    $('html').find('.ripple:not(.active)').remove();
}
},{}],2:[function(require,module,exports){
$(".sidebar-toggle").click(function(e) {
    e.preventDefault();
    $(".sidebar").toggleClass("toggled");

});

$(".fab-toggle").click(function(e) {
	e.preventDefault();
	$(".fab-item").toggleClass("hidden");
});
},{}],3:[function(require,module,exports){
$(document).ready(function(){
	$(".toast").fadeIn(1000);
	$(".toast").delay(3000).fadeOut(1000);
});

},{}]},{},[1,2,3]);
