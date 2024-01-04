import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  dateFormat = "yyyy-MM-dd";
  language = "en";
  typeOfShipment: any;


  constructor(private route: ActivatedRoute,
    private services: OrderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private notifyTostServices: TosterSercicesService,
     
  ) { }

  ngOnInit(): void {
    this.getInventoryCode();
    this.formInitialize();
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

  
  formInitialize() {

    
    this.frmGroup = this.formBuilder.group({
      accessCode: new FormControl(''),
      agreedDeliveryDate: new FormControl(this.formatFormDate(new Date())),

      capacity: new FormControl(''),
      companyId: new FormControl(''),
      countryName: new FormControl(''),
      ctext: new FormControl(''),
      currentAccountId: new FormControl(''),
      customerOrderNo: new FormControl(''),
      cuttingApprovedDate: new FormControl(this.formatFormDate(new Date())),

      deliveryDate: new FormControl(this.formatFormDate(new Date())),
      employeeId: new FormControl(''),
      explanation: new FormControl(''),
      factoryId: new FormControl(''),
      forexId: new FormControl(''),
      forexUnitPrice: new FormControl(''),
      handoverDate: new FormControl(this.formatFormDate(new Date())),

      planDate: new FormControl(this.formatFormDate(new Date())),

      quantity: new FormControl(''),
      recipeQuantity: new FormControl(''),
      routeId: new FormControl(''),
      shipmentDate: new FormControl(this.formatFormDate(new Date())),

      typeOfShipment: new FormControl(''),
      ud_Status: new FormControl(''),
      ud_StyleCode: new FormControl(''),
      ud_StyleDepartment: new FormControl(''),
      unitPrice: new FormControl(''),
      workOrderDate: new FormControl(this.formatFormDate(new Date())),
      workOrderGroupCode: new FormControl(''),
      workOrderNo: new FormControl(''),
      workOrderTime: new FormControl(this.formatFormDate(new Date())),

      workOrderType: new FormControl(''),
      

    });
    this.isloaded = false;
  }
  formatFormDate(date: Date) {
    return formatDate(date, this.dateFormat, this.language);
  }
  
  setValueFromStyleViewCard(respone: any) {
      this.frmGroup.patchValue({ deliveryDate: this.formatFormDate(respone.deliveryDate) });
      this.frmGroup.patchValue({ agreedDeliveryDate: this.formatFormDate(respone.agreedDeliveryDate) });
      this.frmGroup.patchValue({ cuttingApprovedDate: this.formatFormDate(respone.cuttingApprovedDate) });
      this.frmGroup.patchValue({ handoverDate: this.formatFormDate(respone.handoverDate) });
      this.frmGroup.patchValue({ shipmentDate: this.formatFormDate(respone.shipmentDate) });
      this.frmGroup.patchValue({ workOrderDate: this.formatFormDate(respone.workOrderDate) });
      this.frmGroup.patchValue({ workOrderTime: this.formatFormDate(respone.workOrderTime) });
      this.frmGroup.patchValue({ planDate: this.formatFormDate(respone.planDate) });

      let result = (respone?.forexId === 1) ? 'USD' : respone?.forexId;

      let ud_Status;
      if (respone?.ud_Status === "102") {
        ud_Status = 'Confirmed';
      } else if (respone?.ud_Status === "101") {
        ud_Status = 'Projection';
      }
      

      try {
        if (respone.typeOfShipment === 1) {
          this.typeOfShipment = 'Air';
        } else if (respone.typeOfShipment === 2) {
          this.typeOfShipment = 'Ship';
        } else if (respone.typeOfShipment === 3) {
          this.typeOfShipment = 'By Sea';
        } else {
          // Handle default case if needed
          // For example: this.typeOfShipment = 'Unknown';
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
      

       
    this.frmGroup.patchValue({
      accessCode: respone?.accessCode, 
      capacity: respone?.capacity,
      companyId: respone?.companyId,
      countryName: respone?.mdCountryDto?.countryName,
      ctext: respone?.ctext,
      currentAccountId: respone?.currentAccountId,
      customerOrderNo: respone?.customerOrderNo,


      employeeId: respone?.hrEmployeeDto?.employeeName,
      explanation: respone?.explanation,
      factoryId: respone?.fiAccountDto?.currentAccountName,
      forexId: result,
      forexUnitPrice: respone?.forexUnitPrice,
      quantity: respone?.quantity,
      recipeQuantity: respone?.recipeQuantity,
      routeId: respone?.routeId,
      typeOfShipment: this.typeOfShipment,
      ud_Status: ud_Status,
      ud_StyleCode: respone?.ud_StyleCode,
      ud_StyleDepartment: respone?.ud_StyleDepartment,
      unitPrice: respone?.unitPrice,
      workOrderGroupCode: respone?.workOrderGroupCode,
      workOrderNo: respone?.workOrderNo,
      workOrderType: respone?.workOrderType,
    });
    this.isloaded = false;
  }


  setDate(){

  }

  Get_Order_By_Id() {
    this.isloaded = true;
    this.services.Get_Order_By_Id(this.objId)?.subscribe(res => {
      this.styleObj = res;
      console.log('ff',res)
      this.recIdForImage = res.recId;
      this.styleRecId = res.recId;
      this.setValueFromStyleViewCard(res)
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
 
