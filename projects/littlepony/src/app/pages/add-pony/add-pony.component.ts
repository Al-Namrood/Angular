import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    } else {
      this.add = false;
      let s = this.route.snapshot.paramMap.get('id');
      const id = parseInt(s == null ? "0" : s, 0);

      for(let i = 0; i < PONIES.length; i++){
        if(PONIES[i].id === id){
          this.newPony = PONIES[i];
          break;
        }
      }
 
    }
  }

  onSubmit(): void {

    if (this.add){
      this.newPony.id = PONIES.length
      PONIES.push(this.newPony)
      this.newPony = new Pony()
      this.router.navigate([''])
    }
   
  }

}
