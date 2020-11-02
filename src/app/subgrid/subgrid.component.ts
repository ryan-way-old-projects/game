import { Component, OnInit, Input } from '@angular/core';
import { SudokuGameService } from '../sudoku-game.service';

@Component({
  selector: 'app-subgrid',
  templateUrl: './subgrid.component.html',
  styleUrls: ['./subgrid.component.css']
})
export class SubgridComponent implements OnInit {

  @Input() X:number;
  @Input() Y:number;

  @Input() Rows:number;
  @Input() Cols:number;

  Cells: number[][];

  constructor(gameservice: SudokuGameService) 
  {
  }

  ngOnInit()
  {
    this.Cells = [];
    for (var y:number = 0; y < this.Rows; y++)
    {
      for (var x:number = 0; x < this.Cols; x++)
      {
        this.Cells.push([x+this.X, y+this.Y]);
      }
    }
  }

}
