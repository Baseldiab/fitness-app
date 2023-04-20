import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { CardComponent } from './components/card/card.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './pages/users/users.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './pages/login/login.component';
import { MealsComponent } from './pages/meals/meals.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingleMealComponent } from './pages/single-meal/single-meal.component';
import { AddMealComponent } from './dashboard/add-meal/add-meal.component';
import { EditMealComponent } from './dashboard/edit-meal/edit-meal.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { DeleteMealComponent } from './dashboard/delete-meal/delete-meal.component';
import { ShowAllUsersComponent } from './dashboard/show-all-users/show-all-users.component';
import { UpdateImageComponent } from './dashboard/update-image/update-image.component';

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
    SingleMealComponent,
    AddMealComponent,
    EditMealComponent,
    DeleteMealComponent,
    ShowAllUsersComponent,
    UpdateImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
