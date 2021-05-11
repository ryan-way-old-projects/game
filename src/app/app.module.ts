import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuGameComponent } from './sudokugame/sudokugame.component';
import { SudokuCellComponent } from './sudokucell/sudokucell.component';
import { SudokuBoardComponent } from './sudokuboard/sudokuboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuGameComponent,
    SudokuCellComponent,
    SudokuBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
