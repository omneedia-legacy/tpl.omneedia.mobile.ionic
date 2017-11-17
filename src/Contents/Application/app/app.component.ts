import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';

import { App } from '@omneedia/app';

import { HomePage } from '../pages/home/home';

@Component({
	templateUrl: 'app.html'
})

export class MyApp {

	rootPage:any = HomePage;

	constructor(platform: Platform, statusBar: StatusBar, globalization: Globalization, translate: TranslateService ) {
			platform.ready().then(() => {
				App.onReady();
				globalization.getPreferredLanguage()
				.then(function(res) {
					translate.setDefaultLang(res.value);
				})
				.catch(e => console.log(e));
				statusBar.styleDefault();
			});
	  }
	
}