import 'virtual:windi.css';
import './sudoku.css';

type Numbers = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type CellState = 'empty' | Numbers;
const boardElementCss =
  'border-2 border-neutral-500 grid grid-cols-3 grid-rows-3 w-4/5 mt-10';
const boardContainerElement = document.getElementById('container');

class Cell {
  private state: 'empty' | Numbers = 'empty';
  private readonly element: HTMLElement;

  constructor(state: CellState, elem: HTMLElement) {
    this.state = state;
    this.element = elem;
  }

  init() {
    this.element.addEventListener('click', () => {
      this.draw();
    });
  }

  private draw() {
    if (this.state === 'empty') {
      this.element.textContent = '';
      return;
    }
    this.element.textContent = `${this.state}`;
  }
}

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

//ボードの状態を表す２次元配列を作成
let count = 0;
const board = [...Array(9)].map(() => {
  return [...Array(9)].map(() => {
    count += 1;
    const cellElement = document.getElementById(`cell${count}`)!;
    const cell = new Cell(1, cellElement);
    cell.init();
    return cell;
  });
});

console.log(board);
export {};
