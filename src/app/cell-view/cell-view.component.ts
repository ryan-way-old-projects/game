import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent implements OnInit {

  constructor() { }

  content: string;
  isSelected: boolean;

  ngOnInit() {
    this.content = '1';
    this.isSelected = true;
  }

}
