import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TabledataComponent } from './Table/tabledata/tabledata.component';
//import { ChildcompComponent } from './Table/childcomp/childcomp.component';
import { AuthGuard } from './sharedservice/auth.guard';

import { HomeComponent } from './Table/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutusComponent } from './Table/aboutus/aboutus.component';
import { ContactComponent } from './Table/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    //TabledataComponent,
    //ChildcompComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
     FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
