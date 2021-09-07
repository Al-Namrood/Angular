import { Component, OnInit } from '@angular/core';
import { RACES } from 'src/app/model/race/mock-race';
import { Race } from 'src/app/model/race/race';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Race[];

  constructor() { 
    this.races = RACES
  }

  ngOnInit(): void {
  }

}
