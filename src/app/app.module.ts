import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellViewComponent } from './cell-view/cell-view.component';
import { SubgridComponent } from './subgrid/subgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    CellViewComponent,
    SubgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
