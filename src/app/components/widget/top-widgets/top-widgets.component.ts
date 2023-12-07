import { Component, OnInit } from '@angular/core';
import { 
  faBoxes,
  faMoneyBill,
  faTshirt,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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



  constructor() { }

  ngOnInit(): void {
  }

}
