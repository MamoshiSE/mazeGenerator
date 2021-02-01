var N_SIZE = 10,
    boxes = [],
    visitedCells = []



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
        if (cellIndex !== 0) {
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
            row.appendChild(cell);
            // top - right - bottom - left walls for each square
            cell.walls = [1, 1, 1, 1];
            cell.visited = false;
            cell.position = cellIndex + j;
            cell.unvisitedCells = [];
            //   cell.col = j;
            // cell.row = i;
            cell.top = cell.position - N_SIZE;
            // checking edge positions for right
            if ((N_SIZE * i) + N_SIZE - 1 !== cell.position) {
                cell.right = cell.position + 1;
            }
            cell.bottom = cell.position + N_SIZE;
            // checking edge positions for left
            if (cell.position - (N_SIZE * i) !== 0) {
                cell.left = cell.position - 1;
            }
            boxes.push(cell);
        }

    }
    document.getElementById("mazeGrid").appendChild(board);
    startMaze();
});




function startMaze() {
    currentCell = boxes[4];
    currentCell.visited = true;
    visitedCells.push(currentCell);
    currentCell.style.background = 'orange';
    unvisitedCells(currentCell);
}



function unvisitedCells(cell) {
    var topCell = boxes[currentCell.top]
    var rightCell = boxes[currentCell.right]
    var bottomCell = boxes[currentCell.bottom]
    var leftCell = boxes[currentCell.left]
    
    // start backtracking if all currentcells neighbors have been visited
    if(visitedCells.length > 1 && topCell.visited && rightCell.visited && bottomCell.visited && leftCell.visited) {
        currentCell = visitedCells.pop();
    } else {
    // checking so the cells around the current cell are not DEFINED and not VISITED
    if (topCell && !topCell.visited) {
        setTimeout(function () {
            topCell.visited = true;
            topCell.style.background = "orange";
            // remove the top wall from the current cell

            currentCell.style.borderTop = "2px solid orange";
            // remove the bottom wall from the top cell of the current one
            topCell.style.borderBottom = "2px solid orange";
            unvisitedCells(currentCell);
        }, 1000)
    }
    
    if (rightCell && !rightCell.visited) {
        setTimeout(function () {
            rightCell.visited = true;
            rightCell.style.background = "orange";
            // remove the right wall from the current cell
            currentCell.style.borderRight = "2px solid orange";
            // remove the left wall from the right cell of the current one
            rightCell.style.borderLeft = "2px solid orange";
            currentCell = rightCell;

            unvisitedCells(currentCell);
        }, 2000)
    }

    if (bottomCell && !bottomCell.visited) {
        setTimeout(function () {
            bottomCell.visited = true;
            bottomCell.style.background = "orange";
            // remove the bottom wall from the current cell
            currentCell.style.borderBottom = "2px solid orange";
            // remove the top wall from the bottom cell of the current one
            bottomCell.style.borderTop = "2px solid orange";
            currentCell = bottomCell;
            unvisitedCells(currentCell);
        }, 3000)
    }

    if (leftCell && !leftCell.visited) {
        setTimeout(function () {
            leftCell.visited = true;
            leftCell.style.background = "orange";
            // remove the left wall from the current cell
            currentCell.style.borderLeft = "2px solid orange";
            // remove the right wall from the left cell of the current one
            leftCell.style.borderRight = "2px solid orange";
            currentCell = leftCell;
            unvisitedCells(currentCell);
        }, 4000)
    }
    }

}