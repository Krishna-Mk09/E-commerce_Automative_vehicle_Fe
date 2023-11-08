import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartData:any=[];
  cartList=new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.cartList.asObservable();
  }
  setProduct(product:any){
    this.cartData.push(...product);
    this.cartList.next(product);
  }
  addToCart(product:any){
    this.cartData.push(product);
    this.cartList.next(this.cartData);
    console.log(this.cartData);
    
    
  }
  removeCartData(product:any){
    this.cartData.map((product2:any,index:any)=>{
      if(product.id===product2.id){
        this.cartData.splice(index,1)
      }
    })
  }


}
