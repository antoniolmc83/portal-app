import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserService } from './user/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {CdkTableModule} from '@angular/cdk/table';
import 'hammerjs';


import {MatSlideToggleModule
        //,
        //MatDatepickerModule,
        //MatFormFieldModule,
        //MatInputModule,
        //MatNativeDateModule
      } from '@angular/material';

import {
        MatMomentDateModule
      } from '@angular/material-moment-adapter';          

@NgModule({
  exports: [
    MatSlideToggleModule,
    //MatDatepickerModule,
    //MatMomentDateModule,
    //MatFormFieldModule,
    //MatInputModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //MatInputModule,
    //MatFormFieldModule,
    MatSlideToggleModule,
    //MatDatepickerModule,
    MatMomentDateModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
