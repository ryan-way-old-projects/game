import { Component, OnInit, Input } from '@angular/core';
import { SudokuGameService } from '../sudoku-game.service';

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent implements OnInit {
  /**
   * Use focus to implicitly keep one cell selected
   * allow for disabling of focusableness
   * allow for highlighting
   */
  @Input() Selected: boolean;
  @Input() Highlighted: boolean;
  @Input() X: number;
  @Input() Y: number;

  Value: string;
  private _gameservice: SudokuGameService;

  constructor(gameservice: SudokuGameService) {
    this._gameservice = gameservice;
  }

  ngOnInit() {
    console.log(this.X % 3, this.Y);
    this.Value = this._gameservice.EasyPuzzle[this.Y][this.X];
  }

  Select() {
    this.Selected = !this.Selected;
  }

}
