import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-meal',
  templateUrl: './single-meal.component.html',
  styleUrls: ['./single-meal.component.css']
})
export class SingleMealComponent {

  id : any
  singleMeal:any
  meals: any[] = []
  // cart: any

  constructor(private global : GlobalService , private _activatedRoute : ActivatedRoute , private _route : Router){
      this.global.getMeals().subscribe(res=>{
        this.meals = res.data
      })

      this._activatedRoute.paramMap.subscribe(params=>{
        console.log(params)
        let id = params.get('singleMealId')
        global.getSingleMeal(id).subscribe(res=>{
          this.singleMeal = res.data
        })
      })
  }
  mealsArray : any = []
  handleClick(data: any) {

    this.mealsArray.push(data)

    let oldCart = JSON.stringify(this.mealsArray)


    localStorage.setItem('cart' , oldCart)
  }

}

