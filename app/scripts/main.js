var $ = require('jquery');
var row = 6;
var column = 7;
var totalMovesPossible = 42;
var turnCounter = 0;
var turn = 1;
var boardArray = new Array();
// color red 1
// color blue 2

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

			if (isWinningBoard(boardArray, turn)) {
				$(".cell").off('click' ,
			        function(event){
			        	var cellId = event.target.id;
			            addPiece(cellId.charAt(2));
			        });
				alert("Player " + color + " wins");

			} else {
				changeTurn();
				return;
			}
		}
	}
};

function changeTurn() {
	turnCounter++;
	if (turnCounter < totalMovesPossible) {
		if (turn === 1) {
			turn = 2;
			$('#turn').removeClass('turn--red');
			$('#turn').addClass('turn--blue');
		} else {
			turn = 1;
			$('#turn').removeClass('turn--blue');
			$('#turn').addClass('turn--red');
		}
	} else {
		$('#turn').addClass('turn--hidden');
	}
};

function isWinningBoard(boardArrayToCheck, colorNumber) {
	for (var y = 0; y<row; y++) {
		for (var x = 0; x < column; x++) {
		 	if (checkIfFourInRow(boardArrayToCheck, x, y, colorNumber))
		 		return true;
		}
	}
	return false;
};

function checkIfFourInRow(boardArrayToCheck, x, y, colorNumber) {
	if (boardArrayToCheck[y][x] != colorNumber) return false;

	var left = howManyLeft(boardArrayToCheck, x, y, colorNumber);
	var right = howManyRight(boardArrayToCheck, x, y, colorNumber);
	if ((left + right) == 3) return true;

	var top = howManyTop(boardArrayToCheck, x, y, colorNumber);
	var bottom = howManyBottom(boardArrayToCheck, x, y, colorNumber);
	if ((top + right) == 3) return true;

	var diagUpRight = howManyDiagonalUpRight(boardArrayToCheck, x, y, colorNumber);
	var diagDownLeft = howManyDiagonalDownLeft(boardArrayToCheck, x, y, colorNumber);
	if ((diagUpRight + diagDownLeft) == 3) return true;

	var diagUpLeft = howManyDiagonalUpLeft(boardArrayToCheck, x, y, colorNumber);
	var diagDownRight = howManyDiagonalDownRight(boardArrayToCheck, x, y, colorNumber);
	if ((diagUpLeft + diagDownRight) == 3) return true;

	return false;
};


function howManyLeft(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( x -i > 0  && i < 4)	{
		if (boardArrayToCheck[y][x - i] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};

	return (i-1);
};

function howManyRight(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( x +i < column  && i < 4) {
		if (boardArrayToCheck[y][x + i] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};
	return (i-1);
};

function howManyTop(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y +i < row  && i < 4) {
		if (boardArrayToCheck[y+i][x] == colorNumber) {
			i++;
		} else {
			return (i-1)
		}
	};
	return (i-1);
};

function howManyBottom(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y - i > 0  && i < 4) {
		if (boardArrayToCheck[y-i][x] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};
	return (i-1);
};

function howManyDiagonalUpRight(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y +i < row  &&  x +i < column && i  < 4) {
		if (boardArrayToCheck[y+i][x+i] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};
	return (i-1);
};

function howManyDiagonalDownLeft(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y - i > 0  &&  x  - i > 0  && i  < 4) {
		if (boardArrayToCheck[y-i][x-i] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};
	return (i-1);
}

function howManyDiagonalUpLeft(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y +i < row  &&  x -i > 0 && i  < 4)	{
		if (boardArrayToCheck[y+i][x-i] == colorNumber) {
			i++;
		} else {
			return (i-1)
		}
	};
	return (i-1)
};

function howManyDiagonalDownRight(boardArrayToCheck, x, y, colorNumber) {
	var i = 1;
	while ( y - i > 0  &&  x  + i < column && i  < 4) {
		if (boardArrayToCheck[y-i][x+1] == colorNumber) {
			i++;
		} else {
			return (i-1);
		}
	};
	return (i-1)
};

$( document ).ready(function() {
	$(".cell").on('click' ,
        function(event){
        	var cellId = event.target.id;
            addPiece(cellId.charAt(2));
        });

	initBoardArray();
});
