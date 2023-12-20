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
  isloaded = true;
  styleObj: any;
  buyerContactList: any;
  frmGroup!: FormGroup;
  searchFrmGroup!: FormGroup;

  dataSource!: MatTableDataSource<IStyle>;
  @ViewChild(MatSort) sort!: MatSort;
  styleList: IStyle[] = [];
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



  private ApiUrl = 'https://localhost:7164/ImItem';
  imageRecId: any;
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
    this.GetMercenEmployeesByInventoryCode();
    // this.GetImageFileByInventoryId();
    this.formInitialize();
    this.searchFormInit();


    // this.getData();
    // this.snMethod();

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
      console.log("response.ud_Print", respone.ud_Print);
      console.log("response.ud_Embrodery", respone.ud_Embrodery);
      console.log("response.ud_NonWash", respone.ud_NonWash);

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



      inventoryCode: respone.inventoryCode,
      inventoryName: respone.inventoryName,
      protoTypeStyle: respone.protoTypeStyle,
      accessCode: respone.accessCode,

      departmentCode: respone.imItemDepartmentDto.departmentCode,
      departmentName: respone?.imItemDepartmentDto?.departmentName,
      ud_Customer: respone?.imItemDepartmentDto?.ud_Customer,
      itemDepartmentId: respone.itemDepartmentId,
      ud_Gender: respone.ud_Gender,
      seasonCode: respone.seasonCode,
      specialCode: respone.specialCode,
      technicianId: respone.technicianId,

      brand: respone.imMarkDto.markName,


      category: respone.imCategoryDto.categoryName,
      categoryId: respone.categoryId,
      ud_Pcertification: respone.ud_Pcertification,
      customerStyleNo: respone.customerStyleNo,
      ud_StyleDeal: respone.ud_StyleDeal,
      ud_Factory: respone.ud_Factory,

      ud_Smv: respone.ud_Smv,
      producerInventoryCode: respone.producerInventoryCode,
      print: respone.print,
      emprodery: respone.emprodery,
      udOldCode: respone.udOldCode,
      ud_Cmatrix: respone.ud_Cmatrix,
      route: respone.route,
      ud_LearningCurve: respone.ud_LearningCurve,
      nonWash: respone.nonWash,
      washColorName: respone.washColorName,
      ud_StyleDescription: respone.ud_StyleDescription,
      routeId: respone.routeId,

    });
    this.isloaded = false;
  }



  GetMercenEmployeesByInventoryCode() {
    this.services.GetMercenEmployeesByInventoryCode(this.objId).subscribe(res => {
      this.buyerContactList = res;
      console.log('GetMercenEmployeesByInventoryCode', res);
      // this.buyerContactSetValue(res)
      this.populateFormWithData(res);
    })
    this.isloaded = false;
  };
  populateFormWithData(respons: any) {
    this.concatenatedBuyersContract = respons[1]?.hrEmployeeDto?.employeeCode + ' ' + respons[1]?.hrEmployeeDto?.employeeName;
    this.concatenatedrepresentativeMercenDisName = respons[2]?.hrEmployeeDto?.employeeCode + ' ' + respons[2]?.hrEmployeeDto?.employeeName;
    this.concatenatedtechnicianName = respons[0]?.hrEmployeeDto?.employeeCode + ' ' + respons[0]?.hrEmployeeDto?.employeeName;
    this.concatenatedpatternCutterGPQName = respons[1]?.hrEmployeeDto?.employeeCode + ' ' + respons[1]?.hrEmployeeDto?.employeeName;
    this.concatenatedproductionTeamLeadName = respons[3]?.hrEmployeeDto?.employeeCode + ' ' + respons[3]?.hrEmployeeDto?.employeeName;

    if (respons && respons.length > 0) {
      console.log('respp', respons);
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
    console.log('searchInventoryCode', this.searchInventoryCode);

    if (this.objId != null) {
      this.services.getByIdEditView(this.searchInventoryCode).subscribe(res => {
        this.styleObj = res;
        if (res) {
          this.router.navigate(['/style-view/', this.searchInventoryCode]);
        }
        console.log('searchInventoryCode', res)
        this.setValueFromStyleViewCard(res)

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
    }, 2000);
  }

  getData() {
    this.services.getData().subscribe(res => {
      console.log(res);
      this.styleList = res;
      this.dataSource = new MatTableDataSource(this.styleList);
      this.dataSource.sort = this.sort;
    }, (error: any) => {
      console.error(error);
    });
    this.isloaded = false;

  }


  getByIdEditView() {
    this.services.getByIdEditView(this.objId)?.subscribe(res => {
      this.styleObj = res;
      this.recIdForImage = res.recId;
      console.log('styleObj', res)
      console.log('recIdForImage', this.recIdForImage)
      this.setValueFromStyleViewCard(res);
      this.GetImageFileByInventoryId(res?.recId);
    })
    this.isloaded = false;
  };

  GetImageFileByInventoryId(recId: any) {
    this.services.GetImageFileByInventoryId(recId)?.subscribe(res => {
      this.itemAttatchmentList = res;
      console.log('imageList', res)
     
      this.itemAttatchmentList.forEach(dd=>{
        this.imageObj = dd.fileName;
        this.imageRecId = dd.recId;
        console.log(' this.imageObj ', this.imageObj  );
        console.log(' this.imageRecId ', this.imageRecId  );

      })


    })
    this.isloaded = false;
  };


  
  



  // GetImageFileByInventoryId(inventoryId: any): void {
  //   this.services.GetImageFileByInventoryId(inventoryId).subscribe(
  //     (data: Blob) => {
  //       this.createImageFromBlob(data);
  //     },
  //     error => {
  //       console.error('Error fetching image: ', error);
  //     }
  //   );
  // }

  // createImageFromBlob(image: Blob): void {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     this.imageFileName = reader.result;
  //     console.log("this.Image", this.imageFileName);
  //   }, false);

  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }













}




