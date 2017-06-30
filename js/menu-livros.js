$(document).ready(function() {

	$('.menu-livros li').click( function (){
		
		$(this).addClass('menu-hover').siblings('.menu-hover').removeClass();
		$('.lista-livros:nth-child('+ ($(this).index()+1) +')').fadeIn().siblings('.lista-livros').hide();
		
		



	});

});