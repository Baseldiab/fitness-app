import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import {HttpClientModule} from '@angular/common/http';

import { CardComponent } from './components/card/card.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './pages/users/users.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './pages/login/login.component';
import { MealsComponent } from './pages/meals/meals.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingleMealComponent } from './pages/single-meal/single-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    CardComponent,
    UserFormComponent,
    UsersComponent,
    ErrorpageComponent,
    LoginComponent,
    MealsComponent,
    CartComponent,
    SingleMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
