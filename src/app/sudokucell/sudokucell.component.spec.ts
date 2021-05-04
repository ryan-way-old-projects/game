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
  
  it('focus calls OnFocus', () => {
    let focused: boolean = false;
    component.OnFocus.subscribe((event: string) => {
      focused = true;
    });
    component.focus();
    expect(focused).toBeTruthy();
  });

  it('blur calls on OnBlur', () => {
    let blur: boolean = false;
    component.OnBlur.subscribe((event: string) => {
      blur = true;
    });
    component.blur();
    expect(blur).toBeTruthy();
  });
  
  it('click calls on OnClick', () => {
    let click: boolean = false;
    component.OnClick.subscribe((event: string) => {
      click = true;
    });
    component.click();
    expect(click).toBeTruthy();
  });

});
