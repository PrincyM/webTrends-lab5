import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' // import form module here

import { AppComponent } from './app.component';
import { GuestlistComponent } from './guestlist/guestlist.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // declare your forms module here as well
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
