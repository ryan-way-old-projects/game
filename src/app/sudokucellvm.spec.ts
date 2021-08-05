import { SudokuCellVm } from './sudokucellvm';

describe('SudokuCellVm', () => {
  it('should create an instance', () => {
    expect(new SudokuCellVm('')).toBeTruthy();
  });

  it('should be readonly', () => {
    expect(new SudokuCellVm('9').IsReadOnly).toBeTruthy();
  });

  it('should not be read only', () => {
    expect(new SudokuCellVm('').IsReadOnly).toBeFalsy();
  });
});
