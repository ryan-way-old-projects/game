import { Component, OnInit, Input } from '@angular/core';
import { SudokuGameService } from '../sudoku-game.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  Subgrids: number[][];

  constructor(gameservice: SudokuGameService)
  {
    this.Subgrids = [...Array(gameservice.EasyPuzzle.length).keys()]
      .map(value=>[(value%3)*3, Math.floor(value/3)*3]);
  }

  ngOnInit() {
  }

}
