import { Component, OnInit } from '@angular/core';
import { SudokuCellComponent } from '../sudokucell/sudokucell.component'

@Component({
  selector: 'app-sudokugame',
  templateUrl: './sudokugame.component.html',
  styleUrls: ['./sudokugame.component.css']
})
export class SudokuGameComponent implements OnInit {

  board: string[][];
  constructor() { }

  ngOnInit() {
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
  }

  onChange(msg: string) {
    console.log(msg);
  }

}
