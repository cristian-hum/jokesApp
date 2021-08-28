import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke.component';



@NgModule({
  declarations: [
    JokeComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [JokeComponent]
})
export class JokeModule { }
