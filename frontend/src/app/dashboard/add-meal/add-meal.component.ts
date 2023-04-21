import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent {
  img: any
  model = {
    mealName: "",
    meal: "",
    mealCatogery: "",
    content: "",
    price: ""
  }
  constructor(private global: GlobalService) { }
  handleChange(eve: any) {
    console.log(eve)
    this.img = eve.target.files[0]
  }

  handleSubmit(form : NgForm) {
    let formData = new FormData()
    formData.append('img', this.img)
    formData.append('mealName', this.model.mealName )
    formData.append('meal', this.model.meal )
    formData.append('mealCatogery', this.model.mealCatogery )
    formData.append('content', this.model.content )
    formData.append('price', this.model.price )


    this.global.addMeals(formData).subscribe(data => {
      console.log(data)
    })

  }
}
