import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import {ServicesDeal} from "../services/services.deal";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {CommentComponent} from "../comment/comment.component";


@Component({
selector:'deal-data',
templateUrl:'./deals.component.html',
styleUrls:['./deals.component.css']


})
export class DealsComponent implements OnInit,AfterViewInit
{
  comment:string;
  message:string='no comments'
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dialog: MatDialog,private servicesDeal:ServicesDeal)
  {

  }


  displayedColumns: string[] = ['0', '1','comment'];
  tableSource=new MatTableDataSource();

  ngOnInit()
  {
    /*
    this.servicesDeal.getDeals().subscribe(response=>{
      this.tableSource.data = response.dataset.data;
      console.log(response.dataset.data)
    })
*/
    console.log(this.servicesDeal.getDeals().dataset.data);
    this.tableSource.data=this.servicesDeal.getDeals().dataset.data;

  }
  ngAfterViewInit()
  {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }
  /*update(el:string[],comment: string) {
    if (comment == null) { return; }

    console.log(el,comment);

  }*/

  openDialog(opec): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '250px',
      data: {date: opec[0], value: opec[1]}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.comment = result.comment;
      console.log(result);
    });
  }


}
