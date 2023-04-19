import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getMeals():Observable<any>{
    return this.http.get("http://localhost:3000/fit/meal")
  }
  getSingleMeal(mealId:any):Observable<any>{
    return this.http.get(`http://localhost:3000/fit/meal/single/${mealId}`)
    // return this.http.get(`http://localhost:3000/fit/meal/single/643b51091f92757b0efe32fa`)
  }
}
