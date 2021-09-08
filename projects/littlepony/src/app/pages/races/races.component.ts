import { Component, OnInit } from '@angular/core';
import { RACES } from 'src/app/model/race/mock-race';
import { Race } from 'src/app/model/race/race';
import { RaceService } from 'src/app/services/race/race.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Race[] = [];

  constructor(private raceService: RaceService) { 
    // this.races = RACES
    this.raceService.getAllRaces().subscribe(r => this.races = r)

  }

  ngOnInit(): void {
  }

}
