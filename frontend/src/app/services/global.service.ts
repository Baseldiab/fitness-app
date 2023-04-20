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

  constructor(private http : HttpClient) { }

  getMeals():Observable<any>{
    return this.http.get(`${this.baseUrl}meal`)
  }
  getSingleMeal(mealId:any):Observable<any>{
    return this.http.get(`${this.baseUrl}meal/single/${mealId}`)

    // return this.http.get(`http://localhost:3000/fit/meal/single/643b51091f92757b0efe32fa`)
  }

   // baseldiab120@gmail.com
  //  bass23456789
  
  //  Login(data: any):Observable<any>{
  //   return this.http.post(`${this.baseUrl}user/login` , data)
  //  }

  //// ahmed12@gmail.com
          // 123456
  userLogin(data: any):Observable<any>{
    return this.http.post(`${this.baseUrl}user/login` , data)
  }

  // userLogin(obj:any) :  Observable<any>{
  //   return this.http.post(`${this.baseUrl}user/login` , obj)
  // }

  updateImage(obj:any):Observable<any>{
    return this.http.patch(`${this.baseUrl}user/updatePImg` , obj)
  }


}
