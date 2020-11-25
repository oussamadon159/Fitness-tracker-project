import { StoreModule } from '@ngrx/store';
import { PastTrainingComponent } from './past-training/past-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentComponent } from './current/current.component';
import { TrainingComponent } from './training.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StopTrainingComponent } from './current/stop-training.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { trainingRecucer } from './training.reducer'
@NgModule({
  declarations:[
    TrainingComponent,
    CurrentComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent
  ],
  imports:[
    SharedModule,
    RouterModule.forChild([
      {path:'',component:TrainingComponent},
    ]),
   StoreModule.forFeature('training',trainingRecucer),
  ],
  exports:[
    TrainingComponent,
    CurrentComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    StopTrainingComponent,
  ],
  entryComponents:[StopTrainingComponent],
})


export class TrainingModule{}
