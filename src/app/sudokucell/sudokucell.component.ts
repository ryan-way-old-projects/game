import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sudokucell',
  templateUrl: './sudokucell.component.html',
  styleUrls: ['./sudokucell.component.css']
})
export class SudokuCellComponent implements OnInit {

  @Input() Value: number;
  @Input() ReadOnly: boolean;

  @Output() OnFocus: EventEmitter<string> = new EventEmitter();
  @Output() OnBlur: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    this.OnFocus.emit('Focused');
  }

  onBlur() {
    this.OnBlur.emit('Burred');
  }

}
