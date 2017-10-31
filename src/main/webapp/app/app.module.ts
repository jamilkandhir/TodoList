import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http,XHRBackend, RequestOptions } from '@angular/http';
import {DatePipe, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent }  from './app.component';
import { AppService } from "./providers/app.service";

import { CarouselModule} from 'ngx-bootstrap';
import {  } from "module";



@NgModule({

  imports: [ BrowserModule, FormsModule, HttpModule,ReactiveFormsModule
  ],      // module dependencies

  declarations: [ AppComponent],   // components

  bootstrap: [ AppComponent ],     // root component 
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AppService],                    // services
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
