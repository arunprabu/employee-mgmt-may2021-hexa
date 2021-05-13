import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1:
  // have the default cart item -- should load this one via REST API call.
  // now mocking it wish static data
  private currentCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // Step 2: Create an obj of BehaviourSubject with the default value for subscribing first
  private cartItemsList = new BehaviorSubject(this.currentCartItems);

  // Step 3: Let's create an Observable for the above Behaviour Subject
  // so that any comp can subscribe to the Observable
  latestCartItems: Observable<any[]> = this.cartItemsList.asObservable();

  constructor() {

  }

  updateCartItems(pdt: any): void {
    console.log(pdt);

    // Let's now update the cart items
    this.latestCartItems.pipe( take(1)).subscribe( val => {
      console.log(val); // this will be an array of obj
      const newProductArr = [ ...val , pdt];
      console.log(newProductArr);
      this.cartItemsList.next(newProductArr);
    });
  }
}
