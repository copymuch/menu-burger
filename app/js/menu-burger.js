$(window).ready(function(){
	let burger = $('.menu-burger');

	burger.click(function(){
		$('nav').toggleClass('open-menu fixed-page');
		$(this).toggleClass('open-menu');
	});
});