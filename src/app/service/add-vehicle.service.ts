import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicles';

@Injectable({
  providedIn: 'root'
})
export class AddVehicleService {

  constructor(private httpClient:HttpClient) { }
  

  storeData(data1: Vehicle) {
    return this.httpClient.post("http://localhost:8083/api/v2/vehicle", data1);
  }
  updateVehicle(data:any, vehicleID:any):Observable<any>{
    return this.httpClient.put('${http://localhost:8083/api/v2/updateVehicle/}${vehicleID}',data)
  }
  // getData(id:any){
  //   return this.httpClient.get('http://localhost:8083/api/v2/getVehicleById/'+id)
  // }
}
