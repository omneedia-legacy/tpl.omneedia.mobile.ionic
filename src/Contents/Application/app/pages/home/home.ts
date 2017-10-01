import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'app/pages/home/home.html'
})
export class HomePage {

  appName = 'Hello World';
  

  constructor(public navController: NavController) { 
  	App.onReady();
  }

}
