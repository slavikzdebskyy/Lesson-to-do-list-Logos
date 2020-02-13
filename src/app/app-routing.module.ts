import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {ToDoListComponent} from './core/to-do-list/to-do-list.component';
import {SignUpComponent} from './shared/sign-up/sign-up.component';
import {TaskInfoComponent} from './shared/task-info/task-info.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: ToDoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'task/:id',
    component: TaskInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
