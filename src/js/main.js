$('document').ready(function(){

	var tl = new TimelineLite();

	var logo_eve = $('#logo_eve'),
	    title    = $('#welcome_title'),
	    hr_custom = $('#hr_custom'),
	    paragraph_text = $('#paragraph_text');

	tl.add( TweenLite.to(logo_eve, 1, {left:0, opacity: 1, ease: Power2.easeIn}) );
	tl.add( TweenLite.to(welcome_title, 1.2, {top:0, opacity: 1, ease: Power1.easeIn}) );
	tl.add( TweenLite.to(hr_custom, 1.5, {width:100, opacity:1, ease: Power1.easeIn}) );
	tl.add( TweenLite.to(paragraph_text, 1.6, {width:100, opacity:1, ease: Power1.easeIn}) );

});