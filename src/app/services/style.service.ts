import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GET_ALL_ORDER_LIST_COUNT, GET_ALL_STYLE_LIST, GET_ALL_STYLE_LIST_COUNT, GET_MERCEN_EMPLOYEES_BY_INVENTORY_CODE, GET_ORDER_INGO_BY_INVENTORY_CODE, GET_STYLE_BOM_FABRIC_BY_ID, GET_STYLE_BOM_TRIMS_BY_ID, GET_STYLE_BY_ID, GET_STYLE_COST_BY_ID } from '../constants/base-constant.constant';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
      // BASE_API_URL: string = environment.baseApiEndPoint;

  // private ApiUrl = 'https://localhost:7164/ImItem';
  private ApiUrl = 'https://localhost:7164/Style';
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + GET_ALL_STYLE_LIST ).pipe(map((res: any) => {
      return res;
    }));
  }

  GetAllStyleListCount(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + GET_ALL_STYLE_LIST_COUNT ).pipe(map((res: any) => {
      return res;
    }));
  }

  GetAllOrderListCount(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + GET_ALL_ORDER_LIST_COUNT ).pipe(map((res: any) => {
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

  GetStyleCostById(id: string): Observable<any> {
    const url = `${this.ApiUrl}${GET_STYLE_COST_BY_ID}?id=${id}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  GetMercenEmployeesByInventoryCode(inventoryCode: string): Observable<any> {
    const url = `${this.ApiUrl}${GET_MERCEN_EMPLOYEES_BY_INVENTORY_CODE}?inventoryCode=${inventoryCode}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  GetOrderInfoByInventoryCode(inventoryCode: string): Observable<any> {
    const url = `${this.ApiUrl}${GET_ORDER_INGO_BY_INVENTORY_CODE}?inventoryCode=${inventoryCode}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  GetStyle_BOM_Fabric_ById(inventoryID: any): Observable<any> {
    const url = `${this.ApiUrl}${GET_STYLE_BOM_FABRIC_BY_ID}?inventoryID=${inventoryID}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  GetStyle_BOM_TrimsById(inventoryID: any): Observable<any> {
    const url = `${this.ApiUrl}${GET_STYLE_BOM_TRIMS_BY_ID}?inventoryID=${inventoryID}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

 

}
