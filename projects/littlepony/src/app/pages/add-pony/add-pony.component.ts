import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PONIES } from 'src/app/model/pony/mock-ponies';
import { Pony } from 'src/app/model/pony/pony';

@Component({
  selector: 'app-add-pony',
  templateUrl: './add-pony.component.html',
  styleUrls: ['./add-pony.component.css']
})
export class AddPonyComponent implements OnInit {

  newPony: Pony = new Pony()
  add: boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newPony.id = PONIES.length
    PONIES.push(this.newPony)
    this.newPony = new Pony()
    this.router.navigate([''])
  }

}
