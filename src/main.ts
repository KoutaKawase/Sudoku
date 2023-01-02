import 'virtual:windi.css';
import './sudoku.css';

type CellState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const boardElementCss =
  'border-2 border-neutral-500 grid grid-cols-3 grid-rows-3 w-4/5 mt-10';

class Cell {
  private state: CellState = 0;
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
    if (this.state === 0) {
      this.element.textContent = '';
      return;
    }
    this.element.textContent = `${this.state}`;
  }
}

//ボードの状態を表す２次元配列を作成
// let count = 0;
// const board = [...Array(9)].map(() => {
//   return [...Array(9)].map(() => {
//     count += 1;

//     const cellElement = document.getElementById(`cell${count}`)!;
//     const cell = new Cell(2, cellElement);
//     cell.init();

//     return cell;
//   });
// });

function main() {}

main();

export {};
