import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesListComponent } from './jokes-list.component';
import { JokeModule } from '../joke/joke.module';




@NgModule({
  declarations: [JokesListComponent],
  imports: [
    CommonModule, 
    JokeModule
  ],
  exports: [JokesListComponent],
})
export class JokesListModule { }
