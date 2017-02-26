
$(document).ready(function(){

	//var rows = prompt("input");

	var rows = 16;

	for (var i = 0; i < rows; i++) {
		//$('.container').apend("<div>test</div>");
		$(".container").append("<div class=columns id=blok></div>");
	}

	for (var j = 0; j < rows ; j++) {
		//$(".container div").append("<div>set</div>");

		$(".columns").append("<div class=rows id=blok>sss</div>");
	}
	
	$("")
	

});