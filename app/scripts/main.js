
function initBoardArray()
{
	var iMax = 5;
	var jMax = 7;
	var boardArray= new Array();

	for (i=0;i<iMax;i++) {
	 boardArray[i]=new Array();
	 for (j=0;j<jMax;j++) {
	  boardArray[i][j]=0;
	 }
	}

	alert(boardArray[0][0]);
	return boardArray;
}




function printBoard(boardArray)
{
	for (i=0;i<iMax;i++) {
		 for (j=0;j<jMax;j++) {
		    var x = document.getElementById("c"+i+j).cells;
		    x.bgColor = "Yellow";   
		 }
	}

}

var boardArray = initBoardArray();

printBoard(boardArray);