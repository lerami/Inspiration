

$(document).ready(function() {

	//variables
	// var $body = $('body');
	// var $window = $(window);
	// var navOffsetTop = $('navbar').offset().top;

	$('[data-popover]').click(function(e){
		e.preventDefault();
		$($(this).data('popover')).toggleClass('open');
	});

	$(document).scroll(function(){
		var offset = $('.navbar').offset().top;
		if($(document).scrollTop() > offset) {
	      $('.navbar').addClass('docked-nav');
	    }
	    else{
	      $('.navbar').removeClass('docked-nav');
	    }
	});


});