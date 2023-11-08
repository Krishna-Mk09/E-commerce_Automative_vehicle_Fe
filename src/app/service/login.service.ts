import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../model/login';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  )
  constructor(private http: HttpClient) { }


  login(loginData: any) {
    return this.http.post("http://localhost:8084/api/v1/login", loginData, { headers: this.requestHeader })
  }


}
