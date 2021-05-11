import { Component, OnInit } from '@angular/core';
import { SudokuBoardVm } from '../sudokuboardvm';
import { SudokuBoardComponent } from '../sudokuboard/sudokuboard.component';

@Component({
  selector: 'app-sudokugame',
  templateUrl: './sudokugame.component.html',
  styleUrls: ['./sudokugame.component.css']
})
export class SudokuGameComponent implements OnInit {

  board: SudokuBoardVm;
  constructor() { }

  ngOnInit() {
    this.board = new SudokuBoardVm();
  }

  onChange(msg: string) {
    console.log(msg);
  }

}
