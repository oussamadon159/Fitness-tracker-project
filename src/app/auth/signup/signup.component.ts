
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate;
  subsciption:Subscription;
  error:string;
  isloading$:Observable<boolean>;
  constructor(private authservice:AuthService,private store:Store<fromRoot.State>) { }
  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
   this.isloading$ = this.store.select(fromRoot.getisLoading);
  }

  SubmitForm(form:NgForm){
  const email  = form.value.email;
  const password = form.value.password;
  this.authservice.registerUser({email,password});
}

}
