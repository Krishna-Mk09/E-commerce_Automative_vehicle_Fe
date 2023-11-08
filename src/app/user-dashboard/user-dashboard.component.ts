import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private cartServ:CartService){

  }
 
  orderCounts:number=0;
  
  ngOnInit(){
    this.cartServ.getProducts().subscribe(res=>
      this.orderCounts=res.length)
  }
}
