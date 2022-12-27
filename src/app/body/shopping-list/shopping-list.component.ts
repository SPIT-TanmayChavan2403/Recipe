import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  card: {style: string}
  cartItems: {image: string, name: string, quantity: number} []
  constructor(public service: DataService){
      this.card= {
          style: "width: 0%;"
      }
      this.cartItems = [];
  }

  addToCart(name: string, imageURL: string){
      this.card.style = "width: 40%";
      let flag: boolean = false;
      this.cartItems.map(item => {
        if (item.name == name){
          flag = true;
          item.quantity += 1;
        }
      })
      if (!flag){
        this.cartItems.push({
          name: name,
          image: imageURL,
          quantity: 1
        })
      }
  }

  increaseQuantity(name: string): void{
    this.cartItems.forEach((item, idx) => {
      if (item.name == name){
        item.quantity += 1;
      }
    })
  }

  decreaseQuantity(name: string): void {
    console.log('Function is being called');
    this.cartItems.forEach((item, idx) => {

      if (item.name == name){
        if (item.quantity == 1){ // Checking if we are only having 1 item left then decreasing will remove the item from list.
          this.cartItems.splice(idx, 1);
        } else {
          item.quantity -= 1;
        }
      }
    })
    if (this.cartItems.length === 0){
      this.card.style = "width: 0%";
    }
  }

  clearCart(){
    this.cartItems.splice(0, this.cartItems.length);
    this.card.style = "width: 0%";
  }

}
