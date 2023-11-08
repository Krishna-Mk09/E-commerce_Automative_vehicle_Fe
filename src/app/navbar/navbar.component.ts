import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authServ:AuthService,private router:Router){}
  ngOnInit():void{

  }
  public isLoggedIn(){
    return this.authServ.isLoggedIn()
  }

  public logOut(){
    this.authServ.clear();
    this.router.navigate(["/home"])
  }


}
