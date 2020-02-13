import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import {MatChipsModule} from '@angular/material/chips';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [TaskItemComponent, LoginComponent, NavigationComponent, SignUpComponent, TaskInfoComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatChipsModule,
  ],
  exports: [TaskItemComponent, NavigationComponent],
})
export class SharedModule { }
