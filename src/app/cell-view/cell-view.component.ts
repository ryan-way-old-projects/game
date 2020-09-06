import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-view',
  templateUrl: './cell-view.component.html',
  styleUrls: ['./cell-view.component.css']
})
export class CellViewComponent implements OnInit {
  /**
   * Use focus to implicitly keep one cell selected
   * allow for disabling of focusableness
   * allow for highlighting
   */
  constructor() { }

  @Input() content: string;
  @Input() isSelected: boolean;
  @Input() isHighlighted: boolean;

  ngOnInit() {
  }

  Select() {
    this.isSelected = true;
  }

}
