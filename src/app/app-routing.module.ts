import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/features-modules/home/home.component';
import { OrderListComponent } from './components/features-modules/order/order-list/order-list.component';
import { StyleListComponent } from './components/features-modules/style/style-list/style-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashboardBoardComponent } from './components/features-modules/dashboard-board/dashboard-board.component';
import { StatisticsComponent } from './components/features-modules/statistics/statistics.component';
import { StyleEditViewComponent } from './components/features-modules/style/style-edit-view/style-edit-view.component';

const routes: Routes = [
  
  { path: '', component: DashboardBoardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'style-list', component: StyleListComponent }, 
  { path: 'style-view/:id', component: StyleEditViewComponent }, 
  { path: 'style-view', component: StyleEditViewComponent }, 
  { path: 'order-list', component: OrderListComponent },  
  { path: 'statistics', component: StatisticsComponent },  
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
