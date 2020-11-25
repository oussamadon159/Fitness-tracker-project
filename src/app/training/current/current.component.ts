import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training.service';
import { StopTrainingComponent } from './stop-training.component';
import * as fromTraining from '../training.reducer';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
progress= 0;
timer:number;
name:string;
goingtraining:boolean
constructor(private dialog:MatDialog,private trainingService:TrainingService,private store:Store<fromTraining.State>) { }
  ngOnInit(): void {

   this.StartorResumeTimer();

  }

  StartorResumeTimer(){
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(
      ex=>{
        const step = ex.duration  / 100 * 1000;
        this.timer =  setInterval(()=>{
          this.progress = this.progress + 1;
          if(this.progress >=100){
            this.trainingService.completeExercice();
            clearInterval(this.timer);
          }
        },step);
      }
    );

  }

  onStop(){
    clearInterval(this.timer)
  const dialogRef =  this.dialog.open(StopTrainingComponent,
      {data:{
        progress:this.progress,
      }}
        );

        dialogRef.afterClosed().subscribe(result=>{
     if(result){
     this.trainingService.cancelExercice(this.progress);
     }
     else{
       this.StartorResumeTimer();
     }
   });
  }
}
