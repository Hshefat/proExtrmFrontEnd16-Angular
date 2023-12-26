import { Component, OnInit } from '@angular/core';
import { 
  faBoxes,
  faMoneyBill,
  faTshirt,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StyleService } from 'src/app/services/style.service';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

   
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faTshirt=faTshirt;
  faShoppingCart=faShoppingCart;

  isloaded = true;

  totalStyleListCount: any;
  getAllOrderListCount: any;

  constructor(private services: StyleService,

    ) { }
    

  ngOnInit(): void {
    this.getData();
    this.GetAllStyleListCount();
    this.GetAllOrderListCount();
  }

  getData() {
    this.services.getData().subscribe(res => {
      console.log(res);
    
      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  }

  GetAllStyleListCount() {
    this.services.GetAllStyleListCount().subscribe(res => {
      console.log(res);
      this.totalStyleListCount = res; 
      console.log('totalStyleListCount', this.totalStyleListCount);
      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  }

  GetAllOrderListCount() {
    this.services.GetAllOrderListCount().subscribe(res => {
      console.log(res);
      this.getAllOrderListCount = res; 
      console.log('getAllOrderListCount', this.getAllOrderListCount);
      this.isloaded = false;

    }, (error: any) => {
      console.error(error);
      this.isloaded = false;
    });
  }

  
}
