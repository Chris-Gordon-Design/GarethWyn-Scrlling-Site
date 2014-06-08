(function ($) {
    "use strict";

    var wpstarter = {

        init: function () {
            this.bindUIActions();
        },

        bindUIActions: function () {
            $(".scroll-nav a").on("click", function (e) { wpstarter.scrollToSection(e); });
        },

        windowLoaded: function () {
            //
        },

        windowResized: function () {
            //
        },

        windowScrolled: function () {
            //
        },

        scrollToSection: function (e) {
            e.preventDefault();

            var destination = (e.currentTarget.hash);
            var offset = $(destination)[0].offsetTop - 55;

            $("body").animate({ scrollTop: offset }, 600);
        }

    };

    // DOM Ready
    $(function () { wpstarter.init(); });
    // Images Loaded
    $(window).load(function () { wpstarter.windowLoaded(); });
    // Window Resized (smart debounced event)
    $(window).bind("debouncedresize", function () { wpstarter.windowResized(); });
    // Window Scrolled
    $(window).on("scroll", function () { wpstarter.windowScrolled(); });
    //link fix?
    $("nav a[href*=#]");
    //Slideshow

$(function(){
    $(".fadein img:gt(0)").hide();
    setInterval(function () {
      $(".fadein :first-child").fadeOut()
         .next("img").fadeIn()
         .end().appendTo(".fadein");}, 
      3000);
});

} (jQuery));
