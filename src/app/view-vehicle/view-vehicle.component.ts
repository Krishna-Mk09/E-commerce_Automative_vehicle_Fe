import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { Vehicle } from '../model/vehicles';
import { ViewVehicleService } from '../service/view-vehicle.service';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {
  constructor(private vehicleServ: ViewVehicleService, private route: ActivatedRoute) { }

  vehicles: Vehicle[] = [];
  public vehicleID: any | null = null

  ngOnInit(): void {
    this.vehicleServ.fetchAllData().subscribe({
      next: data => { this.vehicles = data },
      error() { alert("error occured while loading the vehicles") },          //this method is optional
      complete() { alert("completed") }                                    //this method is optional
    });

   
  }

}
