var $ = require('jquery');
var row = 6;
var column = 7;
// color red 1
// color blue 2
var turn = 1;
var boardArray = new Array();

function initBoardArray() {

	for (var i = 0; i <column; i++) {
		boardArray[i]= new Array();
		for (var j = 0; j < row; j++) {
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
	debugger
	turn = turn === 1 ? 2 : 1;
}

$( document ).ready(function() {

	$(".cell").click(
        function(event){
        	var cellId = event.target.id;
            addPiece(cellId.charAt(2));
        }
      )

	initBoardArray();

});
