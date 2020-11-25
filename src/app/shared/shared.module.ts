import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';




@NgModule({
  imports:[
    CommonModule,
    FormsModule,
  ReactiveFormsModule,
AngularMaterialModule,
FlexLayoutModule],
  exports:[   CommonModule,
    FormsModule,
  ReactiveFormsModule,
AngularMaterialModule,
FlexLayoutModule],
})

export class SharedModule{}
