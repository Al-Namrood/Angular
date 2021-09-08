import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pony } from 'src/app/model/pony/pony';
import { PonyService } from 'src/app/services/pony/pony.service';

@Component({
  selector: 'app-add-pony-react',
  templateUrl: './add-pony-react.component.html',
  styleUrls: ['./add-pony-react.component.css']
})
export class AddPonyReactComponent implements OnInit {

  ponyForm = this.formBuilder.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    age: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router:Router, private ponyService:PonyService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const res: Pony = this.ponyForm.value;
    console.log(res.name, 'popopo')
    this.ponyService.addPony(res);
    this.router.navigate(['']);
  }

}
