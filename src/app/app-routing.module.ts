import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'edit/:id', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
