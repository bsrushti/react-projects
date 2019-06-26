const iteratingRow = function(position, board) {
  let { x } = position;
  return board[x].includes(1);
};

const iteratingColumn = function(position, board) {
  let size = board.length;
  let { y } = position;
  let flag = false;
  for (let i = 0; i < size; i++) {
    if (board[i][y] === 1) flag = true;
  }
  return flag;
};

const iteratingDiagonalFromTopLeft = function(position, board) {
  let size = board.length;
  let { x, y } = position;
  let minimunNumber = Math.min(x, y);
  let row = 0;
  let column = 0;
  let flag = false;
  if (minimunNumber === x) {
    row = 0;
    column = y - x;
  } else {
    column = 0;
    row = x - y;
  }
  for (let i = 0; i < size; i++) {
    if (row === size || column === size) break;
    if (board[row++][column++] === 1) flag = true;
  }
  return flag;
};

const iteratingDiagonalFromTopRight = function(position, board) {
  let size = board.length;
  let { x, y } = position;
  let count = size - y - 1;
  let row = x - count;
  let column = y + count;
  let flag = false;
  for (let i = 0; i < size; i++) {
    if (column === size || row === size || row < 0 || column < 0) break;
    if (board[row++][column--] === 1) flag = true;
  }
  return flag;
};

const nQueen = function(board, col) {
  let size = board.length;
  if (col >= size) {
    return true;
  }
  for (let row = 0; row < size; row++) {
    let position = { x: row, y: col };
    if (
      !iteratingRow(position, board) &&
      !iteratingColumn(position, board) &&
      !iteratingDiagonalFromTopLeft(position, board) &&
      !iteratingDiagonalFromTopRight(position, board)
    ) {
      board[row][col] = 1;
      if (nQueen(board, col + 1)) return true;
      board[row][col] = " ";
    }
  }
  return false;
};

module.exports = nQueen;
