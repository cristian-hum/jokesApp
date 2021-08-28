import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() setup! : string;

  @Input() punchLine! : string;

  hasTheButtonBeenPushed : boolean = false;

  onBtnClick = () => { this.hasTheButtonBeenPushed = true; }

}
