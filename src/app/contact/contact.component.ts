import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profileForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    subject:new FormControl('vvvvvvvggg',[Validators.required]),

    address:new FormGroup({
    address1:new FormControl(''),
    address2:new  FormControl('')
    })
  });

 // convenience getter for easy access to form fields
 get f() { return this.profileForm.controls; }

 onSubmit() {
     

     // stop here if form is invalid
     if (this.profileForm.invalid) {
         return;
     }

     alert('SUCCESS!! :-)')
 }
}
