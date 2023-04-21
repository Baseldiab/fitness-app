import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = "http://localhost:3000/fit/"
  isLogin = false
  navbarFlag = true

  constructor(private http: HttpClient) { }

  getMeals():Observable<any>{
    return this.http.get(`${this.baseUrl}meal`)
  }

  getSingleMeal(mealId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}meal/single/${mealId}`)
  }
  // admin
   // baseldiab120@gmail.com
  //  bass23456789

  // user
  //// ahmed12@gmail.com
          // 123456
  userLogin(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/login` , data)
  }

  updateImage(obj:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/updatePImg` , obj)
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.baseUrl}user/`)
  }

  addMeals(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}meal/add`, data)
  }
  editMeals(mealId:any, data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}meal/single/${mealId}`, data)
  }
  register(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/register/` , data)
  }

}
