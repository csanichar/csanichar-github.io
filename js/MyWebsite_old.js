$(document).ready(function(){
    $('.pull-me').click(function() {
        $('.sub-menu').slideToggle('slow');


    });

    $('#resume').click(function(){

        $('#Container').fadeOut('fast');
        $('#socialmedia').fadeOut('fast');
        $('#displayresume').fadeIn('slow');
        $('.sub-menu').slideToggle('slow');
        $('#container3').fadeOut('fast');
    });

    $('#home').click(function(){

        $('#Container').fadeIn('slow');
        $('#socialmedia').fadeIn('slow');
        $('#displayresume').fadeOut('fast');
        $('.sub-menu').slideToggle('slow');
        $('#container3').fadeOut('fast');

    });


    $('#projects').click(function(){

        $('#container3').fadeIn('slow');
        $('#displayresume').fadeOut('fast');
        $('.sub-menu').slideToggle('slow');
        $('#Container').fadeOut('fast');
        $('#socialmedia').fadeOut('fast');






    });

    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(0).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });


    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(0).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });

    $('.linkedin').hover(function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    });



});
