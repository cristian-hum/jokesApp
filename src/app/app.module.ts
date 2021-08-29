import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module'
import { JokesListModule } from './jokes-list/jokes-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule, 
    JokesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 