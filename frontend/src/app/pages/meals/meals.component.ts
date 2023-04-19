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
  handleClick(data:any) {
    localStorage.setItem('cart' , JSON.stringify(data))
    

// const writeToStorage = (data, key=`meals`) => localStorage.setItem(key, JSON.stringify(data))
  }
}
