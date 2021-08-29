import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http : HttpClient
  ) { }

  jokes : IJoke[] = [];

  getAllJokes = () => {
    return this.http.get<{ jokes: any[] }>("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10").pipe(
      tap(response => {
        console.log(response);
        this.jokes = response.jokes.map(singleJoke => ({
          setup : singleJoke.setup,
          delivery : singleJoke.delivery,
          id : singleJoke.id,
        }))
        console.log(this.jokes);
      }) 
    );
  };

}

export interface IJoke {
  setup:string;
  delivery:string;
  id:number;
}
