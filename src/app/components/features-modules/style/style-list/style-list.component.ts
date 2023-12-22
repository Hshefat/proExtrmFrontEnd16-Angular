import { Component, ViewChild, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IStyle } from 'src/app/model/style.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss']
})
export class StyleListComponent implements OnInit {

  isloaded = false;




  displayedColumns: string[] = ['recId', 'inventoryCode', 'inventoryName'

    , 'departmentCode'
    , 'departmentName'
    , 'seasonCode'
    , 'workOrderGroupCode'
    , 'deliveryDate'
    , 'accessCode'
    , 'markName'
    , 'explanation'
    , 'categoryName'
    , 'quantity'  
  ];
  dataSource!: MatTableDataSource<IStyle>;
  
  styleList: IStyle[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  inventoryCodeForSearch: any;

  previousClickedRow: IStyle | null = null;
  totalStyleListCount: any;



  constructor(private services: StyleService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.getData();
  }


  getData() {
    this.isloaded = true;
    this.services.getData().subscribe(res => {
      console.log(res);
      this.styleList = res;
      this.totalStyleListCount = res.length; 
      this.inventoryCodeForSearch = res?.inventoryCode;
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('totalStyleListCount', this.totalStyleListCount);
      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  }

owClicked(row: any) {
    this.router.navigate(['/style-view', this.inventoryCodeForSearch]);
  }
  openNewTab(rowData: any) {
    console.log('row',rowData);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/style-view', rowData.inventoryCode])
    );

    window.open(url, '_blank');
    rowData.clicked = !rowData.clicked;
  }

  onRowClick(row: IStyle): void {
    if (this.previousClickedRow && this.previousClickedRow !== row) {
      this.previousClickedRow.clicked = false;
    }
  
    console.log('row', row);
    let invenCode = row.inventoryCode;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/style-view',invenCode])
    );
    console.log('row.inventorycode', invenCode);
    window.open(url, '_blank');
  
    row.clicked = !row.clicked;
    this.previousClickedRow = row.clicked ? row : null;
  }
  

  
   

    



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }









}




