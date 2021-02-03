// inspired by Maze Generator Coding Challenge Playlist 1-4
// https://www.youtube.com/watch?v=HyK_Q5rrcr4

var N_SIZE = 10,
    boxes = [],
    visitedCells = [],
    visitCount = 0;



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
            row.appendChild(cell);
            cell.visited = false;
            cell.position = cellIndex + j;
            cell.unvisitedCells = [];
            // checking edge positions for bottom
             if (i !== 0) {
            cell.top = cell.position - N_SIZE;
             } 
            // checking edge positions for right
            if ((N_SIZE * i) + N_SIZE - 1 !== cell.position) {
                cell.right = cell.position + 1;
            } 
             // checking edge positions for bottom
            if (i !== N_SIZE - 1) {
            cell.bottom = cell.position + N_SIZE;
            } 
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
    var randomStart = Math.floor(Math.random() * Math.floor(N_SIZE * N_SIZE));
    currentCell = boxes[randomStart];
    currentCell.visited = true;
    currentCell.innerHTML = "X";
    visitedCells.push(currentCell);
    currentCell.style.background = 'orange';
    unvisitedCells(currentCell);
}

function unvisitedCells(cell) {
    var topCell = boxes[currentCell.top];
    var rightCell = boxes[currentCell.right];
    var bottomCell = boxes[currentCell.bottom];
    var leftCell = boxes[currentCell.left];
    var randomNeighbor = Math.floor(Math.random() * Math.floor(4) + 1);
    currentCell.innerHTML = "X";
    var topVisited, rightVisited, bottomVisited, leftVisited;

// If neighbor cells are edge cases and undefined, setting them as visited     
if(topCell == null) {
   topVisited = true;
} else {
    topVisited = topCell.visited;
}
    if(rightCell == null) {
   rightVisited = true;
} else {
    rightVisited = rightCell.visited;
}
    if(leftCell == null) {
   leftVisited = true;
} else {
    leftVisited = leftCell.visited;
}
    
if(bottomCell == null) {
   bottomVisited = true;
} else {
    bottomVisited = bottomCell.visited;
}
    
// keeping track of how many cells found, to stop at end    
 if(visitCount == (N_SIZE * N_SIZE) - 1) {
 console.log("Maze finished");
}
        // start backtracking if all current cells neighbors have been visited
 else if(visitedCells.length > 0 && topVisited && rightVisited && bottomVisited && leftVisited) {
    currentCell.innerHTML = "";
        currentCell = visitedCells.pop();
        unvisitedCells(currentCell);
}

    // checking so the cells around the current cell are not DEFINED and not VISITED
    else if(randomNeighbor == 1) {
    if (topCell && !topCell.visited) {
        setTimeout(function () {
            topCell.visited = true;
            topCell.style.background = "orange";
            // remove the top wall from the current cell
            currentCell.style.borderTop = "2px solid orange";
            // remove the bottom wall from the top cell of the current one
            topCell.style.borderBottom = "2px solid orange";
            currentCell.innerHTML = "";
            currentCell = topCell;
            visitCount++;
            visitedCells.push(currentCell);
            unvisitedCells(currentCell);
        }, 250)
    } else {
        unvisitedCells(currentCell);
    }
    }
    
    else if(randomNeighbor == 2) {
     if (rightCell && !rightCell.visited) {
        setTimeout(function () {
            rightCell.visited = true;
            rightCell.style.background = "orange";
            // remove the right wall from the current cell
            currentCell.style.borderRight = "2px solid orange";
            // remove the left wall from the right cell of the current one
            rightCell.style.borderLeft = "2px solid orange";
            currentCell.innerHTML = "";
            currentCell = rightCell;
            visitCount++;
            visitedCells.push(currentCell);
            unvisitedCells(currentCell);
        }, 250)
    } else {
        unvisitedCells(currentCell);
    }
    }
    else if(randomNeighbor == 3) {
    if (bottomCell && !bottomCell.visited) {
        setTimeout(function () {
            bottomCell.visited = true;
            bottomCell.style.background = "orange";
            // remove the bottom wall from the current cell
            currentCell.style.borderBottom = "2px solid orange";
            // remove the top wall from the bottom cell of the current one
            bottomCell.style.borderTop = "2px solid orange";
            currentCell.innerHTML = "";
            currentCell = bottomCell;
            visitCount++;
            visitedCells.push(currentCell);
            unvisitedCells(currentCell);
        }, 250)
    }
    else {
        unvisitedCells(currentCell);
    }
    }
else if(randomNeighbor == 4) {
      if (leftCell && !leftCell.visited) {
        setTimeout(function () {
            leftCell.visited = true;
            leftCell.style.background = "orange";
            // remove the left wall from the current cell
            currentCell.style.borderLeft = "2px solid orange";
            // remove the right wall from the left cell of the current one
            leftCell.style.borderRight = "2px solid orange";
            currentCell.innerHTML = "";
            currentCell = leftCell;
            visitCount++;
            visitedCells.push(currentCell);
            unvisitedCells(currentCell);
        }, 250)
      }
   else {
        unvisitedCells(currentCell);
    }
    } 
}

function resetGame() {
   location.reload();
}