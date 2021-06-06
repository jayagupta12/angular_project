import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.css']
})
export class DirectivesExComponent implements OnInit {

  ar=["da","ds"]
  model="start"
  arr=["start","end","mid"]

  constructor() { }
show=true;
action="hide me"
  ngOnInit(): void {
    setInterval(()=>this.updateSwitchValue('mid'),2000)
  }
showme(){
  this.show=!this.show
// this.action=this.show?"hide me":"show me"

}
updateSwitchValue(value){
let x=this.arr.length-1
  var rand = Math.floor(Math.random()*x) + 1;
  this.model=this.arr[rand];

}

}

