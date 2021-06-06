import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share-linkdialog',
  templateUrl: './share-linkdialog.component.html',
  styleUrls: ['./share-linkdialog.component.css']
})
export class ShareLinkdialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<ShareLinkdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data.link)
       this.linku=data.link
  }
linku:string="hjgghg"
 
  close(){

    this.dialogRef.close(); 
  }

  copyMessage(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.linku;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
     this.dialogRef.close(); 
  }
}
