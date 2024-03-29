import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ITEMS_WITH_WORK_ORDERS, ImItem,
  GET_STYLE_BY_ID
 } from '../constants/base-constant.constant';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
      // BASE_API_URL: string = environment.baseApiEndPoint;

  private ApiUrl = 'https://localhost:7164/ImItem'
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + GET_ITEMS_WITH_WORK_ORDERS ).pipe(map((res: any) => {
      return res;
    }));
  }

  // getByIdEditView(id: string): Observable<any> {
  //   debugger;
  //   return this.http.get<any>(this.ApiUrl + GET_STYLE_BY_ID+ '/' + id).pipe(map((res: any) => {
  //     debugger;
  //     return res;
  //   }));
  // }

  getByIdEditView(id: string): Observable<any> {
    const url = `${this.ApiUrl}${GET_STYLE_BY_ID}?id=${id}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }


  /*  getLocationByObjectiveCostIdUsingProjectSummary(id: number): Observable<any> {
     return this.http.get<any>(this._BASE_URL + GET_BY_OBJECTIVE_AND_COST_ID_USING_PROJECT_SUMMARY + '/' + id);
 } */

}
