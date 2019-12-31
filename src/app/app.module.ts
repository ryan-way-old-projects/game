import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { SubgridComponent } from './subgrid/subgrid.component';
import { SudokuBoardComponent } from './sudoku-board/sudoku-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    SubgridComponent,
    SudokuBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
