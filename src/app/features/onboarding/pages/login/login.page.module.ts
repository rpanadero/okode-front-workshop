import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-routing.page.module';
import { LoginPage } from './login.page';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule
  ]
})
export class LoginPageModule { }
