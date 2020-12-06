// scroll pada saat di click 
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elementujuan = $(tujuan);
	
	// pindahkan scroll
	$('html').animate({
		scrollTop: elementujuan.offset().top - 50 
	},1000,'swing');


	e.preventDefault();
});

// carousel active
$("#myCarousel").carousel();

// indicator
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// control
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

