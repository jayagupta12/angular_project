import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NameDialogComponent } from '../name-dialog/name-dialog.component';
import { NetworkcallsService } from '../networkcalls.service'
export interface Score {
  name: string;
  score: string
 
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  //  ELEMENT_DATA= [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
  
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private httpService: NetworkcallsService,
  ) { 

    console.log("params",this.route.snapshot.paramMap.get('id'));


  }
  displayedColumns: string[] = ['Name', 'Score']; //

 // dataSource = this.ELEMENT_DATA;

 


  openDialog(): void {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      data: {name: "name", animal: "dog"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');   if(result){
       console.log(result);
       this.router.navigate(["/questionPage"],{state:result})}
    });
  }

/// friend part

 id:string 
score=[]
ngOnInit(): void {

  this.route.paramMap.subscribe(params => {
 this.id= params.get('id');
    console.log(this.id);
  });
  var data={
    id:this.id
  }

  this.httpService.getFriendScore(data).subscribe((data: []) => {
    var a: any = data
    console.log(data)
    this.score = data.map((_score) => {
      let q: Score = {
        name: _score["name"],
        score: _score["score"]
       
      };
      return q;
    });

  })
}
  onSubmit(value) {
    var Name=value.controls.name.value
    console.log(Name)
      if(this.id!=null && Name!=""){
        this.router.navigate([`/questionPage`,{id:this.id}],{state:Name})
      }else{
        console.log("no data")
        
      }
     }

   
}
