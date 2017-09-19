import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'app/pages/home/home.html'
})
export class HomePage {

  appName = 'Ionic App';
  

  constructor(public navController: NavController) { 
  	App.onReady();
  }

}
