import { AuthService } from './auth/auth.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from './training/training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  condition:boolean;
// local reference are accessible only in the component was created into (#);
 constructor(private authService:AuthService){}


 ngOnInit(){
   this.authService.initAuthListener();
 }
}
