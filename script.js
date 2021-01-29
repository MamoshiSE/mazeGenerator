var N_SIZE = 12,
    EMPTY = " ",
    boxes = [],
    currentCell = ""


$(document).ready(function () {
// Initializing game board
    var board = document.createElement('table');
    board.setAttribute("id", "mazeGrid");
    board.setAttribute("cellspacing", 0);
    // cellIndex keeps track of position in one-dimensional array
    var cellIndex = 0;
    for (var i = 0; i < N_SIZE; i++) {
        var row = document.createElement('tr');
       cellIndex++;
        if(cellIndex !== 0 ) {
            cellIndex = N_SIZE * i;
        }
        board.appendChild(row);
        for (var j = 0; j < N_SIZE; j++) {
            var cell = document.createElement('td');
                cell.setAttribute('height', 50);
                cell.setAttribute('width', 60);
            
            cell.setAttribute('align', 'center');
            cell.setAttribute('valign', 'center');
            cell.classList.add('col' + j, 'row' + i);
         cell.addEventListener("click", set);
            row.appendChild(cell);
            // top - right - bottom - left walls for each square
            cell.walls = [1, 1, 1 ,1];
            cell.visited = false;
            cell.position = cellIndex + j;
            cell.col = j;
            cell.row = i;
            cell.top = cell.position - N_SIZE;
            cell.right = cell.position + 1;
            cell.bottom = cell.position + N_SIZE;
            cell.left = cell.position - 1;
            boxes.push(cell);
        }

    }
    document.getElementById("mazeGrid").appendChild(board);
    startMaze();
});





//Sets clicked square and also updates the turn.

function set() {
    var col = this.className.split(/(\d+)/)[1];
    // gets index of row
    var row = this.className.split(/(\d+)/)[3];
    var board = document.getElementById("mazeGrid");
   // this.style.background   = "orange";
    this.style.borderBottom = '2px black solid';
   // alert(this.walls);
    latestMove = {
        row,
        col
    };

}

function startMaze() {
    currentCell = boxes[18];
    currentCell.visited = true
    if(currentCell.visited == true) {
        currentCell.style.background = 'orange';
    }
    unvisitedCells(currentCell);
    
}

function unvisitedCells(cell) {
    console.log(currentCell.top);
}
