$(document).ready(function () {
    /*== Sticky Header Script ==*/
    $(window).scroll(function () {
        //  var pathname = window.location.pathname;
        //  if (!pathname.includes('ExamOnlineWrittenQuestionDisplay')) {
        var scroll = $(this).scrollTop();
        if (scroll > 40) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
        //  }
    });

    /* Scroll to top Js */
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 300) {
            jQuery('a.scroll-to-top').addClass('active');
        } else {
            jQuery('a.scroll-to-top').removeClass('active');
        }

        jQuery('a.scroll-to-top').click(function () {
            jQuery('html, body').stop().animate({ scrollTop: 0 }, 500);
        });
    });
});
