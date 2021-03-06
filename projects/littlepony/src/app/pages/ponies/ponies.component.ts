import { Component, OnInit } from '@angular/core';
import { PONIES } from 'src/app/model/pony/mock-ponies';
import { Pony } from 'src/app/model/pony/pony';
import { PonyService } from 'src/app/services/pony/pony.service';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[] =  [];

  constructor(private ponyService: PonyService) { 
    // this.ponies = PONIES;
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p)
  }

  ngOnInit(): void {
  }

}
