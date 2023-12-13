import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {   ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardBoardComponent } from './components/features-modules/dashboard-board/dashboard-board.component';
import { HomeComponent } from './components/features-modules/home/home.component';
import { StyleListComponent } from './components/features-modules/style/style-list/style-list.component';
import { OrderListComponent } from './components/features-modules/order/order-list/order-list.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SideBarComponent } from './components/layouts/side-bar/side-bar.component';
import { PiChartsComponent } from './components/widget/pi-charts/pi-charts.component';
import { TopWidgetsComponent } from './components/widget/top-widgets/top-widgets.component';
import { ModulesComponent } from './components/widget/modules/modules.component';
import { FeaturesComponent } from './components/widget/features/features.component';
import { ChartComponent } from './components/widget/chart/chart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DemoTemplateComponent } from './components/features-modules/demo-template/demo-template.component';
import { WidgetBoardComponent } from './components/widget/widget-board/widget-board.component';
import { StatisticsComponent } from './components/features-modules/statistics/statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';


import { MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StyleEditViewComponent } from './components/features-modules/style/style-edit-view/style-edit-view.component';
import { OrderEditViewComponent } from './components/features-modules/order/order-edit-view/order-edit-view.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    DashboardBoardComponent,
    HomeComponent,
    StyleListComponent,
    OrderListComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PiChartsComponent,
    TopWidgetsComponent,
    ModulesComponent,
    FeaturesComponent,
    ChartComponent,
    NotfoundComponent,
    DemoTemplateComponent,
    WidgetBoardComponent,
    StatisticsComponent,
    StyleEditViewComponent,
    OrderEditViewComponent,




    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule,
    BrowserAnimationsModule,
    HttpClientModule,

    BrowserModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule, ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
