import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IStyle } from 'src/app/model/style.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TosterSercicesService } from 'src/app/layout-services/toster-sercices.service';
import { ItemAttatchment } from 'src/app/model/item-attatchment.model';
import { GET_IMAGE_FILE_BY_INVENTORY_ID } from 'src/app/constants/base-constant.constant';
import { ItemBom } from 'src/app/model/item-bom.model';
import { IMaWorkOrder } from 'src/app/model/ma-work-order.model';
@Component({
  selector: 'app-style-edit-view',
  templateUrl: './style-edit-view.component.html',
  styleUrls: ['./style-edit-view.component.scss']
})
export class StyleEditViewComponent implements OnInit {


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
    ,'workOrderNo'
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

  dataFabricColumns: string[] = [
    'ID'
    ,'inventoryCode'
    , 'inventoryName'
    , 'setName' 

  ];

  dataTrimsColumns: string[] = [
    'ID'
    ,'inventoryCode'
    , 'inventoryName'
    , 'variant1'
    , 'processCode'
    , 'processName'
    , 'setName' 

  ];

  
  dataSource!: MatTableDataSource<IStyle>;
  
  dataFabric!: MatTableDataSource<ItemBom>;
  dataTrims!: MatTableDataSource<ItemBom>;

  styleList: IStyle[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  previousClickedRow: IMaWorkOrder | null = null;



  imageRecId: any;
  getOrderList: any;
  InventoryName: any;
  getStyleCostObj: any;
  styleRecId: any;
  getFabricList: any;
  getTrimsList: any;


  constructor(private route: ActivatedRoute,
    private services: StyleService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private notifyTostServices: TosterSercicesService
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(res => {
    //   this.itemId = res;
    //   console.log("OBJ", this.itemId.id);
    // });
    this.formInitialize();
    this.searchFormInit();
    this.getInventoryCode();
    this.getByIdEditView();
    this.GetMercenEmployeesByInventoryCode(this.objId);
    this.GetOrderInfoByInventoryCode(this.objId);




    // this.getData();
    //  this.snMethod();

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
  
  // -----------------------------------------------------------------------------------

  formInitialize() {
    this.frmGroup = this.formBuilder.group({
      inventoryCode: new FormControl(''),
      inventoryName: new FormControl(''),
      protoTypeStyle: new FormControl(''),
      accessCode: new FormControl(''),
      departmentCode: new FormControl(''),
      department: new FormControl(''),
      itemDepartmentId: new FormControl(''),
      ud_Gender: new FormControl(''),
      ud_Customer: new FormControl(''),


      seasonCode: new FormControl(''),
      brand: new FormControl(''),
      category: new FormControl(''),
      producerInventoryCode: new FormControl(''),
      categoryId: new FormControl(''),
      ud_Pcertification: new FormControl(''),


      customerStyleNo: new FormControl(''),
      styleDeal: new FormControl(''),
      factory: new FormControl(''),
      ud_Smv: new FormControl(''),
      ud_LearningCurve: new FormControl(''),

      ud_Print: new FormControl(false),
      ud_NonWash: new FormControl(false),
      ud_Embrodery: new FormControl(false),
      emprodery: new FormControl(''),
      oldStyleCode: new FormControl(''),
      ud_Cmatrix: new FormControl(''),
      route: new FormControl(''),
      ud_Factory: new FormControl(''),

      washColorName: new FormControl(''),
      ud_StyleDescription: new FormControl(''),
      routeId: new FormControl(''),

      technicianCode: new FormControl(''),
      patternCutterGPQCode: new FormControl(''),
      representativeMercenDisCode: new FormControl(''),
      productionTeamLeadCode: new FormControl(''),
      buyersContractEmployeeIDCode: new FormControl(''),
      combinedValue: new FormControl(''),
      ud_OldCode: new FormControl(''),
      ud_StyleDeal: new FormControl(''),

      technicianName: new FormControl(''),
      patternCutterGPQName: new FormControl(''),
      representativeMercenDisName: new FormControl(''),
      productionTeamLeadName: new FormControl(''),
      buyersContractEmployeeIDName: new FormControl(''),

    });

    this.isloaded = false;
  }

  setValueFromStyleViewCard(respone: any) {
    try {
      switch (true) {
        case respone.ud_Print === 1:
          this.ud_print = true;
          break;
        case respone.ud_Embrodery === 1:
          this.ud_Embrodery = true;
          break;
        case respone.ud_NonWash === 1:
          this.ud_NonWash = true;
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    this.frmGroup.patchValue({
      ud_Print: this.ud_print,
      ud_Embrodery: this.ud_Embrodery,
      ud_NonWash: this.ud_NonWash,

      inventoryCode: respone?.inventoryCode,
      inventoryName: respone?.inventoryName,
      protoTypeStyle: respone?.protoTypeStyle,
      accessCode: respone?.accessCode,

      departmentCode: respone?.imItemDepartmentDto.departmentCode,
      departmentName: respone?.imItemDepartmentDto?.departmentName,
      ud_Customer: respone?.imItemDepartmentDto?.ud_Customer,
      itemDepartmentId: respone?.itemDepartmentId,
      ud_Gender: respone?.ud_Gender,
      seasonCode: respone?.seasonCode,
      specialCode: respone?.specialCode,
      technicianId: respone?.technicianId,
      brand: respone?.imMarkDto?.markName,

      category: respone?.imCategoryDto?.categoryName,
      categoryId: respone?.categoryId,
      ud_Pcertification: respone?.ud_Pcertification,
      customerStyleNo: respone?.customerStyleNo,
      ud_StyleDeal: respone?.ud_StyleDeal,
      ud_Factory: respone?.ud_Factory,

      ud_Smv: respone?.ud_Smv,
      producerInventoryCode: respone?.producerInventoryCode,
      print: respone?.print,
      emprodery: respone?.emprodery,
      ud_OldCode: respone?.ud_OldCode,
      ud_Cmatrix: respone?.ud_Cmatrix,
      route: respone?.route,
      ud_LearningCurve: respone?.ud_LearningCurve,
      nonWash: respone?.nonWash,
      washColorName: respone?.washColorName,
      ud_StyleDescription: respone?.ud_StyleDescription,
      routeId: respone?.routeId,

    });
    this.isloaded = false;
  }



  GetMercenEmployeesByInventoryCode(respone: any) {
    this.services.GetMercenEmployeesByInventoryCode(respone).subscribe(res => {
      this.buyerContactList = res;
      console.log('buyerContactList', this.buyerContactList);
      this.setFormWithData(res);
    })
    this.isloaded = false;
  };
  setFormWithData(respons: any) {
    this.concatenatedBuyersContract = respons[1]?.hrEmployeeDto?.employeeCode + ' ' + respons[1]?.hrEmployeeDto?.employeeName;
    this.concatenatedrepresentativeMercenDisName = respons[2]?.hrEmployeeDto?.employeeCode + ' ' + respons[2]?.hrEmployeeDto?.employeeName;
    this.concatenatedtechnicianName = respons[0]?.hrEmployeeDto?.employeeCode + ' ' + respons[0]?.hrEmployeeDto?.employeeName;
    this.concatenatedpatternCutterGPQName = respons[1]?.hrEmployeeDto?.employeeCode + ' ' + respons[1]?.hrEmployeeDto?.employeeName;
    this.concatenatedproductionTeamLeadName = respons[3]?.hrEmployeeDto?.employeeCode + ' ' + respons[3]?.hrEmployeeDto?.employeeName;

    if (respons && respons.length > 0) {
      this.frmGroup.patchValue({
        // buyersContractEmployeeIDName: this.concatenatedBuyersContract,
        // representativeMercenDisName: this.concatenatedrepresentativeMercenDisName,
        // technicianName: this.concatenatedtechnicianName,
        // patternCutterGPQName: this.concatenatedpatternCutterGPQName,
        // productionTeamLeadName: this.concatenatedproductionTeamLeadName,
        // buyersContractEmployeeIDCode:  respons[1]?.hrEmployeeDto?.employeeCode,
        buyersContractEmployeeIDName: respons[1]?.hrEmployeeDto?.employeeName,
        // representativeMercenDisCode: respons[2]?.hrEmployeeDto?.employeeCode,
        representativeMercenDisName: respons[1]?.hrEmployeeDto?.employeeName,
        // technicianCode: respons[0]?.hrEmployeeDto?.employeeCode,
        technicianName: respons[3]?.hrEmployeeDto?.employeeName,
        // patternCutterGPQCode: respons[1]?.hrEmployeeDto?.employeeCode,
        patternCutterGPQName: respons[0]?.hrEmployeeDto?.employeeName,
        // productionTeamLeadCode: respons[3]?.hrEmployeeDto?.employeeCode,
        productionTeamLeadName: respons[2]?.hrEmployeeDto?.employeeName,

      });
    }




  }



  searchFormInit(): void {
    this.searchFrmGroup = new FormGroup({
      searchInventoryCode: new FormControl(''),

    });
  }

  // button Clicked By inventoryCode search 
  searchInputValueByInventoryCode(form: FormGroup) {
    this.searchInventoryCode = form.value.inventoryCode;
    if (this.objId != null) {
      this.GetOrderInfoByInventoryCode(this.searchInventoryCode);
      this.GetMercenEmployeesByInventoryCode(this.searchInventoryCode);
    
      this.services.getByIdEditView(this.searchInventoryCode).subscribe(res => {
        this.styleObj = res;
        if (res) {
          this.router.navigate(['/style-view/', this.searchInventoryCode]);
        }
        this.setValueFromStyleViewCard(res);
        this.GetStyleCostById(res?.recId);
        this.GetStyle_BOM_Fabric_ById(res?.recId);
        this.GetStyle_BOM_TrimsById(res?.recId);
      },
        (error: any) => {

          alert('No Data')

          console.error(error);
        })
    }
    this.isloaded = false;
  }


  tostButton() {
    // this.toastr.success('Hello world!', 'Toastr fun!');
    this.notifyTostServices.showSuccess("Data shown successfully !!", "Notification")
  }



  snMethod() {
    this.isloaded = true;
    setTimeout(() => {
      this.isloaded = false;
    }, 6000);
  }

  getData() {
    this.isloaded = true;
    this.services.getData().subscribe(res => {
      this.styleList = res;
      this.InventoryName = res.InventoryName;
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.sort = this.sort;
    }, (error: any) => {
      console.error(error);
    });
    this.isloaded = false;

  }


  getByIdEditView() {
    this.isloaded = true;
    this.services.getByIdEditView(this.objId)?.subscribe(res => {
      this.styleObj = res;
      console.log('ff',res)
      this.recIdForImage = res.recId;
      this.styleRecId = res.recId;
      this.setValueFromStyleViewCard(res);
      this.GetStyleCostById(res?.recId);
      this.GetStyle_BOM_Fabric_ById(res?.recId);
      this.GetStyle_BOM_TrimsById(res?.recId);
    
    })
    this.isloaded = false;
  };

  


  GetOrderInfoByInventoryCode(recId:any) {
    this.isloaded = true;
    this.services.GetOrderInfoByInventoryCode(recId)?.subscribe(res => {
      this.getOrderList = res;
      console.log('GetOrderInfoByInventoryCode', this.getOrderList)
      this.dataSource = new MatTableDataSource(this.getOrderList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.isloaded = false;
  };


  GetStyle_BOM_Fabric_ById(recId:any) {
    this.isloaded = true;
    this.services.GetStyle_BOM_Fabric_ById(recId)?.subscribe(res => {
      this.getFabricList = res;
      console.log('getFabricList', this.getFabricList)
      this.dataFabric = new MatTableDataSource(this.getFabricList);
      this.dataFabric.paginator = this.paginator;
      this.dataFabric.sort = this.sort;
    })
    this.isloaded = false;
  };

  GetStyle_BOM_TrimsById(recId:any) {
    this.isloaded = true;
    this.services.GetStyle_BOM_TrimsById(recId)?.subscribe(res => {
      this.getTrimsList = res;
      console.log('getTrimsList', this.getTrimsList)
      this.dataTrims = new MatTableDataSource(this.getTrimsList);
      this.dataTrims.paginator = this.paginator;
      this.dataTrims.sort = this.sort;
    })
    this.isloaded = false;
  };


  GetStyleCostById(styleRecId:any) {
    this.isloaded = true;
    this.services.GetStyleCostById(styleRecId)?.subscribe(res => {
      this.getStyleCostObj = res;
      console.log('getStyleCostObj', res)
    })
    this.isloaded = false;
  };




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 
  onRowClick(row: IMaWorkOrder): void {
    if (this.previousClickedRow && this.previousClickedRow !== row) {
      this.previousClickedRow.clicked = false;
    }
  
    console.log('row', row);
    let invenCode = row;
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/order-view', invenCode ])
    );
    console.log('row.inventorycode', invenCode);
    window.open(url, '_blank');
  
    row.clicked = !row.clicked;
    this.previousClickedRow = row.clicked ? row : null;
  }
  











}




