import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/CartService';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {
  food!: Food;

  constructor(private activateRoute:ActivatedRoute,
    private foodService:FoodService,
    private cartService:CartService,
    private router:Router) {
    activateRoute.params.subscribe(params =>{
      if (params['id']){
        this.food = foodService.getFoodByID(params['id']);
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
