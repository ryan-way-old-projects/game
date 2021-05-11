import { Component, OnInit, Input } from '@angular/core';
import { SudokuCellComponent } from '../sudokucell/sudokucell.component'

@Component({
  selector: 'app-sudokuboard',
  templateUrl: './sudokuboard.component.html',
  styleUrls: ['./sudokuboard.component.css']
})

export class SudokuBoardComponent implements OnInit {

  @Input() Context: any;

  constructor() { }

  ngOnInit() {
  }

}
