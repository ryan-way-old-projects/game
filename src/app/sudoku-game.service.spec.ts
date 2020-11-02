import { TestBed } from '@angular/core/testing';

import { SudokuGameService } from './sudoku-game.service';

describe('SudokuGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SudokuGameService = TestBed.get(SudokuGameService);
    expect(service).toBeTruthy();
  });
});
