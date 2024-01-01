import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TosterSercicesService } from 'src/app/layout-services/toster-sercices.service';
import { ItemAttatchment } from 'src/app/model/item-attatchment.model';
import { ItemBom } from 'src/app/model/item-bom.model';
import { IMaWorkOrder } from 'src/app/model/ma-work-order.model';
import { IStyle } from 'src/app/model/style.model';
import { OrderService } from 'src/app/services/order.service';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-order-edit-view',
  templateUrl: './order-edit-view.component.html',
  styleUrls: ['./order-edit-view.component.scss']
})
export class OrderEditViewComponent implements OnInit {


  objId: any;
  searchInventoryCode: any;
  itemId: any;
  conceptUuid: any;
  isloaded = false;
  styleObj: any;
  buyerContactList: any;
  frmGroup!: FormGroup;
  searchFrmGroup!: FormGroup;

  itemAttatchmentList: ItemAttatchment[] = [];
  inventoryCode: any;
  concatenatedBuyersContract: any;
  concatenatedrepresentativeMercenDisName: any;
  concatenatedtechnicianName: any;
  concatenatedpatternCutterGPQName: any;
  concatenatedproductionTeamLeadName: any;
  ud_print: any;
  ud_Embrodery: any;
  ud_NonWash: any;
  imageObj: any;
  recIdForImage: any;
  imageUrl: any;
  imageList: any;
  imageFileName: any;


  displayedColumns: string[] = [
    'ID'
    , 'workOrderNo'
    , 'workOrderDate'
    , 'deliveryDate'
    , 'cuttingApprovedDate'
    , 'workOrderGroupCode'
    , 'customerOrderNo'
    , 'explanation'
    , 'quantity'
    , 'forexId'
    , 'forexUnitPrice'
    , 'status'
    , 'unitPrice'

  ];

 


  dataSource!: MatTableDataSource<IMaWorkOrder>;
 

  styleList: IMaWorkOrder[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;




  imageRecId: any;
  getOrderList: any;
  InventoryName: any;
  getStyleCostObj: any;
  styleRecId: any;
  getFabricList: any;
  getTrimsList: any;
  previousClickedRow: IMaWorkOrder | null = null;



  constructor(private route: ActivatedRoute,
    private services: OrderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private notifyTostServices: TosterSercicesService
  ) { }

  ngOnInit(): void {
    this.getInventoryCode();
    this.Get_Order_By_Id();
  }
  getInventoryCode() {
    let id = this.route.paramMap.subscribe({
      next: (param) => {
        this.objId = param.get('id');
        console.log('Cons Id', this.objId);
        this.isloaded = false;
      }
    })
  }

  Get_Order_By_Id() {
    this.isloaded = true;
    this.services.Get_Order_By_Id(this.objId)?.subscribe(res => {
      this.styleObj = res;
      console.log('ff',res)
      this.recIdForImage = res.recId;
      this.styleRecId = res.recId;
      
    
    })
    this.isloaded = false;
  };


  onRowClick(row: IMaWorkOrder): void {
    if (this.previousClickedRow && this.previousClickedRow !== row) {
      this.previousClickedRow.clicked = false;
    }
  
    console.log('row', row);
    let invenCode = row.workOrderNo;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/order-view',invenCode])
    );
    console.log('row.inventorycode', invenCode);
    window.open(url, '_blank');
  
    row.clicked = !row.clicked;
    this.previousClickedRow = row.clicked ? row : null;
  }










}
 
