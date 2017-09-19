import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';

import { HomePage } from './pages/home/home';

@NgModule({
  	imports: [ 	
		IonicModule.forRoot(AppComponent),
  		BrowserModule
	],
  	declarations: [ 
		AppComponent, 
		HomePage 
	],
  	entryComponents: [ 
		HomePage 
	],
  	providers: [
    	{provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
  	bootstrap: [ IonicApp ]
})

export class AppModule { 

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/