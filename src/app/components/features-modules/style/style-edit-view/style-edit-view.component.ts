import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IStyle } from 'src/app/model/style.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'; 

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
  styleObj: any;
  frmGroup!: FormGroup;

  dataSource!: MatTableDataSource<IStyle>;
  @ViewChild(MatSort) sort!: MatSort;
  styleList: IStyle[] = [];




  constructor(private route: ActivatedRoute,
    private services: StyleService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(res => {
    //   this.itemId = res;
    //   console.log("OBJ", this.itemId.id);
    // });

    this.getInventoryCode();
    this.getByIdEditView();
    this.formInitialize();


    this.getData();
    // this.snMethod();

  }

  getInventoryCode() {
    let id = this.route.paramMap.subscribe({
      next: (param) => {
        this.objId = param.get('id');
        console.log('Cons Id', this.objId);
               
      }
    })
  }



  formInitialize() {
    this.frmGroup = this.formBuilder.group({
      inventoryCode: [''], 
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
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.sort = this.sort;

      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  }


  getByIdEditView() {
    this.isloaded = true;
    this.services.getByIdEditView(this.objId).subscribe(res => {
      this.styleObj = res;
      console.log('styleObj', res)
      this.setValueFromMtbfData(res)
      this.isloaded = false;
    })
  };

  setValueFromMtbfData(respone: any) {
    this.frmGroup.patchValue({
      inventoryCode: respone.inventoryCode,
       
    });
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}













}




