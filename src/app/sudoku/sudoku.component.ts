import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  @Input() Subgrids: {Cells: {Content: number, Selected: boolean, Highlighted: boolean}[]}[]

  constructor() { }

  ngOnInit() {
    //this.Subgrids = new Array<{Cells: {Content: number, Selected: boolean, Highlighted: boolean}[]}>(9).fill(
    //  {
    //    "Cells": [
    //      { "Content" : 1, "Selected" : false, "Highlighted" : false},
    //      { "Content" : 2, "Selected" : false, "Highlighted" : true},
    //      { "Content" : 3, "Selected" : true,  "Highlighted" : false},
    //      { "Content" : 4, "Selected" : true,  "Highlighted" : true},
    //      { "Content" : 5, "Selected" : false, "Highlighted" : false},
    //      { "Content" : 6, "Selected" : false, "Highlighted" : true},
    //      { "Content" : 7, "Selected" : true,  "Highlighted" : false},
    //      { "Content" : 8, "Selected" : true,  "Highlighted" : true},
    //      { "Content" : 9, "Selected" : false, "Highlighted" : false},
    //    ]
    //  }
    //)
  }

}
