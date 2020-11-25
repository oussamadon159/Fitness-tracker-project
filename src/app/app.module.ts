import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { UIservice } from './shared/ui.service';
import { environment } from './../environments/environment';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavListComponent } from './header/nav-list/nav-list.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { AngularFireModule } from 'angularfire2';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavListComponent,
    ToolbarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    SharedModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [AuthService,AuthGuard,UIservice],
  bootstrap: [AppComponent],

})
export class AppModule { }
