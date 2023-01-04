import 'virtual:windi.css';
import './sudoku.css';

import { init, CellState } from './cells';
import { GameState } from './gameState';
import { SELECTED_CELL_CLASS_NAME } from './cell';

const cells: CellState[][] = [
  [0, 0, 3, 0, 0, 2, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [4, 0, 2, 0, 0, 0, 0, 0, 1],
  [0, 9, 0, 0, 8, 0, 6, 0, 7],
  [1, 7, 0, 0, 0, 3, 8, 0, 2],
  [0, 0, 0, 4, 0, 9, 0, 5, 0],
  [5, 0, 8, 0, 0, 0, 3, 0, 0],
  [0, 2, 0, 6, 3, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 9, 1, 0],
];

const gameState: GameState = {
  cells,
};

//数独ボード以外をクリックした場合、どこかのマスが選択状態ならそれを解除する
document.addEventListener('click', (e) => {
  if (!(e.target as HTMLElement).closest('.sudoku-box')) {
    const board = document.getElementById('board');
    const selectedCells = board?.getElementsByClassName(
      SELECTED_CELL_CLASS_NAME
    );

    if (!selectedCells) return;

    Array.prototype.forEach.call(selectedCells, (cell: HTMLElement) => {
      cell.style.background = 'white';
    });
  }
});

init(gameState.cells);
