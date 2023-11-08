import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Vehicle } from '../model/vehicles';
import { AddVehicleService } from '../service/add-vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicleObject=new Vehicle();
  constructor( private _snackBar: MatSnackBar,private addServ:AddVehicleService) {  }

  onSubmit(): void {
    this.addServ.storeData(this.vehicleObject).subscribe({
      next(x)
      {alert("Data Added")},
      error(errormsg){},
      complete(){alert("completed")}
    })
   
    
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  
 



}
