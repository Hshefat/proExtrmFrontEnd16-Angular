import { Component, OnInit } from '@angular/core';

import { 
  faBoxes,
  faMoneyBill,
  faCommentDollar,
  faFunnelDollar,
  faSearchDollar,
  faDollarSign,
  faCommentsDollar,
  faFileInvoiceDollar,
  
  faTshirt,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './dashboard-board.component.html',
  styleUrls: ['./dashboard-board.component.scss']
})
export class DashboardBoardComponent implements OnInit {
  isloaded = true;
 
  faCommentDollar=faCommentDollar;
  faFunnelDollar=faFunnelDollar;
  faSearchDollar=faSearchDollar;
  faDollarSign=faDollarSign;
  faCommentsDollar=faCommentsDollar;
  faFileInvoiceDollar=faFileInvoiceDollar;


  

  ngOnInit(): void {

    this.snMethod();
  }


  snMethod() {
    setTimeout(() => {
      this.isloaded = false;
    }, 2000);
  }


}
