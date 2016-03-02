$('document').ready(function(){

	var tl = new TimelineLite();

	var logo_eve = $('#logo_eve'),
	    title    = $('#welcome_title'),
	    hr_custom = $('#hr_custom'),
	    paragraph_text = $('#paragraph_text'),
	    contact_box = $('#contact'),
	    social_box  = $('#social');
 
	tl.add( TweenLite.to(logo_eve, .5, {left:0, opacity: 1, ease: Power2.easeIn}) );
	tl.add( TweenLite.to(welcome_title, .6, {top:0, opacity: 1, ease: Power3.easeIn}) );
	tl.add( TweenLite.to(hr_custom, .8, {width:100, opacity:1, ease: Power1.easeIn}) );
	tl.add( TweenLite.to(paragraph_text, .9, {opacity:1, opacity:1, ease: Power1.easeIn}) );
	tl.add( TweenLite.to(contact_box, 1.0, {opacity:1, opacity:1, ease: Power1.easeIn}) );
	tl.add( TweenLite.to(social_box, 1.1, {opacity:1, opacity:1, ease: Power2.easeIn}) );

});