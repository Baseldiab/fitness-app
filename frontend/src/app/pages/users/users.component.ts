import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/interfaces/new-user';
import { User } from 'src/app/interfaces/user';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  model : NewUser = {
    fname: '',
    lname: '',
    email: '',
    password : '',
    age : 25 ,
    gender: null,
    phone : '',
    addresses : ''
  }
  modellog : User  ={
    email : this.model.email,
    password : this.model.password
  }
  msgError=null

  constructor(private global : GlobalService , private router : Router){}

  handleSubmit(form: NgForm){

    if(form.valid){


      this.global.register(this.model).subscribe( res=>{
        if(res.apiStatus){
         const modelLogin ={
            email : this.model.email,
            password : this.model.password
          }

            this.global.userLogin(modelLogin).subscribe(res=>{

            localStorage.setItem('token' , res.data.token)
                this.global.isLogin = true
                if(res.apiStatus) this.router.navigateByUrl('/meals')
          },
          (e)=>{
            this.msgError = e.error.message
          }
          )

      }
      },
      (e)=>{
        this.msgError = e.error.message
      }
      )
    }

  }
}
