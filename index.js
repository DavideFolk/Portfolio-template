'use strict';
AOS.init();

$('#moreWork').click(function (e) {
	e.preventDefault();
	$('#Modal-Work').modal('hide');

	$('html, body').animate(
		{
			scrollTop: $('#work').offset().top,
		},
		100
	);
});
