$('document').ready(function(){

	function greenSockAnimate() {

		var tl = new TimelineLite();

	var logo_eve 		= $('#logo_eve'),
	    title    		= $('#welcome_title'),
	    hr_custom 		= $('#hr_custom'),
	    paragraph_text  = $('#paragraph_text'),
	    contact_box 	= $('#contact'),
	    social_box  	= $('#social');
 
		tl.add( TweenLite.to(logo_eve, .5, {left:0, opacity: 1, ease: Power2.easeIn}) );
		tl.add( TweenLite.to(welcome_title, .6, {top:0, opacity: 1, ease: Power3.easeIn}) );
		tl.add( TweenLite.to(hr_custom, .8, {width:100, opacity:1, ease: Power1.easeIn}) );
		tl.add( TweenLite.to(paragraph_text, .9, {opacity:1, opacity:1, ease: Power1.easeIn}) );
		tl.add( TweenLite.to(contact_box, .8, {opacity:1, opacity:1, ease: Power1.easeIn}) );
		tl.add( TweenLite.to(social_box, .85, {opacity:1, opacity:1, ease: Power2.easeIn}) );

	}

	


		function getVideo() {
			var BV = new $.BigVideo();
		    BV.init();

		    BV.show([
		        { type: "video/mp4",  src: "http://testing.evestudio.it/NatureVideo.mp4"  },
		        { type: "video/webm", src: "http://testing.evestudio.it/NatureVideo.webm" },
		      
		    ]);

		    $('#big-video-vid_html5_api').on('ended', function(){

		    	//worked 

		    	$('#big-video-wrap').hide('slow', function(){
		    		greenSockAnimate();
		    	});

		    });

		}


		if($(window).width() >= 420) {
			getVideo();
		} else{
			greenSockAnimate();
		}




});