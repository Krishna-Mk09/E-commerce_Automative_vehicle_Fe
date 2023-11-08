import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Vehicle } from '../model/vehicles';
import { AddVehicleService } from '../service/add-vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent {
  vehicleObject=new Vehicle();
  vehicleID="";
  constructor( private _snackBar: MatSnackBar,private addServ:AddVehicleService, private router:ActivatedRoute) {  }
 
ngOnInit():void{
  

}

  onSubmit(): void {
    this.addServ.updateVehicle(this.vehicleObject,this.vehicleID).subscribe({
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
