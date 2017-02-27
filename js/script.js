
$(document).ready(function(){

	var boxNum = 256;

	makeBoxes(boxNum);

	hoverOn();

	clearOn();

	resizeOn();

	//make boxes
	function makeBoxes(boxNumber, w){
		
		for (var i = boxNumber; i > 0; i--) {
			$(".container").append("<div class='box'></div>");	
			console.log("HERE");
		}

		$(".box").width(w);
		$(".box").height(w);
	}

	//delete boxes

	function delBoxes(){
		$(".box").remove();	
	}

	//hover function	
	function hoverOn(){
		$(".box").hover(function(){
			$(this).addClass("hoverOn");
		});
	}

	//clear button
	function clearOn(){
		$("button#clear").click(function(){
			$(".box").removeClass("hoverOn");
		});
	}

	//resize button
	function resizeOn(){
		$("button#resize").click(function(){

			var boxSize = Number(prompt("Input"));

			delBoxes();

			//make width of each box 400/input

			var w = (400 / boxSize)

			var area = boxSize*boxSize;

			makeBoxes(area, w);

			hoverOn();

		});
	}

});//rdy

