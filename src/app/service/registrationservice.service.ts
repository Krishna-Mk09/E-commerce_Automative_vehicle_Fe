import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {


  constructor(private httpClient:HttpClient) { }
  storeData(data1: User) {
    return this.httpClient.post("http://localhost:8084/api/v1/register", data1);
  }
  

}
