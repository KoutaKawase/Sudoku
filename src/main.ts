import 'virtual:windi.css';
import './sudoku.css';

// prettier-ignore
const board = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
]
const boardElementCss =
  'border-2 border-neutral-500 grid grid-cols-3 grid-rows-3 w-4/5 mt-10';

const boardContainerElement = document.getElementById('container');

if (boardContainerElement !== null) {
  let boardElement = document.createElement('div');
  boardElement.className = boardElementCss;

  //各セルに1〜81までの数字を付けて一意にしたいのでcountを用意して81回カウントさせる
  let count = 0;

  [...Array(9)].map((_, i) => {
    let sudokuBoxElement = document.createElement('div');
    sudokuBoxElement.className = 'sudoku-box';
    sudokuBoxElement.id = `sudoku-box${i + 1}`;

    [...Array(9)].map((_, i) => {
      count += 1;

      let cellElement = document.createElement('div');
      cellElement.className = 'cell';
      cellElement.id = `cell${count}`;
      cellElement.textContent = `${i + 1}`;

      sudokuBoxElement.appendChild(cellElement);
    });

    boardElement.appendChild(sudokuBoxElement);
  });

  boardContainerElement.appendChild(boardElement);
}

export {};
