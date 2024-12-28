import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { AboutComponent } from './about/about.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {
    path : "Home",
    component : MyFirstCompComponent
  },
  
  {
    path : "About",
    component : AboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
