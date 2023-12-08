import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StyleService } from 'src/app/services/style.service';

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

    this.callAllMethods();
    this.getData();

  }

  getInventoryCode() {
    this.route.paramMap.subscribe({
      next: (param) => {
        this.objId = param.get('id');
        console.log('Cons Id', this.objId)
      }
    })
  }


  callAllMethods() {
    setTimeout(() => {
    }, 2000);
  }

  
  getData() {
    this.services.getData().subscribe(res => {
      console.log(res);
      this.styleList = res;
    } );
  }

  getByIdEditView() {
    this.services.getByIdEditView(this.objId).subscribe(res => {
      this.styleObj = res;
      console.log('Cons Id',res)
    })
  };


}




