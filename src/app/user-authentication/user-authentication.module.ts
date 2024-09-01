import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Toast, ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserAuthenticationRoutingModule,
    FieldsetModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ]
})
export class UserAuthenticationModule { }
