import { Component, ViewChild, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IStyle } from 'src/app/model/style.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription, timer, map, share } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styleUrls: ['./style-list.component.scss']
})
export class StyleListComponent implements OnInit {
  dateRangeForm !: FormGroup;

  currentDate: Date = new Date();
  time = new Date();
  intervalId: any;
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
    , 'insertedAt'
  ];
  dataSource!: MatTableDataSource<IStyle>;

  styleList: IStyle[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  inventoryCodeForSearch: any;

  previousClickedRow: IStyle | null = null;
  totalStyleListCount: any;
  itemDate: any;

  constructor(private services: StyleService, private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit(): void {

    this.formInitForDateFilter();
    this.getData();
    this.GetLiveClock();
  }
  GetLiveClock() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
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
    console.log('row', rowData);
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
      this.router.createUrlTree(['/style-view', invenCode])
    );
    console.log('row.inventorycode', invenCode);
    window.open(url, '_blank');

    row.clicked = !row.clicked;
    this.previousClickedRow = row.clicked ? row : null;
  }

  formInitForDateFilter() {
    this.dateRangeForm = this.formBuilder.group({
      startDate: new FormControl(),
      endDate: new FormControl(),
      insertedAt: new FormControl(),
    });
  }


  applyFilterSSSS() {
    const startDate: Date | null = this.dateRangeForm.get('startDate')?.value;
    const endDate: Date | null = this.dateRangeForm.get('endDate')?.value;
    let filteredData = [];

    if (startDate === null || endDate === null) {
      filteredData = this.styleList;
    } else {
      filteredData = this.styleList.filter(item => {
        const itemDate = new Date(item.insertedAt);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }
    this.dataSource.data = filteredData;
    console.log('filteredData:', filteredData);
  }

  applyFilterSSSSClean() {
    this.dateRangeForm.get('startDate')?.reset(null);
    this.dateRangeForm.get('endDate')?.reset(null);
    this.applyFilterSSSS();
  }







  



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }









}




