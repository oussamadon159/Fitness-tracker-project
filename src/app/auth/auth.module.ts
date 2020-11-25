import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations:[
    SignupComponent,
    LoginComponent,
  ],
  imports:[
     SharedModule,
     AngularFireAuthModule,
    AuthRoutingModule],
  exports:[SignupComponent,LoginComponent],
})

export class AuthModule{}
