import { handleCellClick } from './cell';

export type CellState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const BOARd_WIDTH = 9;
const BOARD_HEIGHT = 9;
const answer = [
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

export function init(cells: CellState[][]) {
  let cellNumber = 0;

  for (let col = 0; col < BOARD_HEIGHT; col++) {
    for (let row = 0; row < BOARd_WIDTH; row++) {
      cellNumber += 1;

      const cellElement = document.getElementById(`cell${cellNumber}`)!;
      //座標情報をカスタムタグで保持
      cellElement.dataset.col = `${col}`;
      cellElement.dataset.row = `${row}`;

      render(cellElement, cells[col][row]);

      cellElement.addEventListener('click', handleCellClick);
    }
  }
}

function render(elem: HTMLElement, cellState: CellState) {
  if (cellState === 0) {
    elem.textContent = '';
    return;
  }
  elem.textContent = `${cellState}`;
}
