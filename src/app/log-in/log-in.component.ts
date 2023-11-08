import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private loginService: LoginService, private authservice: AuthService, private router: Router) { }
  ngOnInit(): void {

  }

  onSubmit(logInForm: NgForm): void {
    this.loginService.login(logInForm.value).subscribe(
      (response: any) => {
        console.log(response);
        this.authservice.setRole(response.user.role);
        this.authservice.setToken(response.jwtToken);

        this.authservice.setToken(response.jwtToken);
        console.log(response.user.role);

        const role = response.user.role;
        if (role === "admin") {
          this.router.navigate(["/admin"]);
        } else if (role === "user") {
          this.router.navigate(["/user"]);

        } else {
          alert("Incorrect details")
        }
      },
      (error) => {
        console.log(error);

      }
    )

  }


}


