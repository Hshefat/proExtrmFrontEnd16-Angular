import { Component, ViewChild,  OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'; 
import { IStyle } from 'src/app/model/style.model';
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss']
})
export class StyleListComponent  implements OnInit {

  isloaded = false;




  displayedColumns: string[] = [ 'recId',   'inventoryCode', 'inventoryName'
  
  , 'seasonCode' 
  , 'accessCode'
  , 'inventoryId'
  , 'quantity'
  , 'unitPrice'
  , 'workOrderGroupCode'
  , 'workOrderNo'
                ];
  dataSource!: MatTableDataSource<IStyle>;
  styleList: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




  constructor(private services: StyleService){
   
  }

  ngOnInit(): void {

    this.getData();
  }


  getData(){
    this.isloaded = true;
    this.services.getData().subscribe(res=>{
      
      console.log(res);
      this.styleList = res;
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.isloaded = false;

    }, error => {
     
  }) ;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }





 



}

   

 
