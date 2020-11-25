import { UIservice } from './../shared/ui.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';

@Injectable()
// the goal of the service is in the end allow us to fake thne user login
export class AuthService{

private user:User;
errorMessage = new BehaviorSubject<string>(null);
constructor(
  private router:Router,
  private afAuth:AngularFireAuth,
  private trainingService:TrainingService,
  private uiService:UIservice,
  private store:Store<fromRoot.State>){}


initAuthListener(){
  this.afAuth.authState.subscribe(User=>{
    if(User){
      // this.userisAuth.next(true);
      this.store.dispatch(new Auth.SetAuthenticated() )
      this.router.navigate(['/training']);
    }else{
      this.trainingService.cancelSubscriptions();
      this.user = null;
      this.store.dispatch(new Auth.SetUnAuthenticated() )
      this.store.dispatch(new UI.StopLoading)
      this.errorMessage.next(null);
      this.router.navigate(['/login']);
    }
  });
}

registerUser(authData:AuthData){
  // this.uiService.loadingstateChanged.next(true);
  this.store.dispatch(new UI.StartLoading)
 this.afAuth.auth
 .createUserWithEmailAndPassword(
   authData.email,
   authData.password).then(result=>{
    // this.uiService.loadingstateChanged.next(false);
    this.store.dispatch(new UI.StopLoading);


   }).catch(error=>{
    // this.uiService.loadingstateChanged.next(false);
    this.store.dispatch(new UI.StopLoading)
    this.uiService.showSnackBar(error.message,'Close',4000);

  })
}

login(authData:AuthData){
  // this.uiService.loadingstateChanged.next(true);
  this.store.dispatch(new UI.StartLoading)

 this.afAuth.auth.signInWithEmailAndPassword(
   authData.email,
   authData.password
   ).then(response=>{
    // this.uiService.loadingstateChanged.next(false);
    this.store.dispatch(new UI.StopLoading)

   }).catch(error=>{
    // this.uiService.loadingstateChanged.next(false);
    this.store.dispatch(new UI.StopLoading)
    this.uiService.showSnackBar(error.message,'Close',4000);

   })
}
logout(){
  this.afAuth.auth.signOut();
  this.store.dispatch( new Auth.SetUnAuthenticated() )
}
getUser(){
  return {...this.user};
}
isAuth(){
  return this.user !== null;
}


}
