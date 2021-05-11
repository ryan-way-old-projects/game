import { SudokuCellVm } from './sudokucellvm';

describe('SudokuCellVm', () => {
  it('should create an instance', () => {
    expect(new SudokuCellVm("")).toBeTruthy();
  });
});
