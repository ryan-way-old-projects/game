import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent implements OnInit {

  constructor() { }

  content: string;

  ngOnInit() {
    this.content = '9';
  }

}
