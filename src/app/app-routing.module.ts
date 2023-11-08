import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AdminComponent } from './admin/admin.component';
import { AdminguardGuard } from './adminguard.guard';
import { CartComponent } from './cart/cart.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserviewComponent } from './userview/userview.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminguardGuard],
    children: [
      { path: "view", component: ViewVehicleComponent },
      { path: "add", component: AddVehicleComponent },
      { path: "edit/:vehicleID", component: EditVehicleComponent },

    ]
  },
  {
    path: 'user', component: UserDashboardComponent,
    canActivate: [AdminguardGuard],
    children: [
      { path: "userview", component: UserviewComponent },

    ]
  },
  { path: 'cart', component: CartComponent },

  { path: 'registration', component: ProfileComponent },
  { path: 'login', component: LogInComponent },


  { path: 'notfound', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
