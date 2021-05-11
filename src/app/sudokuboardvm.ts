import { SudokuCellVm } from './sudokucellvm';

export class SudokuBoardVm {

  private board: string[][];
  private cells: SudokuCellVm[];

  private get Cells() : SudokuCellVm[] {
    return this.cells;
  }

  constructor() {
    this.board = [
      ['3', '8', '-', '-', '9', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '1', '7', '-', '2', '9'],
      ['-', '-', '-', '-', '-', '-', '3', '1', '-'],
      ['-', '5', '-', '-', '2', '3', '6', '7', '8'],
      ['-', '-', '-', '5', '-', '4', '-', '-', '-'],
      ['7', '3', '9', '1', '6', '-', '-', '5', '-'],
      ['-', '7', '5', '-', '-', '-', '-', '-', '-'],
      ['4', '6', '-', '7', '8', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '4', '-', '-', '8', '3'],
    ]

    this.cells = this.board.reduce((acc, val) => acc.concat(val), []).
      map((val) => new SudokuCellVm(val));
  }
}
