import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sudokucell',
  templateUrl: './sudokucell.component.html',
  styleUrls: ['./sudokucell.component.css']
})
export class SudokuCellComponent implements OnInit {

  @Input() Value: number;
  @Input() ReadOnly: boolean;
  @Input() Selected: boolean;
  @Input() Highlighted: boolean;

  @Output() OnClick: EventEmitter<string> = new EventEmitter();
  @Output() OnFocus: EventEmitter<string> = new EventEmitter();
  @Output() OnBlur: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  focus() {
    this.OnFocus.emit('Focused');
  }

  blur() {
    console.log("blurred");
    this.Selected = true;
    this.Highlighted = false;
    this.OnBlur.emit('Burred');
  }

  click() {
    console.log("Clicked");
    this.Selected = false;
    this.Highlighted = true;
    this.OnClick.emit('Clicked');
  }

}
