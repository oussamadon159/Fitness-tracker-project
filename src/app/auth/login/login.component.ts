import { map } from 'rxjs/operators';
import { UIservice } from './../../shared/ui.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private uiService:UIservice,
    private store:Store<fromRoot.State>) { }
  emailvalue="oussama.don159@gmail.com";
  pwvalue="skydrive147258";
  error:string;
  subsciption:Subscription;
  login = true;
  isLoading$:Observable<boolean>;
  ngOnInit(): void {
    // map allows us to transform the value
 this.isLoading$ = this.store.select(fromRoot.getisLoading)
//  this.subsciption =  this.uiService.loadingstateChanged.subscribe(
//      loadingSpinner=>{
//       this.isLoading = loadingSpinner;
//      }
//    )
  }
  Login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.login = false;
    this.authService.login({email,password})
  }

}
