import { Component, Input } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent  {

  constructor() { }

 

  @Input() setup! : string;

  @Input() punchLine! : string;

  hasTheButtonBeenPushed : boolean = false;

  onBtnClick = () => { this.hasTheButtonBeenPushed = true; }

  

  

}
