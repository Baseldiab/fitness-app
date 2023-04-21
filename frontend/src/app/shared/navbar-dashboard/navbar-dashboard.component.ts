import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent {


  constructor(public global : GlobalService){

    console.log(global.isLogin)
  }

  handleClick(){
    localStorage.removeItem('token')
    this.global.isLogin = false
  }

}
