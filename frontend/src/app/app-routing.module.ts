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

const routes: Routes = [
  {path:'' , component : IndexComponent},
  {path:'users' , component : UsersComponent},
  { path: 'login', component: LoginComponent },

  // =================
  {path:'meals' , children:[
    {path:'' , component : MealsComponent },
    {path:':singleMealId' , component : SingleMealComponent },
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
