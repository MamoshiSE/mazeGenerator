var N_SIZE = 12,
    EMPTY = " ",
    boxes = []

$(document).ready(function () {
// Initializing game board
    var board = document.createElement('table');
    board.setAttribute("id", "mazeGrid");
    board.setAttribute("border", 1);
    board.setAttribute("cellspacing", 0);

    var identifier = 1;
    for (var i = 0; i < N_SIZE; i++) {
        var row = document.createElement('tr');
        board.appendChild(row);
        for (var j = 0; j < N_SIZE; j++) {
            var cell = document.createElement('td');
                cell.setAttribute('height', 50);
                cell.setAttribute('width', 60);
            
            cell.setAttribute('align', 'center');
            cell.setAttribute('valign', 'center');
            cell.classList.add('col' + j, 'row' + i);
            cell.identifier = identifier;
         cell.addEventListener("click", set);
            row.appendChild(cell);
            // top - right - bottom - left walls for each square
            cell.walls = [1, 1, 1 ,1];
            boxes.push(cell);
            identifier += identifier;
        }

    }
    document.getElementById("mazeGrid").appendChild(board);
});





//Sets clicked square and also updates the turn.

function set() {

    var col = this.className.split(/(\d+)/)[1];
    // gets index of row
    var row = this.className.split(/(\d+)/)[3];
    var board = document.getElementById("mazeGrid");
   // this.style.background   = "orange";
    this.style.borderBottom = '1px black solid';
   // alert(this.walls);
    latestMove = {
        row,
        col
    };

}
