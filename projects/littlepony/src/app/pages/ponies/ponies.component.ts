import { Component, OnInit } from '@angular/core';
import { PONIES } from 'src/app/model/pony/mock-ponies';
import { Pony } from 'src/app/model/pony/pony';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[];

  constructor() { 
    this.ponies = PONIES;
  }

  ngOnInit(): void {
  }

}
