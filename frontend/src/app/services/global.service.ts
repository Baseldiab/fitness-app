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
    return this.http.patch(`${this.baseUrl}user/updatePImg` , obj)
  }


}
