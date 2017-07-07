import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HotTableModule } from 'ng2-handsontable'

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FilterComponent } from './configuration/filter/filter.component';
import { NavbarComponent } from './configuration/navbar/navbar.component';
import { ItemComponent } from './configuration/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    FilterComponent,
    NavbarComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
