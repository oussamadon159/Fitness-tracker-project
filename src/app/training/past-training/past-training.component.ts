import { Exercice } from './../exercice.model';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import * as fromTraining from '../training.reducer';
@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit,AfterViewInit {
  dataSource= new MatTableDataSource<Exercice>();  // an object ;
  displayedColumns=['date','name','duration','calories','state'];
  training:boolean;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild('paginator') paginator:MatPaginator;
  constructor(private trainingService:TrainingService,private store:Store<fromTraining.State>) { }

  ngOnInit(): void {
    this.trainingService.fetchCompletedOrCancelledExercises();
  this.store.select(fromTraining.getFinishedExercises).subscribe(
      exercises=>{
        this.dataSource.data = exercises
      }
    )

  }
ngAfterViewInit(){
  setTimeout(() => {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }, 2000);

}
doFilter(userinput:string){
  this.dataSource.filter = userinput.trim().toLowerCase();
}


}












  //  let element gives us access to a property
  //   which will be passed to us by the materialTableComponent
  //    so we can actually output the value through stringInterpolation
