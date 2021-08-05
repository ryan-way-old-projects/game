import { SudokuCellVm } from './sudokucellvm';

describe('SudokuCellVm', () => {
  it('should create an instance', () => {
    expect(new SudokuCellVm('')).toBeTruthy();
  });

  it('should be readonly', () => {
    expect(new SudokuCellVm('').IsReadOnly);
  });

  it('should not be read only', () => {
    expect(!new SudokuCellVm('9').IsReadOnly);
  });
});
