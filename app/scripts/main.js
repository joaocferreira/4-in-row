var $ = require('jquery');
var row = 6;
var column = 7;
// color red 1
// color blue 2

function initBoardArray() {
	var boardArray = new Array();

	for (var i = 0; i <column; i++) {
		boardArray[i]= new Array();
		for (var j = 0; j < row; j++) {
		 	boardArray[i][j] = 0;
		}
	}
	return boardArray;
};

function addPiece(col) {
	for (var i = 0; i < column; i++) {

	}
};

$( document ).ready(function() {

	$(".cell").click(
        function(event){
        	var cellId = event.target.id;
            console.log(cellId.charAt(2));
        }
      )

	initBoardArray();

});
