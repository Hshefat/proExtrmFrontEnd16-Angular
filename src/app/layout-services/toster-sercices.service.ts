import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class TosterSercicesService {

 
  constructor(private toastr: ToastrService) { }

  showSuccess(message: any, title: any){
      this.toastr.success(message, title)
  }
}
