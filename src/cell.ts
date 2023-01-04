export const SELECTED_CELL_CLASS_NAME = 'selected-cell';

export function handleCellClick(e: MouseEvent) {
  if (!(e.currentTarget instanceof HTMLElement)) return;
  const target = e.currentTarget;

  target.classList.add(SELECTED_CELL_CLASS_NAME);

  e.currentTarget.style.backgroundColor = '#ffebcd';
}
