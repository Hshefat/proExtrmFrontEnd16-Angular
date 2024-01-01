import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GET_ALL_ORDER_LIST, GET_ORDER_BY_ID } from '../constants/base-constant.constant';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ApiUrl = 'https://localhost:7164/Order';
  constructor(private http: HttpClient) { }


  getOrderListData(): Observable<any> {
    return this.http.get<any>(this.ApiUrl + GET_ALL_ORDER_LIST ).pipe(map((res: any) => {
      return res;
    }));
  }

  Get_Order_By_Id(id: string): Observable<any> {
    const url = `${this.ApiUrl}${GET_ORDER_BY_ID}?id=${id}`; // Construct the complete URL with the ID as a query parameter
    return this.http.get<any>(url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }







}
