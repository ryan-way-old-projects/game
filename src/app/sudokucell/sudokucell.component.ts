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
    this.OnBlur.emit('Burred');
  }

  click() {
    this.OnClick.emit('Clicked');
  }

}
