
$(document).ready(function(){

	//var rows = prompt("input");
	for (var i = 256; i > 0; i--) {
		$(".container").append("<div class='box'></div>");	
	}
	
	$(".box").hover(function(){
		$(this).addClass("hoverOn");
	});

});//rdy

function clearFunction(){
	$(".box").removeClass("hoverOn");
}