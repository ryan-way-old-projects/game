export class SudokuCellVm {

  private value: string;
  private selected: boolean;
  private readOnly: boolean;

  public get Value(): string {
    return this.value;
  }

  public set Value(value: string) {
    this.value = value;
  }

  public get IsSelected(): boolean {
    return this.selected;
  }

  public ToggleSelect() {
    this.selected = !this.selected;
  }

  public get IsReadOnly(): boolean {
    return this.readOnly;
  }

  constructor(value: string) {
    this.value = value;
    this.init();
  }

  init() {
    this.selected = false;
    this.readOnly = !isNaN(+this.value);
  }
}
