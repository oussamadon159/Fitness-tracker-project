import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable()

export class UIservice{

constructor(private SnackBar:MatSnackBar){

}

showSnackBar(message:string,action:string,duration:number){
  this.SnackBar.open(message,action,{
      duration:duration
  })
}

}
