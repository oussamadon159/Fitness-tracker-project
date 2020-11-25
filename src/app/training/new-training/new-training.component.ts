import { Exercice } from './../exercice.model';
import { TrainingService } from '../training.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Observable } from 'rxjs';
import * as fromTraining from '../../training/training.reducer'
import {  Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer'

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercices$:Observable<Exercice[]>
  constructor(private trainingService:TrainingService,private store:Store<fromTraining.State>) { }
   arr = [10, 20, 30, 40];
isLoading$:Observable<boolean>;
  ngOnInit(): void {
  this.isLoading$ = this.store.select(fromRoot.getisLoading);
  this.exercices$ = this.store.select(fromTraining.getAvailableExercises);
    this.Fetchfailed();
  }

  OnStartTraining(form:NgForm){
    const exercice = form.value.exercice;
    this.trainingService.StartExercise(exercice);
  }
  Fetchfailed(){
    this.trainingService.FetchExercices();
  }

}
