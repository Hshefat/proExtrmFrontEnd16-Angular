import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-board',
  templateUrl: './dashboard-board.component.html',
  styleUrls: ['./dashboard-board.component.scss']
})
export class DashboardBoardComponent implements OnInit {
  isloaded = true;


   ngOnInit(): void {

    this.snMethod();
  }
   

   snMethod(){
    setTimeout(()=>{     
      this.isloaded = false;
  }, 2000);
   }


}
