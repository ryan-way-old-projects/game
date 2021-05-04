import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuCellComponent } from './sudokucell.component';

describe('SudokuCellComponent', () => {
  let component: SudokuCellComponent;
  let fixture: ComponentFixture<SudokuCellComponent>;
  let input: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudokuCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokuCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    input = fixture.debugElement.nativeElement.querySelector('input');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onFocus should fire OnFocus event', () => {
    let focused: boolean = false;
    component.OnFocus.subscribe((event: string) => {
      focused = true;
    });
    component.focus();
    expect(focused).toBeTruthy();
  });

});
