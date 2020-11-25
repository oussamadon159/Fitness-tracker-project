import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/auth-guard.service';



const appRoutes:Routes=[
{path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'welcome',component:WelcomeComponent},
{path:'training',loadChildren:()=>import('./training/training.module').then(m=>m.TrainingModule),canLoad:[AuthGuard]}
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule],
  providers:[],
})



export class AppRoutingModule{}
