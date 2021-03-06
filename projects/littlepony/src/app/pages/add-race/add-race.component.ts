import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RACES } from 'src/app/model/race/mock-race';
import { Race } from 'src/app/model/race/race';
import {PONIES} from 'src/app/model/pony/mock-ponies'
import { RaceService } from 'src/app/services/race/race.service';
import { Pony } from 'src/app/model/pony/pony';
import { PonyService } from 'src/app/services/pony/pony.service';

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {

  newRace: Race = new Race();
  add: boolean = true;
  ponies: Pony[] = [];
  poniesChecked = Array<boolean>();

  constructor(private router:Router, private route: ActivatedRoute, private raceService:RaceService, private ponyService:PonyService) { }

  ngOnInit(): void {
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p);
    if(this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    } else {
      this.add = false;
      let s = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0);
      for(let i = 0; i < RACES.length; i++){
        if(RACES[i].id_race === id){
          this.newRace = RACES[i];
          break;
        }
      }
 
    }

  }

  onSubmit(): void {

    if(this.add){
      for (let index = 0 ; index < this.poniesChecked.length; index++){
        if(this.poniesChecked[index]){
          this.newRace.ponies.push(this.ponies[index]);
        }
      }
      // RACES.push(this.newRace);
      this.raceService.addRace(this.newRace);

    }
   
    this.router.navigate(['/races']);
  }


}
