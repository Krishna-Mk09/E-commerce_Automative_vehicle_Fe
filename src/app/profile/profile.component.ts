import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../model/user';
import { RegistrationserviceService } from '../service/registrationservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

userObject =new User()



  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    role: ['', [Validators.required, Validators.minLength(2)]],
    
    address: ['', [Validators.required, Validators.minLength(2)]]



  }, { validators: [this.mustMatchValidator] });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private regServ:RegistrationserviceService) {  }
  get firstName() { return this.profileForm.get("firstName") }
  get lastName() { return this.profileForm.get("lastName") }
  get username() { return this.profileForm.get("username") }
  get password() { return this.profileForm.get("password"); }
  get confirmPassword() { return this.profileForm.get("confirmPassword"); }
  get role() { return this.profileForm.get("role"); }

  get address() { return this.profileForm.get("address") }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.regServ.storeData(this.userObject).subscribe({
      next(x)
      {alert("Data Added")},
      error(errormsg){},
      complete(){alert("completed")}
    })
   
    
    console.log(this.profileForm.value);
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.profileForm.reset();
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false }
    }
    return null;
  }
}


