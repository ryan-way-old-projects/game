import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sudokucell',
  templateUrl: './sudokucell.component.html',
  styleUrls: ['./sudokucell.component.css']
})
export class SudokuCellComponent implements OnInit {

  @Input() Value: number;

  constructor() { }

  ngOnInit() {
  }

}
