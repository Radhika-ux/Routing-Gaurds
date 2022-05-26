import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RegisterformComponent } from './registerform/registerform.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    RegisterformComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
