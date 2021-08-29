import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IJoke } from '../joke.service';


@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() jokes : IJoke[] = [];

  @Output() refreshJokes = new EventEmitter();

  
}

