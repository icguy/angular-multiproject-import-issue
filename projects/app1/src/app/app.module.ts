import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomLibModule } from 'custom-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
