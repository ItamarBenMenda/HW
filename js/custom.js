/*=============================================================
                                SERVICES
=============================================================*/


$(function () {

    new WOW().init();

});


/*=============================================================
                                WORK
=============================================================*/

$(function () {
    
	$("#work").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
        }
			
	});
	
		$("#galgefen").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
        }
			
	});
	
		$("#germany").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
        }
			
	});
	
		$("#nessziona").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true
        }
			
	});
		
});


/*=============================================================
                                TEAM
=============================================================*/

$(function () {
    
    $("#team-members").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 5
            }
        }
    });
});
/*=============================================================
                                Testimonials
=============================================================*/

$(function () {
    
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 1
            },
            // breakpoint from 768 up
            768: {
                items: 1
            },
            // breakpoint from 992 up
            992: {
                items: 1
            }
        }
    });
});	

/*=============================================================
                                Stats
=============================================================*/
$(function(){
  	$('.counter').counterUp({
		delay: 10,
		time: 2000
	
	});
});


/*=============================================================
                                Clients
=============================================================*/

$(function () {
    
    $("#clients-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 6
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            },
            // breakpoint from 992 up
            992: {
                items: 5
            }
        }
    });
});

/*========================================================
                        Navigation
==========================================================*/
//show / hide transparent black navigation


$(function(){
	
	$(window).scroll(function(){
		
		if($(this).scrollTop() <50 ) {
			//hide nav
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
			}else {
			
			//show nav
				$("nav").addClass("vesco-top-nav");
				$("#back-to-top").fadeIn();
			}
		
	});
	
});
//Smooth scrolling
$(function(){
	
	$("a.smooth-scroll").click(function(event){
		event.preventDefault();
	var section = $(this).attr("href");
	$('html, body').animate({
		scrollTop: $(section).offset().top
	}, 1250, "easeInOutExpo");
	});	
});

/*===============================================================
	SEND MAIL
===============================================================*/
 
function validateForm()
{
    var status = $('div#form_status');
    var form = $('form.contact-form');
    $.ajax({
        url: 'contact-form-process?'+form.serialize()
    }).done(function(data){
        status.html(data);
    });
}

/*===============================================================
	Journal
===============================================================*/
 
``

    