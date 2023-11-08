import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicles';

@Injectable({
  providedIn: 'root'
})
export class ViewVehicleService {

  constructor(private httpClient:HttpClient) { }
  URL:string="http://localhost:8083/api/v2/getAllVehicles";

  fetchAllData(): Observable<Array<Vehicle>> {
    return this.httpClient.get<Array<Vehicle>>(this.URL)
  }


  post(data:Vehicle){
    return this.httpClient.post(this.URL,data)
  }
}
