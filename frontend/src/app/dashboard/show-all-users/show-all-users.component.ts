import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent {

  users: any[] = []
  
  constructor(private global: GlobalService) {

    this.global.getAllUsers().subscribe(data => {
      console.log(data)
      this.users = data.data
    })
  }

}
