import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { TrainingService } from './training.service';
import * as fromTraining from '../training/training.reducer'
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit{
 ongoinftraining$:Observable<boolean>;

  constructor(private trainingService:TrainingService,private store:Store<fromTraining.State>) { }

  ngOnInit(): void {
    // will fire whenevr we got a new exercise
    this.ongoinftraining$ = this.store.select(fromTraining.getIsTraining);

  }


}
