import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent {

  img : any

  constructor(private global : GlobalService){}
  handleChange(eve :any){
    console.log(eve)
    this.img = eve.target.files[0]
  }

  handleSubmit(){
    let formData = new FormData()
    formData.append('img' , this.img)

    this.global.updateImage(formData).subscribe(data=>{
      console.log(data)
    })
  }

}
