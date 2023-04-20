import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent {
  meals: any[] = []
  constructor(public global: GlobalService) {

    this.global.getMeals().subscribe(data => {
      console.log(data)
      this.meals = data.data
    })
  }
  mealsArray : any = []
  handleClick(data: any) {

    this.mealsArray.push(data)

    let oldCart = JSON.stringify(this.mealsArray)


    localStorage.setItem('cart' , oldCart)
  }

  }

