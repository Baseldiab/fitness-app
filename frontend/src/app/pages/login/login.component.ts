import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: User = {
    email: '',
    password: '',
  }
  msgError = null
  userType: any

  constructor(private global: GlobalService, private router: Router,
    private Activatedroute: ActivatedRoute) {

    this.Activatedroute.data.subscribe(res => {
      console.log(res)
      this.userType = res['userType']
      if (this.userType == 'admin') this.global.navbarFlag = false
      // this.global.isLogin = true
      console.log(this.userType)
    })
  }
  handleSubmit(form: NgForm) {
    // console.log(form)
    if (form.valid) {
      if (this.userType == 'user') {
        this.global.userLogin(this.model).subscribe(res => {
          console.log(res)
          this.global.isLogin = true
          localStorage.setItem('token', res.data.token)
          if (res.apiStatus) this.router.navigateByUrl('/meals')
          // ahmed12@gmail.com
          // 123456
        }, (e) => {
          console.log(e.error.message)
          this.msgError = e.error.message
        })
        // baseldiab120@gmail.com
        //  bass23456789
      } else if (this.userType == 'admin') {
        this.global.userLogin(this.model).subscribe(res => {
          console.log(res)
          localStorage.setItem('token', res.data.token)
          this.router.navigateByUrl('dashboard/dashboard')
          this.global.isLogin = true
          this.global.navbarFlag = false
        }, (e) => {
          console.log(e.error.message)
          this.msgError = e.error.message
        })
      }
    }
  }
}
