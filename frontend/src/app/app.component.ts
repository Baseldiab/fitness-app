import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's16';

  msgError = null
  userType: any

  constructor(public global: GlobalService, private router: Router,
    private Activatedroute: ActivatedRoute) {

      let token = localStorage.getItem('token')
      if(token){
        global.isLogin = true
      }
      this.Activatedroute.data.subscribe(res => {
        console.log(res)
        this.userType = res['userType']
        if (this.userType == 'admin')
          this.global.navbarFlag = false
          this.global.isLogin = true
          console.log(this.userType)
      })
  }


}
