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
 
//function validateForm()
//{
//    var status = $('div#form_status');
//    var form = $('form.contact-form');
//    $.ajax({
//        url: 'contact-form-process?'+form.serialize()
//    }).done(function(data){
//        status.html(data);
//   });
//}

$("#idForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = form.attr('action');
    
    $.ajax({
           type: "POST",
           url: 'contact-form-process.php',
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
			   console.log(data.trim());
			   if(data.trim() === '1'){
				//תקפיץ פה MODAL   
				   $("#ConfirmModal").modal('show');
				   console.log('IM HERE');
			   }else{
				   //ERROR
			   }
               //alert(data); // show response from the php script.
			   $('#idForm').find('input, textarea, select').each(
				   function(){
				   $("#" + this.id).val('');
					}
				);
           }
         });

    
});

/*===============================================================
	Journal
===============================================================*/
// Get the modal
/*var modal = document.getElementById('galg');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
*/
    