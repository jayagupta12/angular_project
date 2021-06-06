import { Component, OnInit } from '@angular/core';
import {NetworkcallsService} from '../networkcalls.service'

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {
dataArray:any=[]
  constructor(private httpService:NetworkcallsService) {
    
  }

  ngOnInit(): void {


    this.httpService.getData().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })


    this.httpService.getPostData().subscribe(data=>{

      console.log(data)
    })
  }

}
