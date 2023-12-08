import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IStyle } from 'src/app/model/style.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-style-edit-view',
  templateUrl: './style-edit-view.component.html',
  styleUrls: ['./style-edit-view.component.scss']
})
export class StyleEditViewComponent implements OnInit {


  objId: any;
  itemId: any;
  conceptUuid: any;
  isloaded = false;
  styleList: any;
  styleObj: any;



  constructor(private route: ActivatedRoute,
    private services: StyleService,) { }

  ngOnInit(): void {
    // this.route.params.subscribe(res => {
    //   this.itemId = res;
    //   console.log("OBJ", this.itemId.id);
    // });

    this.getInventoryCode();
    this.getByIdEditView();

   
    // this.getData();
    // this.snMethod();

  }

  getInventoryCode() {
    this.route.paramMap.subscribe({
      next: (param) => {
        this.objId = param.get('id');
        console.log('Cons Id', this.objId)
      }
    })
  }


  
  snMethod() {
    this.isloaded = true;
    setTimeout(() => {
      this.isloaded = false;
    }, 2000);
  }

  
  getData() {
    this.isloaded = true;
    this.services.getData().subscribe(res => {
      console.log(res);
      this.styleList = res;
      this.isloaded = false;
    } );
  }

  getByIdEditView() { 
    this.isloaded = true;
    this.services.getByIdEditView(this.objId).subscribe(res => {
      this.styleObj = res;
      console.log('styleObj',res)
      this.isloaded = false;
    })
  };


}




