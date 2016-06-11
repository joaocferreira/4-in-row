var $ = require('jquery');
var row = 6;
var column = 7;

function initBoardArray() {
	var boardArray= new Array();

	for (var i = 0; i<row; i++) {
		boardArray[i]=new Array();
		for (var j = 0; j < column; j++) {
		 	boardArray[i][j] = 0;
		}
	}
	return boardArray;
};

// function printBoard(boardArray) {
// 	for (i=0;i<row;i++) {
// 		 for (j=0;j<column;j++) {
// 		    var cellId = '#c' + i + j;
// 		    debugger
// 		    $(cellId).addClass('blue');
// 		 }
// 	}
// };
// printBoard(boardArray);

$( document ).ready(function() {

	$('.cell').addEventListener = function(){
		alert('ola');
	};

});

var boardArray = initBoardArray();

