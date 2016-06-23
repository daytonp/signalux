/* Author: 
    Me.
*/

// this should match the speed used in the css for the menu transitions
// for consistency and all.
var menu_slide_speed = 300;

$(document).ready(function() { 

    $(".desktop-header__mobile-menu").click(function() {
        $(".mobile-menu").addClass("mobile-menu--visible");

    })

    $(".mobile-menu__top-close").click(function() {
        $(".mobile-menu").removeClass("mobile-menu--visible");

    })

    $(window).resize(function() {
        if ($(window).width() >= 768) {
            if ($(".mobile-menu").hasClass("mobile-menu--visible")) {
                $(".mobile-menu").removeClass("mobile-menu--visible");
            }
        }
    });

    // nav buttons
    $("#desktop-header__menu-item-work").click(function() {
        scrollTo("section--work");
    });

    $("#desktop-header__menu-item-about").click(function() {
        scrollTo("section--about");
    });

    $("#desktop-header__menu-item-connect").click(function() {
        scrollTo("section--connect");
    });

    $("#desktop-header__menu-item-blog").click(function() {
        scrollTo("section--blog");
    });

    // mobile menu buttons
    $("#mobile-menu__item-work").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").removeClass("mobile-menu--visible");
        window.setTimeout(function() {
            scrollTo("section--work");
        }, menu_slide_speed);
    });

    $("#mobile-menu__item-about").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").removeClass("mobile-menu--visible");
        window.setTimeout(function() {
            scrollTo("section--about");
        }, menu_slide_speed);
    });

    $("#mobile-menu__item-connect").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").removeClass("mobile-menu--visible");
        window.setTimeout(function() {
            scrollTo("section--connect");
        }, menu_slide_speed);
    });

    $("#mobile-menu__item-blog").click(function(e) {
        e.preventDefault();
        $(".mobile-menu").removeClass("mobile-menu--visible");
        window.setTimeout(function() {
            scrollTo("section--blog");
        }, menu_slide_speed);
    });

    function scrollTo(anchor_id) {
        var tag = $("#"+anchor_id+"");
        $('html,body').animate({scrollTop: tag.offset().top-34},menu_slide_speed);
    }
})























