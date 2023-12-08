import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-style-edit-view',
  templateUrl: './style-edit-view.component.html',
  styleUrls: ['./style-edit-view.component.scss']
})
export class StyleEditViewComponent implements OnInit{

 
  itemId: any;
  conceptUuid: any;
  isloaded = false;
  styleList: any;



  constructor(private route: ActivatedRoute,
    private services: StyleService,
     ){}

  ngOnInit(): void {
    this.conceptUuid = this.route.snapshot.queryParams['id'];
    console.log(this.route,"concept Uuid");
    console.log(this.conceptUuid,"concept Uuid");
   

    this.route.params.subscribe(res => {
      this.itemId = res;
     console.log("OBJ",this.itemId.id);

  });



  this.getData();

  }


  getData(){
    this.isloaded = true;
    this.services.getData().subscribe(res=>{
      console.log(res); 
      this.styleList = res;

      this.isloaded = false;

    }, error => {
     
  }) ;
  }

}
