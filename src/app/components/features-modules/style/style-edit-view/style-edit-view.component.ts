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
  frmGroup!: FormGroup;
  searchFrmGroup!: FormGroup;

  dataSource!: MatTableDataSource<IStyle>;
  @ViewChild(MatSort) sort!: MatSort;
  styleList: IStyle[] = [];




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

    this.getInventoryCode();
    this.getByIdEditView();
    this.formInitialize();
    this.searchFormInit();


    this.getData();
    // this.snMethod();

  }

  // -----------------------------------------------------------------------------------

  formInitialize() {
    this.frmGroup = this.formBuilder.group({
      inventoryCode: [''],
      inventoryName: [''],
      protoTypeStyle: [''],
      accessCode: [''],
      customer: [''],
      department: [''],
      itemDepartmentId: [''],
      gender: [''],


      seasonCode: [''],
      brand: [''],
      category: [''],
      categoryId: [''],
      proCertification: [''],


      customerStyleNo: [''],
      styleDeal: [''],
      factory: [''],
      ud_Smv: [''],
      ud_LearningCurve: [''],
      print: [''],
      emprodery: [''],
      oldStyleCode: [''],
      complexityMatrix: [''],
      route: [''],
      ud_Factory: [''],
      nonWash: [''],



      washColorName: [''],
      ud_StyleDescription: [''],


      buyersContract: [''],
      merchandiser: [''],
      productionMerchandiserId: [''],
      technician: [''],
      gpq: [''],
      teamLeader: [''],
    })
  }
  setValueFromMtbfData(respone: any) {
    this.frmGroup.patchValue({
      inventoryCode: respone.inventoryCode,
      inventoryName: respone.inventoryName,
      protoTypeStyle: respone.protoTypeStyle,

      accessCode: respone.accessCode,
      customer: respone.customer,
      department: respone.department,
      itemDepartmentId: respone.itemDepartmentId,
      gender: respone.gender,
      seasonCode: respone.seasonCode,
      specialCode: respone.specialCode,
      technicianId: respone.technicianId,
      brand: respone.brand,

      category: respone.category,
      categoryId: respone.categoryId,
      ud_Pcertification: respone.udPcertification,
      customerStyleNo: respone.customerStyleNo,
      styleDeal: respone.styleDeal,
      ud_Factory: respone.ud_Factory,

      ud_Smv: respone.ud_Smv,
      print: respone.print,
      emprodery: respone.emprodery,
      udOldCode: respone.udOldCode,
      complexityMatrix: respone.complexityMatrix,
      route: respone.route,
      ud_LearningCurve: respone.ud_LearningCurve,
      nonWash: respone.nonWash,



      washColorName: respone.washColorName,
      ud_StyleDescription: respone.ud_StyleDescription,


      buyersContract: respone.buyersContract,
      productionMerchandiserId: respone.productionMerchandiserId,
      technician: respone.technician,
      representativeId: respone.representativeId,
      routeId: respone.routeId,
      gpq: respone.gpq,
      teamLeader: respone.teamLeader,

    });
  }

  searchFormInit(): void {
    this.searchFrmGroup = new FormGroup({
      searchInventoryCode: new FormControl(''),

    });
  }

  searchInputValueByInventoryCode(form: FormGroup) {
    this.isloaded = true;
    this.searchInventoryCode = form.value.inventoryCode;
    console.log('fff', form.value.inventoryCode);

    this.toastr.success('Hello world!', 'Toastr fun!');
    if (this.searchInventoryCode != null) {
      this.services.getByIdEditView(this.searchInventoryCode).subscribe(res => {
        this.isloaded = true;
        this.styleObj = res;
        if (res) {
          this.router.navigate(['/style-view/', this.searchInventoryCode]);
        }
        console.log('searchInventoryCode', res)
        this.setValueFromMtbfData(res)
        this.isloaded = false;

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
  getInventoryCode() {
    let id = this.route.paramMap.subscribe({
      next: (param) => {
        this.objId = param.get('id');
        console.log('Cons Id', this.objId);

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
    this.services.getData().subscribe(res => {
      this.isloaded = true;
      console.log(res);
      this.styleList = res;
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.sort = this.sort;

      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
    });
  }


  getByIdEditView() {
    this.services.getByIdEditView(this.objId).subscribe(res => {
      this.isloaded = true;
      this.styleObj = res;
      console.log('styleObj', res)
      this.setValueFromMtbfData(res)
      this.isloaded = false;
    })
  };




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }













}




