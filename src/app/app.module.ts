import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BaseComponent } from './HeptoComponent/base/base.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './HeptoComponent/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeriComponent } from './HeptoComponent/veri/veri.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    FormComponent,
    VeriComponent,
    MyProfileComponent,
    PersonProfileComponent,
    ChatBoxComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
