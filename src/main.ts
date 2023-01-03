import 'virtual:windi.css';
import './sudoku.css';

type CellState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const example = [
  [8, 1, 3, 7, 5, 2, 4, 6, 9],
  [7, 5, 9, 1, 4, 6, 2, 3, 8],
  [4, 6, 2, 3, 9, 8, 5, 7, 2],
  [3, 9, 5, 2, 8, 1, 6, 4, 7],
  [1, 7, 4, 5, 6, 3, 8, 9, 2],
  [2, 8, 6, 4, 7, 9, 1, 5, 3],
  [5, 4, 8, 9, 1, 7, 3, 2, 6],
  [9, 2, 1, 6, 3, 5, 7, 8, 4],
  [6, 3, 7, 8, 2, 4, 9, 1, 5],
];

class Cell {
  private state: CellState = 0;
  private readonly element: HTMLElement;

  constructor(state: CellState, elem: HTMLElement) {
    this.state = state;
    this.element = elem;
  }

  init() {
    this.element.addEventListener('click', () => {
      console.log(this.state);
    });
  }

  draw() {
    if (this.state === 0) {
      this.element.textContent = '';
      return;
    }
    this.element.textContent = `${this.state}`;
  }
}

class Board {
  private cells: Cell[][] = [[], [], [], [], [], [], [], [], []];

  init() {
    const problem: CellState[][] = [
      [8, 1, 3, 7, 5, 2, 4, 6, 9],
      [7, 5, 9, 1, 4, 6, 2, 3, 8],
      [4, 6, 2, 3, 9, 8, 5, 7, 2],
      [3, 9, 5, 2, 8, 1, 6, 4, 7],
      [1, 7, 4, 5, 6, 3, 8, 9, 2],
      [2, 8, 6, 4, 7, 9, 1, 5, 3],
      [5, 4, 8, 9, 1, 7, 3, 2, 6],
      [9, 2, 1, 6, 3, 5, 7, 8, 4],
      [6, 3, 7, 8, 2, 4, 9, 1, 5],
    ];
    let cellNumber = 0;

    for (let col = 0; col < problem.length; col++) {
      for (let row = 0; row < problem.length; row++) {
        cellNumber += 1;

        const cellElement = document.getElementById(`cell${cellNumber}`)!;
        const cell = new Cell(problem[col][row], cellElement);
        cell.init();

        this.cells[col][row] = cell;
      }
    }
  }

  async render() {
    for (let col = 0; col < this.cells.length; col++) {
      for (let row = 0; row < this.cells.length; row++) {
        this.cells[col][row].draw();
      }
    }
  }
}

function main() {
  const board = new Board();
  board.init();
  board.render();
}

main();

export {};
