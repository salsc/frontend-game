# frontend-game
## Minesweeper
Deployed App [https://salsc.github.io/frontend-game](https://salsc.github.io/frontend-game)
### Description
The objective of this game is to reveal all squares in the grid that do not have mines.
### Functional Mechanics
Clicking on a square will change the color based on presence of mine. If target is not mined, the number of squares with mines adjacent to the target square will be displayed. If target is mined, all squares in the field with mines will turn red.
### Technologies Used - Validation
HTML, CSS, JavaScript
Passed HTML5 Validator and CSS Validator
### Installation Instructions
Fork and clone this repository. Open Index.html in browser.
### Unsolved Problems
~~Number of adjacent squares with mines is not working for last row and last column.~~
No issues currently.
### Future Improvements
+Allow player to flag square as presumed mined, disallow activation of that square.
+If the player has flagged a number of adjacent squares equal to the number revealed in a non-mined square, allow reveal of all adjacent squares that are not flagged upon event.
+Allow player to select difficulty level between easy, normal, hard which may correspond to grid of 3x3, 5x5, 10,10 grid.
+In the unlikely event that the player fully reveals the board without setting off any mines, display an appropriate victory condition.
