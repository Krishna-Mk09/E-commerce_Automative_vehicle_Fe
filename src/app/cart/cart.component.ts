import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public products:any=[];
constructor(private cartServ:CartService){}
ngOnInit(){
  this.cartServ.getProducts().subscribe(responce=>{
    this.products=responce;

  })
}

removeProduct(product:any){
  this.cartServ.removeCartData(product);
}


}
