"use strict"

/* TRIGGER OF FOURTH SECTION "SERVICES WE PROVIDE" */

$('.services-trigger-wrapper div').click(function(){
	let $i = $('.services-trigger-wrapper div').index(this);
	console.log($i);
	let $elements = $('.services-item-wrapper div');
	$elements.each(function(){
		if($($elements).index(this)== $i) $(this).addClass('active')
			else $(this).removeClass('active')
	})
})