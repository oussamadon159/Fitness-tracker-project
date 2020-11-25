import { UIservice } from './../shared/ui.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Exercice } from './exercice.model';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training/training.reducer'
import * as uiActions from '../shared/ui.actions'
import * as training from '../training/training.actions';
@Injectable({providedIn:'root'})

export class TrainingService{






private runningExercice:Exercice; // this should store the exercice which the user select
private fbsubs:Subscription[]=[];
constructor(private db:AngularFirestore,private uiService:UIservice,private store:Store<fromTraining.State>){}
FetchExercices(){
  // this.uiService.loadingstateChanged.next(true)
  this.store.dispatch( new uiActions.StartLoading() )
  this.fbsubs.push(this.db.collection('availableExercises').snapshotChanges()
  .pipe(map(
    docArray=>{
      // throw(new Error())
     return docArray.map(doc=>{
      return {
        id:doc.payload.doc['id'],
        name:doc.payload.doc.data()['name'],
        duration:doc.payload.doc.data()['duration'],
        calories:doc.payload.doc.data()['calories'],
      }
      })
    }
  ))
  .subscribe((exercices:Exercice[])=>{
    setTimeout(()=>{
      // this.uiService.loadingstateChanged.next(false)
      this.store.dispatch( new uiActions.StopLoading() );
      this.store.dispatch( new training.SetAvailbaleTrainings(exercices));
    },1000)


 },error=>{
  // this.uiService.loadingstateChanged.next(false)
  this.store.dispatch( new uiActions.StopLoading() )
  this.uiService.showSnackBar('Fetching Exercises failed , please try again.','Close',3000)
 }))
}

StartExercise(exerciseId:string){
  // this.db.doc('availableExercises/' + exerciseId).update({lastselected:new Date()})
  // return true if ex.id === exerciceId i pass trough the method
  // this.runningExercice is the exercise which the user select
   this.store.dispatch(new training.StartTraining(exerciseId))

  // {...object} i don't want to return the same object im storing in the service.
}


completeExercice(){
  this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(
    ex=>{
      this.addDataToDatabase({
        ...ex,
        date:new Date(),
        state:'completed'
      });
      this.store.dispatch( new training.StopTraining() );
    }
  )

}

cancelExercice(progress:number){
  this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(
    ex=>{
      this.addDataToDatabase({
        ...ex,
          duration:ex.duration * (progress / 100),
          calories: ex.calories * (progress / 100),
        date:new Date(),
        state:'cancelled'
      });
      this.store.dispatch( new training.StopTraining() );
    }
  )

}

fetchCompletedOrCancelledExercises() {
  // valueChanges gives you access to only the values in the document & snapshotChanges gives you access to id & values of document
 this.fbsubs.push(this.db
  .collection('finishedExercices')
  .valueChanges()
  .subscribe((exercises: Exercice[]) => {
    this.store.dispatch( new training.SetFinishedTrainings(exercises));
  }))
}

cancelSubscriptions(){
  this.fbsubs.forEach(subs=>{
    subs.unsubscribe();
  })
}
private addDataToDatabase(exercise: Exercice) {
  this.db.collection('finishedExercices').add(exercise);
}


}




// getAllExercises(){
//   this.db.collection('finishedExercices').valueChanges().subscribe((exercises:Exercice[])=>{
//     // console.log(exercises)
//     this.Exercises = exercises;
//     this.FinishedExercisesChanges.next(exercises);
//   })
// }
// private AddDataToDataBase(exercice:Exercice){
//   // if a collection doesn't exist in the database it will be created automaticlly for you
//    this.db.collection('finishedExercices').add(exercice); // add() return a promise
// }

