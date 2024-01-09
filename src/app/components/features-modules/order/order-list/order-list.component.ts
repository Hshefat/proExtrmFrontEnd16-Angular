import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription, map, share, timer } from 'rxjs';
import { IMaWorkOrder  } from 'src/app/model/ma-work-order.model';
import { IStyle } from 'src/app/model/style.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent  implements OnInit {
  currentDate: Date = new Date();
  isloaded = false;
  time = new Date();
  rxTime = new Date();
  intervalId : any;
  subscription: any = Subscription;



  displayedColumns: string[] = ['recId', 'workOrderNo'
  , 'explanation'
  , 'workOrderDate'

    , 'workOrderTime'
    , 'planDate'
    , 'accessCode'
    , 'workOrderGroupCode'  
    , 'unitPrice'
    , 'customerOrderNo'
    , 'ud_StyleDepartment'  
    , 'ud_StyleCode'  
    , 'quantity'
    , 'insertedAt'

  ];
  OrderListSource!: MatTableDataSource<IMaWorkOrder>;
  
  OrderList: IMaWorkOrder[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  inventoryCodeForSearch: any;

  dateRangeForm !: FormGroup;
  totalOrderList: any;
  previousClickedRow: IMaWorkOrder | null = null;
  
 


  constructor(private services: OrderService, private formBuilder: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    this.formInitForDateFilter();
    this.getOrderListData();
    this.GetLiveClock();
  }


  GetLiveClock(){
      // Using Basic Interval
      this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
  
      // Using RxJS Timer
      this.subscription = timer(0, 1000)
        .pipe(
          map(() => new Date()),
          share()
        )
        .subscribe(time => {
          this.rxTime = time;
        });
    }
  
    ngOnDestroy() {
      clearInterval(this.intervalId);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

  }
  getOrderListData() {
    this.isloaded = true;
    this.services.getOrderListData().subscribe(res => {
      console.log('res', res);
      this.OrderList = res;
      this.totalOrderList = res.length; 
      this.inventoryCodeForSearch = res?.inventoryCode;
      this.OrderListSource = new MatTableDataSource(this.OrderList);
      this.OrderListSource.paginator = this.paginator;
      this.OrderListSource.sort = this.sort;
      console.log('getOrderListData', this.OrderList);
      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  } 





  owClicked(row: any) {
    this.router.navigate(['/order-view', this.inventoryCodeForSearch]);
  }


  openNewTab(rowData: any) {
    console.log('row',rowData);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/order-view', rowData.workOrderNo])
    );

    window.open(url, '_blank');
    rowData.clicked = !rowData.clicked;
  }

  onRowClick(row: IMaWorkOrder): void {
    if (this.previousClickedRow && this.previousClickedRow !== row) {
      this.previousClickedRow.clicked = false;
    }
  
    console.log('row', row);
    let invenCode = row.workOrderNo;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/order-view', invenCode ])
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
      filteredData = this.OrderList;
    } else {
      filteredData = this.OrderList.filter(item => {
        const itemDate = new Date(item.insertedAt);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }
    this.OrderListSource.data = filteredData;
    console.log('filteredData:', filteredData);
  }

  applyFilterSSSSClean() {
    this.dateRangeForm.get('startDate')?.reset(null);
    this.dateRangeForm.get('endDate')?.reset(null);
    this.applyFilterSSSS();
  }
  

    



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.OrderListSource.filter = filterValue.trim().toLowerCase();

    if (this.OrderListSource.paginator) {
      this.OrderListSource.paginator.firstPage();
    }
  }













}
 
