import { AuthService } from './../../auth/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private store:Store<fromRoot.State>,private AuthService:AuthService) { }
isAuth$:Observable<boolean>;
  @Output() ToggleClicked = new EventEmitter<void>();
  ngOnInit(): void {
  this.isAuth$ =  this.store.select(fromRoot.getisAuth)

  }

  onToggle(){
  this.ToggleClicked.emit();
  }

  LogOut(){
  this.AuthService.logout();
  }
}
