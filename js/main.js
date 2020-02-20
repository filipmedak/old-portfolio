$(function(){
     //Responsive navigation toggle
    $("#toggle").click(function(){
        $("nav").toggleClass("fullNavHeight");
        $(".toggle").toggleClass("d-grid");
    });

    // //Sticky navigation
    // let previousScrollPosition = window.pageYOffset;

    // window.onscroll = function(){
    //     let currentScrollPosition = window.pageYOffset;
    //     if (previousScrollPosition > currentScrollPosition){
    //             $("nav").css({top: '0'});
    //     }
    //     else{
    //         $("nav").css({top: '48px'});
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
});