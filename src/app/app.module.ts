import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalarieComponent } from './salarie/salarie.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from 'primeng-lts/inputtext';
import {ToastModule} from 'primeng-lts/toast';
import {MessageService} from 'primeng-lts/api';
import {MessageModule} from "primeng-lts/message";
import {ButtonModule} from "primeng-lts/button";
import {TableModule} from "primeng-lts/table";
@NgModule({
  declarations: [
    AppComponent,
    SalarieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MessageModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
