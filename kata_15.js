// Function that detects if two Queens on a chess board can attack each other
// Constraint: Input to generateBoard is two coordinates, each as an array. Imput to queenThreat is an array of arrays representing an 8x8 matrix where 1 represents a Queen and 0 a blank space

// ##Solution 1 - Single function to create Board
const generateBoard = function(whiteQueen, blackQueen) {
  let row = Array(8).fill(0);
  let tableau = [...Array(8)].map(() => [...row]);
  tableau[whiteQueen[0]][whiteQueen[1]] = 1;
  tableau[blackQueen[0]][blackQueen[1]] = 1;
  return tableau;
};
// ##Solution 1 - Single function to detect Threat knowing that a slope of ±1 will mean diagonal Threat. It is also necessary to detect Threat in the same row/column.
const queenThreat = function(generatedBoard) {
  let coordinates = [];
  generatedBoard.map((square, x) => {
    square.map((w,y) => {
      if (w === 1) coordinates.push([x, y]);
    });
  });
  let m = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  return Math.abs(m) === 1 || coordinates[0][0] === coordinates[1][0] || coordinates[0][1] === coordinates[1][1];
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));