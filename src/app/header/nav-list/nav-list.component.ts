import { AuthService } from './../../auth/auth.service';
import { Component, ElementRef, OnInit,Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {  Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit  {
  constructor(private authService:AuthService,private store:Store<fromRoot.State>) { }
  isAuth$:Observable<boolean>;
 @Output() OnCloseToggle = new EventEmitter<void>();
  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getisAuth);
  }
  onClose(){
  this.OnCloseToggle.emit();
  }

  onLogout(){
   this.authService.logout();
  }
}
