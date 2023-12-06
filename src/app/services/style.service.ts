import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private ApiUrl = '/ImItem/GetItemsWithWorkOrders'; 

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get(this.ApiUrl) ;
  }



}
