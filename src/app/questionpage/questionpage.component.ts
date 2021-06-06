import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { StringifyOptions } from 'querystring';
import { NetworkcallsService } from '../networkcalls.service'
import { ShareLinkdialogComponent } from '../share-linkdialog/share-linkdialog.component';
export interface Question {
  ques: string;
  option: string[];
  ans: string;
  id: string;
};
@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})
export class QuestionpageComponent implements OnInit {

  question: Question[];
  selectedAnswer: string;
  username: string;
  friendname:string
  score: number = 0
  constructor(private router: Router,
    private httpService: NetworkcallsService,
    public dialog: MatDialog,
    private route: ActivatedRoute

  ) {
    console.log(this.router.getCurrentNavigation().extras.state)
    this.username = (this.router.getCurrentNavigation().extras.state).toString();
   
  }
  current: number = 0;
  btnText: string = "Next"
  link: string;
   flag:number=0
  friendId: string
  ngOnInit(): void {

console.log("username :", this.username);
    //friend part
    this.route.paramMap.subscribe(params => {
      this.friendId = params.get('id');
      console.log(this.friendId);
    });
    if (this.friendId != null) {

      var data = {
        friendId: this.friendId
      }

      this.httpService.getUserQuestion(data).subscribe((data: []) => {
        console.log(data)
        this.question = data["question"].map((_question) => {
          let q: Question = {
            ques: _question["ques"],
            option: _question["option"],
            ans: _question["ans"],
            id: _question["_id"]
          };
          return q;
        });
      })
    }
    else {

      this.httpService.getQuestion().subscribe((data: []) => {
        var a: any = data
        console.log(data)
        this.question = data.map((_question) => {
          let q: Question = {
            ques: _question["ques"],
            option: _question["option"],
            ans: _question["ans"],
            id: _question["_id"]
          };
          return q;
        });
      })

    }
  }
  increaseindex() {
    var count = this.question.length
    if (count > this.current && this.btnText != "Submit") {
      this.current++
      this.btnText = "Next"
    }
    if (this.current == this.question.length-1) {
      this.btnText = "Submit"
    }
    
    if (this.btnText == "Submit" && this.flag==1) {
      console.log(this.question);


      if (this.friendId != null) {

        var data = {
          name: this.username,
          score: this.score.toString(),
          quizId: this.friendId

        }
        this.httpService.saveFriendScore(data).subscribe(data => {

          console.log(data) // kya deskh rhi ho backtick lag
          this.router.navigate([`/dashboard/${this.friendId}`]);
        })

      } else {
        // Save this to db
        const data = {
          name: this.username,
          question: this.question
        }
        this.httpService.saveUserQuestion(data).subscribe(data => {
          console.log(data)
          let id = data["id"]
          this.link = "http://localhost:4200/dashboard/" + data["id"];

          const dialogRef = this.dialog.open(ShareLinkdialogComponent, {
            width: '250px',
            data: { link: this.link }
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

            this.router.navigate([`/dashboard/${id}`]);
          });
        })
      }
    }
 
    
  }

  radioChange(event: MatRadioChange) {
    console.log(event.value);
    console.log(this.selectedAnswer);
    if (this.friendId != null) {
      if (this.question[this.current].ans == this.selectedAnswer) {
        this.score++
      }

    } else {
      this.question[this.current].ans = this.selectedAnswer;
    }

    if(this.current==this.question.length-1){
this.flag=1
    }
  }


}
