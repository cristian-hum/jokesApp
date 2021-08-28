import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'jokesapp';

  ngOnInit(){
    console.log("am apelat ngOnInnit");
    this.jokeService.getAllJokes().subscribe()}

  constructor(private jokeService : JokeService){
    console.log(jokeService);
  }
}
