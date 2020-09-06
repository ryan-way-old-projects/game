import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subgrid',
  templateUrl: './subgrid.component.html',
  styleUrls: ['./subgrid.component.css']
})
export class SubgridComponent implements OnInit {

  constructor() { }


  @Input() Cells: {Content: number, Selected: boolean, Highlighted: boolean}[]

  ngOnInit() {
    // this.Cells = [
    //   { "Content" : 1, "Selected" : false, "Highlighted" : false},
    //   { "Content" : 2, "Selected" : false, "Highlighted" : true},
    //   { "Content" : 3, "Selected" : true,  "Highlighted" : false},
    //   { "Content" : 4, "Selected" : true,  "Highlighted" : true},
    //   { "Content" : 5, "Selected" : false, "Highlighted" : false},
    //   { "Content" : 6, "Selected" : false, "Highlighted" : true},
    //   { "Content" : 7, "Selected" : true,  "Highlighted" : false},
    //   { "Content" : 8, "Selected" : true,  "Highlighted" : true},
    //   { "Content" : 9, "Selected" : false, "Highlighted" : false},
    // ];
  }

}
