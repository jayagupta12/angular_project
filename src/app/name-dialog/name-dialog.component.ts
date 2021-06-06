import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }



  userForm = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    
  });

 // convenience getter for easy access to form fields
 get f() { return this.userForm.controls; }

 onSubmit() {

     // stop here if form is invalid
     if (this.userForm.invalid) {
         return;
     }
     this.dialogRef.close(this.userForm.value); 
     //alert(this.userForm.value.Name)
 }
}
