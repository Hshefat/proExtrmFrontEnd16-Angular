import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ITEMS_WITH_WORK_ORDERS, ImItem } from '../constants/base-constant.constant';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
      // BASE_API_URL: string = environment.baseApiEndPoint;

  private ApiUrl = 'http://localhost:62282/ImItem/GetItemsWithWorkOrders'
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.ApiUrl ).pipe(map((res: any) => {
      return res;
    }));
  }

  getByIdEditView(id: string): Observable<any> {
    return this.http.get<any>(this.ApiUrl ).pipe(map((res: any) => {
      return res;
    }));
  }



  /*  getLocationByObjectiveCostIdUsingProjectSummary(id: number): Observable<any> {
     return this.http.get<any>(this._BASE_URL + GET_BY_OBJECTIVE_AND_COST_ID_USING_PROJECT_SUMMARY + '/' + id);
 } */

}
