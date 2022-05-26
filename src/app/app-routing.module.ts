import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './sharedservice/auth.guard';
import { ChildAuthGuard } from './sharedservice/child-auth.guard';


import { AboutusComponent } from './Table/aboutus/aboutus.component';
import { ContactComponent } from './Table/contact/contact.component';
import { UserComponent } from './Table/contact/user/user.component';
import { HomeComponent } from './Table/home/home.component';

const routes: Routes = [
 
  { path: "", component: HomeComponent} ,
  { path: "aboutus", component: AboutusComponent, canActivate: [AuthGuard] },
  { path: "contact", component: ContactComponent},
  { path: "contact", component: ContactComponent,canActivateChild:[ChildAuthGuard],

  children:[
    {path: "registerform", component: UserComponent},
  ] },

 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
