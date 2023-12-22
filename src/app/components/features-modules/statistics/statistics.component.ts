import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {


  isloaded = true;
  totalStyleListCount: any;

  
  constructor(private services: StyleService,

  ) { }
  
  ngOnInit(): void {

    this.snMethod();
  }


  snMethod() {
    setTimeout(() => {
      this.isloaded = false;
    }, 2000);
  }



}
