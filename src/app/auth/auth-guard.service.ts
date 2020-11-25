import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';
import * as fromRoot from '../app.reducer'
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';


@Injectable()


export class AuthGuard implements CanActivate,CanLoad{
isAuth:boolean;

  constructor(private store:Store<fromRoot.State>){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree{

    return this.store.select(fromRoot.getisAuth).pipe(take(1));


  }
  canLoad(route:Route):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree{
    return this.store.select(fromRoot.getisAuth).pipe(take(1));
  }
}
