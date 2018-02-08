/***************************
            Services
            
            
JQuery doc 

$(document).ready(function() {
    
}); below is short code for same thing?
****************************/
$(function () {

    // animate on scroll
    new WOW().init();
});
/****************************
            WORK
*****************************/
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', //child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/****************************
            TEAM
*****************************/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
        responsive : {
            // breakpoint from 0 up
            0 : {
                    items: 1
            },
            // breakpoint from 480 up
            480 : {
                    items: 2
            },
            // breakpoint from 768 up
            768 : {
                    items: 3
            }
        }
    });

});
/****************************
            Testimonials
*****************************/
$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/****************************
            STATS
*****************************/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
});
/****************************
            Clients
*****************************/
$(function () {

    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
        responsive : {
            // breakpoint from 0 up
            0 : {
                    items: 1
            },
            // breakpoint from 480 up
            480 : {
                    items: 3
            },
            // breakpoint from 768 up
            768 : {
                    items: 5
            },
            992 : {
                    items: 6
            }
        }
    });

});
/****************************
            Navigation
            
Show hide transparent black navigation bar
*****************************/
$(function () {

    $(window).scroll(function() {
        
        if($(this).scrollTop() < 50 ) {
           //hide nav bar
            $("nav").removeClass("page-top-nav");
            $("#back-to-top").fadeOut();
        } 
        else{
           //show nav bar
            $("nav").addClass("page-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});
//Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        //get/return id, like #about, #work, #team, etc.
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250);
    });


});

// Close mobile menu on Nav Click
$(function () {
    
    $(".navbar-collapse ul li a").on("click touch", function(){
        
        $(".navbar-toggle").click();
    });
});








