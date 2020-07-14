$(function(){
     //Responsive navigation toggle
    $("#toggle").click(function(){
        $("nav").toggleClass("fullNavHeight");
        $(".toggle").toggleClass("d-grid");
    });

    // //Hide navigation on scroll down
    // let previousScrollPosition = window.pageYOffset;

    // window.onscroll = function(){
    //     let currentScrollPosition = window.pageYOffset;
    //     if (previousScrollPosition > currentScrollPosition){
    //         $('nav').css({'zIndex': 11000});
    //     }
    //     else{
    //         $('nav').css({'zIndex': -1});
    //     }
    //     previousScrollPosition = currentScrollPosition;
    // }

    //Remove classes
    if ($(window).width() < 768) {
        $('.spec').addClass('toggle');
    } else {
        $('.spec').removeClass('toggle');
        $('#toggle').hide();
        $('.logo').hide();
    }

    //Show languages
    $('.dropdown').click(function(){
        if($('.dropdownContent').css('display') == 'none'){
            $('.dropdownContent').css('display', 'grid'); 
        }

        else{
            $('.dropdownContent').css({'display':'none'});
            $('.dropdown').css({'marginTop':'0px'});
        }
    });

    //Hover hide un-active projects
    $('.project').mouseenter(function(){
        $(this).siblings().css({'opacity':'0.25'});
    })
    .mouseleave(function(){
        $(this).siblings().css({'opacity':'1'});
    });

    //CV chose language
    $('.CV_lang').hide();

    $('#CV').click(function(){
        $(this).css({display: 'none'});
        $('#aboutDetail').css({marginBottom: '120px'});
        $('#CV_ENG').attr("href", "additionalFiles/CV-FilipMedak.pdf");
        $('#CV_CRO').attr("href", "additionalFiles/Životopis-FilipMedak.pdf");

        $('.CV_lang').show();
        $('.CV_lang').animate({
            opacity: 1
        }, 100);
    });

    //Reset scroll on page refresh
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
});




