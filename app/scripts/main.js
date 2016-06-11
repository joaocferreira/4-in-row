var $ = require('jquery');
var row = 6;
var column = 7;
// color red 1
// color blue 2
var turn = 1;
var boardArray = new Array();

function initBoardArray() {
	for (var i = 0; i < row; i++) {
		boardArray[i]= new Array();
		for (var j = 0; j < column; j++) {
		 	boardArray[i][j] = 0;
		}
	}
};

function addPiece(col) {
	for (var i = 0; i < row; i++) {
		if (boardArray[i][col] === 0) {
			boardArray[i][col] = turn;
			var cellId = '#c' + i + col;
			var color = turn === 1 ? 'red' : 'blue';
			$(cellId).addClass(color);
			changeTurn();
			return;
		}
	}
};

function changeTurn() {
	if (turn === 1) {
		turn = 2;
		$('#turn').removeClass('turn--red');
		$('#turn').addClass('turn--blue');
	} else {
		turn = 1;
		$('#turn').removeClass('turn--blue');
		$('#turn').addClass('turn--red');
	}
}

$( document ).ready(function() {

	$(".cell").click(
        function(event){
        	var cellId = event.target.id;
            addPiece(cellId.charAt(2));
        }
      );

	initBoardArray();

});
