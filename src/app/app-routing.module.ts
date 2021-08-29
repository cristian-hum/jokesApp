import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { JokesListComponent } from './jokes-list/jokes-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: "home", 
    component:JokesListComponent
  },
  {
    path: "",
    component: LoginComponent
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
