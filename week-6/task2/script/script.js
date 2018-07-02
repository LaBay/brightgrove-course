"use strict"

$("input[type=button]").click(function() {
	$("input[type=text]").val( $("input[type=text]").val().toUpperCase() );
})