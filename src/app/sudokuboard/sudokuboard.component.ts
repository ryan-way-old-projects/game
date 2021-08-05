import { Component, OnInit, Input } from '@angular/core';
import { SudokuCellComponent } from '../sudokucell/sudokucell.component'
import { SudokuCellVm } from '../sudokucellvm';

@Component({
  selector: 'app-sudokuboard',
  templateUrl: './sudokuboard.component.html',
  styleUrls: ['./sudokuboard.component.css']
})

export class SudokuBoardComponent implements OnInit {

  @Input() Context: any;

  public get Cells() {
    return this.Context?.Cells || null;
  }

  constructor() { }

  ngOnInit() {
  }

}
