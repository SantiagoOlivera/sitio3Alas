$(window).scroll(function () {
	var s = $(window).scrollTop();	
	if(s>=1){
		$(".navegacion").addClass("fijo");
	} else {
		$(".navegacion").removeClass("fijo");
	}
});