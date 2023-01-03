import 'virtual:windi.css';
import './sudoku.css';

type CellState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

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

class Board {
  private cells: CellState[][];

  constructor() {
    //prettier-ignore
    this.cells = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  async render() {
    let cellNumber = 0;
    for (let col = 0; col < this.cells.length; col++) {
      for (let row = 0; row < this.cells.length; row++) {
        cellNumber += 1;
        const cellElement = document.getElementById(`cell${cellNumber}`)!;

        if (this.cells[col][row] === 0) {
          cellElement.style.color = 'white';
        }

        cellElement.textContent = `${this.cells[col][row]}`;
      }
    }
  }
}

function main() {
  const board = new Board();
  board.render();
}

main();

export {};
