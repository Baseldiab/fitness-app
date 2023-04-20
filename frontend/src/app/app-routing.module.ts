import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { MealsComponent } from './pages/meals/meals.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingleMealComponent } from './pages/single-meal/single-meal.component';
import { AddMealComponent } from './dashboard/add-meal/add-meal.component';
import { DeleteMealComponent } from './dashboard/delete-meal/delete-meal.component';
import { EditMealComponent } from './dashboard/edit-meal/edit-meal.component';
import { ShowAllUsersComponent } from './dashboard/show-all-users/show-all-users.component';
import { UpdateImageComponent } from './dashboard/update-image/update-image.component';

const routes: Routes = [
  {path:'' , component : IndexComponent},
  {path:'users' , component : UsersComponent},
  // { path: 'login', component: LoginComponent },

  // =================
  {path:'meals' , children:[
    {path:'' , component : MealsComponent },
    {path:':singleMealId' , component : SingleMealComponent },
  ]
  },
// =================
  { path: 'login', component: LoginComponent, data: { userType: 'user' } },
// =================
    {path: 'dashboard', children: [
      { path: '', component: LoginComponent, data: { userType: 'admin' } },
      { path: 'addMeal', component: AddMealComponent  },
      { path: 'deleteMeal', component: DeleteMealComponent  },
      { path: 'editMeal', component: EditMealComponent  },
      { path: 'showAllUser', component: ShowAllUsersComponent  },
      { path: 'uploadImage', component: UpdateImageComponent  },
    ]
  },
  // =================
  {path:'cart' , component : CartComponent},
  {path:"**" , component : ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
