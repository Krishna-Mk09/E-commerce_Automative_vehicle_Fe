import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../model/vehicles';
import { CartService } from '../service/cart.service';
import { ViewVehicleService } from '../service/view-vehicle.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent {
  constructor(private vehicleServ: ViewVehicleService, private route: ActivatedRoute,private _snackBar:MatSnackBar,private cartServ:CartService){ }

  vehicles: Vehicle[] = [];
  public vehicleID: any | null = null

  ngOnInit(): void {
    this.vehicleServ.fetchAllData().subscribe({
      next: data => { this.vehicles = data },
      error() { alert("error occured while loading the vehicles") },          //this method is optional
      complete() { alert("completed") }                                    //this method is optional
    });
  }
  // @Output()
  // emmiter:EventEmitter<number> = new EventEmitter<number>();

  // counter:number=0;
  // vehicle:any
  // addToCartFunc(){
  //   this.emmiter.emit(this.counter++);
    
  //   this._snackBar.open('Added', '', {
  //     duration: 500,
  //      panelClass: ['mat-toolbar', 'mat-primary']
  //    }
  //   ) 
  // }
  addToCart(vehicle:any){
    this.cartServ.addToCart(vehicle);
  }

}
