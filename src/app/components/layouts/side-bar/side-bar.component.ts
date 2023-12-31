import { Component, OnInit } from '@angular/core';



import {
  faClipboard,
  faAddressBook,
  faLifeRing,
  faBox,
  faMoneyBill,
  faChartBar,
  faTshirt,
  faCaravan,
  
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faAddressBook = faAddressBook;
  faChartBar = faChartBar; 
  faCircle = faLifeRing; 
  faClipboard = faClipboard;
  faTshirt=faTshirt;
  faCaravan=faCaravan;
  constructor() { }

  ngOnInit(): void {
  }

}
