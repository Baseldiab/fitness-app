import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent {
  singleMeal: any
  id: any
  img: any
  model = {
    mealName: "",
    meal: "",
    mealCatogery: "",
    content: "",
    price: ""
  }

  image: any
  constructor(private global: GlobalService, private activeRouter: ActivatedRoute) {

  }
    handleChange(eve : any){
      this.image = eve.target.files[0]
    }
  handleSubmit(form: NgForm) {
    if (form.valid) {
      let formData = new FormData()
      formData.append('img', this.img)
      formData.append('mealName', this.model.mealName)
      formData.append('meal', this.model.meal)
      formData.append('mealCatogery', this.model.mealCatogery)
      formData.append('content', this.model.content)
      formData.append('price', this.model.price)

    }
  }
}
