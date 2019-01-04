///<reference path="../../../node_modules/@angular/material/dialog/typings/dialog-ref.d.ts"/>
import {Component, Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
/*
export interface DialogData {
  date: string;
  value: number;
  comment:string
}
*/
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  constructor(
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
