import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NetworkcallsService {

  constructor(private http:HttpClient) { }

  getData(){

    let url="https://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url)
  }

  getPostData(){
 let data={
  title: 'foo',
  body: 'bar',
  userId: 1,
}

    let url="https://jsonplaceholder.typicode.com/posts"

    return this.http.post(url,data)
  }

  getQuestion(){
    let url="http://localhost:3000/getQuestion"

    return this.http.get(url)
  }

  saveUserQuestion(data){
    let url="http://localhost:3000/saveUserQuestion"
    return this.http.post(url,data);

  }

  getUserQuestion(data){
    let url="http://localhost:3000/getUserQuestion"
    return this.http.post(url,data);
  }

  saveFriendScore(data){
    console.log(data);
    let url="http://localhost:3000/save"
    return this.http.post(url,data)
  }

  getFriendScore(data){
    let url="http://localhost:3000/getFriendScore"
    return this.http.post(url,data)
  }
}
