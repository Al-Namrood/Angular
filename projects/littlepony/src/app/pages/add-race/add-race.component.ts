import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RACES } from 'src/app/model/race/mock-race';
import { Race } from 'src/app/model/race/race';
import {PONIES} from 'src/app/model/pony/mock-ponies'

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  newRace: Race = new Race();
  add: boolean = true;
  ponies = PONIES;
  poniesChecked : boolean[] = [];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    for (let index = 0 ; index < this.poniesChecked.length; index++){
      if(this.poniesChecked[index]){
        this.newRace.ponies.push(this.ponies[index])
      }
    }

    RACES.push(this.newRace)
    this.router.navigate(['/races'])
  }


}