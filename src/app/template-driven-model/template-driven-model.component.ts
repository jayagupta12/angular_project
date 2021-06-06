import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-model',
  templateUrl: './template-driven-model.component.html',
  styleUrls: ['./template-driven-model.component.css']
})
export class TemplateDrivenModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model = {
    text: null,
    number: null
  };

  onSubmit() {
  
    console.log(this.model)
         //alert(value)
     }
  
}
