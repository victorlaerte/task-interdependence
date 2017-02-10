/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

    /*----------------------------------------------------*/
    /* FitText Settings
    ------------------------------------------------------ */

    setTimeout(function() {
        $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
    }, 100);


    /*----------------------------------------------------*/
    /* Smooth Scrolling IMPLEMENT IN ANGULAR
    ------------------------------------------------------ */

    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function() {
            window.location.hash = target;
        });
    });


    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({ 'height': $(window).height() });
    $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
    });

});